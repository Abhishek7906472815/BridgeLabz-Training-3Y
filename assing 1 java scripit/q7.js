// q7.js: Smart Guessing Game (Number Range)

// Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 27; // Test value

console.log(`Secret Number (Debug): ${secretNumber}`);
console.log(`User Guess: ${userGuess}`);

// Evaluate guess using nested if conditions and logical operators
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check if guess is within ± 3 of the secret number
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else {
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}