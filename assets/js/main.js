// ================= OVERLAY MENU =================
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const overlayMenu = document.querySelector(".overlay-menu");

  burger.addEventListener("click", () => {
    overlayMenu.classList.toggle("active");
  });

  overlayMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      overlayMenu.classList.remove("active");
    });
  });

  overlayMenu.addEventListener("click", (e) => {
    if (e.target === overlayMenu) {
      overlayMenu.classList.remove("active");
    }
  });
});
