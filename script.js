document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.getElementById("openMenu");
  const closeMenuButton = document.getElementById("closeMenu");
  const navbarDropdown = document.getElementById("navbarDropdown");

  // Function to show the dropdown
  function showDropdown() {
    navbarDropdown.style.display = "block"; // or 'flex' if you are using Flexbox in the dropdown
    closeMenuButton.style.display = "block"; // Show the close button
    openMenuButton.style.display = "none"; // Hide the hamburger button
    console.log("Dropdown is shown");
  }

  // Function to hide the dropdown
  function hideDropdown() {
    navbarDropdown.style.display = "none";
    closeMenuButton.style.display = "none"; // Hide the close button
    openMenuButton.style.display = "block"; // Show the hamburger button
    console.log("Dropdown is hidden");
  }

  // Event listener for the open button
  openMenuButton.addEventListener("click", showDropdown);

  // Event listener for the close button
  closeMenuButton.addEventListener("click", hideDropdown);
});
