// q5-prototype-inheritance.js: Prototype inheritance chain between Person and Student

// Base constructor function: Person
function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Person Name: ${this.name}`);
};

// Sub-constructor function: Student
function Student(name, branch) {
    // Inherit properties using .call()
    Person.call(this, name);
    this.branch = branch;
}

// Link prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add method to Student prototype
Student.prototype.printBranch = function() {
    console.log(`${this.name} belongs to the ${this.branch} branch.`);
};

// Demonstrate the prototype chain working
const student1 = new Student("Bob", "Computer Science");

student1.printName();   // Inherited from Person prototype -> Person Name: Bob
student1.printBranch(); // Defined on Student prototype -> Bob belongs to the Computer Science branch.

// Verify instance relationships
console.log("Is student1 an instance of Student?", student1 instanceof Student); // true
console.log("Is student1 an instance of Person?", student1 instanceof Person);   // true