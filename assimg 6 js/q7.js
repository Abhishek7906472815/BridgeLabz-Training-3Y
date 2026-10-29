// q7-lazy-loader.js: Dashboard component loading using Promise.allSettled()

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) reject("Profile failed to load");
            else resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) reject("Posts failed to load");
            else resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) reject("Messages failed to load");
            else resolve("Messages Loaded");
        }, 1000);
    });
}

async function initializeDashboard() {
    const startTime = Date.now();
    console.log("Loading dashboard components...");

    // Using Promise.allSettled to track status of all promises regardless of rejections
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

    const endTime = Date.now();
    const totalTimeTaken = endTime - startTime;

    console.log("\n=== Dashboard Module Settlement Report ===");
    results.forEach((res, index) => {
        const moduleNames = ["Profile Module", "Posts Module", "Messages Module"];
        if (res.status === "fulfilled") {
            console.log(`[✔ SUCCESS] ${moduleNames[index]}: ${res.value}`);
        } else {
            console.log(`[❌ FAILED] ${moduleNames[index]}: ${res.reason}`);
        }
    });

    console.log(`\nTotal time elapsed: ${totalTimeTaken}ms`);
}

initializeDashboard();