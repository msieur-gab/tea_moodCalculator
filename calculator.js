// Tea Flavor Wheel Configuration
export const teaFlavorWheel = {
  floral: {
    white_floral: ['jasmine', 'lilac', 'gardenia'],
    herbal_floral: ['chamomile', 'chrysanthemum', 'lavender', 'rose'],
    relaxationScore: 2 
  },
  fruity: {
    stone_fruit: ['peach', 'apricot', 'nectarine', 'plum'],
    citrus: ['lemon', 'lime', 'orange', 'grapefruit', 'bergamot'],
    tropical: ['pineapple', 'mango', 'passion fruit', 'lychee', 'coconut'],
    berry: ['strawberry', 'raspberry', 'blackberry', 'blueberry'],
    tree_fruit: ['apple', 'pear', 'quince'],
    dried_fruit: ['raisin', 'fig', 'date'],
    relaxationScore: 1
  },
  vegetal: { 
    leafy: ['spinach', 'kale', 'lettuce', 'grass'],
    cruciferous: ['broccoli', 'cabbage', 'cauliflower'],
    herbaceous: ['parsley', 'thyme', 'mint', 'sage', 'basil'],
    relaxationScore: 1.5
  },
  nutty_and_toasty: {
    nuts: ['almond', 'hazelnut', 'walnut', 'chestnut', 'peanut'],
    toasted: ['bread', 'grain', 'barley', 'rice'],
    relaxationScore: 1
  },
  spicy: {
    pungent: ['pepper', 'ginger', 'cinnamon', 'clove', 'anise', 'licorice'],
    cooling: ['menthol', 'camphor'],
    relaxationScore: 0.5
  },
  sweet: {
    caramelized: ['honey', 'caramel', 'brown sugar', 'molasses'],
    vanilla: ['vanilla'],
    chocolate: ['cocoa', 'dark chocolate'],
    relaxationScore: 1.5
  },
  earthy: {
    soil: ['petrichor', 'loam', 'forest floor'],
    minerals: ['wet stone', 'flint', 'slate'],
    fungal: ['truffle'],
    marine: ['seaweed', 'ocean', 'brine'],
    relaxationScore: 1
  },
  woody: {
    resinous: ['pine', 'cedar', 'sandalwood'],
    fresh: ['bamboo', 'oak', 'eucalyptus'],
    relaxationScore: 1
  },
  roasted: {
    smoky: ['bonfire', 'tobacco', 'burnt'],
    nutty: ['roasted nuts', 'coffee'],
    relaxationScore: 0
  },
  aged: {
    fermented: ['leather', 'compost', 'autumn leaves'],
    oxidized: ['dried leaves', 'prune'],
    relaxationScore: 0.5
  },
  umami: {
    savory: ['broth', 'meat', 'mushroom'],
    relaxationScore: 1
  },
  chemical: {
    flavors: ['metallic', 'sulfurous', 'medicinal'],
    relaxationScore: 0
  },
  sour: {
    flavors: ['sour', 'tart', 'acidic'],
    relaxationScore: 0.5
  }
};

// Processing Methods Configuration with categorized methods
export const processingMethods = {
  // Heat Treatment Methods
  'steamed': { score: 1.5, description: 'Preserves compounds, slightly increases relaxation potential', category: 'heat' },
  'pan-fired': { score: 0.5, description: 'Mild heat processing, slight stimulating effect', category: 'heat' },
  'light-roast': { score: -0.2, description: 'Mild roasting, subtle impact on relaxation', category: 'heat' },
  'medium-roast': { score: -0.4, description: 'Moderate roasting, noticeable decrease in relaxation', category: 'heat' },
  'heavy-roast': { score: -0.6, description: 'Strong roasting, significant decrease in relaxation', category: 'heat' },
  'baked': { score: -0.3, description: 'Gentle heat treatment, moderate impact on relaxation', category: 'heat' },
  'charcoal-roasted': { score: -0.4, description: 'Traditional roasting method, complex effect on relaxation', category: 'heat' },
  'roasted': { score: -0.5, description: 'Can increase stimulating effects', category: 'heat' },

  // Oxidation Methods
  'withered': { score: 0.5, description: 'Initial oxidation, slight reduction in relaxation potential', category: 'oxidation' },
  'oxidised': { score: -0.5, description: 'Increases complexity and caffeine, slightly reduces relaxation', category: 'oxidation' },
  'partial-oxidation': { score: -0.3, description: 'Moderate oxidation, balanced effect on stimulation', category: 'oxidation' },
  'full-oxidation': { score: -0.5, description: 'Complete oxidation, increases stimulating properties', category: 'oxidation' },
  'kill-green': { score: 0.5, description: 'Halts oxidation, preserves relaxing compounds', category: 'oxidation' },

  // Growing and Drying Methods
  'shade-grown': { score: 2, description: 'Increases L-theanine and amino acids, enhancing relaxation', category: 'growing' },
  'sun-dried': { score: 1, description: 'Natural drying process, neutral effect on relaxation', category: 'drying' },
  'minimal-processing': { score: 2, description: 'Preserves natural compounds, high relaxation potential', category: 'processing' },
  'cryodesiccated': { score: 1.5, description: 'Freeze-drying preserves compounds, maintains relaxation', category: 'drying' },

  // Shaping Methods
  'rolled': { score: 0, description: 'Physical processing, no direct impact on relaxation', category: 'shaping' },
  'twisted': { score: 0, description: 'Physical shaping, neutral effect on relaxation', category: 'shaping' },
  'ball-rolled': { score: 0, description: 'Tight rolling process, neutral impact', category: 'shaping' },
  'strip-style': { score: 0, description: 'Long leaf style, no impact on relaxation', category: 'shaping' },
  'compressed': { score: 0, description: 'Physical processing, no direct impact on relaxation', category: 'shaping' },

  // Fermentation and Aging
  'fermented': { score: 0, description: 'Complex flavor development, neutral impact on relaxation', category: 'fermentation' },
  'wet-piled': { score: 0, description: 'Fermentation process for pu-erh, neutral impact', category: 'fermentation' },
  'pile-fermented': { score: 0.1, description: 'Controlled fermentation, slight relaxation effect', category: 'fermentation' },
  'aged': { score: 0.5, description: 'May develop relaxing compounds over time', category: 'aging' },

  // Scenting Methods
  'scented': { score: 0.5, description: 'Added aromatics, slight increase in relaxation potential', category: 'scenting' },
  'jasmine-scented': { score: 1, description: 'Jasmine specifically adds relaxing properties', category: 'scenting' },
  'osmanthus-scented': { score: 0.8, description: 'Sweet floral scenting, mildly relaxing', category: 'scenting' },
  'rose-scented': { score: 0.9, description: 'Rose aromatics enhance relaxation', category: 'scenting' },

  // Special Processing
  'gaba-processed': { score: 2.5, description: 'Nitrogen processing increases GABA content, highly relaxing', category: 'special' },
  'bug-bitten': { score: 0.3, description: 'Natural process creating honey notes, slight relaxation boost', category: 'special' },
  'frost-withered': { score: 0.2, description: 'Cold processing creates unique compounds, subtle relaxation', category: 'special' },
  'yellow-processing': { score: 0.4, description: 'Sealed yellowing process, mild relaxation enhancement', category: 'special' },
  
  // Smoking Methods
  'smoked': { score: -1, description: 'Strong flavor, may be stimulating rather than relaxing', category: 'smoking' },
  'pine-smoked': { score: -1, description: 'Strong smoky character, may be stimulating', category: 'smoking' }
};

// Helper function for flavor scoring
export function getFlavorScore(flavor) {
  for (let category in teaFlavorWheel) {
    // Check all subcategories for the flavor
    for (let subCategory in teaFlavorWheel[category]) {
      if (Array.isArray(teaFlavorWheel[category][subCategory]) && 
          teaFlavorWheel[category][subCategory].includes(flavor.toLowerCase())) {
        return teaFlavorWheel[category].relaxationScore;
      }
    }
  }
  return 0;
}

// Enhanced helper function for processing methods
export function getProcessingScore(methods) {
  let scores = {
    total: 0,
    categoryWeights: {
      heat: 0.8,
      oxidation: 1,
      growing: 1,
      drying: 0.7,
      shaping: 0.3,
      fermentation: 0.6,
      aging: 0.5,
      scenting: 0.7,
      special: 1,
      smoking: 0.8
    }
  };

  // Group methods by category
  let categoryScores = {};
  methods.forEach(method => {
    const processMethod = processingMethods[method.toLowerCase()];
    if (processMethod) {
      const { score, category } = processMethod;
      if (!categoryScores[category]) {
        categoryScores[category] = [];
      }
      categoryScores[category].push(score);
    }
  });

  // Calculate weighted average for each category
  for (let category in categoryScores) {
    const avgScore = categoryScores[category].reduce((a, b) => a + b, 0) / categoryScores[category].length;
    scores.total += avgScore * (scores.categoryWeights[category] || 1);
  }

  // Normalize the total score based on number of categories
  const numCategories = Object.keys(categoryScores).length;
  return numCategories > 0 ? scores.total / numCategories : 0;
}

// Main calculation function
// export function calculateTeaRelaxation(teaParams) {
//   const { type, caffeineLevel, lTheanineLevel, flavorProfile, processingMethods } = teaParams;
  
//   let relaxationScore = 0;
  
//   // Base type score
//   switch (type.toLowerCase()) {
//     case 'white': relaxationScore += 2; break;
//     case 'green': relaxationScore += 1.5; break;
//     case 'oolong': relaxationScore += 1; break;
//     case 'puerh':
//     case 'yellow': relaxationScore += 0.5; break;
//     case 'black': relaxationScore += 0; break;
//     case 'herbal': relaxationScore += 2.5; break;
//   }
  
//   // Caffeine and L-theanine calculation
//   relaxationScore += (10 - caffeineLevel) * 0.4;
//   relaxationScore += lTheanineLevel * 0.4;
  
//   // Enhanced flavor profile scoring
//   const flavors = Array.isArray(flavorProfile) ? flavorProfile : [flavorProfile];
//   const flavorScores = flavors.map(flavor => getFlavorScore(flavor));
//   relaxationScore += flavorScores.reduce((sum, score, index) => 
//     sum + score * (index === 0 ? 0.6 : 0.4/(flavorScores.length-1)), 0);
  
//   // Processing methods scoring
//   relaxationScore += getProcessingScore(processingMethods);
  
//   // Normalize and round the score
//   return Math.max(1, Math.min(10, Math.round(relaxationScore)));
// }

// Helper function to get processing method description
export function getProcessingDescription(method) {
  return processingMethods[method.toLowerCase()]?.description || 'Unknown processing method';
}

// Main calculation function
export function calculateTeaRelaxation(teaParams) {
  const { type, caffeineLevel, lTheanineLevel, flavorProfile, processingMethods } = teaParams;
  
  let relaxationScore = 0;
  
  // Base type score
  switch (type.toLowerCase()) {
      case 'white': relaxationScore += 2; break;
      case 'green': relaxationScore += 1.5; break;
      case 'oolong': relaxationScore += 1; break;
      case 'puerh':
      case 'yellow': relaxationScore += 0.5; break;
      case 'black': relaxationScore += 0; break;
      case 'herbal': relaxationScore += 2.5; break;
  }
  
  // Caffeine and L-theanine calculation
  relaxationScore += (10 - caffeineLevel) * 0.4;
  relaxationScore += lTheanineLevel * 0.4;
  
  // Enhanced flavor profile scoring
  const flavors = Array.isArray(flavorProfile) ? flavorProfile : [flavorProfile];
  const flavorScores = flavors.map(flavor => getFlavorScore(flavor));
  relaxationScore += flavorScores.reduce((sum, score, index) => 
      sum + score * (index === 0 ? 0.6 : 0.4/(flavorScores.length-1)), 0);
  
  // Processing methods scoring
  relaxationScore += getProcessingScore(processingMethods);
  
  // Normalize and round the score
  return Math.max(1, Math.min(10, Math.round(relaxationScore)));
}



// Function to calculate scores for all teas in database
export function calculateAllTeaScores(teaDatabase) {
  return teaDatabase.map(tea => ({
    ...tea,
    relaxationScore: calculateTeaRelaxation(tea)
  }));
}

// Export all necessary functions and data
// export {
//   calculateTeaRelaxation,
//   calculateAllTeaScores,
//   getFlavorScore,
//   getProcessingScore,
//   getProcessingDescription,
//   teaFlavorWheel,
//   processingMethods
// };
