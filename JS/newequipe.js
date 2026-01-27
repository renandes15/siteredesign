function openTab(evt, tabName) {
  // Esconder todos os conteúdos
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => content.classList.remove("active"));

  // Remover classe active de todos os botões
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Mostrar a aba atual e adicionar classe active ao botão
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}