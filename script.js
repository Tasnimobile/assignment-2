// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const table = document.getElementById("grid");
    const newRow = document.createElement("tr");
    
    // #cols to add
    let colsToAdd = numCols;
    if (table.rows.length === 0) {
        colsToAdd = 1;
        numCols = 1;
    }
    
    //for each column
    for (let i = 0; i < colsToAdd; i++) {
        //create a cell
        const newCell = document.createElement("td");
        newCell.onclick = function() {
            if (colorSelected && colorSelected !== "SELECT") {
                this.style.backgroundColor = colorSelected.toLowerCase();
            }
        };
        //add cell to row
        newRow.appendChild(newCell);
    }
    
    //add row to table
    table.appendChild(newRow);
    numRows++;
}

// Add a column
function addC() {
    const table = document.getElementById("grid");
    
    // if nothing yet
    if (table.rows.length === 0) {
        //add a row which will add a single column
        addR();
    }

    else {
        //for each row
        for (let i = 0; i < table.rows.length; i++) {
            //create cell
            const newCell = document.createElement("td");
            newCell.onclick = function() {
                if (colorSelected && colorSelected !== "SELECT") {
                    this.style.backgroundColor = colorSelected.toLowerCase();
                }
            };
            //add cell to row
            table.rows[i].appendChild(newCell);
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    const table = document.getElementById("grid");
    if (numRows > 0) {
        table.deleteRow(-1);
        numRows--;
        if (numRows === 0) numCols = 0;
    }
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");

    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(-1);
        }
        numCols--;
        if (numCols === 0) {
            table.innerHTML = "";
            numRows = 0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const table = document.getElementById("grid");
    const color = colorSelected ? colorSelected.toLowerCase() : null;
    if (!color || color === "select") return;

    for (const row of table.rows) {
        for (const cell of row.cells) {
            if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
                cell.style.backgroundColor = color;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    const table = document.getElementById("grid");
    const color = colorSelected ? colorSelected.toLowerCase() : null;
    if (!color || color === "select") return;

    for (const row of table.rows) {
        for (const cell of row.cells) {
            cell.style.backgroundColor = color;
        }
    }
}

// Clear all cells
function clearAll() {
    const table = document.getElementById("grid");
    for (const row of table.rows) {
        for (const cell of row.cells) {
            cell.style.backgroundColor = "white";
        }
    }
}
