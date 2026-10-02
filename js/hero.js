// js/hero.js — comportamentos exclusivos da primeira dobra da Home (index.html)

(function () {
  // main.js injeta o header apenas no DOMContentLoaded — aguardamos o mesmo evento
  const init = () => {
  const header = document.getElementById("main-header");
  const heroImg = document.getElementById("hero-img");

  // Navbar transparente sobre o hero; volta ao estilo sólido após rolar
  if (header) {
    const syncHeader = () => {
      header.classList.toggle("on-hero", window.scrollY <= 40);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  if (!heroImg) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  // Parallax extremamente discreto — apenas desktop (mouse), nunca em touch
  // nem com prefers-reduced-motion ativo. Deslocamento limitado a ±5px.
  if (finePointer.matches) {
    let frame = null;

    window.addEventListener("mousemove", (e) => {
      if (reducedMotion.matches || frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const dx = (e.clientX / window.innerWidth - 0.5) * 10;
        const dy = (e.clientY / window.innerHeight - 0.5) * 10;
        heroImg.style.transform = `scale(1.03) translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
      });
    }, { passive: true });
  }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
