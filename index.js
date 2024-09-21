const canvas = document.getElementById('goldenRatioCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 800;

// Golden Ratio approximation
let goldenRatio = (1 + Math.sqrt(5)) / 2;
let arcCount = 30;
let scaleFactor = goldenRatio;

// Get HTML elements
const arcCountSlider = document.getElementById('arcCount');
const arcCountValue = document.getElementById('arcCountValue');
const scaleFactorSlider = document.getElementById('scaleFactor');
const scaleFactorValue = document.getElementById('scaleFactorValue');

// Update displayed values
arcCountValue.textContent = arcCount;
scaleFactorValue.textContent = scaleFactor.toFixed(3);

// Draw the Golden Ratio Spiral
function drawGoldenSpiral() {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let angle = 0;
    let length = 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffcc00';

    for (let i = 0; i < arcCount; i++) {
        ctx.beginPath();
        ctx.arc(x, y, length, angle, angle + Math.PI / 2);
        ctx.stroke();

        angle += Math.PI / 2; // Increase the angle for spiral effect
        x += Math.cos(angle) * length;
        y += Math.sin(angle) * length;
        length *= scaleFactor; // Scale by the updated ratio
    }
}

// Event listeners to update the spiral dynamically
arcCountSlider.addEventListener('input', function () {
    arcCount = parseInt(this.value);
    arcCountValue.textContent = arcCount;
    drawGoldenSpiral();
});

scaleFactorSlider.addEventListener('input', function () {
    scaleFactor = parseFloat(this.value);
    scaleFactorValue.textContent = scaleFactor.toFixed(3);
    drawGoldenSpiral();
});

// Initial draw
drawGoldenSpiral();
