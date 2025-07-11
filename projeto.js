document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll(".projects-section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active de todos
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      sections.forEach(section => {
        if (filter === "all") {
          section.style.display = "block";
        } else {
          section.style.display = section.getAttribute("data-category") === filter ? "block" : "none";
        }
      });
    });
  });
});
