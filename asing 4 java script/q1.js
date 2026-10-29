// q1-product-manager.js: E-Commerce Product Manager

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply a discount percentage (e.g., 10 for 10%)
    applyDiscount(percentage) {
        this.price -= this.price * (percentage / 100);
    }

    // Method to display product details in a formatted string
    displayDetails() {
        return `Product [ID: ${this.id}] | Name: ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}

// Create multiple product objects and store them in an array
const products = [
    new Product(101, "Wireless Mouse", 850, "Electronics"),
    new Product(102, "Mechanical Keyboard", 3500, "Electronics"),
    new Product(103, "Ergonomic Office Chair", 12400, "Furniture"),
    new Product(104, "Stainless Steel Water Bottle", 650, "Lifestyle"),
    new Product(105, "UltraWide Gaming Monitor", 24999, "Electronics")
];

console.log("=== All Products ===");
products.forEach(p => console.log(p.displayDetails()));

// Display products with price > 1000 in the console using a filter
console.log("\n=== Products with Price > ₹1000 ===");
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));