#!/usr/bin/node

// Get the size of the square
const size = parseInt(process.argv[2]);

// Check if size is a valid number
if (isNaN(size)) {
    console.log("Missing size");
} else {
    // Print the square
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}
