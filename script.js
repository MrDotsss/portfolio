const year = document.querySelector("#year")
year.textContent = new Date().getFullYear();

const scrollBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });