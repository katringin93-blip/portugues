export const exercises = [
      // === EXISTING 5 EXERCISES ===
      {
        type: "choice",
        question: "Выберите правильную форму: Eu ___ ao Porto amanhã. (ir)",
        options: ["vou", "vai", "vais", "vamos"],
        correct: 0,
        explanation: "Для «eu» форма глагола ir — «vou»."
      },
      {
        type: "fill",
        question: "Проспрягайте «ter» для «eles»: Eles ___ muitos amigos.",
        answer: "têm"
      },
      {
        type: "translate",
        source: "Я не знаю, где она живёт.",
        direction: "ru-pt",
        answer: ["Eu não sei onde ela mora.", "Não sei onde ela mora."]
      },
      {
        type: "choice",
        question: "Какая форма глагола «querer» для «nós»?",
        options: ["querem", "queremos", "queres", "quero"],
        correct: 1,
        explanation: "Для «nós» форма глагола querer — «queremos»."
      },
      {
        type: "fill",
        question: "Проспрягайте «fazer» для «tu»: O que ___ tu aqui?",
        answer: "fazes"
      },
      // === NEW EXERCISES ===
      {
        type: "choice",
        question: "Выберите правильную форму глагола «ser» для «eu»:",
        options: ["sou", "és", "é", "somos"],
        correct: 0,
        explanation: "Спряжение «ser»: eu sou, tu és, ele/ela é, nós somos, vós sois, eles são."
      },
      {
        type: "fill",
        question: "Проспрягайте «estar» для «eu»: Eu ___ cansado.",
        answer: "estou"
      },
      {
        type: "choice",
        question: "Какая форма глагола «ir» для «nós»?",
        options: ["vou", "vais", "vai", "vamos"],
        correct: 3,
        explanation: "Для «nós» форма глагола ir — «vamos»: Nós vamos à praia."
      },
      {
        type: "match",
        question: "Соотнесите местоимения с формами глагола «ser»:",
        pairs: [
          { left: "eu", right: "sou" },
          { left: "tu", right: "és" },
          { left: "ele/ela", right: "é" },
          { left: "eles/elas", right: "são" }
        ]
      },
      {
        type: "fill",
        question: "Проспрягайте «ter» для «eu»: Eu ___ dois irmãos.",
        answer: "tenho"
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Tu ___ em casa? (estar)",
        options: ["estou", "estás", "está", "estão"],
        correct: 1,
        explanation: "Для «tu» форма глагола estar — «estás»."
      },
      {
        type: "translate",
        source: "Мы идём в ресторан.",
        direction: "ru-pt",
        answer: ["Nós vamos ao restaurante.", "Vamos ao restaurante."]
      },
      {
        type: "fill",
        question: "Проспрягайте «poder» для «eu»: Eu ___ ajudar-te.",
        answer: "posso"
      },
      {
        type: "choice",
        question: "Какая разница между «ser» и «estar»?",
        options: ["Нет разницы, они взаимозаменяемы", "Ser — постоянное, estar — временное", "Ser — для мест, estar — для людей", "Ser — настоящее, estar — прошлое"],
        correct: 1,
        explanation: "«Ser» используется для постоянных характеристик (Eu sou português), а «estar» — для временных состояний (Eu estou cansado)."
      },
      {
        type: "fill",
        question: "Проспрягайте «fazer» для «nós»: Nós ___ o jantar.",
        answer: "fazemos"
      },
      {
        type: "order",
        question: "Составьте предложение: «Я португалец».",
        words: ["português", "Eu", "sou"],
        answer: "Eu sou português"
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Eles ___ muito trabalho. (ter)",
        options: ["tenho", "tens", "tem", "têm"],
        correct: 3,
        explanation: "Для «eles» форма глагола ter — «têm» (с acento circunflexo, чтобы отличить от «tem» — он/она имеет)."
      },
      {
        type: "fill",
        question: "Проспрягайте «ir» для «tu»: Tu ___ ao cinema?",
        answer: "vais"
      },
      {
        type: "translate",
        source: "Она инженер.",
        direction: "ru-pt",
        answer: ["Ela é engenheira."]
      },
      {
        type: "choice",
        question: "Выберите правильный вариант: O João ___ doente hoje. (ser/estar)",
        options: ["é", "está", "sou", "estou"],
        correct: 1,
        explanation: "Болезнь — временное состояние, поэтому используется «estar»: O João está doente hoje."
      },
      {
        type: "fill",
        question: "Проспрягайте «poder» для «nós»: Nós ___ ir amanhã.",
        answer: "podemos"
      },
      {
        type: "match",
        question: "Соотнесите местоимения с формами глагола «estar»:",
        pairs: [
          { left: "eu", right: "estou" },
          { left: "tu", right: "estás" },
          { left: "ele/ela", right: "está" },
          { left: "nós", right: "estamos" }
        ]
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Eu ___ o almoço agora. (fazer)",
        options: ["faço", "fazes", "faz", "fazemos"],
        correct: 0,
        explanation: "Для «eu» форма глагола fazer — «faço» (с ç перед o)."
      },
      {
        type: "fill",
        question: "Проспрягайте «ser» для «nós»: Nós ___ estudantes.",
        answer: "somos"
      },
      {
        type: "translate",
        source: "Ты можешь мне помочь?",
        direction: "ru-pt",
        answer: ["Tu podes ajudar-me?", "Podes ajudar-me?", "Você pode ajudar-me?"]
      },
      {
        type: "choice",
        question: "Какая форма глагола «ir» для «eles»?",
        options: ["vou", "vai", "vamos", "vão"],
        correct: 3,
        explanation: "Для «eles/elas» форма глагола ir — «vão»: Eles vão ao supermercado."
      },
      {
        type: "fill",
        question: "Проспрягайте «estar» для «nós»: Nós ___ contentes.",
        answer: "estamos"
      },
      {
        type: "order",
        question: "Составьте предложение: «Что ты делаешь?»",
        words: ["fazes", "tu", "O que", "?"],
        answer: "O que fazes tu?"
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Lisboa ___ a capital de Portugal. (ser)",
        options: ["sou", "és", "é", "são"],
        correct: 2,
        explanation: "Для третьего лица единственного числа форма глагола ser — «é»: Lisboa é a capital de Portugal."
      },
      {
        type: "fill",
        question: "Проспрягайте «ter» для «tu»: Tu ___ razão.",
        answer: "tens"
      },
      {
        type: "translate",
        source: "Они голодные.",
        direction: "ru-pt",
        answer: ["Eles estão com fome.", "Elas estão com fome.", "Eles têm fome.", "Elas têm fome."]
      }
    ];
