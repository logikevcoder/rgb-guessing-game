const hiddenDisplay = document.querySelector("#hiddenDisplay");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const squares = document.querySelectorAll(".square");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
let colors = generateRandomColors(6);
let pickedColor = pickColor();

// colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
});

button.addEventListener("click", function(){
	// When button is clicked generate new colors
	colors = generateRandomColors(6);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// Change colors of the squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "#232323";
	button.textContent = "New Colors";
});

for (let i = 0; i < squares.length; i++) {
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// Add click listeners to squares
	squares[i].addEventListener("click", function(){
		// Grab color of clicked square
		clickedColor = this.style.backgroundColor;
		// Compare color to pickedColor
		if (clickedColor === pickedColor) {
			hiddenDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			button.textContent = "Play Again?";
			} else {
			// If wrong guess change selected square to background color
			this.style.background = "#232323";
			hiddenDisplay.textContent = "Try again";
		}

	});
}

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








