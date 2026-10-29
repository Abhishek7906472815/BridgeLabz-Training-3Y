// q1.js: Personalized Login Greeting

// Declare user name variable
let userName = "Aakash";

// Get current hour using Date object
let currentHour = new Date().getHours();

let greetingMessage = "";

// Conditional logic to determine time-based greeting
if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}

// Print the greeting message using template literals
console.log(greetingMessage);