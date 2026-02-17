export default {
  title: "Артиклі",
  description: "Означені та неозначені артиклі в португальській мові",
  theory: [
    {
      heading: "Означені артиклі (Artigos definidos)",
      text: "Означені артиклі вказують на конкретний предмет, уже відомий співрозмовникам. У португальській мові вони змінюються за родом і числом."
    },
    {
      table: {
        headers: ["", "Чоловічий рід", "Жіночий рід"],
        rows: [
          ["Однина", "o", "a"],
          ["Множина", "os", "as"]
        ]
      }
    },
    {
      heading: "Неозначені артиклі (Artigos indefinidos)",
      text: "Неозначені артиклі вживаються, коли предмет згадується вперше або є одним із багатьох."
    },
    {
      table: {
        headers: ["", "Чоловічий рід", "Жіночий рід"],
        rows: [
          ["Однина", "um", "uma"],
          ["Множина", "uns", "umas"]
        ]
      }
    },
    {
      heading: "Злиття артиклів із прийменниками",
      text: "У європейській португальській означені артиклі зливаються з прийменниками de, em, a, por."
    },
    {
      table: {
        headers: ["Прийменник", "o", "a", "os", "as"],
        rows: [
          ["de", "do", "da", "dos", "das"],
          ["em", "no", "na", "nos", "nas"],
          ["a", "ao", "à", "aos", "às"],
          ["por", "pelo", "pela", "pelos", "pelas"]
        ]
      }
    },
    {
      examples: [
        { pt: "O rapaz está na escola.", ru: "Хлопець у школі." },
        { pt: "Uma rapariga chegou.", ru: "Дівчина прийшла." },
        { pt: "Gosto do café.", ru: "Мені подобається кава." },
        { pt: "Vou ao cinema.", ru: "Я йду в кіно." }
      ]
    },
    {
      note: "У європейській португальській артикль часто вживається перед власними назвами: O João, a Maria. Також артикль ставиться перед присвійними: o meu livro (моя книжка)."
    }
  ],
  vocabulary: [
    { ru: "хлопець, парубок" },
    { ru: "дівчина" },
    { ru: "школа" },
    { ru: "кіно, кінотеатр" },
    { ru: "супермаркет" },
    { ru: "їжа" },
    { ru: "кава; кав'ярня" },
    { ru: "автомобіль" },
    { ru: "вулиця" },
    { ru: "викладач" }
  ],
  flashcards: [
    { ru: "хлопець, парубок", hint: "артикль o — чоловічий рід" },
    { ru: "дівчина", hint: "європ. порт. замість бразильського «a menina»" },
    { ru: "школа", hint: "na escola = у школі" },
    { ru: "кіно, кінотеатр", hint: "ao cinema = до кіно" },
    { ru: "їжа", hint: "da comida = (чого) їжі" },
    { ru: "кава; кав'ярня", hint: "чоловічий рід, як і в порт." },
    { ru: "вулиця", hint: "na rua = на вулиці" },
    { ru: "автомобіль", hint: "do carro = (чий) автомобіля" }
  ],
  exercises: [
    // 1 - choice
    { question: "Оберіть правильне злиття: Eu vou ___ supermercado. (a + o)", options: ["no", "do", "ao", "pelo"], explanation: "Прийменник «a» зливається з артиклем «o» й утворює «ao». Ir ao supermercado — йти до супермаркету." },
    // 2 - fill
    { question: "Заповніть: Ela mora ___ Lisboa. (em + a = ...)" },
    // 3 - choice
    { question: "Який артикль підходить? ___ carro é novo.", options: ["A", "O", "Uma", "As"], explanation: "Carro (автомобіль) — чоловічого роду, тому означений артикль — «o»." },
    // 4 - translate pt-ru
    { answer: ["Мені подобається португальська їжа.", "Я люблю португальську їжу."] },
    // 5 - fill
    { question: "Вставте злиття прийменника «de» з артиклем: O livro ___ professor. (de + o)" },
    // 6 - choice
    { question: "Який неозначений артикль у слова «casa» (будинок)?", options: ["um", "uma", "uns", "umas"], explanation: "Casa — жіночого роду, тому неозначений артикль — «uma»: uma casa." },
    // 7 - fill
    { question: "Вставте злиття: Ele está ___ escola. (em + a = ...)" },
    // 8 - choice
    { question: "Яке злиття правильне? Ele saiu ___ restaurante. (de + o)", options: ["da", "do", "no", "ao"], explanation: "Прийменник «de» + артикль «o» = «do». Sair do restaurante — вийти з ресторану." },
    // 9 - fill
    { question: "Вставте злиття: A chave ___ carro está aqui. (de + o = ...)" },
    // 10 - match
    { question: "Співвіднесіть злиття прийменників з артиклями:", pairs: [{ left: "de + a", right: "da" }, { left: "em + o", right: "no" }, { left: "a + os", right: "aos" }, { left: "por + a", right: "pela" }] },
    // 11 - choice
    { question: "Оберіть правильне злиття: Nós passámos ___ parque. (por + o)", options: ["polo", "pelo", "pro", "no"], explanation: "Прийменник «por» + артикль «o» = «pelo». Passar pelo parque — проходити через парк." },
    // 12 - fill
    { question: "Вставте артикль: ___ meninas estão na escola. (означений, ж.р., мн.)" },
    // 13 - choice
    { question: "Коли НЕ використовується означений артикль?", options: ["Перед назвами країн: a Portugal", "Перед назвами мов: o português", "З присвійними: o meu livro", "Після дієслова «falar»: Falo português"], explanation: "Після дієслова «falar» артикль перед мовою зазвичай пропускається: Falo português (Я розмовляю португальською)." },
    // 14 - fill
    { question: "Вставте злиття: Vou ___ praia. (a + a = ...)" },
    // 15 - translate ru-pt
    { source: "Книжка учня на столі." },
    // 16 - choice
    { question: "Який артикль використовується? ___ crianças brincam ___ jardim. (означений + em + o)", options: ["As ... no", "Os ... no", "As ... na", "Umas ... no"], explanation: "Crianças (діти) — жіночого роду мн., тому «as». «Em + o» = «no»: As crianças brincam no jardim." },
    // 17 - fill
    { question: "Вставте злиття: Ela vem ___ Estados Unidos. (de + os = ...)" },
    // 18 - match
    { question: "Співвіднесіть злиття прийменника «em» з артиклями:", pairs: [{ left: "em + o", right: "no" }, { left: "em + a", right: "na" }, { left: "em + os", right: "nos" }, { left: "em + as", right: "nas" }] },
    // 19 - choice
    { question: "Оберіть правильний варіант: Há ___ livros na estante.", options: ["os", "uns", "o", "um"], explanation: "З дієсловом «há» (є, існує) використовується неозначений артикль «uns» (деякі): Há uns livros na estante." },
    // 20 - fill
    { question: "Вставте злиття: Ele pensa ___ filhos. (em + os = ...)" },
    // 21 - order
    { question: "Складіть речення: «Я йду до бібліотеки»." },
    // 22 - choice
    { question: "Яке злиття правильне для «por + as»?", options: ["pas", "polas", "pelas", "pras"], explanation: "Прийменник «por» + артикль «as» = «pelas». Наприклад: pelas ruas (вулицями)." },
    // 23 - fill
    { question: "Вставте злиття: Ela gosta ___ flores. (de + as = ...)" },
    // 24 - translate ru-pt
    { source: "Ми живемо в Португалії." },
    // 25 - choice
    { question: "Який артикль перед «água» (вода)?", options: ["o", "a", "os", "um"], explanation: "Água — жіночого роду: a água. Хоча слово починається з наголошеного «а», артикль все одно «a»." },
    // 26 - fill
    { question: "Вставте неозначений артикль: Ele comprou ___ carro novo. (ч.р., одн.)" },
    // 27 - match
    { question: "Співвіднесіть злиття прийменника «a» з артиклями:", pairs: [{ left: "a + o", right: "ao" }, { left: "a + a", right: "à" }, { left: "a + os", right: "aos" }, { left: "a + as", right: "às" }] },
    // 28 - choice
    { question: "Оберіть правильний варіант: ___ alunos estudam ___ universidade. (означений + em + a)", options: ["Os ... na", "Os ... no", "As ... na", "Uns ... em a"], explanation: "Alunos (учні) — чоловічий рід мн., тому «os». «Em + a» = «na»: Os alunos estudam na universidade." }
  ]
};
