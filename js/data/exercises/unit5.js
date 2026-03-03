export const exercises = [
  // === Ex1: Conjugate irregular verbs (12 items) ===
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ -me um presente. (dar — давать)",
    answer: "dá"
  },
  {
    type: "fill",
    question: "Проспрягайте: Tu ___ ao cinema hoje? (ir — идти)",
    answer: "vais"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ muitos amigos. (ter — иметь)",
    options: ["tenho", "tens", "tem", "têm"],
    correct: 3,
    explanation: "Для «eles» форма глагола «ter» — «têm» (с циркумфлексом, чтобы отличить от «tem» — он/она имеет)."
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ televisão à noite. (ver — видеть/смотреть)",
    answer: "vejo"
  },
  {
    type: "fill",
    question: "Проспрягайте: Tu ___ os trabalhos de casa? (fazer — делать)",
    answer: "fazes"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ de férias amanhã. (ir)",
    options: ["vou", "vais", "vai", "vão"],
    correct: 3,
    explanation: "Для «eles» форма глагола «ir» — «vão»: Eles vão de férias."
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ que está cansado. (dizer — говорить/сказать)",
    answer: "diz"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ela ___ bem a cidade. (conhecer — знать/быть знакомым)",
    answer: "conhece"
  },
  {
    type: "fill",
    question: "Проспрягайте: Nós ___ música clássica. (ouvir — слушать)",
    answer: "ouvimos"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ a verdade. (saber — знать)",
    options: ["sei", "sabes", "sabe", "sabem"],
    correct: 3,
    explanation: "Для «eles» форма глагола «saber» — «sabem»."
  },
  {
    type: "fill",
    question: "Проспрягайте: Tu ___ o quê? (trazer — приносить)",
    answer: "trazes"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ela ___ onde fica a estação. (saber — знать)",
    answer: "sabe"
  },

  // === Ex2: Rewrite with different pronoun (selected items) ===
  {
    type: "translate",
    source: "Ele conhece Lisboa. → Eu ___",
    direction: "pt-ru",
    answer: ["Eu conheço Lisboa."]
  },
  {
    type: "fill",
    question: "Перепишите с другим местоимением: Eu sei a resposta. → Nós ___ a resposta.",
    answer: "sabemos"
  },
  {
    type: "fill",
    question: "Перепишите: Ele vai ao Porto. → Tu ___ ao Porto.",
    answer: "vais"
  },
  {
    type: "fill",
    question: "Перепишите: Nós vemos o mar. → Ela só ___ o mar.",
    answer: "vê"
  },

  // === Ex3: Conjugate in text (10 items) ===
  {
    type: "fill",
    question: "Заполните текст: Portugal ___ muitas tradições. (ter — иметь, ele)",
    answer: "tem"
  },
  {
    type: "fill",
    question: "Заполните: O clima ___ o país atractivo. (fazer — делать, ele)",
    answer: "faz"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Os turistas ___ ao Algarve. (ir)",
    options: ["vou", "vais", "vai", "vão"],
    correct: 3,
    explanation: "Для «os turistas» (eles) форма глагола «ir» — «vão»."
  },
  {
    type: "fill",
    question: "Заполните: O sol ___ muitos visitantes. (trazer — приносить/привлекать, ele → traz)",
    answer: "traz"
  },
  {
    type: "fill",
    question: "Заполните: O sol ___ o dia agradável. (fazer — делать, ele)",
    answer: "faz"
  },
  {
    type: "fill",
    question: "Заполните: Os visitantes ___ as praias. (ver — видеть, eles)",
    answer: "vêem"
  },
  {
    type: "fill",
    question: "Заполните: Os portugueses ___ presentes aos amigos. (dar — давать, eles)",
    answer: "dão"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ cozinhar bem. (saber)",
    options: ["sei", "sabes", "sabe", "sabem"],
    correct: 3,
    explanation: "Для «eles» — «sabem»: Eles sabem cozinhar bem (Они умеют хорошо готовить)."
  },
  {
    type: "fill",
    question: "Заполните: Eles ___ bem a gastronomia. (conhecer — знать, eles)",
    answer: "conhecem"
  },
  {
    type: "fill",
    question: "Заполните: Todos ___ que a comida é boa. (dizer — говорить, eles)",
    answer: "dizem"
  },

  // === Ex4: Answer questions (8 items) ===
  {
    type: "fill",
    question: "Ответьте: Sabes onde fica o museu? — Sim, eu ___ . (saber)",
    answer: "sei"
  },
  {
    type: "fill",
    question: "Ответьте: Vais ao cinema? — Sim, eu ___ . (ir)",
    answer: "vou"
  },
  {
    type: "fill",
    question: "Ответьте: O que dizes? — Eu ___ a verdade. (dizer)",
    answer: "digo"
  },
  {
    type: "choice",
    question: "Ответьте: Dás-me o livro? — Sim, eu ___ -te o livro. (dar)",
    options: ["dá", "dou", "dás", "dão"],
    correct: 1,
    explanation: "Для «eu» форма глагола «dar» — «dou»: Eu dou-te o livro."
  },
  {
    type: "fill",
    question: "Ответьте: Conheces a Maria? — Sim, eu ___ a Maria. (conhecer)",
    answer: "conheço"
  },
  {
    type: "fill",
    question: "Ответьте: O que fazem vocês? — Nós ___ o jantar. (fazer)",
    answer: "fazemos"
  },
  {
    type: "fill",
    question: "Ответьте: Vês aquele edifício? — Sim, eu ___ . (ver)",
    answer: "vejo"
  },
  {
    type: "fill",
    question: "Ответьте: Tens irmãos? — Sim, eu ___ dois irmãos. (ter)",
    answer: "tenho"
  },

  // === Ex5: Saber or conhecer (12 items) ===
  {
    type: "fill",
    question: "Saber или conhecer? Ela ___ o Porto muito bem. (быть знакомой с городом)",
    answer: "conhece"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Tu ___ a Maria? (быть знакомым)",
    answer: "conheces"
  },
  {
    type: "choice",
    question: "Saber или conhecer? Ele ___ falar francês. (уметь)",
    options: ["conhece", "sabe", "conhecem", "sabem"],
    correct: 1,
    explanation: "«Saber» используется для умений и знаний фактов: Ele sabe falar francês (Он умеет говорить по-французски)."
  },
  {
    type: "fill",
    question: "Saber или conhecer? Ela ___ onde fica a escola. (знать факт)",
    answer: "sabe"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Eles ___ nadar. (уметь)",
    answer: "sabem"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Eu ___ bem esta zona. (быть знакомым с местом)",
    answer: "conheço"
  },
  {
    type: "choice",
    question: "Saber или conhecer? Ele não ___ a que horas começa o filme. (знать факт)",
    options: ["conhece", "sabe", "conhecem", "sabem"],
    correct: 1,
    explanation: "«Saber» используется для знания фактов и информации: Ele não sabe a que horas começa o filme."
  },
  {
    type: "fill",
    question: "Saber или conhecer? Ela ___ cozinhar muito bem. (уметь)",
    answer: "sabe"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Nós ___ bem os nossos vizinhos. (быть знакомыми)",
    answer: "conhecemos"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Vocês ___ o novo restaurante? (быть знакомыми с местом)",
    answer: "conhecem"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Ele ___ a resposta. (знать факт)",
    answer: "sabe"
  },
  {
    type: "fill",
    question: "Saber или conhecer? Tu ___ quem é o director? (знать факт)",
    answer: "sabes"
  },

  // === Ex6: Conjugate in text about tourism (10 items) ===
  {
    type: "fill",
    question: "Заполните: Quem ___ Portugal, adora o país. (ver — видеть/посещать, ele → vê)",
    answer: "vê"
  },
  {
    type: "fill",
    question: "Заполните: Os turistas ___ muitas actividades. (fazer — делать, eles)",
    answer: "fazem"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Os hotéis ___ boas condições. (ter)",
    options: ["tenho", "tens", "tem", "têm"],
    correct: 3,
    explanation: "Для «os hotéis» (eles) — «têm»: Os hotéis têm boas condições."
  },
  {
    type: "fill",
    question: "Заполните: Quem ___ ao Algarve, não quer sair. (ir — идти, ele → vai)",
    answer: "vai"
  },
  {
    type: "fill",
    question: "Заполните: Todos ___ que Portugal é lindo. (dizer — говорить, eles)",
    answer: "dizem"
  },
  {
    type: "fill",
    question: "Заполните: A beleza ___ turistas de todo o mundo. (atrair — привлекать, ela)",
    answer: "atrai"
  },
  {
    type: "fill",
    question: "Заполните: Muitos ___ à praia no verão. (ir — идти, eles)",
    answer: "vão"
  },
  {
    type: "choice",
    question: "Какая форма правильная? O bom tempo ___ alegria. (trazer — приносить)",
    options: ["trago", "trazes", "traz", "trazem"],
    correct: 2,
    explanation: "Для «ele» (o bom tempo) — «traz»: O bom tempo traz alegria."
  },
  {
    type: "fill",
    question: "Заполните: O país ___ muito para oferecer. (ter — иметь, ele)",
    answer: "tem"
  },
  {
    type: "fill",
    question: "Заполните: Os visitantes ___ paisagens incríveis. (ver — видеть, eles → vêem)",
    answer: "vêem"
  },

  // === Additional mixed exercises ===
  {
    type: "match",
    question: "Соотнесите местоимения с формами глагола «ir» (идти):",
    pairs: [
      { left: "eu", right: "vou" },
      { left: "tu", right: "vais" },
      { left: "ele/ela", right: "vai" },
      { left: "eles/elas", right: "vão" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите местоимения с формами глагола «ter» (иметь):",
    pairs: [
      { left: "eu", right: "tenho" },
      { left: "tu", right: "tens" },
      { left: "ele/ela", right: "tem" },
      { left: "eles/elas", right: "têm" }
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Я не знаю, где она живёт».",
    words: ["onde", "sei", "ela", "Eu", "não", "mora"],
    answer: "Eu não sei onde ela mora"
  },
  {
    type: "translate",
    source: "Они знают Лиссабон очень хорошо.",
    direction: "ru-pt",
    answer: ["Eles conhecem Lisboa muito bem.", "Elas conhecem Lisboa muito bem."]
  },
  {
    type: "order",
    question: "Составьте предложение: «Что ты делаешь сегодня вечером?»",
    words: ["hoje", "tu", "fazes", "O que", "à noite", "?"],
    answer: "O que fazes tu hoje à noite?"
  },
  {
    type: "translate",
    source: "Мы идём в ресторан и дарим подарки.",
    direction: "ru-pt",
    answer: ["Nós vamos ao restaurante e damos presentes.", "Vamos ao restaurante e damos presentes."]
  },
  {
    type: "match",
    question: "Выберите правильный глагол — saber или conhecer:",
    pairs: [
      { left: "falar inglês (уметь)", right: "saber" },
      { left: "a cidade (быть знакомым)", right: "conhecer" },
      { left: "a resposta (знать факт)", right: "saber" },
      { left: "o professor (быть знакомым)", right: "conhecer" }
    ]
  }
];
