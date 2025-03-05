// Program to check if a given day and month falls between March 20 and June 20

// Get command line arguments
const day = parseInt(process.argv[2], 10);
const month = parseInt(process.argv[3], 10);


// check if the date falls in the given range
if (
    (month === 3 && day >= 20) ||  
    (month > 3 && month < 6) ||    
    (month === 6 && day <= 20)     
) {
    console.log(true);
} else {
    console.log(false);
}
