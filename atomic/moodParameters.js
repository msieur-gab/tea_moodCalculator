 // Flavor-Mood Correlations with Granular Categories
 export const flavorMoodCorrelations = {
    floral: {
        white_floral: {
            moods: ['serene', 'harmonizing', 'calming', 'nourishing', 'refreshing'],
            intensity: 2.5,
            flavors: ['jasmine', 'lilac', 'gardenia']
        },
        herbal_floral: {
            moods: ['serene', 'calming', 'meditative', 'harmonizing', 'nourishing'],
            intensity: 2,
            flavors: ['chamomile', 'chrysanthemum', 'lavender', 'rose']
        },
        exotic_floral: {
            moods: ['uplifting', 'invigorating', 'focusing', 'harmonizing', 'serene'],
            intensity: 1.9,
            flavors: ['orchid', 'ylang-ylang', 'lotus', 'magnolia']
        }
    },
    fruity: {
        stone_fruit: {
            moods: ['invigorating', 'serene', 'harmonizing', 'uplifting', 'refreshing'],
            intensity: 1.8,
            flavors: ['peach', 'apricot', 'nectarine', 'plum']
        },
        citrus: {
            moods: ['energizing', 'invigorating', 'uplifting', 'focusing', 'refreshing'],
            intensity: 2,
            flavors: ['lemon', 'lime', 'orange', 'grapefruit', 'bergamot']
        },
        tropical: {
            moods: ['invigorating', 'serene', 'uplifting', 'refreshing', 'nourishing'],
            intensity: 1.7,
            flavors: ['pineapple', 'mango', 'passion fruit', 'lychee', 'coconut']
        },
        berry: {
            moods: ['serene', 'harmonizing', 'nourishing', 'calming', 'refreshing'],
            intensity: 1.5,
            flavors: ['strawberry', 'raspberry', 'blackberry', 'blueberry']
        },
        tree_fruit: {
            moods: ['contemplative', 'serene', 'grounding', 'meditative', 'harmonizing'],
            intensity: 1.3,
            flavors: ['apple', 'pear', 'quince']
        },
        dried_fruit: {
            moods: ['cozy', 'warming', 'grounding', 'meditative', 'contemplative'],
            intensity: 1,
            flavors: ['raisin', 'fig', 'date']
        }
    },
    vegetal: {
        leafy: {
            moods: ['calming', 'harmonizing', 'focusing', 'nourishing', 'serene'],
            intensity: 1.7,
            flavors: ['spinach', 'kale', 'lettuce', 'grass']
        },
        cruciferous: {
            moods: ['contemplative', 'harmonizing', 'grounding', 'meditative', 'focusing'],
            intensity: 1.3,
            flavors: ['broccoli', 'cabbage', 'cauliflower']
        },
        herbaceous: {
            moods: ['calming', 'invigorating', 'focusing', 'refreshing', 'uplifting'],
            intensity: 1.6,
            flavors: ['parsley', 'thyme', 'mint', 'sage', 'basil']
        }
    },
    nutty_and_toasty: {
        nuts: {
            moods: ['warming', 'cozy', 'meditative', 'grounding', 'contemplative'],
            intensity: 1.5,
            flavors: ['almond', 'hazelnut', 'walnut', 'chestnut', 'peanut']
        },
        toasted: {
            moods: ['warming', 'contemplative', 'grounding', 'meditative', 'cozy'],
            intensity: 1.3,
            flavors: ['bread', 'grain', 'barley', 'rice']
        }
    },
    spicy: {
        pungent: {
            moods: ['energizing', 'invigorating', 'focusing', 'uplifting', 'refreshing'],
            intensity: 1.6,
            flavors: ['pepper', 'ginger', 'cinnamon', 'clove', 'anise', 'licorice']
        },
        cooling: {
            moods: ['calming', 'serene', 'refreshing', 'harmonizing', 'nourishing'],
            intensity: 1.4,
            flavors: ['menthol', 'camphor']
        }
    },
    sweet: {
        caramelized: {
            moods: ['cozy', 'warming', 'harmonizing', 'nourishing', 'meditative'],
            intensity: 1.7,
            flavors: ['honey', 'caramel', 'brown sugar', 'molasses']
        },
        vanilla: {
            moods: ['serene', 'calming', 'nourishing', 'harmonizing', 'refreshing'],
            intensity: 1.5,
            flavors: ['vanilla']
        },
        chocolate: {
            moods: ['cozy', 'meditative', 'grounding', 'contemplative', 'warming'],
            intensity: 1.6,
            flavors: ['cocoa', 'dark chocolate']
        }
    },
    earthy: {
        soil: {
            moods: ['meditative', 'grounding', 'contemplative', 'harmonizing', 'nourishing'],
            intensity: 1.8,
            flavors: ['petrichor', 'loam', 'forest floor']
        },
        minerals: {
            moods: ['contemplative', 'focusing', 'grounding'],
            intensity: 2.2,
            flavors: ['wet stone', 'flint', 'slate']
        },
        fungal: {
            moods: ['meditative', 'contemplative', 'grounding', 'nourishing', 'harmonizing'],
            intensity: 1.4,
            flavors: ['truffle']
        },
        aged: {
            moods: ['meditative', 'grounding', 'contemplative', 'harmonizing'],
            intensity: 2.0,
            flavors: ['aged', 'forest floor', 'leather', 'autumn leaves']
        }
        
    },
    woody: {
        resinous: {
            moods: ['meditative', 'grounding', 'contemplative', 'focusing', 'harmonizing'],
            intensity: 1.7,
            flavors: ['pine', 'cedar', 'sandalwood']
        },
        fresh: {
            moods: ['contemplative', 'serene', 'refreshing', 'focusing', 'nourishing'],
            intensity: 1.5,
            flavors: ['bamboo', 'oak', 'eucalyptus']
        }
    },
    roasted: {
        smoky: {
            moods: ['warming', 'meditative', 'grounding', 'contemplative', 'cozy'],
            intensity: 1.2,
            flavors: ['bonfire', 'tobacco', 'burnt']
        },
        nutty: {
            moods: ['warming', 'cozy', 'grounding', 'meditative', 'harmonizing'],
            intensity: 1,
            flavors: ['roasted nuts', 'coffee']
        }
    },
    aged: {
        fermented: {
            moods: ['meditative', 'contemplative', 'grounding', 'nourishing', 'harmonizing'],
            intensity: 1.5,
            flavors: ['leather', 'compost', 'autumn leaves']
        },
        oxidized: {
            moods: ['contemplative', 'grounding', 'meditative', 'focusing', 'harmonizing'],
            intensity: 1.3,
            flavors: ['dried leaves', 'prune']
        }
    },
    umami: {
        marine: {
            moods: ['focusing', 'calming', 'nourishing', 'harmonizing', 'serene'],
            intensity: 2.4,
            flavors: ['seaweed', 'kombu', 'dashi']
        },
        savory: {
            moods: ['calming', 'contemplative', 'nourishing', 'harmonizing', 'grounding'],
            intensity: 1.8,
            flavors: ['broth', 'meat', 'mushroom']
        }
    },
    chemical: {
        off_flavors: {
            moods: [],
            intensity: 0,
            flavors: ['metallic', 'sulfurous', 'medicinal']
        }
    },
    sour: {
        acidic: {
            moods: ['invigorating', 'focusing', 'refreshing', 'uplifting'],
            intensity: 0.5,
            flavors: ['sour', 'tart', 'acidic']
        }
    }
};
    // Processing Methods Alignment with Moods
    export const processingMethodMoodAlignment = {
        // Heat Treatment Methods
        'steamed': {
            moods: [
                'calming', 
                'harmonizing', 
                'serene', 
                'focusing', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 1.9,
            category: 'heat',
            description: 'Gentle heat preservation that maintains delicate compounds and promotes mental clarity'
        },
        'pan-fired': {
            moods: [
                'invigorating', 
                'energizing', 
                'contemplative', 
                'focusing', 
                'uplifting', 
                'refreshing'
            ],
            intensity: 1.2,
            category: 'heat',
            description: 'Light toasting method that adds complexity, stimulation, and mental alertness'
        },
        'light-roast': {
            moods: [
                'serene', 
                'contemplative', 
                'warming', 
                'harmonizing', 
                'nourishing'
            ],
            intensity: 1.0,
            category: 'heat',
            description: 'Subtle roasting that enhances flavor subtleties and promotes gentle mental exploration'
        },
        'medium-roast': {
            moods: [
                'warming', 
                'cozy', 
                'energizing', 
                'grounding', 
                'harmonizing'
            ],
            intensity: 1.5,
            category: 'heat',
            description: 'Balanced roasting that develops rich, complex notes and provides centered energy'
        },
        'heavy-roast': {
            moods: [
                'meditative', 
                'warming', 
                'grounding', 
                'contemplative', 
                'cozy'
            ],
            intensity: 1.8,
            category: 'heat',
            description: 'Intense roasting creating deep, transformative flavors and profound introspection'
        },
        'charcoal-roasted': {
            moods: [
                'grounding', 
                'warming', 
                'meditative', 
                'contemplative', 
                'harmonizing'
            ],
            intensity: 2.2,
            category: 'heat',
            description: 'Traditional roasting method with profound depth, promoting deep connection and inner stability'
        },
        // Sun Processing Methods
        'sun-dried': {
            moods: [
                'serene',
                'refreshing',
                'harmonizing',
                'contemplative',
                'nourishing'
            ],
            intensity: 1.6,
            category: 'drying',
            description: 'Natural drying process that preserves delicate characteristics while adding subtle complexity and brightness'
        },
    
        // Oxidation Methods
        'withered': {
            moods: [
                'serene', 
                'harmonizing', 
                'contemplative', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 1.2,
            category: 'oxidation',
            description: 'Initial processing that preserves natural essence and promotes gentle mental clarity'
        },
        'oxidised': {
            moods: [
                'energizing', 
                'warming', 
                'invigorating', 
                'focusing', 
                'uplifting'
            ],
            intensity: 1.5,
            category: 'oxidation',
            description: 'Increases complexity, develops bold characteristics, and stimulates mental energy'
        },
        'partial-oxidation': {
            moods: [
                'harmonizing', 
                'contemplative', 
                'serene', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 1.3,
            category: 'oxidation',
            description: 'Balanced approach maintaining nuanced flavors and promoting mental equilibrium'
        },
        'full-oxidation': {
            moods: [
                'energizing', 
                'warming', 
                'cozy', 
                'grounding', 
                'harmonizing'
            ],
            intensity: 1.7,
            category: 'oxidation',
            description: 'Complete transformation of leaf characteristics, creating robust and centering experiences'
        },
        'kill-green': {
            moods: [
                'calming', 
                'harmonizing', 
                'focusing', 
                'nourishing', 
                'serene'
            ],
            intensity: 1.4,
            category: 'oxidation',
            description: 'Halts enzymatic processes, preserving delicate compounds and promoting mental clarity'
        },
    
        // Growing and Processing Methods
        'shade-grown': {
            moods: [
                'calming', 
                'meditative', 
                'harmonizing', 
                'nourishing', 
                'focusing'
            ],
            intensity: 2.5,
            category: 'growing',
            description: 'Increases amino acids and L-theanine content, promoting deep mental stillness'
        },
        'minimal-processing': {
            moods: [
                'serene', 
                'harmonizing', 
                'contemplative', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 2.0,
            category: 'processing',
            description: 'Preserves the most natural tea characteristics with holistic, gentle approach'
        },
        'gaba-processed': {
            moods: [
                'calming', 
                'meditative', 
                'harmonizing', 
                'nourishing', 
                'grounding'
            ],
            intensity: 2.5,
            category: 'special',
            description: 'Specifically designed to enhance relaxation and holistic well-being compounds'
        },
    
        // Scenting and Special Methods
        'jasmine-scented': {
            moods: [
                'serene', 
                'calming', 
                'harmonizing', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 1.6,
            category: 'scenting',
            description: 'Delicate floral notes enhance relaxation and promote gentle emotional balance'
        },
        'rose-scented': {
            moods: [
                'serene', 
                'harmonizing', 
                'contemplative', 
                'nourishing', 
                'calming'
            ],
            intensity: 1.5,
            category: 'scenting',
            description: 'Soft, romantic aromatics promote tranquility and inner peace'
        },
        'osmanthus-scented': {
            moods: [
                'serene', 
                'harmonizing', 
                'calming', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 1.4,
            category: 'scenting',
            description: 'Sweet, subtle floral notes create balance and gentle emotional lift'
        },
    
        // Aging and Fermentation
        'aged': {
            moods: [
                'meditative', 
                'contemplative', 
                'grounding', 
                'harmonizing', 
                'nourishing'
            ],
            intensity: 1.7,
            category: 'aging',
            description: 'Develops complex, refined characteristics through patient transformation'
        },
        'fermented': {
            moods: [
                'meditative', 
                'grounding', 
                'cozy', 
                'contemplative', 
                'harmonizing'
            ],
            intensity: 1.5,
            category: 'fermentation',
            description: 'Transforms tea through controlled microbial processes, creating depth and complexity'
        },
    
        // Special Processing Methods
        'bug-bitten': {
            moods: [
                'invigorating', 
                'serene', 
                'harmonizing', 
                'uplifting', 
                'refreshing'
            ],
            intensity: 1.3,
            category: 'special',
            description: 'Unique processing creating honey-like complexity and subtle energetic lift'
        },
        'frost-withered': {
            moods: [
                'contemplative', 
                'serene', 
                'harmonizing', 
                'nourishing', 
                'refreshing'
            ],
            intensity: 1.2,
            category: 'special',
            description: 'Cold-induced processing creates unique flavor profiles with introspective qualities'
        },
    
        // Advanced Processing Methods
        'quantum-processed': {
            moods: [
                'focusing', 
                'contemplative', 
                'meditative', 
                'harmonizing', 
                'nourishing'
            ],
            intensity: 2.3,
            category: 'advanced',
            description: 'Cutting-edge processing technique promoting mental clarity, balance, and holistic well-being'
        }
    };
  
    // Extended atomic moods based on existing flavor correlations
    // export const atomicMoods = {
    //   // Energy States
    //   energizing: {
    //       description: "Promotes physical and mental vitality",
    //       triggers: {
    //           highCaffeine: 2.5,
    //           lowLTheanine: 1.5,
    //           processingMethods: ["pan-fired", "full-oxidation", "oxidised"],
    //           flavors: ["citrus", "mint", "ginger", "spicy", "bergamot"]
    //       }
    //   },
    //   invigorating: {
    //       description: "Creates mental alertness with brightness",
    //       triggers: {
    //           moderateCaffeine: 2.0,
    //           balancedTheanine: 1.5,
    //           processingMethods: ["pan-fired", "light-oxidation", "bug-bitten"],
    //           flavors: ["muscatel", "citrus", "fresh", "bergamot"]
    //       }
    //   },
    
    //   // Calming States
    //   calming: {
    //       description: "Promotes mental tranquility",
    //       triggers: {
    //           highLTheanine: 2.5,
    //           lowCaffeine: 1.5,
    //           processingMethods: ["shade-grown", "steamed", "minimal-processing"],
    //           flavors: ["chamomile", "lavender", "grass", "marine"]
    //       }
    //   },
    //   serene: {
    //       description: "Creates peaceful upliftment",
    //       triggers: {
    //           balancedRatio: 2.0,
    //           processingMethods: ["withered", "sun-dried", "light-roast"],
    //           flavors: ["floral", "peach", "apple", "honey", "chrysanthemum"]
    //       }
    //   },
    
    //   // Mental States
    //   focusing: {
    //       description: "Enhances concentration and clarity",
    //       triggers: {
    //           highLTheanine: 2.0,
    //           moderateCaffeine: 1.5,
    //           processingMethods: ["steamed", "shade-grown"],
    //           flavors: ["umami", "marine", "mineral"]
    //       }
    //   },
    //   contemplative: {
    //       description: "Promotes thoughtful introspection",
    //       triggers: {
    //           moderateLTheanine: 2.0,
    //           lowCaffeine: 1.0,
    //           processingMethods: ["light-oxidation", "minimal-processing"],
    //           flavors: ["orchid", "lily", "mineral", "slate"]
    //       }
    //   },
    
    //   // Comfort States
    //   cozy: {
    //       description: "Induces warmth and comfort",
    //       triggers: {
    //           lowCaffeine: 1.5,
    //           moderateLTheanine: 1.0,
    //           processingMethods: ["roasted", "aged", "fermented"],
    //           flavors: ["roasted nuts", "chocolate", "caramel", "honey"]
    //       }
    //   },
    //   warming: {
    //       description: "Provides inner warmth and centeredness",
    //       triggers: {
    //           moderateCaffeine: 1.5,
    //           processingMethods: ["medium-roast", "charcoal-roasted", "oxidised"],
    //           flavors: ["toasted grain", "caramel", "roasted nuts", "coffee"]
    //       }
    //   },
    
    //   // Grounding States
    //   grounding: {
    //       description: "Connects to earthly stability",
    //       triggers: {
    //           balancedRatio: 1.5,
    //           processingMethods: ["aged", "compressed", "fermented"],
    //           flavors: ["earth", "wood", "leather", "mineral"]
    //       }
    //   },
    //   meditative: {
    //       description: "Promotes deep mindfulness",
    //       triggers: {
    //           highLTheanine: 2.0,
    //           lowCaffeine: 1.0,
    //           processingMethods: ["aged", "compressed", "heavy-roast"],
    //           flavors: ["earth", "wood", "mushroom", "mineral"]
    //       }
    //   },
    
    //   // Harmonizing States
    //   harmonizing: {
    //       description: "Promotes overall balance",
    //       triggers: {
    //           balancedRatio: 2.5,
    //           processingMethods: ["gaba-processed", "shade-grown"],
    //           flavors: ["umami", "sweet", "mineral", "bamboo"]
    //       }
    //   },
    //   nourishing: {
    //       description: "Supports holistic wellbeing",
    //       triggers: {
    //           highLTheanine: 2.0,
    //           moderateCaffeine: 1.0,
    //           processingMethods: ["minimal-processing", "shade-grown"],
    //           flavors: ["umami", "seaweed", "grass", "mineral"]
    //       }
    //   },
    
    //   // Uplifting States
    //   uplifting: {
    //       description: "Elevates mood and spirit",
    //       triggers: {
    //           moderateCaffeine: 1.5,
    //           balancedTheanine: 1.5,
    //           processingMethods: ["light-oxidation", "jasmine-scented"],
    //           flavors: ["floral", "fruity", "honey", "citrus"]
    //       }
    //   },
    //   refreshing: {
    //       description: "Creates renewal and vitality",
    //       triggers: {
    //           moderateCaffeine: 1.5,
    //           highLTheanine: 1.5,
    //           processingMethods: ["steamed", "minimal-processing"],
    //           flavors: ["fresh", "cucumber", "mint", "marine"]
    //       }
    //   }
    // };

    export const atomicMoods = {
        energizing: {
            description: "Promotes physical and mental vitality",
            color: {
                start: "#FF9966",
                end: "#FF5E62"
            },
            triggers: {
                highCaffeine: 2.5,
                lowLTheanine: 1.5,
                processingMethods: ["pan-fired", "full-oxidation", "oxidised"],
                flavors: ["citrus", "mint", "ginger", "spicy", "bergamot"]
            }
        },
    
        invigorating: {
            description: "Creates mental alertness with brightness",
            color: {
                start: "#FFE259",
                end: "#FFA751"
            },
            triggers: {
                moderateCaffeine: 2.0,
                moderateLTheanine: 1.5,
                processingMethods: ["pan-fired", "light-oxidation", "bug-bitten"],
                flavors: ["muscatel", "citrus", "fresh", "bergamot"]
            }
        },
    
        calming: {
            description: "Promotes mental tranquility",
            color: {
                start: "#4CA1AF",
                end: "#2C3E50"
            },
            triggers: {
                highLTheanine: 2.5,
                lowCaffeine: 1.5,
                processingMethods: ["shade-grown", "steamed", "minimal-processing"],
                flavors: ["chamomile", "lavender", "grass", "marine"]
            }
        },
    
        serene: {
            description: "Creates peaceful upliftment",
            color: {
                start: "#89f7fe",
                end: "#66a6ff"
            },
            triggers: {
                highLTheanine: 2.0,
                lowCaffeine: 1.0,
                processingMethods: [ "sun-dried", "light-roast"],
                flavors: ["peach", "apple", "honey", "chrysanthemum"]
            }
        },
    
        focusing: {
            description: "Enhances concentration and clarity",
            color: {
                start: "#72AFD3",
                end: "#37ECBA"
            },
            triggers: {
                highLTheanine: 2.0,
                moderateCaffeine: 1.5,
                processingMethods: ["steamed", "shade-grown"],
                flavors: ["umami", "marine", "mineral"]
            }
        },
    
        contemplative: {
            description: "Promotes thoughtful introspection",
            color: {
                start: "#614385",
                end: "#516395"
            },
            triggers: {
                moderateLTheanine: 2.0,
                lowCaffeine: 1.5,
                processingMethods: ["light-oxidation", "minimal-processing"],
                flavors: ["orchid", "lily", "mineral", "slate"]
            }
        },
    
        cozy: {
            description: "Induces warmth and comfort",
            color: {
                start: "#F6D365",
                end: "#FDA085"
            },
            triggers: {
                moderateLTheanine: 1.5,
                lowCaffeine: 1.5,
                processingMethods: ["roasted", "aged", "fermented"],
                flavors: ["roasted nuts", "chocolate", "caramel", "honey"]
            }
        },
    
        warming: {
            description: "Provides inner warmth and centeredness",
            color: {
                start: "#FF512F",
                end: "#DD2476"
            },
            triggers: {
                moderateCaffeine: 1.5,
                moderateLTheanine: 1.0,
                processingMethods: ["medium-roast", "charcoal-roasted", "oxidised"],
                flavors: ["toasted grain", "caramel", "roasted nuts", "coffee"]
            }
        },
    
        grounding: {
            description: "Connects to earthly stability",
            color: {
                start: "#636363",
                end: "#a2ab58"
            },
            triggers: {
                moderateLTheanine: 1.5,
                moderateCaffeine: 1.0,
                processingMethods: ["aged", "compressed", "fermented"],
                flavors: ["earth", "wood", "leather", "mineral"]
            }
        },
    
        meditative: {
            description: "Promotes deep mindfulness",
            color: {
                start: "#5B247A",
                end: "#1BCEDF"
            },
            triggers: {
                highLTheanine: 2.0,
                lowCaffeine: 1.5,
                processingMethods: ["aged", "compressed", "heavy-roast"],
                flavors: ["earth", "wood", "mushroom", "mineral"]
            }
        },
    
        harmonizing: {
            description: "Promotes overall balance",
            color: {
                start: "#7F7FD5",
                end: "#91EAE4"
            },
            triggers: {
                moderateLTheanine: 2.0,
                moderateCaffeine: 1.5,
                processingMethods: ["gaba-processed", "shade-grown"],
                flavors: ["umami", "mineral", "bamboo"]
            }
        },
    
        uplifting: {
            description: "Elevates mood and spirit",
            color: {
                start: "#fad0c4",
                end: "#ffd1ff"
            },
            triggers: {
                moderateCaffeine: 1.5,
                highLTheanine: 1.5,
                processingMethods: ["light-oxidation", "jasmine-scented"],
                flavors: ["floral", "fruity", "honey", "citrus"]
            }
        },
    
        refreshing: {
            description: "Creates renewal and vitality",
            color: {
                start: "#96fbc4",
                end: "#f9f586"
            },
            triggers: {
                moderateCaffeine: 1.5,
                highLTheanine: 1.5,
                processingMethods: ["steamed", "minimal-processing"],
                flavors: ["fresh", "cucumber", "mint", "marine"]
            }
        },
    
        nourishing: {
            description: "Supports holistic wellbeing",
            color: {
                start: "#48c6ef",
                end: "#6f86d6"
            },
            triggers: {
                highLTheanine: 2.0,
                moderateCaffeine: 1.0,
                processingMethods: ["minimal-processing", "shade-grown"],
                flavors: ["umami", "seaweed", "grass", "mineral"]
            }
        }
    };
    
    // Compound level reference thresholds
    export const compoundThresholds = {
        theanine: {
            low: { max: 4 },
            moderate: { min: 4, max: 7 },
            high: { min: 7 }
        },
        caffeine: {
            low: { max: 2 },
            moderate: { min: 2, max: 4 },
            high: { min: 4 }
        }
    };
  
  // Extended mood combinations based on atomic moods
  export const moodCombinations = {
    // Energy State Combinations
    "energizing+focusing": {
      name: "Dynamic Clarity",
      description: "A highly engaged state where energizing stimulation meets focused mental clarity. This combination promotes heightened alertness while maintaining precise mental acuity, perfect for tasks requiring both energy and concentration. Particularly effective for morning activities or when mental stamina is essential."
    },
    "energizing+uplifting": {
      name: "Vibrant Spirit",
      description: "An exhilarating blend of physical energy and emotional elevation. This combination creates a powerful sense of vitality coupled with positive emotional resonance, ideal for social gatherings or creative endeavors. The energizing quality provides sustained vigor while the uplifting aspect maintains emotional buoyancy."
    },
    "invigorating+refreshing": {
      name: "Revitalizing Energy",
      description: "A brilliantly refreshing state where invigorating vitality meets cooling renewal. This combination provides a clean, clear energy that revitalizes both body and mind without overwhelming stimulation. Perfect for afternoon revival or when seeking gentle but effective reinvigoration."
    },
  
    // Calming State Combinations
    "calming+harmonizing": {
      name: "Balanced Peace",
      description: "A sophisticated state of equilibrium where calming tranquility meets harmonious balance. This combination soothes nervous tension while promoting a sense of centered wholeness. The calming aspect quiets mental chatter while the harmonizing quality creates a sense of inner alignment. Ideal for stress relief and emotional balance."
    },
    "calming+meditative": {
      name: "Tranquil Mindfulness",
      description: "A deeply peaceful state where calming serenity supports meditative awareness. This combination allows for clear observation without mental agitation, creating an ideal space for mindfulness practices. The calming quality provides emotional stillness while the meditative aspect maintains gentle alertness."
    },
    "serene+nourishing": {
      name: "Nurturing Serenity",
      description: "A profoundly supportive state where serene peace meets nourishing care. This combination creates a deep sense of well-being and restoration, perfect for recovery and self-care. The serene quality provides emotional peace while the nourishing aspect supports physical and mental restoration."
    },
  
    // Mental State Combinations
    "focusing+contemplative": {
      name: "Mindful Clarity",
      description: "An intellectually rich state where sharp focus meets contemplative depth. This combination enables both precise attention and philosophical insight, ideal for study or complex problem-solving. The focusing quality provides mental precision while contemplative aspects allow for deeper understanding."
    },
    "contemplative+meditative": {
      name: "Deep Reflection",
      description: "A profound state of inner exploration where contemplative insight meets meditative presence. This combination facilitates deep understanding while maintaining present-moment awareness. Perfect for philosophical inquiry, journaling, or any practice requiring both depth and presence."
    },
    "focusing+harmonizing": {
      name: "Balanced Focus",
      description: "A well-regulated state of attention where mental focus meets harmonious balance. This combination allows for sustained concentration without mental strain or tension. Ideal for long periods of work requiring both accuracy and endurance."
    },
  
    // Comfort State Combinations
    "cozy+warming": {
      name: "Comforting Warmth",
      description: "A deeply nurturing state where cozy comfort meets warming embrace. This combination creates a profound sense of physical and emotional security, perfect for relaxation and unwinding. The cozy quality provides a sense of safety while the warming aspect promotes physical ease."
    },
    "warming+grounding": {
      name: "Grounded Warmth",
      description: "A stabilizing state where warming comfort meets earthly connection. This combination provides physical warmth while maintaining a strong sense of presence and stability. Excellent for winter meditation, stress relief, or finding center during challenging times."
    },
    "cozy+harmonizing": {
      name: "Harmonious Comfort",
      description: "A balanced state of comfort where cozy peace meets harmonious integration. This combination creates a sense of being at ease while maintaining subtle alertness. Perfect for social gatherings or peaceful evenings when both relaxation and engagement are desired."
    },
  
    // Balancing Combinations
    "calming+energizing": {
      name: "Dynamic Balance",
      description: "A sophisticated state of equilibrium where calming peace meets energetic vitality. This unique combination provides mental clarity and physical energy without anxiety or jitters. The calming aspect moderates the energizing quality, creating sustained vitality with emotional stability."
    },
    "warming+refreshing": {
      name: "Refreshing Warmth",
      description: "An invigorating yet comforting state where warming depth meets refreshing brightness. This combination creates an uplifting experience while maintaining a core of comforting warmth. Ideal for transition seasons or when seeking both comfort and renewal."
    },
    "grounding+invigorating": {
      name: "Grounded Energy",
      description: "A balanced state of vitality where grounding stability meets invigorating freshness. This combination provides energetic lift while maintaining a strong sense of centeredness. Perfect for active meditation or focused physical activities requiring both energy and balance."
    },
  
    // Harmonizing State Combinations
    "harmonizing+nourishing": {
      name: "Wholesome Balance",
      description: "A deeply supportive state where harmonious balance meets nourishing care. This combination promotes overall well-being through the integration of physical comfort and emotional equilibrium. Ideal for recovery periods or when seeking comprehensive restoration."
    },
    "harmonizing+focusing": {
      name: "Focused Harmony",
      description: "A centered state of clarity where harmonious balance meets mental precision. This combination enables clear thinking while maintaining overall equilibrium. Perfect for complex tasks requiring both accuracy and sustained well-being."
    },
    "harmonizing+grounding": {
      name: "Grounded Harmony",
      description: "A deeply stable state where harmonious balance meets earthly connection. This combination creates a profound sense of being centered while maintaining flexibility and adaptability. Excellent for finding stability during change or maintaining balance in challenging situations."
    },
  
    // Uplifting State Combinations
    "uplifting+refreshing": {
      name: "Bright Spirit",
      description: "A joyfully invigorating state where uplifting brightness meets refreshing clarity. This combination creates a sense of renewed optimism and physical refreshment. Perfect for morning routines or whenever emotional and physical revival is needed."
    },
    "uplifting+harmonizing": {
      name: "Harmonious Spirit",
      description: "A balanced state of elevation where uplifting brightness meets harmonious integration. This combination promotes positive mood while maintaining emotional stability. Ideal for social situations or creative activities requiring both enthusiasm and composure."
    },
    "refreshing+nourishing": {
      name: "Nourishing Freshness",
      description: "A revitalizing state where refreshing clarity meets nourishing support. This combination provides gentle invigoration while supporting overall well-being. Perfect for afternoon renewal or recovery periods requiring both refreshment and care."
    },
  
    // Additional Important Combinations
    "serene+calming": {
      name: "Peaceful Tranquility",
      description: "A profound state of deep inner peace where calming influences create a gentle quieting of the mind, while serene qualities promote a natural sense of ease and contentment. Perfect for mindful relaxation and stress relief."
    },
    "serene+harmonizing": {
      name: "Harmonious Peace",
      description: "A beautifully balanced state where serene tranquility meets harmonizing balance, creating a sense of complete well-being. The mind finds perfect equilibrium while the body experiences deep relaxation and restoration."
    },
    "contemplative+serene": {
      name: "Thoughtful Serenity",
      description: "A refined state of mental clarity where contemplative depth merges with serene tranquility. This combination encourages insightful reflection while maintaining a peaceful, undisturbed mind, ideal for meditation and philosophical thinking."
    },
    "contemplative+grounding": {
      name: "Grounded Reflection",
      description: "A deeply anchored state of mental exploration where contemplative awareness meets earthly stability. This combination allows for profound insights while maintaining a strong connection to the present moment and physical reality."
    },
    "meditative+serene": {
      name: "Serene Presence",
      description: "A state of profound mindful awareness combined with peaceful serenity. This creates an ideal environment for deep meditation, where acute presence meets gentle tranquility, allowing for both alertness and complete peace."
    },
    "meditative+harmonizing": {
      name: "Balanced Mindfulness",
      description: "An expertly balanced state where meditative awareness meets harmonizing equilibrium. This combination cultivates a centered, mindful presence while promoting overall balance between body and mind, ideal for both active and passive meditation."
    },
    "grounding+harmonizing": {
      name: "Stable Harmony",
      description: "A deeply rooted sense of balance where grounding stability meets harmonizing integration. This combination creates a foundation of earthly connection while promoting overall equilibrium, perfect for finding center during times of change."
    },
    "serene+refreshing": {
      name: "Peaceful Renewal",
      description: "A rejuvenating state where serene tranquility meets refreshing vitality. This unique combination brings together peaceful calm with gentle invigoration, creating a sense of renewed energy without disturbing inner peace."
    },
    "focusing+uplifting": {
    name: "Inspired Precision",
    description: "A vibrant state of mental clarity merged with emotional brightness. This combination creates a powerful synergy of sharp focus and positive momentum, ideal for creative problem-solving and innovative thinking. Delivers a sense of purposeful optimism that fuels both intellectual and emotional engagement."
    },
    "meditative+refreshing": {
        name: "Mindful Renewal",
        description: "A sublime intersection of deep inner stillness and gentle revitalization. This combination offers a unique space of profound awareness coupled with light, cleansing energy. Perfect for mental reset, providing both deep introspection and a sense of being emotionally and mentally cleansed."
    },
    "nourishing+refreshing": {
        name: "Holistic Revival",
        description: "A comprehensive state of restoration that simultaneously replenishes and invigorates. This combination supports complete well-being by providing gentle, supportive care while maintaining a sense of light, revitalizing energy. Ideal for recovery periods that require both deep nurturing and subtle awakening."
    },
    "grounding+nourishing": {
        name: "Rooted Wellness",
        description: "A deeply anchoring experience of holistic support and earthly connection. This combination creates a profound sense of stability and comprehensive care, offering both physical and emotional nourishment. Provides a strong, nurturing foundation that feels simultaneously secure and supportive."
    },
    "contemplative+uplifting": {
        name: "Enlightened Joy",
        description: "An intellectually rich state of emotional elevation and deep reflection. This combination merges philosophical depth with a sense of positive emotional expansion, creating a unique space of joyful insight. Perfect for moments of profound understanding that simultaneously inspire and liberate."
    }
  };

  export default {
    flavorMoodCorrelations,
    processingMethodMoodAlignment,
    atomicMoods,
    moodCombinations
  };