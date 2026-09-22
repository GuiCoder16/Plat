// js/main.js

const HeaderComponent = `
  <header id="main-header" style="position: fixed; top: 0; width: 100%; z-index: 50; transition: all 0.3s; padding: 1.5rem 0; background: rgba(255, 255, 255, 0.95); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
      <a href="index.html" style="text-decoration: none; color: var(--slate-900); display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 32px; height: 32px; background: var(--slate-900); color: white; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 1.25rem; border-radius: 4px;">F</div>
        <span style="font-weight: 700; font-size: 1.125rem;">Formação.TI</span>
      </a>
      <nav class="desktop-nav" style="display: flex; gap: 2rem;">
        <a href="index.html" class="nav-link" style="text-decoration: none; color: var(--slate-600); font-size: 0.875rem; font-weight: 600;">Início</a>
        <a href="formacao.html" class="nav-link" style="text-decoration: none; color: var(--slate-600); font-size: 0.875rem; font-weight: 600;">Formação</a>
        <a href="materiais.html" class="nav-link" style="text-decoration: none; color: var(--slate-600); font-size: 0.875rem; font-weight: 600;">Materiais</a>
        <a href="pratica.html" class="nav-link" style="text-decoration: none; color: var(--slate-600); font-size: 0.875rem; font-weight: 600;">Prática</a>
        <a href="teste.html" class="nav-link" style="text-decoration: none; color: var(--slate-600); font-size: 0.875rem; font-weight: 600;">Teste</a>
      </nav>
    </div>
  </header>
`;

const FooterComponent = `
  <footer style="background: var(--slate-900); color: white; padding: 4rem 0; margin-top: auto;">
    <div class="container" style="display: flex; flex-direction: column; justify-content: space-between; gap: 1.5rem;">
      <div>
        <p class="font-serif" style="font-size: 1.5rem; margin-bottom: 0.5rem;">Formação.TI</p>
        <p style="color: var(--slate-400); font-size: 0.875rem;">Universidade Cruzeiro do Sul • Ciência da Computação</p>
        <p style="color: var(--slate-500); font-size: 0.75rem; margin-top: 1rem;">Projeto acadêmico de Engenharia de Software.</p>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) headerPlaceholder.innerHTML = HeaderComponent;

  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) footerPlaceholder.innerHTML = FooterComponent;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
});