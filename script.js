document.addEventListener("DOMContentLoaded", () => {
  console.log("Sandeep's portfolio site loaded.");

  // Example: Smooth scroll for navigation (if you add nav links)
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Example: Button click tracking (for resume downloads, etc.)
  const resumeBtn = document.querySelector(".btn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      console.log("Resume download button clicked.");
    });
  }
});
