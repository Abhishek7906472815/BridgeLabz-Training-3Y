// q9-event-loop-debug.js: Predicting and verifying Event Loop execution order

/*
 * PREDICTED OUTPUT ORDER:
 * 1. "Script start"
 * 2. "Script end"
 * 3. "Promise callback"
 * 4. "Timeout callback"
 */

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
 * ACTUAL RESULTS MATCH PREDICTION:
 * - "Script start" (Synchronous execution, main callstack)
 * - "Script end" (Synchronous execution, main callstack)
 * - "Promise callback" (Microtask queue processed immediately after stack clears)
 * - "Timeout callback" (Macrotask queue processed after Microtask queue is emptied)
 *
 * EXPLANATION:
 * The Event Loop processes the Call Stack first. Asynchronous callbacks are scheduled into either
 * the Microtask Queue (Promises) or the Macrotask/Callback Queue (setTimeout). 
 * When the Call Stack is empty, the Event Loop checks and completely flushes the Microtask Queue 
 * before processing the first item in the Macrotask Queue.
 */