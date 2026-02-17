export const exercises = [
  // === Existing exercises ===
  {
    type: "fill",
    question: "Как тебя зовут? = Como ___ chamas?",
    answer: "te"
  },
  {
    type: "choice",
    question: "Eu ___ às oito horas. (levantar-se)",
    options: ["levanto-me", "me levanto", "levanto-se", "se levanto"],
    correct: 0,
    explanation: "В утвердительном предложении (без «притягивающих» слов) — энклиза: levanto-me."
  },
  {
    type: "translate",
    source: "Они ложатся спать поздно.",
    direction: "ru-pt",
    answer: ["Eles deitam-se tarde.", "Eles deitam-se muito tarde."]
  },
  {
    type: "choice",
    question: "Отрицательная форма «Eu levanto-me cedo» →",
    options: ["Eu levanto-me não cedo", "Eu não levanto-me cedo", "Eu não me levanto cedo", "Eu me não levanto cedo"],
    correct: 2,
    explanation: "При отрицании местоимение переходит перед глагол: «Eu não me levanto cedo»."
  },
  {
    type: "fill",
    question: "Мы веселимся: Nós divertimo-___.",
    answer: "nos"
  },
  // === New exercises: Reflexive Pronoun Forms ===
  {
    type: "match",
    question: "Соотнесите личные местоимения с возвратными:",
    pairs: [
      ["eu", "me"],
      ["tu", "te"],
      ["ele/ela/você", "se"],
      ["nós", "nos"],
      ["eles/elas/vocês", "se"]
    ]
  },
  {
    type: "fill",
    question: "Он моется: Ele lava-___.",
    answer: "se"
  },
  {
    type: "fill",
    question: "Вы садитесь: Vocês sentam-___.",
    answer: "se"
  },
  {
    type: "choice",
    question: "Как спрягается «vestir-se» (одеваться) в 1-м лице ед.ч.?",
    options: ["Eu visto-me.", "Eu me visto.", "Eu vesto-me.", "Eu visto-se."],
    correct: 0,
    explanation: "Vestir — eu visto (неправильный глагол, e→i). В утвердительном — энклиза: visto-me."
  },
  // === Common reflexive verbs ===
  {
    type: "fill",
    question: "Я просыпаюсь рано: Eu acordo-___ cedo.",
    answer: "me"
  },
  {
    type: "translate",
    source: "Она ложится спать в десять часов.",
    direction: "ru-pt",
    answer: ["Ela deita-se às dez horas.", "Ela deita-se às dez."]
  },
  {
    type: "choice",
    question: "Какой глагол означает «причёсываться»?",
    options: ["lavar-se", "pentear-se", "vestir-se", "barbear-se"],
    correct: 1,
    explanation: "Pentear-se = причёсываться. Lavar-se = мыться, vestir-se = одеваться, barbear-se = бриться."
  },
  {
    type: "fill",
    question: "Он бреется каждое утро: Ele barbeia-___ todas as manhãs.",
    answer: "se"
  },
  {
    type: "translate",
    source: "Мы садимся за стол.",
    direction: "ru-pt",
    answer: ["Sentamo-nos à mesa.", "Nós sentamo-nos à mesa."]
  },
  {
    type: "match",
    question: "Соотнесите возвратные глаголы с их значениями:",
    pairs: [
      ["levantar-se", "вставать"],
      ["deitar-se", "ложиться"],
      ["vestir-se", "одеваться"],
      ["lavar-se", "мыться"],
      ["sentar-se", "садиться"],
      ["chamar-se", "зваться"]
    ]
  },
  // === Proclisis with reflexive verbs ===
  {
    type: "fill",
    question: "Я не ложусь поздно: Eu não ___ deito tarde.",
    answer: "me"
  },
  {
    type: "choice",
    question: "«Ela nunca ___ levanta cedo.» Какое местоимение?",
    options: ["me", "te", "se", "nos"],
    correct: 2,
    explanation: "Подлежащее «ela» → возвратное «se». После «nunca» — проклиза: nunca se levanta."
  },
  {
    type: "translate",
    source: "Ты не одеваешься быстро.",
    direction: "ru-pt",
    answer: ["Tu não te vestes depressa.", "Não te vestes depressa."]
  },
  {
    type: "fill",
    question: "Кто там сидит? Quem ___ senta ali?",
    answer: "se"
  },
  {
    type: "choice",
    question: "«Também ___ levanto às sete.» (Я тоже встаю в семь.)",
    options: ["me", "se", "te", "nos"],
    correct: 0,
    explanation: "Подлежащее «eu» (подразумевается) → me. «Também» вызывает проклизу."
  },
  // === Reflexive with infinitive ===
  {
    type: "translate",
    source: "Я хочу помыться.",
    direction: "ru-pt",
    answer: ["Quero lavar-me.", "Eu quero lavar-me."]
  },
  {
    type: "fill",
    question: "Мы собираемся одеться: Vamos vestir-___.",
    answer: "nos"
  },
  {
    type: "choice",
    question: "«Preciso de ___-me cedo.» (Мне нужно рано встать.)",
    options: ["levantar", "levanto", "levantando", "levante"],
    correct: 0,
    explanation: "После предлога «de» используется инфинитив: Preciso de levantar-me."
  },
  {
    type: "translate",
    source: "Она может сесть здесь.",
    direction: "ru-pt",
    answer: ["Ela pode sentar-se aqui."]
  },
  // === Reciprocal meaning ===
  {
    type: "choice",
    question: "Что значит «Eles abraçam-se»?",
    options: ["Они обнимают себя", "Они обнимаются (друг друга)", "Они обнимают нас", "Они обнимают их"],
    correct: 1,
    explanation: "Возвратное местоимение «se» с мн.ч. может означать взаимное действие: «обнимаются» (друг друга)."
  },
  {
    type: "translate",
    source: "Мы видимся каждый день.",
    direction: "ru-pt",
    answer: ["Vemo-nos todos os dias.", "Nós vemo-nos todos os dias."]
  },
  {
    type: "fill",
    question: "Они любят друг друга: Eles amam-___.",
    answer: "se"
  },
  // === Daily routine exercises ===
  {
    type: "order",
    question: "Составьте предложение: «Я встаю в семь часов.»",
    words: ["Eu", "levanto", "-me", "às", "sete", "horas"],
    answer: "Eu levanto-me às sete horas."
  },
  {
    type: "translate",
    source: "Утром я просыпаюсь, встаю и моюсь.",
    direction: "ru-pt",
    answer: ["De manhã acordo-me, levanto-me e lavo-me."]
  },
  {
    type: "fill",
    question: "Дети одеваются: As crianças vestem-___.",
    answer: "se"
  },
  {
    type: "choice",
    question: "Как сказать «Мне пора вставать» с возвратным глаголом?",
    options: ["Tenho de me levantar.", "Tenho de levantar-me.", "Оба варианта правильные.", "Tenho de se levantar."],
    correct: 2,
    explanation: "При двух глаголах возвратное местоимение может стоять при любом из них: «Tenho de me levantar» или «Tenho de levantar-me»."
  },
  // === Reflexive vs non-reflexive ===
  {
    type: "choice",
    question: "Какая разница между «Eu lavo» и «Eu lavo-me»?",
    options: ["Нет разницы", "«Lavo» = мою что-то, «lavo-me» = моюсь", "«Lavo» = моюсь, «lavo-me» = мою что-то", "«Lavo-me» — будущее время"],
    correct: 1,
    explanation: "Без «-me» — глагол переходный (мою что-то/кого-то). С «-me» — возвратный (мою себя, моюсь)."
  },
  {
    type: "translate",
    source: "Она причёсывает дочь. / Она причёсывается.",
    direction: "ru-pt",
    answer: ["Ela penteia a filha. / Ela penteia-se."]
  },
  {
    type: "fill",
    question: "Мы забавляемся на вечеринке: Nós divertimo-___ na festa.",
    answer: "nos"
  },
  {
    type: "order",
    question: "Составьте отрицательное предложение: «Я не ложусь поздно.»",
    words: ["Eu", "não", "me", "deito", "tarde"],
    answer: "Eu não me deito tarde."
  },
  {
    type: "translate",
    source: "Как вас зовут?",
    direction: "ru-pt",
    answer: ["Como é que se chama?", "Como se chama?"]
  }
];
