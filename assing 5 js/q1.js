// q1-callback-greeting.js: Demonstration of Higher-Order Functions and Callback Flow

// Callback function to print the end message
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Higher-order function that takes a name and a callback function
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    
    // Execute the passed callback function after greeting
    if (typeof callback === 'function') {
        callback();
    }
}

// Demonstrate the callback flow
greetUser("Alice", showEndMessage);