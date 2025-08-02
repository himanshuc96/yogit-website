// AOS Init
AOS.init({
  duration: 800,
  once: true,
});

window.addEventListener("load", () => {
  AOS.refresh();
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
