#!/usr/bin/node

// Get the number of occurrences
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // Loop x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
