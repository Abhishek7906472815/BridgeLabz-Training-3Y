// q10-food-delivery-pipeline.js: Full Async Delivery Pipeline with random failure simulation

function createPipelineStep(stepName, logMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2s delay
        setTimeout(() => {
            // 90% success probability per step
            const isSuccessful = Math.random() > 0.10;
            if (isSuccessful) {
                console.log(logMessage);
                resolve();
            } else {
                reject(`Step failed at [${stepName}]`);
            }
        }, delay);
    });
}

function takeOrder() { return createPipelineStep("takeOrder", "Step 1: Order taken"); }
function prepare() { return createPipelineStep("prepare", "Step 2: Food prepared"); }
function pack() { return createPipelineStep("pack", "Step 3: Package ready"); }
function dispatch() { return createPipelineStep("dispatch", "Step 4: Out for delivery"); }
function deliver() { return createPipelineStep("deliver", "Delivery completed!"); }

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        console.error(`\nPipeline failed! (${error})`);
    }
}

runPipeline();

/*
 * EVENT LOOP AND CONTROL FLOW COMMENTS:
 * 1. `runPipeline()` is pushed onto the callstack.
 * 2. Reaching `await takeOrder()` pauses `runPipeline()`'s execution context without blocking the main JavaScript thread.
 * 3. The `setTimeout` timer for `takeOrder` is handed over to Web APIs.
 * 4. When the timer resolves, its callback enters the Microtask queue via the Promise resolution.
 * 5. The Event Loop resumes `runPipeline()` right after `await`.
 * 6. If any Promise rejects inside `runPipeline()`, control jumps directly to the `catch` block, preventing subsequent steps from running.
 */