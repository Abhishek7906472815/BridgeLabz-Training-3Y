// q3-bug-tracker.js: Modernizing callback-based function into Promises

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random API success/failure (80% success rate)
            const isApiHealthy = Math.random() > 0.2;

            if (isApiHealthy) {
                resolve([
                    { id: 101, bug: "UI glitch", severity: "Low" },
                    { id: 102, bug: "API timeout", severity: "High" },
                    { id: 103, bug: "Login failure", severity: "Critical" }
                ]);
            } else {
                reject("500 Internal Server Error: Unable to fetch bug tracking data.");
            }
        }, 1000);
    });
}

// Consuming getBugs() with Promise methods
console.log("Fetching bug report from QA server...");
getBugs()
    .then((bugs) => {
        console.log("=== Active Bug Report ===");
        console.table(bugs);
    })
    .catch((err) => {
        console.error(`[API ERROR] ${err}`);
    });