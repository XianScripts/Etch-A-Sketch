
// Create and grab webpage elements
// const div = document.createElement('div');
const divContainer = document.querySelector('#container');
const resetButton = document.querySelector('#reset');

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


const rgbButton = document.querySelector('#rgb');
// Setup Hover effects for grid items
let colorGrids = function() {
    divContainer.addEventListener('mouseover', (e) => {
        // console.log(e.target);
        let cDiv = e.target;
        cDiv.style.backgroundColor = 'black';
    });
    rgbButton.addEventListener('click', (e) => {
        divContainer.addEventListener('mouseover', (e) => {
            cDiv = e.target;
            cDiv.style.backgroundColor = getRandomColor();
        })
    })
    resetButton.addEventListener('click', () => {
        let divGrids = document.querySelectorAll('.grids');
        for (let i = 0; i < divGrids.length; i++) {
            divGrids[i].style.backgroundColor = null;
        }
        divContainer.addEventListener('mouseover', (e) => {
            // console.log(e.target);
            
            let cDiv = e.target;
            cDiv.style.backgroundColor = 'black';

        });
        
    });

}
colorGrids();

// Button for custom grid size
const button = document.querySelector('.button');

// Button function for custom grid size
function gridSize() {
   button.addEventListener('click', () => {
    while(divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
    
    let gridNumber = prompt("What size grid would you like? Max 100, Default min 16");
    if (gridNumber === "null" || null || "") {
        divContainer.style.width = "850px";
        createGrids(gridNumber);

    }
    else if (gridNumber <= 16) {
        divContainer.style.width = "850px";
        createGrids(16);
    }
    else if (gridNumber > 16 && gridNumber < 25) {
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



// RGB function
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


