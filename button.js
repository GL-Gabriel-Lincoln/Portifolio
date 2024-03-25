var defaultBackgroundImage = 'https://raw.githubusercontent.com/GL-Gabriel-Lincoln/Portifolio/2257ea5f909ed789984de0248faeade260c50f11/fundo_site.png'; // Substitua pelo caminho da imagem de fundo padrão
        
        document.getElementById('changeBackground').addEventListener('click', function() {
            var currentBackgroundImage = localStorage.getItem('backgroundImage');
            
            if (currentBackgroundImage && currentBackgroundImage !== defaultBackgroundImage) {
                // Se a imagem de fundo atual não for a padrão, muda para a padrão
                document.body.style.backgroundImage = "url('" + defaultBackgroundImage + "')";
                localStorage.setItem('backgroundImage', defaultBackgroundImage);
            } else {
                // Se a imagem de fundo atual for a padrão, muda para a outra
                var newBackgroundImage = 'https://raw.githubusercontent.com/GL-Gabriel-Lincoln/Portifolio/1e18edf458e76933fcc9a68cbcb0b0aa83349cbe/fundo_site_black.png'; // Substitua pelo caminho da nova imagem de fundo
                document.body.style.backgroundImage = "url('" + newBackgroundImage + "')";
                localStorage.setItem('backgroundImage', newBackgroundImage);
            }
        
            var elementsToInvertContainer = document.querySelectorAll('.container i');
            elementsToInvertContainer.forEach(function(element) {
                element.classList.toggle('inverted-container');
            });
            
            var elementsToInvertNavbar = document.querySelectorAll('.navbar');
            elementsToInvertNavbar.forEach(function(element) {
                element.classList.toggle('inverted-navbar');
            });

            var elementsToInvertBorder = document.querySelectorAll('a, .common');
            elementsToInvertBorder.forEach(function(element) {
            element.classList.toggle('inverted-border-black');
            });

            var elementsToInvertBorder = document.querySelectorAll('.navbar a');
            elementsToInvertBorder.forEach(function(element) {
            element.classList.toggle('inverted-border-white');
            });

        });
        
        window.onload = function() {
            var savedBackgroundImage = localStorage.getItem('backgroundImage');
            if (savedBackgroundImage) {
                document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')";
            } else {
                // Se não houver imagem de fundo salva, usa a padrão
                document.body.style.backgroundImage = "url('" + defaultBackgroundImage + "')";
                localStorage.setItem('backgroundImage', defaultBackgroundImage);
            }
        };