const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");

form.addEventListener("input", onTextAreaInput)
form.addEventListener("submit", onFormSubmit)

populateTextArea();

function onFormSubmit(event) {
    event.preventDefault();

    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

function onTextAreaInput(event) {
    const email = event.target.elements.email.value.trim()
    const message = event.target.elements.textarea.value.trim();
    
    const formData = {};
    formData.email = email;
    formData.message = message;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, formData);
}

function populateTextArea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {
        form.value = saveMessage;
    }
}