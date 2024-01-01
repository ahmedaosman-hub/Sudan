document.addEventListener("DOMContentLoaded", () => {
  // Retrieve 'darkMode' state from localStorage
  let darkMode = localStorage.getItem("darkMode");
  const darkModeToggle = document.querySelector("#dark-mode-toggle");

  // Function to enable dark mode
  const enableDarkMode = () => {
    document.body.classList.add("dark-mode"); // Match the class name used in your CSS
    localStorage.setItem("darkMode", "enabled");
  };

  // Function to disable dark mode
  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode"); // Match the class name used in your CSS
    localStorage.setItem("darkMode", "disabled");
  };

  // Enable dark mode if it was previously enabled
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
