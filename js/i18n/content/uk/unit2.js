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
      text: "У європейській португальській означені артиклі зливаються з прийменниками de, em, a, por. Кожен прийменник має свої значення:"
    },
    {
      table: {
        headers: ["Прийменник", "Значення", "Українські відповідники"],
        rows: [
          ["de", "належність, походження, характеристика", "з, від, про; род. відмінок (кого? чого?)"],
          ["em", "місцезнаходження, час, тема", "у/в, на, про; місц. відмінок (у чому? на чому?)"],
          ["a", "напрямок, час, адресат", "до, в, на; дав. відмінок (кому? куди?)"],
          ["por", "причина, автор, маршрут", "через, по, за; орудн. відмінок (ким? чим?)"]
        ]
      }
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
        { pt: "Portugal é o país mais ocidental do continente europeu.", ru: "Португалія — найзахідніша країна європейського континенту. (de — належність)" },
        { pt: "Londres é a capital da Inglaterra.", ru: "Лондон — столиця Англії. (de — належність)" },
        { pt: "Eles são dos Açores.", ru: "Вони з Азорських островів. (de — походження)" },
        { pt: "Ele mora no segundo andar.", ru: "Він живе на другому поверсі. (em — місцезнаходження)" },
        { pt: "Há sempre gente simpática nas festas da Isabel.", ru: "На вечірках Ізабел завжди привітні люди. (em — місце; de — належність)" },
        { pt: "O Paulo vai ao cinema.", ru: "Паулу йде в кіно. (a — напрямок)" },
        { pt: "A Ana chega à uma hora.", ru: "Ана приходить о першій годині. (a — час)" },
        { pt: "O José só descansa aos domingos.", ru: "Жозе відпочиває лише по неділях. (a — час)" },
        { pt: "Eu espero pelo João.", ru: "Я чекаю на Жуау. (por — очікування когось)" },
        { pt: "Esta receita foi criada pela Sandra.", ru: "Цей рецепт створила Сандра. (por — автор дії)" },
        { pt: "Os dois alunos caminham pelos parques da cidade.", ru: "Двоє студентів гуляють міськими парками. (por — маршрут)" }
      ]
    },
    {
      note: "У європейській португальській артикль часто вживається перед власними назвами: O João, a Maria. Також артикль ставиться перед присвійними: o meu livro (моя книжка)."
    },
    {
      heading: "Злиття неозначених артиклів з прийменниками",
      text: "Неозначені артиклі також зливаються з прийменниками em та de. Значення ті самі: em — місцезнаходження (у, в, на), de — належність (чий), походження (звідки). Форми з de (dum, duma) частіше зустрічаються в розмовній мові; у письмовій вживають окрему форму: de uma."
    },
    {
      table: {
        headers: ["Прийменник", "um", "uma", "uns", "umas"],
        rows: [
          ["em", "num", "numa", "nuns", "numas"],
          ["de", "dum", "duma", "duns", "dumas"]
        ]
      }
    },
    {
      examples: [
        { ru: "Вона в літаку на шляху до Нью-Йорка. (em — місцезнаходження)" },
        { ru: "Він у складному віці. (em — стан)" },
        { ru: "Вона донька одного викладача. (de — належність)" },
        { ru: "Він приїхав із далекого краю. (de — походження)" }
      ]
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
    { ru: "автомобіль", hint: "do carro = (чий) автомобіля" },
    { ru: "американський; американець", hint: "ч.р., ж.р.: americana" },
    { ru: "подруга", hint: "жіночий рід" },
    { ru: "ангольська; анголянка", hint: "ж.р." },
    { ru: "квартира", hint: "чоловічий рід" },
    { ru: "архаїчна", hint: "ж.р., ч.р.: arcaico" },
    { ru: "синій, блакитний", hint: "незмінний за родом" },
    { ru: "колиска", hint: "чоловічий рід" },
    { ru: "бібліотека", hint: "жіночий рід" },
    { ru: "бразильський; бразилець", hint: "ч.р., ж.р.: brasileira" },
    { ru: "сорочка", hint: "жіночий рід" },
    { ru: "столиця", hint: "жіночий рід" },
    { ru: "центр", hint: "чоловічий рід" },
    { ru: "місто", hint: "жіночий рід" },
    { ru: "розуміти, включати", hint: "дієслово" },
    { ru: "колір", hint: "жіночий рід, мн.: cores" },
    { ru: "правильний", hint: "ч.р., ж.р.: correta" },
    { ru: "відповідно до", hint: "прийменник" },
    { ru: "відпочинок", hint: "чоловічий рід" },
    { ru: "неділя", hint: "чоловічий рід" },
    { ru: "компанія, фірма", hint: "жіночий рід" },
    { ru: "величезний", hint: "незмінний за родом" },
    { ru: "екзотичний", hint: "ч.р., ж.р.: exótica" },
    { ru: "сім'я", hint: "жіночий рід" },
    { ru: "форма", hint: "жіночий рід" },
    { ru: "великий", hint: "незмінний за родом" },
    { ru: "англійський; англієць", hint: "ч.р., ж.р.: inglesa" },
    { ru: "грати в м'яч", hint: "вираз" },
    { ru: "гарна", hint: "ж.р., ч.р.: lindo" },
    { ru: "Північ", hint: "чоловічий рід" },
    { ru: "де", hint: "прислівник місця" },
    { ru: "парк", hint: "чоловічий рід" },
    { ru: "перший", hint: "ч.р., ж.р.: primeira" },
    { ru: "університет", hint: "жіночий рід" },
    { ru: "зона, район", hint: "жіночий рід" },
  ],
  exercises: [
    // === Ex2: Fill a/o/um/uma (12 items) ===
    { question: "Вставте правильний артикль: ___ casa é grande. (означений)" },
    { question: "Вставте правильний артикль: ___ carro é novo. (означений)" },
    {
      question: "Який артикль підходить? Eu tenho ___ livro. (неозначений)",
      explanation: "Livro — чоловічого роду, неозначений артикль чоловічого роду — «um»: um livro."
    },
    { question: "Вставте правильний артикль: Ela comprou ___ mesa. (неозначений)" },
    {
      question: "Які артиклі підходять? ___ João tem ___ carro novo. (означений + неозначений)",
      explanation: "Перед іменами чоловічого роду вживається «O»: O João. Carro — чоловічого роду, неозначений артикль — «um»."
    },
    { question: "Вставте правильний артикль: Há ___ escola perto daqui. (неозначений)" },
    { question: "Вставте правильний артикль: Ele tem ___ irmã mais nova. (неозначений)" },
    { question: "Вставте правильний артикль: ___ tempo está bom. (означений)" },
    { question: "Вставте правильний артикль: ___ Maria é professora. (означений)" },
    { question: "Вставте правильний артикль: ___ Porto é uma cidade bonita. (означений)" },
    { question: "Вставте правильний артикль: ___ Rio Tejo é longo. (означений)" },
    { question: "Вставте правильний артикль: ___ comida está pronta. (означений)" },

    // === Ex3: Match (8 items) ===
    {
      question: "Зіставте вирази з правильним артиклем (означений або неозначений):",
      pairs: [
        { left: "___ menino (конкретний хлопець)", right: "o menino" },
        { left: "___ casa (якийсь будинок)", right: "uma casa" },
        { left: "___ livros (конкретні книжки)", right: "os livros" },
        { left: "___ cidade (якесь місто)", right: "uma cidade" }
      ]
    },
    {
      question: "Зіставте іменники з правильним означеним артиклем:",
      pairs: [
        { left: "professor", right: "o" },
        { left: "escola", right: "a" },
        { left: "carros", right: "os" },
        { left: "cidades", right: "as" }
      ]
    },

    // === Ex4: Fill contractions (11 items) ===
    { question: "Вставте злиття: Ele mora ___ cidade pequena. (em + uma)" },
    { question: "Вставте злиття: Ela trabalha ___ hospital. (em + um)" },
    {
      question: "Яке злиття правильне? O livro está ___ mesa. (em + a)",
      explanation: "Прийменник «em» + означений артикль «a» = «na»: na mesa (на столі)."
    },
    { question: "Вставте злиття: Estou ___ cozinha. (em + a)" },
    { question: "Вставте злиття: O carro ___ Pedro é vermelho. (de + o)" },
    { question: "Вставте злиття: Ele saiu ___ casa velha. (de + uma)" },
    {
      question: "Яке злиття правильне? Passámos ___ parque. (por + o)",
      explanation: "Прийменник «por» + означений артикль «o» = «pelo»: pelo parque (через парк)."
    },
    { question: "Вставте злиття: As crianças brincam ___ ruas. (em + as)" },
    { question: "Вставте злиття: Estamos ___ centro da cidade. (em + o)" },
    { question: "Вставте злиття: Vivemos ___ arredores de Lisboa. (em + os)" },
    { question: "Вставте злиття: Andámos ___ cidade toda. (por + a)" },

    // === Ex5: Fill article/contraction in text (partial set, mixed types) ===
    { question: "Заповніть: ___ Pedro é estudante. (означений артикль ч.р.)" },
    {
      question: "Який артикль/злиття підходить? Ele é ___ Brasil. (de + o)",
      explanation: "«De» + «o» зливаються в «do»: Ele é do Brasil (Він із Бразилії)."
    },
    { question: "Заповніть: Ele estuda ___ Universidade de Lisboa. (em + a)" },
    { question: "Заповніть: ___ curso é interessante. (означений артикль ч.р.)" },
    { question: "Заповніть: As aulas ___ Pedro começam às nove. (de + o)" },
    { question: "Заповніть: Ele gosta ___ cidade. (de + a)" },

    // === Additional mixed exercises ===
    {
      question: "Зіставте злиття прийменників з артиклями:",
      pairs: [
        { left: "de + o", right: "do" },
        { left: "em + a", right: "na" },
        { left: "por + o", right: "pelo" },
        { left: "a + a", right: "à" }
      ]
    },
    {
      question: "Зіставте злиття прийменника «em» з неозначеними артиклями:",
      pairs: [
        { left: "em + um", right: "num" },
        { left: "em + uma", right: "numa" },
        { left: "em + uns", right: "nuns" },
        { left: "em + umas", right: "numas" }
      ]
    },
    { question: "Складіть речення: «Книжка викладача лежить на столі»." },
    { source: "Діти грають у парку." },
    {
      question: "Коли НЕ вживається означений артикль у португальській?",
      explanation: "Після дієслова «falar» артикль перед назвою мови зазвичай опускається: Falo português (Я говорю португальською)."
    },
    { source: "Ми живемо в Португалії." },
    { question: "Складіть речення: «Я йду в університет»." },
    {
      question: "Яке злиття правильне для «de + as»?",
      explanation: "Прийменник «de» + артикль «as» = «das». Наприклад: das flores (квітів)."
    },
    { question: "Вставте злиття: Vou ___ praia amanhã. (a + a)" },
    {
      question: "Яке злиття правильне для «a + os»?",
      explanation: "Прийменник «a» + артикль «os» = «aos». Наприклад: aos domingos (щонеділі)."
    },
    {
      question: "Зіставте злиття прийменника «de» з артиклями:",
      pairs: [
        { left: "de + o", right: "do" },
        { left: "de + a", right: "da" },
        { left: "de + os", right: "dos" },
        { left: "de + as", right: "das" }
      ]
    },
    { question: "Вставте злиття: Ele vem ___ escola. (de + a)" },
    { source: "Вона працює в лікарні." },
  ],
};
