export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Nós ___ muito. (estudar — повторяющееся действие)",
    options: ["temos estudado", "temos estudando", "tem estudado", "temos estudo"],
    correct: 0,
    explanation: "Для «nós» — «temos» + причастие «estudado»: temos estudado."
  },
  {
    type: "fill",
    question: "Причастие от «fazer»: ___",
    answer: "feito"
  },
  {
    type: "translate",
    source: "В последнее время я много читал.",
    direction: "ru-pt",
    answer: ["Tenho lido muito ultimamente.", "Ultimamente tenho lido muito."]
  },
  {
    type: "choice",
    question: "Какое причастие неправильное?",
    options: ["falado", "comido", "escrito", "partido"],
    correct: 2,
    explanation: "«Escrito» — неправильное причастие от «escrever» (вместо ожидаемого *escrevido)."
  },
  {
    type: "fill",
    question: "Ela tem ___ muitas cartas. (escrever)",
    answer: "escrito"
  },
  // === New exercises ===
  {
    type: "fill",
    question: "Eu ___ ___ muito ultimamente. (trabalhar — Pret. Perf. Composto)",
    answer: ["tenho", "trabalhado"]
  },
  {
    type: "choice",
    question: "Tu ___ ___ bem? (dormir — Pret. Perf. Composto)",
    options: ["tens dormido", "tem dormido", "tenho dormido", "temos dormido"],
    correct: 0,
    explanation: "Для «tu» — «tens» + причастие «dormido»: tens dormido."
  },
  {
    type: "fill",
    question: "Причастие от «dizer»: ___",
    answer: "dito"
  },
  {
    type: "fill",
    question: "Причастие от «ver»: ___",
    answer: "visto"
  },
  {
    type: "fill",
    question: "Причастие от «abrir»: ___",
    answer: "aberto"
  },
  {
    type: "fill",
    question: "Причастие от «pôr»: ___",
    answer: "posto"
  },
  {
    type: "fill",
    question: "Причастие от «vir»: ___",
    answer: "vindo"
  },
  {
    type: "choice",
    question: "Eles ___ ___ cá todos os dias. (vir)",
    options: ["têm vindo", "tem vindo", "tens vindo", "temos vindo"],
    correct: 0,
    explanation: "Для «eles» — «têm» (с циркумфлексом!) + причастие «vindo»."
  },
  {
    type: "fill",
    question: "Ela ___ ___ muito em casa. (cozinhar — Pret. Perf. Composto)",
    answer: ["tem", "cozinhado"]
  },
  {
    type: "translate",
    source: "Мы делаем успехи в последнее время.",
    direction: "ru-pt",
    answer: ["Temos feito progressos ultimamente.", "Ultimamente temos feito progressos."]
  },
  {
    type: "choice",
    question: "Что обозначает Pretérito Perfeito Composto в европейском португальском?",
    options: [
      "Однократное завершённое действие",
      "Повторяющееся/продолжающееся действие от прошлого до настоящего",
      "Будущее действие",
      "Привычное действие в прошлом"
    ],
    correct: 1,
    explanation: "В европейском португальском это время обозначает действие, которое началось в прошлом и повторяется/продолжается до настоящего момента."
  },
  {
    type: "fill",
    question: "Nós ___ ___ muitos livros este mês. (ler)",
    answer: ["temos", "lido"]
  },
  {
    type: "translate",
    source: "Она работает дома (уже какое-то время).",
    direction: "ru-pt",
    answer: ["Ela tem trabalhado em casa."]
  },
  {
    type: "choice",
    question: "Причастие от «falar»:",
    options: ["falado", "falido", "faledo", "falando"],
    correct: 0,
    explanation: "Глаголы на -ar образуют причастие с окончанием -ado: falar → falado."
  },
  {
    type: "choice",
    question: "Причастие от «comer»:",
    options: ["comado", "comedo", "comido", "comindo"],
    correct: 2,
    explanation: "Глаголы на -er образуют причастие с окончанием -ido: comer → comido."
  },
  {
    type: "choice",
    question: "Причастие от «partir»:",
    options: ["partado", "partido", "partedo", "partindo"],
    correct: 1,
    explanation: "Глаголы на -ir образуют причастие с окончанием -ido: partir → partido."
  },
  {
    type: "fill",
    question: "Vocês ___ ___ muitas perguntas. (fazer — Pret. Perf. Composto)",
    answer: ["têm", "feito"]
  },
  {
    type: "translate",
    source: "Ты видел Жуау в последнее время?",
    direction: "ru-pt",
    answer: ["Tens visto o João ultimamente?", "Tens visto o João?"]
  },
  {
    type: "choice",
    question: "Какое из следующих предложений использует Pretérito Perfeito Composto правильно?",
    options: [
      "Ontem tenho comido peixe.",
      "Tenho comido muito peixe ultimamente.",
      "Amanhã tenho comido peixe.",
      "Tenho comido peixe ontem."
    ],
    correct: 1,
    explanation: "Pret. Perf. Composto обозначает повторяющееся действие до настоящего момента. «Ultimamente» — правильный маркер. «Ontem» и «amanhã» не подходят."
  },
  {
    type: "match",
    question: "Соотнесите глагол с его неправильным причастием:",
    pairs: [
      ["fazer", "feito"],
      ["dizer", "dito"],
      ["ver", "visto"],
      ["escrever", "escrito"],
      ["abrir", "aberto"],
      ["pôr", "posto"]
    ]
  },
  {
    type: "fill",
    question: "O Pedro tem ___ a verdade. (dizer)",
    answer: "dito"
  },
  {
    type: "translate",
    source: "Они приходят сюда каждый день (уже какое-то время).",
    direction: "ru-pt",
    answer: ["Eles têm vindo cá todos os dias.", "Têm vindo cá todos os dias."]
  },
  {
    type: "choice",
    question: "Eu ___ ___ muitos filmes este mês. (ver)",
    options: ["tenho visto", "tenho vido", "tenho vendo", "tenho ver"],
    correct: 0,
    explanation: "Ver имеет неправильное причастие: visto. Tenho visto."
  },
  {
    type: "fill",
    question: "Tu ___ ___ muitas horas extra? (trabalhar — Pret. Perf. Composto)",
    answer: ["tens", "trabalhado"]
  },
  {
    type: "order",
    question: "Составьте предложение: «В последнее время погода была хорошей.»",
    words: ["O", "tempo", "tem", "estado", "bom", "ultimamente"],
    answer: "O tempo tem estado bom ultimamente."
  },
  {
    type: "choice",
    question: "Какая форма «ter» используется с «vocês»?",
    options: ["tem", "tens", "temos", "têm"],
    correct: 3,
    explanation: "С «vocês» (и «eles/elas») используется «têm» (с циркумфлексом), а не «tem»."
  },
  {
    type: "fill",
    question: "Nós não ___ ___ bem. (comer — Pret. Perf. Composto, отрицание)",
    answer: ["temos", "comido"]
  },
  {
    type: "translate",
    source: "Я написал много писем в последнее время.",
    direction: "ru-pt",
    answer: ["Tenho escrito muitas cartas ultimamente.", "Ultimamente tenho escrito muitas cartas."]
  },
  {
    type: "choice",
    question: "Как правильно сказать «Я много учился в последнее время»?",
    options: [
      "Eu estudei muito ultimamente.",
      "Eu tenho estudado muito ultimamente.",
      "Eu estudo muito ultimamente.",
      "Eu tinha estudado muito ultimamente."
    ],
    correct: 1,
    explanation: "Для повторяющегося действия от прошлого до настоящего используется Pret. Perf. Composto: tenho estudado."
  },
  {
    type: "fill",
    question: "A Maria tem ___ muito bem na escola. (ir — Pret. Perf. Composto)",
    answer: "ido"
  },
  {
    type: "match",
    question: "Соотнесите местоимение с формой «ter»:",
    pairs: [
      ["eu", "tenho"],
      ["tu", "tens"],
      ["ele/ela/você", "tem"],
      ["nós", "temos"],
      ["eles/elas/vocês", "têm"]
    ]
  }
];
