// Generates a number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; 
}

function rollUntilMaxCountReached(targetCount) {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolledNumber, minRolledNumber;

    while (true) {
        let roll = rollDie();
        rollCounts[roll]++;

        // Stop when any number reaches the target count (10 times)
        if (rollCounts[roll] === targetCount) {
            break;
        }
    }

    // Find the number that appeared the most and the least
    maxRolledNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    minRolledNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    console.log("Final Roll Counts:", rollCounts);
    console.log(`Number that reached ${targetCount} times first:`, maxRolledNumber);
    console.log("Number that appeared the least:", minRolledNumber);
}

// Start rolling dice until one number reaches 10 times
rollUntilMaxCountReached(10);
