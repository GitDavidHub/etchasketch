const etchASketch = document.getElementById('etchASketch');
const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeDisplay = document.getElementById('gridSizeDisplay');
let isDrawing = false;
let currentColor = 'black';

function createGrid() {
    const gridSize = gridSizeSlider.value;
    etchASketch.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('mouseover', draw);
        gridCell.addEventListener('mousedown', startDrawing);
        etchASketch.appendChild(gridCell);
    }
    gridSizeDisplay.textContent = 'Grid Size: ${gridSize}x${gridSize}';
}

function draw () {
    if (isDrawing) {
        this.style.backgroundColor = currentColor;
    }
}

function startDrawing() {
    isDrawing = true;
    draw.call(this);
}

function setColor() {
    currentColor = prompt('Enter a color:');
}

function setEraser() {
    currentColor = 'white';
}

function resetBoard() {
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function updateGridSize() {
    createGrid();
}


document.addEventListener('mouseup', () => isDrawing = false);

createGrid();

