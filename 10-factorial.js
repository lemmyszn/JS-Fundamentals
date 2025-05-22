function factorial(n) {
    // Handle NaN case
    if (isNaN(n)) {
        return 1;
    }
    
    // Convert to integer
    n = parseInt(n);
    
    // Base case
    if (n <= 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

// Get the number from command line argument
const number = process.argv[2];

// Calculate and print the factorial
console.log(factorial(number)); 