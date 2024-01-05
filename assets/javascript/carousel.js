document.addEventListener("DOMContentLoaded", function () {
  // Function to initialize tabs for a given section
  function initializeTabsForSection(sectionId) {
    const tabs = document.querySelectorAll(`#${sectionId} .tabs .tab`);
    const carouselItems = document.querySelectorAll(
      `#${sectionId} .carousel-item`
    );

    function hideAllItems() {
      carouselItems.forEach((item) => (item.style.display = "none"));
    }

    function showItem(itemId) {
      hideAllItems();
      const itemToShow = document.querySelector(`#${sectionId} #${itemId}`);
      if (itemToShow) {
        itemToShow.style.display = "flex";
      }
    }

    function setActiveTab(tab) {
      tabs.forEach((tab) => tab.classList.remove("tab-active"));
      tab.classList.add("tab-active");
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        showItem(targetId);
        setActiveTab(this);
      });
    });

    // Initialize the first tab and carousel item
    hideAllItems();
    if (carouselItems.length > 0) {
      carouselItems[0].style.display = "flex";
      setActiveTab(tabs[0]);
    }
  }

  // Initialize tabs for both sections
  initializeTabsForSection("oasis-offers");
  initializeTabsForSection("dining");
  initializeTabsForSection("experience-sudan");
  initializeTabsForSection("events");
});
