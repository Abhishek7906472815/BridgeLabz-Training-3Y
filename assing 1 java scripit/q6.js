// q6.js: Progressive Discount System

let purchaseTotal = 6500;
let discountTier = 0;

// Determine discount percentage based on purchase amount tiers
if (purchaseTotal >= 10000) {
    discountTier = 25;
} else if (purchaseTotal >= 5000) {
    discountTier = 15;
} else if (purchaseTotal >= 2000) {
    discountTier = 5;
} else {
    discountTier = 0;
}

// Calculate discount amount and final price
let discountAmount = (purchaseTotal * discountTier) / 100;
let finalPrice = purchaseTotal - discountAmount;

// Print report with rounded values using Math.round()
console.log(`Original Total: ₹${purchaseTotal}`);
console.log(`Discount Percentage: ${discountTier}%`);
console.log(`Final Price After Discount: ₹${Math.round(finalPrice)}`);