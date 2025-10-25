// get the container element using DOM  
const gridContainer = document.querySelector('.grid-container');

const totalSquares = 16 * 16;

// loop to create child divs and add to container
for (let i = 0; i < totalSquares; i++) {
    // create a new div
    newChildDiv = document.createElement('div');

    // add attributes to it
    newChildDiv.classList.add('grid-square');

    // append to the container div
    gridContainer.append(newChildDiv);
}
