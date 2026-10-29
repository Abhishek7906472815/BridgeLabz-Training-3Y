// script.js: Theme Switcher leveraging setAttribute() and custom data-theme attributes

const bodyElement = document.body;

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function setTheme(themeName, className) {
    // Applying themes strictly using setAttribute() requirements
    bodyElement.setAttribute("data-theme", themeName);
    bodyElement.setAttribute("class", className);
}

lightBtn.addEventListener("click", () => setTheme("light", "theme-light"));
darkBtn.addEventListener("click", () => setTheme("dark", "theme-dark"));
blueBtn.addEventListener("click", () => setTheme("blue", "theme-blue"));