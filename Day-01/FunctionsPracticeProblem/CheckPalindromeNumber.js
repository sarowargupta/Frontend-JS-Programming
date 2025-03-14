function isPalindrome(number) {
    let originalNum = number.toString();
    let reversedNum = originalNum.split("").reverse().join("");
    return originalNum === reversedNum;
}

function checkTwoPalindromes(num1, num2) {
    let isNum1Palindrome = isPalindrome(num1);
    let isNum2Palindrome = isPalindrome(num2);

    console.log(`${num1} is ${isNum1Palindrome ? "" : "not "}a palindrome.`);
    console.log(`${num2} is ${isNum2Palindrome ? "" : "not "}a palindrome.`);
}


checkTwoPalindromes(121, 1331); 
checkTwoPalindromes(123, 456);  