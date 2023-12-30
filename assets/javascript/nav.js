document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".navbar-toggle");
  const navigationBox = document.querySelector(".navigation-box"); // Selector for the navigation box
  const slideOutMenu = document.getElementById("slide-out-menu");
  const overlay = document.getElementById("menu-overlay");

  // Toggle slide-out menu, overlay, and hamburger animation
  menuButton.addEventListener("click", function () {
    slideOutMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    navigationBox.classList.toggle("active"); // Toggle the class for the 'X' transformation

    // Prevent or allow scrolling
    if (slideOutMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close the menu when clicking on the overlay
  overlay.addEventListener("click", function () {
    slideOutMenu.classList.remove("active");
    overlay.classList.remove("active");
    navigationBox.classList.remove("active"); // Remove the class for the 'X' transformation
    document.body.style.overflow = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const iconMoon = document.querySelector(".icon-moon");
  const iconSun = document.querySelector(".icon-sun");

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    iconMoon.style.display =
      iconMoon.style.display === "none" ? "block" : "none";
    iconSun.style.display = iconSun.style.display === "none" ? "block" : "none";
  });
});
