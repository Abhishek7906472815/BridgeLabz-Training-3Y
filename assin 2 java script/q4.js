// q4.js: Array Performance Analyzer

// Create an array of 8 random scores between 30 and 100
let scores = [];
for (let i = 0; i < 8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30; // 30 to 100
    scores.push(randomScore);
}

// Calculate highest and lowest score using spread operator
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average score using reduce()
let totalScoreSum = scores.reduce((sum, current) => sum + current, 0);
let averageScore = totalScoreSum / scores.length;

// Count students who passed (>= 50) using filter()
let passingStudentsCount = scores.filter(score => score >= 50).length;

// Display full summary
console.log("Student Scores Array:", scores);
console.log("--- Performance Analysis Summary ---");
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Passing Students (>= 50): ${passingStudentsCount} out of ${scores.length}`);