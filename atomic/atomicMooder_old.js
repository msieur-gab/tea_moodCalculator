
import {
  flavorMoodCorrelations,
  processingMethodMoodAlignment,
  atomicMoods,
  moodCombinations
} from './moodParameters.js';

// Helper function for categorizing compound levels
function calculateCompoundLevels(tea) {
  const ratio = tea.lTheanineLevel / tea.caffeineLevel;
  return {
      highLTheanine: tea.lTheanineLevel >= 7,
      moderateLTheanine: tea.lTheanineLevel >= 4 && tea.lTheanineLevel < 7,
      lowLTheanine: tea.lTheanineLevel < 4,
      highCaffeine: tea.caffeineLevel >= 7,
      moderateCaffeine: tea.caffeineLevel >= 4 && tea.caffeineLevel < 7,
      lowCaffeine: tea.caffeineLevel < 4,
      balancedRatio: ratio >= 1.5 && ratio <= 2.5
  };
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

  // Fuzzy matching for flavor correlations with more detailed scoring
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

    // If correlation found, apply more nuanced scoring
    if (correlation) {
      correlation.moods.forEach(mood => {
        // Use the intensity from the flavor correlation
        scores[mood] += correlation.intensity || 0;
      });
    } else {
      // Minimal fallback scoring for unknown flavors
      scores.serene += 0.5;
      scores.harmonizing += 0.5;
    }
  });

  return scores;
}

// Calculate processing method mood influence
function calculateProcessingMethodInfluence(methods) {
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

  const flattenedProcessingMethods = getFlattenedProcessingMethodMoodAlignment();

  // Normalize methods to always be an array
  const processedMethods = Array.isArray(methods) 
    ? methods 
    : (methods ? [methods] : []);

  processedMethods.forEach(method => {
    if (!method) return; // Skip empty methods

    // Try exact match first
    const alignment = flattenedProcessingMethods[method.toLowerCase()];

    // If no exact match, try partial matching
    if (!alignment) {
      const partialMatch = Object.entries(flattenedProcessingMethods).find(([key, val]) => 
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

// Calculate granular moods
export function calculateGranularMoods(tea) {
  // Validate input
 if (!tea || typeof tea !== 'object') {
  console.error('Invalid tea object:', tea);
  return {
    compositeMood: {
      name: 'Unable to Analyze',
      description: 'Invalid tea data',
      score: 0
    },
    components: {
      primary: {
        mood: 'unknown',
        score: 0,
        influence: '0%',
        description: 'No mood data available'
      },
      secondary: {
        mood: 'unknown',
        score: 0,
        influence: '0%',
        description: 'No mood data available'
      }
    },
    allScores: {},
    dominantCharacteristics: {
      compounds: {
        lTheanine: 0,
        caffeine: 0,
        ratio: '0'
      },
      strongestFlavors: [],
      keyProcessingMethods: []
    }
  };
}

  // Ensure required properties exist with default values
  const safeTea = {
    type: tea.type || 'unknown',
    caffeineLevel: tea.caffeineLevel !== undefined ? tea.caffeineLevel : 3,
    lTheanineLevel: tea.lTheanineLevel !== undefined ? tea.lTheanineLevel : 5,
    flavorProfile: Array.isArray(tea.flavorProfile) ? tea.flavorProfile : [],
    processingMethods: Array.isArray(tea.processingMethods) ? tea.processingMethods : []
  };

  const scores = {};
  const levels = calculateCompoundLevels(safeTea);

  // Calculate scores for each atomic mood
  Object.entries(atomicMoods).forEach(([mood, definition]) => {
    let score = 0;
    
    // Compound triggers
    Object.entries(definition.triggers).forEach(([trigger, weight]) => {
      if (levels[trigger]) {
        score += weight;
      }
    });

    // Add flavor influences
    const flavorScores = calculateFlavorMoodInfluence(safeTea.flavorProfile);
    score += flavorScores[mood] || 0;

    // Add processing method influences
    const processingScores = calculateProcessingMethodInfluence(safeTea.processingMethods);
    score += processingScores[mood] || 0;

    // Normalize score to 0-10 range
    scores[mood] = Math.max(0, Math.min(10, (score / 6) * 10));
  });

  return scores;
}

// Create granular mood profile
export function createGranularMoodProfile(tea) {
  // Get atomic mood scores
  const atomicScores = calculateGranularMoods(tea);
  
  // Sort moods by score
  const sortedMoods = Object.entries(atomicScores)
      .sort(([, a], [, b]) => b - a);
  
  // Get top two moods
  const primaryMood = sortedMoods[0];
  const secondaryMood = sortedMoods[1];
  
  // Create composite key
  const compositeKey = `${primaryMood[0]}+${secondaryMood[0]}`;
  const reverseKey = `${secondaryMood[0]}+${primaryMood[0]}`;
  
  // Get combination profile
  const combination = moodCombinations[compositeKey] || moodCombinations[reverseKey] || {
      name: `${primaryMood[0].charAt(0).toUpperCase() + primaryMood[0].slice(1)} ${secondaryMood[0]}`,
      description: `Blend of ${primaryMood[0]} and ${secondaryMood[0]} characteristics`
  };

  // Calculate influence percentages
  const totalScore = primaryMood[1] + secondaryMood[1];
  const primaryInfluence = ((primaryMood[1] / totalScore) * 100).toFixed(1);
  const secondaryInfluence = ((secondaryMood[1] / totalScore) * 100).toFixed(1);
  
  return {
      compositeMood: {
          name: combination.name,
          description: combination.description,
          score: (primaryMood[1] + secondaryMood[1]) / 2
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
