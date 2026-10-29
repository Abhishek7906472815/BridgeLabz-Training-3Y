"use strict";

/**
 * Q2: Employee Bonus Calculator
 * Strict validation, numeric coercion, error handling, and template string formatting.
 */

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "InvalidUser", salary: "ABC", years: "3" } // Testing try...catch error handling
];

console.log("=== Q2: EMPLOYEE BONUS CALCULATOR ===");

function processEmployeeBonus(emp) {
    try {
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error(`Missing property in employee entry: ${JSON.stringify(emp)}`);
        }

        // Convert salary and years to numbers explicitly
        const numSalary = Number(emp.salary);
        const numYears = Number(emp.years);

        if (Number.isNaN(numSalary) || Number.isNaN(numYears)) {
            throw new Error(`Invalid numeric conversion for ${emp.name} (Salary: ${emp.salary}, Years: ${emp.years})`);
        }

        // Bonus = 10% if years > 3, else 5%
        const bonusPercent = numYears > 3 ? 0.10 : 0.05;
        const bonusAmount = numSalary * bonusPercent;
        const totalPayout = numSalary + bonusAmount;

        console.log(`Employee: ${emp.name} | Tenure: ${numYears} yrs | Base Salary: ₹${numSalary.toFixed(2)} | Bonus: ₹${bonusAmount.toFixed(2)} | Total: ₹${totalPayout.toFixed(2)}`);

    } catch (error) {
        console.error(`[ERROR] Processing Failed: ${error.message}`);
    }
}

employees.forEach(emp => processEmployeeBonus(emp));