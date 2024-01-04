const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");

form.addEventListener("input", onTextAreaInput)
form.addEventListener("submit", onFormSubmit)

populateTextArea();

function onFormSubmit(event) {
    event.preventDefault();

    if (form.email.value === "" || form.message.value === "") {
        return;
    }
    
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

function onTextAreaInput() {
    const email = form.elements.email.value.trim()
    const message = form.elements.message.value.trim();
    
    const formData = {};
    formData.email = email;
    formData.message = message;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextArea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMessage) {
        form.email.value = saveMessage.email;
        form.message.value = saveMessage.message;
    }
}