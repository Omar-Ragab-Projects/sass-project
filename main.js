let toggleMenu = document.querySelector(".toggle-menu");
let nav = document.querySelector(".header .navbar");

toggleMenu.addEventListener("click", (e) => {
  nav.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  if (nav.classList.contains("show")) {
    if (e.target !== toggleMenu) {
      nav.classList.remove("show");
    }
  }
});
