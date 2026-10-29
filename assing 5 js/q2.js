// q2-array-operations.js: Applying dynamic operations via callback functions

function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

const inputNumbers = [1, 2, 3, 4];

// 1. Double each number
const doubleOperation = num => num * 2;
const doubledResult = applyOperation(inputNumbers, doubleOperation);
console.log("Doubled Numbers:", doubledResult); // [2, 4, 6, 8]

// 2. Square each number
const squareOperation = num => num * num;
const squaredResult = applyOperation(inputNumbers, squareOperation);
console.log("Squared Numbers:", squaredResult); // [1, 4, 9, 16]