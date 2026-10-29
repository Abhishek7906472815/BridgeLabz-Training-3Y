// q2.js: String Manipulation Report

// Store product name with extra spaces and mixed casing
let productName = " wireless headphones PRO ";
console.log(`Original Product Name: "${productName}"`);

// 1. Trim extra spaces
let trimmedName = productName.trim();

// 2. Convert to lowercase, split into words, capitalize each word, and join back
let capitalizedName = trimmedName
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// 3. Replace "Pro" with "Pro Edition"
let finalTitle = capitalizedName.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log(`Cleaned Product Title: "${finalTitle}"`);
console.log(`Title Length: ${finalTitle.length} characters`);