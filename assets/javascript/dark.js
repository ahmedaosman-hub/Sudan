// Check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("dark-mode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("dark-mode"); // Change "darkmode" to "dark-mode"
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// Start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // Get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // If it's not currently enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    // If it has been enabled, turn it off
    disableDarkMode();
  }
});
