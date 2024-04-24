"use strict";

const e = React.createElement;

function goBack() {
  window.history.back();
}

class MeuComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false,
      menuClicked: false,
    };
    this.checkScroll = this.checkScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  checkScroll() {

    var navbar = document.querySelector(".navbar");
    var fadeOut = document.querySelector(".fade-out");

    if (!navbar || !fadeOut) return;
    var maxScrollLeft = navbar.scrollWidth - navbar.clientWidth;
    if (navbar.scrollLeft >= maxScrollLeft - 10) {
      fadeOut.style.opacity = "0";
    } else {
      fadeOut.style.opacity = "1";
    }
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
          e("a", { href: "/Portifolio/index.html" }, "Home"),
          e("a", { href: "/Login-Cadastro/index.html" }, "Projetos")
        )
      ),
      this.state.navVisible && e("div", { className: `fade-out` }),
      this.checkScroll()
    );
  }
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(MeuComponente), domContainer);
