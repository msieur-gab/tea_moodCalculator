import { teaDatabase } from '../database.js';
import { createGranularMoodProfile } from '../atomicMooder.js';
import { atomicMoods } from '../moodParameters.js';

// Fixed order of moods
const moodOrder = [
    'energizing', 'focusing', 'invigorating', 'uplifting',
    'refreshing', 'harmonizing', 'calming', 'serene',
    'contemplative', 'meditative', 'grounding', 'warming',
    'cozy', 'nourishing'
];

let currentShape = null;
let currentPoints = [];
let currentTeaProfile = null;

function getMoodData(tea) {
    const profile = createGranularMoodProfile(tea);
    return {
        scores: profile.allScores,
        components: profile.components,
        compositeMood: profile.compositeMood
    };
}

function displayDescription(mood, tea) {
    const profile = currentTeaProfile;
    let description = '';

    if (profile.components.primary.mood === mood) {
        description = profile.components.primary.description;
    } else if (profile.components.secondary.mood === mood) {
        description = profile.components.secondary.description;
    } else {
        description = atomicMoods[mood]?.description || 'Description not available';
    }

    document.getElementById('description-container').textContent = 
        `${mood}: ${description} (Score: ${profile.scores[mood].toFixed(1)})`;
}

function calculatePoints(tea, radius, centerX, centerY) {
    const profile = getMoodData(tea);
    currentTeaProfile = profile;

    const angleStep = (Math.PI * 2) / moodOrder.length;
    return moodOrder.map((mood, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const score = profile.scores[mood] || 0;
        const distance = (score / 10) * radius;
        return {
            x: centerX + distance * Math.cos(angle),
            y: centerY + distance * Math.sin(angle),
            mood
        };
    });
}

function createSmoothPath(points) {
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const p3 = points[(i + 2) % points.length];

        const cp1x = p2.x + (p1.x - p3.x) * 0.2;
        const cp1y = p2.y + (p1.y - p3.y) * 0.2;

        path += ` S ${cp1x} ${cp1y}, ${p2.x} ${p2.y}`;
    }
    path += ' Z';
    return path;
}

function initializeChart(tea) {
    const svg = document.getElementById('radar-chart');
    svg.innerHTML = '';
    
    const width = 600;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 80;

    // Create background circles
    for (let i = 1; i <= 10; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', radius * (i / 10));
        circle.setAttribute('fill', 'var(--jade-green-bg)');
        circle.setAttribute('stroke', 'var(--radar-background-color)');
        svg.appendChild(circle);
    }

    // Create axes and labels
    const angleStep = (Math.PI * 2) / moodOrder.length;
    moodOrder.forEach((mood, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x2 = centerX + radius * Math.cos(angle);
        const y2 = centerY + radius * Math.sin(angle);
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', centerX);
        line.setAttribute('y1', centerY);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'var(--jade-green-light)');
        svg.appendChild(line);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const labelRadius = radius + 30;
        const labelX = centerX + labelRadius * Math.cos(angle);
        const labelY = centerY + labelRadius * Math.sin(angle);
        
        text.setAttribute('x', labelX);
        text.setAttribute('y', labelY);
        text.setAttribute('fill', 'var(--jade-green-dark)');
        text.setAttribute('font-size', '12px');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.textContent = mood;
        
        let rotation = (angle * 180 / Math.PI) + 90;
        if (rotation > 90 && rotation < 270) {
            rotation += 180;
        }
        text.setAttribute('transform', `rotate(${rotation},${labelX},${labelY})`);
        
        svg.appendChild(text);
    });

    const points = calculatePoints(tea, radius, centerX, centerY);
    
    // Create shape
    currentShape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    currentShape.setAttribute('class', 'shape-path');
    currentShape.setAttribute('fill', 'var(--radar-fill-color)');
    currentShape.setAttribute('stroke', 'var(--radar-stroke-color)');
    currentShape.setAttribute('stroke-width', '2');
    currentShape.setAttribute('d', createSmoothPath(points));
    svg.appendChild(currentShape);

    // Create points
    currentPoints = points.map(point => {
        const dataPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dataPoint.setAttribute('class', 'data-point');
        dataPoint.setAttribute('cx', point.x);
        dataPoint.setAttribute('cy', point.y);
        dataPoint.setAttribute('r', '4');
        dataPoint.setAttribute('fill', 'var(--radar-stroke-color)');
        dataPoint.setAttribute('cursor', 'pointer');
        
        dataPoint.addEventListener('click', () => {
            displayDescription(point.mood, tea);
        });

        dataPoint.addEventListener('touchstart', (e) => {
            e.preventDefault();
            displayDescription(point.mood, tea);
        });

        svg.appendChild(dataPoint);
        return dataPoint;
    });
}

function updateChart(tea, animate = true) {
    const width = 600;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 80;

    const newPoints = calculatePoints(tea, radius, centerX, centerY);
    const newPath = createSmoothPath(newPoints);

    if (!animate) {
        currentShape.style.transition = 'none';
        currentPoints.forEach(point => point.style.transition = 'none');
    }

    currentShape.setAttribute('d', newPath);
    newPoints.forEach((point, i) => {
        currentPoints[i].setAttribute('cx', point.x);
        currentPoints[i].setAttribute('cy', point.y);
    });

    if (!animate) {
        // Force reflow
        currentShape.offsetHeight;
        currentPoints.forEach(point => point.offsetHeight);
        currentShape.style.transition = '';
        currentPoints.forEach(point => point.style.transition = '');
    }
}

// Initialize and set up event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Populate tea selector
    const select = document.getElementById('teaSelect');
    teaDatabase.forEach(tea => {
        const option = document.createElement('option');
        option.value = tea.name;
        option.textContent = tea.originalName ? 
            `${tea.name} (${tea.originalName})` : 
            tea.name;
        select.appendChild(option);
    });

    // Initialize with first tea
    initializeChart(teaDatabase[0]);

    // Set up event listeners
    select.addEventListener('change', (e) => {
        const selectedTea = teaDatabase.find(tea => tea.name === e.target.value);
        updateChart(selectedTea, true);
    });

    window.addEventListener('resize', () => {
        const selectedTea = teaDatabase.find(
            tea => tea.name === document.getElementById('teaSelect').value
        );
        initializeChart(selectedTea);
    });
});