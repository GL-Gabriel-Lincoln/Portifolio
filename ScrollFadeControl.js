document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector(".navbar");
  var fadeOut = document.querySelector(".fade-out");

  function checkScroll() {
    var maxScrollLeft = navbar.scrollWidth - navbar.clientWidth;
    if (navbar.scrollLeft >= maxScrollLeft - 10) {
      if (fadeOut) {
        if (window.innerWidth <= 768) { // verifica se a largura da janela é menor ou igual a 768px
          fadeOut.style.opacity = "0";
        } else {
          fadeOut.style.opacity = "1";
        }
      }
    } else {
      if (fadeOut) {
        fadeOut.style.opacity = "1";
      }
    }
  }

  checkScroll(); // Chama a função imediatamente
  navbar.addEventListener("scroll", checkScroll);
  window.addEventListener("load", checkScroll);
});
