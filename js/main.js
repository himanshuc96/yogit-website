// -------------------------------
// Initialize AOS Animations
// -------------------------------
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Navbar Toggle Menu
  // -------------------------------
  const navToggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuOverlay = document.querySelector("#menu-overlay");
  const navbar = document.querySelector(".navbar");

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    menuOverlay.classList.remove("active");
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
      menuOverlay.classList.toggle("active");
    });

    navToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navLinks.classList.toggle("active");
        navToggle.classList.toggle("active");
        menuOverlay.classList.toggle("active");
      }
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    });
  }

  // -------------------------------
  // Contact Form Validation
  // -------------------------------
  const form = document.getElementById("contactForm");
  if (form) {
    const fields = ["name", "email", "phone", "inquiry", "country", "message"];
    const messageBox = document.getElementById("formMessage");

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
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener("input", () => validateField(id));
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let allValid = fields.every(validateField);

      if (allValid) {
        messageBox.textContent =
          "✅ Thank you! Your message has been sent successfully.";
        messageBox.className = "form-message success";
        messageBox.style.display = "block";
        form.reset();
        setTimeout(() => {
          messageBox.style.display = "none";
        }, 5000);
      } else {
        messageBox.textContent =
          "⚠️ Please fill out all fields correctly before submitting.";
        messageBox.className = "form-message error";
        messageBox.style.display = "block";
      }
    });
  }
});
