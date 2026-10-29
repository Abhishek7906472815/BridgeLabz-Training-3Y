// script.js: Custom Dropdown Menu using capturing phase for outside-click closing mechanism

const dropdown = document.getElementById("customDropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const items = document.querySelectorAll(".dropdown-item");

// Toggle menu display visibility
dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent immediate capture closure trigger
    dropdownMenu.classList.toggle("open");
});

// Update button text on option click
items.forEach((item) => {
    item.addEventListener("click", (e) => {
        dropdownBtn.textContent = e.target.textContent;
        dropdownMenu.classList.remove("open");
    });
});

// Clicking outside closes the dropdown using capturing phase event listener on document
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove("open");
    }
}, true); // `true` specifies capturing phase execution