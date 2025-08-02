// AOS Init
AOS.init({
  duration: 800,
  once: true,
});

window.addEventListener("load", () => {
  AOS.refresh();
});

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-btn");
  const menu = document.getElementById("navbar-menu");
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

// Navbar shrink
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-container");
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
