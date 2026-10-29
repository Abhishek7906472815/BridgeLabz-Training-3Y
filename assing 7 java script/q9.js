// script.js: Form Submission Blocker with preventDefault() and Automatic Live Error Clearance

const form = document.getElementById("regForm");
const successBanner = document.getElementById("successBanner");

const fullName = document.getElementById("fullName");
const nameErrorMsg = document.getElementById("nameErrorMsg");

const regEmail = document.getElementById("regEmail");
const emailErrorMsg = document.getElementById("emailErrorMsg");

const regPass = document.getElementById("regPass");
const passErrorMsg = document.getElementById("passErrorMsg");

// Helper function to check individual validations
function checkName() {
    if (fullName.value.trim() === "") {
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
        nameErrorMsg.style.display = "block";
        return false;
    } else {
        fullName.classList.remove("invalid");
        fullName.classList.add("valid");
        nameErrorMsg.style.display = "none";
        return true;
    }
}

function checkEmail() {
    const emailVal = regEmail.value.trim();
    if (emailVal === "" || !emailVal.includes("@")) {
        regEmail.classList.add("invalid");
        regEmail.classList.remove("valid");
        emailErrorMsg.style.display = "block";
        return false;
    } else {
        regEmail.classList.remove("invalid");
        regEmail.classList.add("valid");
        emailErrorMsg.style.display = "none";
        return true;
    }
}

function checkPassword() {
    if (regPass.value.length < 6) {
        regPass.classList.add("invalid");
        regPass.classList.remove("valid");
        passErrorMsg.style.display = "block";
        return false;
    } else {
        regPass.classList.remove("invalid");
        regPass.classList.add("valid");
        passErrorMsg.style.display = "none";
        return true;
    }
}

// Live validation listeners so errors disappear automatically on correcting input
fullName.addEventListener("input", checkName);
regEmail.addEventListener("input", checkEmail);
regPass.addEventListener("input", checkPassword);

// On submit: use preventDefault() if any field is invalid
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop submission by default

    const isNameValid = checkName();
    const isEmailValid = checkEmail();
    const isPassValid = checkPassword();

    if (isNameValid && isEmailValid && isPassValid) {
        successBanner.style.display = "block";
        form.reset();
        // Clear valid border highlights after successful reset
        [fullName, regEmail, regPass].forEach(input => input.classList.remove("valid"));
    } else {
        successBanner.style.display = "none";
    }
});