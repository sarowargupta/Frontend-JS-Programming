// Program to simulate a coin flip

// Function to flip a coin
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

// Print the result
console.log("Coin Flip Result:", flipCoin());
