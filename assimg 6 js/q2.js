// q2-task-scheduler.js: Event Loop execution order between Microtasks and Macrotasks

console.log("Start");

// Macrotask: Enqueued into the Timer/Macrotask Queue
setTimeout(() => {
    console.log("Macrotask: setTimeout callback executed");
}, 0);

// Microtask: Enqueued into the Microtask Queue
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then callback executed");
});

// Synchronous Log
console.log("Synchronous middle execution");

console.log("End");

/*
 * EXPLANATION OF EXECUTION ORDER:
 *
 * Output:
 * 1. "Start"
 * 2. "Synchronous middle execution"
 * 3. "End"
 * 4. "Microtask: Promise.then callback executed"
 * 5. "Macrotask: setTimeout callback executed"
 *
 * WHY MICROTASKS EXECUTE BEFORE MACROTASKS:
 * 1. The Call Stack first executes all synchronous code line-by-line ("Start", "Synchronous middle execution", "End").
 * 2. `setTimeout` callback goes to the Web API container and is pushed to the Macrotask Queue.
 * 3. `Promise.then` callback is pushed directly to the Microtask Queue.
 * 4. Once the Call Stack becomes completely empty, the Event Loop prioritizes the Microtask Queue.
 *    It clears ALL microtasks completely before yielding execution control to the Macrotask Queue.
 * 5. Therefore, the Promise callback runs before the setTimeout callback.
 */