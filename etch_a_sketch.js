
const DEFAULT_GRID_SIZE = 16;

const addCellDivHighlight = function(event) {
    event.target.classList.add("gridCellHighlighted");
}

const generateCellDiv = function() {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("gridCell");
    cellDiv.addEventListener("mouseenter", addCellDivHighlight)
    return cellDiv;
}

// -> { rowDiv, [cellDivs] }
const generateRow = function(width) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("gridRow");

    const cellDivs = Array(width).fill().map(_ => generateCellDiv());
    return {rowDiv, cellDivs};
}

// -> [ { rowDiv, [cellDivs] } ]
const generateGrid = function(size) {
    const rows = Array(size).fill().map(_ => generateRow(size));
    return rows;
}

// Attach each row's divs to the grid container
const attachGridDivs = function(gridContainer, rows) {
    gridContainer.innerHTML = "";
    for (const {rowDiv, cellDivs} of rows) {
        gridContainer.appendChild(rowDiv);
        for (const cellDiv of cellDivs) {
            rowDiv.appendChild(cellDiv);
        }
    }
}

// Gets the size of the new grid, creates rows, and attaches the new grid rows.
const resetGrid = function(gridContainer) {

    let gridSize = prompt("How many squares per side?", 16);
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize <= 0) gridSize = DEFAULT_GRID_SIZE;
    if (gridSize > 100) gridSize = 100;

    const rows = generateGrid(gridSize);
    attachGridDivs(gridContainer, rows);
}

function main() {
    const gridContainer = document.querySelector("#grid_container");
    const rows = generateGrid(DEFAULT_GRID_SIZE);
    attachGridDivs(gridContainer, rows);

    const resetButton = document.querySelector("#reset_button");
    resetButton.addEventListener("click", () => resetGrid(gridContainer))
}

main();
