// qiParameters.js
export const qiCharacteristics = {
    // Processing Method Effects
    processingEffects: {
        "withered": {
            energy: ["gentle", "subtle"],
            bodyFocus: "balanced",
            mentalState: ["relaxed", "open"],
            intensity: 1.5,
            category: "neutral"
        },
        "sun-dried": {
            energy: ["warming", "gentle"],
            bodyFocus: "balanced",
            mentalState: ["clear", "peaceful"],
            intensity: 1.8,
            category: "warming"
        },
        "steamed": {
            energy: ["rising", "clearing"],
            bodyFocus: "upper",
            mentalState: ["alert", "balanced"],
            intensity: 2.0,
            category: "neutral"
        },
        "rolled": {
            energy: ["flowing", "smooth"],
            bodyFocus: "middle",
            mentalState: ["focused", "balanced"],
            intensity: 1.4,
            category: "neutral"
        },
        "pan-fired": {
            energy: ["rising", "yang"],
            bodyFocus: "middle",
            mentalState: ["clear", "bright"],
            intensity: 1.8,
            category: "warming"
        },
        "shade-grown": {
            energy: ["face-cooling", "head-clearing"],
            bodyFocus: "upper",
            mentalState: ["focused", "calm"],
            intensity: 2.5,
            category: "cooling"
        },
        "oxidised": {
            energy: ["activating", "warming"],
            bodyFocus: "middle",
            mentalState: ["energized", "strong"],
            intensity: 2.0,
            category: "warming"
        },
        "partial-oxidation": {
            energy: ["balanced", "flowing"],
            bodyFocus: "middle",
            mentalState: ["centered", "harmonious"],
            intensity: 1.8,
            category: "neutral"
        },
        "full-oxidation": {
            energy: ["activating", "strong"],
            bodyFocus: "whole-body",
            mentalState: ["energized", "alert"],
            intensity: 2.2,
            category: "warming"
        },
        "light-roast": {
            energy: ["gentle-warming", "uplifting"],
            bodyFocus: "upper-middle",
            mentalState: ["clear", "bright"],
            intensity: 1.6,
            category: "warming"
        },
        "medium-roast": {
            energy: ["warming", "centering"],
            bodyFocus: "middle",
            mentalState: ["grounded", "focused"],
            intensity: 1.8,
            category: "warming"
        },
        "heavy-roast": {
            energy: ["grounding", "deep"],
            bodyFocus: "lower",
            mentalState: ["stable", "contemplative"],
            intensity: 2.2,
            category: "warming"
        },
        "charcoal-roasted": {
            energy: ["deeply-warming", "grounding"],
            bodyFocus: "lower",
            mentalState: ["centered", "stable"],
            intensity: 2.4,
            category: "warming"
        },
        "pile-fermented": {
            energy: ["deep", "earthy"],
            bodyFocus: "lower",
            mentalState: ["grounded", "peaceful"],
            intensity: 2.0,
            category: "warming"
        },
        "compressed": {
            energy: ["concentrated", "substantial"],
            bodyFocus: "centered",
            mentalState: ["focused", "stable"],
            intensity: 1.5,
            category: "neutral"
        },
        "aged": {
            energy: ["deep", "transformative"],
            bodyFocus: "whole-body",
            mentalState: ["wise", "peaceful"],
            intensity: 2.3,
            category: "neutral"
        },
        "shaped": {
            energy: ["refined", "precise"],
            bodyFocus: "balanced",
            mentalState: ["clear", "focused"],
            intensity: 1.3,
            category: "neutral"
        },
        "bruised": {
            energy: ["active", "dynamic"],
            bodyFocus: "middle",
            mentalState: ["alert", "engaged"],
            intensity: 1.6,
            category: "warming"
        },
        "jasmine-scented": {
            energy: ["uplifting", "gentle"],
            bodyFocus: "upper",
            mentalState: ["peaceful", "serene"],
            intensity: 1.7,
            category: "cooling"
        },
        "sorted": {
            energy: ["clean", "precise"],
            bodyFocus: "balanced",
            mentalState: ["ordered", "clear"],
            intensity: 1.2,
            category: "neutral"
        },
        "kill-green": {
            energy: ["fresh", "clear"],
            bodyFocus: "upper",
            mentalState: ["alert", "bright"],
            intensity: 1.6,
            category: "neutral"
        },
        "yellow-processing": {
            energy: ["gentle", "balanced"],
            bodyFocus: "middle",
            mentalState: ["harmonious", "clear"],
            intensity: 1.7,
            category: "neutral"
        }
    },

    // Compound Ratio Effects
    compoundRatios: {
        highTheanine: {
            threshold: 2.0,
            energy: ["calming", "focusing"],
            bodyFocus: "head",
            mentalState: ["clear-minded", "peaceful"],
            intensity: 2.3
        },
        balanced: {
            threshold: 1.0,
            energy: ["harmonious", "stable"],
            bodyFocus: "balanced",
            mentalState: ["focused", "centered"],
            intensity: 2.0
        },
        highCaffeine: {
            threshold: 0.5,
            energy: ["stimulating", "active"],
            bodyFocus: "whole-body",
            mentalState: ["alert", "energetic"],
            intensity: 1.8
        }
    },

    // Tea Type Base Characteristics
    teaTypeBase: {
        green: {
            energy: ["fresh", "clear"],
            defaultOxidation: 5,
            intensity: 1.8,
            baseBodyFocus: ["upper", "middle"],
            baseMentalState: ["alert", "clear"]
        },
        white: {
            energy: ["gentle", "subtle"],
            defaultOxidation: 10,
            intensity: 1.5,
            baseBodyFocus: ["upper"],
            baseMentalState: ["peaceful", "refined"]
        },
        oolong: {
            energy: ["complex", "flowing"],
            defaultOxidation: 45,
            intensity: 2.0,
            baseBodyFocus: ["middle", "balanced"],
            baseMentalState: ["focused", "dynamic"]
        },
        black: {
            energy: ["robust", "grounding"],
            defaultOxidation: 90,
            intensity: 1.9,
            baseBodyFocus: ["whole-body"],
            baseMentalState: ["energized", "strong"]
        },
        puerh: {
            energy: ["deep", "transformative"],
            defaultOxidation: 95,
            intensity: 2.2,
            baseBodyFocus: ["lower", "whole-body"],
            baseMentalState: ["grounded", "wise"]
        },
        yellow: {
            energy: ["gentle", "uplifting"],
            defaultOxidation: 10,
            intensity: 1.7,
            baseBodyFocus: ["upper", "middle"],
            baseMentalState: ["clear", "refined"]
        },
        herbal: {
            energy: ["gentle", "soothing"],
            defaultOxidation: 0,
            intensity: 1.4,
            baseBodyFocus: ["balanced"],
            baseMentalState: ["relaxed", "peaceful"]
        }
    }
};

export const traditionalElements = {
    fivePhases: {
        wood: {
            nature: ['rising', 'expanding'],
            season: 'spring',
            direction: 'east',
            characteristics: ['fresh', 'vital', 'flexible'],
            processingAffinity: ['minimal-processing', 'steamed', 'shade-grown'],
            flavorAffinity: ['fresh', 'grass', 'vegetal'],
            intensity: 2.0
        },
        fire: {
            nature: ['warming', 'transforming'],
            season: 'summer',
            direction: 'south',
            characteristics: ['bright', 'dynamic', 'active'],
            processingAffinity: ['roasted', 'fired', 'oxidized'],
            flavorAffinity: ['spicy', 'warm', 'toasted'],
            intensity: 2.2
        },
        earth: {
            nature: ['centering', 'grounding'],
            season: 'late-summer',
            direction: 'center',
            characteristics: ['stable', 'nourishing', 'harmonizing'],
            processingAffinity: ['aged', 'fermented'],
            flavorAffinity: ['sweet', 'rich', 'umami'],
            intensity: 1.8
        },
        metal: {
            nature: ['clarifying', 'condensing'],
            season: 'autumn',
            direction: 'west',
            characteristics: ['clear', 'precise', 'refined'],
            processingAffinity: ['withered', 'sorted'],
            flavorAffinity: ['mineral', 'crisp', 'clean'],
            intensity: 1.9
        },
        water: {
            nature: ['sinking', 'nourishing'],
            season: 'winter',
            direction: 'north',
            characteristics: ['deep', 'still', 'potential'],
            processingAffinity: ['compressed', 'aged'],
            flavorAffinity: ['marine', 'deep', 'rich'],
            intensity: 2.1
        }
    },

    yinYangBalance: {
        yang: {
            characteristics: ['warming', 'rising', 'activating', 'expanding', 'brightening'],
            processingMethods: ['roasted', 'fired', 'oxidized', 'sun-dried'],
            flavorNotes: ['spicy', 'warm', 'robust', 'strong'],
            timeOfDay: 'morning',
            intensity: 2.0
        },
        yin: {
            characteristics: ['cooling', 'sinking', 'calming', 'contracting', 'darkening'],
            processingMethods: ['shade-grown', 'steamed', 'minimal-processing'],
            flavorNotes: ['floral', 'fresh', 'mild', 'subtle'],
            timeOfDay: 'afternoon',
            intensity: 1.8
        }
    },

    seasonalInfluence: {
        spring: {
            dominant: 'wood',
            supporting: 'water',
            characteristics: ['rising', 'expanding', 'fresh'],
            recommendedBalance: 'slightly_yang'
        },
        summer: {
            dominant: 'fire',
            supporting: 'wood',
            characteristics: ['active', 'bright', 'transformative'],
            recommendedBalance: 'yang'
        },
        latesummer: {
            dominant: 'earth',
            supporting: 'fire',
            characteristics: ['centering', 'stabilizing', 'nourishing'],
            recommendedBalance: 'balanced'
        },
        autumn: {
            dominant: 'metal',
            supporting: 'earth',
            characteristics: ['contracting', 'clarifying', 'refining'],
            recommendedBalance: 'slightly_yin'
        },
        winter: {
            dominant: 'water',
            supporting: 'metal',
            characteristics: ['storing', 'deepening', 'concentrating'],
            recommendedBalance: 'yin'
        }
    },

    teaTypePhaseAssociations: {
        green: {
            primary: 'wood',
            secondary: 'fire',
            yinYangBalance: 'slightly_yin'
        },
        white: {
            primary: 'metal',
            secondary: 'water',
            yinYangBalance: 'yin'
        },
        oolong: {
            primary: 'fire',
            secondary: 'earth',
            yinYangBalance: 'balanced'
        },
        black: {
            primary: 'fire',
            secondary: 'earth',
            yinYangBalance: 'yang'
        },
        puerh: {
            primary: 'earth',
            secondary: 'water',
            yinYangBalance: 'balanced'
        },
        yellow: {
            primary: 'earth',
            secondary: 'metal',
            yinYangBalance: 'slightly_yang'
        }
    }
};