
// Create and grab webpage elements
// const div = document.createElement('div');
const divContainer = document.querySelector('#container');
// console.log(divContainer);


let createGrids = function() {
    for (let i = 0; i < 16*16; i++) {
        const div = document.createElement('div');
        div.classList.add('grids');
        divContainer.appendChild(div);
    }
}
createGrids();


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
console.log(button);

function gridSize() {
   button.addEventListener('click', () => {
    let gridNumber = prompt("What size grid would you like? Max 100");
   });

};

