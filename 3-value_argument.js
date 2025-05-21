#!/usr/bin/node

// Check if there is an argument
if (process.argv[2] === undefined) {
    console.log("No argument");
} else {
    console.log(process.argv[2]);
}
