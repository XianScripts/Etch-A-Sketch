
// Create and grab webpage elements
const div = document.createElement('div');
const divContainer = document.querySelector('#container');
console.log(divContainer);

let createGrids = function() {
    for (let i = 0; i < 16; i++) {
        div.classList.add('grids');
        divContainer.appendChild(div);
    }
}
createGrids();