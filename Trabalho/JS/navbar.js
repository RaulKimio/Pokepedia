/* Abre e fecha o menu móvel usando as classes de estado do Bulma. */
document.addEventListener("DOMContentLoaded", () => {
  // Procura botões de menu e localiza o menu indicado em data-target.
  document.querySelectorAll(".navbar-burger[data-target]").forEach((botao) => {
    const menu = document.getElementById(botao.dataset.target);

    // Ignora o botão se o identificador não encontrar um menu nesta página.
    if (!menu) return;

    // Atualiza juntos o ícone, o menu e o estado anunciado ao leitor de tela.
    const definirMenuAberto = (aberto) => {
      botao.classList.toggle("is-active", aberto);
      menu.classList.toggle("is-active", aberto);
      botao.setAttribute("aria-expanded", String(aberto));
      botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    };

    // Alterna o menu ao clicar ou ativar o botão pelo teclado.
    botao.addEventListener("click", () => {
      definirMenuAberto(!menu.classList.contains("is-active"));
    });

    // Fecha o menu móvel depois que um link é escolhido.
    menu.querySelectorAll("a.navbar-item").forEach((link) => {
      link.addEventListener("click", () => definirMenuAberto(false));
    });
  });
});