document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#oasis-offers .offer-tabs .tab");
  const carouselItems = document.querySelectorAll(
    "#oasis-offers .carousel-item"
  );

  function hideAllOffers() {
    carouselItems.forEach((item) => (item.style.display = "none"));
  }

  function showOffer(offerId) {
    hideAllOffers();
    const offerToShow = document.querySelector("#oasis-offers #" + offerId);
    if (offerToShow) {
      offerToShow.style.display = "flex";
    }
  }

  function setActiveTab(tab) {
    tabs.forEach((tab) => tab.classList.remove("tab-active"));
    tab.classList.add("tab-active");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      showOffer(targetId);
      setActiveTab(this);
    });
  });

  // Initialize
  hideAllOffers();
  if (carouselItems.length > 0) {
    carouselItems[0].style.display = "flex";
    setActiveTab(tabs[0]);
  }
});
