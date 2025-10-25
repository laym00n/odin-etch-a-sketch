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
            // check if the square already has a bg color (first pass)
            if (!newChildDiv.style.backgroundColor) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                // set it as the  background color
                newChildDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

                // set opacity to 10%
                newChildDiv.style.opacity = 0.1;
            }
            else {
                // already has a color (subsequent pass)
                let currentOpacity = parseFloat(newChildDiv.style.opacity);

                // if not fully opaque
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                }

                // set new opacity
                newChildDiv.style.opacity = currentOpacity;
            }
        });
    }
}
createGrid(16);



