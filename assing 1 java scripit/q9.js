// q9.js: Random Math Quiz Generator

// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Random operator selection
let operators = ['+', '-', '*', '/'];
let selectedOperator = operators[Math.floor(Math.random() * operators.length)];

let calculatedAnswer;

// Calculate correct answer using switch statement
switch (selectedOperator) {
    case '+':
        calculatedAnswer = num1 + num2;
        break;
    case '-':
        calculatedAnswer = num1 - num2;
        break;
    case '*':
        calculatedAnswer = num1 * num2;
        break;
    case '/':
        // Ensure division result is rounded to two decimal places
        calculatedAnswer = Number((num1 / num2).toFixed(2));
        break;
    default:
        calculatedAnswer = 0;
}

console.log(`Math Quiz Question: What is ${num1} ${selectedOperator} ${num2}?`);
console.log(`Correct Answer: ${calculatedAnswer}`);