document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const searchInput = document.getElementById("spice-search");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) return;

      const target = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });

      searchInput.value = "";
      resetSearch();
    });
  });

  function resetSearch() {
    tabContents.forEach((content) => {
      const cards = content.querySelectorAll(".spice-card");
      cards.forEach((card) => {
        card.classList.remove("hide");
        card.style.display = "block";
      });
      const noResult = content.querySelector(".no-results");
      if (noResult) {
        noResult.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const activeTab = document.querySelector(".tab-content.active");
    const cards = activeTab.querySelectorAll(".spice-card");
    const noResult = activeTab.querySelector(".no-results");

    let visibleCount = 0;

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.classList.remove("hide");
        card.style.display = "block";
        visibleCount++;
      } else {
        card.classList.add("hide");
        setTimeout(() => {
          if (card.classList.contains("hide")) {
            card.style.display = "none";
          }
        }, 300);
      }
    });

    if (visibleCount === 0) {
      noResult.style.display = "block";
    } else {
      noResult.style.display = "none";
    }
  });
});
