// qiCalculator.js
import { qiCharacteristics } from './qiParameters.js';

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
            }
        };

        // Ensure arrays are initialized
        this.ensureArrays();
    }

    ensureArrays() {
        // Ensure all array properties are initialized
        const arrayProps = ['characteristics', 'bodyFocus', 'mentalEffects'];
        arrayProps.forEach(prop => {
            if (!Array.isArray(this.qiProfile[prop])) {
                this.qiProfile[prop] = [];
            }
        });

        // Ensure progression arrays
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
        // Get base characteristics from tea type
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
                }
            });
        }
    }

    calculateTemperatureBalance() {
        let warmingScore = 0;
        let coolingScore = 0;

        // 1. Base temperature characteristics by tea type
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

        // 2. Processing methods with weighted impacts
        if (this.tea.processingMethods) {
            this.tea.processingMethods.forEach(method => {
                const effect = qiCharacteristics.processingEffects[method.toLowerCase()];
                if (effect) {
                    switch(effect.category) {
                        case 'warming':
                            warmingScore += effect.intensity * 0.8;
                            break;
                        case 'cooling':
                            coolingScore += effect.intensity * 0.8;
                            break;
                    }
                }
            });
        }

        // 3. Compound ratio influence
        if (this.tea.lTheanineLevel && this.tea.caffeineLevel) {
            const ratio = this.tea.lTheanineLevel / this.tea.caffeineLevel;
            if (ratio > 2) {
                coolingScore += 1.5; // High L-Theanine ratio tends toward cooling
            } else if (ratio < 1) {
                warmingScore += 1; // High caffeine ratio tends toward warming
            }
        }

        // 4. Calculate percentages and determine category
        const totalScore = warmingScore + coolingScore;
        const warmingPercent = (warmingScore / totalScore) * 100;
        const coolingPercent = (coolingScore / totalScore) * 100;

        // Store the results
        this.qiProfile.temperatureBalance = {
            warmingScore: warmingScore.toFixed(1),
            coolingScore: coolingScore.toFixed(1),
            warmingPercent: warmingPercent.toFixed(1),
            coolingPercent: coolingPercent.toFixed(1)
        };

        // Set the category
        if (warmingPercent > 60) {
            this.qiProfile.category = 'warming';
        } else if (coolingPercent > 60) {
            this.qiProfile.category = 'cooling';
        } else {
            this.qiProfile.category = 'neutral';
        }
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
        return `This tea manifests a ${this.qiProfile.characteristics.slice(0, 2).join(", ")} energy 
                with an intensity of ${this.qiProfile.intensity.toFixed(1)}/10. It is predominantly 
                ${this.qiProfile.category} in nature, affecting primarily the ${this.qiProfile.bodyFocus.join(" and ")} 
                regions. The qi progression begins with ${this.qiProfile.progression.initial.join(", ")} qualities, 
                peaks with ${this.qiProfile.progression.peak.join(", ")} characteristics, and concludes with 
                ${this.qiProfile.progression.finish.join(", ")} aspects. ${this.qiProfile.energyFlow}. 
                ${this.qiProfile.peakTiming}, with ${this.qiProfile.duration}. Mental effects include 
                ${this.qiProfile.mentalEffects.join(", ")}.`;
    }

    calculate() {
        this.calculateBaseProfile();
        this.calculateCompoundEffects();
        this.calculateProcessingEffects();
        this.calculateTemperatureBalance();  // Changed from calculateCategory to calculateTemperatureBalance
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
            detailedDescription: this.generateDetailedDescription()
        };
    }
}