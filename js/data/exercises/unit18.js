export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Quando era criança, eu ___ muito. (brincar)",
    options: ["brinquei", "brincava", "brincou", "brincado"],
    correct: 1,
    explanation: "Привычное действие в прошлом — Imperfeito: «brincava»."
  },
  {
    type: "fill",
    question: "Ela ___ muito simpática. (ser — Imperfeito)",
    answer: "era"
  },
  {
    type: "translate",
    source: "Раньше мы жили в Порту.",
    direction: "ru-pt",
    answer: ["Antigamente vivíamos no Porto.", "Antigamente morávamos no Porto.", "Antes vivíamos no Porto."]
  },
  {
    type: "choice",
    question: "Eles ___ muitos amigos. (ter — Imperfeito)",
    options: ["tiveram", "tinham", "terão", "têm"],
    correct: 1,
    explanation: "«Ter» в Imperfeito: eu tinha, eles tinham."
  },
  {
    type: "fill",
    question: "Nós ___ ao parque todos os domingos. (ir — Imperfeito)",
    answer: "íamos"
  },
  // === New exercises: правильные глаголы -ar ===
  {
    type: "fill",
    question: "Eu ___ português todos os dias. (estudar — Imperfeito)",
    answer: "estudava"
  },
  {
    type: "fill",
    question: "Tu ___ muito rápido. (falar — Imperfeito)",
    answer: "falavas"
  },
  {
    type: "fill",
    question: "Ele ___ sempre tarde. (chegar — Imperfeito)",
    answer: "chegava"
  },
  {
    type: "fill",
    question: "Nós ___ na praia todos os verões. (nadar — Imperfeito)",
    answer: "nadávamos"
  },
  {
    type: "fill",
    question: "Eles ___ muito bem. (cozinhar — Imperfeito)",
    answer: "cozinhavam"
  },
  // === правильные глаголы -er ===
  {
    type: "fill",
    question: "Eu ___ muitos livros quando era jovem. (ler — Imperfeito)",
    answer: "lia"
  },
  {
    type: "fill",
    question: "Tu ___ muito rápido. (correr — Imperfeito)",
    answer: "corrias"
  },
  {
    type: "fill",
    question: "Ela ___ cartas todos os meses. (escrever — Imperfeito)",
    answer: "escrevia"
  },
  {
    type: "fill",
    question: "Nós ___ pão ao pequeno-almoço. (comer — Imperfeito)",
    answer: "comíamos"
  },
  // === правильные глаголы -ir ===
  {
    type: "fill",
    question: "Eu ___ sempre às sete. (sair — Imperfeito)",
    answer: "saía"
  },
  {
    type: "fill",
    question: "Ela ___ muito bem. (dormir — Imperfeito)",
    answer: "dormia"
  },
  {
    type: "fill",
    question: "Nós ___ de Lisboa todos os verões. (partir — Imperfeito)",
    answer: "partíamos"
  },
  // === Неправильные глаголы ===
  {
    type: "choice",
    question: "Сколько неправильных глаголов в Imperfeito?",
    options: ["Два", "Три", "Четыре", "Шесть"],
    correct: 2,
    explanation: "В Imperfeito всего четыре неправильных глагола: ser, ter, vir, pôr."
  },
  {
    type: "fill",
    question: "Ele ___ cá todos os dias. (vir — Imperfeito)",
    answer: "vinha"
  },
  {
    type: "fill",
    question: "Nós ___ a mesa antes do jantar. (pôr — Imperfeito)",
    answer: "púnhamos"
  },
  {
    type: "fill",
    question: "Eles ___ muito simpáticos. (ser — Imperfeito)",
    answer: "eram"
  },
  {
    type: "fill",
    question: "Eu ___ dois cães quando era jovem. (ter — Imperfeito)",
    answer: "tinha"
  },
  {
    type: "choice",
    question: "Tu ___ sempre de comboio. (vir — Imperfeito)",
    options: ["vias", "vinhas", "vens", "viestes"],
    correct: 1,
    explanation: "«Vir» — неправильный в Imperfeito: eu vinha, tu vinhas."
  },
  // === Совпадение форм 1-го и 3-го лица ===
  {
    type: "choice",
    question: "В Imperfeito формы 1-го и 3-го лица единственного числа...",
    options: [
      "всегда различаются",
      "совпадают",
      "различаются только у неправильных глаголов",
      "различаются только у глаголов на -ar"
    ],
    correct: 1,
    explanation: "В Imperfeito формы «eu» и «ele/ela/você» всегда совпадают: eu falava = ele falava, eu comia = ele comia."
  },
  // === Маркеры ===
  {
    type: "match",
    question: "Соотнесите маркеры Imperfeito с переводом:",
    pairs: [
      ["sempre", "всегда"],
      ["todos os dias", "каждый день"],
      ["normalmente", "обычно"],
      ["antigamente", "раньше"],
      ["enquanto", "пока, в то время как"]
    ]
  },
  {
    type: "choice",
    question: "Какой маркер НЕ типичен для Imperfeito?",
    options: ["sempre", "normalmente", "ontem às três", "todos os dias"],
    correct: 2,
    explanation: "«Ontem às três» (вчера в три) указывает на конкретный момент в прошлом — маркер Pretérito Perfeito, а не Imperfeito."
  },
  // === Переводы ===
  {
    type: "translate",
    source: "Когда я был ребёнком, я играл в саду.",
    direction: "ru-pt",
    answer: ["Quando era criança, brincava no jardim.", "Quando eu era criança, eu brincava no jardim."]
  },
  {
    type: "translate",
    source: "Каждый день я ходил в школу пешком.",
    direction: "ru-pt",
    answer: ["Todos os dias ia à escola a pé.", "Todos os dias eu ia à escola a pé."]
  },
  {
    type: "translate",
    source: "Пока я учился, он смотрел телевизор.",
    direction: "ru-pt",
    answer: ["Enquanto eu estudava, ele via televisão.", "Enquanto estudava, ele via televisão."]
  },
  {
    type: "translate",
    source: "В ту эпоху мы жили в деревне.",
    direction: "ru-pt",
    answer: ["Naquela época vivíamos no campo.", "Naquela época, vivíamos no campo.", "Naquela época nós vivíamos no campo."]
  },
  // === Использование Imperfeito ===
  {
    type: "choice",
    question: "Когда используется Imperfeito?",
    options: [
      "Для завершённых однократных действий",
      "Для привычных действий, описания фона и состояний в прошлом",
      "Для действий в будущем",
      "Для действий, предшествующих другим действиям в прошлом"
    ],
    correct: 1,
    explanation: "Imperfeito используется для описания привычек, фоновых/длительных действий и состояний в прошлом."
  },
  {
    type: "order",
    question: "Составьте предложение: «Раньше здесь не было интернета.»",
    words: ["Antigamente", "não", "havia", "internet"],
    answer: "Antigamente não havia internet."
  },
  {
    type: "fill",
    question: "Ele ___ a roupa no chão. (pôr — Imperfeito, 3 л. ед.ч.)",
    answer: "punha"
  },
  {
    type: "choice",
    question: "Nós ___ no campo. (viver — Imperfeito)",
    options: ["vivimos", "vivemos", "vivíamos", "vivêramos"],
    correct: 2,
    explanation: "Viver в Imperfeito: eu vivia, nós vivíamos."
  },
  {
    type: "match",
    question: "Соотнесите неправильный глагол с формой «eu» в Imperfeito:",
    pairs: [
      ["ser", "era"],
      ["ter", "tinha"],
      ["vir", "vinha"],
      ["pôr", "punha"]
    ]
  },
  {
    type: "fill",
    question: "Tu ___ sempre o jornal de manhã. (ler — Imperfeito)",
    answer: "lias"
  },
  {
    type: "choice",
    question: "Какое окончание у глаголов на -ar в Imperfeito (eu)?",
    options: ["-ava", "-ia", "-iva", "-eva"],
    correct: 0,
    explanation: "Глаголы на -ar в Imperfeito: eu falava, tu falavas, ele falava, nós falávamos, eles falavam."
  },
  {
    type: "choice",
    question: "Какое окончание у глаголов на -er/-ir в Imperfeito (eu)?",
    options: ["-ava", "-ia", "-eva", "-iva"],
    correct: 1,
    explanation: "Глаголы на -er и -ir в Imperfeito: eu comia/partia, tu comias/partias, и т.д."
  }
];
