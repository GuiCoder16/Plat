// js/login.js — página Área do Professor (login.html)
// Interface visual apenas: a autenticação real será implementada em etapa futura.

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const feedback = document.getElementById("login-feedback");
  feedback.textContent = "Ambiente em implantação — a autenticação será disponibilizada na próxima etapa do projeto.";
});
