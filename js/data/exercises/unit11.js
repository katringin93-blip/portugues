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
  // --- Ex2 items 10–12 (из учебника) ---
  {
    type: "fill",
    question: "Заполните пропуск: «Filha, essa tua camisa é ___. Tens de comprar uma nova.»",
    answer: "velhíssima"
  },
  {
    type: "fill",
    question: "Заполните пропуск: «Vou acender a luz. Esta sala está ___.»",
    answer: "escuríssima"
  },
  {
    type: "fill",
    question: "Заполните пропуск: «A quinta do meu avô fica ___.»",
    answer: "longíssimo"
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
  // --- Ex3 items 3, 6, 7, 8 (из учебника) ---
  {
    type: "fill",
    question: "Заполните: O Pedro tem muito dinheiro e o João tem pouco. O Pedro é ___ rico ___ o João.",
    answer: ["mais", "do que"]
  },
  {
    type: "fill",
    question: "Заполните: A Maria tem dois filhos e a cunhada tem quatro. A Maria tem ___ filhos ___ a cunhada.",
    answer: ["menos", "do que"]
  },
  {
    type: "fill",
    question: "Заполните: Portugal é um país ___ pequeno ___ a Inglaterra.",
    answer: ["mais", "do que"]
  },
  {
    type: "fill",
    question: "Заполните: O Rui tem 30 anos, o Ricardo tem 20. O Rui é ___ velho ___ o Ricardo.",
    answer: ["mais", "do que"]
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
  // --- Ex4 items 6–10 (из учебника) ---
  {
    type: "translate",
    source: "Эта книга чрезвычайно интересная. (используйте абсолютную превосходную степень)",
    direction: "ru-pt",
    answer: ["Este livro é extremamente interessante.", "Este livro é interessantíssimo."]
  },
  {
    type: "translate",
    source: "Деревня Сары меньше, чем эта.",
    direction: "ru-pt",
    answer: ["A aldeia da Sara é mais pequena do que esta."]
  },
  {
    type: "translate",
    source: "Кэтрин — чрезвычайно грустная женщина.",
    direction: "ru-pt",
    answer: ["A Catherine é uma mulher extremamente triste.", "A Catherine é uma mulher tristíssima."]
  },
  {
    type: "translate",
    source: "У Джона более тёмные волосы, чем у Мэри.",
    direction: "ru-pt",
    answer: ["O John tem cabelo mais escuro do que a Mary."]
  },
  {
    type: "translate",
    source: "Те деревья такие же старые, как и высокие.",
    direction: "ru-pt",
    answer: ["Estas árvores são tão antigas como altas.", "Estas árvores são tão antigas quanto altas."]
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
  },
  // === Ex5b: Перепишите предложения, используя сравнения и превосходные степени (из учебника) ===
  {
    type: "fill",
    question: "Усильте прилагательное: «A culinária dos países de expressão portuguesa é rica em ingredientes.» → «...é ___ em ingredientes.»",
    answer: "riquíssima"
  },
  {
    type: "fill",
    question: "Сравните (равенство): «As tradições culinárias de Portugal e também as dos outros países de expressão portuguesa utilizam legumes e frutos frescos.» → «Tanto as tradições culinárias de Portugal ___ as dos outros países ... utilizam legumes e frutos frescos.»",
    answer: "como"
  },
  {
    type: "fill",
    question: "Перепишите, используя «menos ... do que»: «A culinária das regiões costeiras de cada país usa muito mais peixe do que carne.» → «...usa muito ___ carne ___ peixe.»",
    answer: ["menos", "do que"]
  },
  {
    type: "fill",
    question: "Усильте прилагательное: «As tradições culinárias de todos estes países favorecem o uso de legumes e frutos frescos.» → «...legumes e frutos ___.»",
    answer: "fresquíssimos"
  },
  {
    type: "fill",
    question: "Сравните (равенство): «A culinária dos países africanos é muito exótica, mas a culinária do Brasil também é.» → «A culinária dos países africanos é ___ exótica ___ a culinária do Brasil.»",
    answer: ["tão", "como"]
  },
  {
    type: "fill",
    question: "Перепишите с «menos»: «As comidas desses países são mais tropicais que as comidas portuguesas.» → «As comidas portuguesas são as ___ tropicais.»",
    answer: "menos"
  },
  {
    type: "fill",
    question: "Сравните (больше): «A culinária angolana é influenciada pela culinária moçambicana e pela portuguesa.» → «A culinária angolana é ___ influenciada pela culinária moçambicana ___ pela portuguesa.»",
    answer: ["mais", "do que"]
  },
  {
    type: "fill",
    question: "Усильте наречие: «Ingredientes como o sorgo, painço, castanha de caju, mandioca, melancia, papaia e côco são muito usados em pratos angolanos e moçambicanos.» → «...são ___ usados...»",
    answer: "muitíssimo"
  }
];