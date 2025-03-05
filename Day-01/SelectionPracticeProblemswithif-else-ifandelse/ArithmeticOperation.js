// Get command line arguments
const args = process.argv.slice(2);
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);
const c = parseInt(args[2], 10);

// Perform arithmetic operations
const operation1 = a + b * c;
const operation2 = a % b + c;
const operation3 = c + a / b;
const operation4 = a * b + c;

// Store results in an array
const results = [operation1, operation2, operation3, operation4];

// Find maximum and minimum values
const max = Math.max(...results);
const min = Math.min(...results);

// Print results
console.log("Results:", results);
console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
