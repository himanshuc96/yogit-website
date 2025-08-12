// AOS initialization
AOS.init({
  duration: 800,
  once: true,
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuOverlay = document.querySelector("#menu-overlay");
  const navbar = document.querySelector(".navbar");

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    menuOverlay.classList.remove("active");
  };

  // Toggle menu on click
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  // Close menu when clicking overlay
  menuOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Keyboard accessibility
  navToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
      menuOverlay.classList.toggle("active");
    }
  });

  // Shrink navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
});
