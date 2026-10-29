"use strict";

/**
 * Q8: Strict Mode Showdown
 *
 * NON-STRICT MODE vs STRICT MODE DIFFERENCES:
 * 1. Duplicate parameters (a, a):
 *    - Sloppy mode: Allowed; second 'a' shadows first 'a'.
 *    - Strict mode: SyntaxError: Duplicate parameter name not allowed.
 * 2. Undeclared assignment (total = 10):
 *    - Sloppy mode: Creates global variable 'total'.
 *    - Strict mode: ReferenceError: total is not defined.
 * 3. Deleting plain variables (delete total):
 *    - Sloppy mode: Returns false silently.
 *    - Strict mode: SyntaxError: Delete of an unqualified identifier in strict mode.
 */

console.log("=== Q8: STRICT MODE SHOWDOWN ===");

// Corrected version following modern ES6 standards
function demoCorrected(a, b) {
    let total = a + b;
    console.log(`Calculated Total: ${total}`);
    // Variables cannot and should not be deleted; scope handling cleans memory automatically
}

demoCorrected(5, 10);