// ================= OVERLAY MENU =================
document.addEventListener("DOMContentLoaded", function () {

  const burger = document.querySelector(".burger");
  const overlayMenu = document.querySelector(".overlay-menu");

  // sigurnosna provjera
  if (!burger || !overlayMenu) {
    console.error("Burger ili overlay-menu ne postoji u HTML-u");
    return;
  }

  // otvori / zatvori meni klikom na hamburger
  burger.addEventListener("click", function () {
    overlayMenu.classList.toggle("active");
  });

  // zatvori meni klikom na link
  overlayMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      overlayMenu.classList.remove("active");
    });
  });

  // zatvori meni klikom na praznu pozadinu
  overlayMenu.addEventListener("click", function (e) {
    if (e.target === overlayMenu) {
      overlayMenu.classList.remove("active");
    }
  });

});
