// q1.js: Scope Conflict Resolver

// Declare a global variable bonus
let bonus = 5000;

function calculateSalary() {
    // Inside the function, declare a local variable salary
    let salary = 40000;
    
    // Local variable representing employment status
    let isPermanent = true; // Can be toggled to false to test outcomes
    
    let totalSalary = salary;
    
    // Add the bonus only if isPermanent is true
    if (isPermanent) {
        totalSalary += bonus;
    }
    
    console.log(`[Inside Function] Employment Permanent Status: ${isPermanent}`);
    console.log(`[Inside Function] Total Calculated Salary: ₹${totalSalary}`);
}

// Execute function
calculateSalary();

// Demonstration of scope and side-effects:
// Changing isPermanent inside the function does not affect the global bonus variable.
// However, if we modified 'bonus' without 'let' inside the function, it could shadow or mutate global state.
console.log(`[Global Scope] Global Bonus remains unchanged: ₹${bonus}`);