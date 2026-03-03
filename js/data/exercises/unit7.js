export const exercises = [
  // Ex1: Rewrite in negative (12 items)
  {
    type: "translate",
    source: "O Sr António viaja para Lisboa todas as semanas. → Перепишите в отрицательной форме.",
    direction: "pt-ru",
    answer: ["Господин Антониу не ездит в Лиссабон каждую неделю."]
  },
  {
    type: "order",
    question: "Перепишите в отрицательной форме: «O Sr António viaja para Lisboa todas as semanas.»",
    words: ["O", "Sr", "António", "não", "viaja", "para", "Lisboa", "todas", "as", "semanas", "."],
    answer: "O Sr António não viaja para Lisboa todas as semanas."
  },
  {
    type: "choice",
    question: "Как правильно написать в отрицательной форме: «A Ana e a Isabel sempre vão ao Porto.»?",
    options: [
      "A Ana e a Isabel não vão ao Porto.",
      "A Ana e a Isabel nunca vão ao Porto.",
      "A Ana e a Isabel ninguém vão ao Porto.",
      "A Ana e a Isabel nada vão ao Porto."
    ],
    correct: 1,
    explanation: "«Sempre» (всегда) заменяется на «nunca» (никогда): «A Ana e a Isabel nunca vão ao Porto.»"
  },
  {
    type: "order",
    question: "Перепишите в отрицательной форме: «Alguém trabalha hoje.» → Никто не работает сегодня.",
    words: ["Ninguém", "trabalha", "hoje", "."],
    answer: "Ninguém trabalha hoje."
  },
  {
    type: "translate",
    source: "Зал не полон людей.",
    direction: "ru-pt",
    answer: ["A sala não está cheia de gente."]
  },
  {
    type: "choice",
    question: "Перепишите в отрицательной форме: «Ela sempre chega atrasada ao trabalho.»",
    options: [
      "Ela não chega atrasada ao trabalho.",
      "Ela nunca chega atrasada ao trabalho.",
      "Ela ninguém chega atrasada ao trabalho.",
      "Ela nada chega atrasada ao trabalho."
    ],
    correct: 1,
    explanation: "«Sempre» (всегда) заменяется на «nunca» (никогда): «Ela nunca chega atrasada ao trabalho.»"
  },
  {
    type: "translate",
    source: "Он ничего не делает.",
    direction: "ru-pt",
    answer: ["Ele não faz nada."]
  },
  {
    type: "order",
    question: "Перепишите в отрицательной форме: «Alguém mora com o João.» → Никто не живёт с Жуаном.",
    words: ["Ninguém", "mora", "com", "o", "João", "."],
    answer: "Ninguém mora com o João."
  },
  {
    type: "translate",
    source: "Мы никогда не занимаемся гимнастикой в субботу.",
    direction: "ru-pt",
    answer: ["Nós nunca fazemos ginástica ao sábado.", "Nunca fazemos ginástica ao sábado."]
  },
  {
    type: "fill",
    question: "Перепишите в отрицательной форме: «Tu sabes tudo.» → Tu não sabes ___.",
    answer: "nada"
  },
  {
    type: "order",
    question: "Перепишите в отрицательной форме: «Vocês estudam na universidade.»",
    words: ["Vocês", "não", "estudam", "na", "universidade", "."],
    answer: "Vocês não estudam na universidade."
  },
  {
    type: "choice",
    question: "Перепишите в отрицательной форме: «Todos entram à mesma hora.»",
    options: [
      "Ninguém entra à mesma hora.",
      "Não entram à mesma hora.",
      "Nada entra à mesma hora.",
      "Nunca entram à mesma hora."
    ],
    correct: 0,
    explanation: "«Todos» (все) заменяется на «Ninguém» (никто): «Ninguém entra à mesma hora.»"
  },

  // Ex2: Fill nenhum/nenhuma/nenhuns/nenhumas (12 items)
  {
    type: "choice",
    question: "Não tenho ___ amigos aqui. (У меня нет никаких друзей здесь.)",
    options: ["nenhum", "nenhuns", "nenhuma", "nenhumas"],
    correct: 1,
    explanation: "«Amigos» — м.р. мн.ч., поэтому «nenhuns»."
  },
  {
    type: "fill",
    question: "Não há ___ problema. (Нет никакой проблемы.)",
    answer: "nenhum"
  },
  {
    type: "fill",
    question: "Não compro ___ livro hoje. (Я не покупаю ни одной книги сегодня.)",
    answer: "nenhum"
  },
  {
    type: "choice",
    question: "Não conheço ___ pessoa nesta cidade. (Я не знаю ни одного человека в этом городе.)",
    options: ["nenhum", "nenhuns", "nenhuma", "nenhumas"],
    correct: 2,
    explanation: "«Pessoa» — ж.р. ед.ч., поэтому «nenhuma»."
  },
  {
    type: "fill",
    question: "Não há ___ autocarros à noite. (Ночью нет никаких автобусов.)",
    answer: "nenhuns"
  },
  {
    type: "fill",
    question: "Não tem ___ sentido. (Это не имеет никакого смысла.)",
    answer: "nenhum"
  },
  {
    type: "choice",
    question: "Não existe ___ razão para isso. (Нет никакой причины для этого.)",
    options: ["nenhum", "nenhuns", "nenhuma", "nenhumas"],
    correct: 2,
    explanation: "«Razão» — ж.р. ед.ч., поэтому «nenhuma»."
  },
  {
    type: "fill",
    question: "Não há ___ cartas para ti. (Нет никаких писем для тебя.)",
    answer: "nenhumas"
  },
  {
    type: "fill",
    question: "Não tenho ___ sapatos novos. (У меня нет никаких новых туфель.)",
    answer: "nenhuns"
  },
  {
    type: "fill",
    question: "Não recebi ___ recado. (Я не получил ни одного сообщения.)",
    answer: "nenhum"
  },
  {
    type: "choice",
    question: "Não temos ___ ideia do que fazer. (Мы не имеем никакого понятия.)",
    options: ["nenhum", "nenhuns", "nenhuma", "nenhumas"],
    correct: 2,
    explanation: "«Ideia» — ж.р. ед.ч., поэтому «nenhuma»."
  },
  {
    type: "fill",
    question: "Não há ___ alunas na sala. (В зале нет ни одной ученицы.)",
    answer: "nenhumas"
  },

  // Ex3: Match sentence halves (10 pairs)
  {
    type: "match",
    question: "Соотнесите начало и конец предложений:",
    pairs: [
      { left: "O João não come", right: "nada ao pequeno-almoço." },
      { left: "Ninguém sabe", right: "onde fica a chave." },
      { left: "Ela nunca vai", right: "ao cinema sozinha." },
      { left: "Não temos nenhum", right: "dinheiro para as férias." },
      { left: "Nem o Pedro nem a Ana", right: "querem ir à festa." }
    ]
  },
  {
    type: "match",
    question: "Соотнесите начало и конец предложений:",
    pairs: [
      { left: "Não gosto de", right: "nenhuma destas cores." },
      { left: "Tu nunca ouves", right: "o que eu digo." },
      { left: "Ninguém quer", right: "trabalhar ao domingo." },
      { left: "Não tenho nem tempo", right: "nem paciência." },
      { left: "Eles não fazem", right: "nada à noite." }
    ]
  },

  // Ex4: Fill negatives (nada/nunca/não/ninguém/nem sequer/nem)
  {
    type: "fill",
    question: "___ sabe a resposta à pergunta. (Никто не знает ответа на вопрос.)",
    answer: "Ninguém"
  },
  {
    type: "fill",
    question: "Não sei ___ sobre esse assunto. (Я ничего не знаю об этой теме.)",
    answer: "nada"
  },
  {
    type: "fill",
    question: "Hoje ___ vou trabalhar. (Сегодня я не пойду работать.)",
    answer: "não"
  },
  {
    type: "fill",
    question: "Eu ___ como peixe cru. (Я никогда не ем сырую рыбу.)",
    answer: "nunca"
  },
  {
    type: "choice",
    question: "Eles ___ gostam de viajar de avião. (Они не любят путешествовать на самолёте.)",
    options: ["nada", "nunca", "não", "ninguém"],
    correct: 2,
    explanation: "Простое отрицание: «não» перед глаголом."
  },
  {
    type: "fill",
    question: "Não como ___ de manhã. (Я ничего не ем утром.)",
    answer: "nada"
  },
  {
    type: "translate",
    source: "Он не пьёт ни кофе, ни чай.",
    direction: "ru-pt",
    answer: ["Ele não bebe nem café nem chá.", "Não bebe nem café nem chá."]
  },
  {
    type: "fill",
    question: "Ele não fala ___ português! (Он даже не говорит по-португальски!)",
    answer: "nem sequer"
  },

  // Ex6: Fill negatives in text
  {
    type: "fill",
    question: "Não tenho ___ experiência com computadores. (Нет никакого опыта.)",
    answer: "nenhuma"
  },
  {
    type: "choice",
    question: "Заполните пропуск: «Ela ___ quer sair.» (Она не хочет выходить.)",
    options: ["nada", "ninguém", "não", "nunca"],
    correct: 2,
    explanation: "Простое отрицание: «não» перед глаголом."
  },
  {
    type: "fill",
    question: "Não gosta ___ de carne ___ de peixe. (Не любит ни мясо, ни рыбу.)",
    answer: ["nem", "nem"]
  },
  {
    type: "fill",
    question: "___ me ajuda com este trabalho. (Никто мне не помогает с этой работой.)",
    answer: "Ninguém"
  },
  {
    type: "fill",
    question: "Não percebo ___ do que dizes. (Я ничего не понимаю из того, что ты говоришь.)",
    answer: "nada"
  },
  {
    type: "choice",
    question: "Eles ___ vão ao teatro. (Они не ходят в театр.)",
    options: ["nada", "ninguém", "não", "nenhum"],
    correct: 2,
    explanation: "Простое отрицание: «não» перед глаголом."
  },
  {
    type: "fill",
    question: "Não temos ___ planos para o verão. (У нас нет никаких планов на лето.)",
    answer: "nenhuns"
  },
  {
    type: "fill",
    question: "Ele ___ chega a horas. (Он никогда не приходит вовремя.)",
    answer: "nunca"
  },

  // Additional mixed exercises
  {
    type: "match",
    question: "Соотнесите отрицательные слова с их переводом:",
    pairs: [
      { left: "nada", right: "ничего" },
      { left: "ninguém", right: "никто" },
      { left: "nunca", right: "никогда" },
      { left: "nenhum", right: "никакой" },
      { left: "nem...nem", right: "ни...ни" }
    ]
  },
  {
    type: "order",
    question: "Составьте отрицательное предложение: «Дети не плачут много.»",
    words: ["As", "crianças", "não", "choram", "muito", "."],
    answer: "As crianças não choram muito."
  }
];
