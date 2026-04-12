export const exercises = [
  // === Ex1: Choose pronoun (10 items) ===
  {
    type: "choice",
    question: "Какое местоимение подходит? ___ é professora. (Она)",
    options: ["Ele", "Ela", "Eles", "Elas"],
    correct: 1,
    explanation: "«Ela» — она. Professora — женский род, значит речь о женщине: Ela é professora."
  },
  {
    type: "choice",
    question: "Какое местоимение подходит? ___ é médico. (Он)",
    options: ["Ela", "Ele", "Nós", "Eles"],
    correct: 1,
    explanation: "«Ele» — он. Médico — мужской род: Ele é médico."
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ são estudantes. (Они — м.р. или смешанная группа)",
    answer: "Eles"
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ falas muito bem! (Ты)",
    answer: ["Tu", "tu"]
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ moramos em Lisboa. (Мы)",
    answer: "Nós"
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ trabalho num banco. (Я)",
    answer: "Eu"
  },
  {
    type: "choice",
    question: "Какое местоимение подходит? ___ são enfermeiras. (Они — ж.р.)",
    options: ["Eles", "Elas", "Nós", "Vocês"],
    correct: 1,
    explanation: "«Elas» — они (женский род). Enfermeiras — женский род множественного числа."
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ falam português? (вы — мн.ч.)",
    answer: ["Vocês", "vocês"]
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ é o novo director? (вы — вежливо, ед.ч.)",
    answer: ["Você", "você"]
  },
  {
    type: "fill",
    question: "Вставьте местоимение: ___ trabalham muito. (они — м.р. или смеш.)",
    answer: ["Eles", "eles"]
  },

  // === Ex2: Conjugate -ar verbs (12 items) ===
  {
    type: "fill",
    question: "Проспрягайте: Eles ___ na piscina. (nadar — плавать)",
    answer: "nadam"
  },
  {
    type: "fill",
    question: "Проспрягайте: Nós ___ em Lisboa. (morar — жить)",
    answer: "moramos"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ português muito bem. (falar)",
    options: ["falo", "falas", "fala", "falam"],
    correct: 3,
    explanation: "Для «eles» глагол на -ar получает окончание -am: falam."
  },
  {
    type: "fill",
    question: "Проспрягайте: Tu ___ pão todos os dias. (comprar — покупать)",
    answer: "compras"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ de futebol. (gostar — нравиться)",
    answer: "gosta"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ela ___ a avó aos domingos. (visitar — навещать)",
    answer: "visita"
  },
  {
    type: "fill",
    question: "Проспрягайте: O Pedro ___ levantar-se cedo. (detestar — ненавидеть)",
    answer: "detesta"
  },
  {
    type: "choice",
    question: "Какая форма правильная? A Maria ___ quatro línguas. (falar)",
    options: ["falo", "falas", "fala", "falam"],
    correct: 2,
    explanation: "Для «ela/A Maria» (3-е лицо ед.ч.) глагол на -ar получает окончание -a: fala."
  },
  {
    type: "fill",
    question: "Проспрягайте: Eles ___ muito depressa. (andar — ходить)",
    answer: "andam"
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ num escritório. (trabalhar — работать)",
    answer: "trabalho"
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ o autocarro de manhã. (apanhar — ловить/садиться на)",
    answer: "apanho"
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ que sim. (esperar — надеяться)",
    answer: "espero"
  },

  // === Ex3: Conjugate -er verbs (12 items) ===
  {
    type: "fill",
    question: "Проспрягайте: Nós ___ ao meio-dia. (comer — есть)",
    answer: "comemos"
  },
  {
    type: "fill",
    question: "Проспрягайте: Tu ___ muitas cartas. (escrever — писать)",
    answer: "escreves"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ às perguntas. (responder — отвечать)",
    options: ["respondo", "respondes", "responde", "respondem"],
    correct: 3,
    explanation: "Для «eles» глагол на -er получает окончание -em: respondem."
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ café de manhã. (beber — пить)",
    answer: "bebe"
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu não ___ esta palavra. (entender — понимать)",
    answer: "entendo"
  },
  {
    type: "fill",
    question: "Проспрягайте: Eles ___ o problema. (compreender — понимать)",
    answer: "compreendem"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ a sua opinião. (defender — защищать)",
    answer: "defende"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Nós queremos ___ o jogo. (vencer — победить)",
    options: ["vencer", "vencemos", "vencem", "vence"],
    correct: 0,
    explanation: "После «queremos» следует инфинитив: queremos vencer (хотим победить)."
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ água de um poço. (fornecer — поставлять, eu)",
    answer: "forneço"
  },

  // === Ex4: Conjugate -ir verbs (10 items) ===
  {
    type: "fill",
    question: "Проспрягайте: Ele nunca ___. (desistir — сдаваться)",
    answer: "desiste"
  },
  {
    type: "fill",
    question: "Проспрягайте: Nós ___ ir ao cinema. (decidir — решать)",
    answer: "decidimos"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ falar bem. (conseguir — мочь/уметь)",
    options: ["consigo", "consegues", "consegue", "conseguem"],
    correct: 3,
    explanation: "Для «eles» глагол на -ir получает окончание -em: conseguem."
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ frio. (sentir — чувствовать, eu)",
    answer: "sinto"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ sempre a mesma coisa. (repetir — повторять)",
    answer: "repete"
  },
  {
    type: "fill",
    question: "Проспрягайте: A neve ___ as montanhas. (cobrir — покрывать)",
    answer: "cobre"
  },
  {
    type: "fill",
    question: "Проспрягайте: Nós ___ oito horas por noite. (dormir — спать)",
    answer: "dormimos"
  },
  {
    type: "fill",
    question: "Проспрягайте: O comboio ___ às nove. (partir — отправляться)",
    answer: "parte"
  },
  {
    type: "fill",
    question: "Проспрягайте: A criança ___ muito. (tossir — кашлять)",
    answer: "tosse"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ um café. (pedir — просить)",
    answer: "pede"
  },

  // === Ex5: Conjugate pôr-derived verbs (10 items) ===
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ os livros na mesa. (pôr — класть)",
    answer: "ponho"
  },
  {
    type: "fill",
    question: "Проспрягайте: Ele ___ música. (compor — сочинять)",
    answer: "compõe"
  },
  {
    type: "choice",
    question: "Какая форма правильная? A luz solar ___ a plástico. (decompor — разлагать)",
    options: ["decompõe", "decompõem", "decompões", "decomponho"],
    correct: 0,
    explanation: "Для 3-го лица ед.ч. глагол «decompor» спрягается как «decompõe»."
  },
  {
    type: "fill",
    question: "Проспрягайте: O empregado ___ os produtos. (repor — пополнять)",
    answer: "repõe"
  },
  {
    type: "fill",
    question: "Проспрягайте: O professor ___ um exercício. (propor — предлагать)",
    answer: "propõe"
  },
  {
    type: "fill",
    question: "Проспрягайте: Eu ___ que sim. (supor — предполагать)",
    answer: "suponho"
  },
  {
    type: "fill",
    question: "Проспрягайте: O museu ___ obras de arte. (expor — выставлять)",
    answer: "expõe"
  },
  {
    type: "fill",
    question: "Проспрягайте: Tu ___ a mesa todos os dias? (pôr — накрывать/класть)",
    answer: "pões"
  },
  {
    type: "fill",
    question: "Проспрягайте: Nós ___ de tempo livre. (dispor — располагать)",
    answer: "dispomos"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Eles ___ a mesa para o jantar. (pôr)",
    options: ["ponho", "pões", "põe", "põem"],
    correct: 3,
    explanation: "Для «eles» глагол «pôr» спрягается как «põem»."
  },

  // === Ex6: Fill verbs in text (11 items) ===
  {
    type: "fill",
    question: "Заполните: Os portugueses ___ o «tu» e o «você». (usar — использовать, eles)",
    answer: "usam"
  },
  {
    type: "fill",
    question: "Заполните: Eles ___ de maneira diferente no Norte e no Sul. (falar — говорить, eles)",
    answer: "falam"
  },
  {
    type: "fill",
    question: "Заполните: Muitos não ___ as diferenças. (conhecer — знать, eles)",
    answer: "conhecem"
  },
  {
    type: "choice",
    question: "Какая форма правильная? Os amigos ___ -se por «tu». (tratar — обращаться)",
    options: ["trato", "tratas", "trata", "tratam"],
    correct: 3,
    explanation: "Для «os amigos» (eles) глагол на -ar получает окончание -am: tratam."
  },
  {
    type: "fill",
    question: "Заполните: Alguns ___ -se pelo primeiro nome. (chamar — называть, eles)",
    answer: "chamam"
  },
  {
    type: "fill",
    question: "Заполните: Outros ___ títulos. (adicionar — добавлять, eles)",
    answer: "adicionam"
  },
  {
    type: "fill",
    question: "Заполните: Cada pessoa ___ de maneira diferente. (falar — говорить, ela)",
    answer: "fala"
  },
  {
    type: "fill",
    question: "Заполните: Cada um ___ o tratamento que prefere. (usar — использовать, ele)",
    answer: "usa"
  },
  {
    type: "fill",
    question: "Заполните: Ele ___ o «tu» com os amigos. (omitir — опускать, ele)",
    answer: "omite"
  },
  {
    type: "fill",
    question: "Заполните: Eles ___ a conversar. (começar — начинать, eles)",
    answer: "começam"
  },
  {
    type: "fill",
    question: "Заполните: Eles ___ a falar normalmente. (continuar — продолжать, eles)",
    answer: "continuam"
  },

  // === Additional mixed exercises ===
  {
    type: "match",
    question: "Соотнесите местоимения с формами глагола «falar» (говорить):",
    pairs: [
      { left: "eu", right: "falo" },
      { left: "tu", right: "falas" },
      { left: "ele/ela", right: "fala" },
      { left: "eles/elas", right: "falam" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите окончания глаголов для «tu» по группам спряжения:",
    pairs: [
      { left: "-ar (falar)", right: "-as" },
      { left: "-er (comer)", right: "-es" },
      { left: "-ir (partir)", right: "-es" }
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Мы работаем каждый день».",
    words: ["os", "Nós", "trabalhamos", "dias", "todos"],
    answer: "Nós trabalhamos todos os dias"
  },
  {
    type: "translate",
    source: "Она говорит по-португальски и по-английски.",
    direction: "ru-pt",
    answer: ["Ela fala português e inglês."]
  },
  {
    type: "order",
    question: "Составьте предложение: «Они покупают хлеб каждое утро».",
    words: ["de", "Eles", "compram", "manhã", "todas", "as", "manhãs", "pão"],
    answer: "Eles compram pão todas as manhãs"
  },
  {
    type: "translate",
    source: "Я живу в Порту и работаю в банке.",
    direction: "ru-pt",
    answer: ["Eu moro no Porto e trabalho num banco.", "Moro no Porto e trabalho num banco."]
  }
];
