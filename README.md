# Basic Web Calculator

This is a simple web-based calculator that performs basic arithmetic operations: addition, subtraction, multiplication, and division. It is built using HTML, CSS, and JavaScript.

## Features

- **Addition**: Adds two numbers.
- **Subtraction**: Subtracts the second number from the first number.
- **Multiplication**: Multiplies two numbers.
- **Division**: Divides the first number by the second number (handles division by zero).

## Usage

1. Enter the first number in the Number 1 input field.
2. Enter the second number in the Number 2 input field.
3. Click one of the operation buttons:
   - Add: To add the two numbers.
   - Subtract: To subtract the second number from the first.
   - Multiply: To multiply the two numbers.
   - Divide: To divide the first number by the second.
4. The result will be displayed below the buttons in the "The Answer is:" section.

## Code Explanation

The core logic of the calculator is in the app.js file:

- AddNumber(): Handles the addition of two numbers.
- SubNumber(): Handles the subtraction of two numbers.
- MultiplyNumber(): Handles the multiplication of two numbers.
- DivNumber(): Handles the division of two numbers, with error handling for division by zero.

Each function retrieves the input values, performs the calculation, and updates the result in the DOM.
