const questions = [
  {
    pergunta: "1. No contexto do Letramento Digital, como o professor deve lidar com o excesso de informações a que os alunos têm acesso online?",
    opcoes: [
      "Limitando rigorosamente o acesso à internet e fornecendo apenas textos impressos já validados pela coordenação.",
      "Atuando como mediador para desenvolver nos alunos a capacidade crítica de analisar, filtrar e verificar a veracidade das fontes.",
      "Delegando aos próprios alunos a responsabilidade total, pois eles já são 'nativos digitais' e sabem navegar sozinhos.",
      "Ignorando as pesquisas online e focando exclusivamente na memorização do conteúdo do livro didático."
    ],
    correta: 1,
    explicacao: "O letramento digital exige o desenvolvimento do senso crítico. O professor atua como curador e mediador, ensinando o aluno a avaliar a intenção e a veracidade da informação (Hornink et al., 2018)."
  },
  {
    pergunta: "2. De acordo com a Competência Geral 5 da Base Nacional Comum Curricular (BNCC), qual é o foco principal do uso de TDIC na Educação Básica?",
    opcoes: [
      "Garantir que todos os alunos saiam do Ensino Fundamental fluentes em linguagens de programação avançadas.",
      "Substituir integralmente o uso de cadernos e livros físicos por dispositivos eletrônicos de última geração.",
      "Utilizar as tecnologias digitais de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais.",
      "Capacitar os professores para utilizarem o laboratório de informática como prêmio por bom comportamento da turma."
    ],
    correta: 2,
    explicacao: "A BNCC enfatiza que o uso da tecnologia não é um fim técnico em si mesmo, mas um meio crítico e ético para se comunicar, acessar informações e produzir conhecimento."
  },
  {
    pergunta: "3. A Lei nº 14.533/2023 institui a Política Nacional de Educação Digital. Qual eixo está diretamente ligado à atuação transformadora do professor na sala de aula?",
    opcoes: [
      "Educação digital escolar, focada no letramento digital, na cidadania e no desenvolvimento do pensamento computacional.",
      "Terceirização das aulas de tecnologia para empresas privadas de software, eximindo a escola da responsabilidade.",
      "Exclusividade na distribuição de infraestrutura de hardware (cabeamento e roteadores) para as secretarias estaduais.",
      "Proibição terminante do uso de dispositivos móveis pessoais (celulares) dentro do ambiente escolar."
    ],
    correta: 0,
    explicacao: "A lei estrutura-se em eixos que incluem a 'educação digital escolar'. O papel docente é essencial para mediar a inserção desses conceitos (letramento e cidadania digital) no currículo."
  },
  {
    pergunta: "4. Qual das atitudes abaixo melhor representa a promoção da Cidadania Digital no ambiente escolar?",
    opcoes: [
      "Monitorar secretamente as redes sociais pessoais dos alunos para evitar e punir antecipadamente possíveis conflitos.",
      "Ensinar os alunos a criarem perfis anônimos para que possam expressar opiniões polêmicas sem sofrerem retaliações.",
      "Criar regras punitivas severas de suspensão para qualquer aluno que for visto utilizando o celular na escola.",
      "Promover debates formativos sobre respeito à diversidade, empatia online, privacidade e os impactos reais do cyberbullying."
    ],
    correta: 3,
    explicacao: "Cidadania digital trata de direitos, deveres e comportamento ético online. O diálogo aberto constrói um ambiente seguro; punições arbitrárias ou vigilância oculta quebram a relação de confiança pedagógica."
  },
  {
    pergunta: "5. Sobre a Desinformação, quando um aluno apresenta uma 'fake news' como argumento válido em uma atividade, qual deve ser a postura docente?",
    opcoes: [
      "Utilizar a informação trazida como ponto de partida prático para ensinar técnicas de verificação de fatos e análise de fontes.",
      "Reprovar o aluno ou diminuir sua nota imediatamente por trazer falsidades acadêmicas para a sala de aula.",
      "Ignorar a origem da informação, afinal todas as opiniões encontradas na internet possuem o mesmo peso e devem ser respeitadas.",
      "Expor o erro publicamente para que o constrangimento sirva de exemplo para a turma não repetir a ação."
    ],
    correta: 0,
    explicacao: "O erro e a desinformação no ambiente escolar são oportunidades pedagógicas riquíssimas. Ensinar os métodos de validação transforma um problema em aquisição de competência crítica."
  },
  {
    pergunta: "6. No que tange à Privacidade e à LGPD no contexto escolar, o professor deve estar sempre atento para:",
    opcoes: [
      "Publicar fotos dos trabalhos e rostos dos alunos em suas redes sociais pessoais para documentar e valorizar seu trabalho docente.",
      "Garantir a minimização na coleta de dados, protegendo a identidade dos menores ao selecionar plataformas e aplicativos educativos.",
      "Exigir que todos os alunos criem perfis públicos em redes sociais comerciais para participarem dos trabalhos em grupo.",
      "Não se preocupar com os termos de uso dos aplicativos, visto que sistemas rotulados como 'educacionais' são seguros por padrão."
    ],
    correta: 1,
    explicacao: "O ambiente escolar exige proteção integral (ECA). O professor e a escola devem assegurar a privacidade dos estudantes, evitando o compartilhamento desnecessário de dados ou imagens sem consentimento formal."
  },
  {
    pergunta: "7. O Pensamento Computacional, apontado como eixo normativo (Parecer CNE/CEB nº 2/2022), tem como característica estrutural:",
    opcoes: [
      "Obrigar o aluno a memorizar e reproduzir códigos extensos de linguagens de programação industriais.",
      "O isolamento do aluno em frente à tela do computador, focado em tarefas mecânicas e repetitivas.",
      "O desenvolvimento de habilidades cognitivas como decomposição de problemas, reconhecimento de padrões, abstração e criação de algoritmos.",
      "O treinamento prático de digitação rápida e formatação de textos em softwares de pacote office."
    ],
    correta: 2,
    explicacao: "O pensamento computacional é uma metodologia de raciocínio e resolução lógica de problemas complexos. Ele pode e deve ser aplicado de forma transversal, inclusive em 'computação desplugada' (sem uso de máquinas)."
  },
  {
    pergunta: "8. Qual é a principal diferença conceitual entre o 'Uso Instrumental' e o 'Uso Transformador' da tecnologia na prática pedagógica?",
    opcoes: [
      "O uso instrumental foca no aluno como produtor autônomo de conteúdo; o transformador foca no aluno como consumidor passivo.",
      "O uso instrumental apenas substitui as mídias analógicas pelas digitais sem alterar o método; o uso transformador modifica ativamente como o aluno constrói o conhecimento.",
      "O uso transformador só é possível em escolas privadas que possuem equipamentos caros; o instrumental aplica-se às escolas públicas.",
      "Não há distinção teórica; qualquer inserção de tecnologia na escola gera obrigatoriamente inovação pedagógica e transformação metodológica."
    ],
    correta: 1,
    explicacao: "A inovação não está no aparelho, mas no método. Ler um PDF na tela é um uso instrumental. Utilizar ferramentas para criar mapas mentais colaborativos em tempo real caracteriza um uso transformador da aprendizagem."
  }
];

let currentQ = 0;
let score = 0;
const letters = ['A', 'B', 'C', 'D'];

const questionEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('quiz-options');
const progressTextEl = document.getElementById('quiz-progress-text');
const progressFillEl = document.getElementById('quiz-progress-fill');
const feedbackBox = document.getElementById('quiz-feedback');

function renderQuestion() {
  const q = questions[currentQ];
  
  // Atualiza indicadores de progresso
  progressTextEl.textContent = `Questão ${currentQ + 1} de ${questions.length}`;
  const progressPercentage = ((currentQ + 1) / questions.length) * 100;
  progressFillEl.style.width = `${progressPercentage}%`;
  
  questionEl.textContent = q.pergunta;
  optionsContainer.innerHTML = '';
  feedbackBox.style.display = 'none';

  q.opcoes.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <div class="option-letter">${letters[index]}</div>
      <div>${optText}</div>
    `;
    btn.onclick = () => handleQuizAnswer(index, q.correta, q.explicacao, btn);
    optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, correctIndex, explicacao, clickedBtn) {
  Array.from(optionsContainer.children).forEach(btn => {
    btn.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    score++;
    clickedBtn.style.borderColor = "var(--success-text)";
    clickedBtn.style.background = "var(--success-bg)";
    clickedBtn.querySelector('.option-letter').style.background = "var(--success-text)";
    clickedBtn.querySelector('.option-letter').style.color = "white";
    
    feedbackBox.style.borderLeftColor = "var(--success-text)";
    feedbackBox.innerHTML = `
      <h4 style="color: var(--success-text); margin-bottom: 0.5rem; font-family: var(--font-sans); font-size: 1.125rem;">✓ Compreensão Adequada</h4>
      <p style="color: var(--slate-800); line-height: 1.6; margin-bottom: 1.5rem;">${explicacao}</p>
      <button class="btn btn-primary" onclick="nextQuestion()">Avançar para próxima questão →</button>
    `;
  } else {
    clickedBtn.style.borderColor = "var(--error-text)";
    clickedBtn.style.background = "var(--error-bg)";
    clickedBtn.querySelector('.option-letter').style.background = "var(--error-text)";
    clickedBtn.querySelector('.option-letter').style.color = "white";
    
    // Highlight correct softly
    if(optionsContainer.children[correctIndex]) {
       optionsContainer.children[correctIndex].style.borderColor = "var(--success-text)";
       optionsContainer.children[correctIndex].querySelector('.option-letter').style.color = "var(--success-text)";
    }
    
    feedbackBox.style.borderLeftColor = "var(--error-text)";
    feedbackBox.innerHTML = `
      <h4 style="color: var(--error-text); margin-bottom: 0.5rem; font-family: var(--font-sans); font-size: 1.125rem;">⚠ Requer Revisão</h4>
      <p style="color: var(--slate-800); line-height: 1.6; margin-bottom: 1.5rem;">${explicacao}</p>
      <button class="btn btn-primary" onclick="nextQuestion()">Avançar para próxima questão →</button>
    `;
  }
  
  feedbackBox.style.display = 'block';
  feedbackBox.classList.add('animate-fade-up', 'visible');
}

function nextQuestion() {
  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById('quiz-core');
  
  // Enche a barra 100%
  progressFillEl.style.width = `100%`;
  progressTextEl.textContent = `Avaliação Concluída`;
  
  let interpretacao;
  if (score <= 3) {
    interpretacao = "O resultado indica que alguns conceitos centrais ainda podem ser revisados. Consulte os materiais da biblioteca e retome os módulos relacionados às questões que geraram mais dificuldade.";
  } else if (score <= 5) {
    interpretacao = "O resultado indica compreensão parcial dos conceitos trabalhados. A revisão de alguns conteúdos pode ajudar a consolidar os conhecimentos.";
  } else if (score <= 7) {
    interpretacao = "O resultado indica boa compreensão dos principais conceitos abordados. A consulta aos materiais pode contribuir para aprofundar os temas.";
  } else {
    interpretacao = "O resultado indica compreensão consistente dos conceitos trabalhados nesta atividade. A biblioteca permanece disponível para aprofundamento.";
  }

  container.innerHTML = `
    <div class="animate-fade-up visible" style="text-align: center; padding: 3rem 0;">
      <h2 class="font-serif" style="font-size: 5rem; color: var(--slate-900); margin-bottom: 1.5rem; line-height: 1;">${score} / ${questions.length}</h2>
      <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 3rem;">
        Você concluiu a avaliação formativa.<br>
        ${interpretacao}
      </p>
      
      <div style="background: white; padding: 2.5rem; border: 1px solid var(--slate-200); text-align: center; border-radius: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.02);">
        <span class="eyebrow" style="margin-bottom: 1rem; display: block; color: var(--slate-500);">05 / 05 — Passo Final</span>
        <h3 class="font-serif" style="margin-bottom: 1.5rem; font-size: 2rem; color: var(--slate-900);">Reflexão Docente</h3>
        <p style="color: var(--slate-600); margin-bottom: 2.5rem; line-height: 1.6; max-width: 500px; margin-left: auto; margin-right: auto;">
          A teoria e a prática só ganham significado pleno quando contextualizadas à sua realidade. Vamos encerrar a jornada com uma reflexão pessoal sobre seus desafios diários.
        </p>
        <a href="refletir.html" class="btn btn-primary" style="text-decoration: none; display: inline-flex; padding: 1rem 2rem; font-size: 1.125rem;">Continuar para Reflexão →</a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuestion();
});