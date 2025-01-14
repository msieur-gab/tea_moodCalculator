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
