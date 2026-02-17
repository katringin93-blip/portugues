export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Quando cheguei a casa, ela já ___. (sair)",
    options: ["saiu", "saía", "tinha saído", "tem saído"],
    correct: 2,
    explanation: "Действие, предшествующее другому в прошлом: «tinha saído» (Mais-que-Perfeito Composto)."
  },
  {
    type: "fill",
    question: "Nós nunca ___ ___ a Portugal antes. (ir — составная форма)",
    answer: ["tínhamos", "ido"]
  },
  {
    type: "translate",
    source: "Он сказал, что уже прочитал книгу.",
    direction: "ru-pt",
    answer: ["Ele disse que já tinha lido o livro.", "Disse que já tinha lido o livro."]
  },
  {
    type: "choice",
    question: "Какая форма более употребительна в разговорной речи?",
    options: [
      "Ele falara (простая)",
      "Ele tinha falado (составная)",
      "Ele tem falado",
      "Ele fala"
    ],
    correct: 1,
    explanation: "В разговорной речи используется составная форма: «tinha + причастие»."
  },
  {
    type: "fill",
    question: "Ela ___ que já ___ comido. (dizer, ter — Perfeito + M-q-P Composto)",
    answer: ["disse", "tinha"]
  },
  // === New exercises: составная форма (Composto) ===
  {
    type: "fill",
    question: "Eu já ___ ___ o jantar quando ele chegou. (preparar — M-q-P Composto)",
    answer: ["tinha", "preparado"]
  },
  {
    type: "fill",
    question: "Tu ___ ___ o filme antes? (ver — M-q-P Composto)",
    answer: ["tinhas", "visto"]
  },
  {
    type: "fill",
    question: "Ele ___ ___ tudo antes de sair. (fazer — M-q-P Composto)",
    answer: ["tinha", "feito"]
  },
  {
    type: "fill",
    question: "Eles ___ ___ a verdade. (dizer — M-q-P Composto)",
    answer: ["tinham", "dito"]
  },
  {
    type: "choice",
    question: "Nós não ___ ___ o e-mail quando ele telefonou. (receber)",
    options: [
      "tínhamos recebido",
      "temos recebido",
      "tinham recebido",
      "tivemos recebido"
    ],
    correct: 0,
    explanation: "Для «nós» в M-q-P Composto: tínhamos + причастие."
  },
  {
    type: "fill",
    question: "Ela ___ ___ a porta antes de eu chegar. (abrir — M-q-P Composto)",
    answer: ["tinha", "aberto"]
  },
  {
    type: "fill",
    question: "Eu ___ ___ as chaves em casa. (esquecer — M-q-P Composto)",
    answer: ["tinha", "esquecido"]
  },
  // === Простая форма (Simples) ===
  {
    type: "choice",
    question: "Простая форма Mais-que-Perfeito используется...",
    options: [
      "в повседневной речи",
      "только с неправильными глаголами",
      "в литературном языке и формальной письменной речи",
      "только в Бразилии"
    ],
    correct: 2,
    explanation: "Простая форма (falara, comera) встречается в литературе, газетах и формальных текстах."
  },
  {
    type: "fill",
    question: "Ele nunca ___ Lisboa antes daquela viagem. (visitar — M-q-P Simples, литерат.)",
    answer: "visitara"
  },
  {
    type: "fill",
    question: "Ela ___ um livro que lhe ___. (comprar / agradar — M-q-P Simples)",
    answer: ["comprara", "agradara"]
  },
  {
    type: "choice",
    question: "Какая простая форма M-q-P от «ser» (eu)?",
    options: ["sera", "fora", "era", "fosse"],
    correct: 1,
    explanation: "M-q-P Simples от ser: eu fora, tu foras, ele fora, nós fôramos, eles foram."
  },
  {
    type: "choice",
    question: "Какая простая форма M-q-P от «fazer» (eu)?",
    options: ["fazera", "fizera", "fera", "fizesse"],
    correct: 1,
    explanation: "M-q-P Simples от fazer: eu fizera, tu fizeras, ele fizera."
  },
  {
    type: "choice",
    question: "Какая простая форма M-q-P от «ter» (eu)?",
    options: ["tera", "tivera", "tinha", "tenha"],
    correct: 1,
    explanation: "M-q-P Simples от ter: eu tivera, tu tiveras, ele tivera."
  },
  {
    type: "choice",
    question: "Какая простая форма M-q-P от «dizer» (eu)?",
    options: ["dizera", "dissera", "dissesse", "dizia"],
    correct: 1,
    explanation: "M-q-P Simples от dizer: eu dissera, tu disseras, ele dissera."
  },
  {
    type: "choice",
    question: "Какая простая форма M-q-P от «vir» (eu)?",
    options: ["vira", "viera", "viesse", "vinha"],
    correct: 1,
    explanation: "M-q-P Simples от vir: eu viera, tu vieras, ele viera."
  },
  // === Составная vs простая ===
  {
    type: "match",
    question: "Соотнесите составную и простую формы M-q-P:",
    pairs: [
      ["tinha falado", "falara"],
      ["tinha comido", "comera"],
      ["tinha partido", "partira"],
      ["tinha feito", "fizera"],
      ["tinha dito", "dissera"]
    ]
  },
  // === Использование M-q-P в контексте ===
  {
    type: "choice",
    question: "Quando chegámos ao aeroporto, o avião já ___. (partir)",
    options: ["partiu", "partia", "tinha partido", "tem partido"],
    correct: 2,
    explanation: "Самолёт улетел ДО того, как мы приехали — M-q-P: tinha partido."
  },
  {
    type: "fill",
    question: "Percebi que ___ ___ as chaves no escritório. (deixar — M-q-P Composto)",
    answer: ["tinha", "deixado"]
  },
  {
    type: "choice",
    question: "Ela contou-me que ___ a um restaurante novo. (ir)",
    options: ["ia", "foi", "tinha ido", "tem ido"],
    correct: 2,
    explanation: "Она рассказала (прошлое), что ходила (ещё раньше) — M-q-P: tinha ido."
  },
  {
    type: "fill",
    question: "Eles ___ ___ o trabalho antes do prazo. (terminar — M-q-P Composto)",
    answer: ["tinham", "terminado"]
  },
  // === Переводы ===
  {
    type: "translate",
    source: "Когда я приехал, он уже ушёл.",
    direction: "ru-pt",
    answer: ["Quando cheguei, ele já tinha saído.", "Quando eu cheguei, ele já tinha saído."]
  },
  {
    type: "translate",
    source: "Она сказала, что уже поела.",
    direction: "ru-pt",
    answer: ["Ela disse que já tinha comido.", "Disse que já tinha comido."]
  },
  {
    type: "translate",
    source: "Мы не видели этот фильм до того момента.",
    direction: "ru-pt",
    answer: ["Nós não tínhamos visto o filme.", "Não tínhamos visto aquele filme."]
  },
  {
    type: "translate",
    source: "Я понял, что забыл ключи.",
    direction: "ru-pt",
    answer: ["Percebi que tinha esquecido as chaves.", "Eu percebi que tinha esquecido as chaves."]
  },
  {
    type: "translate",
    source: "Они уже закончили работу, когда начальник приехал.",
    direction: "ru-pt",
    answer: ["Eles já tinham terminado o trabalho quando o chefe chegou.", "Já tinham terminado o trabalho quando o chefe chegou."]
  },
  // === Порядок действий ===
  {
    type: "choice",
    question: "В предложении «Quando cheguei, ele tinha saído», что произошло первым?",
    options: [
      "Я приехал",
      "Он ушёл",
      "Оба одновременно",
      "Невозможно определить"
    ],
    correct: 1,
    explanation: "M-q-P (tinha saído) обозначает действие, которое произошло РАНЬШЕ другого действия в прошлом."
  },
  {
    type: "order",
    question: "Составьте предложение: «Я никогда не был в Лиссабоне до той поездки.»",
    words: ["Eu", "nunca", "tinha", "ido", "a", "Lisboa", "antes", "daquela", "viagem"],
    answer: "Eu nunca tinha ido a Lisboa antes daquela viagem."
  },
  {
    type: "fill",
    question: "Quando ___ ao restaurante, a Maria já ___ ___. (chegar / ir embora — Perf. + M-q-P Comp.)",
    answer: ["cheguei", "tinha", "ido"]
  },
  // === Формы ter в Imperfeito ===
  {
    type: "match",
    question: "Соотнесите местоимение с формой «ter» в Imperfeito (для M-q-P Composto):",
    pairs: [
      ["eu", "tinha"],
      ["tu", "tinhas"],
      ["ele/ela/você", "tinha"],
      ["nós", "tínhamos"],
      ["eles/elas/vocês", "tinham"]
    ]
  },
  {
    type: "choice",
    question: "Как образуется M-q-P Composto?",
    options: [
      "ter (Presente) + particípio",
      "ter (Imperfeito) + particípio",
      "ter (Perfeito) + particípio",
      "haver (Presente) + particípio"
    ],
    correct: 1,
    explanation: "M-q-P Composto = ter в Imperfeito (tinha, tinhas...) + причастие прошедшего времени."
  },
  {
    type: "fill",
    question: "Antes de conhecê-lo, eu nunca ___ ___ ao estrangeiro. (viajar — M-q-P Composto)",
    answer: ["tinha", "viajado"]
  },
  {
    type: "choice",
    question: "Ela ___ que já ___ ___ o livro. (dizer / ler — Perf. + M-q-P Composto)",
    options: [
      "disse / tinha lido",
      "dizia / tem lido",
      "disse / tem lido",
      "dizia / tinha lido"
    ],
    correct: 0,
    explanation: "«Disse» — момент в прошлом (Perfeito). «Tinha lido» — действие, произошедшее ДО этого момента (M-q-P)."
  }
];
