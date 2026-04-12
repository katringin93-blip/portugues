export const exercises = [
  // === Ex1: Вставьте притяжательное местоимение ===
  {
    type: "fill",
    question: "Вставьте притяжательное: O ___ carro é novo. (мой)",
    answer: "meu"
  },
  {
    type: "fill",
    question: "Вставьте: A casa ___ é grande. (их, жен.)",
    answer: "delas"
  },
  {
    type: "fill",
    question: "Вставьте: As ___ amigas são simpáticas. (твои)",
    answer: "tuas"
  },
  {
    type: "fill",
    question: "Вставьте: O ___ jardim é bonito. (наш)",
    answer: "nosso"
  },
  {
    type: "fill",
    question: "Вставьте: A ___ casa fica no centro. (моя)",
    answer: "minha"
  },
  {
    type: "choice",
    question: "Как сказать «его машина» с уточнением, что именно его (а не её)?",
    options: ["o seu carro", "o carro dele", "o carro dela", "o carro seu"],
    correct: 1,
    explanation: "Для уточнения используют «dele» (его): o carro dele."
  },
  {
    type: "fill",
    question: "Вставьте два притяжательных: Os ___ livros são diferentes dos ___. (её собственные; её подруги)",
    answer: ["seus", "dela"]
  },
  {
    type: "fill",
    question: "Вставьте: A ___ mãe é professora. (его, формальное)",
    answer: "sua"
  },
  {
    type: "fill",
    question: "Вставьте: A ___ família é grande. (его, формальное)",
    answer: "sua"
  },
  {
    type: "fill",
    question: "Вставьте: O escritório ___ é moderno. (её, уточнение)",
    answer: "dela"
  },
  {
    type: "fill",
    question: "Вставьте: As ___ irmãs vivem no Porto. (мои)",
    answer: "minhas"
  },
  {
    type: "fill",
    question: "Вставьте: Os ___ amigos são portugueses. (твои)",
    answer: "teus"
  },
  // === Ex2: Перепишите с притяжательными формами ===
  {
    type: "translate",
    source: "Мой дом находится в Лиссабоне.",
    direction: "ru-pt",
    answer: ["A minha casa fica em Lisboa.", "A minha casa é em Lisboa."]
  },
  {
    type: "translate",
    source: "Наши дети учатся в школе.",
    direction: "ru-pt",
    answer: ["Os nossos filhos estudam na escola."]
  },
  {
    type: "translate",
    source: "Твоя сестра красивая.",
    direction: "ru-pt",
    answer: ["A tua irmã é bonita."]
  },
  {
    type: "translate",
    source: "Её муж работает в банке. (используйте «dela»)",
    direction: "ru-pt",
    answer: ["O marido dela trabalha no banco.", "O marido dela trabalha num banco."]
  },
  // === Ex3: Притяжательные в диалоге ===
  {
    type: "fill",
    question: "— Onde estão os ___ livros? (твои) — O ___ está aqui. (мой)",
    answer: ["teus", "meu"]
  },
  {
    type: "fill",
    question: "— A ___ casa é grande? (твоя) — Sim, o ___ jardim também. (мой)",
    answer: ["tua", "meu"]
  },
  {
    type: "choice",
    question: "— De quem é este carro? — É o carro ___. (его, уточнение)",
    options: ["seu", "dele", "meu", "nosso"],
    correct: 1,
    explanation: "Для уточнения «его» используют «dele»: É o carro dele."
  },
  {
    type: "fill",
    question: "— Os ___ pais moram aqui? (твои) — Sim, a ___ mãe está em casa. (моя)",
    answer: ["teus", "minha"]
  },
  {
    type: "fill",
    question: "— O ___ carro é novo? (твой) — Não, a ___ bicicleta é que é nova. (моя)",
    answer: ["teu", "minha"]
  },
  {
    type: "fill",
    question: "— Este é o ___ apartamento? (Ваш, формальное) — Sim, a cadeira ___ é bonita. (её, уточнение)",
    answer: ["seu", "dela"]
  },
  {
    type: "fill",
    question: "— A ___ filha estuda em Coimbra? (моя) — Sim, o ___ irmão também. (наш)",
    answer: ["minha", "nosso"]
  },
  {
    type: "fill",
    question: "— Os ___ amigos vêm à festa? (мои) — Sim, a ___ amiga Ana também vem. (наша)",
    answer: ["meus", "nossa"]
  },
  // === Ex4: Перевод предложений с притяжательными ===
  {
    type: "translate",
    source: "Где твои ключи?",
    direction: "ru-pt",
    answer: ["Onde estão as tuas chaves?", "Onde é que estão as tuas chaves?"]
  },
  {
    type: "translate",
    source: "Наша собака больше, чем ваша.",
    direction: "ru-pt",
    answer: ["O nosso cão é maior do que o vosso."]
  },
  {
    type: "translate",
    source: "Моя мать — врач.",
    direction: "ru-pt",
    answer: ["A minha mãe é médica."]
  },
  {
    type: "translate",
    source: "Их (муж.) дом находится рядом с нашим.",
    direction: "ru-pt",
    answer: ["A casa deles fica perto da nossa.", "A casa deles é perto da nossa."]
  },
  // === Ex5: seu/sua vs dele/dela ===
  {
    type: "fill",
    question: "Контекст ясен (формальное «Вы»): A ___ encomenda chegou. (Ваш заказ прибыл.)",
    answer: "sua"
  },
  {
    type: "fill",
    question: "Уточнение: A casa ___ é moderna. (её, именно её)",
    answer: "dela"
  },
  {
    type: "fill",
    question: "Контекст ясен (формальное «Вы»): O ___ bilhete está aqui. (Ваш билет здесь.)",
    answer: "seu"
  },
  {
    type: "choice",
    question: "Когда нужно использовать «dele/dela» вместо «seu/sua»?",
    options: [
      "Всегда",
      "Когда контекст неоднозначен",
      "Только в формальной речи",
      "Только с мн.ч."
    ],
    correct: 1,
    explanation: "«Seu/sua» может значить его/её/Ваш. «Dele/dela» уточняет, о ком речь."
  },
  {
    type: "fill",
    question: "Формальное: A ___ família é grande. (Ваша семья большая.)",
    answer: "sua"
  },
  {
    type: "fill",
    question: "Формальное: O ___ trabalho é interessante. (Ваша работа интересная.)",
    answer: "seu"
  },
  {
    type: "fill",
    question: "Формальное: O ___ nome, por favor? (Ваше имя, пожалуйста?)",
    answer: "seu"
  },
  {
    type: "fill",
    question: "Множественное: Os ___ filhos estudam bem. (Ваши дети хорошо учатся.)",
    answer: "seus"
  },
  {
    type: "match",
    question: "Соотнесите притяжательные местоимения (жен.р. ед.ч.):",
    pairs: [
      ["моя", "minha"],
      ["твоя", "tua"],
      ["его/её/Ваша", "sua"],
      ["наша", "nossa"],
      ["ваша (мн.ч.)", "vossa"]
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Его жена работает в больнице.»",
    words: ["A", "mulher", "dele", "trabalha", "no", "hospital"],
    answer: "A mulher dele trabalha no hospital."
  },
  {
    type: "order",
    question: "Составьте предложение: «Наш дом находится рядом с вашим.»",
    words: ["A", "nossa", "casa", "fica", "perto", "da", "vossa"],
    answer: "A nossa casa fica perto da vossa."
  }
];