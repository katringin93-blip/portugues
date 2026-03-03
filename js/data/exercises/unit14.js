export const exercises = [
  // === Ex1: Спряжение возвратных глаголов ===
  {
    type: "fill",
    question: "Спрягайте возвратный глагол: Eu (pentear-se) todos os dias. → Eu ___",
    answer: "penteio-me"
  },
  {
    type: "fill",
    question: "Спрягайте: Eles (deitar-se) tarde. → Eles ___",
    answer: "deitam-se"
  },
  {
    type: "fill",
    question: "Спрягайте: Ele (despedir-se) dos amigos. → Ele ___",
    answer: "despede-se"
  },
  {
    type: "fill",
    question: "Спрягайте: Tu (ofender-se) facilmente. → Tu ___",
    answer: "ofendes-te"
  },
  {
    type: "choice",
    question: "Как спрягается «aborrecer-se» в 1-м лице мн.ч.?",
    options: ["aborrecemo-nos", "aborrecemos-nos", "nos aborrecemos", "aborrece-nos"],
    correct: 0,
    explanation: "Nós aborrecemo-nos. Буква -s в «aborrecemos» отпадает перед «nos»."
  },
  {
    type: "fill",
    question: "Спрягайте: Eles (interrogar-se) sobre o futuro. → Eles ___",
    answer: "interrogam-se"
  },
  {
    type: "fill",
    question: "Спрягайте с проклизой: Eu não (sentir-se) bem. → Eu não ___",
    answer: "me sinto"
  },
  {
    type: "fill",
    question: "Спрягайте: A Maria (zangar-se) facilmente. → A Maria ___",
    answer: "zanga-se"
  },
  {
    type: "choice",
    question: "Как спрягается «vestir-se» в 3-м лице ед.ч.?",
    options: ["veste-se", "viste-se", "vesta-se", "vestir-se"],
    correct: 0,
    explanation: "Vestir — ele veste (e→e в 3-м лице). В утвердительном — энклиза: veste-se."
  },
  {
    type: "fill",
    question: "Спрягайте: O João (achar-se) inteligente. → O João ___",
    answer: "acha-se"
  },
  {
    type: "fill",
    question: "Спрягайте с проклизой: Ela não (ver-se) no espelho. → Ela não ___",
    answer: "se vê"
  },
  {
    type: "fill",
    question: "Спрягайте: Tu (comprometer-se) a ajudar. → Tu ___",
    answer: "comprometes-te"
  },
  // === Ex2: Определите возвратные предложения ===
  {
    type: "choice",
    question: "Какое из предложений содержит возвратный глагол?\n1) Eu lavo o carro.\n2) Eu lavo-me todas as manhãs.\n3) Eu vejo o João.\n4) Eu leio o jornal.",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "«Lavo-me» — возвратный глагол (мою себя). «Lavo o carro» — переходный (мою машину)."
  },
  {
    type: "choice",
    question: "Какие глаголы являются возвратными?\n1) Ele come o bolo.\n2) Ele deita-se cedo.\n3) Ela penteia a filha.\n4) Ela penteia-se.",
    options: ["1 и 3", "2 и 4", "1 и 4", "2 и 3"],
    correct: 1,
    explanation: "Возвратные глаголы: deita-se (ложится) и penteia-se (причёсывается). Остальные — переходные."
  },
  {
    type: "match",
    question: "Соотнесите возвратные глаголы с их значениями:",
    pairs: [
      ["zangar-se", "злиться"],
      ["lembrar-se", "вспоминать"],
      ["esquecer-se", "забывать"],
      ["apaixonar-se", "влюбляться"],
      ["enganar-se", "ошибаться"],
      ["sentir-se", "чувствовать себя"]
    ]
  },
  // === Ex3: Перестановка местоимения ===
  {
    type: "fill",
    question: "Перепишите с «nunca»: Ele zanga-se. → Ele nunca ___",
    answer: "se zanga"
  },
  {
    type: "translate",
    source: "Она всегда причёсывается. (está sempre a pentear-se)",
    direction: "ru-pt",
    answer: ["Ela está sempre a pentear-se."]
  },
  {
    type: "translate",
    source: "Они обманывают друг друга. (enganar-se uns aos outros)",
    direction: "ru-pt",
    answer: ["Enganam-se uns aos outros.", "Eles enganam-se uns aos outros."]
  },
  {
    type: "fill",
    question: "Перепишите с «Ninguém»: Eles lembram-se. → Ninguém ___",
    answer: "se lembra"
  },
  {
    type: "choice",
    question: "Как правильно: «Como ___ chamam?» (Как их зовут?)",
    options: ["se chamam", "chamam-se", "se-chamam", "chamam se"],
    correct: 0,
    explanation: "«Como» — вопросительное слово, вызывает проклизу: Como se chamam?"
  },
  {
    type: "translate",
    source: "Они забывают. (estão a esquecer-se)",
    direction: "ru-pt",
    answer: ["Estão a esquecer-se.", "Eles estão a esquecer-se."]
  },
  {
    type: "fill",
    question: "Перепишите: Ela (apaixonar-se) sempre. → Ela ___",
    answer: "apaixona-se sempre"
  },
  {
    type: "fill",
    question: "Перепишите: Nós (ver-se) em casa. → Nós ___",
    answer: "vemo-nos em casa"
  },
  {
    type: "fill",
    question: "Перепишите с «nunca»: Ele lava-se. → Ele nunca ___",
    answer: "se lava"
  },
  // === Ex4: Вставьте правильную форму возвратного глагола ===
  {
    type: "fill",
    question: "Onde é que tu ___ (sentar-se)? (Где ты садишься?)",
    answer: "te sentas"
  },
  {
    type: "fill",
    question: "Eu ___ (aborrecer-se) com filmes longos. (Я скучаю на длинных фильмах.)",
    answer: "aborreço-me"
  },
  {
    type: "choice",
    question: "Заполните: Ele ___ (chatear-se) com o irmão.",
    options: ["chateia-se", "se chateia", "chateia-me", "chateia-te"],
    correct: 0,
    explanation: "В утвердительном предложении — энклиза: chateia-se."
  },
  {
    type: "fill",
    question: "Ela nunca ___ (irritar-se). (Она никогда не раздражается.)",
    answer: "se irrita"
  },
  {
    type: "fill",
    question: "Quem ___ (lembrar-se) do nome? (Кто помнит имя?)",
    answer: "se lembra"
  },
  {
    type: "choice",
    question: "Заполните: O avô ___ (sentir-se) cansado.",
    options: ["sente-se", "se sente", "sento-se", "sinta-se"],
    correct: 0,
    explanation: "В утвердительном предложении — энклиза: O avô sente-se cansado."
  },
  {
    type: "fill",
    question: "Eles ___ (enganar-se) muitas vezes. (Они часто ошибаются.)",
    answer: "enganam-se"
  },
  // === Ex5: Порядок действий ===
  {
    type: "order",
    question: "Составьте: «Я встаю, моюсь и одеваюсь.»",
    words: ["Levanto", "-me", ",", "lavo", "-me", "e", "visto", "-me"],
    answer: "Levanto-me, lavo-me e visto-me."
  },
  {
    type: "order",
    question: "Составьте отрицательное: «Он никогда не злится.»",
    words: ["Ele", "nunca", "se", "zanga"],
    answer: "Ele nunca se zanga."
  },
  {
    type: "match",
    question: "Соотнесите возвратные глаголы с действиями утреннего распорядка:",
    pairs: [
      ["acordar-se", "просыпаться"],
      ["levantar-se", "вставать"],
      ["lavar-se", "мыться"],
      ["vestir-se", "одеваться"],
      ["pentear-se", "причёсываться"]
    ]
  },
  // === Ex6: Текст о фадиштах ===
  {
    type: "fill",
    question: "Os fadistas ___ (orgulhar-se) da tradição. (Фадишты гордятся традицией.)",
    answer: "orgulham-se"
  },
  {
    type: "fill",
    question: "A fadista ___ (vestir-se) de negro. (Фадистка одевается в чёрное.)",
    answer: "veste-se"
  },
  {
    type: "choice",
    question: "Как будет «Музыканты одеваются элегантно» (vestir-se)?",
    options: ["vestem-se elegantemente", "se vestem elegantemente", "vistam-se elegantemente", "vestam-se elegantemente"],
    correct: 0,
    explanation: "В утвердительном предложении — энклиза: Os músicos vestem-se elegantemente."
  },
  {
    type: "fill",
    question: "Os artistas ___ (apresentar-se) no palco. (Артисты представляются на сцене.)",
    answer: "apresentam-se"
  },
  {
    type: "fill",
    question: "Quando ___ (vestir-se) de negro, parecem sombras. (Когда одеваются в чёрное... — проклиза)",
    answer: "se vestem"
  },
  {
    type: "fill",
    question: "O fado ___ (acompanhar-se) de guitarra portuguesa. (Фаду аккомпанируется португальской гитарой.)",
    answer: "acompanha-se"
  },
  {
    type: "translate",
    source: "Этот стиль музыки называется «фаду». (chamar-se)",
    direction: "ru-pt",
    answer: ["Este estilo de música chama-se fado."]
  }
];