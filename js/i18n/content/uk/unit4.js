export default {
  title: "Особові займенники та правильні дієслова",
  description: "Особові займенники-підмети та відмінювання правильних дієслів (-ar, -er, -ir) у теперішньому часі",
  theory: [
    {
      heading: "Особові займенники (Pronomes pessoais sujeitos)",
      text: "У європейській португальській система займенників відрізняється від бразильського варіанту. Зверніть увагу на форми ввічливого звертання."
    },
    {
      table: {
        headers: ["Особа", "Однина", "Множина"],
        rows: [
          ["1-ша особа", "eu (я)", "nós (ми)"],
          ["2-га особа (неформ.)", "tu (ти)", "vós (ви, арх.)"],
          ["3-тя особа / ввічливе", "ele/ela (він/вона), você (Ви)", "eles/elas (вони), vocês (ви)"]
        ]
      }
    },
    {
      heading: "Правильні дієслова на -ar (1-ша дієвідміна)",
      text: "Перша дієвідміна — найпоширеніша. Основа дієслова утворюється відкиданням закінчення -ar."
    },
    {
      table: {
        headers: ["Особа", "falar (говорити)"],
        rows: [
          ["eu", "falo"],
          ["tu", "falas"],
          ["ele/ela/você", "fala"],
          ["nós", "falamos"],
          ["eles/elas/vocês", "falam"]
        ]
      }
    },
    {
      heading: "Правильні дієслова на -er (2-га дієвідміна)",
      text: "Друга дієвідміна — дієслова, що закінчуються на -er."
    },
    {
      table: {
        headers: ["Особа", "comer (їсти)"],
        rows: [
          ["eu", "como"],
          ["tu", "comes"],
          ["ele/ela/você", "come"],
          ["nós", "comemos"],
          ["eles/elas/vocês", "comem"]
        ]
      }
    },
    {
      heading: "Правильні дієслова на -ir (3-тя дієвідміна)",
      text: "Третя дієвідміна — дієслова, що закінчуються на -ir."
    },
    {
      table: {
        headers: ["Особа", "partir (від'їжджати)"],
        rows: [
          ["eu", "parto"],
          ["tu", "partes"],
          ["ele/ela/você", "parte"],
          ["nós", "partimos"],
          ["eles/elas/vocês", "partem"]
        ]
      }
    },
    {
      examples: [
        { pt: "Eu falo português.", ru: "Я розмовляю португальською." },
        { pt: "Tu comes muito.", ru: "Ти багато їси." },
        { pt: "Nós partimos amanhã.", ru: "Ми від'їжджаємо завтра." },
        { pt: "Eles trabalham todos os dias.", ru: "Вони працюють щодня." }
      ]
    },
    {
      note: "У європейській португальській «tu» широко вживається в неформальному спілкуванні, на відміну від Бразилії. «Você» вживається в більш формальному контексті або при зверненні до незнайомих людей."
    }
  ],
  vocabulary: [
    { ru: "говорити" },
    { ru: "їсти" },
    { ru: "від'їжджати, вирушати" },
    { ru: "працювати" },
    { ru: "жити, мешкати" },
    { ru: "пити" },
    { ru: "відкривати" },
    { ru: "вчитися, вивчати" },
    { ru: "писати" },
    { ru: "жити" }
  ],
  flashcards: [
    { ru: "говорити", hint: "1-ша дієвідміна (-ar)" },
    { ru: "їсти", hint: "2-га дієвідміна (-er)" },
    { ru: "від'їжджати", hint: "3-тя дієвідміна (-ir)" },
    { ru: "працювати", hint: "eu trabalho, tu trabalhas" },
    { ru: "жити, мешкати", hint: "eu moro, tu moras" },
    { ru: "пити", hint: "eu bebo, tu bebes" },
    { ru: "вчитися, вивчати", hint: "eu estudo, tu estudas" },
    { ru: "писати", hint: "eu escrevo, tu escreves" }
  ],
  exercises: [
    // 1 - fill
    { question: "Провідміняйте дієслово «morar» (жити) для «nós»: Nós ___ em Lisboa." },
    // 2 - choice
    { question: "Оберіть правильну форму: Tu ___ água? (beber)", options: ["bebo", "bebe", "bebes", "bebem"], explanation: "Для «tu» дієслово на -er отримує закінчення -es: bebes." },
    // 3 - translate pt-ru
    { answer: ["Вона говорить англійською та португальською.", "Вона розмовляє англійською та португальською."] },
    // 4 - fill
    { question: "Провідміняйте дієслово «abrir» (відкривати) для «eu»: Eu ___ a porta." },
    // 5 - choice
    { question: "Який займенник використовується для ввічливого звертання у європейській португальській?", options: ["tu", "eu", "você / o senhor / a senhora", "nós"], explanation: "У Португалії для ввічливого звертання використовують «você», «o senhor» (до чоловіка) або «a senhora» (до жінки)." },
    // 6 - fill
    { question: "Провідміняйте дієслово «falar» (говорити) для «eu»: Eu ___ português." },
    // 7 - choice
    { question: "Оберіть правильну форму: Eles ___ na universidade. (estudar)", options: ["estudo", "estudas", "estuda", "estudam"], explanation: "Для «eles» (вони) дієслово на -ar отримує закінчення -am: estudam." },
    // 8 - fill
    { question: "Провідміняйте дієслово «trabalhar» (працювати) для «ela»: Ela ___ num banco." },
    // 9 - match
    { question: "Співвіднесіть займенники з формами дієслова «falar»:", pairs: [{ left: "eu", right: "falo" }, { left: "tu", right: "falas" }, { left: "nós", right: "falamos" }, { left: "eles", right: "falam" }] },
    // 10 - choice
    { question: "Яке закінчення у дієслів на -ar для «nós»?", options: ["-amos", "-emos", "-imos", "-am"], explanation: "Дієслова на -ar у формі «nós» мають закінчення -amos: falamos, moramos, trabalhamos." },
    // 11 - fill
    { question: "Провідміняйте дієслово «comer» (їсти) для «eu»: Eu ___ peixe." },
    // 12 - translate ru-pt
    { source: "Ми працюємо щодня." },
    // 13 - choice
    { question: "Оберіть правильну форму: Você ___ em Portugal? (morar)", options: ["moro", "moras", "mora", "moram"], explanation: "«Você» відмінюється як третя особа одн., тому закінчення -a для дієслів на -ar: mora." },
    // 14 - fill
    { question: "Провідміняйте дієслово «viver» (жити) для «nós»: Nós ___ no Porto." },
    // 15 - order
    { question: "Складіть речення: «Ти говориш португальською?»" },
    // 16 - choice
    { question: "Який займенник означає «ми»?", options: ["eu", "vós", "nós", "eles"], explanation: "«Nós» — займенник для «ми». «Eu» — я, «vós» — ви (мн., застар.), «eles» — вони." },
    // 17 - fill
    { question: "Провідміняйте дієслово «partir» (від'їжджати) для «tu»: Tu ___ amanhã?" },
    // 18 - match
    { question: "Співвіднесіть закінчення дієслів із групами дієвідмін для «eu»:", pairs: [{ left: "-ar (falar)", right: "-o (falo)" }, { left: "-er (comer)", right: "-o (como)" }, { left: "-ir (partir)", right: "-o (parto)" }] },
    // 19 - translate ru-pt
    { source: "Вони живуть у Лісабоні." },
    // 20 - choice
    { question: "Оберіть правильну форму: Nós ___ o livro. (ler — читати, дієслово на -er)", options: ["lo", "les", "lemos", "lem"], explanation: "Для «nós» дієслово на -er отримує закінчення -emos: lemos." },
    // 21 - fill
    { question: "Провідміняйте дієслово «comprar» (купувати) для «vocês»: Vocês ___ pão todos os dias?" },
    // 22 - choice
    { question: "Яка форма дієслова «escrever» (писати) для «ele»?", options: ["escrevo", "escreves", "escreve", "escrevem"], explanation: "Для «ele» дієслово на -er отримує закінчення -e: escreve." },
    // 23 - fill
    { question: "Провідміняйте дієслово «cantar» (співати) для «tu»: Tu ___ muito bem!" },
    // 24 - order
    { question: "Складіть речення: «Ми вивчаємо португальську»." },
    // 25 - choice
    { question: "Яке дієслово правильно провідмінюється? Eu ___ a janela. (abrir)", options: ["abro", "abres", "abre", "abrimos"], explanation: "Для «eu» дієслово на -ir отримує закінчення -o: abro." },
    // 26 - translate ru-pt
    { source: "Ти вчишся чи працюєш?" },
    // 27 - fill
    { question: "Провідміняйте дієслово «gostar» (подобатися) для «ela»: Ela ___ de música." },
    // 28 - choice
    { question: "Який займенник НЕ відмінюється як третя особа однини?", options: ["ele", "você", "tu", "a senhora"], explanation: "«Tu» має власне відмінювання (2-га особа одн.). «Você», «ele» та «a senhora» відмінюються однаково — як 3-тя особа одн." },
    // 29 - fill
    { question: "Провідміняйте дієслово «beber» (пити) для «eles»: Eles ___ café de manhã." }
  ]
};
