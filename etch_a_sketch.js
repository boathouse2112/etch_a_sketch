
const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

const generateCellDiv = function() {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("gridCell");
    return cellDiv;
}

// -> { rowDiv, [cellDivs] }
const generateRow = function() {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("gridRow");

    const cellDivs = Array(GRID_WIDTH).fill().map(_ => generateCellDiv());
    return {rowDiv, cellDivs};
}

// Attach each row's divs to the grid container
const attachGridDivs = function(gridContainer, rows) {
    for (const {rowDiv, cellDivs} of rows) {
        gridContainer.appendChild(rowDiv);
        for (const cellDiv of cellDivs) {
            rowDiv.appendChild(cellDiv);
        }
    }
}


function main() {
    const gridContainer = document.querySelector("#grid_container");
    const rows = Array(GRID_HEIGHT).fill().map(_ => generateRow());

    attachGridDivs(gridContainer, rows);
}

main();
