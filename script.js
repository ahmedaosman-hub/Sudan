document.addEventListener("DOMContentLoaded", function () {
  // JavaScript to toggle the slide-out menu
  const menuButton = document.querySelector(".navbar-toggle");
  const slideOutMenu = document.querySelector(".slide-out-menu");
  const overlay = document.querySelector(".overlay");

  menuButton.addEventListener("click", () => {
    slideOutMenu.style.left = slideOutMenu.style.left === "0%" ? "-100%" : "0%";
    overlay.style.display =
      overlay.style.display === "block" ? "none" : "block";
  });

  // Close the menu when clicking on the overlay
  overlay.addEventListener("click", () => {
    slideOutMenu.style.left = "-100%";
    overlay.style.display = "none";
  });
});

// Add this script at the end of your HTML, before the closing </body> tag.
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".navbar-toggle");
  var slideOutMenu = document.getElementById("slide-out-menu");

  menuToggle.addEventListener("click", function () {
    this.children[0].classList.toggle("active");
    slideOutMenu.classList.toggle("active");
  });

  // Since you're not using the overlay, there's no need to close the menu when it's clicked
});
