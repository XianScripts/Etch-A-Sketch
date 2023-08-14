
// Create and grab webpage elements
// const div = document.createElement('div');
const container = document.querySelector("#container");

makeRows = function(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) { //Makes 256 items in the loop
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);



// Onmousehover
// this.event.target.style.color = etc