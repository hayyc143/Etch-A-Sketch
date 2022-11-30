const gridContainer = document.querySelector('.container');  // pulls container from DOM and assigns it to gridContainer variable 
const clearBtn = document.querySelector('.clearBtn'); // pulls clear button from the DOM and assigns it to clearBtn variable 
const slider = document.querySelector('.slider'); // pulls range slider(input) from DOM and assigns it to slider variable(this is not being used currently) 
const gridSize = document.querySelector('.gridSize'); // pulls grid size text from DOM (this is not being used currently)


function createGrid(){ // when called, this will create the grid 
    for(let i = 0; i < 256; i++ ){ // for loop to create the grid, i is set to 0 and while it is less than 256, keep adding squares (the dynamic # of rows will go here later)
        const gridCell = document.createElement('div'); // creating the actual grid cell, it is a div
        gridContainer.appendChild(gridCell); // we are apending the gridCells to the gridContainer 
        gridCell.classList.add('cell'); // adding class of cell to the divs
        gridCell.addEventListener('mouseover', () => { // adding listener for when mouse is over div, when it is hovering over div, the grid cell color changes to black 
            gridCell.style.backgroundColor = "black"; 
        })

    }
}

createGrid() 

clearBtn.addEventListener('click', () => {
    const allCells = document.querySelectorAll('.cell'); 
    allCells.forEach(cell => {
        cell.style.backgroundColor = 'white'; 
    }); 

})





