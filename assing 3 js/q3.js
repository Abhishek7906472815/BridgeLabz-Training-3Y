"use strict";

/**
 * Q3: Transaction Validator
 * Custom error categorization and validation pipeline with breakpoint watching.
 */

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("=== Q3: TRANSACTION VALIDATOR ===");

transactions.forEach((tx, idx) => {
    try {
        // Breakpoint Observation Point: Watch variable 'tx' and 'idx'
        debugger; 

        if (tx === null || tx === undefined) {
            throw new Error("Null or Undefined transaction entry encountered");
        }
        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error(`Missing required fields (id or amount) in transaction record at index ${idx}`);
        }
        if (typeof tx.amount !== "number" || tx.amount < 0) {
            throw new Error(`Negative or non-numeric amount detected (ID: ${tx.id}, Amount: ${tx.amount})`);
        }

        validTransactions.push(tx);
        console.log(`[VALID] Transaction #${tx.id} passed with amount: $${tx.amount}`);

    } catch (err) {
        invalidTransactions.push({ entryIndex: idx, record: tx, errorMsg: err.message });
        console.warn(`[INVALID] Record at index ${idx} failed: ${err.message}`);
    }
});

console.log("\n=== FINAL TRANSACTION SUMMARY ===");
console.log(`Total Records Processed: ${transactions.length}`);
console.log(`Successful Transactions Count: ${validTransactions.length}`);
console.log(`Failed Transactions Count: ${invalidTransactions.length}`);