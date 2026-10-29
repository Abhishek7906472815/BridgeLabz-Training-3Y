"use strict";

/**
 * Q7: Smart Calculator
 * Custom error handling class and switch-case execution.
 */

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, num1, num2) {
    try {
        switch (operation.toLowerCase()) {
            case "add":
                return num1 + num2;
            case "subtract":
                return num1 - num2;
            case "multiply":
                return num1 * num2;
            case "divide":
                if (num2 === 0) {
                    throw new Error("DivisionByZeroError: Cannot divide by zero.");
                }
                return num1 / num2;
            case "power":
                return Math.pow(num1, num2);
            case "root":
                if (num1 < 0) {
                    throw new Error("ComplexNumberError: Square root of negative number is not supported.");
                }
                return Math.sqrt(num1);
            default:
                throw new InvalidOperationError(`Operation '${operation}' is not recognized.`);
        }
    } catch (err) {
        return `[CALC ERROR] ${err.name}: ${err.message}`;
    }
}

console.log("=== Q7: SMART CALCULATOR REPORT ===");
const ops = ["add", "divide", "power", "root", "subtract", "unknownOp"];

ops.forEach(op => {
    const res = calculate(op, 25, 0);
    console.log(`Operation: ${op.padEnd(10)} | Result: ${res}`);
});