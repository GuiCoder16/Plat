// js/main.js

const navLinks = [
  { href: "index.html", label: "Início" },
  { href: "formacao.html", label: "Formação" },
  { href: "materiais.html", label: "Materiais" },
  { href: "pratica.html", label: "Prática" },
  { href: "teste.html", label: "Teste" },
  { href: "refletir.html", label: "Refletir" }
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";

function navLinkHtml({ href, label }) {
  const isCurrent = href === currentPage;
  const color = isCurrent ? "var(--slate-900)" : "var(--slate-600)";
  const ariaCurrent = isCurrent ? ' aria-current="page"' : "";
  return `<a href="${href}" class="nav-link"${ariaCurrent} style="text-decoration: none; color: ${color}; font-size: 0.875rem; font-weight: 600;">${label}</a>`;
}

const navLinksHtml = navLinks.map(navLinkHtml).join("\n        ");

const loginCtaHtml = `<a href="login.html" class="nav-cta">Entrar</a>`;

const HeaderComponent = `
  <header id="main-header" style="position: fixed; top: 0; width: 100%; z-index: 50; transition: all 0.3s; padding: 1.5rem 0; background: rgba(255, 255, 255, 0.95); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
      <a href="index.html" style="text-decoration: none; color: var(--slate-900); display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 32px; height: 32px; background: var(--slate-900); color: white; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 1.25rem; border-radius: 4px;">F</div>
        <span style="font-weight: 700; font-size: 1.125rem;">Formação.TI</span>
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal" style="display: flex; gap: 2rem; align-items: center;">
        ${navLinksHtml}
        ${loginCtaHtml}
      </nav>
      <button id="menu-toggle" class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Abrir menu de navegação">
        <span class="menu-toggle-bar"></span>
        <span class="menu-toggle-bar"></span>
        <span class="menu-toggle-bar"></span>
      </button>
    </div>
    <nav id="mobile-nav" class="mobile-nav" aria-label="Navegação principal">
      ${navLinksHtml}
      ${loginCtaHtml}
    </nav>
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

  // Menu mobile: abrir/fechar, fechar ao navegar e suporte a teclado (Escape)
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) {
    const setMenu = (open) => {
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
      mobileNav.classList.toggle("open", open);
    };

    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) {
        setMenu(false);
        menuToggle.focus();
      }
    });
  }

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
