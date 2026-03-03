export const exercises = [
  // === Ex1: Абсолютная превосходная степень (-íssimo) ===
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень (superlativo absoluto): velho → ___",
    answer: "velhíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: belo → ___",
    answer: "belíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: gordo → ___",
    answer: "gordíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: pequeno → ___",
    answer: "pequeníssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: azul → ___",
    answer: "azulíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: alto → ___",
    answer: "altíssimo"
  },
  {
    type: "choice",
    question: "Какая абсолютная превосходная форма от «baixo»?",
    options: ["baixíssimo", "baixissimo", "baixéssimo", "baixísimo"],
    correct: 0,
    explanation: "Baixo → baixíssimo. Суффикс -íssimo добавляется к основе прилагательного."
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: lindo → ___",
    answer: "lindíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: magro → ___",
    answer: "magríssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: estranho → ___",
    answer: "estranhíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: normal → ___",
    answer: "normalíssimo"
  },
  {
    type: "choice",
    question: "Какая абсолютная превосходная форма от «forte»?",
    options: ["fortéssimo", "fortissimo", "fortíssimo", "fortísimo"],
    correct: 2,
    explanation: "Forte → fortíssimo. Конечная гласная -e отпадает перед суффиксом -íssimo."
  },
  // === Ex2: Превосходные степени в женском роде, множественном числе и т.д. ===
  {
    type: "fill",
    question: "Образуйте превосходную степень в жен.р. мн.ч.: antigo → (as cidades) ___",
    answer: "antiquíssimas"
  },
  {
    type: "fill",
    question: "Образуйте превосходную степень в жен.р. мн.ч.: lindo → (as mulheres) ___",
    answer: "lindíssimas"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: lento → ___",
    answer: "lentíssimo"
  },
  {
    type: "choice",
    question: "Какая абсолютная превосходная форма от «amigo» (дружеский)?",
    options: ["amiguíssimo", "amicíssimo", "amigíssimo", "amigossíssimo"],
    correct: 1,
    explanation: "Amigo → amicíssimo. Буква g меняется на c перед суффиксом -íssimo (латинское чередование)."
  },
  {
    type: "fill",
    question: "Образуйте превосходную степень в жен.р. мн.ч.: rico → (as famílias) ___",
    answer: "riquíssimas"
  },
  {
    type: "fill",
    question: "Образуйте превосходную степень в жен.р. мн.ч.: curto → (as saias) ___",
    answer: "curtíssimas"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: triste → ___",
    answer: "tristíssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: moderno → ___",
    answer: "moderníssimo"
  },
  {
    type: "fill",
    question: "Образуйте абсолютную превосходную степень: inteligente → ___",
    answer: "inteligentíssimo"
  },
  // === Ex3: Сравнительные конструкции ===
  {
    type: "fill",
    question: "Заполните сравнительную конструкцию: O Pedro é ___ alto ___ o João. (такой же ... как)",
    answer: ["tão", "como"]
  },
  {
    type: "fill",
    question: "Заполните: A Maria é ___ inteligente ___ a irmã. (умнее, чем)",
    answer: ["mais", "do que"]
  },
  {
    type: "choice",
    question: "Как сказать «Лиссабон красивее, чем Порту»?",
    options: [
      "Lisboa é mais bonita do que o Porto.",
      "Lisboa é tão bonita como o Porto.",
      "Lisboa é menos bonita do que o Porto.",
      "Lisboa é a mais bonita do Porto."
    ],
    correct: 0,
    explanation: "Сравнительная конструкция «более ... чем»: mais + прилагательное + do que."
  },
  {
    type: "fill",
    question: "Заполните: Este livro é ___ interessante ___ aquele. (менее ... чем)",
    answer: ["menos", "do que"]
  },
  {
    type: "fill",
    question: "Заполните: Lisboa é a ___ cidade do país. (самый большой город)",
    answer: "maior"
  },
  {
    type: "match",
    question: "Соотнесите сравнительные конструкции с их значениями:",
    pairs: [
      ["tão ... como", "такой же ... как"],
      ["mais ... do que", "более ... чем"],
      ["menos ... do que", "менее ... чем"],
      ["o/a maior", "самый большой / наибольший"]
    ]
  },
  // === Ex4: Перевод предложений со сравнениями ===
  {
    type: "translate",
    source: "Она — худший человек в компании.",
    direction: "ru-pt",
    answer: ["Ela é a pior pessoa da empresa."]
  },
  {
    type: "translate",
    source: "Этот дом — самый большой в деревне.",
    direction: "ru-pt",
    answer: ["Esta casa é a maior da aldeia."]
  },
  {
    type: "translate",
    source: "Эти сады — самые большие в стране.",
    direction: "ru-pt",
    answer: ["Estes jardins são os maiores do país."]
  },
  {
    type: "translate",
    source: "Пауль чрезвычайно умный. (используйте абсолютную превосходную степень)",
    direction: "ru-pt",
    answer: ["O Paul é inteligentíssimo."]
  },
  {
    type: "translate",
    source: "Собака Сары такая же маленькая, как собака Питера.",
    direction: "ru-pt",
    answer: ["O cão da Sara é tão pequeno como o do Peter."]
  },
  // === Ex5: Текст о португальской кухне (сравнения и превосходные степени) ===
  {
    type: "order",
    question: "Составьте предложение: «Португальская кухня — одна из лучших в Европе.»",
    words: ["A", "cozinha", "portuguesa", "é", "uma", "das", "melhores", "da", "Europa"],
    answer: "A cozinha portuguesa é uma das melhores da Europa."
  },
  {
    type: "choice",
    question: "Какой тип степени сравнения в предложении «O bacalhau é o prato mais famoso de Portugal»?",
    options: [
      "Сравнительная (comparativo)",
      "Абсолютная превосходная (superlativo absoluto)",
      "Относительная превосходная (superlativo relativo)",
      "Степень равенства (igualdade)"
    ],
    correct: 2,
    explanation: "«O mais famoso de Portugal» — относительная превосходная степень, сравнение внутри определённой группы."
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
  }
];