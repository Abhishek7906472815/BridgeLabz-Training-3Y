"use strict";

/**
 * Q5: Hoisting Lab: The Sequence Trap
 *
 * PREDICTION & ANALYSIS OF ORIGINAL CODE:
 * Original:
 *   console.log(score); // Output: undefined (var declaration hoisted, initialization stays at line 3)
 *   announce();         // Output: "Game started" (Function declaration fully hoisted with body)
 *   var score = 50;
 *   let status = "ready";
 *   startGame();        // Output: "ready"
 *   function startGame() { console.log(status); }
 */

console.log("=== Q5: HOISTING LAB RESOLUTION ===");

// 1. Fixed Code Execution Order
let score = 50; // Declared before usage to avoid undefined or TDZ issues
const status = "ready";

function announce() { 
    console.log("Game started"); 
}

function startGame() {
    console.log(`Game Status: ${status}`);
}

announce();
console.log(`Current Score: ${score}`);
startGame();

console.log("\n--- REWRITTEN USING ARROW FUNCTIONS ---");
// Arrow functions assigned to variables act like function expressions (not fully hoisted)

const announceArrow = () => {
    console.log("Game started (Arrow Function)");
};

const startGameArrow = () => {
    console.log(`Game Status (Arrow Function): ${status}`);
};

announceArrow();
startGameArrow();