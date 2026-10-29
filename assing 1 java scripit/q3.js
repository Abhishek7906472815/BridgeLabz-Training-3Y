// q3.js: Monthly Expense Tracker

// Array of expenses for 5 categories (food, travel, rent, bills, leisure)
let expenses = [4500, 2000, 15000, 3000, 2500];

// Calculate total base expenses using arithmetic operators
let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

// Calculate average expense per category
let averageExpense = totalExpenses / expenses.length;

// Add 10% tax using multiplication and assignment operators
let finalAmountWithTax = totalExpenses;
finalAmountWithTax *= 1.10;

// Display results rounded to 2 decimal places using toFixed(2)
console.log(`Total Expenses (Base): ₹${totalExpenses.toFixed(2)}`);
console.log(`Average Category Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final Amount After 10% Tax: ₹${finalAmountWithTax.toFixed(2)}`);