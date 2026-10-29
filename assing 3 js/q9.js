"use strict";

/**
 * Q9: JSON Audit
 * Parsing JSON, line-by-line error handling, type conversion, and filtering.
 */

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Leo","age":"16"}'
];

const cleanUsers = [];

console.log("=== Q9: JSON AUDIT REPORT ===");

rawData.forEach((entry, index) => {
    try {
        const parsed = JSON.parse(entry);

        if (!parsed.user || parsed.age === undefined) {
            throw new Error(`Missing required keys ('user' or 'age')`);
        }

        const ageNum = Number(parsed.age);
        if (Number.isNaN(ageNum)) {
            throw new Error(`Invalid age value: ${parsed.age}`);
        }

        parsed.age = ageNum;

        // Filter under-18 users
        if (parsed.age < 18) {
            console.log(`[FILTERED OUT] Entry ${index + 1}: User ${parsed.user} is under 18.`);
            return;
        }

        cleanUsers.push(parsed);
        console.log(`[AUDIT PASSED] Entry ${index + 1}: Valid user ${parsed.user} (Age: ${parsed.age})`);

    } catch (err) {
        console.error(`[AUDIT FAILED] Line ${index + 1}: ${err.message} -> Raw: "${entry}"`);
    }
});

console.log("\n--- CLEAN AUDITED USERS TABLE (18+) ---");
console.table(cleanUsers);