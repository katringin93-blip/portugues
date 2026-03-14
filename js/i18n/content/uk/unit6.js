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
    },
    {
      heading: "Підсилення питання з «é que»",
      text: "В європейській португальській часто додають конструкцію «é que» після питального слова для підсилення питання. Це не змінює значення, але звучить природніше в розмовній мові."
    },
    {
      examples: [
        { pt: "Que horas é que são?", ru: "Котра година?" },
        { pt: "Quanto tempo é que demora a viagem?", ru: "Скільки часу займає подорож?" },
        { pt: "Como é que se chama?", ru: "Як вас звати?" },
        { pt: "Porque é que fazem tantas perguntas?", ru: "Чому ви задаєте стільки питань?" }
      ]
    },
    {
      heading: "Прийменники з питальними словами",
      text: "Питальні слова que, onde та quem можуть вживатися з прийменниками. Прийменник ставиться перед питальним словом."
    },
    {
      table: {
        headers: ["Конструкція", "Приклад", "Переклад"],
        rows: [
          ["a que", "A que horas começas a trabalhar?", "О котрій ти починаєш працювати?"],
          ["de que", "De que falas?", "Про що ти говориш?"],
          ["em que", "Em que cidade vives?", "В якому місті ти живеш?"],
          ["aonde (a + onde)", "Aonde vais?", "Куди ти йдеш?"],
          ["donde (de + onde)", "Donde vem o João?", "Звідки Жуау?"],
          ["para onde", "Para onde vais viver?", "Куди ти переїжджаєш?"],
          ["a quem", "A quem dizes isso?", "Кому ти це кажеш?"],
          ["com quem", "Com quem estás a falar?", "З ким ти розмовляєш?"],
          ["de quem", "De quem estás a falar?", "Про кого ти розмовляєш?"],
          ["para quem", "Para quem trabalha a Isabel?", "На кого працює Ізабел?"]
        ]
      }
    },
    {
      note: "На відміну від української, в португальській прийменник ставиться на початку питання, перед питальним словом: «De que falas?» (Про що говориш?), а не *«Que de falas?»."
    }
  ],
  lessons: [
    { title: "Частина 1: Питальні слова" },
    { title: "Частина 2: «É que» і прийменники" }
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
  exercises: [
    // Ex1: Fill correct interrogative (12 items)
    { question: "___ se chama o seu amigo? (Як звати вашого друга?)" },
    { question: "___ é aquela rapariga? (Хто та дівчина?)" },
    { question: "___ há para o jantar? (Що на вечерю?)" },
    { question: "___ estuda o Paulo? (Що вивчає Пауло?)" },
    { question: "___ é que chegam os teus pais? (Коли приїдуть твої батьки?)" },
    { question: "___ é o director da escola? (Хто директор школи?)" },
    {
      question: "Виберіть правильне питальне слово: ___ fazem no fim-de-semana?",
      explanation: "«Que» (що) використовується для запитань про дії: «Що вони роблять у вихідні?»"
    },
    { question: "___ é que vocês convidam para a festa? (Кого ви запрошуєте на свято?)" },
    { question: "___ é que fica a farmácia? (Де знаходиться аптека?)" },
    { question: "___ é que a Ana traz na mala? (Що Ана несе в сумці?)" },
    {
      question: "Виберіть правильне питальне слово: ___ fala ao telefone?",
      explanation: "«Quem» (хто) — запитання про людину: «Хто говорить по телефону?»"
    },
    { question: "___ é que ela vai para o trabalho — de carro ou de autocarro? (Як вона їде на роботу?)" },

    // Ex2: Full answers using elements (8 items)
    { source: "Де Ідаліна?" },
    { question: "Складіть повну відповідь на питання «Onde está a Idalina?» — Вона в школі." },
    { question: "Складіть відповідь: «У вихідні ми їдемо до Віана-ду-Каштелу.»" },
    { source: "Я сідаю на автобус о 17:30." },
    { source: "Я йду в кіно з Патрісією." },
    { question: "Складіть відповідь: «Я збираюся провідати маму завтра вдень.»" },
    { source: "По неділях ми гуляємо в парку." },
    {
      question: "Як правильно відповісти на «Quanto custa o bilhete?» — Квиток коштує десять євро.",
      explanation: "«O bilhete custa dez euros» — правильна відповідь з дієсловом «custar» (коштувати)."
    },

    // Ex3: Write full questions for given answers (10 items)
    { source: "Як тебе звати? (відповідь: Chamo-me Maria.)" },
    { question: "Питання до відповіді «O Paulo é de Coimbra»: ___ é o Paulo?" },
    { source: "Що вони надсилають? (відповідь: Enviam uma encomenda.)" },
    { question: "Питання до відповіді «Falamos da professora»: De ___ falam?" },
    { source: "Про що ця книга? (відповідь: O livro trata de história.)" },
    { question: "Питання до відповіді «Vou de férias em agosto»: Em ___ mês vais de férias?" },
    { source: "О котрій годині прибуває потяг?" },
    { question: "Складіть питання: «Коли Ана виходить заміж за Педро?»" },

    // Ex4: Build questions from elements (5 items)
    { question: "Складіть питання: «Де живуть друзі Катаріни?»" },
    { question: "Складіть питання: «О котрій годині прибуває наступний потяг до Порту?»" },
    { source: "Скільки людей працює на вашій фабриці?" },
    { source: "Куди ви їдете у відпустку?" },
    { question: "Складіть питання: «З ким Луїза проводить вихідні?»" },

    // Ex5: Mixed exercises on interrogatives
    {
      question: "Зіставте питальні слова з їх перекладом:",
      pairs: [
        { left: "Como", right: "Як" },
        { left: "Onde", right: "Де" },
        { left: "Quando", right: "Коли" },
        { left: "Quem", right: "Хто" },
        { left: "Quanto", right: "Скільки" }
      ]
    },
    {
      question: "Зіставте питання з підходящою відповіддю:",
      pairs: [
        { left: "Onde mora?", right: "У Лісабоні." },
        { left: "Quando chega?", right: "Завтра." },
        { left: "Quem é?", right: "Вчитель." },
        { left: "Como vai?", right: "На автобусі." },
        { left: "Que faz?", right: "Я вивчаю португальську." }
      ]
    },
    {
      question: "Яке питання підходить до відповіді «O Natal em Portugal é no dia 25 de dezembro»?",
      explanation: "Відповідь містить дату (25 de dezembro), тому питання повинно бути з «Quando» (коли)."
    },
    {
      question: "Яка конструкція характерна для європейської португальської у питаннях?",
      explanation: "Конструкція «é que» — типова риса європейської португальської; ставиться після питального слова."
    }
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

};
