document.addEventListener("DOMContentLoaded", () => {
  console.log("Sandeep's portfolio site loaded.");

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Dark mode toggle
  const toggle = document.getElementById("dark-mode-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
