function getRandomMonth() {
    // Generates a number between 1 to 12
    return Math.floor(Math.random() * 12) + 1; 
}

// Randomly select 1992 or 1993
function getRandomYear() {
    return Math.random() < 0.5 ? 1992 : 1993; 
}

function generateBirthMonths(count) {
    let birthMonthData = {};

    // Initialize dictionary with empty arrays for each month
    for (let i = 1; i <= 12; i++) {
        birthMonthData[i] = [];
    }

    // Assign random birth months to individuals
    for (let i = 1; i <= count; i++) {
        let month = getRandomMonth();
        let year = getRandomYear();
        birthMonthData[month].push(`Person ${i} (Year: ${year})`);
    }

    return birthMonthData;
}

// Generate birth months for 50 individuals
let birthMonthGroups = generateBirthMonths(50);

// Print the results
console.log("Individuals grouped by birth month:");
for (let month in birthMonthGroups) {
    if (birthMonthGroups[month].length > 0) {
        console.log(`Month ${month}: ${birthMonthGroups[month].join(", ")}`);
    }
}
