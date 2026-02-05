// ================= HAMBURGER / OVERLAY MENU =================
document.addEventListener("DOMContentLoaded", function () {

  const burger = document.querySelector(".burger");
  const overlayMenu = document.querySelector(".overlay-menu");

  // sigurnosna provjera
  if (!burger || !overlayMenu) {
    console.error("Burger ili overlay menu ne postoji u HTML-u");
    return;
  }

  // klik na hamburger → otvori / zatvori meni
  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    overlayMenu.classList.toggle("active");
  });

  // klik na link → zatvori meni
  overlayMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      overlayMenu.classList.remove("active");
    });
  });

  // klik na praznu pozadinu → zatvori meni
  overlayMenu.addEventListener("click", function (e) {
    if (e.target === overlayMenu) {
      overlayMenu.classList.remove("active");
    }
  });

  // ESC dugme → zatvori meni
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      overlayMenu.classList.remove("active");
    }
  });

});
