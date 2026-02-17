export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Eu dou o livro ao João. → Eu ___-___ o livro.",
    options: ["dou-o", "dou-lhe", "dou-lo", "lhe dou"],
    correct: 1,
    explanation: "«Ao João» заменяется на «lhe» (косвенное дополнение). В утвердительном — энклиза: dou-lhe."
  },
  {
    type: "fill",
    question: "Она мне звонит: Ela telefona-___.",
    answer: "me"
  },
  {
    type: "translate",
    source: "Я хочу тебе кое-что сказать.",
    direction: "ru-pt",
    answer: ["Quero dizer-te uma coisa.", "Quero-te dizer uma coisa."]
  },
  {
    type: "choice",
    question: "Não ___ digo nada. (ей)",
    options: ["a", "lhe", "la", "lha"],
    correct: 1,
    explanation: "«Ей» — косвенное дополнение, используется «lhe». После «não» — проклиза."
  },
  {
    type: "fill",
    question: "Мы им пишем: Nós escrevemos-___.",
    answer: "lhes"
  },
  // === New exercises: Indirect Object Pronoun Forms ===
  {
    type: "match",
    question: "Соотнесите личные местоимения с косвенными дополнениями:",
    pairs: [
      ["eu", "me"],
      ["tu", "te"],
      ["ele/ela/você", "lhe"],
      ["nós", "nos"],
      ["eles/elas/vocês", "lhes"]
    ]
  },
  {
    type: "choice",
    question: "Какой предлог указывает на косвенное дополнение в португальском?",
    options: ["de", "em", "a", "com"],
    correct: 2,
    explanation: "Предлог «a» (ao/à) указывает на косвенное дополнение: dar algo A alguém."
  },
  {
    type: "fill",
    question: "Я ему даю подарок: Eu dou-___ um presente.",
    answer: "lhe"
  },
  {
    type: "fill",
    question: "Профессор нам объясняет: O professor explica-___.",
    answer: "nos"
  },
  // === Verbs that take indirect objects ===
  {
    type: "choice",
    question: "Какой из этих глаголов требует косвенное дополнение?",
    options: ["ver (видеть)", "comer (есть)", "telefonar (звонить)", "comprar (покупать)"],
    correct: 2,
    explanation: "«Telefonar» требует косвенное дополнение: telefonar A alguém (звонить кому-либо)."
  },
  {
    type: "fill",
    question: "Она мне отвечает: Ela responde-___.",
    answer: "me"
  },
  {
    type: "translate",
    source: "Мы вам пишем.",
    direction: "ru-pt",
    answer: ["Escrevemos-lhes.", "Nós escrevemos-lhes."]
  },
  {
    type: "choice",
    question: "«Peço-___ um favor.» (Прошу вас об услуге.)",
    options: ["o", "a", "lhe", "lo"],
    correct: 2,
    explanation: "«Pedir a alguém» — просить у кого-то. Косвенное дополнение → lhe."
  },
  // === Proclisis with indirect objects ===
  {
    type: "fill",
    question: "Я ему ничего не говорю: Não ___ digo nada.",
    answer: "lhe"
  },
  {
    type: "choice",
    question: "«Quem ___ telefonou?» (Кто тебе позвонил?)",
    options: ["te", "ti", "tu", "lhe"],
    correct: 0,
    explanation: "«Тебе» как косвенное дополнение = te. После «quem» — проклиза."
  },
  {
    type: "translate",
    source: "Никто ему не отвечает.",
    direction: "ru-pt",
    answer: ["Ninguém lhe responde."]
  },
  {
    type: "fill",
    question: "Мать всегда нам говорит правду: A mãe sempre ___ diz a verdade.",
    answer: "nos"
  },
  // === Combined direct + indirect pronouns ===
  {
    type: "choice",
    question: "Как объединяются «me» + «o» в одно слово?",
    options: ["mo", "me-o", "lho", "meo"],
    correct: 0,
    explanation: "Комбинация me + o = mo. Пример: «Ele dá-mo» (Он мне это даёт)."
  },
  {
    type: "fill",
    question: "Он мне это даёт (o livro): Ele dá-___.",
    answer: "mo"
  },
  {
    type: "choice",
    question: "Как объединяются «lhe» + «o»?",
    options: ["lo", "lho", "le-o", "lheo"],
    correct: 1,
    explanation: "Комбинация lhe + o = lho. «Eu dou-lho» (Я ему/ей это даю)."
  },
  {
    type: "fill",
    question: "Я тебе это дам (a resposta): Eu dou-___.",
    answer: "ta"
  },
  {
    type: "match",
    question: "Соотнесите комбинированные местоимения:",
    pairs: [
      ["me + o", "mo"],
      ["te + o", "to"],
      ["lhe + o", "lho"],
      ["nos + o", "no-lo"],
      ["lhes + o", "lho"]
    ]
  },
  // === Position with infinitive ===
  {
    type: "translate",
    source: "Я хочу ей сказать правду.",
    direction: "ru-pt",
    answer: ["Quero dizer-lhe a verdade.", "Eu quero dizer-lhe a verdade."]
  },
  {
    type: "fill",
    question: "Мы можем тебе помочь: Podemos ajudar-___.",
    answer: "te"
  },
  {
    type: "choice",
    question: "«Vou ___-lhe amanhã.» (Я позвоню ей завтра.)",
    options: ["telefonar", "telefona", "telefonando", "telefonou"],
    correct: 0,
    explanation: "После «ir» (вспомогательный) идёт инфинитив: Vou telefonar-lhe."
  },
  // === Practice: direct vs indirect ===
  {
    type: "choice",
    question: "«Eu vejo ___» (Я вижу его) — прямое или косвенное дополнение?",
    options: ["Прямое: vejo-o", "Косвенное: vejo-lhe", "Прямое: vejo-lhe", "Косвенное: vejo-o"],
    correct: 0,
    explanation: "«Ver» принимает прямое дополнение: vejo-o (его вижу). Прямое дополнение отвечает на вопрос «кого?/что?»."
  },
  {
    type: "choice",
    question: "«Eu telefono ___» (Я ему звоню) — прямое или косвенное?",
    options: ["Прямое: telefono-o", "Косвенное: telefono-lhe", "Прямое: telefono-lo", "Косвенное: telefono-le"],
    correct: 1,
    explanation: "«Telefonar» требует косвенное дополнение (telefonar A alguém): telefono-lhe."
  },
  {
    type: "translate",
    source: "Он нам объясняет урок.",
    direction: "ru-pt",
    answer: ["Ele explica-nos a lição."]
  },
  {
    type: "fill",
    question: "Врач ей прописывает лекарство: O médico receita-___ o medicamento.",
    answer: "lhe"
  },
  {
    type: "translate",
    source: "Я тебе не верю.",
    direction: "ru-pt",
    answer: ["Não te acredito.", "Eu não te acredito."]
  },
  {
    type: "order",
    question: "Составьте предложение: «Мы хотим им послать письмо.»",
    words: ["Queremos", "enviar", "-lhes", "uma", "carta"],
    answer: "Queremos enviar-lhes uma carta."
  },
  {
    type: "fill",
    question: "Она часто им пишет: Ela escreve-___ muitas vezes.",
    answer: "lhes"
  },
  {
    type: "choice",
    question: "Где стоит местоимение: «Também ___ telefono todos os dias.»?",
    options: ["После глагола (энклиза)", "Перед глаголом (проклиза)", "В конце предложения", "Между подлежащим и глаголом"],
    correct: 1,
    explanation: "«Também» вызывает проклизу (местоимение перед глаголом): Também lhe telefono."
  },
  {
    type: "translate",
    source: "Кто тебе это сказал?",
    direction: "ru-pt",
    answer: ["Quem te disse isso?", "Quem é que te disse isso?"]
  }
];
