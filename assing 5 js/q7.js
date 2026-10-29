// q7-closure-multiplier.js: Implementing closures with configurable multipliers

function makeMultiplier(multiplier) {
    // The inner function closes over (retains access to) the 'multiplier' variable
    // even after makeMultiplier has finished executing.
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // Output: 15

/*
 * HOW CLOSURE WORKS IN THIS EXAMPLE:
 * 1. When `makeMultiplier(3)` is called, it creates an execution context where `multiplier` is stored as 3.
 * 2. It returns the anonymous inner function.
 * 3. Even though `makeMultiplier` has returned, the returned function maintains a persistent 
 *    lexical reference to `multiplier`. This capability is called a closure.
 */