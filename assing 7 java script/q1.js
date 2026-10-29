// script.js: Dynamic Product List Manager with Event Delegation and Auto-Save

const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

let currentlyEditingSpan = null;

// Add new product element
addProductBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();
    if (productName === "") return;

    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.className = "product-name";
    span.textContent = productName;

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnGroup);
    productList.appendChild(li);

    productInput.value = "";
});

// Event Delegation on parent <ul> for Edit and Delete actions
productList.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.closest("li");
    if (!li) return;

    const nameSpan = li.querySelector(".product-name");

    // Handle Delete action
    if (target.classList.contains("delete-btn")) {
        if (currentlyEditingSpan === nameSpan) {
            currentlyEditingSpan = null;
        }
        li.remove();
    }

    // Handle Edit action
    if (target.classList.contains("edit-btn")) {
        if (nameSpan.getAttribute("contenteditable") === "true") {
            // Save state manually if clicking edit button again
            disableEditMode(nameSpan, target);
        } else {
            enableEditMode(nameSpan, target);
        }
    }
});

function enableEditMode(spanElement, buttonElement) {
    // If another item was being edited, save it first
    if (currentlyEditingSpan && currentlyEditingSpan !== spanElement) {
        const prevLi = currentlyEditingSpan.closest("li");
        const prevBtn = prevLi.querySelector(".edit-btn");
        disableEditMode(currentlyEditingSpan, prevBtn);
    }

    spanElement.setAttribute("contenteditable", "true");
    spanElement.focus();
    buttonElement.textContent = "Save";
    currentlyEditingSpan = spanElement;
}

function disableEditMode(spanElement, buttonElement) {
    spanElement.removeAttribute("contenteditable");
    buttonElement.textContent = "Edit";
    if (currentlyEditingSpan === spanElement) {
        currentlyEditingSpan = null;
    }
}

// Auto-save: If user clicks outside the currently edited item, auto-save edit mode
document.addEventListener("click", (event) => {
    if (currentlyEditingSpan && !currentlyEditingSpan.contains(event.target)) {
        const li = currentlyEditingSpan.closest("li");
        const editBtn = li ? li.querySelector(".edit-btn") : null;
        if (editBtn) {
            disableEditMode(currentlyEditingSpan, editBtn);
        } else {
            currentlyEditingSpan.removeAttribute("contenteditable");
            currentlyEditingSpan = null;
        }
    }
});