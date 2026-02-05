// ================= OVERLAY MENU =================
const burger = document.querySelector(".burger");
const overlayMenu = document.querySelector(".overlay-menu");

// otvori / zatvori meni
burger.addEventListener("click", () => {
  overlayMenu.classList.toggle("active");
});

// zatvori meni klikom na link
overlayMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    overlayMenu.classList.remove("active");
  });
});
