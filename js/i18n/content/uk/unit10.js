export default {
  title: "Прикметники та прислівники",
  description: "Узгодження прикметників, їх позиція та утворення прислівників",
  theory: [
    {
      heading: "Узгодження прикметників",
      text: "Прикметники в португальській узгоджуються з іменником у роді та числі. Більшість прикметників на -o мають жіночу форму на -a."
    },
    {
      table: {
        headers: ["Тип", "Чол. одн.", "Жін. одн.", "Чол. мн.", "Жін. мн."],
        rows: [
          ["на -o/-a", "bonito", "bonita", "bonitos", "bonitas"],
          ["на -e (спільний)", "grande", "grande", "grandes", "grandes"],
          ["на приголосну (спільний)", "difícil", "difícil", "difíceis", "difíceis"],
          ["на -ês", "português", "portuguesa", "portugueses", "portuguesas"],
          ["на -or", "trabalhador", "trabalhadora", "trabalhadores", "trabalhadoras"]
        ]
      }
    },
    {
      heading: "Позиція прикметника",
      text: "Зазвичай прикметники стоять після іменника: um carro vermelho (червоний автомобіль). Деякі короткі та часті прикметники можуть стояти перед іменником, змінюючи відтінок значення: bom, mau, grande, pequeno."
    },
    {
      examples: [
        { pt: "Uma casa grande (великий будинок)", ru: "Великий будинок (буквально)" },
        { pt: "Um grande homem (великий чоловік)", ru: "Великий чоловік (переносне значення)" },
        { pt: "Um carro novo", ru: "Новий автомобіль" },
        { pt: "A comida portuguesa é deliciosa.", ru: "Португальська їжа — смачна." }
      ]
    },
    {
      heading: "Прислівники (Advérbios)",
      text: "Прислівники утворюються від прикметників жіночого роду + суфікс -mente. Якщо прикметник однаковий для обох родів, -mente додається до основної форми."
    },
    {
      table: {
        headers: ["Прикметник", "Прислівник", "Переклад"],
        rows: [
          ["rápido/a", "rapidamente", "швидко"],
          ["lento/a", "lentamente", "повільно"],
          ["fácil", "facilmente", "легко"],
          ["feliz", "felizmente", "на щастя"],
          ["normal", "normalmente", "зазвичай"]
        ]
      }
    },
    {
      note: "Деякі прислівники не утворюються за правилом: bem (добре), mal (погано), muito (дуже), pouco (мало), sempre (завжди), depressa (швидко), devagar (повільно)."
    }
  ],
  vocabulary: [
    { ru: "гарний" },
    { ru: "великий" },
    { ru: "маленький" },
    { ru: "новий" },
    { ru: "старий" },
    { ru: "добрий, гарний" },
    { ru: "поганий" },
    { ru: "складний" },
    { ru: "легкий" },
    { ru: "швидко (прислівник)" },
    { ru: "повільно (прислівник)" }
  ],
  flashcards: [
    { ru: "гарний/а", hint: "жін. р.: bonita, мн.: bonitos/as" },
    { ru: "великий", hint: "одна форма для обох родів" },
    { ru: "маленький/а", hint: "антонім: grande" },
    { ru: "добрий/а", hint: "прислівник: bem" },
    { ru: "поганий/а", hint: "прислівник: mal" },
    { ru: "складний", hint: "мн.: difíceis, прислівник: dificilmente" },
    { ru: "швидко", hint: "прислівник, незмінний" },
    { ru: "повільно", hint: "антонім: depressa" }
  ],
  exercises: [
    // 1 - fill
    { question: "Узгодьте прикметник: As raparigas são ___ (bonito)." },
    // 2 - choice
    { question: "Який прислівник утворений від «fácil»?", options: ["fácilmente", "facilmente", "façilmente", "fácelmente"], explanation: "Від «fácil» прислівник — «facilmente» (наголос зміщується)." },
    // 3 - translate ru-pt
    { source: "Португальські міста дуже красиві." },
    // 4 - choice
    { question: "Де стоїть прикметник у «um livro interessante»?", options: ["Перед іменником", "Після іменника", "Може стояти в обох позиціях", "Окремо від іменника"], explanation: "У португальській прикметники зазвичай стоять після іменника." },
    // 5 - fill
    { question: "Утворіть прислівник від «rápida»: ___" },
    // 6 - fill
    { question: "Узгодьте прикметник: Os carros são ___ (novo)." },
    // 7 - choice
    { question: "«Um homem ___» — високий чоловік.", options: ["alta", "altas", "alto", "altos"], explanation: "«Homem» — ч.р. одн., тому прикметник «alto» (ч.р. одн.)." },
    // 8 - translate ru-pt
    { source: "Маленький хлопчик грає в парку." },
    // 9 - fill
    { question: "Утворіть прислівник від «lenta»: ___" },
    // 10 - match
    { question: "Співвіднесіть прикметники ч.р. з формою ж.р.:", pairs: [{ left: "bonito", right: "bonita" }, { left: "português", right: "portuguesa" }, { left: "alto", right: "alta" }, { left: "bom", right: "boa" }, { left: "mau", right: "má" }] },
    // 11 - choice
    { question: "Який прикметник НЕ змінюється за родом?", options: ["bonito/bonita", "grande/grande", "alto/alta", "novo/nova"], explanation: "«Grande» — однаковий для чоловічого та жіночого роду: um homem grande, uma mulher grande." },
    // 12 - fill
    { question: "A comida está ___ (quente — ж.р.). (Їжа гаряча.)" },
    // 13 - order
    { question: "Складіть словосполучення: «красиві будинки»" },
    // 14 - translate ru-pt
    { source: "Вона говорить швидко." },
    // 15 - choice
    { question: "Як буде «легко» (прислівник) португальською?", options: ["fácilmente", "facilmente", "fácil", "façil"], explanation: "Прислівник від «fácil»: прибираємо наголос → facil + mente = «facilmente»." },
    // 16 - fill
    { question: "Umas mulheres ___ (simpático). (Приємні жінки.)" },
    // 17 - choice
    { question: "«Um grande homem» і «um homem grande» — одне й те саме?", options: ["Так, значення однакове", "Ні: «grande» перед = великий (переносно), після = великий (фізично)", "Ні: «grande» перед = великий (фізично), після = великий (переносно)", "«Grande» не може стояти перед іменником"], explanation: "Позиція змінює значення: «um grande homem» = великий чоловік (видатний), «um homem grande» = великий/крупний чоловік (фізично)." },
    // 18 - translate ru-pt
    { source: "Старі португальські міста красиві." },
    // 19 - fill
    { question: "Утворіть прислівник від «feliz»: ___" },
    // 20 - match
    { question: "Співвіднесіть прикметники з прислівниками:", pairs: [{ left: "lento", right: "lentamente" }, { left: "rápido", right: "rapidamente" }, { left: "fácil", right: "facilmente" }, { left: "feliz", right: "felizmente" }] },
    // 21 - choice
    { question: "Узгодьте: «As flores são ___» (красиві).", options: ["bonito", "bonita", "bonitos", "bonitas"], explanation: "«Flores» — ж.р. мн., тому «bonitas»." },
    // 22 - fill
    { question: "Os alunos são muito ___ (inteligente — мн.)." },
    // 23 - order
    { question: "Складіть речення: «Я живу в маленькому будинку.»" },
    // 24 - translate ru-pt
    { source: "Він працює повільно, але добре." },
    // 25 - choice
    { question: "Прикметники на «-e» (grande, verde, triste)...", options: ["Мають різні форми ч.р. та ж.р.", "Однакові для ч.р. та ж.р., змінюються в мн. (+s)", "Не змінюються взагалі", "Мають особливу форму для мн."], explanation: "Прикметники на «-e» не змінюються за родом: um carro verde, uma casa verde. Мн.: verdes." },
    // 26 - fill
    { question: "A casa é ___ (branco). (Будинок білий.)" },
    // 27 - translate ru-pt
    { source: "Це дуже гарний ресторан." },
    // 28 - choice
    { question: "Як утворити прислівник від прикметника «claro» (ясний)?", options: ["claro", "claramente", "clarmente", "clarente"], explanation: "Беремо жіночу форму «clara» + «-mente» = «claramente»." },
    // 29 - fill
    { question: "Утворіть прислівник від «completo»: ___ (повністю)" },
    // 30 - order
    { question: "Складіть речення: «Він говорить португальською вільно.»" }
  ]
};
