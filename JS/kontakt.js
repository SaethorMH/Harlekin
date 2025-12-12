const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  // 2. Vis værdierne i de rigtige output-felter

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

/****** tegn counter *******/

// Get references to the textarea and counter display
const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");

// Add an event listener that fires whenever the user types
textarea.addEventListener("input", function () {
  // Get the current length of the text
  const count = this.value.length;

  // Update the counter display
  charCount.textContent = count + " / 750 characters";
});
