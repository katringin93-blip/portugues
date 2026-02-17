export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Enquanto eu ___ (dormir), o telefone ___ (tocar).",
    options: [
      "dormi / tocou",
      "dormia / tocava",
      "dormia / tocou",
      "dormi / tocava"
    ],
    correct: 2,
    explanation: "Фоновое действие (спал) — Imperfeito: dormia. Прервавшее событие (зазвонил) — Perfeito: tocou."
  },
  {
    type: "choice",
    question: "Quando era criança, todos os verões ___ à praia. (ir)",
    options: ["fui", "ia", "iria", "vou"],
    correct: 1,
    explanation: "Привычное действие в прошлом — Imperfeito: «ia» (ходил каждое лето)."
  },
  {
    type: "translate",
    source: "Я смотрел телевизор, когда она позвонила.",
    direction: "ru-pt",
    answer: ["Eu via televisão quando ela telefonou.", "Eu estava a ver televisão quando ela telefonou."]
  },
  {
    type: "fill",
    question: "Ontem eu ___ ao médico. (ir — завершённое действие)",
    answer: "fui"
  },
  {
    type: "choice",
    question: "Какое предложение описывает фон/обстановку?",
    options: [
      "Comi um bolo.",
      "Chovia muito.",
      "Ele chegou.",
      "Comprei um carro."
    ],
    correct: 1,
    explanation: "«Chovia muito» (Шёл сильный дождь) — описание обстановки, фон. Используется Imperfeito."
  },
  // === New exercises: выбор времени ===
  {
    type: "choice",
    question: "Ontem ___ muito frio. (fazer — описание погоды/обстановки)",
    options: ["fez", "fazia", "fiz", "faziam"],
    correct: 1,
    explanation: "Описание погоды/обстановки — Imperfeito: «fazia muito frio»."
  },
  {
    type: "choice",
    question: "Ela ___ um café e ___ de casa. (tomar / sair — последовательность завершённых действий)",
    options: [
      "tomava / saía",
      "tomou / saiu",
      "tomava / saiu",
      "tomou / saía"
    ],
    correct: 1,
    explanation: "Последовательность завершённых действий — обе формы в Perfeito: tomou, saiu."
  },
  {
    type: "choice",
    question: "Enquanto ela ___ (cozinhar), ele ___ (chegar).",
    options: [
      "cozinhou / chegou",
      "cozinhava / chegava",
      "cozinhava / chegou",
      "cozinhou / chegava"
    ],
    correct: 2,
    explanation: "Фоновое действие (готовила) — Imperfeito: cozinhava. Прервавшее событие (приехал) — Perfeito: chegou."
  },
  {
    type: "choice",
    question: "Todos os dias ele ___ às sete horas. (levantar-se — привычное действие)",
    options: ["levantou-se", "levantava-se", "levanta-se", "levantara-se"],
    correct: 1,
    explanation: "Привычное действие в прошлом — Imperfeito: levantava-se."
  },
  {
    type: "choice",
    question: "___ sol e os pássaros ___. (fazer / cantar — описание обстановки)",
    options: [
      "Fez / cantaram",
      "Fazia / cantavam",
      "Fez / cantavam",
      "Fazia / cantaram"
    ],
    correct: 1,
    explanation: "Описание обстановки — обе формы в Imperfeito: fazia sol, cantavam."
  },
  // === Fill-in с выбором времени ===
  {
    type: "fill",
    question: "Ontem eu ___ às oito horas. (chegar — завершённое действие с точным временем)",
    answer: "cheguei"
  },
  {
    type: "fill",
    question: "Quando eu ___ de casa, começou a chover. (sair — фоновое действие)",
    answer: "saía"
  },
  {
    type: "fill",
    question: "Eu ___ um livro quando o telefone ___. (ler / tocar)",
    answer: ["lia", "tocou"]
  },
  {
    type: "fill",
    question: "Eu ___ cansado e ___ ir para casa. (estar / decidir — состояние + решение)",
    answer: ["estava", "decidi"]
  },
  {
    type: "fill",
    question: "Eles ___ no Porto, mas ___ para Lisboa. (viver / mudar-se — фон + новое действие)",
    answer: ["viviam", "mudaram-se"]
  },
  // === Определение типа действия ===
  {
    type: "choice",
    question: "Какое предложение описывает привычное действие?",
    options: [
      "Ontem comprei um livro.",
      "Todos os dias ia à escola a pé.",
      "Cheguei às oito.",
      "Ele deu-me um presente."
    ],
    correct: 1,
    explanation: "«Todos os dias ia à escola a pé» — повторяющееся привычное действие, поэтому Imperfeito."
  },
  {
    type: "choice",
    question: "Какое предложение описывает завершённое однократное действие?",
    options: [
      "Chovia muito.",
      "Eu estudava todos os dias.",
      "O João telefonou às cinco.",
      "Ela era muito bonita."
    ],
    correct: 2,
    explanation: "«O João telefonou às cinco» — завершённое однократное действие с точным временем — Perfeito."
  },
  // === Правило: замена ===
  {
    type: "choice",
    question: "Ключевое правило: если можно заменить на «обычно делал» или «в тот момент делал», используется...",
    options: ["Perfeito", "Imperfeito", "Mais-que-Perfeito", "Futuro"],
    correct: 1,
    explanation: "Если можно заменить на «обычно делал» или «в тот момент делал» — Imperfeito. Если «сделал» — Perfeito."
  },
  // === Переводы ===
  {
    type: "translate",
    source: "Когда я выходил из дома, начался дождь.",
    direction: "ru-pt",
    answer: ["Quando eu saía de casa, começou a chover.", "Quando saía de casa, começou a chover."]
  },
  {
    type: "translate",
    source: "Я читал книгу, когда зазвонил телефон.",
    direction: "ru-pt",
    answer: ["Eu lia um livro quando o telefone tocou.", "Estava a ler um livro quando o telefone tocou."]
  },
  {
    type: "translate",
    source: "Вчера я поел рыбу.",
    direction: "ru-pt",
    answer: ["Ontem comi peixe.", "Ontem eu comi peixe."]
  },
  {
    type: "translate",
    source: "Он встал, принял душ и вышел.",
    direction: "ru-pt",
    answer: ["Ele levantou-se, tomou banho e saiu.", "Levantou-se, tomou banho e saiu."]
  },
  {
    type: "translate",
    source: "Раньше она была очень стеснительной.",
    direction: "ru-pt",
    answer: ["Antigamente ela era muito tímida.", "Antes ela era muito tímida."]
  },
  // === Сложные предложения ===
  {
    type: "choice",
    question: "Quando ___ (chegar) a casa, a minha mãe ___ (cozinhar).",
    options: [
      "cheguei / cozinhava",
      "chegava / cozinhava",
      "cheguei / cozinhou",
      "chegava / cozinhou"
    ],
    correct: 0,
    explanation: "«Cheguei» — завершённое событие (приехал). «Cozinhava» — фоновое действие (готовила)."
  },
  {
    type: "choice",
    question: "Ela ___ (estar) doente e por isso não ___ (ir) trabalhar.",
    options: [
      "estava / foi",
      "esteve / ia",
      "estava / ia",
      "esteve / foi"
    ],
    correct: 0,
    explanation: "«Estava doente» — состояние (Imperfeito). «Não foi trabalhar» — завершённое решение/действие (Perfeito)."
  },
  {
    type: "fill",
    question: "O tempo ___ bom e nós ___ ir à praia. (estar / decidir)",
    answer: ["estava", "decidimos"]
  },
  {
    type: "order",
    question: "Составьте предложение: «Пока она готовила, он приехал.»",
    words: ["Enquanto", "ela", "cozinhava", "ele", "chegou"],
    answer: "Enquanto ela cozinhava, ele chegou."
  },
  // === Маркеры: к какому времени? ===
  {
    type: "match",
    question: "Соотнесите маркер с временем (Perfeito или Imperfeito):",
    pairs: [
      ["ontem", "Perfeito"],
      ["todos os dias", "Imperfeito"],
      ["na semana passada", "Perfeito"],
      ["normalmente", "Imperfeito"],
      ["enquanto", "Imperfeito"],
      ["de repente", "Perfeito"]
    ]
  },
  {
    type: "choice",
    question: "Vivi em Lisboa ___ dois anos. (жил два года — определённый период)",
    options: ["durante", "enquanto", "sempre", "normalmente"],
    correct: 0,
    explanation: "«Durante dois anos» — определённый период; используется Perfeito: «Vivi em Lisboa durante dois anos.»"
  },
  {
    type: "fill",
    question: "A criança ___ e a mãe ___. (chorar — фон / entrar — событие)",
    answer: ["chorava", "entrou"]
  },
  {
    type: "choice",
    question: "Как правильно: «Когда я был молодым, я много путешествовал»?",
    options: [
      "Quando fui jovem, viajei muito.",
      "Quando era jovem, viajava muito.",
      "Quando era jovem, viajei muito.",
      "Quando fui jovem, viajava muito."
    ],
    correct: 1,
    explanation: "«Когда я был молодым» — длительное состояние (Imperfeito: era). «Много путешествовал» — привычное действие (Imperfeito: viajava)."
  },
  {
    type: "choice",
    question: "___ (estar) a chover quando eu ___ (sair) do escritório.",
    options: [
      "Estava / saí",
      "Esteve / saía",
      "Estava / saía",
      "Esteve / saí"
    ],
    correct: 0,
    explanation: "«Estava a chover» — фон, длительное действие (Imperfeito). «Saí» — конкретное событие (Perfeito)."
  }
];
