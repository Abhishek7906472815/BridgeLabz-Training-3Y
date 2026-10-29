"use strict";

/**
 * Q1: Dynamic Data Parser
 * Demonstrates type conversion, parsing, and strict filtering of mixed data types.
 */

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidEntries = [];

console.log("=== Q1: DYNAMIC DATA PARSER REPORT ===");

apiData.forEach((item, index) => {
    // 1. Convert to Number, Boolean, and String forms
    const numForm = Number(item);
    const boolForm = Boolean(item);
    const strForm = String(item);

    // 2 & 3. Validate numeric conversion
    // Skip invalid numbers: NaN, empty/whitespace strings (" "), and strings with trailing characters ("100px")
    const isWhitespace = typeof item === "string" && item.trim() === "";
    const isNaNResult = Number.isNaN(numForm);

    if (isNaNResult || isWhitespace || item === null || item === undefined) {
        invalidEntries.push({ index, original: item, reason: isWhitespace ? "Whitespace string" : String(item) });
        console.log(`[SKIP] Index ${index}: Value "${item}" is invalid for numeric parsing.`);
    } else {
        validNumericData.push({
            original: item,
            asNumber: numForm,
            asBoolean: boolForm,
            asString: strForm
        });
    }
});

console.log("\n--- VALID NUMERIC DATA REPORT ---");
console.table(validNumericData);

console.log("\n--- INVALID / SKIPPED ENTRIES REPORT ---");
console.table(invalidEntries);