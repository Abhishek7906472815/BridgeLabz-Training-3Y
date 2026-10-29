// q3-this-context.js: Examining 'this' binding in arrow vs normal functions

const user = {
    name: "Alex",
    
    // showName written as an arrow function
    showNameArrow: () => {
        // Arrow functions do not bind their own 'this'. 
        // Instead, they inherit 'this' from the enclosing lexical scope (global/window scope here),
        // which does not have a 'name' property, making this.name undefined.
        console.log("Arrow Function Output:", this.name);
    },

    // showName written as a normal function
    showNameNormal: function() {
        // Normal functions have their own execution context. 
        // 'this' refers to the object that calls the method (i.e., the 'user' object).
        console.log("Normal Function Output:", this.name);
    }
};

user.showNameArrow();  // Logs: undefined (Explaining why: lexical binding points outside the object literal)
user.showNameNormal(); // Logs: Alex