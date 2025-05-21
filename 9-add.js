#!/usr/bin/node

// Function to add two integers
function add(a, b) {
    return a + b;
}

// Get the two integers from command line arguments
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Print the sum
console.log(add(num1, num2));
