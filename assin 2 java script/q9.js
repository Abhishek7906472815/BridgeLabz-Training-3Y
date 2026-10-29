// q9.js: Odd–Even Number Analyzer

let numbersRange = [];
let classifiedResults = [];

// Accept numbers 1–30 in an array using a loop
for (let i = 1; i <= 30; i++) {
    numbersRange.push(i);
}

// Analyze each number based on multiple conditions
for (let i = 0; i < numbersRange.length; i++) {
    let num = numbersRange[i];
    let classification = "";
    
    if (num % 3 === 0 && num % 5 === 0) {
        classification = "FizzBuzz";
    } else if (num % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }
    
    classifiedResults.push({ Number: num, Result: classification });
}

console.log("--- Numbers 1 to 30 Classification Table ---");
console.table(classifiedResults);