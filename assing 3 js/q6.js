"use strict";

/**
 * Q6: Pyramid Pattern Generator
 * Strict loop variables, scope comparison (let vs var), and dynamic user limits.
 */

console.log("=== Q6: PYRAMID PATTERN GENERATOR ===");

function generatePyramid(userLimit = 5) {
    const limit = Number(userLimit) || 5;

    console.log(`Generating Pyramid with height limit: ${limit}`);

    // Using strict 'let' binding to prevent loop variable leakage
    for (let i = 1; i <= limit; i++) {
        let line = "";
        
        // Add hyphen spacing
        for (let k = 1; k <= limit - i; k++) {
            line += "  ";
        }
        
        // Add stars
        for (let j = 1; j <= i; j++) {
            line += "* ";
        }
        
        console.log(line);
    }
}

generatePyramid(5);

/**
 * OBSERVED DIFFERENCES BETWEEN 'let' AND 'var':
 * 1. Replacing loop counter 'let i' with 'var i' leaks variable 'i' to function scope.
 * 2. If inner loops also use 'var i' or 'var j' without unique names, inner loops mutate the outer loop counter, causing infinite loops or incorrect execution.
 */