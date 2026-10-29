// q1-async-coffee-maker.js: Async Coffee Maker with Promise Chaining

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Water heater malfunctioned!");
            } else {
                console.log("Step 1: Water boiled successfully.");
                resolve();
            }
        }, 1200);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Coffee grounds ran out!");
            } else {
                console.log("Step 2: Coffee brewed perfectly.");
                resolve();
            }
        }, 1500);
    });
}

function pourInCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Spilled while pouring into the cup!");
            } else {
                console.log("Step 3: Poured into cup.");
                resolve();
            }
        }, 1000);
    });
}

// Promise Chaining Flow
console.log("Starting coffee preparation...");
boilWater()
    .then(() => brewCoffee())
    .then(() => pourInCup())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error(`Coffee preparation failed: ${error}`);
    });