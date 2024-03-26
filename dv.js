var navbar = document.querySelector('.navbar');
var fadeout = document.querySelector('.fade-out');

// Função para verificar a posição da barra de rolagem
function checkScroll() {
    var maxScrollLeft = navbar.scrollWidth - navbar.clientWidth;
    if (navbar.scrollLeft >= maxScrollLeft - 10) { // 10 é um valor de tolerância
        fadeout.style.display = 'none';
    } else {
        fadeout.style.display = 'block';
    }
}

// Adicione o ouvinte de evento de rolagem ao navbar
navbar.addEventListener('scroll', checkScroll);

// Verifique inicialmente se o desvanecimento deve ser exibido
window.addEventListener('load', checkScroll);
