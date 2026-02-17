export const exercises = [
      // === EXISTING 5 EXERCISES ===
      {
        type: "choice",
        question: "Выберите правильное слияние: Eu vou ___ supermercado. (a + o)",
        options: ["no", "do", "ao", "pelo"],
        correct: 2,
        explanation: "Предлог «a» сливается с артиклем «o» и образует «ao». Ir ao supermercado — идти в супермаркет."
      },
      {
        type: "fill",
        question: "Заполните: Ela mora ___ Lisboa. (em + a = ...)",
        answer: "na"
      },
      {
        type: "choice",
        question: "Какой артикль подходит? ___ carro é novo.",
        options: ["A", "O", "Uma", "As"],
        correct: 1,
        explanation: "Carro (машина) — мужского рода, поэтому определённый артикль — «o»."
      },
      {
        type: "translate",
        source: "Eu gosto da comida portuguesa.",
        direction: "pt-ru",
        answer: ["Мне нравится португальская еда.", "Я люблю португальскую еду."]
      },
      {
        type: "fill",
        question: "Вставьте слияние предлога «de» с артиклем: O livro ___ professor. (de + o)",
        answer: "do"
      },
      // === NEW EXERCISES ===
      {
        type: "choice",
        question: "Какой неопределённый артикль у слова «casa» (дом)?",
        options: ["um", "uma", "uns", "umas"],
        correct: 1,
        explanation: "Casa — женского рода, поэтому неопределённый артикль — «uma»: uma casa."
      },
      {
        type: "fill",
        question: "Вставьте слияние: Ele está ___ escola. (em + a = ...)",
        answer: "na"
      },
      {
        type: "choice",
        question: "Какое слияние правильное? Ele saiu ___ restaurante. (de + o)",
        options: ["da", "do", "no", "ao"],
        correct: 1,
        explanation: "Предлог «de» + артикль «o» = «do». Sair do restaurante — выйти из ресторана."
      },
      {
        type: "fill",
        question: "Вставьте слияние: A chave ___ carro está aqui. (de + o = ...)",
        answer: "do"
      },
      {
        type: "match",
        question: "Соотнесите слияния предлогов с артиклями:",
        pairs: [
          { left: "de + a", right: "da" },
          { left: "em + o", right: "no" },
          { left: "a + os", right: "aos" },
          { left: "por + a", right: "pela" }
        ]
      },
      {
        type: "choice",
        question: "Выберите правильное слияние: Nós passámos ___ parque. (por + o)",
        options: ["polo", "pelo", "pro", "no"],
        correct: 1,
        explanation: "Предлог «por» + артикль «o» = «pelo». Passar pelo parque — проходить через парк."
      },
      {
        type: "fill",
        question: "Вставьте артикль: ___ meninas estão na escola. (определённый, ж.р., мн.ч.)",
        answer: "As"
      },
      {
        type: "choice",
        question: "Когда НЕ используется определённый артикль?",
        options: ["Перед именами стран: a Portugal", "Перед названиями языков: o português", "С притяжательными: o meu livro", "После глагола «falar»: Falo português"],
        correct: 3,
        explanation: "После глагола «falar» артикль перед языком обычно опускается: Falo português (Я говорю по-португальски)."
      },
      {
        type: "fill",
        question: "Вставьте слияние: Vou ___ praia. (a + a = ...)",
        answer: "à"
      },
      {
        type: "translate",
        source: "Книга ученика на столе.",
        direction: "ru-pt",
        answer: ["O livro do aluno está na mesa."]
      },
      {
        type: "choice",
        question: "Какой артикль используется? ___ crianças brincam ___ jardim. (определённый + em + o)",
        options: ["As ... no", "Os ... no", "As ... na", "Umas ... no"],
        correct: 0,
        explanation: "Crianças (дети) — женского рода мн.ч., поэтому «as». «Em + o» = «no»: As crianças brincam no jardim."
      },
      {
        type: "fill",
        question: "Вставьте слияние: Ela vem ___ Estados Unidos. (de + os = ...)",
        answer: "dos"
      },
      {
        type: "match",
        question: "Соотнесите слияния предлога «em» с артиклями:",
        pairs: [
          { left: "em + o", right: "no" },
          { left: "em + a", right: "na" },
          { left: "em + os", right: "nos" },
          { left: "em + as", right: "nas" }
        ]
      },
      {
        type: "choice",
        question: "Выберите правильный вариант: Há ___ livros na estante.",
        options: ["os", "uns", "o", "um"],
        correct: 1,
        explanation: "С глаголом «há» (есть, имеется) используется неопределённый артикль «uns» (некоторые): Há uns livros na estante."
      },
      {
        type: "fill",
        question: "Вставьте слияние: Ele pensa ___ filhos. (em + os = ...)",
        answer: "nos"
      },
      {
        type: "order",
        question: "Составьте предложение: «Я иду в библиотеку».",
        words: ["à", "Eu", "vou", "biblioteca"],
        answer: "Eu vou à biblioteca"
      },
      {
        type: "choice",
        question: "Какое слияние правильное для «por + as»?",
        options: ["pas", "polas", "pelas", "pras"],
        correct: 2,
        explanation: "Предлог «por» + артикль «as» = «pelas». Например: pelas ruas (по улицам)."
      },
      {
        type: "fill",
        question: "Вставьте слияние: Ela gosta ___ flores. (de + as = ...)",
        answer: "das"
      },
      {
        type: "translate",
        source: "Мы живём в Португалии.",
        direction: "ru-pt",
        answer: ["Nós moramos em Portugal.", "Moramos em Portugal.", "Nós vivemos em Portugal.", "Vivemos em Portugal."]
      },
      {
        type: "choice",
        question: "Какой артикль перед «água» (вода)?",
        options: ["o", "a", "os", "um"],
        correct: 1,
        explanation: "Água — женского рода: a água. Хотя слово начинается с ударного «а», артикль всё равно «a»."
      },
      {
        type: "fill",
        question: "Вставьте неопределённый артикль: Ele comprou ___ carro novo. (м.р., ед.ч.)",
        answer: "um"
      },
      {
        type: "match",
        question: "Соотнесите слияния предлога «a» с артиклями:",
        pairs: [
          { left: "a + o", right: "ao" },
          { left: "a + a", right: "à" },
          { left: "a + os", right: "aos" },
          { left: "a + as", right: "às" }
        ]
      },
      {
        type: "choice",
        question: "Выберите правильный вариант: ___ alunos estudam ___ universidade. (определённый + em + a)",
        options: ["Os ... na", "Os ... no", "As ... na", "Uns ... em a"],
        correct: 0,
        explanation: "Alunos (ученики) — мужской род мн.ч., поэтому «os». «Em + a» = «na»: Os alunos estudam na universidade."
      }
    ];
