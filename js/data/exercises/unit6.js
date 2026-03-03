export const exercises = [
  // Ex1: Fill correct interrogative (12 items)
  {
    type: "fill",
    question: "___ se chama o seu amigo? (Как зовут вашего друга?)",
    answer: "Como"
  },
  {
    type: "fill",
    question: "___ é aquela rapariga? (Кто та девушка?)",
    answer: "Quem"
  },
  {
    type: "fill",
    question: "___ há para o jantar? (Что на ужин?)",
    answer: "Que"
  },
  {
    type: "fill",
    question: "___ estuda o Paulo? (Что изучает Пауло?)",
    answer: "Que"
  },
  {
    type: "fill",
    question: "___ é que chegam os teus pais? (Когда приедут твои родители?)",
    answer: "Quando"
  },
  {
    type: "fill",
    question: "___ é o director da escola? (Кто директор школы?)",
    answer: "Quem"
  },
  {
    type: "choice",
    question: "Выберите правильное вопросительное слово: ___ fazem no fim-de-semana?",
    options: ["Quando", "Quem", "Que", "Onde"],
    correct: 2,
    explanation: "«Que» (что) используется для вопросов о действиях: «Что они делают в выходные?»"
  },
  {
    type: "fill",
    question: "___ é que vocês convidam para a festa? (Кого вы приглашаете на праздник?)",
    answer: "Quem"
  },
  {
    type: "fill",
    question: "___ é que fica a farmácia? (Где находится аптека?)",
    answer: "Onde"
  },
  {
    type: "fill",
    question: "___ é que a Ana traz na mala? (Что Ана несёт в сумке?)",
    answer: "Que"
  },
  {
    type: "choice",
    question: "Выберите правильное вопросительное слово: ___ fala ao telefone?",
    options: ["Que", "Onde", "Quem", "Quando"],
    correct: 2,
    explanation: "«Quem» (кто) — вопрос о человеке: «Кто говорит по телефону?»"
  },
  {
    type: "fill",
    question: "___ é que ela vai para o trabalho — de carro ou de autocarro? (Как она едет на работу?)",
    answer: "Como"
  },

  // Ex2: Full answers using elements (8 items)
  {
    type: "translate",
    source: "Onde está a Idalina?",
    direction: "pt-ru",
    answer: ["Идалина в школе.", "Идалина находится в школе."]
  },
  {
    type: "order",
    question: "Составьте полный ответ на вопрос «Onde está a Idalina?» — Она в школе.",
    words: ["A", "Idalina", "está", "na", "escola", "."],
    answer: "A Idalina está na escola."
  },
  {
    type: "order",
    question: "Составьте ответ: «В выходные мы едем в Виана-ду-Каштелу.»",
    words: ["No", "fim-de-semana", "nós", "vamos", "a", "Viana do Castelo", "."],
    answer: "No fim-de-semana nós vamos a Viana do Castelo."
  },
  {
    type: "translate",
    source: "Я сажусь на автобус в 17:30.",
    direction: "ru-pt",
    answer: ["Apanho o autocarro às 17h30.", "Eu apanho o autocarro às 17h30."]
  },
  {
    type: "translate",
    source: "Я иду в кино с Патрисией.",
    direction: "ru-pt",
    answer: ["Vou ao cinema com a Patrícia.", "Eu vou ao cinema com a Patrícia."]
  },
  {
    type: "order",
    question: "Составьте ответ: «Я собираюсь навестить маму завтра после обеда.»",
    words: ["Vou", "visitar", "a", "mãe", "amanhã", "de", "tarde", "."],
    answer: "Vou visitar a mãe amanhã de tarde."
  },
  {
    type: "translate",
    source: "По воскресеньям мы гуляем в парке.",
    direction: "ru-pt",
    answer: ["Ao domingo nós passeamos no parque.", "Ao domingo passeamos no parque."]
  },
  {
    type: "choice",
    question: "Как правильно ответить на «Quanto custa o bilhete?» — Билет стоит десять евро.",
    options: [
      "O bilhete é dez euros.",
      "O bilhete custa dez euros.",
      "O bilhete está dez euros.",
      "O bilhete tem dez euros."
    ],
    correct: 1,
    explanation: "«O bilhete custa dez euros» — правильный ответ с глаголом «custar» (стоить)."
  },

  // Ex3: Write full questions for given answers (10 items)
  {
    type: "translate",
    source: "Как тебя зовут? (ответ: Chamo-me Maria.)",
    direction: "ru-pt",
    answer: ["Como se chama?", "Como é que se chama?", "Como te chamas?"]
  },
  {
    type: "fill",
    question: "Вопрос к ответу «O Paulo é de Coimbra»: ___ é o Paulo?",
    answer: "Donde"
  },
  {
    type: "translate",
    source: "Что они отправляют? (ответ: Enviam uma encomenda.)",
    direction: "ru-pt",
    answer: ["O que enviam?", "O que é que enviam?", "Que enviam?"]
  },
  {
    type: "fill",
    question: "Вопрос к ответу «Falamos da professora»: De ___ falam?",
    answer: "quem"
  },
  {
    type: "translate",
    source: "О чём эта книга? (ответ: O livro trata de história.)",
    direction: "ru-pt",
    answer: ["De que trata o livro?", "De que é que trata o livro?"]
  },
  {
    type: "fill",
    question: "Вопрос к ответу «Vou de férias em agosto»: Em ___ mês vais de férias?",
    answer: "que"
  },
  {
    type: "translate",
    source: "Во сколько приходит поезд?",
    direction: "ru-pt",
    answer: ["A que horas chega o comboio?", "A que horas é que chega o comboio?"]
  },
  {
    type: "order",
    question: "Составьте вопрос: «Когда Ана выходит замуж за Педро?»",
    words: ["Quando", "casa", "a", "Ana", "com", "o", "Pedro", "?"],
    answer: "Quando casa a Ana com o Pedro?"
  },

  // Ex4: Build questions from elements (5 items)
  {
    type: "order",
    question: "Составьте вопрос: «Где живут друзья Катарины?»",
    words: ["Onde", "vivem", "os", "amigos", "da", "Catarina", "?"],
    answer: "Onde vivem os amigos da Catarina?"
  },
  {
    type: "order",
    question: "Составьте вопрос: «Во сколько приходит следующий поезд до Порту?»",
    words: ["A", "que", "horas", "chega", "o", "próximo", "comboio", "para", "o", "Porto", "?"],
    answer: "A que horas chega o próximo comboio para o Porto?"
  },
  {
    type: "translate",
    source: "Сколько человек работает на вашей фабрике?",
    direction: "ru-pt",
    answer: ["Quantas pessoas trabalham na sua fábrica?", "Quantas pessoas é que trabalham na sua fábrica?"]
  },
  {
    type: "translate",
    source: "Куда вы едете в отпуск?",
    direction: "ru-pt",
    answer: ["Para onde vão nas férias?", "Para onde é que vão nas férias?"]
  },
  {
    type: "order",
    question: "Составьте вопрос: «С кем Луиза проводит выходные?»",
    words: ["Com", "quem", "é", "que", "a", "Luísa", "passa", "os", "fins-de-semana", "?"],
    answer: "Com quem é que a Luísa passa os fins-de-semana?"
  },

  // Ex5: Mixed exercises on interrogatives
  {
    type: "match",
    question: "Соотнесите вопросительные слова с их переводом:",
    pairs: [
      { left: "Como", right: "Как" },
      { left: "Onde", right: "Где" },
      { left: "Quando", right: "Когда" },
      { left: "Quem", right: "Кто" },
      { left: "Quanto", right: "Сколько" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите вопрос с подходящим ответом:",
    pairs: [
      { left: "Onde mora?", right: "Em Lisboa." },
      { left: "Quando chega?", right: "Amanhã." },
      { left: "Quem é?", right: "O professor." },
      { left: "Como vai?", right: "De autocarro." },
      { left: "Que faz?", right: "Estudo português." }
    ]
  },
  {
    type: "choice",
    question: "Какой вопрос подходит к ответу «O Natal em Portugal é no dia 25 de dezembro»?",
    options: [
      "Onde é o Natal em Portugal?",
      "Quando é o Natal em Portugal?",
      "Como é o Natal em Portugal?",
      "Quem celebra o Natal?"
    ],
    correct: 1,
    explanation: "Ответ содержит дату (25 de dezembro), поэтому вопрос должен быть с «Quando» (когда)."
  },
  {
    type: "choice",
    question: "Какая конструкция характерна для европейского португальского в вопросах?",
    options: ["что это", "é que", "o que é", "quem está"],
    correct: 1,
    explanation: "Конструкция «é que» — типичная черта европейского португальского, ставится после вопросительного слова."
  }
];
