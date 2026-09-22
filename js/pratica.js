const scenarios = [
  {
    theme: "Segurança Digital",
    situation: "Um aluno do 6º ano informa a você que recebeu uma mensagem no chat de um jogo online. Um desconhecido ofereceu 'moedas grátis' para o jogo, desde que o aluno enviasse seu nome completo, a escola onde estuda e o horário de saída.",
    options: [
      "Dizer ao aluno para ignorar a mensagem, bloquear o usuário e voltar imediatamente a prestar atenção na aula presencial, sem alardes.",
      "Aproveitar o momento para explicar à turma sobre engenharia social, privacidade de dados e a importância de nunca compartilhar informações de rotina com desconhecidos.",
      "Proibir imediatamente que os alunos comentem sobre jogos online na escola e solicitar à coordenação o bloqueio de qualquer dispositivo.",
      "Pedir que o aluno passe dados falsos da escola apenas para ver o que a pessoa vai responder e testar o golpe."
    ],
    correctIndex: 1,
    feedback: "A abordagem correta é utilizar o evento como uma oportunidade de educação preventiva. A escola deve ser o espaço seguro para tirar dúvidas sobre o mundo digital.",
    importance: "Proibir ou ignorar não desenvolve a competência crítica. Quando o aluno estiver em casa, sozinho, precisará do letramento digital construído em sala para se proteger."
  },
  {
    theme: "Desinformação (Letramento Informacional)",
    situation: "Durante um debate de Ciências, um aluno apresenta, como argumento principal, uma informação encontrada em um vídeo curto de rede social (TikTok). A informação apresentada no vídeo contraria frontalmente as evidências científicas do livro didático.",
    options: [
      "Descartar a informação imediatamente, afirmando que redes sociais nunca possuem informações confiáveis e apenas o livro didático importa.",
      "Aceitar a participação para não desmotivar o aluno, elogiando a fala e mudando rapidamente de assunto.",
      "Pausar o debate e conduzir, na lousa digital ou projetor, uma verificação coletiva sobre a autoria, data e fontes científicas do vídeo.",
      "Punir o aluno diminuindo sua nota de participação por trazer informações falsas para o ambiente acadêmico."
    ],
    correctIndex: 2,
    feedback: "Transformar a informação duvidosa em objeto de estudo prático desenvolve o letramento informacional e a autonomia do aluno.",
    importance: "Ensinar o método de 'fact-checking' (verificação de fatos) é uma das missões da educação contemporânea e está diretamente ligada ao desenvolvimento do pensamento crítico exigido pela BNCC."
  },
  {
    theme: "Uso Pedagógico da Tecnologia",
    situation: "Sua escola adquiriu tablets para todas as turmas. No seu planejamento, você decide pedir que os alunos passem 40 minutos lendo, nos tablets, um arquivo PDF que é idêntico ao texto do livro físico que eles já possuem na mochila.",
    options: [
      "Essa é uma abordagem excelente, pois caracteriza a inovação digital da escola e reduz o peso das mochilas.",
      "A atividade caracteriza um uso estritamente instrumental e substitutivo. O ideal seria utilizar o dispositivo para atividades de pesquisa, colaboração síncrona ou simuladores.",
      "É a melhor prática inicial, pois o uso de ferramentas interativas gera distrações irreversíveis no Ensino Fundamental.",
      "O uso de telas para leitura deve ser banido, pois a tecnologia não possui lugar na aquisição de leitura profunda."
    ],
    correctIndex: 1,
    feedback: "A tecnologia deve agregar valor pedagógico. Substituir a mídia física pela digital sem alterar a metodologia não transforma o processo de ensino-aprendizagem.",
    importance: "Para que o investimento em tecnologia gere resultados, as atividades devem focar na interação, na resolução de problemas e na criação (níveis mais altos da taxonomia de Bloom digital)."
  },
  {
    theme: "Privacidade e Dados (LGPD)",
    situation: "Para realizar uma gamificação escolar online, um aplicativo gratuito exige que cada aluno (de 11 anos) crie uma conta informando nome, data de nascimento, foto do rosto e aceite os termos de compartilhamento de dados com parceiros comerciais da plataforma.",
    options: [
      "Agilizar o processo criando as contas rapidamente na sala de aula para que a atividade lúdica ocorra sem atrasos.",
      "Solicitar que os alunos alterem suas datas de nascimento no cadastro (mentindo a idade) para conseguirem criar as contas sem bloqueios.",
      "Interromper o uso da plataforma e buscar uma alternativa que não exija cadastro excessivo, ou solicitar o consentimento formal e prévio dos responsáveis legais.",
      "Deixar que os próprios alunos decidam se querem ou não compartilhar seus dados, respeitando a autonomia deles."
    ],
    correctIndex: 2,
    feedback: "A escola é corresponsável pela proteção dos dados dos alunos. A coleta excessiva de PII (Personally Identifiable Information) de menores infringe legislações vigentes.",
    importance: "O Estatuto da Criança e do Adolescente (ECA) e a Lei Geral de Proteção de Dados (LGPD) exigem proteção especial a menores. O professor deve mediar o uso de plataformas seguras."
  }
];

const scenarioMap = {
  "seguranca": 0,
  "desinformacao": 1,
  "uso-pedagogico": 2,
  "privacidade": 3
};

const urlParams = new URLSearchParams(window.location.search);
const situacaoParam = urlParams.get('situacao');

let currentIndex = (situacaoParam && scenarioMap[situacaoParam] !== undefined) 
                   ? scenarioMap[situacaoParam] 
                   : 0;

const themeEl = document.getElementById('scenario-theme');
const textEl = document.getElementById('scenario-text');
const optionsContainer = document.getElementById('options-container');
const progressEl = document.getElementById('progress-indicator');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const feedbackImportance = document.getElementById('feedback-importance');
const btnNext = document.getElementById('btn-next');

const letters = ['A', 'B', 'C', 'D'];

function renderScenario() {
  const current = scenarios[currentIndex];
  
  progressEl.textContent = `Situação ${currentIndex + 1} de ${scenarios.length}`;
  themeEl.textContent = current.theme;
  textEl.textContent = current.situation;
  feedbackContainer.style.display = 'none';
  optionsContainer.innerHTML = '';

  current.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    // Composição visual da alternativa com a Letra (A, B, C, D)
    btn.innerHTML = `
      <div class="option-letter">${letters[index]}</div>
      <div>${optText}</div>
    `;
    
    btn.onclick = () => handleAnswer(index, current.correctIndex, current.feedback, current.importance, btn);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, correctIndex, feedbackMessage, importanceMsg, clickedBtn) {
  Array.from(optionsContainer.children).forEach(btn => {
    btn.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    clickedBtn.style.borderColor = "var(--success-text)";
    clickedBtn.style.background = "var(--success-bg)";
    clickedBtn.querySelector('.option-letter').style.background = "var(--success-text)";
    clickedBtn.querySelector('.option-letter').style.color = "white";
    
    feedbackContainer.style.borderLeft = "4px solid var(--success-text)";
    feedbackTitle.textContent = "✓ Abordagem Adequada";
    feedbackTitle.style.color = "var(--success-text)";
  } else {
    clickedBtn.style.borderColor = "var(--error-text)";
    clickedBtn.style.background = "var(--error-bg)";
    clickedBtn.querySelector('.option-letter').style.background = "var(--error-text)";
    clickedBtn.querySelector('.option-letter').style.color = "white";
    
    feedbackContainer.style.borderLeft = "4px solid var(--error-text)";
    feedbackTitle.textContent = "⚠ Requer Atenção Pedagógica";
    feedbackTitle.style.color = "var(--error-text)";
    
    // Highlight the correct one softly
    if(optionsContainer.children[correctIndex]) {
       optionsContainer.children[correctIndex].style.borderColor = "var(--success-text)";
       optionsContainer.children[correctIndex].querySelector('.option-letter').style.color = "var(--success-text)";
    }
  }

  feedbackText.textContent = feedbackMessage;
  feedbackImportance.textContent = importanceMsg;
  
  feedbackContainer.style.display = "block";
  feedbackContainer.classList.add("animate-fade-up", "visible");
  
  // Atualiza texto do botão final se for a última situação
  if (currentIndex === scenarios.length - 1) {
    btnNext.textContent = "Finalizar Prática →";
  } else {
    btnNext.textContent = "Avançar para a próxima situação →";
  }
}

function showPracticeEnd() {
  const core = document.getElementById('practice-core');
  
  core.innerHTML = `
    <div class="animate-fade-up visible" style="background: white; padding: 4rem 2rem; border: 1px solid var(--slate-200); text-align: center; border-radius: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.02);">
      <div style="width: 80px; height: 80px; background: var(--slate-900); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 2rem;">✓</div>
      <span class="eyebrow" style="margin-bottom: 1rem; display: block; color: var(--slate-500);">03 / 05 — Prática Concluída</span>
      <h3 class="font-serif" style="margin-bottom: 1.5rem; font-size: 2.5rem; color: var(--slate-900);">Situações Analisadas</h3>
      <p style="color: var(--slate-600); margin-bottom: 3rem; line-height: 1.6; max-width: 500px; margin-left: auto; margin-right: auto;">
        Você passou pelos dilemas fundamentais do uso da tecnologia na escola. A próxima etapa verificará a sua compreensão conceitual de forma consolidada.
      </p>
      <a href="teste.html" class="btn btn-primary" style="text-decoration: none; display: inline-flex; padding: 1rem 2rem; font-size: 1.125rem;">Avançar para Avaliação Formativa →</a>
    </div>
  `;
}

btnNext.addEventListener('click', () => {
  if (currentIndex < scenarios.length - 1) {
    currentIndex++;
    renderScenario();
    window.scrollTo({ top: document.getElementById('practice-core').offsetTop - 120, behavior: 'smooth' });
  } else {
    showPracticeEnd();
    window.scrollTo({ top: document.getElementById('practice-core').offsetTop - 120, behavior: 'smooth' });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderScenario();
});