// qiCalculator.js
import { qiCharacteristics, traditionalElements } from './qiParameters.js';

export class QiCalculator {
    constructor(tea) {
        this.tea = tea;
        this.qiProfile = {
            characteristics: [],
            bodyFocus: [],
            mentalEffects: [],
            intensity: 0,
            category: 'neutral',
            progression: {
                initial: [],
                peak: [],
                finish: []
            },
            energyFlow: '',
            duration: '',
            peakTiming: '',
            temperatureBalance: {
                warmingScore: 0,
                coolingScore: 0,
                warmingPercent: 0,
                coolingPercent: 0
            },
            fivePhases: {
                scores: {},
                dominant: '',
                supporting: '',
                characteristics: []
            },
            yinYangBalance: {
                yinScore: 0,
                yangScore: 0,
                yinPercent: 0,
                yangPercent: 0,
                dominantAspect: '',
                balanceDescription: '',
                characteristics: []
            }
        };

        this.ensureArrays();
    }

    ensureArrays() {
        const arrayProps = ['characteristics', 'bodyFocus', 'mentalEffects'];
        arrayProps.forEach(prop => {
            if (!Array.isArray(this.qiProfile[prop])) {
                this.qiProfile[prop] = [];
            }
        });

        if (!this.qiProfile.progression) {
            this.qiProfile.progression = {};
        }
        ['initial', 'peak', 'finish'].forEach(phase => {
            if (!Array.isArray(this.qiProfile.progression[phase])) {
                this.qiProfile.progression[phase] = [];
            }
        });
    }

    calculateBaseProfile() {
        const baseType = qiCharacteristics.teaTypeBase[this.tea.type.toLowerCase()];
        if (baseType) {
            if (Array.isArray(baseType.energy)) {
                this.qiProfile.characteristics.push(...baseType.energy);
            }
            if (Array.isArray(baseType.baseBodyFocus)) {
                this.qiProfile.bodyFocus.push(...baseType.baseBodyFocus);
            }
            if (Array.isArray(baseType.baseMentalState)) {
                this.qiProfile.mentalEffects.push(...baseType.baseMentalState);
            }
            this.qiProfile.intensity += baseType.intensity || 0;
        }
    }

    calculateCompoundEffects() {
        if (this.tea.lTheanineLevel && this.tea.caffeineLevel) {
            const ratio = this.tea.lTheanineLevel / this.tea.caffeineLevel;
            let effectProfile;

            if (ratio >= qiCharacteristics.compoundRatios.highTheanine.threshold) {
                effectProfile = qiCharacteristics.compoundRatios.highTheanine;
            } else if (ratio >= qiCharacteristics.compoundRatios.balanced.threshold) {
                effectProfile = qiCharacteristics.compoundRatios.balanced;
            } else {
                effectProfile = qiCharacteristics.compoundRatios.highCaffeine;
            }

            this.qiProfile.characteristics.push(...effectProfile.energy);
            this.qiProfile.bodyFocus.push(effectProfile.bodyFocus);
            this.qiProfile.mentalEffects.push(...effectProfile.mentalState);
            this.qiProfile.intensity += effectProfile.intensity;

            // Add to temperature balance
            if (ratio > 2) {
                this.qiProfile.temperatureBalance.coolingScore += 1.5;
            } else if (ratio < 1) {
                this.qiProfile.temperatureBalance.warmingScore += 1.0;
            }
        }
    }

    calculateProcessingEffects() {
        if (this.tea.processingMethods && this.tea.processingMethods.length > 0) {
            this.tea.processingMethods.forEach(method => {
                const effect = qiCharacteristics.processingEffects[method.toLowerCase()];
                if (effect) {
                    this.qiProfile.characteristics.push(...effect.energy);
                    this.qiProfile.bodyFocus.push(effect.bodyFocus);
                    this.qiProfile.mentalEffects.push(...effect.mentalState);
                    this.qiProfile.intensity += effect.intensity;

                    // Add to temperature balance
                    if (effect.category === 'warming') {
                        this.qiProfile.temperatureBalance.warmingScore += effect.intensity * 0.8;
                    } else if (effect.category === 'cooling') {
                        this.qiProfile.temperatureBalance.coolingScore += effect.intensity * 0.8;
                    }
                }
            });
        }
    }

    calculateTemperatureBalance() {
        let warmingScore = this.qiProfile.temperatureBalance.warmingScore;
        let coolingScore = this.qiProfile.temperatureBalance.coolingScore;

        // Add base tea type influence
        const teaType = this.tea.type.toLowerCase();
        switch(teaType) {
            case 'green':
                coolingScore += 2;
                break;
            case 'white':
                coolingScore += 1.5;
                break;
            case 'black':
                warmingScore += 2;
                break;
            case 'puerh':
                warmingScore += 2.5;
                break;
            case 'oolong':
                // Depends on oxidation level
                if (this.tea.oxidationLevel && this.tea.oxidationLevel > 50) {
                    warmingScore += 1.5;
                } else {
                    coolingScore += 1;
                }
                break;
            case 'yellow':
                coolingScore += 1;
                break;
        }

        const totalScore = warmingScore + coolingScore;
        const warmingPercent = (warmingScore / totalScore) * 100;
        const coolingPercent = (coolingScore / totalScore) * 100;

        this.qiProfile.temperatureBalance = {
            warmingScore: warmingScore.toFixed(1),
            coolingScore: coolingScore.toFixed(1),
            warmingPercent: warmingPercent.toFixed(1),
            coolingPercent: coolingPercent.toFixed(1)
        };

        if (warmingPercent > 60) {
            this.qiProfile.category = 'warming';
        } else if (coolingPercent > 60) {
            this.qiProfile.category = 'cooling';
        } else {
            this.qiProfile.category = 'neutral';
        }
    }

    calculateFivePhases() {
        const phases = {
            wood: 0,
            fire: 0,
            earth: 0,
            metal: 0,
            water: 0
        };

        // Tea Type Base Influence
        const teaType = this.tea.type.toLowerCase();
        const typeAssociation = traditionalElements.teaTypePhaseAssociations[teaType];
        if (typeAssociation) {
            phases[typeAssociation.primary] += 2.0;
            phases[typeAssociation.secondary] += 1.0;
        }

        // Processing Methods Influence
        if (this.tea.processingMethods) {
            this.tea.processingMethods.forEach(method => {
                Object.entries(traditionalElements.fivePhases).forEach(([phase, data]) => {
                    if (data.processingAffinity.some(p => method.toLowerCase().includes(p))) {
                        phases[phase] += data.intensity * 0.8;
                    }
                });
            });
        }

        // Flavor Profile Influence
        if (this.tea.flavorProfile) {
            this.tea.flavorProfile.forEach(flavor => {
                Object.entries(traditionalElements.fivePhases).forEach(([phase, data]) => {
                    if (data.flavorAffinity.some(f => flavor.toLowerCase().includes(f))) {
                        phases[phase] += data.intensity * 0.5;
                    }
                });
            });
        }

        // Calculate dominant and supporting phases
        const sortedPhases = Object.entries(phases)
            .sort(([,a], [,b]) => b - a)
            .reduce((acc, [phase, score]) => {
                acc[phase] = score;
                return acc;
            }, {});

        this.qiProfile.fivePhases = {
            scores: sortedPhases,
            dominant: Object.keys(sortedPhases)[0],
            supporting: Object.keys(sortedPhases)[1],
            characteristics: this.deriveFivePhaseCharacteristics(sortedPhases)
        };
    }

    calculateYinYangBalance() {
        let yinScore = 0;
        let yangScore = 0;

        // Tea Type Base Influence
        const teaType = this.tea.type.toLowerCase();
        const typeAssociation = traditionalElements.teaTypePhaseAssociations[teaType];
        if (typeAssociation) {
            switch(typeAssociation.yinYangBalance) {
                case 'yin':
                    yinScore += 2.0;
                    break;
                case 'slightly_yin':
                    yinScore += 1.5;
                    yangScore += 0.5;
                    break;
                case 'balanced':
                    yinScore += 1.0;
                    yangScore += 1.0;
                    break;
                case 'slightly_yang':
                    yangScore += 1.5;
                    yinScore += 0.5;
                    break;
                case 'yang':
                    yangScore += 2.0;
                    break;
            }
        }

        // Processing Methods Influence
        if (this.tea.processingMethods) {
            this.tea.processingMethods.forEach(method => {
                if (traditionalElements.yinYangBalance.yang.processingMethods
                    .some(p => method.toLowerCase().includes(p))) {
                    yangScore += 1.0;
                }
                if (traditionalElements.yinYangBalance.yin.processingMethods
                    .some(p => method.toLowerCase().includes(p))) {
                    yinScore += 1.0;
                }
            });
        }

        // Compound Ratio Influence
        if (this.tea.lTheanineLevel && this.tea.caffeineLevel) {
            const ratio = this.tea.lTheanineLevel / this.tea.caffeineLevel;
            if (ratio > 2) {
                yinScore += 1.5;
            } else if (ratio < 1) {
                yangScore += 1.5;
            } else {
                yinScore += 0.75;
                yangScore += 0.75;
            }
        }

        // Calculate balance
        const totalScore = yinScore + yangScore;
        const yinPercent = (yinScore / totalScore) * 100;
        const yangPercent = (yangScore / totalScore) * 100;

        this.qiProfile.yinYangBalance = {
            yinScore: yinScore.toFixed(1),
            yangScore: yangScore.toFixed(1),
            yinPercent: yinPercent.toFixed(1),
            yangPercent: yangPercent.toFixed(1),
            dominantAspect: yinScore > yangScore ? 'yin' : 'yang',
            balanceDescription: this.calculateYinYangDescription(yinPercent, yangPercent),
            characteristics: this.deriveYinYangCharacteristics(yinPercent, yangPercent)
        };
    }

    determineEnergyFlow() {
        const bodyFocus = this.qiProfile.bodyFocus;

        if (bodyFocus.includes('upper') && bodyFocus.includes('lower')) {
            return 'Full circulation, moving from ' + 
                   (bodyFocus.indexOf('upper') < bodyFocus.indexOf('lower') ? 
                   'top to bottom' : 'bottom to top');
        } else if (bodyFocus.includes('upper')) {
            return 'Rising energy, focused in upper body';
        } else if (bodyFocus.includes('lower')) {
            return 'Grounding energy, focused in lower body';
        } else {
            return 'Balanced, centered energy flow';
        }
    }

    determineDuration() {
        const intensity = this.qiProfile.intensity;
        const hasAged = this.tea.processingMethods.some(m => 
            m.toLowerCase().includes('aged') || m.toLowerCase().includes('fermented'));
        
        if (hasAged) {
            return 'Long-lasting (2-3 hours)';
        } else if (intensity > 7) {
            return 'Medium to long (1-2 hours)';
        } else if (intensity > 4) {
            return 'Medium (45-60 minutes)';
        } else {
            return 'Short to medium (30-45 minutes)';
        }
    }

    determinePeakTiming() {
        const processingMethods = this.tea.processingMethods.map(m => m.toLowerCase());
        
        if (processingMethods.some(m => m.includes('roast'))) {
            return 'Gradual onset, peaks at 15-20 minutes';
        } else if (this.qiProfile.category === 'cooling') {
            return 'Quick onset, peaks at 5-10 minutes';
        } else {
            return 'Moderate onset, peaks at 10-15 minutes';
        }
    }

    calculateYinYangDescription(yinPercent, yangPercent) {
        if (Math.abs(yinPercent - yangPercent) <= 10) {
            return 'Harmoniously balanced';
        } else if (yinPercent > yangPercent) {
            return yinPercent - yangPercent > 30 ? 'Strongly yin' : 'Moderately yin';
        } else {
            return yangPercent - yinPercent > 30 ? 'Strongly yang' : 'Moderately yang';
        }
    }

    deriveFivePhaseCharacteristics(phaseScores) {
        const characteristics = [];
        Object.entries(phaseScores).forEach(([phase, score]) => {
            if (score > 0) {
                const phaseData = traditionalElements.fivePhases[phase];
                characteristics.push(...phaseData.nature
                    .map(char => ({ characteristic: char, intensity: score })));
            }
        });
        return characteristics.sort((a, b) => b.intensity - a.intensity);
    }

    deriveYinYangCharacteristics(yinPercent, yangPercent) {
        const characteristics = [];
        
        if (yinPercent > 40) {
            characteristics.push(...traditionalElements.yinYangBalance.yin.characteristics
                .slice(0, Math.ceil(yinPercent / 20)));
        }
        if (yangPercent > 40) {
            characteristics.push(...traditionalElements.yinYangBalance.yang.characteristics
                .slice(0, Math.ceil(yangPercent / 20)));
        }
        
        return characteristics;
    }

    generateProgression() {
        const chars = this.qiProfile.characteristics;
        return {
            initial: chars.slice(0, 2),
            peak: chars.slice(Math.floor(chars.length / 2), Math.floor(chars.length / 2) + 2),
            finish: chars.slice(-2)
        };
    }

    normalizeProfile() {
        // Remove duplicates while preserving order
        this.qiProfile.characteristics = [...new Set(this.qiProfile.characteristics)];
        this.qiProfile.bodyFocus = [...new Set(this.qiProfile.bodyFocus)];
        this.qiProfile.mentalEffects = [...new Set(this.qiProfile.mentalEffects)];

        // Normalize intensity to 1-10 scale
        this.qiProfile.intensity = Math.min(10, (this.qiProfile.intensity * 1.5));

        // Generate progression based on characteristics
        this.qiProfile.progression = this.generateProgression();
        
        // Determine energy flow patterns
        this.qiProfile.energyFlow = this.determineEnergyFlow();
        this.qiProfile.duration = this.determineDuration();
        this.qiProfile.peakTiming = this.determinePeakTiming();
    }

    generateDetailedDescription() {
        const phases = this.qiProfile.fivePhases;
        const yinYang = this.qiProfile.yinYangBalance;
        
        return `This tea manifests a ${this.qiProfile.characteristics.slice(0, 2).join(", ")} energy 
                with an intensity of ${this.qiProfile.intensity.toFixed(1)}/10. It is predominantly 
                ${this.qiProfile.category} in nature, affecting primarily the ${this.qiProfile.bodyFocus.join(" and ")} 
                regions. In traditional analysis, it exhibits strong ${phases.dominant} phase characteristics, 
                supported by ${phases.supporting} qualities, with a ${yinYang.balanceDescription} yin-yang nature. 
                The qi progression begins with ${this.qiProfile.progression.initial.join(", ")} qualities, 
                peaks with ${this.qiProfile.progression.peak.join(", ")} characteristics, and concludes with 
                ${this.qiProfile.progression.finish.join(", ")} aspects. ${this.qiProfile.energyFlow}. 
                ${this.qiProfile.peakTiming}, with ${this.qiProfile.duration}. Mental effects include 
                ${this.qiProfile.mentalEffects.join(", ")}.`;
    }

    calculate() {
        this.calculateBaseProfile();
        this.calculateCompoundEffects();
        this.calculateProcessingEffects();
        this.calculateTemperatureBalance();
        this.calculateFivePhases();
        this.calculateYinYangBalance();
        this.normalizeProfile();
        
        // Ensure arrays exist before returning
        this.ensureArrays();

        return {
            summary: `${(this.qiProfile.characteristics.slice(0, 2) || []).join(", ")} energy`,
            intensity: this.qiProfile.intensity.toFixed(1),
            category: this.qiProfile.category || 'neutral',
            bodyFocus: (this.qiProfile.bodyFocus || []).join(", "),
            mentalEffects: Array.isArray(this.qiProfile.mentalEffects) ? this.qiProfile.mentalEffects : [],
            characteristics: Array.isArray(this.qiProfile.characteristics) ? this.qiProfile.characteristics : [],
            progression: this.qiProfile.progression,
            energyFlow: this.qiProfile.energyFlow || '',
            duration: this.qiProfile.duration || '',
            peakTiming: this.qiProfile.peakTiming || '',
            temperatureBalance: this.qiProfile.temperatureBalance,
            fivePhases: this.qiProfile.fivePhases,
            yinYangBalance: this.qiProfile.yinYangBalance,
            detailedDescription: this.generateDetailedDescription()
        };
    }
}
        