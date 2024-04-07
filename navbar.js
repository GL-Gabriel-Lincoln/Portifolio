'use strict';

const e = React.createElement;

class MeuComponente extends React.Component {
  render() {
    return e('div', {className: 'navbar-container'}, 
      e('div', {className: 'navbar'}, 
        e('img', {src: '/Portifolio/GL sem fundo.png', alt: 'Descrição da imagem', width: '50', height: '50', className: 'logo-image'}),
        e('a', {href: '/Portifolio/index.html'}, 'Redes Sociais'),
        e('a', {href: '/Portifolio/Login.html'}, 'Projetos'),
        e('a', {href: '/Portifolio/Sobre/Sobre_mim.html'}, 'Sobre'),
        e('a', {href: '/Portifolio/Disciplinas_UFJ/Disciplinas_UFJ.html'}, 'Disciplinas UFJ'),
        e('a', {href: '/Portifolio/Programando/Programando.html'}, 'Programando'),
        e('a', {href: '/Portifolio/historico_202200145.pdf'}, 'Historico Academico')
      ),
      e('div', {className: 'fade-out'})
    );
  }
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(e(MeuComponente), domContainer);