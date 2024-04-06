import React from 'react';
import './index.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <img src="/Portifolio/GL sem fundo.png" alt="Descrição da imagem" width="50" height="50" className="logo-image"/>
                <a href="/Portifolio/index.html">Redes Sociais</a>
                <a href="/Portifolio/Login.html">Projetos</a>
                <a href="/Portifolio/Sobre/Sobre_mim.html">Sobre</a>
                <a href="/Portifolio/Disciplinas_UFJ/Disciplinas_UFJ.html">Disciplinas UFJ</a>
                <a href="/Portifolio/Programando/Programando.html">Programando</a>
                <a href="/Portifolio/historico_202200145.pdf">Historico Academico</a>
            </div>
            <div className="fade-out"></div>
        </div>
    );
}

export default Navbar;