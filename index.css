:root {
  /* Cores principais */
  --primary-blue: #5599ff;
  --dark-blue: #0066ff;
  --background-dark: #000000;
  --text-light: #ffffff;
  --text-dark: #000000;

  /* Bordas e Sombras */
  --border-width: 3px;
  --border-style: solid;
  --text-shadow-light: -1px 0 var(--text-light), 0 1px var(--text-light),
    1px 0 var(--text-light), 0 -1px var(--text-light);
  --text-shadow-dark: -1px 0 var(--text-dark), 0 1px var(--text-dark),
    1px 0 var(--text-dark), 0 -1px var(--text-dark);
  --text-shadow-primary: -1px 0 var(--primary-blue), 0 1px var(--primary-blue),
    1px 0 var(--primary-blue), 0 -1px var(--primary-blue);
  --border-radius-default: 20px;
}

/* --- ESTILOS GLOBAIS/RESET --- */
* {
  box-sizing: border-box; /* Garante que padding e borda não aumentem o tamanho final */
  caret-color: transparent;
}

body {
  background-color: var(--background-dark);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0; /* Remove margem padrão do body */
  font-family: Arial, sans-serif; /* Define fonte padrão no body */
}

a {
  text-decoration: none;
}

/* --- LAYOUTS/CONTAINERS GERAIS --- */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* Espaçamento entre as seções (perfil e links sociais) */
  padding: 20px 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Garante que o container ocupe a largura total */
}

/* --- BARRA DE TÍTULO/HEADER --- */
.title-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: var(--primary-blue);
  border-top: 10px var(--border-style) var(--text-light);
  border-bottom: 10px var(--border-style) var(--text-light);
  margin-bottom: 30px; /* Adiciona espaçamento após a barra de título */
}

.title-bar h1 {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: center; /* Centraliza o H1 */
}

.title-bar a {
  /* Estilo do link 'Home' na title-bar, que tinha a classe 'color' */
  background-color: transparent; /* A cor de fundo vem do .title-bar */
  border: none;
  border-radius: 0;
  color: var(--text-light);
  display: block;
  padding: 0;
  text-shadow: var(--text-shadow-dark);
  font-size: 45px; /* Tamanho ajustado */
  transition: none; /* Remove transição desnecessária aqui */
}

.active-page {
  /* Estilo específico para o link da página atual, se necessário */
  background-color: var(--dark-blue) !important;
  padding: 5px 15px;
  border-radius: var(--border-radius-default);
}

/* --- CARD DE PERFIL (Estilos extraídos do inline) --- */
.profile-card-container {
  margin-bottom: 30px; /* Espaçamento abaixo do card */
}

.profile-card {
  position: relative;
  height: 750px;
  width: min(600px, 90%); /* Usa min() para ser responsivo, até 600px */
  background-image: url(./FML.jpg);
  background-size: cover;
  background-position: center;
  border: var(--border-width) var(--border-style) var(--text-light);
  border-radius: var(--border-radius-default);
  color: var(--text-light);
  font-size: 26px;
  text-shadow: var(--text-shadow-dark);
  text-align: justify;
  overflow: hidden; /* Garante que o overlay e a imagem respeitem o border-radius */
}

.profile-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
  border-radius: var(--border-radius-default);
  padding: 10px; /* Adiciona padding para o conteúdo interno */
}

.profile-image-wrapper {
  text-align: center;
  margin: 10px 0;
}

.profile-image {
  border: var(--border-width) var(--border-style) var(--text-light);
  border-radius: 50%; /* 100% para círculo perfeito */
  width: 200px; /* Largura definida */
  height: 200px;
  object-fit: cover; /* Garante que a imagem preencha o círculo */
}

.profile-text {
  margin: 30px;
  line-height: 1.4; /* Melhora a legibilidade do texto */
}

/* --- LINKS DE REDES SOCIAIS --- */
.social-links-container {
  gap: 20px; /* Espaçamento entre os ícones */
  flex-wrap: wrap; /* Permite que os ícones quebrem a linha em telas menores */
}

.social-link {
  /* Combina os estilos de '.container a' e remove a animação de shake excessiva */
  animation: none; /* Removendo animação de shake para melhor experiência */
  background-color: var(--text-light);
  color: var(--text-dark);
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
  margin: 0; /* Margem controlada pelo gap do container */
  width: 70px;
  height: 70px;
  border-radius: 50%; /* Ícones circulares */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px; /* Tamanho do ícone ajustado */
}

.social-link .fab {
  font-size: 35px; /* Ajusta o tamanho do ícone Font Awesome */
}

.social-link:hover {
  background-color: var(--primary-blue);
  color: var(--text-light);
  transform: scale(1.1);
}

/* --- ESTILOS DE LINK (Revisados para clareza) --- */
a,
.common {
  background-color: var(--primary-blue);
  border: var(--border-width) var(--border-style) var(--text-light);
  border-radius: var(--border-radius-default);
  color: var(--text-light);
  display: inline-block;
  font-size: 35px;
  padding: 10px;
  text-shadow: var(--text-shadow-dark);
  transition: all 0.5s;
  font-family: Arial, sans-serif;
}

.link,
.link1 {
  /* Estilos para links que não são os sociais */
  margin: 10px;
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;
  transition: all 0.5s;
}

.navbar a {
  /* Estilos específicos para links de navegação */
  border: var(--border-width) var(--border-style) var(--text-light);
  border-radius: var(--border-radius-default);
  color: var(--text-light);
  display: block;
  float: left;
  margin: 10px;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s;
  background-color: var(--primary-blue); /* Garante que tenham cor de fundo */
}

/* --- EFEITOS HOVER --- */
.navbar a:hover,
.link1 a:hover,
.link:hover {
  background-color: var(--text-light);
  border-color: var(--primary-blue);
  color: var(--text-dark);
  text-shadow: var(--text-shadow-primary);
  transform: scale(1.12); /* Um único valor de escala para consistência */
}

/* --- NAVBAR (Mantido como estava, pois depende do JS) --- */
.navbar-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  left: 0;
  overflow-x: auto;
  position: relative;
  scrollbar-color: var(--dark-blue) transparent;
  scrollbar-width: thin;
  top: 0;
  width: 100%;
  transform: translateX(-500%);
  transition: transform 0.45s ease-out;
  visibility: hidden;
  flex-direction: row; /* Mantido como linha */
}

.logo-button-container {
  display: flex;
  justify-content: space-between;
}

.menu-button {
  background-color: var(--primary-blue);
  border: var(--border-width) var(--border-style) var(--text-light);
  border-radius: var(--border-radius-default);
  color: var(--text-light);
  display: block;
  float: left;
  font-family: Arial, sans-serif;
  margin: 10px;
  font-size: 35px;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s;
}

.navbar.nav-visible {
  transform: translateX(0);
  visibility: visible;
}

.logo-image-clicked,
.menu-button-clicked {
  opacity: 0;
}

.logo-image {
  align-self: center;
  transition: opacity 0.126s ease-out;
}

.fade-out {
  content: "";
  height: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  background: linear-gradient(
    to left,
    var(--text-light),
    rgba(255, 255, 255, 0)
  );
}

/* --- DEMAIS ESTILOS (Mantidos com pequenos ajustes) --- */
h1,
h2 {
  text-align: center;
}

.text-primary {
  background-color: #ffffffbc;
  border: var(--border-width) var(--border-style) var(--text-light);
  color: var(--text-dark);
  font-family: Arial, sans-serif;
  font-size: 45px;
  padding: 10px;
  text-align: left;
  text-shadow: var(--text-shadow-light);
}

/* ... (Outros estilos como #calculateButton, .fab, @keyframes, etc., podem ser mantidos ou revisados conforme a necessidade específica da aplicação) ... */

/* Removendo a animação de shake para melhor experiência do usuário */
/* @keyframes shake { ... } */

/* Estilos de utilidade */
.centered {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

hr {
  border: none;
  border-top: 10px var(--border-style) var(--text-light);
  width: 100%;
}

/* --- MEDIA QUERIES (Ajustado para o novo HTML) --- */
@media (max-width: 1080px) {
  .title-bar h1 a {
    font-size: 25px;
  }
  .link {
    font-size: 30px;
  }
  .title-bar {
    justify-content: space-between;
  }
  /* Ajustes para centralizar em telas menores */
  .title-bar h1 {
    margin: 0;
    text-align: center;
    flex-grow: 1;
  }
}