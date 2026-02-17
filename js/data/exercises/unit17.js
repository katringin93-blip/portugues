export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Eu ___ ao supermercado ontem. (ir)",
    options: ["fui", "foi", "vou", "ia"],
    correct: 0,
    explanation: "«Eu fui» — форма 1-го лица ед.ч. глагола «ir» в Pretérito Perfeito."
  },
  {
    type: "fill",
    question: "Ela ___ um bolo delicioso. (fazer)",
    answer: "fez"
  },
  {
    type: "translate",
    source: "Вчера мы ели рыбу.",
    direction: "ru-pt",
    answer: ["Ontem comemos peixe.", "Ontem nós comemos peixe."]
  },
  {
    type: "choice",
    question: "Tu ___ o meu livro? (ver)",
    options: ["viste", "veste", "viu", "vieste"],
    correct: 0,
    explanation: "«Tu viste» — форма 2-го лица ед.ч. глагола «ver» в Pretérito Perfeito."
  },
  {
    type: "fill",
    question: "Eles ___ tarde. (vir)",
    answer: "vieram"
  },
  // === New exercises: правильные глаголы -ar ===
  {
    type: "fill",
    question: "Eu ___ com o João ontem. (falar — Pretérito Perfeito)",
    answer: "falei"
  },
  {
    type: "fill",
    question: "Tu ___ muito bem. (cantar — Pretérito Perfeito)",
    answer: "cantaste"
  },
  {
    type: "fill",
    question: "Ele ___ a porta. (fechar — Pretérito Perfeito)",
    answer: "fechou"
  },
  {
    type: "fill",
    question: "Nós ___ o português. (estudar — Pretérito Perfeito; обратите внимание на акцент)",
    answer: "estudámos"
  },
  {
    type: "fill",
    question: "Eles ___ no restaurante. (jantar — Pretérito Perfeito)",
    answer: "jantaram"
  },
  // === правильные глаголы -er ===
  {
    type: "fill",
    question: "Eu ___ um livro interessante. (ler — Pretérito Perfeito)",
    answer: "li"
  },
  {
    type: "fill",
    question: "Tu ___ a carta? (receber — Pretérito Perfeito)",
    answer: "recebeste"
  },
  {
    type: "fill",
    question: "Ela ___ muito rápido. (correr — Pretérito Perfeito)",
    answer: "correu"
  },
  {
    type: "fill",
    question: "Nós ___ o bolo todo. (comer — Pretérito Perfeito)",
    answer: "comemos"
  },
  // === правильные глаголы -ir ===
  {
    type: "fill",
    question: "Eu ___ o presente. (abrir — Pretérito Perfeito)",
    answer: "abri"
  },
  {
    type: "fill",
    question: "Tu ___ cedo? (partir — Pretérito Perfeito)",
    answer: "partiste"
  },
  {
    type: "fill",
    question: "Ele ___ a trabalhar aqui. (decidir — Pretérito Perfeito)",
    answer: "decidiu"
  },
  // === Неправильные глаголы ===
  {
    type: "choice",
    question: "Eu ___ em Lisboa no ano passado. (estar)",
    options: ["estive", "estava", "estou", "estei"],
    correct: 0,
    explanation: "«Eu estive» — форма 1-го лица ед.ч. глагола «estar» в Pretérito Perfeito."
  },
  {
    type: "fill",
    question: "Tu ___ o trabalho? (fazer — Pretérito Perfeito)",
    answer: "fizeste"
  },
  {
    type: "choice",
    question: "Nós ___ a verdade. (dizer)",
    options: ["dizemos", "dissemos", "dizimos", "dissamos"],
    correct: 1,
    explanation: "«Nós dissemos» — неправильная форма глагола «dizer» в Pretérito Perfeito."
  },
  {
    type: "fill",
    question: "Eu ___ um presente à minha mãe. (dar — Pretérito Perfeito)",
    answer: "dei"
  },
  {
    type: "fill",
    question: "Ele ___ a resposta. (saber — Pretérito Perfeito)",
    answer: "soube"
  },
  {
    type: "choice",
    question: "Ela não ___ ir à festa. (poder — Pretérito Perfeito)",
    options: ["pôde", "pode", "podia", "pudeu"],
    correct: 0,
    explanation: "«Ela pôde» — форма 3-го лица ед.ч. глагола «poder» в Pretérito Perfeito. Обратите внимание на циркумфлекс."
  },
  {
    type: "fill",
    question: "Eles ___ ajudar. (querer — Pretérito Perfeito)",
    answer: "quiseram"
  },
  {
    type: "choice",
    question: "Ele ___ de comboio. (vir — Pretérito Perfeito, 3 л. ед.ч.)",
    options: ["vim", "veio", "viu", "vieram"],
    correct: 1,
    explanation: "«Ele veio» — форма 3-го лица ед.ч. глагола «vir» в Pretérito Perfeito."
  },
  {
    type: "fill",
    question: "Eu ___ de comboio. (vir — Pretérito Perfeito, 1 л. ед.ч.)",
    answer: "vim"
  },
  // === ser/ir (одинаковые формы) ===
  {
    type: "choice",
    question: "Формы глаголов «ser» и «ir» в Pretérito Perfeito...",
    options: [
      "различаются",
      "полностью совпадают",
      "совпадают только в 1-м лице",
      "совпадают только в 3-м лице"
    ],
    correct: 1,
    explanation: "В Pretérito Perfeito глаголы ser и ir имеют одинаковые формы: fui, foste, foi, fomos, foram."
  },
  {
    type: "fill",
    question: "Nós ___ ao cinema na sexta-feira. (ir — Pretérito Perfeito)",
    answer: "fomos"
  },
  {
    type: "fill",
    question: "Ela ___ professora durante dez anos. (ser — Pretérito Perfeito)",
    answer: "foi"
  },
  // === Перевод ===
  {
    type: "translate",
    source: "Ты сделал работу?",
    direction: "ru-pt",
    answer: ["Tu fizeste o trabalho?", "Fizeste o trabalho?"]
  },
  {
    type: "translate",
    source: "Они пошли в кино.",
    direction: "ru-pt",
    answer: ["Eles foram ao cinema.", "Foram ao cinema."]
  },
  {
    type: "translate",
    source: "Я сказал ей правду.",
    direction: "ru-pt",
    answer: ["Eu disse-lhe a verdade.", "Disse-lhe a verdade."]
  },
  {
    type: "translate",
    source: "Мы были в Лиссабоне.",
    direction: "ru-pt",
    answer: ["Nós estivemos em Lisboa.", "Estivemos em Lisboa."]
  },
  // === Таблица окончаний ===
  {
    type: "match",
    question: "Соотнесите неправильные глаголы с формой «eu» в Pretérito Perfeito:",
    pairs: [
      ["ser/ir", "fui"],
      ["ter", "tive"],
      ["estar", "estive"],
      ["fazer", "fiz"],
      ["dizer", "disse"],
      ["dar", "dei"],
      ["vir", "vim"]
    ]
  },
  {
    type: "choice",
    question: "В европейском португальском форма «nós» для -ar глаголов в Pretérito Perfeito отличается от настоящего времени тем, что:",
    options: [
      "меняется корень",
      "добавляется акцент на «а»: falámos",
      "окончание другое: falemos",
      "ничем не отличается"
    ],
    correct: 1,
    explanation: "В европ. португальском: falámos (прошедшее) vs falamos (настоящее). Акцент помогает различать времена."
  },
  {
    type: "order",
    question: "Составьте предложение: «Вчера я поговорил с Жуау.»",
    words: ["Ontem", "falei", "com", "o", "João"],
    answer: "Ontem falei com o João."
  },
  {
    type: "fill",
    question: "Tu ___ o bilhete? (trazer — Pretérito Perfeito)",
    answer: "trouxeste"
  },
  {
    type: "choice",
    question: "Eu ___ a mesa. (pôr — Pretérito Perfeito)",
    options: ["pus", "pôs", "ponhei", "puz"],
    correct: 0,
    explanation: "«Eu pus» — форма 1-го лица ед.ч. глагола «pôr» в Pretérito Perfeito."
  },
  {
    type: "fill",
    question: "Eu ___ muito ontem. (andar — Pretérito Perfeito)",
    answer: "andei"
  },
  {
    type: "choice",
    question: "Выберите маркер, типичный для Pretérito Perfeito Simples:",
    options: ["todos os dias", "normalmente", "ontem", "sempre"],
    correct: 2,
    explanation: "«Ontem» (вчера) — маркер завершённого действия в прошлом, типичный для Pretérito Perfeito Simples."
  }
];
