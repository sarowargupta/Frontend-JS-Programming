// Read start of range from command line
const start = parseInt(process.argv[2], 10); 

// Read end of range from command line
const end = parseInt(process.argv[3], 10); 
if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Please enter a valid range where start and end are integers ≥ 2 and start ≤ end.");
} else {
    console.log(`Prime numbers between ${start} and ${end}:`);
    
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
        }
    }
    console.log(); 
}