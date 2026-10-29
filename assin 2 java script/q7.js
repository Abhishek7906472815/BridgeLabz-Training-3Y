// q7.js: Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";
console.log(`Customer Feedback: "${feedback}"`);

// 1. Count words (splitting by spaces)
let wordsArray = feedback.split(" ");
let wordCount = wordsArray.length;

// 2. Check if feedback includes "bad" or "poor"
let hasNegativeWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log(`Word Count: ${wordCount}`);
console.log(`Contains Negative Words ("bad"/"poor"): ${hasNegativeWords}`);

// 3. Conditional evaluation
if (!hasNegativeWords) {
    console.log("Evaluation Result: Positive Feedback");
} else {
    console.log("Evaluation Result: Needs Improvement");
}