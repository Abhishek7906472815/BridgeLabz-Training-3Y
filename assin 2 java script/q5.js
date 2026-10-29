// q5.js: Boolean Logic Access System

// Security state variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access is granted only if: Alarm is on, Door and window are closed, Owner is inside
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("--- Security Check Simulation 1 ---");
console.log(`Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, Alarm On: ${isAlarmOn}, Owner Inside: ${isOwnerInside}`);
console.log(isSecure ? "Secure" : "Unsafe");

// Test multiple outcomes by changing values
console.log("\n--- Security Check Simulation 2 (Window Left Open) ---");
isWindowClosed = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(`Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, Alarm On: ${isAlarmOn}, Owner Inside: ${isOwnerInside}`);
console.log(isSecure ? "Secure" : "Unsafe");