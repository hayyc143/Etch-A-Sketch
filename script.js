const gridContainer = document.querySelector('.container');  // pulls container from DOM and assigns it to gridContainer variable 
const clearBtn = document.querySelector('.clearBtn'); // pulls clear button from the DOM and assigns it to clearBtn variable 
const gridSizeSlider = document.querySelector('.slider'); // pulls range slider(input) from DOM and assigns it to slider variable(this is not being used currently) 
const gridSizeDisplay = document.querySelector('.gridSize'); // pulls grid size text from DOM (this is not being used currently)
const root = document.querySelector(':root'); // no reason to put it in the local scope
const rootStyle = getComputedStyle(root); // no reason not to put it in the local scope 
const rows = rootStyle.getPropertyValue('--rows'); // put here to be accessed in global scope -- is starting place of grid(16 x16) 
const colorPicker = document.querySelector('.colorPicker'); // PUT HERE TO BE ACCESSED IN GLOBAL SCOPE 
const blackBtn = document.querySelector('.blackBtn');


let wantsColor; 
colorPicker.addEventListener('click', () => {
    wantsColor = true; 
})

blackBtn.addEventListener('click', () => {
    wantsColor = false; 
})

function createGrid(rows){ // when called, this will create the grid 
    for(let i = 0; i < rows * rows; i++ ){ // for loop to create the grid, i is set to 0 and while it is less than 256, keep adding squares (the dynamic # of rows will go here later)
        const gridCell = document.createElement('div'); // creating the actual grid cell, it is a div // needs to be in for loop to create each cell on each iteration
        gridContainer.appendChild(gridCell); // we are apending the gridCells to the gridContainer  // needs to add each square to the container each iteration 
        gridCell.classList.add('cell'); // adding class of cell to the divs // adding class to each cell as they are created 
        gridCell.addEventListener('mouseover', () => { // adding listener for when mouse is over div, when it is hovering over div, the grid cell color changes to black // t
            gridCell.style.backgroundColor = "black"; 
            if(wantsColor === true){
                const randomColor = Math.floor(Math.random() * 360);  
                gridCell.style.backgroundColor =  `hsl(${randomColor}, 100%, 50%)`
            } else if(wantsColor === false){
                gridCell.style.backgroundColor = "black"; 
            }
        })
    }
}

createGrid(rows)
 

gridSizeSlider.addEventListener('input', (e) => {
    gridSizeDisplay.textContent = `Grid Size: ${e.currentTarget.value} x ${e.currentTarget.value}` // text content is set to the current target of e when the slider input is moved. 
    root.style.setProperty('--rows', e.currentTarget.value);
    const rows = rootStyle.getPropertyValue('--rows');
    const squaresRemoved = document.querySelectorAll('.cell')
    squaresRemoved.forEach(cell => {
        cell.remove()
    })
    createGrid(rows);
})

clearBtn.addEventListener('click', () => {
    const allCells = document.querySelectorAll('.cell'); 
    allCells.forEach(cell => {
        cell.style.backgroundColor = 'white'; 
    }); 

})

