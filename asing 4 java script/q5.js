// q9-shopping-cart.js: Shopping Cart Total with Coupon Validation

class Cart {
    constructor() {
        this.items = [];
    }

    // Add items with name, price, quantity
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Calculate total gross cart value
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Apply coupon validation using RegExp (Format: SAVE20 or DISC10)
    applyCoupon(couponCode, totalAmount) {
        // Regex pattern: 4 uppercase letters followed by 2 digits (e.g., SAVE20, DISC10)
        const couponPattern = /^[A-Z]{4}\d{2}$/;

        if (!couponPattern.test(couponCode)) {
            console.log(`[❌ Invalid Coupon] Code "${couponCode}" does not match format (e.g., SAVE20).`);
            return totalAmount;
        }

        // Extract discount percentage from the last two digits of the coupon string
        const discountPercent = parseInt(couponCode.slice(-4), 10) || parseInt(couponCode.replace(/^\D+/g, ''), 10);
        
        console.log(`[✔ Valid Coupon Applied!] Code: ${couponCode} -> ${discountPercent}% discount unlocked.`);
        
        const discountedTotal = totalAmount - (totalAmount * (discountPercent / 100));
        return discountedTotal;
    }
}

// Testing the Cart System
const myCart = new Cart();
myCart.addItem("Mechanical Keyboard", 3000, 1);
myCart.addItem("Gaming Mouse", 1500, 2);
myCart.addItem("Desk Mat", 800, 1);

const grossTotal = myCart.getTotal();
console.log(`Gross Cart Total: ₹${grossTotal}`);

// Test with invalid coupon
let finalAmount1 = myCart.applyCoupon("save-20", grossTotal);
console.log(`Final Total: ₹${finalAmount1}\n`);

// Test with valid coupon matching format (e.g., SAVE20 -> 20% off)
let finalAmount2 = myCart.applyCoupon("SAVE20", grossTotal);
console.log(`Final Payable Total After Coupon: ₹${finalAmount2}`);