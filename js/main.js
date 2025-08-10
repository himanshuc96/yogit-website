document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  // Menu toggle on click
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");

      // Add/remove menu-open class on navbar (or body)
      navbar.classList.toggle(
        "menu-open",
        navLinks.classList.contains("active")
      );
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
        navbar.classList.remove("menu-open");
      });
    });

    // Keyboard accessibility
    navToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navLinks.classList.toggle("active");
        navToggle.classList.toggle("active");
        navbar.classList.toggle(
          "menu-open",
          navLinks.classList.contains("active")
        );
      }
    });
  }

  // Shrink navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
});
