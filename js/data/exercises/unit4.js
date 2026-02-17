export const exercises = [
      // === EXISTING 5 EXERCISES ===
      {
        type: "fill",
        question: "Проспрягайте глагол «morar» (жить) для «nós»: Nós ___ em Lisboa.",
        answer: "moramos"
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Tu ___ água? (beber)",
        options: ["bebo", "bebe", "bebes", "bebem"],
        correct: 2,
        explanation: "Для «tu» глагол на -er получает окончание -es: bebes."
      },
      {
        type: "translate",
        source: "Ela fala inglês e português.",
        direction: "pt-ru",
        answer: ["Она говорит по-английски и по-португальски.", "Она говорит на английском и на португальском."]
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «abrir» (открывать) для «eu»: Eu ___ a porta.",
        answer: "abro"
      },
      {
        type: "choice",
        question: "Какое местоимение используется для вежливого обращения в европейском португальском?",
        options: ["tu", "eu", "você / o senhor / a senhora", "nós"],
        correct: 2,
        explanation: "В Португалии для вежливого обращения используют «você», «o senhor» (к мужчине) или «a senhora» (к женщине)."
      },
      // === NEW EXERCISES ===
      {
        type: "fill",
        question: "Проспрягайте глагол «falar» (говорить) для «eu»: Eu ___ português.",
        answer: "falo"
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Eles ___ na universidade. (estudar)",
        options: ["estudo", "estudas", "estuda", "estudam"],
        correct: 3,
        explanation: "Для «eles» (они) глагол на -ar получает окончание -am: estudam."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «trabalhar» (работать) для «ela»: Ela ___ num banco.",
        answer: "trabalha"
      },
      {
        type: "match",
        question: "Соотнесите местоимения с формами глагола «falar»:",
        pairs: [
          { left: "eu", right: "falo" },
          { left: "tu", right: "falas" },
          { left: "nós", right: "falamos" },
          { left: "eles", right: "falam" }
        ]
      },
      {
        type: "choice",
        question: "Какое окончание у глаголов на -ar для «nós»?",
        options: ["-amos", "-emos", "-imos", "-am"],
        correct: 0,
        explanation: "Глаголы на -ar в форме «nós» имеют окончание -amos: falamos, moramos, trabalhamos."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «comer» (есть) для «eu»: Eu ___ peixe.",
        answer: "como"
      },
      {
        type: "translate",
        source: "Мы работаем каждый день.",
        direction: "ru-pt",
        answer: ["Nós trabalhamos todos os dias.", "Trabalhamos todos os dias."]
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Você ___ em Portugal? (morar)",
        options: ["moro", "moras", "mora", "moram"],
        correct: 2,
        explanation: "«Você» спрягается как третье лицо ед.ч., поэтому окончание -a для глаголов на -ar: mora."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «viver» (жить) для «nós»: Nós ___ no Porto.",
        answer: "vivemos"
      },
      {
        type: "order",
        question: "Составьте предложение: «Ты говоришь по-португальски?»",
        words: ["português", "Tu", "falas", "?"],
        answer: "Tu falas português?"
      },
      {
        type: "choice",
        question: "Какое местоимение обозначает «мы»?",
        options: ["eu", "vós", "nós", "eles"],
        correct: 2,
        explanation: "«Nós» — местоимение для «мы». «Eu» — я, «vós» — вы (мн.ч., устар.), «eles» — они."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «partir» (уезжать) для «tu»: Tu ___ amanhã?",
        answer: "partes"
      },
      {
        type: "match",
        question: "Соотнесите окончания глаголов с группами спряжения для «eu»:",
        pairs: [
          { left: "-ar (falar)", right: "-o (falo)" },
          { left: "-er (comer)", right: "-o (como)" },
          { left: "-ir (partir)", right: "-o (parto)" }
        ]
      },
      {
        type: "translate",
        source: "Они живут в Лиссабоне.",
        direction: "ru-pt",
        answer: ["Eles moram em Lisboa.", "Eles vivem em Lisboa.", "Elas moram em Lisboa.", "Elas vivem em Lisboa."]
      },
      {
        type: "choice",
        question: "Выберите правильную форму: Nós ___ o livro. (ler - читать, -er глагол)",
        options: ["lo", "les", "lemos", "lem"],
        correct: 2,
        explanation: "Для «nós» глагол на -er получает окончание -emos: lemos."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «comprar» (покупать) для «vocês»: Vocês ___ pão todos os dias?",
        answer: "compram"
      },
      {
        type: "choice",
        question: "Какая форма глагола «escrever» (писать) для «ele»?",
        options: ["escrevo", "escreves", "escreve", "escrevem"],
        correct: 2,
        explanation: "Для «ele» глагол на -er получает окончание -e: escreve."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «cantar» (петь) для «tu»: Tu ___ muito bem!",
        answer: "cantas"
      },
      {
        type: "order",
        question: "Составьте предложение: «Мы учим португальский».",
        words: ["português", "Nós", "aprendemos"],
        answer: "Nós aprendemos português"
      },
      {
        type: "choice",
        question: "Какой глагол правильно спрягается? Eu ___ a janela. (abrir)",
        options: ["abro", "abres", "abre", "abrimos"],
        correct: 0,
        explanation: "Для «eu» глагол на -ir получает окончание -o: abro."
      },
      {
        type: "translate",
        source: "Ты учишься или работаешь?",
        direction: "ru-pt",
        answer: ["Tu estudas ou trabalhas?", "Você estuda ou trabalha?"]
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «gostar» (нравиться) для «ela»: Ela ___ de música.",
        answer: "gosta"
      },
      {
        type: "choice",
        question: "Какое местоимение НЕ спрягается как третье лицо единственного числа?",
        options: ["ele", "você", "tu", "a senhora"],
        correct: 2,
        explanation: "«Tu» имеет собственное спряжение (2-е лицо ед.ч.). «Você», «ele» и «a senhora» спрягаются одинаково — как 3-е лицо ед.ч."
      },
      {
        type: "fill",
        question: "Проспрягайте глагол «beber» (пить) для «eles»: Eles ___ café de manhã.",
        answer: "bebem"
      }
    ];
