
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
let colorGrides = function() {
    divContainer.addEventListener('mouseover', (e) => {
        // console.log(e.target);
        let cDiv = e.target;
        cDiv.style.backgroundColor = 'black';
    });
}
colorGrides();

// Button for custom grid size
let button = document.querySelector('#grid-size');

// Button function for custom grid size
function gridSize() {
   button.addEventListener('click', () => {
    while(divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
    
    let gridNumber = prompt("What size grid would you like? Max 100");
    createGrids(gridNumber);
   });

};
gridSize();
