const materiais = [
  {
    id: 1,
    title: "A BNCC e a Cultura Digital",
    category: "educacao",
    type: "Documento Oficial",
    time: "15 min",
    objetivo: "Compreender como a Base Nacional Comum Curricular integra a tecnologia.",
    content: "A cultura digital não é apenas sobre usar computadores, mas sobre compreender, analisar e criar tecnologias de forma crítica e ética. Na BNCC, a competência geral 5 estabelece que o aluno deve ser capaz de utilizar as TDIC de forma significativa, reflexiva e ética nas diversas práticas sociais.",
    reference: "Base Nacional Comum Curricular — BNCC (2018).",
    pratica: "Sempre que planejar uma aula com tecnologia, pergunte-se: o aluno está apenas consumindo informação ou está produzindo/refletindo sobre ela?",
    reflexao: "Como as atividades que você propõe hoje se conectam à competência 5 da BNCC?"
  },
  {
    id: 2,
    title: "Diretrizes da Educação Digital",
    category: "cidadania",
    type: "Legislação",
    time: "20 min",
    objetivo: "Conhecer a Política Nacional de Educação Digital.",
    content: "A Política Nacional de Educação Digital estrutura-se para garantir a inclusão digital, a educação digital escolar, a capacitação e a especialização. O professor é o mediador essencial para que a infraestrutura se transforme em letramento digital real.",
    reference: "Lei nº 14.533/2023 — Política Nacional de Educação Digital.",
    pratica: "Identifique alunos com menor letramento digital na sua turma e crie dinâmicas de colaboração em pares (mentoria entre alunos).",
    reflexao: "A infraestrutura da sua escola atende às necessidades de uma educação digital inclusiva?"
  },
  {
    id: 3,
    title: "TDIC no Contexto Escolar",
    category: "tecnologia",
    type: "Diretriz Educacional",
    time: "25 min",
    objetivo: "Analisar as diretrizes do MEC para a integração das Tecnologias Digitais de Informação e Comunicação.",
    content: "A integração das TDIC transcende a dimensão técnica, exigindo uma ressignificação das práticas pedagógicas. O foco recai sobre metodologias ativas e o desenvolvimento do pensamento computacional.",
    reference: "Ministério da Educação — Tecnologias Digitais da Informação e Comunicação no contexto escolar.",
    pratica: "Substitua uma apresentação expositiva por uma atividade onde os alunos pesquisem e estruturem informações usando ferramentas colaborativas.",
    reflexao: "A tecnologia na sua aula é um fim em si mesma ou um meio para alcançar um objetivo pedagógico maior?"
  },
  {
    id: 4,
    title: "Computação na Educação Básica",
    category: "educacao",
    type: "Parecer Técnico",
    time: "30 min",
    objetivo: "Entender as normas de Computação como componente ou complemento curricular.",
    content: "O Parecer do CNE estabelece normas sobre a introdução da Computação na Educação Básica, definindo três eixos: Pensamento Computacional, Mundo Digital e Cultura Digital. A formação docente é o pilar central para a eficácia dessas normativas.",
    reference: "Parecer CNE/CEB nº 2/2022.",
    pratica: "Integre conceitos de pensamento computacional (como decomposição de problemas) em disciplinas não tecnológicas.",
    reflexao: "Como os eixos do Mundo Digital se manifestam no comportamento diário dos seus alunos?"
  },
  {
    id: 5,
    title: "Diretrizes Nacionais para Computação",
    category: "educacao",
    type: "Resolução",
    time: "15 min",
    objetivo: "Conhecer a regulamentação para o ensino de computação.",
    content: "A resolução regulamenta as normas sobre Computação na Educação Básica, reforçando que não se trata apenas de formar programadores, mas sim cidadãos capazes de entender e atuar em um mundo mediado por algoritmos.",
    reference: "Resolução CNE/CEB nº 1/2022.",
    pratica: "Desenvolva pequenos projetos transversais onde os alunos criem soluções tecnológicas (mesmo que no papel) para problemas da escola.",
    reflexao: "Onde você pode iniciar uma pequena transformação digital alinhada a essas diretrizes?"
  },
  {
    id: 6,
    title: "Tecnologias Mediando o Ensino",
    category: "tecnologia",
    type: "Artigo Acadêmico",
    time: "40 min",
    objetivo: "Analisar as evidências acadêmicas sobre o uso da tecnologia.",
    content: "A pesquisa aponta que o uso intencional de TDIC mediando a relação ensino-aprendizagem (especialmente em Ciências) facilita a compreensão de conceitos abstratos por meio de simuladores e modelagem. O professor torna-se curador e orientador.",
    reference: "HORNINK et al. — Tecnologias digitais mediando o ensino-aprendizagem de Ciências (2018).",
    pratica: "Utilize simuladores online gratuitos para demonstrar fenômenos difíceis de visualizar apenas com livros didáticos.",
    reflexao: "Como você pode transitar de uma postura de 'transmissor' para 'curador' de conhecimento?"
  },
  {
    id: 7,
    title: "Segurança Digital no Cotidiano Escolar",
    category: "seguranca",
    type: "Guia Pedagógico",
    time: "20 min",
    objetivo: "Reconhecer situações de risco digital vividas pelos alunos e transformá-las em oportunidades de educação preventiva.",
    content: "Golpes em jogos, mensagens de desconhecidos e senhas compartilhadas fazem parte do cotidiano dos estudantes muito antes de chegarem à escola. O professor não precisa ser especialista em segurança da informação: sua função é mediar a conversa, ajudar a turma a reconhecer padrões de engenharia social (pedidos de dados pessoais, promessas vantajosas, sensação de urgência) e construir combinados claros de convivência digital. A abordagem educativa previne mais do que a proibição, porque o aluno permanecerá conectado fora do horário escolar.",
    pratica: "Construa com a turma um combinado digital para jogos e chats: nunca compartilhar nome, escola ou rotina com desconhecidos; avisar um adulto de confiança ao receber mensagens suspeitas; e desconfiar de promessas de recompensas gratuitas.",
    reflexao: "Diante de um incidente digital (golpe, mensagem de desconhecido, cyberbullying), a sua primeira reação tem sido educar, proibir ou ignorar?",
    reference: "Base Nacional Comum Curricular — BNCC (2018), Competência Geral 5; Lei nº 14.533/2023 — Política Nacional de Educação Digital."
  },
  {
    id: 8,
    title: "Privacidade e Proteção de Dados na Escola",
    category: "privacidade",
    type: "Guia Pedagógico",
    time: "25 min",
    objetivo: "Aplicar minimização de dados e consentimento na escolha de ferramentas digitais para a sala de aula.",
    content: "Ao adotar um aplicativo ou plataforma educacional, a escola passa a lidar com dados pessoais de crianças e adolescentes — um dos pontos mais sensíveis da proteção de dados. Nem toda ferramenta que se diz 'educacional' coleta apenas o necessário. Antes de cadastrar uma turma, o professor pode se perguntar: quais dados a atividade realmente exige? Existe uma alternativa que não exija cadastro? Há autorização formal dos responsáveis? Perguntas simples como essas protegem os alunos e desenvolvem, nos próprios estudantes, a consciência sobre o valor dos seus dados.",
    pratica: "Antes de adotar um aplicativo educativo, verifique quais dados ele solicita, se há alternativa sem cadastro para menores e se o consentimento dos responsáveis foi formalizado. Registre a escolha e o motivo no seu planejamento.",
    reflexao: "Quais dados dos seus alunos são realmente necessários para a atividade planejada — e quais estão sendo coletados apenas por conveniência?",
    reference: "Lei Geral de Proteção de Dados (LGPD) e Estatuto da Criança e do Adolescente (ECA) — referências apresentadas na Trilha de Formação (Etapa 02) e na Prática Situacional."
  }
];

const listContainer = document.getElementById('materiais-list');
const emptyStateMsg = document.getElementById('empty-state-msg');
const filterBtns = document.querySelectorAll('.filter-btn');

// Elementos do Modal Acessível
const dialog = document.getElementById('material-dialog');
const dialogContent = document.getElementById('dialog-dynamic-content');
const btnClose = document.getElementById('btn-close-dialog');

// 1. Renderizar TODOS os materiais no DOM uma única vez (Performance e Manutenibilidade)
function renderAllMateriaisInicial() {
  listContainer.innerHTML = '';
  
  materiais.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'editorial-row animate-fade-up visible material-item';
    row.dataset.category = item.category; // Guarda a categoria no DOM para filtragem
    row.innerHTML = `
      <div class="editorial-meta">
        <span class="editorial-number">0${index + 1}</span>
        <span class="eyebrow" style="margin-top: auto;">${item.type}</span>
        <span class="eyebrow" style="color: var(--text-muted);">${item.time}</span>
      </div>
      <div>
        <h3 class="font-serif" style="font-size: 1.75rem; margin-bottom: 0.5rem; color: var(--text);">${item.title}</h3>
        <p style="color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6; max-width: 700px;">${item.objetivo}</p>
      </div>
      <div style="display: flex; align-items: center;">
        <button class="btn btn-outline" onclick="openMaterial(${item.id})">Explorar material</button>
      </div>
    `;
    listContainer.appendChild(row);
  });
}

// 2. Lógica de Filtragem (Oculta via classe CSS, não destrói o DOM)
function filterMateriais(categoryTarget) {
  const allItems = document.querySelectorAll('.material-item');
  let visibleCount = 0;

  allItems.forEach(item => {
    if (categoryTarget === 'todos' || item.dataset.category === categoryTarget) {
      item.classList.remove('hidden');
      visibleCount++;
    } else {
      item.classList.add('hidden');
    }
  });

  // Mostrar mensagem de "Não encontrado" se a categoria estiver vazia (Ex: Segurança ou Privacidade)
  if (visibleCount === 0) {
    emptyStateMsg.classList.remove('hidden');
  } else {
    emptyStateMsg.classList.add('hidden');
  }
}

// 3. Gerenciamento dos Eventos de Clique nos Botões de Filtro
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Acessibilidade e visual: resetar todos
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });

    // Ativar o clicado
    const clickedBtn = e.target;
    clickedBtn.classList.add('active');
    clickedBtn.setAttribute('aria-pressed', 'true');

    // Chamar filtro
    filterMateriais(clickedBtn.dataset.filter);
  });
});

// 4. Lógica do Modal (Preservada e Adaptada para a nova paleta)
function openMaterial(id) {
  const item = materiais.find(m => m.id === id);
  if (!item) return;

  dialogContent.innerHTML = `
    <span class="eyebrow">${item.type} • ${item.time}</span>
    <h2 id="dialog-title" class="font-serif" style="margin: 1rem 0; font-size: 2rem; color: var(--text);">${item.title}</h2>
    <p style="font-weight: 600; color: var(--primary); margin-bottom: 2rem;">Objetivo: ${item.objetivo}</p>
    
    <div style="line-height: 1.8; color: var(--text); margin-bottom: 2rem;">
      <p>${item.content}</p>
    </div>
    
    <div style="background: var(--surface-alt); padding: 1.5rem; border-left: 4px solid var(--primary-dark); margin-bottom: 2rem; border-radius: 4px;">
      <p class="eyebrow" style="margin-bottom: 0.5rem; color: var(--primary-dark);">Como utilizar na prática</p>
      <p style="font-size: 0.95rem; color: var(--text);">${item.pratica}</p>
    </div>

    <div style="margin-bottom: 2rem;">
      <p class="eyebrow" style="margin-bottom: 0.5rem; color: var(--text-muted);">Para Refletir</p>
      <p class="font-serif" style="font-size: 1.35rem; font-style: italic; color: var(--primary-dark);">"${item.reflexao}"</p>
    </div>

    <p style="font-size: 0.8rem; color: var(--text-muted); border-top: 1px solid var(--border); padding-top: 1rem;">
      <strong>Referência Bibliográfica:</strong> ${item.reference}
    </p>
  `;
  
  dialog.showModal();
}

btnClose.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderAllMateriaisInicial();
  filterMateriais('todos'); // Aplica o estado inicial visualmente
});