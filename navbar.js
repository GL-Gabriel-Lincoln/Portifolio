"use strict";

const e = React.createElement;

class MeuComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navVisible: false, menuClicked: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((state) => ({
      navVisible: !state.navVisible,
      menuClicked: true,
    }));
    setTimeout(() => this.setState({ menuClicked: false }), 337);
  }

  render() {
    return e(
      "div",
      { className: "navbar-container" },
      e(
        "div",
        { className: "logo-button-container" },
        e("img", {
          src: "/Portifolio/GL sem fundo.png",
          alt: "Descrição da imagem",
          width: "75",
          height: "75",
          className: `logo-image ${
            this.state.menuClicked ? "logo-image-clicked" : ""
          }`,
        }),
        e(
          "button",
          {
            onClick: this.toggleNav,
            className: `menu-button ${
              this.state.menuClicked ? "menu-button-clicked" : ""
            }`,
          },
          "☰"
        ),
        e(
          "div",
          { className: `navbar ${this.state.navVisible ? "nav-visible" : ""}` },
          e("a", { href: "/Portifolio/index.html" }, "Redes Sociais"),
          e("a", { href: "/Portifolio/Login.html" }, "Projetos"),
          e("a", { href: "/Portifolio/Sobre/Sobre_mim.html" }, "Sobre"),
          e(
            "a",
            { href: "/Portifolio/Disciplinas_UFJ/Disciplinas_UFJ.html" },
            "Disciplinas UFJ"
          ),
          e(
            "a",
            { href: "/Portifolio/Programando/Programando.html" },
            "Programando"
          )
        ),
      ),
      this.state.navVisible && e("div", { className: "fade-out" })
    );
  }
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(MeuComponente), domContainer);
