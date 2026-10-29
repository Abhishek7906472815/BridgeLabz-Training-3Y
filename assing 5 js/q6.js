// q6-deep-prototype-chain.js: Multi-level prototype inheritance chain

// Level 1: Person
function Person(name) {
    this.name = name;
}
Person.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};

// Level 2: Faculty (inherits from Person)
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.teach = function() {
    console.log(`${this.name} teaches in the ${this.department} department.`);
};

// Level 3: Professor (inherits from Faculty)
function Professor(name, department, researchField) {
    Faculty.call(this, name, department);
    this.researchField = researchField;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.publishPaper = function() {
    console.log(`${this.name} is publishing a research paper in ${this.researchField}.`);
};

// Demonstrate Professor accessing methods all the way up the chain
const prof = new Professor("Dr. Smith", "Physics", "Quantum Mechanics");

prof.eat();          // From Person prototype
prof.teach();        // From Faculty prototype
prof.publishPaper(); // From Professor prototype