
// Create and grab webpage elements
// const div = document.createElement('div');
const divContainer = document.querySelector('#container');
console.log(divContainer);

let createGrids = function() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grids');
        divContainer.appendChild(div);
    }
}
createGrids();


let vGrids = function() {

}