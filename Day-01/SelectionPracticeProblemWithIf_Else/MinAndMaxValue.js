// Function to generate a random three-digit number
function getRandomThreeDigit() {
    
    // Generates a number between 100 and 999
    return Math.floor(Math.random() * 900) + 100;
}

// Generate 5 random three-digit numbers
let numbers = Array.from({ length: 5 }, getRandomThreeDigit);

// Find minimum and maximum values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Output results
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
