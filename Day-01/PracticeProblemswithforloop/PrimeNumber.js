// Get command-line argument
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

if (isNaN(n) || n <=2) {
    console.log("Please provide a valid integer greater than or equal to 2.");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${n} is ${isPrime ? "a prime number" : "not a prime number"}`);
}
