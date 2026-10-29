// q9-es6-classes-inheritance.js: Rewriting prototype inheritance using ES6 classes

// Base class
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`[ES6 Class] Person Name: ${this.name}`);
    }
}

// Subclass using extends and super()
class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name); // Call parent constructor
        this.branch = branch;
    }

    printBranch() {
        console.log(`[ES6 Class] ${this.name} belongs to the ${this.branch} branch.`);
    }
}

// Demonstrate functionality
const es6Student = new StudentClass("Charlie", "Information Technology");
es6Student.printName();   // [ES6 Class] Person Name: Charlie
es6Student.printBranch(); // [ES6 Class] Charlie belongs to the Information Technology branch.

/*
 * COMPARISON NOTE:
 * Under the hood, ES6 classes are syntactic sugar over JavaScript's prototype-based system[cite: 178].
 * StudentClass.prototype is linked correctly to PersonClass.prototype via prototype chains, 
 * ensuring both styles behave identically during runtime lookups.
 */