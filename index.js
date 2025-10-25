// get the button element from HTML
const resetButton = document.getElementById('reset-button');

// add a click event listener for button
resetButton.addEventListener('click', () => {
    // ask user for new size
    let newSize = prompt('Enter new grid size');

    // convert the input to a number
    newSize = parseInt(newSize);

    // validate the input
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    }
    else {
        alert('Please enter a number from 1 and 100');
    }
});

// get the grid container element from HTML
const gridContainer = document.querySelector('.grid-container');

// create grid of any size as user requires
function createGrid(size) {
    // clear any existing grid
    gridContainer.innerHTML = '';
    
    const newChildDivSize = 960 / size;

    const totalSquares = size * size;

    // loop to create child divs and add to container
    for (let i = 0; i < totalSquares; i++) {
        // create a new div
        const newChildDiv = document.createElement('div');

        // add attributes to it
        newChildDiv.classList.add('grid-square');

        // change the height and width to newChildDivSize
        newChildDiv.style.height = `${newChildDivSize}px`;
        newChildDiv.style.width = `${newChildDivSize}px`;

        // append to the container div
        gridContainer.append(newChildDiv);

        // add event listener for hover color effect
        newChildDiv.addEventListener('mouseover', () => {
            newChildDiv.style.backgroundColor = 'black';
        });
    }
}
createGrid(16);



