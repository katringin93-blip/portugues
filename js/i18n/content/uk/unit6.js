export default {
  title: "Питальні слова",
  description: "Питальні займенники та прислівники, побудова питань",
  theory: [
    {
      heading: "Питальні слова (Palavras interrogativas)",
      text: "Питальні слова в португальській ставляться на початок речення. У європейській португальській порядок слів у питанні часто інвертується: дієслово ставиться перед підметом."
    },
    {
      table: {
        headers: ["Португальська", "Українська", "Приклад"],
        rows: [
          ["Quem?", "Хто?", "Quem é ele?"],
          ["O que? / Que?", "Що?", "O que fazes?"],
          ["Onde?", "Де?", "Onde moras?"],
          ["Quando?", "Коли?", "Quando chegas?"],
          ["Como?", "Як?", "Como te chamas?"],
          ["Porquê? / Por que?", "Чому?", "Porquê não vens?"],
          ["Qual? / Quais?", "Який? / Які?", "Qual é o teu nome?"],
          ["Quanto/a?", "Скільки?", "Quanto custa?"],
          ["Quantos/as?", "Скільки? (мн.)", "Quantos anos tens?"]
        ]
      }
    },
    {
      heading: "Побудова питань",
      text: "У португальській мові є три способи поставити питання: 1) за допомогою інтонації (стверджувальне речення з питальною інтонацією), 2) за допомогою інверсії (дієслово + підмет), 3) за допомогою питальних слів."
    },
    {
      examples: [
        { pt: "Como te chamas?", ru: "Як тебе звати?" },
        { pt: "Onde é que moras?", ru: "Де ти живеш?" },
        { pt: "Quantos anos tens?", ru: "Скільки тобі років?" },
        { pt: "Qual é a tua profissão?", ru: "Яка в тебе професія?" },
        { pt: "Quanto custa este livro?", ru: "Скільки коштує ця книжка?" }
      ]
    },
    {
      note: "Конструкція «é que» — характерна риса європейської португальської. Вона вставляється після питального слова і не перекладається: «Onde é que moras?» = «Onde moras?» (Де ти живеш?)."
    }
  ],
  vocabulary: [
    { ru: "хто" },
    { ru: "що" },
    { ru: "де" },
    { ru: "коли" },
    { ru: "як" },
    { ru: "чому" },
    { ru: "який / які" },
    { ru: "скільки" },
    { ru: "квиток" },
    { ru: "професія" }
  ],
  flashcards: [
    { ru: "Хто?", hint: "питальний займенник" },
    { ru: "Де?", hint: "питальний прислівник місця" },
    { ru: "Коли?", hint: "питальний прислівник часу" },
    { ru: "Як?", hint: "питальний прислівник способу дії" },
    { ru: "Чому?", hint: "у кінці фрази; Por que — на початку" },
    { ru: "Який?", hint: "мн.: Quais?" },
    { ru: "Скільки?", hint: "жін. р.: Quanta? мн.: Quantos/as?" },
    { ru: "квиток", hint: "чоловічий рід" },
    { ru: "більшість", hint: "жіночий рід" },
    { ru: "дикий, суворий", hint: "незмінний за родом" },
    { ru: "завтра вдень", hint: "вираз часу" },
    { ru: "спокійний", hint: "ж.р.: calma" },
    { ru: "листи", hint: "ж.р. мн." },
    { ru: "одружуватися", hint: "дієслово" },
    { ru: "однак, проте", hint: "сполучник" },
    { ru: "узбережжя Алентежу", hint: "ж.р." },
    { ru: "звичай, звичка", hint: "чоловічий рід" },
    { ru: "коштувати", hint: "дієслово" },
    { ru: "незабаром", hint: "прислівник часу" },
    { ru: "закривати", hint: "дієслово" },
    { ru: "вихідний", hint: "жіночий рід" },
    { ru: "відвідувати", hint: "дієслово" },
    { ru: "проводити відпустку", hint: "вираз" },
    { ru: "кращі", hint: "мн. від melhor" },
    { ru: "наразі", hint: "вираз часу" },
    { ru: "новий; молодий", hint: "ж.р.: nova" },
    { ru: "гуляти в парку", hint: "вираз" },
    { ru: "період", hint: "чоловічий рід" },
    { ru: "популярні", hint: "незмінний за родом" },
    { ru: "на тиждень", hint: "вираз частоти" },
    { ru: "наступний місяць", hint: "ч.р." },
    { ru: "стільки", hint: "ж.р. мн. від tanto" },
    { ru: "температури", hint: "ж.р. мн." },
    { ru: "типово, зазвичай", hint: "прислівник" },
    { ru: "щотижня", hint: "вираз частоти" },
    { ru: "вся країна", hint: "ч.р." },
    { ru: "оскільки", hint: "сполучник причини" },
    { ru: "прибережна зона", hint: "ж.р." },
  ],
  exercises: [
    // 1 - choice
    { question: "Яке питальне слово підходить? ___ custa o bilhete?", options: ["Quando", "Quanto", "Como", "Qual"], explanation: "«Quanto» (скільки) використовується для запитань про ціну та кількість." },
    // 2 - fill
    { question: "Перекладіть питальне слово: Хто? = ___" },
    // 3 - translate ru-pt
    { source: "Де ти працюєш?" },
    // 4 - choice
    { question: "Яка конструкція характерна для європейської португальської?", options: ["що це", "é que", "o que é", "quem está"], explanation: "Конструкція «é que» — типова риса європейської португальської, що вживається після питального слова." },
    // 5 - fill
    { question: "___ é o teu nome? (Яке)" },
    // 6 - choice
    { question: "___ é que tu moras? (Де ти живеш?)", options: ["Quem", "O que", "Onde", "Quando"], explanation: "«Onde» (де) використовується для запитань про місце." },
    // 7 - fill
    { question: "___ é que aconteceu? (Що сталося?)" },
    // 8 - match
    { question: "Співвіднесіть питальні слова з їх перекладом:", pairs: [{ left: "Quem", right: "Хто" }, { left: "Onde", right: "Де" }, { left: "Quando", right: "Коли" }, { left: "Como", right: "Як" }, { left: "Porquê", right: "Чому" }] },
    // 9 - translate ru-pt
    { source: "Хто цей чоловік?" },
    // 10 - choice
    { question: "___ livros tens? (Скільки в тебе книжок?)", options: ["Quanto", "Quantas", "Quantos", "Quais"], explanation: "«Quantos» — чоловічий рід множини, узгоджується з «livros»." },
    // 11 - fill
    { question: "___ pessoas estão na sala? (Скільки людей у залі?)" },
    // 12 - translate ru-pt
    { source: "Коли починається урок?" },
    // 13 - choice
    { question: "Оберіть правильне запитання: «___ é que vocês vão de férias?» — «Em agosto.»", options: ["Onde", "Como", "Quando", "Quem"], explanation: "Відповідь «Em agosto» (У серпні) вказує на час, тому потрібно «Quando» (коли)." },
    // 14 - order
    { question: "Складіть запитання: «Як тебе звати?»" },
    // 15 - fill
    { question: "___ é que não vieste à festa? (Чому ти не прийшов на свято?)" },
    // 16 - choice
    { question: "Яка форма «porquê» використовується на початку питання (перед «é que»)?", options: ["porquê", "porque", "por quê", "por que"], explanation: "На початку питання перед «é que» використовується «porque» (разом, без наголосу): «Porque é que...?»" },
    // 17 - translate ru-pt
    { source: "Як ти дістаєшся до роботи?" },
    // 18 - match
    { question: "Співвіднесіть форми «quanto» з родом та числом:", pairs: [{ left: "quanto", right: "ч.р. одн." }, { left: "quanta", right: "ж.р. одн." }, { left: "quantos", right: "ч.р. мн." }, { left: "quantas", right: "ж.р. мн." }] },
    // 19 - choice
    { question: "«___ são os teus pais?» — «São o João e a Maria.»", options: ["O que", "Quem", "Qual", "Como"], explanation: "«Quem» (хто) — запитання про людей. «Quem são os teus pais?» — Хто твої батьки?" },
    // 20 - fill
    { question: "___ é o teu carro — o azul ou o vermelho? (Який)" },
    // 21 - translate ru-pt
    { source: "Які фільми тобі подобаються?" },
    // 22 - order
    { question: "Складіть запитання: «Де знаходиться банк?»" },
    // 23 - choice
    { question: "«___ água queres?» — Скільки води ти хочеш?", options: ["Quanto", "Quantos", "Quanta", "Quantas"], explanation: "«Água» — жіночий рід однини, тому «quanta»." },
    // 24 - fill
    { question: "___ são as chaves? (Чиї це ключі? / Кому належать ключі?)" },
    // 25 - translate ru-pt
    { source: "Що ти робиш?" },
    // 26 - choice
    { question: "Яке запитання побудоване правильно?", options: ["Onde tu é que moras?", "Onde é que tu moras?", "Onde é tu que moras?", "Tu onde é que moras?"], explanation: "Конструкція «é que» ставиться одразу після питального слова: «Onde é que tu moras?»" },
    // 27 - fill
    { question: "___ horas são? (Котра година?)" },
    // 28 - translate ru-pt
    { source: "Чому ти вивчаєш португальську?" },
    // 29 - order
    { question: "Складіть запитання: «Скільки це коштує?»" },
    // 30 - choice
    { question: "«___ preferes — café ou chá?» (Що ти волієш?)", options: ["Quem", "Qual", "O que", "Como"], explanation: "«Qual» (який/котрий) використовується при виборі з конкретних варіантів." }
  ]
};
