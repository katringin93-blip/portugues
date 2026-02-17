export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Какая неправильная сравнительная форма у «mau»?",
    options: ["mais mau", "pior", "menor", "melhor"],
    correct: 1,
    explanation: "Неправильная сравнительная форма «mau» (плохой) — «pior» (хуже)."
  },
  {
    type: "fill",
    question: "Лиссабон больше, чем Порту: Lisboa é ___ do que o Porto.",
    answer: "maior"
  },
  {
    type: "translate",
    source: "Это лучший ресторан в городе.",
    direction: "ru-pt",
    answer: ["Este é o melhor restaurante da cidade.", "É o melhor restaurante da cidade."]
  },
  {
    type: "choice",
    question: "Как сказать «такой же красивый, как»?",
    options: ["mais bonito do que", "tão bonito como", "o mais bonito", "menos bonito"],
    correct: 1,
    explanation: "Конструкция равенства: «tão ... como» (такой же ... как)."
  },
  {
    type: "fill",
    question: "Абсолютная превосходная от «rico»: ___",
    answer: "riquíssimo"
  },
  // === New exercises: Comparatives ===
  {
    type: "fill",
    question: "Пётр выше Жуана: O Pedro é mais ___ do que o João.",
    answer: "alto"
  },
  {
    type: "choice",
    question: "Какая неправильная сравнительная форма у «bom»?",
    options: ["mais bom", "melhor", "maior", "menor"],
    correct: 1,
    explanation: "Неправильная сравнительная форма «bom» (хороший) — «melhor» (лучше)."
  },
  {
    type: "fill",
    question: "Она менее терпеливая, чем мать: Ela é ___ paciente do que a mãe.",
    answer: "menos"
  },
  {
    type: "choice",
    question: "Как образовать сравнительную степень «pequeno» (маленький)?",
    options: ["mais pequeno / menor", "menos pequeno", "pequeníssimo", "o mais pequeno"],
    correct: 0,
    explanation: "У «pequeno» есть две формы: регулярная «mais pequeno» и нерегулярная «menor»."
  },
  {
    type: "translate",
    source: "Моя машина быстрее, чем твоя.",
    direction: "ru-pt",
    answer: ["O meu carro é mais rápido do que o teu.", "O meu carro é mais rápido que o teu."]
  },
  {
    type: "fill",
    question: "Этот фильм такой же интересный, как та книга: Este filme é ___ interessante como aquele livro.",
    answer: "tão"
  },
  {
    type: "choice",
    question: "Как сказать «Она самая умная в классе»?",
    options: ["Ela é a mais inteligente da turma.", "Ela é mais inteligente da turma.", "Ela é a mais inteligente que a turma.", "Ela é tão inteligente como a turma."],
    correct: 0,
    explanation: "Превосходная степень: артикль + mais + прилагательное + de (da/do): «a mais inteligente da turma»."
  },
  {
    type: "fill",
    question: "Неправильная сравнительная форма «grande» (в значении «старший»): ___",
    answer: "maior"
  },
  {
    type: "translate",
    source: "Этот дом хуже того.",
    direction: "ru-pt",
    answer: ["Esta casa é pior do que aquela.", "Esta casa é pior que aquela."]
  },
  {
    type: "choice",
    question: "Какой предлог используется после превосходной степени: «o mais bonito ___ cidade»?",
    options: ["do que a", "da", "que a", "como a"],
    correct: 1,
    explanation: "После превосходной степени используется «de» (da/do/das/dos): «o mais bonito da cidade»."
  },
  // === Absolute superlative ===
  {
    type: "fill",
    question: "Абсолютная превосходная от «fácil»: ___",
    answer: "facílimo"
  },
  {
    type: "fill",
    question: "Абсолютная превосходная от «difícil»: ___",
    answer: "dificílimo"
  },
  {
    type: "choice",
    question: "Как образуется абсолютная превосходная степень (superlativo absoluto sintético)?",
    options: ["muito + прилагательное", "основа + -íssimo/-íssima", "o mais + прилагательное", "mais + прилагательное + do que"],
    correct: 1,
    explanation: "Абсолютная превосходная образуется суффиксом -íssimo/-íssima: lindo → lindíssimo."
  },
  {
    type: "fill",
    question: "Абсолютная превосходная от «bom»: ___",
    answer: "ótimo"
  },
  {
    type: "fill",
    question: "Абсолютная превосходная от «mau»: ___",
    answer: "péssimo"
  },
  {
    type: "translate",
    source: "Он очень высокий (используйте превосходную абсолютную степень).",
    direction: "ru-pt",
    answer: ["Ele é altíssimo."]
  },
  // === Equality comparisons ===
  {
    type: "fill",
    question: "У него столько же денег, сколько у неё: Ele tem ___ dinheiro como ela.",
    answer: "tanto"
  },
  {
    type: "choice",
    question: "Как сказать «столько же книг, сколько»?",
    options: ["tão livros como", "tantos livros como", "tanto livros como", "tantas livros como"],
    correct: 1,
    explanation: "С исчисляемыми существительными: tanto/tanta/tantos/tantas + сущ. + como. «Livros» — муж. мн.ч. → tantos."
  },
  {
    type: "translate",
    source: "Она работает столько же, сколько он.",
    direction: "ru-pt",
    answer: ["Ela trabalha tanto como ele."]
  },
  {
    type: "fill",
    question: "У нас столько же подруг, сколько у них: Nós temos ___ amigas como eles.",
    answer: "tantas"
  },
  // === Mixed comparison exercises ===
  {
    type: "choice",
    question: "«O João é o aluno mais inteligente da escola.» Какой тип степени сравнения?",
    options: ["Сравнительная (comparativo)", "Абсолютная превосходная (superlativo absoluto)", "Относительная превосходная (superlativo relativo)", "Степень равенства (igualdade)"],
    correct: 2,
    explanation: "«O mais inteligente da escola» — относительная превосходная степень (superlativo relativo)."
  },
  {
    type: "translate",
    source: "Португалия меньше Бразилии.",
    direction: "ru-pt",
    answer: ["Portugal é mais pequeno do que o Brasil.", "Portugal é menor do que o Brasil.", "Portugal é menor que o Brasil."]
  },
  {
    type: "fill",
    question: "Это менее дорогой ресторан: Este é o restaurante ___ caro.",
    answer: "menos"
  },
  {
    type: "match",
    question: "Соотнесите неправильные формы сравнительной степени:",
    pairs: [
      ["bom", "melhor"],
      ["mau", "pior"],
      ["grande", "maior"],
      ["pequeno", "menor"]
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Мария самая красивая девушка в школе.»",
    words: ["A", "Maria", "é", "a", "mais", "bonita", "da", "rapariga", "escola"],
    answer: "A Maria é a rapariga mais bonita da escola."
  },
  {
    type: "fill",
    question: "Абсолютная превосходная от «grande»: ___",
    answer: "máximo"
  },
  {
    type: "translate",
    source: "Этот кофе такой же хороший, как тот.",
    direction: "ru-pt",
    answer: ["Este café é tão bom como aquele."]
  },
  {
    type: "choice",
    question: "Как сказать «всё больше и больше» по-португальски?",
    options: ["mais e mais", "cada vez mais", "muito mais", "o mais possível"],
    correct: 1,
    explanation: "Конструкция «cada vez mais» означает «всё больше и больше»."
  },
  {
    type: "fill",
    question: "Абсолютная превосходная от «pequeno»: ___",
    answer: "mínimo"
  },
  {
    type: "translate",
    source: "Это самое красивое здание в городе.",
    direction: "ru-pt",
    answer: ["Este é o edifício mais bonito da cidade.", "É o edifício mais bonito da cidade."]
  }
];
