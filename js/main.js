// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Refresh AOS after all assets are loaded
window.addEventListener("load", () => {
  AOS.refresh();
});

// Navbar shrink on scroll
const navbar = document.querySelector(".navbar-container");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("shrink", window.scrollY > 50);
});

// Mobile menu toggle (hamburger)
const hamburger = document.getElementById("hamburger-btn");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");

  // Lock/unlock body scroll
  document.body.style.overflow = navbar.classList.contains("active")
    ? "hidden"
    : "auto";

  AOS.refresh();
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll(".navbar-container a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});
