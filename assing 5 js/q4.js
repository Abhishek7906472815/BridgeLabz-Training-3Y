// q4-car-prototype.js: Constructor functions and method sharing via prototype

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add getDetails method to the prototype so all instances share it efficiently
Car.prototype.getDetails = function() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
};

// Create two car instances
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Tesla", "Model 3");

// Call prototype method showing shared behavior
car1.getDetails(); // Car Brand: Toyota, Model: Camry
car2.getDetails(); // Car Brand: Tesla, Model 3

// Verify method sharing reference equality
console.log("Methods are shared (same reference):", car1.getDetails === car2.getDetails); // true