document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get and trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.backgroundColor = "#d4edda";
      feedbackDiv.style.color = "#155724";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.backgroundColor = "#f8d7da";
      feedbackDiv.style.color = "#721c24";
    }
  });
});
