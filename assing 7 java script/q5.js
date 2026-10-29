// script.js: Image Gallery Modal Preview utilizing stopPropagation()

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalBox = document.getElementById("modalBox");
const thumbnails = document.querySelectorAll(".gallery-item");

// Open modal on thumbnail click
thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        // Swap low-res thumbnail source with high-res counterpart (simulated by scaling up picsum url)
        const highResSrc = thumb.src.replace("/300/200", "/800/600");
        modalImage.src = highResSrc;
        modal.classList.add("active");
    });
});

// Closing modal when clicking outside content box (on backdrop overlay)
modal.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImage.src = "";
});

// Use event.stopPropagation() so clicking inside modal box content does not close it
modalBox.addEventListener("click", (event) => {
    event.stopPropagation();
});