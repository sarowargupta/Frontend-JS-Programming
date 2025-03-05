// Program to check if a given year is a Leap Year

// Get command line arguments
const args = process.argv.slice(2);
const year = parseInt(args[0], 10);

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year >= 1000 && year <= 9999) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    return false;
}

// Print the result
console.log(year + " is " + (isLeapYear(year) ? "a Leap Year" : "not a Leap Year"));
