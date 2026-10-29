"use strict";

/**
 * Q10: Nested Hoisting and Closures
 *
 * PREDICTION & ANALYSIS OF ORIGINAL CODE:
 *   function outer() {
 *       console.log(count); // undefined (var count in outer scope hoisted)
 *       var count = 5;
 *       function inner() {
 *           console.log(count); // undefined (var count in inner scope hoisted separately)
 *           var count = 10;
 *       }
 *       inner();
 *   }
 *   outer();
 *
 * WHY BOTH LOG UNDEFINED:
 * Each function creates its own Execution Context.
 * During memory allocation phase, 'var count' in outer scope is initialized to undefined.
 * 'var count' inside inner scope is ALSO hoisted to top of inner scope and initialized to undefined separately.
 */

console.log("=== Q10: NESTED HOISTING & CLOSURES ===");

function outerFixed() {
    let count = 5; // Local scope variable for outer
    console.log(`Outer Count: ${count}`);

    // Rewriting inner function as an arrow function
    const innerArrow = () => {
        // Arrow functions do not bind their own 'this' or create 'var' hoisting ambiguity unless declared inside
        let innerCount = 10;
        console.log(`Inner Count (Arrow Function Scope): ${innerCount}`);
        console.log(`Accessing Enclosing Scope Count from Closure: ${count}`);
    };

    innerArrow();
}

outerFixed();