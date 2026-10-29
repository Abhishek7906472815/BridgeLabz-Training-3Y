// q4-devops-race.js: Promise.all vs Promise.race concurrency handling

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) reject("Server A failed to deploy.");
            else resolve("Server A Deployment Completed (2s)");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) reject("Server B failed to deploy.");
            else resolve("Server B Deployment Completed (3s)");
        }, 3000);
    });
}

// 1. Using Promise.race to capture the fastest responder
Promise.race([serverA(), serverB()])
    .then((winner) => {
        console.log(`Fastest response: ${winner}`);
    })
    .catch((err) => {
        console.error(`Race failed due to fast error: ${err}`);
    });

// 2. Using Promise.all to wait for all servers to complete
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("\n--- All Server Results ---");
        results.forEach(res => console.log(`- ${res}`));
        console.log("Deployment completed for all servers");
    })
    .catch((err) => {
        console.error(`\nDeployment pipeline halted: ${err}`);
    });