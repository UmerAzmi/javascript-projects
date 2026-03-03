# Random Number Generator

An interactive random number generator built using HTML, CSS, and JavaScript that lets users generate a number within a specified range with instant UI feedback.

## Overview

This project allows users to input a minimum and maximum number, then generates a random number within that range when the user clicks the generate button or presses **Enter**.

The application is built with clean JavaScript logic that reads input values, validates them, generates a random number correctly using `Math.random()`, and updates the result area in the DOM.

## Features

- Input fields for minimum and maximum value
- Generates a random number within user-defined range
- Keyboard support (press **Enter** to generate)
- Immediate result display
- Basic input validation
- Styled interactive UI

## Key Implementation Details

- Uses `Math.random()` and `Math.floor()` to calculate a random value between provided min and max
- Event listeners trigger the generation logic on button click and key press
- Result is displayed dynamically without page refresh
- Uses DOM methods (`getElementById`, `textContent`) to update UI elements
- Includes graceful handling for invalid or empty inputs

## Concepts Practiced

- DOM selection & manipulation  
- Event handling (click + keydown)  
- Random number logic with boundaries  
- Input validation  
- Dynamic UI updates

## Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript

## How to Run

1. Open `index.html` in any modern web browser
2. Enter a minimum and maximum number
3. Click **Generate** or press **Enter**
4. View the generated random number in the result section

---

A practical utility app demonstrating interactive input handling and dynamic DOM updates using core JavaScript logic.