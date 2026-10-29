// q8-async-retry.js: Implementing retry logic for unstable APIs

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 50% failure chance simulation
            const success = Math.random() >= 0.5;
            if (success) {
                resolve("Order #9482 Processed Successfully");
            } else {
                reject("Database connection timeout");
            }
        }, 1000);
    });
}

async function processOrder() {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Sending order request...`);
            const response = await submitOrder();
            console.log(`Attempt ${attempt}: Success -> ${response}`);
            return; // Exit function upon success
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed -> Reason: ${err}`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed after maximum attempts.");
            }
        }
    }
}

// Execute processOrder with try/catch
async function runOrderPipeline() {
    try {
        await processOrder();
    } catch (finalError) {
        console.error(`\n[ORDER FATAL ERROR] ${finalError.message}`);
    }
}

runOrderPipeline();