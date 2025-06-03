# Day 01 – ES6 Basics

## 🧰 Project Setup Instructions

To recreate this project from scratch in VS Code:

1. Open VS Code
2. Open Terminal (`Ctrl + ~` or `Terminal → New Terminal`)
3. Run these commands:
    # Create the root project folder
    mkdir fullstack-learning
    cd fullstack-learning

    # Initialize a Node.js project
    npm init -y

    # Open the folder in VS Code
    code .
    If code . doesn’t work, you can open the folder manually from File → Open Folder.

    # Create a folder for Day 1 work
    mkdir day01-es6-basics
    cd day01-es6-basics

    # Create the required files
    touch sum.js multiply.js subtract.js README.md

#Files and What They Do
## sum.js
    - Uses the rest operator `...args` to accept any number of values.
    - Uses `.reduce()` to add them together.
    - function sum(...args) {
        This creates a function named sum
        The ...args means: gather all inputs into an array
        Example: sum(1, 2, 3) → args = [1, 2, 3]
    - return args.reduce((acc, n) => acc + n, 0);
        .reduce() goes through the array and combines all values into one
        acc = accumulator (starts at 0)
        n = current number in the array
        So it works like:
        0 + 1 = 1
        1 + 2 = 3
        3 + 3 = 6
        console.log(sum(1, 2, 3));
        Prints the result: 6

## multiply.js
Accepts any number of values
Uses .reduce() to multiply the values
Starts from 1

## subtract.js
Uses .reduce() without an initial value
Subtracts values left to right

## Concepts Covered
- Rest parameters (`...args`)
- `Array.prototype.reduce()`
- Writing simple utility functions
- Organizing files for daily learning
- Executing JavaScript using Node.js

▶️ How to Run the Code
In terminal, run these commands from the day01-es6-basics folder:
node sum.js
node multiply.js
node subtract.js
