// Get command-line argument
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer.");
} else {
    let i = 0;
    let power = 1;
    console.log(`Powers of 2 up to 2^${n} or until 256:`);
    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
        i++;
    }
}
