// q4.js: Academic Performance Evaluator

// Input marks of 5 subjects (out of 100 each)
let marks = [78, 85, 90, 82, 88];
let maxMarksPerSubject = 100;
let totalPossibleMarks = marks.length * maxMarksPerSubject;

let totalObtainedMarks = 0;
let hasFailedSubject = false;

// Calculate total obtained marks and validate individual subject marks (< 35)
for (let i = 0; i < marks.length; i++) {
    totalObtainedMarks += marks[i];
    if (marks[i] < 35) {
        hasFailedSubject = true;
    }
}

// Calculate overall percentage
let overallPercentage = (totalObtainedMarks / totalPossibleMarks) * 100;
let performanceStatus = "";

// Evaluation logic using logical operators and validation rules
if (hasFailedSubject) {
    performanceStatus = "Detained (Failed in one or more subjects with less than 35 marks)";
} else if (overallPercentage >= 85) {
    performanceStatus = "Promoted with Distinction";
} else if (overallPercentage >= 50 && overallPercentage < 85) {
    performanceStatus = "Promoted";
} else {
    performanceStatus = "Detained";
}

console.log(`Total Obtained Marks: ${totalObtainedMarks} / ${totalPossibleMarks}`);
console.log(`Overall Percentage: ${overallPercentage.toFixed(2)}%`);
console.log(`Performance Status: ${performanceStatus}`);