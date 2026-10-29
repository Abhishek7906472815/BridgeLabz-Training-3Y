// q5.js: Weather Activity Planner

// Environment variables
let temperature = 30; // in Celsius
let isRaining = false;
let windSpeed = 12; // in km/h

let recommendation = "";

// Combined conditional logic using logical operators (&&, ||)
if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}

console.log(`Current Weather -> Temp: ${temperature}°C | Raining: ${isRaining} | Wind: ${windSpeed} km/h`);
console.log(`Activity Advice: ${recommendation}`);