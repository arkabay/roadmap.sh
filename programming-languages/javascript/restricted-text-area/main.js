const formEl = document.getElementById("messageForm");
const messageFieldEl = document.querySelector(".message-field");
const currentLengthEl = document.querySelector(".current-length");
const maxLengthEl = document.querySelector(".max-length");
const submitButton = document.querySelector(".submit-button");

// Read maximum limit directly from HTML attribute
const MAX_LENGTH = messageFieldEl.maxLength;
maxLengthEl.textContent = MAX_LENGTH;

// Synchronize Form & Counter UI
function updateUI() {
  const currentLength = messageFieldEl.value.length;

  currentLengthEl.textContent = currentLength;
  submitButton.disabled = currentLength === 0;
  messageFieldEl.classList.toggle("is-limit", currentLength >= MAX_LENGTH);
}

// Listen to user typing and text paste events
messageFieldEl.addEventListener("input", updateUI);

// Handle form submission and reset form state
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  window.alert(`Message Submitted: ${messageFieldEl.value}`);

  formEl.reset();
  updateUI();
});
