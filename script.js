let userName = document.getElementById("username");
let phoneNumber = document.getElementById("phonenumber");
let emailId = document.getElementById("email");
let addButton = document.getElementById("add");
let resetButton = document.getElementById("reset");
let tableBody = document.querySelector("#tableInfo tbody");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
if (!Array.isArray(contacts)) {
    contacts = [];
}

// Initialize the table with existing contacts
function initializeTable() {
    tableBody.innerHTML = ""; // Clear existing rows
    for (let contact of contacts) {
        displayContact(contact);
    }
}

// Add contact details
function addContactDetails() {
    let contact = {
        id:  contacts.length+1, // Use a unique timestamp as ID
        userName: userName.value.trim() || "-",
        phoneNumber: phoneNumber.value.trim() || "-",
        emailId: emailId.value.trim() || "-"
    };

    contacts.push(contact);
    saveContactDetails();
    displayContact(contact);
    resetContactDetails();
}

// Display a contact in the table
function displayContact(contact) {
    let createRowElement = document.createElement("tr");
    createRowElement.id = "row" + contact.id;

    let arr = [contact.userName, contact.phoneNumber, contact.emailId];
    for (let value of arr) {
        let cell = document.createElement("td");
        cell.textContent = value;
        createRowElement.appendChild(cell);
    }

    let operationsElement = document.createElement("td");

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.marginRight = "5px";
    editButton.onclick = function () {
        editContact(contact.id);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteContact(contact.id);
    };

    operationsElement.appendChild(editButton);
    operationsElement.appendChild(deleteButton);
    createRowElement.appendChild(operationsElement);

    tableBody.appendChild(createRowElement);
}

// Edit contact details
function editContact(id) {
    let contact = contacts.find(contact => contact.id === id);
    if (contact) {
        userName.value = contact.userName;
        phoneNumber.value = contact.phoneNumber;
        emailId.value = contact.emailId;

        addButton.textContent = "Update";
        addButton.onclick = function () {
            updateContact(id);
        };
    }
}

// Update contact details
function updateContact(id) {
    let contact = contacts.find(contact => contact.id === id);
    if (contact) {
        contact.userName = userName.value.trim();
        contact.phoneNumber = phoneNumber.value.trim();
        contact.emailId = emailId.value.trim();

        saveContactDetails();
        initializeTable(); // Refresh the table
        resetContactDetails();

        addButton.textContent = "Add";
        addButton.onclick = addContactDetails;
    }
}

// Delete a contact
function deleteContact(id) {
    contacts = contacts.filter(contact => contact.id !== id);
    saveContactDetails();
    initializeTable(); // Refresh the table
}

// Reset input fields
function resetContactDetails() {
    userName.value = "";
    phoneNumber.value = "";
    emailId.value = "";
}

// Save contacts to localStorage
function saveContactDetails() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Attach event listeners
addButton.addEventListener("click", addContactDetails);
resetButton.addEventListener("click", resetContactDetails);

// Initialize the table on page load
initializeTable();
