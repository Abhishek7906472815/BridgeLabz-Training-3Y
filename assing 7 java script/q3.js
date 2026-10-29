// script.js: Multi-step Form controller with Next/Back navigation and validation

const steps = document.querySelectorAll(".step");
const form = document.getElementById("multiStepForm");

let currentStep = 1;

// Input fields and errors
const userName = document.getElementById("userName");
const nameError = document.getElementById("nameError");

const userEmail = document.getElementById("userEmail");
const emailError = document.getElementById("emailError");

const userPassword = document.getElementById("userPassword");
const passwordError = document.getElementById("passwordError");

const summaryBox = document.getElementById("summaryBox");

// Navigation buttons
document.getElementById("next1").addEventListener("click", () => {
    if (userName.value.trim() === "") {
        nameError.style.display = "block";
        userName.style.borderColor = "#dc3545";
        return;
    }
    nameError.style.display = "none";
    userName.style.borderColor = "#28a745";
    navigateToStep(2);
});

document.getElementById("back2").addEventListener("click", () => navigateToStep(1));

document.getElementById("next2").addEventListener("click", () => {
    const emailPattern = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(userEmail.value.trim())) {
        emailError.style.display = "block";
        userEmail.style.borderColor = "#dc3545";
        return;
    }
    emailError.style.display = "none";
    userEmail.style.borderColor = "#28a745";
    navigateToStep(3);
});

document.getElementById("back3").addEventListener("click", () => navigateToStep(2));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userPassword.value.length < 6) {
        passwordError.style.display = "block";
        userPassword.style.borderColor = "#dc3545";
        return;
    }
    passwordError.style.display = "none";
    userPassword.style.borderColor = "#28a745";

    // Populate summary box
    summaryBox.textContent = `Name:     ${userName.value}\nEmail:    ${userEmail.value}\nPassword: ${"*".repeat(userPassword.value.length)}`;
    
    navigateToStep(4);
});

function navigateToStep(stepNumber) {
    steps.forEach((st) => {
        st.classList.remove("active");
        if (parseInt(st.getAttribute("data-step")) === stepNumber) {
            st.classList.add("active");
        }
    });
    currentStep = stepNumber;
}