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

//contact form submission
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  const form = document.getElementById("contactForm");

  const fields = ["name", "email", "phone", "inquiry", "country", "message"];

  const validateField = (id) => {
    const input = document.getElementById(id);
    const error = input.nextElementSibling;
    let valid = true;

    if (!input.value.trim()) {
      error.textContent = `${
        id.charAt(0).toUpperCase() + id.slice(1)
      } is required`;
      valid = false;
    } else if (id === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(input.value)) {
      error.textContent = "Enter a valid email";
      valid = false;
    } else if (id === "phone" && !/^[0-9]{10,15}$/.test(input.value)) {
      error.textContent = "Enter a valid phone number";
      valid = false;
    } else {
      error.textContent = "";
    }

    return valid;
  };

  fields.forEach((id) => {
    document
      .getElementById(id)
      .addEventListener("input", () => validateField(id));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let allValid = fields.every(validateField);
    if (allValid) {
      alert("Thank you for contacting us! We will get back to you soon.");
      form.reset();
    }
  });
});
