
// Create and grab webpage elements
// const div = document.createElement('div');
const divContainer = document.querySelector('#container');
// console.log(divContainer);

let createGrids = function() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grids');
        divContainer.appendChild(div);
    }
}
createGrids();


// Setup Hover effects for grid items
let colorGrides = function() {
    divContainer.addEventListener('mouseover', (e) => {
        console.log(e.target);
        let cDiv = e.target;
        cDiv.style.backgroundColor = 'black';
    });
}
colorGrides();