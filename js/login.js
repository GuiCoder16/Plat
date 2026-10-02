// js/login.js — página Área do Professor (login.html)
// Interface visual apenas: a autenticação real será implementada em etapa futura.

(function () {
  const init = () => {
    const form = document.getElementById("login-form");
    const bgImg = document.getElementById("login-bg-img");

    // Comportamento provisório e claramente controlado: sem autenticação falsa
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const feedback = document.getElementById("login-feedback");
        feedback.textContent = "Autenticação em implantação — o acesso será liberado na próxima etapa do projeto.";
      });
    }

    if (!bgImg) return;

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
          bgImg.style.transform = `scale(1.03) translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
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
