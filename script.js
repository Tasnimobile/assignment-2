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
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}