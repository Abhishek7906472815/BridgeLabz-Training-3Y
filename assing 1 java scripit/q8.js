// q8.js: Employee Salary Projection

let startingSalary = 45000;
let annualIncrementRate = 7; // in percentage
let totalYears = 5;

let currentRunningSalary = startingSalary;
let salaryProjectionTable = [];

// Compute salary for each of the 5 years using a for loop
for (let year = 1; year <= totalYears; year++) {
    // Apply yearly increment using assignment and arithmetic operators
    currentRunningSalary += (currentRunningSalary * annualIncrementRate) / 100;
    
    salaryProjectionTable.push({
        Year: `Year ${year}`,
        "Projected Salary": Math.round(currentRunningSalary)
    });
}

console.log(`Initial Salary: ₹${startingSalary} | Annual Increment: ${annualIncrementRate}%`);
console.table(salaryProjectionTable);