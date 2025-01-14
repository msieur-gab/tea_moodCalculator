
import {
  flavorMoodCorrelations,
  processingMethodMoodAlignment,
  atomicMoods,
  moodCombinations
} from './moodParameters.js';

// Helper function for categorizing compound levels
function calculateCompoundLevels(tea) {
  const ratio = tea.lTheanineLevel / tea.caffeineLevel;
  
  const levels = {
    highLTheanine: tea.lTheanineLevel >= 7,
    moderateLTheanine: tea.lTheanineLevel >= 4 && tea.lTheanineLevel < 7,
    lowLTheanine: tea.lTheanineLevel < 4,
    highCaffeine: tea.caffeineLevel >= 4,
    moderateCaffeine: tea.caffeineLevel >= 2 && tea.caffeineLevel < 4,
    lowCaffeine: tea.caffeineLevel < 2,
    balancedRatio: ratio >= 1.8 && ratio <= 3.0,
    extremeRatio: ratio > 4.5,
    lowRatio: ratio < 1.0
  };

  levels.disharmonious = levels.extremeRatio || levels.lowRatio;
  levels.balanced = levels.balancedRatio && !levels.disharmonious;

  return levels;
}


// Improved score normalization using logarithmic scaling
function normalizeScore(raw) {
  return 10 * (1 - Math.exp(-raw/4.5));
}

// Define mood interactions and their effects
const moodInteractions = {
  // Energy State Interactions
  energizing_focusing: {
    threshold: 4,
    boost: 0.3,
    target: 'invigorating'
  },
  energizing_uplifting: {
    threshold: 4,
    boost: 0.25,
    target: 'refreshing'
  },
  invigorating_refreshing: {
    threshold: 4,
    boost: 0.3,
    target: 'uplifting'
  },

  // Calming State Interactions
  calming_harmonizing: {
    threshold: 3.5,
    boost: 0.4,
    target: 'serene'
  },
  calming_meditative: {
    threshold: 4,
    boost: 0.35,
    target: 'contemplative'
  },
  serene_nourishing: {
    threshold: 4,
    boost: 0.25,
    target: 'harmonizing'
  },

  // Mental State Interactions
  focusing_contemplative: {
    threshold: 4,
    boost: 0.3,
    target: 'meditative'
  },
  contemplative_meditative: {
    threshold: 4,
    boost: 0.35,
    target: 'grounding'
  },
  focusing_harmonizing: {
    threshold: 3.5,
    boost: 0.55,
    target: 'nourishing'
  },

  // Comfort State Interactions
  cozy_warming: {
    threshold: 4,
    boost: 0.3,
    target: 'grounding'
  },
  warming_grounding: {
    threshold: 4,
    boost: 0.25,
    target: 'meditative'
  },
  cozy_harmonizing: {
    threshold: 4,
    boost: 0.2,
    target: 'nourishing'
  },

  // Balancing Combinations
  calming_energizing: {
    threshold: 5,
    boost: 0.3,
    target: 'harmonizing'
  },
  warming_refreshing: {
    threshold: 4,
    boost: 0.25,
    target: 'uplifting'
  },
  grounding_invigorating: {
    threshold: 4,
    boost: 0.2,
    target: 'focusing'
  },

  // Harmonizing Interactions
  harmonizing_nourishing: {
    threshold: 4,
    boost: 0.3,
    target: 'serene'
  },
  harmonizing_focusing: {
    threshold: 4,
    boost: 0.25,
    target: 'contemplative'
  },
  harmonizing_grounding: {
    threshold: 4,
    boost: 0.2,
    target: 'meditative'
  },

  // Uplifting State Interactions
  uplifting_refreshing: {
    threshold: 4,
    boost: 0.3,
    target: 'invigorating'
  },
  uplifting_harmonizing: {
    threshold: 4,
    boost: 0.25,
    target: 'serene'
  },
  refreshing_nourishing: {
    threshold: 4,
    boost: 0.2,
    target: 'harmonizing'
  },
  focusing_grounding: {
    threshold: 4,
    boost: 0.3,
    target: 'meditative'
},
serene_nourishing: {
    threshold: 3.5,
    boost: 0.4,
    target: 'harmonizing'
}
};

// Apply mood interactions to modify scores
function applyMoodInteractions(scores) {
  const modifiedScores = { ...scores };

  Object.entries(moodInteractions).forEach(([interaction, config]) => {
    const [mood1, mood2] = interaction.split('_');
    
    if (modifiedScores[mood1] >= config.threshold && 
        modifiedScores[mood2] >= config.threshold) {
      const interactionStrength = Math.min(modifiedScores[mood1], modifiedScores[mood2]);
      modifiedScores[config.target] += interactionStrength * config.boost;
    }
  });

  return modifiedScores;
}

// Flatten flavor mood correlations
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

// Flatten processing method mood alignments
function getFlattenedProcessingMethodMoodAlignment() {
  const flattened = {};
  
  Object.entries(processingMethodMoodAlignment).forEach(([method, data]) => {
    flattened[method] = {
      moods: data.moods,
      intensity: data.intensity,
      category: data.category
    };
  });
  
  return flattened;
}

// Calculate flavor mood influence
function calculateFlavorMoodInfluence(flavorProfile) {
  const scores = {
    energizing: 0,
    invigorating: 0,
    calming: 0,
    serene: 0,
    focusing: 0,
    contemplative: 0,
    cozy: 0,
    warming: 0,
    grounding: 0,
    meditative: 0,
    harmonizing: 0,
    nourishing: 0,
    uplifting: 0,
    refreshing: 0
  };

  const flattenedCorrelations = getFlattenedFlavorMoodCorrelations();
  const flavors = Array.isArray(flavorProfile) ? flavorProfile : [];

  // Track number of matches per mood to prevent over-accumulation
  const moodMatches = {};
  
  flavors.forEach(flavor => {
    let correlation = flattenedCorrelations[flavor.toLowerCase()];
    
    if (correlation) {
      correlation.moods.forEach(mood => {
        // Initialize match counter
        moodMatches[mood] = (moodMatches[mood] || 0) + 1;
        
        // Apply diminishing returns for multiple matches
        const multiplier = 1 / Math.sqrt(moodMatches[mood]);
        scores[mood] += correlation.intensity * multiplier;
      });
    }
  });

  return scores;
}

// Calculate processing method mood influence
function calculateProcessingMethodInfluence(methods) {
  const scores = {
    energizing: 0,
    invigorating: 0,
    calming: 0,
    serene: 0,
    focusing: 0,
    contemplative: 0,
    cozy: 0,
    warming: 0,
    grounding: 0,
    meditative: 0,
    harmonizing: 0,
    nourishing: 0,
    uplifting: 0,
    refreshing: 0
  };

  // Define category weights for different processing types
  const categoryWeights = {
    'growing': 1.0,      // No reduction for growing methods (e.g., shade-grown)
    'heat': 0.8,         // 20% reduction for heat methods
    'oxidation': 0.7,    // 30% reduction for oxidation methods
    'drying': 0.8,       // 20% reduction for drying methods
    'scenting': 0.9,     // 10% reduction for scenting
    'aging': 0.85,       // 15% reduction for aging
    'special': 1.0,      // No reduction for special methods
    'fermentation': 0.75 // 25% reduction for fermentation
  };

  const flattenedMethods = getFlattenedProcessingMethodMoodAlignment();
  const processedMethods = Array.isArray(methods) ? methods : [];

  // Track methods by category for progressive reduction
  const categoryCount = {};

  processedMethods.forEach(method => {
    const alignment = flattenedMethods[method.toLowerCase()];
    
    if (alignment) {
      // Get base weight for this category
      const baseWeight = categoryWeights[alignment.category] || 0.7;
      
      // Count methods in this category
      categoryCount[alignment.category] = (categoryCount[alignment.category] || 0) + 1;
      
      // Calculate diminishing returns for multiple methods in same category
      const methodCount = categoryCount[alignment.category];
      const diminishingFactor = 1 / Math.sqrt(methodCount);
      
      // Calculate final weight
      const finalWeight = baseWeight * diminishingFactor;

      // Apply the weighted intensity to each mood
      alignment.moods.forEach(mood => {
        scores[mood] += alignment.intensity * finalWeight;
      });
    }
  });

  return scores;
}

// Calculate granular moods
export function calculateGranularMoods(tea) {
  if (!tea || typeof tea !== 'object') {
    console.error('Invalid tea object:', tea);
    return null;
  }

  const safeTea = {
    type: tea.type || 'unknown',
    caffeineLevel: tea.caffeineLevel !== undefined ? tea.caffeineLevel : 3,
    lTheanineLevel: tea.lTheanineLevel !== undefined ? tea.lTheanineLevel : 5,
    flavorProfile: Array.isArray(tea.flavorProfile) ? tea.flavorProfile : [],
    processingMethods: Array.isArray(tea.processingMethods) ? tea.processingMethods : []
  };

  const scores = {};
  const levels = calculateCompoundLevels(safeTea);

  // Calculate base scores with penalties for extreme ratios
  Object.entries(atomicMoods).forEach(([mood, definition]) => {
    let score = 0;
    
    // Compound triggers with ratio penalties
    Object.entries(definition.triggers).forEach(([trigger, weight]) => {
      if (levels[trigger]) {
        score += weight;

        // Apply penalties for disharmonious ratios
        if (levels.disharmonious) {
          if (['harmonizing', 'focusing'].includes(mood)) {
            score *= 0.7; // 30% penalty for these moods
          }
          if (['serene', 'calming'].includes(mood) && levels.extremeRatio) {
            score *= 0.8; // 20% penalty for extreme ratios
          }
        }
      }
    });

    // Add scaled flavor influences
    const flavorScores = calculateFlavorMoodInfluence(safeTea.flavorProfile);
    score += (flavorScores[mood] || 0) * 0.7; // Reduce flavor influence

    // Add scaled processing influences
    const processingScores = calculateProcessingMethodInfluence(safeTea.processingMethods);
    score += (processingScores[mood] || 0) * 0.6; // Reduce processing influence

    // Apply mood-specific adjustments
    if (mood === 'harmonizing' && !levels.balanced) {
      score *= 0.8; // Additional penalty for harmonizing when not balanced
    }

    // Normalize score
    scores[mood] = normalizeScore(score);
  });

  // Apply refined mood interactions
  const finalScores = applyMoodInteractions(scores);

  // Ensure scores stay within bounds
  Object.keys(finalScores).forEach(mood => {
    finalScores[mood] = Math.min(10, Math.max(0, finalScores[mood]));
  });

  return finalScores;
}

// Create granular mood profile
export function createGranularMoodProfile(tea) {
  // Get atomic mood scores with interactions
  const atomicScores = calculateGranularMoods(tea);
  
  // Sort moods by score
  const sortedMoods = Object.entries(atomicScores)
    .sort(([, a], [, b]) => b - a);
  
  // Get top two moods
  const primaryMood = sortedMoods[0];
  const secondaryMood = sortedMoods[1];
  
  // Calculate influence percentages with improved accuracy
  const totalScore = sortedMoods.reduce((sum, [, score]) => sum + score, 0);
  const primaryInfluence = ((primaryMood[1] / totalScore) * 100).toFixed(1);
  const secondaryInfluence = ((secondaryMood[1] / totalScore) * 100).toFixed(1);

  // Create composite key
  const compositeKey = `${primaryMood[0]}+${secondaryMood[0]}`;
  const reverseKey = `${secondaryMood[0]}+${primaryMood[0]}`;
  
   // First try to get the exact combination from moodCombinations
   let combination = moodCombinations[compositeKey] || moodCombinations[reverseKey];
  
   if (!combination) {
     // If no exact match, look for similar combinations
     const similarCombos = Object.entries(moodCombinations).filter(([key, value]) => 
       key.includes(primaryMood[0]) || key.includes(secondaryMood[0])
     );
     
     if (similarCombos.length > 0) {
       // Use the most similar combination's structure
       const [, mostSimilar] = similarCombos[0];
       combination = {
         name: `${primaryMood[0].charAt(0).toUpperCase() + primaryMood[0].slice(1)}-${secondaryMood[0]} Harmony`,
         description: `Combines the ${primaryMood[0]} qualities with ${secondaryMood[0]} characteristics, creating ${mostSimilar.description.toLowerCase()}`
       };
     } else {
       // Fallback only if no similar combinations exist
       combination = {
         name: `${primaryMood[0].charAt(0).toUpperCase() + primaryMood[0].slice(1)}-${secondaryMood[0]} Blend`,
         description: `A unique combination of ${primaryMood[0]} and ${secondaryMood[0]} qualities`
       };
     }
   }
 
   return {
     compositeMood: {
       name: combination.name,
       description: combination.description,
       score: normalizeScore((primaryMood[1] + secondaryMood[1]) / 2)
     },
     components: {
       primary: {
         mood: primaryMood[0],
         score: primaryMood[1],
         influence: `${primaryInfluence}%`,
         description: atomicMoods[primaryMood[0]].description
       },
       secondary: {
         mood: secondaryMood[0],
         score: secondaryMood[1],
         influence: `${secondaryInfluence}%`,
         description: atomicMoods[secondaryMood[0]].description
       }
     },
     allScores: atomicScores,
     dominantCharacteristics: identifyDominantCharacteristics(tea, atomicScores)
   };
 }

// Identify dominant characteristics
function identifyDominantCharacteristics(tea, scores) {
  return {
      compounds: {
          lTheanine: tea.lTheanineLevel,
          caffeine: tea.caffeineLevel,
          ratio: (tea.lTheanineLevel / tea.caffeineLevel).toFixed(2)
      },
      strongestFlavors: tea.flavorProfile
          .map(flavor => ({
              flavor,
              impact: calculateFlavorImpact(flavor, scores)
          }))
          .sort((a, b) => b.impact - a.impact)
          .slice(0, 3),
      keyProcessingMethods: tea.processingMethods
          .map(method => ({
              method,
              impact: calculateProcessingImpact(method, scores)
          }))
          .sort((a, b) => b.impact - a.impact)
  };
}

// Calculate flavor impact
function calculateFlavorImpact(flavor, scores) {
  let impact = 0;
  const flattenedCorrelations = getFlattenedFlavorMoodCorrelations();
  
  const correlation = flattenedCorrelations[flavor.toLowerCase()] || 
    Object.entries(flattenedCorrelations).find(([key]) => 
      flavor.toLowerCase().includes(key.toLowerCase())
    )?.[1];

  if (correlation) {
    correlation.moods.forEach(mood => {
      impact += scores[mood] * correlation.intensity;
    });
  }

  return impact;
}

// Calculate processing method impact
function calculateProcessingImpact(method, scores) {
  let impact = 0;
  const flattenedProcessingMethods = getFlattenedProcessingMethodMoodAlignment();
  
  const alignment = flattenedProcessingMethods[method.toLowerCase()] || 
    Object.entries(flattenedProcessingMethods).find(([key]) => 
      method.toLowerCase().includes(key.toLowerCase())
    )?.[1];

  if (alignment) {
    alignment.moods.forEach(mood => {
      impact += scores[mood] * alignment.intensity;
    });
  }

  return impact;
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

// Export default object with key functions and data
export default {
  calculateGranularMoods,
  createGranularMoodProfile,
  getSeasonalMoodCorrelation
};
