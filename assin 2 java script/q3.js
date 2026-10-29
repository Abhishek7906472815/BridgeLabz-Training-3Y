// q3.js: Math Utility Dashboard

// Take a number x
let x = 16.75;

// Calculations using Math object methods
let roundedVal = Math.round(x);
let sqrtVal = Math.sqrt(x);
let powerVal = Math.pow(x, 3);

// Generate a random number between 10 and 50
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
let randomNum = Math.floor(Math.random() * 41) + 10;

// Display formatted result summary using template literals
let dashboardSummary = `
--- Math Utility Dashboard ---
Input Number (x): ${x}
1. Rounded Value (Math.round): ${roundedVal}
2. Square Root (Math.sqrt): ${sqrtVal.toFixed(2)}
3. Power Cube (Math.pow(x, 3)): ${powerVal.toFixed(2)}
4. Random Number (10–50): ${randomNum}
----------------------------
`;

console.log(dashboardSummary);