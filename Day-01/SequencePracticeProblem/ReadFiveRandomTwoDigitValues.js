// Generate 5 random two-digit numbers (10 to 99)
let num1 = Math.floor(Math.random() * 90) + 10;
let num2 = Math.floor(Math.random() * 90) + 10;
let num3 = Math.floor(Math.random() * 90) + 10;
let num4 = Math.floor(Math.random() * 90) + 10;
let num5 = Math.floor(Math.random() * 90) + 10;

// Calculate sum of five random numbers
let sum = num1 + num2 + num3 + num4 + num5;

// Calculate average of five random numbers
let average = sum / 5;

// Print result of sum and average of five random numbers
console.log(`Numbers: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);
