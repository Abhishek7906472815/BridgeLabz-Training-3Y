// q5-build-pipeline.js: Refactoring Callback Hell to Async/Await

// Helper function converting step into a Promise
function buildStep(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stage completed: ${stageName}`);
            resolve();
        }, 1000);
    });
}

// --- PART 1: Callback Hell Representation ---
function runPipelineCallbackHell() {
    console.log("=== Starting Pipeline (Callback Hell Version) ===");
    setTimeout(() => {
        console.log("Stage 1: Design complete");
        setTimeout(() => {
            console.log("Stage 2: Build complete");
            setTimeout(() => {
                console.log("Stage 3: Test complete");
                setTimeout(() => {
                    console.log("Stage 4: Deploy complete");
                    setTimeout(() => {
                        console.log("Stage 5: Celebrate!");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// --- PART 2: Clean Async/Await Representation ---
async function runPipelineAsyncAwait() {
    console.log("\n=== Starting Pipeline (Async/Await Refactored) ===");
    try {
        await buildStep("Design");
        await buildStep("Build");
        await buildStep("Test");
        await buildStep("Deploy");
        await buildStep("Celebrate 🎉");
        console.log("Build pipeline finished successfully!");
    } catch (err) {
        console.error("Pipeline crashed:", err);
    }
}

// Execute async/await version
runPipelineAsyncAwait();

/*
 * WHY ASYNC/AWAIT IMPROVES READABILITY:
 * 1. Linear Readability: Code executes sequentially line-by-line, avoiding pyramid-shaped indentation.
 * 2. Unified Error Handling: A single try/catch block captures errors across all stages.
 * 3. Scope Isolation: Variables stay clean without needing deep nested function closures.
 */