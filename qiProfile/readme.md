# Tea QI Profile Analyzer

## Overview
The Tea QI Profile Analyzer is a web-based tool that analyzes and visualizes the energetic properties (QI) of teas based on their characteristics, processing methods, and compound levels. It combines traditional Chinese tea wisdom with modern analytical methods to provide insights into how different teas affect body and mind.

## Features
- Interactive tea selection interface
- Detailed QI profile analysis
- Temperature balance visualization
- Energy progression timeline
- Mental effects mapping
- Comprehensive QI characteristics display

## Installation

### Prerequisites
- A modern web browser
- A local web server (for development)

### Setup
1. Clone the repository:
```bash
git clone [repository-url]
cd tea-qi-analyzer
```

2. Start a local server. You can use Python's built-in server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

## Project Structure

```
tea-qi-analyzer/
├── index.html              # Main interface
├── qiCalculator.js         # QI calculation logic
├── qiParameters.js         # QI characteristics definitions
├── database.js            # Tea database
└── styles/
    └── main.css           # Styling (included in index.html)
```

## Core Components

### QI Calculator
The QI calculator processes multiple aspects of each tea:
- Base tea type characteristics
- Processing method effects
- Compound ratios (L-Theanine/Caffeine)
- Energy movement patterns
- Temperature balance

### Parameter Definitions
Defines the characteristics and weights for:
- Processing methods
- Tea type base properties
- Compound effects
- Energy patterns
- Temperature influences

### Tea Database
Contains structured data for each tea:
- Basic information
- Processing methods
- Compound levels
- Origin details

## Usage

### Basic Usage
1. Select a tea type from the dropdown menu
2. View the comprehensive QI profile analysis
3. Explore different aspects:
   - Temperature balance
   - Energy characteristics
   - Mental effects
   - QI progression

### Understanding Results

#### Temperature Balance
- **Warming**: Indicates outward-moving, activating energy
- **Cooling**: Indicates inward-moving, calming energy
- **Neutral**: Indicates balanced, harmonizing energy

#### Intensity Scale (1-10)
- 1-3: Subtle effects
- 4-6: Moderate effects
- 7-10: Strong effects

#### QI Progression
Shows the development of effects over time:
- Initial Phase
- Peak Phase
- Finish Phase

## API Reference

### QiCalculator Class
```javascript
const calculator = new QiCalculator(tea);
const qiProfile = calculator.calculate();
```

#### Methods
- `calculate()`: Returns complete QI profile
- `calculateTemperatureBalance()`: Analyzes warming/cooling balance
- `determineEnergyFlow()`: Analyzes energy movement patterns
- `generateProgression()`: Creates timeline of effects

#### Return Object Structure
```javascript
{
    summary: string,
    intensity: number,
    category: string,
    bodyFocus: string,
    mentalEffects: string[],
    characteristics: string[],
    progression: {
        initial: string[],
        peak: string[],
        finish: string[]
    },
    temperatureBalance: {
        warmingScore: number,
        coolingScore: number,
        warmingPercent: number,
        coolingPercent: number
    },
    energyFlow: string,
    duration: string,
    peakTiming: string,
    detailedDescription: string
}
```

## Contributing

### Adding New Teas
1. Update `database.js` with new tea entries
2. Follow the existing data structure:
```javascript
{
    name: string,
    type: string,
    processingMethods: string[],
    lTheanineLevel?: number,
    caffeineLevel?: number,
    // ... other properties
}
```

### Modifying QI Parameters
1. Update `qiParameters.js` for changes to:
   - Processing effects
   - Tea type characteristics
   - Compound ratio effects
   - Energy patterns

## Cultural Context
This tool is based on traditional Chinese tea wisdom regarding QI (氣), the vital energy or life force. While it provides quantitative analysis, remember that tea's effects are deeply personal and contextual. The measurements serve as guidelines rather than absolute determinations.

## License
[License Type] - see LICENSE.md for details

## Acknowledgments
- Traditional Chinese tea culture and wisdom
- Modern tea research and analysis methods
- Contributors and maintainers

## Version History
- 1.0.0: Initial release
  - Basic QI profile analysis
  - Temperature balance visualization
  - Energy progression tracking