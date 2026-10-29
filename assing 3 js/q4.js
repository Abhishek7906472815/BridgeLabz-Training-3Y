"use strict";

/**
 * Q4: Debugging Mystery
 * Analysis of strict mode restrictions on implicit global variables.
 *
 * MYSTERY ANALYSIS:
 * Original code:
 *   "use strict";
 *   function showMessage() {
 *     greeting = "Welcome"; // ReferenceError: greeting is not defined
 *     console.log(greeting);
 *   }
 *
 * Why it throws ReferenceError:
 * In non-strict (sloppy) mode, assigning a value to an undeclared variable creates an implicit global variable.
 * Under "use strict", implicit globals are prohibited to prevent global namespace pollution and subtle scope bugs.
 */

console.log("=== Q4: DEBUGGING MYSTERY RESOLUTION ===");

// FIX: Declare the variable explicitly using 'let' or 'const'
function showMessage() {
    // Adding explicit block-scoped variable declaration
    const greeting = "Welcome"; 
    
    // Watch variable point: Add 'greeting' to watch panel in VS Code
    console.log(`Greeting Output: ${greeting}`);
}

showMessage();

console.log("Scope Fix Explanation: Declaring 'greeting' with 'const' binds it to local function scope, satisfying strict mode compliance.");