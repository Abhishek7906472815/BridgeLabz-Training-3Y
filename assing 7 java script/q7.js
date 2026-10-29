// script.js: Mouse Coordinate Logging and Double-Click Red Dot Placer

const trackerBox = document.getElementById("trackerBox");
const coordX = document.getElementById("coordX");
const coordY = document.getElementById("coordY");

// Track mouse movement inside the box
trackerBox.addEventListener("mousemove", (event) => {
    const rect = trackerBox.getBoundingClientRect();
    // Calculate coordinates relative to the 400x400 container element bounds
    const clientX = Math.round(event.clientX - rect.left);
    const clientY = Math.round(event.clientY - rect.top);

    coordX.textContent = clientX;
    coordY.textContent = clientY;
});

// Reset display on mouse leave
trackerBox.addEventListener("mouseleave", () => {
    coordX.textContent = "0";
    coordY.textContent = "0";
});

// On double-click inside, drop a red dot at click position
trackerBox.addEventListener("dblclick", (event) => {
    const rect = trackerBox.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement("div");
    dot.className = "red-dot";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    trackerBox.appendChild(dot);
});