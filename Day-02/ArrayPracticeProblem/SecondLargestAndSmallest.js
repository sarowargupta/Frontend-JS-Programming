function getRandomThreeDigitNumber() {

    // Generates a random 3-digit number
    return Math.floor(100 + Math.random() * 900); 
}

function findSecondLargestAndSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;

    for (let num of arr) {
        // Finding first and second largest
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

        // Finding first and second smallest
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }

    return { secondLargest: secondMax, secondSmallest: secondMin };
}

// Step a & b: Generate 10 random numbers and store in an array
let randomNumbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);
console.log("Generated Numbers:", randomNumbers);

// Step c: Find second largest and second smallest
let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest:", result.secondLargest);
console.log("Second Smallest:", result.secondSmallest);
