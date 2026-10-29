// q6.js: Event-Based Counter Simulation

let count = 0;

// Outer function container implementing lexical closure/scope
function createCounterSystem() {
    
    function logStatus(action) {
        console.log(`Action: [${action}] | Current Count Value: ${count}`);
    }

    return {
        increment: function() {
            count++;
            logStatus("Increment");
        },
        decrement: function() {
            count--;
            logStatus("Decrement");
        }
    };
}

// Initialize counter system
const counter = createCounterSystem();

// Simulate click events manually in code
console.log("--- Simulating Click Events ---");
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
counter.increment(); // Count: 2