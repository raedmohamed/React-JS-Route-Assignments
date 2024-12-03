// Retrieve the username from localStorage
let username = localStorage.getItem("username");

// Check if the username exists in localStorage
if (username) {
  // Display the username in the welcome message
  document.getElementById("welcomeMessage").innerText = `Welcome ${username}`;
} else {
  // If no username exists in localStorage, redirect to login page
  window.location.replace("./login.html");
}

// Get the logout button element
let logoutBtn = document.getElementById("logoutBtn");

// Add click event listener for the logout button
logoutBtn.addEventListener("click", function () {
  // Remove the username from localStorage
  localStorage.removeItem("username");

  // Redirect to login page
  window.location.replace("./login.html");
});
