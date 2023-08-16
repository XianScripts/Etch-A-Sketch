
// Create and grab webpage elements
// const div = document.createElement('div');
const divContainer = document.querySelector('#container');
let button = document.querySelector('#grid-size');
let gridNumber = "";
// console.log(divContainer);


let createGrids = function(x) {
    let x = '';
    for (let i = 0; i < x*x; i++) {
        const div = document.createElement('div');
        div.classList.add('grids');
        divContainer.appendChild(div);
    }
    button.addEventListener('click', () => {
        gridNumber = prompt("What size grid would you like? Max 100");
       });
    if (gridNumber !== "") {
        for (let i = 0; i < gridNumber*gridNumber; i++) {
            const div = document.createElement('div');
            div.classList.add('grids');
            divContainer.appendChild(div);
    }
       
}
};
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

// function gridSize() {
//    button.addEventListener('click', () => {
//     let gridNumber = prompt("What size grid would you like? Max 100");
//     return gridNumber;
//    });
// };
