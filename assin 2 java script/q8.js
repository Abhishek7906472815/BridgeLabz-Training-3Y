// q8.js: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let initialTotal = 0;
let discountedTotal = 0;

console.log("--- Cart Items Processing ---");
cart.forEach(product => {
    initialTotal += product.price;
    let itemDiscountRate = 0;
    
    // Category-specific discounts
    if (product.category === "electronics") {
        itemDiscountRate = 0.10; // 10% discount
    } else if (product.category === "fashion") {
        itemDiscountRate = 0.05; // 5% discount
    } else {
        itemDiscountRate = 0.0;  // No discount for education/others
    }
    
    let discountedPrice = product.price * (1 - itemDiscountRate);
    discountedTotal += discountedPrice;
    console.log(`- ${product.item} (${product.category}): ₹${product.price} -> Discounted: ₹${discountedPrice.toFixed(2)}`);
});

// If total cart value before item discounts > 50000, apply extra 5% overall discount
if (initialTotal > 50000) {
    console.log("\nCart total exceeded ₹50,000! Applying extra 5% overall discount.");
    discountedTotal *= 0.95;
}

console.log("---------------------------------");
console.log(`Initial Gross Total: ₹${initialTotal}`);
console.log(`Final Payable Total: ₹${discountedTotal.toFixed(2)}`);