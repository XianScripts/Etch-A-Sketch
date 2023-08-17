
// Create and grab webpage elements
// const div = document.createElement('div');
const divContainer = document.querySelector('#container');
// console.log(divContainer);

// Function to create grid
let createGrids = function(x) {
    for (let i = 0; i < x*x; i++) {
        const div = document.createElement('div');
        div.classList.add('grids');
        divContainer.appendChild(div);
    }
}
// Default 16x16 Grid
createGrids(16);


// Setup Hover effects for grid items
let colorGrids = function() {
    divContainer.addEventListener('mouseover', (e) => {
        // console.log(e.target);
        let cDiv = e.target;
        cDiv.style.backgroundColor = 'black';
    });
}
colorGrids();

// Button for custom grid size
let button = document.querySelector('#grid-size');

// Button function for custom grid size
function gridSize() {
   button.addEventListener('click', () => {
    while(divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
    
    let gridNumber = prompt("What size grid would you like? Max 100");
    if (gridNumber === "null" || null || "") {
        divContainer.style.width = "850px";
        createGrids(gridNumber);

    }
    else if (gridNumber >= 25 && gridNumber < 50) {
        divContainer.style.width = "1000px";
        createGrids(gridNumber);
    }
    else if (gridNumber >= 50 && gridNumber < 75) {
        divContainer.style.width = "1250px";
        createGrids(gridNumber);
    }
    else if (gridNumber >= 75) {
        divContainer.style.width = "1500px";
        createGrids(gridNumber);
    }
    else {
        createGrids(16);
    }
   });

};
gridSize();
