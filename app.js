let numSquares = 6;
let colors = [];
let pickedColor;
const hiddenDisplay = document.querySelector("#hiddenDisplay");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#resetBtn");
const squares = document.querySelectorAll(".square");
const modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();

}
colorDisplay
function setUpModeButtons() {
    // Mode buttons event listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    // Event handlers for the squares
    for (let i = 0; i < squares.length; i++) {
        // Add initial colors to squares
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            // Grab color of clicked square
            clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if (clickedColor === pickedColor) {
                hiddenDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                // If wrong guess change selected square to background color
                this.style.background = "#232323";
                hiddenDisplay.textContent = "Try again";
                colorDisplay.textContent = pickedColor;

            }

        });
    }
}

// Main function to reset all properties and create new colors
function reset() {
    // When resetBtn is clicked generate new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    resetBtn.textContent = "New Colors";
    hiddenDisplay.textContent = "";

    // Change colors of the squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        // If there is a color
        if (colors[i]) {
            // Always make sure the squares are visible first
            squares[i].style.display = "block";
            // Give Squares new background colors
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    colorDisplay.textContent = pickedColor;

}


resetBtn.addEventListener("click", function() {
    reset();
});


function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match clicked color
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    let arr = [];
    // Repeat num times
    for (let i = 0; i < num; i++) {
        // Get ran color and push into array
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 -255
    let r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}