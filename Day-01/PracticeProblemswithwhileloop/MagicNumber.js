const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100.");

let low = 1, high = 100;

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong! Please try again.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/no) `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Yay! Your magic number is ${mid}.`);
            rl.close();
        } else {
            rl.question(`Is your number greater than ${mid}? (yes/no) `, (isGreater) => {
                if (isGreater.toLowerCase() === "yes") {

                    // Search in the upper half
                    low = mid + 1; 
                } else {

                    // Search in the lower half
                    high = mid - 1; 
                }

                // Recursively call the function
                findMagicNumber(); 
            });
        }
    });
}

// Start the magic number search
findMagicNumber