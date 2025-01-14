// Mood Categories with Enhanced Characteristics
export const moodCategories = {
    energizing: {
      title: 'Energising & Uplifting',
      description: 'Promotes alertness and mental clarity',
      characteristics: {
        highCaffeine: 2,
        lowLTheanine: 1,
        processingBonus: [
          'pan-fired', 
          'full-oxidation', 
          'oxidised', 
          'medium-roast', 
          'heavy-roast'
        ],
        flavorBonus: [
          'citrus', 'mint', 'ginger', 'spicy', 
          'bergamot', 'pepper', 'coffee'
        ]
      }
    },
    calming: {
      title: 'Calm & Focused',
      description: 'Supports concentration and mental balance',
      characteristics: {
        highLTheanine: 2,
        moderateCaffeine: 1,
        processingBonus: [
          'shade-grown', 
          'steamed', 
          'minimal-processing', 
          'kill-green',
          'gaba-processed'
        ],
        flavorBonus: [
          'umami', 'grass', 'marine', 
          'lavender', 'chamomile'
        ]
      }
    },
    serene: {
      title: 'Serene & Refreshing',
      description: 'Creates a peaceful and uplifted state',
      characteristics: {
        balancedRatio: 2,
        processingBonus: [
          'withered', 
          'sun-dried', 
          'light-roast', 
          'partial-oxidation',
          'jasmine-scented',
          'rose-scented'
        ],
        flavorBonus: [
          'floral', 'fruity', 'honey', 
          'peach', 'apple', 'chrysanthemum'
        ]
      }
    },
    cozy: {
      title: 'Cosy & Comforting',
      description: 'Induces a warm, relaxed state',
      characteristics: {
        lowCaffeine: 1,
        processingBonus: [
          'roasted', 
          'aged', 
          'fermented', 
          'pile-fermented',
          'medium-roast',
          'charcoal-roasted'
        ],
        flavorBonus: [
          'roasted nuts', 'chocolate', 
          'caramel', 'earth', 'honey'
        ]
      }
    },
    meditative: {
      title: 'Meditative & Grounding',
      description: 'Promotes mindfulness and emotional stability',
      characteristics: {
        lowCaffeine: 1,
        highLTheanine: 1,
        processingBonus: [
          'aged', 
          'compressed', 
          'heavy-roast', 
          'fermented',
          'wet-piled',
          'bug-bitten'
        ],
        flavorBonus: [
          'earth', 'wood', 'leather', 
          'mineral', 'mushroom', 'truffle'
        ]
      }
    },
    contemplative: {
      title: 'Contemplative & Clear',
      description: 'Enhances mental clarity while maintaining tranquility',
      characteristics: {
        moderateCaffeine: 1,
        highLTheanine: 2,
        processingBonus: [
          'light-oxidation', 
          'ball-rolled', 
          'minimal-processing',
          'frost-withered',
          'yellow-processing'
        ],
        flavorBonus: [
          'orchid', 'lily', 'mineral', 
          'slate', 'wet stone'
        ]
      }
    },
    harmonizing: {
      title: 'Nourishing & Harmonizing',
      description: 'Promotes overall wellbeing and body-mind balance',
      characteristics: {
        balancedRatio: 2,
        processingBonus: [
          'gaba-processed', 
          'shade-grown', 
          'minimal-processing',
          'osmanthus-scented',
          'cryodesiccated'
        ],
        flavorBonus: [
          'umami', 'sweet', 'mineral', 
          'bamboo', 'seaweed'
        ]
      }
    },
    invigorating: {
      title: 'Invigorating & Bright',
      description: 'Creates mental alertness with a light, uplifted feeling',
      characteristics: {
        moderateCaffeine: 2,
        processingBonus: [
          'pan-fired', 
          'light-oxidation', 
          'bug-bitten',
          'yellow-processing'
        ],
        flavorBonus: [
          'floral', 'muscatel', 'citrus', 
          'fresh', 'bergamot'
        ]
      }
    },
    warming: {
      title: 'Warming & Centering',
      description: 'Provides inner warmth and emotional centeredness',
      characteristics: {
        moderateCaffeine: 1,
        processingBonus: [
          'medium-roast', 
          'charcoal-roasted', 
          'oxidised',
          'full-oxidation',
          'roasted'
        ],
        flavorBonus: [
          'toasted grain', 'caramel', 
          'roasted nuts', 'honey', 'coffee'
        ]
      }
    }
  };
  
  // Flavor-Mood Correlations with Granular Categories
  export const flavorMoodCorrelations = {
    floral: {
      white_floral: {
        moods: ['serene', 'harmonizing', 'calming'],
        intensity: 2.5,
        flavors: ['jasmine', 'lilac', 'gardenia']
      },
      herbal_floral: {
        moods: ['serene', 'calming', 'meditative'],
        intensity: 2,
        flavors: ['chamomile', 'chrysanthemum', 'lavender', 'rose']
      }
    },
    fruity: {
      stone_fruit: {
        moods: ['invigorating', 'serene', 'harmonizing'],
        intensity: 1.8,
        flavors: ['peach', 'apricot', 'nectarine', 'plum']
      },
      citrus: {
        moods: ['energizing', 'invigorating'],
        intensity: 2,
        flavors: ['lemon', 'lime', 'orange', 'grapefruit', 'bergamot']
      },
      tropical: {
        moods: ['invigorating', 'serene'],
        intensity: 1.7,
        flavors: ['pineapple', 'mango', 'passion fruit', 'lychee', 'coconut']
      },
      berry: {
        moods: ['serene', 'harmonizing'],
        intensity: 1.5,
        flavors: ['strawberry', 'raspberry', 'blackberry', 'blueberry']
      },
      tree_fruit: {
        moods: ['contemplative', 'serene'],
        intensity: 1.3,
        flavors: ['apple', 'pear', 'quince']
      },
      dried_fruit: {
        moods: ['cozy', 'warming'],
        intensity: 1,
        flavors: ['raisin', 'fig', 'date']
      }
    },
    vegetal: {
        leafy: {
          moods: ['calming', 'harmonizing'],
          intensity: 1.7,
          flavors: ['spinach', 'kale', 'lettuce', 'grass']
        },
        cruciferous: {
          moods: ['contemplative', 'harmonizing'],
          intensity: 1.3,
          flavors: ['broccoli', 'cabbage', 'cauliflower']
        },
        herbaceous: {
          moods: ['calming', 'invigorating'],
          intensity: 1.6,
          flavors: ['parsley', 'thyme', 'mint', 'sage', 'basil']
        }
      },
      nutty_and_toasty: {
        nuts: {
          moods: ['warming', 'cozy', 'meditative'],
          intensity: 1.5,
          flavors: ['almond', 'hazelnut', 'walnut', 'chestnut', 'peanut']
        },
        toasted: {
          moods: ['warming', 'contemplative'],
          intensity: 1.3,
          flavors: ['bread', 'grain', 'barley', 'rice']
        }
      },
      spicy: {
        pungent: {
          moods: ['energizing', 'invigorating'],
          intensity: 1.6,
          flavors: ['pepper', 'ginger', 'cinnamon', 'clove', 'anise', 'licorice']
        },
        cooling: {
          moods: ['calming', 'serene'],
          intensity: 1.4,
          flavors: ['menthol', 'camphor']
        }
      },
      sweet: {
        caramelized: {
          moods: ['cozy', 'warming', 'harmonizing'],
          intensity: 1.7,
          flavors: ['honey', 'caramel', 'brown sugar', 'molasses']
        },
        vanilla: {
          moods: ['serene', 'calming'],
          intensity: 1.5,
          flavors: ['vanilla']
        },
        chocolate: {
          moods: ['cozy', 'meditative'],
          intensity: 1.6,
          flavors: ['cocoa', 'dark chocolate']
        }
      },
      earthy: {
        soil: {
          moods: ['meditative', 'grounding'],
          intensity: 1.8,
          flavors: ['petrichor', 'loam', 'forest floor']
        },
        minerals: {
          moods: ['contemplative', 'harmonizing'],
          intensity: 1.5,
          flavors: ['wet stone', 'flint', 'slate']
        },
        fungal: {
          moods: ['meditative', 'contemplative'],
          intensity: 1.4,
          flavors: ['truffle']
        },
        marine: {
          moods: ['calming', 'harmonizing'],
          intensity: 1.6,
          flavors: ['seaweed', 'ocean', 'brine']
        }
      },
      woody: {
        resinous: {
          moods: ['meditative', 'grounding'],
          intensity: 1.7,
          flavors: ['pine', 'cedar', 'sandalwood']
        },
        fresh: {
          moods: ['contemplative', 'serene'],
          intensity: 1.5,
          flavors: ['bamboo', 'oak', 'eucalyptus']
        }
      },
      roasted: {
        smoky: {
          moods: ['warming', 'meditative'],
          intensity: 1.2,
          flavors: ['bonfire', 'tobacco', 'burnt']
        },
        nutty: {
          moods: ['warming', 'cozy'],
          intensity: 1,
          flavors: ['roasted nuts', 'coffee']
        }
      },
      aged: {
        fermented: {
          moods: ['meditative', 'contemplative'],
          intensity: 1.5,
          flavors: ['leather', 'compost', 'autumn leaves']
        },
        oxidized: {
          moods: ['contemplative', 'grounding'],
          intensity: 1.3,
          flavors: ['dried leaves', 'prune']
        }
      },
      umami: {
        savory: {
          moods: ['calming', 'contemplative'],
          intensity: 1.7,
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
          moods: ['invigorating'],
          intensity: 0.5,
          flavors: ['sour', 'tart', 'acidic']
        }
      }
    };
  
  // Processing Methods Alignment with Moods
  export const processingMethodMoodAlignment = {
    // Heat Treatment Methods
    'steamed': {
      moods: ['calming', 'harmonizing', 'serene'],
      intensity: 1.7,
      category: 'heat',
      description: 'Gentle heat preserves delicate compounds'
    },
    'pan-fired': {
      moods: ['invigorating', 'energizing', 'contemplative'],
      intensity: 1.2,
      category: 'heat',
      description: 'Light toasting adds complexity and stimulation'
    },
    'light-roast': {
      moods: ['serene', 'contemplative', 'warming'],
      intensity: 1.0,
      category: 'heat',
      description: 'Subtle roasting enhances flavor without overwhelming'
    },
    'medium-roast': {
      moods: ['warming', 'cozy', 'energizing'],
      intensity: 1.5,
      category: 'heat',
      description: 'Balanced roasting develops rich, complex notes'
    },
    'heavy-roast': {
      moods: ['meditative', 'warming', 'grounding'],
      intensity: 1.8,
      category: 'heat',
      description: 'Intense roasting creates deep, transformative flavors'
    },
    'charcoal-roasted': {
      moods: ['grounding', 'warming', 'meditative'],
      intensity: 2.0,
      category: 'heat',
      description: 'Traditional roasting method with profound depth'
    },
  
    // Oxidation Methods
    'withered': {
      moods: ['serene', 'harmonizing', 'contemplative'],
      intensity: 1.2,
      category: 'oxidation',
      description: 'Initial processing that preserves natural essence'
    },
    'oxidised': {
      moods: ['energizing', 'warming', 'invigorating'],
      intensity: 1.5,
      category: 'oxidation',
      description: 'Increases complexity and develops bold characteristics'
    },
    'partial-oxidation': {
      moods: ['harmonizing', 'contemplative', 'serene'],
      intensity: 1.3,
      category: 'oxidation',
      description: 'Balanced approach maintaining nuanced flavors'
    },
    'full-oxidation': {
      moods: ['energizing', 'warming', 'cozy'],
      intensity: 1.7,
      category: 'oxidation',
      description: 'Complete transformation of leaf characteristics'
    },
    'kill-green': {
      moods: ['calming', 'harmonizing'],
      intensity: 1.4,
      category: 'oxidation',
      description: 'Halts enzymatic processes, preserving delicate compounds'
    },
  
    // Growing and Processing Methods
    'shade-grown': {
      moods: ['calming', 'meditative', 'harmonizing'],
      intensity: 2.2,
      category: 'growing',
      description: 'Increases amino acids and L-theanine content'
    },
    'minimal-processing': {
      moods: ['serene', 'harmonizing', 'contemplative'],
      intensity: 2.0,
      category: 'processing',
      description: 'Preserves the most natural tea characteristics'
    },
    'gaba-processed': {
      moods: ['calming', 'meditative', 'harmonizing'],
      intensity: 2.5,
      category: 'special',
      description: 'Specifically designed to enhance relaxation compounds'
    },
  
    // Scenting and Special Methods
    'jasmine-scented': {
      moods: ['serene', 'calming', 'harmonizing'],
      intensity: 1.6,
      category: 'scenting',
      description: 'Delicate floral notes enhance relaxation'
    },
    'rose-scented': {
      moods: ['serene', 'harmonizing', 'contemplative'],
      intensity: 1.5,
      category: 'scenting',
      description: 'Soft, romantic aromatics promote tranquility'
    },
    'osmanthus-scented': {
      moods: ['serene', 'harmonizing', 'calming'],
      intensity: 1.4,
      category: 'scenting',
      description: 'Sweet, subtle floral notes create balance'
    },
  
    // Aging and Fermentation
    'aged': {
      moods: ['meditative', 'contemplative', 'grounding'],
      intensity: 1.7,
      category: 'aging',
      description: 'Develops complex, refined characteristics over time'
    },
    'fermented': {
      moods: ['meditative', 'grounding', 'cozy'],
      intensity: 1.5,
      category: 'fermentation',
      description: 'Transforms tea through controlled microbial processes'
    },
  
    // Special Processing Methods
    'bug-bitten': {
      moods: ['invigorating', 'serene', 'harmonizing'],
      intensity: 1.3,
      category: 'special',
      description: 'Unique processing creating honey-like complexity'
    },
    'frost-withered': {
      moods: ['contemplative', 'serene', 'harmonizing'],
      intensity: 1.2,
      category: 'special',
      description: 'Cold-induced processing creates unique flavor profiles'
    }
  };
  // Helper Functions
  
  // Helper function for categorizing caffeine and L-theanine levels
  function categorizeLevels(caffeineLevel, lTheanineLevel) {
    return {
      highCaffeine: caffeineLevel >= 7,
      moderateCaffeine: caffeineLevel >= 4 && caffeineLevel <= 6,
      lowCaffeine: caffeineLevel <= 3,
      highLTheanine: lTheanineLevel >= 7,
      lowLTheanine: lTheanineLevel <= 3,
      balancedRatio: Math.abs(caffeineLevel - lTheanineLevel) <= 2
    };
  }
  
  // Calculate compound effect of caffeine and L-theanine
  function calculateCompoundEffect(caffeineLevel, lTheanineLevel) {
    const ratio = lTheanineLevel / caffeineLevel;
    
    return {
      calming: ratio >= 2 ? 2 : ratio,
      energizing: ratio < 1 ? 2 : 1/ratio,
      harmonizing: ratio >= 1.5 && ratio <= 2.5 ? 2 : 0,
      invigorating: caffeineLevel >= 6 && lTheanineLevel >= 5 ? 2 : 0
    };
  }
  
  // Flatten flavor mood correlations for easier processing
  function getFlattenedFlavorMoodCorrelations() {
    const flattened = {};
    
    Object.entries(flavorMoodCorrelations).forEach(([category, subcategories]) => {
      Object.entries(subcategories).forEach(([subcategory, data]) => {
        data.flavors.forEach(flavor => {
          flattened[flavor] = {
            category,
            subcategory,
            moods: data.moods,
            intensity: data.intensity
          };
        });
      });
    });
    
    return flattened;
  }
  
  // Calculate flavor mood influence
  function calculateFlavorMoodInfluence(flavorProfile) {
    const scores = {
      energizing: 0,
      calming: 0,
      serene: 0,
      cozy: 0,
      meditative: 0,
      harmonizing: 0,
      contemplative: 0,
      invigorating: 0,
      warming: 0,
      grounding: 0
    };
  
    const flattenedCorrelations = getFlattenedFlavorMoodCorrelations();
    
    // Normalize flavorProfile to always be an array
    const flavors = Array.isArray(flavorProfile) 
      ? flavorProfile 
      : (flavorProfile ? [flavorProfile] : []);
  
    // Fuzzy matching for flavor correlations
    flavors.forEach(flavor => {
      if (!flavor) return; // Skip empty flavors
  
      // Try exact match first
      let correlation = flattenedCorrelations[flavor.toLowerCase()];
  
      // If no exact match, try partial matching
      if (!correlation) {
        correlation = Object.entries(flattenedCorrelations).find(([key, val]) => 
          flavor.toLowerCase().includes(key.toLowerCase())
        )?.[1];
      }
  
      // If still no correlation, use a default minimal scoring
      if (correlation) {
        correlation.moods.forEach(mood => {
          scores[mood] += correlation.intensity;
        });
      } else {
        // Minimal fallback scoring for unknown flavors
        scores.serene += 0.5;
        scores.harmonizing += 0.5;
      }
    });
  
    return scores;
  }
  
  // Calculate processing method influence
  function calculateProcessingInfluence(methods) {
    const scores = {
      energizing: 0,
      calming: 0,
      serene: 0,
      cozy: 0,
      meditative: 0,
      harmonizing: 0,
      contemplative: 0,
      invigorating: 0,
      warming: 0,
      grounding: 0
    };
  
    // Normalize methods to always be an array
    const processedMethods = Array.isArray(methods) 
      ? methods 
      : (methods ? [methods] : []);
  
    processedMethods.forEach(method => {
      if (!method) return; // Skip empty methods
  
      // Try exact match first
      const alignment = processingMethodMoodAlignment[method.toLowerCase()];
  
      // If no exact match, try partial matching
      if (!alignment) {
        const partialMatch = Object.entries(processingMethodMoodAlignment).find(([key, val]) => 
          method.toLowerCase().includes(key.toLowerCase())
        )?.[1];
  
        if (partialMatch) {
          partialMatch.moods.forEach(mood => {
            scores[mood] += partialMatch.intensity;
          });
        } else {
          // Minimal fallback scoring for unknown methods
          scores.serene += 0.5;
          scores.harmonizing += 0.5;
        }
        return;
      }
  
      // Apply mood scores for known methods
      alignment.moods.forEach(mood => {
        scores[mood] += alignment.intensity;
      });
    });
  
    return scores;
  }
  
  // Get base mood scores for tea type
  function getTypeBaseScores(type) {
    const scores = {
      energizing: 0,
      calming: 0,
      serene: 0,
      cozy: 0,
      meditative: 0,
      harmonizing: 0,
      contemplative: 0,
      invigorating: 0,
      warming: 0,
      grounding: 0
    };
  
    switch(type.toLowerCase()) {
      case 'green':
        scores.calming = 2;
        scores.harmonizing = 1.5;
        scores.contemplative = 1;
        break;
      case 'white':
        scores.serene = 2;
        scores.harmonizing = 1.5;
        scores.contemplative = 1;
        break;
      case 'oolong':
        scores.contemplative = 2;
        scores.warming = 1.5;
        scores.harmonizing = 1;
        break;
      case 'puerh':
        scores.meditative = 2;
        scores.grounding = 1.5;
        scores.cozy = 1;
        break;
      case 'black':
        scores.energizing = 2;
        scores.warming = 1.5;
        scores.invigorating = 1;
        break;
      case 'yellow':
        scores.harmonizing = 2;
        scores.contemplative = 1.5;
        scores.serene = 1;
        break;
      case 'herbal':
        scores.calming = 2;
        scores.serene = 1.5;
        scores.cozy = 1;
        break;
    }
    
    return scores;
  }
  
  // Main mood calculation function
   function calculateTeaMood(tea) {
    // Validate input
    if (!tea || typeof tea !== 'object') {
      console.error('Invalid tea object:', tea);
      return {
        primary: {
          type: 'serene',
          title: 'Serene & Refreshing',
          description: 'Default mood for unrecognized tea',
          score: 5
        },
        secondary: null,
        allScores: {
          serene: 5,
          harmonizing: 4,
          calming: 3
        }
      };
    }
  
    const {
      type = 'unknown',
      caffeineLevel = 3,
      lTheanineLevel = 5,
      flavorProfile = [],
      processingMethods = []
    } = tea;
  
    // Get base scores from tea type
    const scores = getTypeBaseScores(type);
    
    // Add caffeine and L-theanine influences
    const levels = categorizeLevels(caffeineLevel, lTheanineLevel);
    const compounds = calculateCompoundEffect(caffeineLevel, lTheanineLevel);
    
    Object.entries(moodCategories).forEach(([mood, category]) => {
      // Safely handle characteristics
      if (category.characteristics) {
        Object.entries(category.characteristics).forEach(([characteristic, value]) => {
          if (levels[characteristic]) {
            scores[mood] += value;
          }
        });
      }
      
      // Safely handle compound effects
      if (compounds[mood]) {
        scores[mood] += compounds[mood];
      }
    });
  
    // Add flavor influences
    const flavorScores = calculateFlavorMoodInfluence(flavorProfile);
    Object.keys(scores).forEach(mood => {
      scores[mood] += flavorScores[mood];
    });
  
    // Add processing method influences
    const processingScores = calculateProcessingInfluence(processingMethods);
    Object.keys(scores).forEach(mood => {
      scores[mood] += processingScores[mood];
    });
  
    // Normalize scores to 0-10 range
    const maxScore = Math.max(...Object.values(scores));
    const normalizedScores = {};
    Object.entries(scores).forEach(([mood, score]) => {
      normalizedScores[mood] = Math.round((score / maxScore) * 10);
    });
  
    // Get primary and secondary moods
    const sortedMoods = Object.entries(normalizedScores)
      .filter(([, score]) => score > 0)
      .sort(([, a], [, b]) => b - a)
      .map(([mood, score]) => ({
        type: mood,
        title: moodCategories[mood]?.title || 'Undefined Mood',
        description: moodCategories[mood]?.description || 'Mood description unavailable',
        score
      }));
  
    return {
      primary: sortedMoods[0] || {
        type: 'serene',
        title: 'Serene & Refreshing',
        description: 'Default mood for unrecognized tea',
        score: 5
      },
      secondary: sortedMoods[1] || null,
      allScores: normalizedScores
    };
  }
  
  // Ensure the function is exported
  export { calculateTeaMood };
  
  // Helper function to get mood description
  export function getMoodDescription(tea) {
    const moodResult = calculateTeaMood(tea);
    
    if (!moodResult.primary) {
      return 'Mood profile unavailable';
    }
  
    const primaryMood = moodResult.primary;
    const secondaryMood = moodResult.secondary;
  
    let description = `Primary: ${primaryMood.title} (${primaryMood.score}/10) - ${primaryMood.description}`;
    
    if (secondaryMood && secondaryMood.score >= primaryMood.score * 0.7) {
      description += `\nSecondary: ${secondaryMood.title} (${secondaryMood.score}/10) - ${secondaryMood.description}`;
    }
  
    return description;
  }
  
  // Mood recommendation system
  export function recommendTeaByMood(targetMood, teaDatabase) {
    // Validate input
    if (!targetMood || !teaDatabase || !Array.isArray(teaDatabase)) {
      throw new Error('Invalid input for tea mood recommendation');
    }
  
    // Calculate mood scores for all teas
    const teaMoodScores = teaDatabase.map(tea => {
      const moodResult = calculateTeaMood(tea);
      return {
        ...tea,
        moodProfile: moodResult
      };
    });
  
    // Sort teas by how closely they match the target mood
    const recommendedTeas = teaMoodScores
      .filter(tea => tea.moodProfile.primary)
      .sort((a, b) => {
        const aScore = a.moodProfile.allScores[targetMood] || 0;
        const bScore = b.moodProfile.allScores[targetMood] || 0;
        return bScore - aScore;
      })
      .slice(0, 5); // Top 5 recommendations
  
    return recommendedTeas.map(tea => ({
      name: tea.name,
      type: tea.type,
      moodScore: tea.moodProfile.allScores[targetMood],
      primaryMood: tea.moodProfile.primary,
      description: getMoodDescription(tea)
    }));
  }
  
  // Advanced mood pairing suggestions
  export function createMoodPairingGuide() {
    const moodPairings = {};
  
    // Create pairings based on complementary and adjacent moods
    const moodRelationships = {
      energizing: ['invigorating', 'warming'],
      calming: ['harmonizing', 'contemplative'],
      serene: ['harmonizing', 'contemplative'],
      cozy: ['meditative', 'warming'],
      meditative: ['grounding', 'contemplative'],
      harmonizing: ['serene', 'calming'],
      contemplative: ['serene', 'meditative'],
      invigorating: ['energizing', 'warming'],
      warming: ['energizing', 'cozy']
    };
  
    // Generate suggested mood transitions
    Object.entries(moodRelationships).forEach(([primaryMood, relatedMoods]) => {
      moodPairings[primaryMood] = {
        complementary: relatedMoods,
        transitionSuggestions: relatedMoods.map(mood => ({
          mood,
          description: `Smoothly transition from ${primaryMood} to ${mood} mood`
        }))
      };
    });
  
    return moodPairings;
  }
  
  // Seasonal mood correlation
  export function getSeasonalMoodCorrelation() {
    return {
      spring: {
        dominantMoods: ['serene', 'harmonizing', 'invigorating'],
        characteristics: 'Renewal, lightness, and gentle awakening'
      },
      summer: {
        dominantMoods: ['energizing', 'invigorating', 'serene'],
        characteristics: 'Vibrance, freshness, and uplifting energy'
      },
      autumn: {
        dominantMoods: ['warming', 'contemplative', 'cozy'],
        characteristics: 'Grounding, reflection, and inner warmth'
      },
      winter: {
        dominantMoods: ['meditative', 'cozy', 'harmonizing'],
        characteristics: 'Introspection, comfort, and deep restoration'
      }
    };
  }
  
  // Diagnostic tool for understanding tea mood complexity
  export function analyzeMoodComplexity(tea) {
    const moodResult = calculateTeaMood(tea);
    
    // Calculate mood diversity
    const activeMoods = Object.entries(moodResult.allScores)
      .filter(([, score]) => score > 0)
      .sort(([, a], [, b]) => b - a);
  
    const moodDiversity = {
      totalActiveMoods: activeMoods.length,
      topMoods: activeMoods.slice(0, 3).map(([mood, score]) => ({
        mood,
        title: moodCategories[mood].title,
        score
      })),
      moodBalance: calculateMoodBalance(moodResult.allScores)
    };
  
    return {
      tea: {
        name: tea.name,
        type: tea.type
      },
      primary: moodResult.primary,
      secondary: moodResult.secondary,
      moodDiversity
    };
  }
  
  // Helper function to calculate mood balance
  function calculateMoodBalance(moodScores) {
    const scoreValues = Object.values(moodScores);
    const mean = scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length;
    const variance = scoreValues.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / scoreValues.length;
    const standardDeviation = Math.sqrt(variance);
  
    return {
      mean,
      standardDeviation,
      balanceIndex: 10 - standardDeviation // Lower deviation means more balanced mood profile
    };
  }
  
  // Export all functions and data for comprehensive use
  export default {
    moodCategories,
    flavorMoodCorrelations,
    processingMethodMoodAlignment,
    calculateTeaMood,
    getMoodDescription,
    recommendTeaByMood,
    createMoodPairingGuide,
    getSeasonalMoodCorrelation,
    analyzeMoodComplexity
  };