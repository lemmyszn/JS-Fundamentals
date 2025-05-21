#!/usr/bin/node

// Get the first argument
const num = parseInt(process.argv[2]);

// Check if the argument is a valid number
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number:", num);
}
