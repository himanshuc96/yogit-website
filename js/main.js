// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Navbar shrink on scroll
const navbar = document.querySelector(".navbar-container");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// Mobile menu toggle (hamburger)
const hamburger = document.getElementById("hamburger-btn");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close mobile menu when clicking on any link
const navLinks = document.querySelectorAll(".navbar-container a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
    }
  });
});
