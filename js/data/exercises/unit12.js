export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "Eu vejo o João todos os dias. → Eu ___-___ todos os dias.",
    options: ["vejo-o", "o vejo", "vejo-lhe", "vejo-lo"],
    correct: 0,
    explanation: "В утвердительном предложении местоимение стоит после глагола: vejo-o."
  },
  {
    type: "fill",
    question: "Я её не вижу: Não ___ vejo.",
    answer: "a"
  },
  {
    type: "choice",
    question: "Vou comprar o livro → Vou ___.",
    options: ["comprá-o", "comprá-lo", "comprar-o", "o comprar"],
    correct: 1,
    explanation: "После инфинитива на -r, «o» превращается в «lo»: comprá-lo (буква -r отпадает)."
  },
  {
    type: "translate",
    source: "Ты меня слышишь?",
    direction: "ru-pt",
    answer: ["Ouves-me?", "Tu ouves-me?"]
  },
  {
    type: "fill",
    question: "Они нас видят: Eles veem-___.",
    answer: "nos"
  },
  // === New exercises: Direct Object Pronoun Forms ===
  {
    type: "match",
    question: "Соотнесите личные местоимения с местоимениями прямого дополнения:",
    pairs: [
      ["eu", "me"],
      ["tu", "te"],
      ["ele", "o"],
      ["ela", "a"],
      ["nós", "nos"],
      ["vocês", "vos"]
    ]
  },
  {
    type: "fill",
    question: "Замените прямое дополнение местоимением: Eu como a maçã. → Eu como-___.",
    answer: "a"
  },
  {
    type: "fill",
    question: "Замените прямое дополнение: Eu leio o jornal. → Eu leio-___.",
    answer: "o"
  },
  {
    type: "choice",
    question: "Замените: Nós compramos os bilhetes. → Nós compramo-___.",
    options: ["os", "los", "nos", "les"],
    correct: 0,
    explanation: "«Os bilhetes» заменяется на «os» (прямое дополнение муж.р. мн.ч.). Compramos → compramo-os (буква -s отпадает перед -os)."
  },
  {
    type: "fill",
    question: "Замените: Eu vejo as flores. → Eu vejo-___.",
    answer: "as"
  },
  // === Proclisis (местоимение перед глаголом) ===
  {
    type: "choice",
    question: "Где стоит местоимение в отрицательном предложении «Eu não ___ vejo» (я его не вижу)?",
    options: ["После глагола (энклиза)", "Перед глаголом (проклиза)", "В начале предложения", "Между двумя глаголами"],
    correct: 1,
    explanation: "После «não» и других отрицаний местоимение ставится ПЕРЕД глаголом (проклиза): Não o vejo."
  },
  {
    type: "fill",
    question: "Я никогда его не вижу: Nunca ___ vejo.",
    answer: "o"
  },
  {
    type: "fill",
    question: "Кто тебя зовёт? Quem ___ chama?",
    answer: "te"
  },
  {
    type: "choice",
    question: "«Ele já ___ conhece.» (Он уже нас знает.) Какое местоимение?",
    options: ["nos", "lhes", "os", "se"],
    correct: 0,
    explanation: "«Нас» = nos. После «já» — проклиза: já nos conhece."
  },
  {
    type: "translate",
    source: "Я не вижу тебя.",
    direction: "ru-pt",
    answer: ["Não te vejo.", "Eu não te vejo."]
  },
  // === -lo, -la, -los, -las forms (after -r, -s, -z) ===
  {
    type: "choice",
    question: "Quer comprar o carro? → Quer comprá-___?",
    options: ["o", "lo", "no", "le"],
    correct: 1,
    explanation: "После инфинитива на -r: буква -r отпадает, «o» → «lo». Comprar + o = comprá-lo."
  },
  {
    type: "fill",
    question: "Замените: Vamos ver as casas. → Vamos vê-___.",
    answer: "las"
  },
  {
    type: "fill",
    question: "Замените: Quero fazer os exercícios. → Quero fazê-___.",
    answer: "los"
  },
  {
    type: "choice",
    question: "Как заменить в: «Fizeram os bolos» (Они сделали торты)?",
    options: ["Fizeram-os.", "Fizeram-los.", "Fizeram-nos.", "Fizeram-les."],
    correct: 0,
    explanation: "После обычной глагольной формы (не на -r/-s/-z) — просто энклиза: fizeram-os."
  },
  // === -no, -na, -nos, -nas forms (after nasal) ===
  {
    type: "choice",
    question: "Eles viram a Maria. → Eles viram-___.",
    options: ["a", "la", "na", "lhe"],
    correct: 2,
    explanation: "После форм на -m (viram) «o/a» превращается в «no/na»: viram-na."
  },
  {
    type: "fill",
    question: "Они покупают книги: Eles compram os livros. → Eles compram-___.",
    answer: "nos"
  },
  {
    type: "fill",
    question: "Они любят её: Eles amam a Maria. → Eles amam-___.",
    answer: "na"
  },
  // === Position with two verbs ===
  {
    type: "choice",
    question: "Где может стоять местоимение при двух глаголах: «Eu quero ver-___» или «Eu ___quero ver»?",
    options: ["Только после второго глагола", "Только перед первым глаголом", "Оба варианта возможны", "Между двумя глаголами"],
    correct: 2,
    explanation: "При двух глаголах местоимение может стоять после второго (энклиза) или перед первым: «Quero vê-lo» или «Eu o quero ver» (с проклизой)."
  },
  {
    type: "translate",
    source: "Я хочу его купить.",
    direction: "ru-pt",
    answer: ["Quero comprá-lo.", "Eu quero comprá-lo."]
  },
  {
    type: "translate",
    source: "Можешь мне помочь?",
    direction: "ru-pt",
    answer: ["Podes ajudar-me?", "Podes-me ajudar?"]
  },
  // === Mixed practice ===
  {
    type: "fill",
    question: "Замените: Não conheço essa senhora. → Não ___ conheço.",
    answer: "a"
  },
  {
    type: "translate",
    source: "Мы их видим каждый день.",
    direction: "ru-pt",
    answer: ["Vemo-los todos os dias.", "Nós vemo-los todos os dias."]
  },
  {
    type: "order",
    question: "Составьте предложение: «Я тебя не понимаю.»",
    words: ["Eu", "não", "te", "compreendo"],
    answer: "Eu não te compreendo."
  },
  {
    type: "choice",
    question: "«Encontrei ___ ontem.» (Я её встретил вчера.)",
    options: ["a", "lhe", "-a", "-na"],
    correct: 0,
    explanation: "После Pretérito Perfeito (encontrei, не оканчивается на -m/-s/-z) — энклиза: encontrei-a."
  },
  {
    type: "fill",
    question: "Ты знаешь этих людей? Conhece-___?",
    answer: "los"
  },
  {
    type: "translate",
    source: "Она нас не видит.",
    direction: "ru-pt",
    answer: ["Ela não nos vê."]
  },
  {
    type: "choice",
    question: "Какое слово НЕ вызывает проклизу (местоимение перед глаголом)?",
    options: ["não", "já", "sempre", "depois"],
    correct: 3,
    explanation: "«Depois» (потом) — наречие времени, НЕ вызывающее проклизу. «Não», «já», «sempre» — вызывают проклизу."
  },
  {
    type: "fill",
    question: "Замените: Ele quer ler o livro. → Ele quer lê-___.",
    answer: "lo"
  },
  {
    type: "translate",
    source: "Кто тебя знает?",
    direction: "ru-pt",
    answer: ["Quem te conhece?"]
  },
  {
    type: "order",
    question: "Составьте предложение: «Мы хотим их пригласить.»",
    words: ["Nós", "queremos", "convidá", "-los"],
    answer: "Nós queremos convidá-los."
  }
];
