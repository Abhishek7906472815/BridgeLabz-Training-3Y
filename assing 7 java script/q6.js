// script.js: Real-Time Case-Insensitive Table Filtering

const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#tableBody tr");
const noResultsMsg = document.getElementById("noResultsMsg");

searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    tableRows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();
        
        if (rowText.includes(searchTerm)) {
            row.style.display = ""; // Keep visible
            visibleCount++;
        } else {
            row.style.display = "none"; // Hide non-matching rows
        }
    });

    // Toggle "No results found" warning text message
    if (visibleCount === 0) {
        noResultsMsg.style.display = "block";
    } else {
        noResultsMsg.style.display = "none";
    }
});