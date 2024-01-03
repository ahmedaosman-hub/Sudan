document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".offer-tabs .tab");
  const carouselItems = document.querySelectorAll(".carousel-item");

  function hideAllOffers() {
    carouselItems.forEach((item) => (item.style.display = "none"));
  }

  function showOffer(offerId) {
    hideAllOffers();
    const offerToShow = document.getElementById(offerId);
    if (offerToShow) {
      offerToShow.style.display = "flex"; // Adjust display style as needed
    }
  }

  // Add click event listeners to the tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      showOffer(targetId);
    });
  });

  // Hide all offers initially
  hideAllOffers();
});
