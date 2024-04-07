var navbar = document.querySelector(".navbar");
var fadeOut = document.querySelector(".fade-out");

function checkScroll() {
  var maxScrollLeft = navbar.scrollWidth - navbar.clientWidth;
  if (navbar.scrollLeft >= maxScrollLeft - 10) {
    // 10 é um valor de tolerância
    fadeOut.style.opacity = "0";
  } else {
    fadeOut.style.opacity = "1";
  }
}

checkScroll(); // Chama a função imediatamente
navbar.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);