// Get command line argument
const args = process.argv.slice(2);
const number = parseInt(args[0], 10);

// Function to convert digit to word
function numberToWord(num) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return (num >= 0 && num <= 9) ? words[num] : "Invalid input";
}

// Print the result
console.log("Number in words:", numberToWord(number));
