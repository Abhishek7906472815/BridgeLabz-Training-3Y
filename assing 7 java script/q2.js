// script.js: Live Character Counter with Warning and Limit Enforcement

const textInput = document.getElementById("textInput");
const charCounter = document.getElementById("charCounter");
const resetBtn = document.getElementById("resetBtn");

const MAX_LIMIT = 100;

// Prevent typing further when limit is reached using preventDefault() on keydown
textInput.addEventListener("keydown", (event) => {
    // Allow navigation keys, backspace, delete, copy/paste shortcuts
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "F5"];
    if (allowedKeys.includes(event.key) || event.ctrlKey || event.metaKey) {
        return;
    }

    // Check if character limit has reached 0
    if (textInput.value.length >= MAX_LIMIT) {
        event.preventDefault();
    }
});

// Update counter status live on input event
textInput.addEventListener("input", () => {
    const currentLength = textInput.value.length;
    const remaining = MAX_LIMIT - currentLength;

    charCounter.textContent = remaining;

    // Remove existing classes
    charCounter.className = "";

    if (remaining <= 0) {
        charCounter.classList.add("danger");
        // Ensure string is strictly sliced if pasted past limit
        if (textInput.value.length > MAX_LIMIT) {
            textInput.value = textInput.value.substring(0, MAX_LIMIT);
            charCounter.textContent = "0";
        }
    } else if (remaining <= 20) {
        charCounter.classList.add("warning"); // Turns yellow/orange at 20 chars left
    } else {
        charCounter.classList.add("normal");
    }
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
    textInput.value = "";
    charCounter.textContent = MAX_LIMIT;
    charCounter.className = "normal";
    textInput.focus();
});