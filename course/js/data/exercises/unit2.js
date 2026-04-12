export const exercises = [
  // === Ex2: Fill a/o/um/uma (12 items) ===
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ casa é grande. (определённый)",
    answer: "A"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ carro é novo. (определённый)",
    answer: "O"
  },
  {
    type: "choice",
    question: "Какой артикль подходит? Eu tenho ___ livro. (неопределённый)",
    options: ["o", "a", "um", "uma"],
    correct: 2,
    explanation: "Livro — мужского рода, неопределённый артикль мужского рода — «um»: um livro."
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: Ela comprou ___ mesa. (неопределённый)",
    answer: "uma"
  },
  {
    type: "choice",
    question: "Какие артикли подходят? ___ João tem ___ carro novo. (определённый + неопределённый)",
    options: ["A ... um", "O ... um", "O ... uma", "Um ... o"],
    correct: 1,
    explanation: "Перед мужскими именами используется «O»: O João. Carro — мужского рода, неопределённый артикль — «um»."
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: Há ___ escola perto daqui. (неопределённый)",
    answer: "uma"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: Ele tem ___ irmã mais nova. (неопределённый)",
    answer: "uma"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ tempo está bom. (определённый)",
    answer: "O"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ Maria é professora. (определённый)",
    answer: "A"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ Porto é uma cidade bonita. (определённый)",
    answer: "O"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ Rio Tejo é longo. (определённый)",
    answer: "O"
  },
  {
    type: "fill",
    question: "Вставьте правильный артикль: ___ comida está pronta. (определённый)",
    answer: "A"
  },

  // === Ex3: Match (8 items — converted to match exercises) ===
  {
    type: "match",
    question: "Соотнесите выражения с правильным артиклем (определённый или неопределённый):",
    pairs: [
      { left: "___ menino (конкретный мальчик)", right: "o menino" },
      { left: "___ casa (какой-то дом)", right: "uma casa" },
      { left: "___ livros (конкретные книги)", right: "os livros" },
      { left: "___ cidade (какой-то город)", right: "uma cidade" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите существительные с правильным определённым артиклем:",
    pairs: [
      { left: "professor", right: "o" },
      { left: "escola", right: "a" },
      { left: "carros", right: "os" },
      { left: "cidades", right: "as" }
    ]
  },

  // === Ex4: Fill contractions (11 items) ===
  {
    type: "fill",
    question: "Вставьте слияние: Ele mora ___ cidade pequena. (em + uma)",
    answer: "numa"
  },
  {
    type: "fill",
    question: "Вставьте слияние: Ela trabalha ___ hospital. (em + um)",
    answer: "num"
  },
  {
    type: "choice",
    question: "Какое слияние правильное? O livro está ___ mesa. (em + a)",
    options: ["na", "no", "numa", "da"],
    correct: 0,
    explanation: "Предлог «em» + определённый артикль «a» = «na»: na mesa (на столе)."
  },
  {
    type: "fill",
    question: "Вставьте слияние: Estou ___ cozinha. (em + a)",
    answer: "na"
  },
  {
    type: "fill",
    question: "Вставьте слияние: O carro ___ Pedro é vermelho. (de + o)",
    answer: "do"
  },
  {
    type: "fill",
    question: "Вставьте слияние: Ele saiu ___ casa velha. (de + uma)",
    answer: "duma"
  },
  {
    type: "choice",
    question: "Какое слияние правильное? Passámos ___ parque. (por + o)",
    options: ["polo", "pelo", "pro", "poro"],
    correct: 1,
    explanation: "Предлог «por» + определённый артикль «o» = «pelo»: pelo parque (через парк)."
  },
  {
    type: "fill",
    question: "Вставьте слияние: As crianças brincam ___ ruas. (em + as)",
    answer: "nas"
  },
  {
    type: "fill",
    question: "Вставьте слияние: Estamos ___ centro da cidade. (em + o)",
    answer: "no"
  },
  {
    type: "fill",
    question: "Вставьте слияние: Vivemos ___ arredores de Lisboa. (em + os)",
    answer: "nos"
  },
  {
    type: "fill",
    question: "Вставьте слияние: Andámos ___ cidade toda. (por + a)",
    answer: "pela"
  },

  // === Ex5: Fill article/contraction in text (partial set, mixed types) ===
  {
    type: "fill",
    question: "Заполните: ___ Pedro é estudante. (определённый артикль м.р.)",
    answer: "O"
  },
  {
    type: "choice",
    question: "Какой артикль/слияние подходит? Ele é ___ Brasil. (de + o)",
    options: ["do", "da", "no", "de o"],
    correct: 0,
    explanation: "«De» + «o» сливаются в «do»: Ele é do Brasil (Он из Бразилии)."
  },
  {
    type: "fill",
    question: "Заполните: Ele estuda ___ Universidade de Lisboa. (em + a)",
    answer: "na"
  },
  {
    type: "fill",
    question: "Заполните: ___ curso é interessante. (определённый артикль м.р.)",
    answer: "O"
  },
  {
    type: "fill",
    question: "Заполните: As aulas ___ Pedro começam às nove. (de + o)",
    answer: "do"
  },
  {
    type: "fill",
    question: "Заполните: Ele gosta ___ cidade. (de + a)",
    answer: "da"
  },

  // === Additional mixed exercises to reach ~30 ===
  {
    type: "match",
    question: "Соотнесите слияния предлогов с артиклями:",
    pairs: [
      { left: "de + o", right: "do" },
      { left: "em + a", right: "na" },
      { left: "por + o", right: "pelo" },
      { left: "a + a", right: "à" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите слияния предлога «em» с неопределёнными артиклями:",
    pairs: [
      { left: "em + um", right: "num" },
      { left: "em + uma", right: "numa" },
      { left: "em + uns", right: "nuns" },
      { left: "em + umas", right: "numas" }
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Книга преподавателя на столе».",
    words: ["na", "do", "O", "professor", "livro", "mesa", "está"],
    answer: "O livro do professor está na mesa"
  },
  {
    type: "translate",
    source: "Дети играют в парке.",
    direction: "ru-pt",
    answer: ["As crianças brincam no parque."]
  },
  {
    type: "choice",
    question: "Когда НЕ используется определённый артикль в португальском?",
    options: ["Перед именами: O João é alto", "С днями недели: na segunda-feira", "После глагола falar с языком: Falo português", "Перед странами: O Brasil é grande"],
    correct: 2,
    explanation: "После глагола «falar» артикль перед языком обычно опускается: Falo português (Я говорю по-португальски)."
  },
  {
    type: "translate",
    source: "Мы живём в Португалии.",
    direction: "ru-pt",
    answer: ["Nós moramos em Portugal.", "Moramos em Portugal.", "Nós vivemos em Portugal.", "Vivemos em Portugal."]
  },
  {
    type: "order",
    question: "Составьте предложение: «Я иду в университет».",
    words: ["à", "Eu", "vou", "universidade"],
    answer: "Eu vou à universidade"
  },
  {
    type: "choice",
    question: "Какое слияние правильное для «de + as»?",
    options: ["dos", "das", "nas", "pas"],
    correct: 1,
    explanation: "Предлог «de» + артикль «as» = «das». Например: das flores (цветов)."
  },
  {
    type: "fill",
    question: "Вставьте слияние: Vou ___ praia amanhã. (a + a)",
    answer: "à"
  },
  {
    type: "choice",
    question: "Какое слияние правильное для «a + os»?",
    options: ["os", "dos", "nos", "aos"],
    correct: 3,
    explanation: "Предлог «a» + артикль «os» = «aos». Например: aos domingos (по воскресеньям)."
  },
  {
    type: "match",
    question: "Соотнесите слияния предлога «de» с артиклями:",
    pairs: [
      { left: "de + o", right: "do" },
      { left: "de + a", right: "da" },
      { left: "de + os", right: "dos" },
      { left: "de + as", right: "das" }
    ]
  },
  {
    type: "fill",
    question: "Вставьте слияние: Ele vem ___ escola. (de + a)",
    answer: "da"
  },
  {
    type: "translate",
    source: "Она работает в больнице.",
    direction: "ru-pt",
    answer: ["Ela trabalha no hospital.", "Ela trabalha num hospital."]
  }
];
