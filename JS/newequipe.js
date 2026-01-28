function openTab(evt, tabName) {
  // Esconder todos os conteúdos
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => content.classList.remove("active"));
  const content = document.querySelectorAll(".tab-content1");
  contents.forEach(content => content.classList.remove("active"));

  // Remover classe active de todos os botões
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  const button = document.querySelectorAll(".tab-btn1");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Mostrar a aba atual e adicionar classe active ao botão
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

