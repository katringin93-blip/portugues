export default {
  title: "Ser та Estar",
  description: "Два дієслова «бути» — їх відмінювання та відмінності у вживанні",
  theory: [
    {
      heading: "Дієслово SER",
      text: "Дієслово «ser» вживається для позначення постійних характеристик: національність, професія, походження, матеріал, час, характер."
    },
    {
      table: {
        headers: ["Особа", "ser"],
        rows: [
          ["eu", "sou"],
          ["tu", "és"],
          ["ele/ela/você", "é"],
          ["nós", "somos"],
          ["eles/elas/vocês", "são"]
        ]
      }
    },
    {
      heading: "Дієслово ESTAR",
      text: "Дієслово «estar» вживається для позначення тимчасових станів: настрій, здоров'я, місцезнаходження, результат дії."
    },
    {
      table: {
        headers: ["Особа", "estar"],
        rows: [
          ["eu", "estou"],
          ["tu", "estás"],
          ["ele/ela/você", "está"],
          ["nós", "estamos"],
          ["eles/elas/vocês", "estão"]
        ]
      }
    },
    {
      heading: "Коли вживати SER, а коли ESTAR",
      text: "Головне правило: ser — для постійних якостей, estar — для тимчасових станів та місцезнаходження."
    },
    {
      table: {
        headers: ["SER (постійне)", "ESTAR (тимчасове)"],
        rows: [
          ["Ele é alto. (Він високий.)", "Ele está cansado. (Він втомився.)"],
          ["Ela é portuguesa. (Вона португалка.)", "Ela está em casa. (Вона вдома.)"],
          ["O café é bom. (Кава — гарна.)", "O café está quente. (Кава гаряча.)"],
          ["Eu sou professor. (Я викладач.)", "Eu estou doente. (Я хворий.)"],
          ["São duas horas. (Друга година.)", "Estamos em fevereiro. (Зараз лютий.)"]
        ]
      }
    },
    {
      examples: [
        { pt: "O Pedro é simpático, mas hoje está triste.", ru: "Педру — привітний (характер), але сьогодні він сумний (стан)." },
        { pt: "Lisboa é a capital de Portugal.", ru: "Лісабон — столиця Португалії." },
        { pt: "Onde está o meu telemóvel?", ru: "Де мій мобільний?" }
      ]
    },
    {
      note: "У європейській португальській «мобільний телефон» — telemóvel, а не celular (браз.). «Автобус» — autocarro, а не ônibus."
    }
  ],
  vocabulary: [
    { ru: "бути (постійно)" },
    { ru: "бути (тимчасово); перебувати" },
    { ru: "втомлений" },
    { ru: "хворий" },
    { ru: "сумний" },
    { ru: "задоволений" },
    { ru: "привітний, симпатичний" },
    { ru: "мобільний телефон" },
    { ru: "лікар" },
    { ru: "столиця" }
  ],
  flashcards: [
    { ru: "бути (постійно)", hint: "eu sou, tu és, ele é" },
    { ru: "бути (тимчасово)", hint: "eu estou, tu estás, ele está" },
    { ru: "втомлений", hint: "вживається з estar" },
    { ru: "хворий", hint: "вживається з estar" },
    { ru: "привітний, милий", hint: "вживається з ser" },
    { ru: "сумний", hint: "зазвичай з estar (тимчасово)" },
    { ru: "мобільний телефон", hint: "європ. порт. (браз.: celular)" },
    { ru: "лікар", hint: "професія — з ser" }
  ],
  exercises: [
    // 1 - choice
    { question: "Ela ___ médica. (Вона — лікарка.)", options: ["está", "é", "são", "estão"], explanation: "Професія — постійна характеристика, вживається «ser»: Ela é médica." },
    // 2 - choice
    { question: "O café ___ frio. (Кава холодна — зараз.)", options: ["é", "está", "são", "sou"], explanation: "Температура кави — тимчасовий стан, вживається «estar»: O café está frio." },
    // 3 - fill
    { question: "Nós ___ cansados. (Ми втомилися.)" },
    // 4 - translate ru-pt
    { source: "Я українець, але зараз я в Португалії." },
    // 5 - fill
    { question: "De onde ___ tu? (Звідки ти?)" },
    // 6 - choice
    { question: "Lisboa ___ a capital de Portugal. (Лісабон — столиця Португалії.)", options: ["está", "é", "estão", "são"], explanation: "Факт, постійна характеристика — «ser»: Lisboa é a capital de Portugal." },
    // 7 - fill
    { question: "Eu ___ contente hoje. (Я сьогодні задоволений.)" },
    // 8 - choice
    { question: "Ela ___ bonita (= вона гарно виглядає сьогодні).", options: ["é", "está", "são", "estão"], explanation: "«Estar» + прикметник = тимчасовий стан. «Ela está bonita» — вона сьогодні гарно виглядає." },
    // 9 - choice
    { question: "Ela ___ bonita (= вона красива від природи).", options: ["está", "é", "estão", "são"], explanation: "«Ser» + прикметник = постійна характеристика. «Ela é bonita» — вона красива (завжди)." },
    // 10 - translate ru-pt
    { source: "Котра година? — Зараз третя година." },
    // 11 - fill
    { question: "O banco ___ na rua principal. (Банк знаходиться на головній вулиці.)" },
    // 12 - match
    { question: "Співвіднесіть випадки вживання з дієсловом:", pairs: [{ left: "Національність", right: "ser" }, { left: "Місцезнаходження", right: "estar" }, { left: "Професія", right: "ser" }, { left: "Самопочуття", right: "estar" }, { left: "Час", right: "ser" }] },
    // 13 - order
    { question: "Складіть речення: «Ми — студенти.»" },
    // 14 - choice
    { question: "«Hoje ___ frio.» (Сьогодні холодно — про погоду.)", options: ["é", "está", "são", "estão"], explanation: "Погода — тимчасовий стан, вживається «estar»: «Hoje está frio»." },
    // 15 - fill
    { question: "Eles ___ portugueses. (Вони — португальці.)" },
    // 16 - translate ru-pt
    { source: "Книжка на столі." },
    // 17 - choice
    { question: "«A porta ___ aberta.» (Двері відчинені — зараз.)", options: ["é", "está", "são", "estão"], explanation: "Відчинені двері — результат дії, тимчасовий стан: «A porta está aberta»." },
    // 18 - fill
    { question: "Ele ___ professor de matemática. (Він — учитель математики.)" },
    // 19 - translate ru-pt
    { source: "Вони хворі сьогодні." },
    // 20 - choice
    { question: "«A festa ___ no sábado.» (Свято — у суботу.)", options: ["está", "é", "estão", "são"], explanation: "Дата/час події — «ser»: «A festa é no sábado»." },
    // 21 - order
    { question: "Складіть речення: «Де ти? Я вдома.»" },
    // 22 - fill
    { question: "Como ___ (estar, tu)? — ___ (estar, eu) bem, obrigado." },
    // 23 - choice
    { question: "«O Pedro ___ muito inteligente.» (Педру дуже розумний — завжди.)", options: ["está", "é", "estão", "são"], explanation: "Постійна характеристика особистості — «ser»: «O Pedro é muito inteligente»." },
    // 24 - translate ru-pt
    { source: "Я з України, але зараз живу в Португалії." },
    // 25 - fill
    { question: "As janelas ___ fechadas. (Вікна зачинені.)" },
    // 26 - match
    { question: "Оберіть «ser» чи «estar» для кожного речення:", pairs: [{ left: "Ele ___ cansado.", right: "está" }, { left: "Ela ___ brasileira.", right: "é" }, { left: "O carro ___ na garagem.", right: "está" }, { left: "A aula ___ às 9 horas.", right: "é" }] },
    // 27 - choice
    { question: "«Ele ___ a correr.» (Він біжить — тривала форма.)", options: ["é", "está", "são", "estão"], explanation: "Тривала форма (estar + a + інфінітив): «Ele está a correr» — він зараз біжить." },
    // 28 - translate ru-pt
    { source: "Ця книжка дуже гарна." },
    // 29 - fill
    { question: "O restaurante ___ perto daqui. (Ресторан — поруч звідси.)" },
    // 30 - order
    { question: "Складіть речення: «Вона — лікарка і працює в лікарні.»" }
  ]
};
