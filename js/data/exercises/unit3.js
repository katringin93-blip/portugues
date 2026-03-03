export const exercises = [
  // === Ex1: Write numbers in words (8 items) ===
  {
    type: "fill",
    question: "Напишите число словами по-португальски: 45 = quarenta e ___",
    answer: "cinco"
  },
  {
    type: "fill",
    question: "Напишите число словами по-португальски: 90 = ___",
    answer: "noventa"
  },
  {
    type: "choice",
    question: "Как пишется число 16 в европейском португальском?",
    options: ["dezesseis", "dezasseis", "dessaseis", "dezaseis"],
    correct: 1,
    explanation: "В европейском португальском 16 — «dezasseis» (с «a»), а в бразильском — «dezesseis» (с «e»)."
  },
  {
    type: "fill",
    question: "Напишите число словами: 2014 = dois mil e ___",
    answer: "catorze"
  },
  {
    type: "fill",
    question: "Напишите число словами: 2000 = dois ___",
    answer: "mil"
  },
  {
    type: "fill",
    question: "Напишите число словами: 38 = trinta e ___",
    answer: "oito"
  },
  {
    type: "choice",
    question: "Как пишется число 365?",
    options: ["trezentos e sessenta e cinco", "trescentos e sessenta e cinco", "trezentos e sesenta e cinco", "trezentos sesenta cinco"],
    correct: 0,
    explanation: "365 = trezentos e sessenta e cinco. Обратите внимание на «e» между каждой частью."
  },
  {
    type: "fill",
    question: "Напишите число словами: 500 = ___",
    answer: "quinhentos"
  },

  // === Ex2: Match activities to seasons (7 items) ===
  {
    type: "match",
    question: "Соотнесите занятия с временами года:",
    pairs: [
      { left: "nadar no mar", right: "Verão (лето)" },
      { left: "apanhar folhas", right: "Outono (осень)" },
      { left: "fazer esqui", right: "Inverno (зима)" },
      { left: "ver flores", right: "Primavera (весна)" }
    ]
  },
  {
    type: "choice",
    question: "В какое время года обычно делают «fazer esqui» (кататься на лыжах)?",
    options: ["Primavera (весна)", "Verão (лето)", "Outono (осень)", "Inverno (зима)"],
    correct: 3,
    explanation: "Fazer esqui (кататься на лыжах) — зимнее занятие: Inverno."
  },

  // === Ex3: Write times in 24h format (10 items) ===
  {
    type: "fill",
    question: "Напишите время (24ч формат): 9:15 = nove horas e quinze ___",
    answer: "minutos"
  },
  {
    type: "choice",
    question: "Как сказать 10:00 в 24-часовом формате?",
    options: ["São dez hora", "São dez horas", "É dez horas", "São dez"],
    correct: 1,
    explanation: "Для часов больше 1 используется «São»: São dez horas (Десять часов)."
  },
  {
    type: "fill",
    question: "Напишите время: 12:00 (полдень) = ___ horas",
    answer: "doze"
  },
  {
    type: "fill",
    question: "Напишите время: 13:10 = treze e ___",
    answer: "dez"
  },
  {
    type: "fill",
    question: "Напишите время: 14:35 = catorze e trinta e ___",
    answer: "cinco"
  },
  {
    type: "choice",
    question: "Как сказать 17:55 в 24-часовом формате?",
    options: ["São dezassete e cinquenta e cinco", "São dezessete e cinquenta e cinco", "É dezassete e cinquenta e cinco", "São dezassete menos cinco"],
    correct: 0,
    explanation: "17:55 = São dezassete e cinquenta e cinco. В европейском португальском «dezassete» (с «a»)."
  },
  {
    type: "fill",
    question: "Напишите время: 21:00 = vinte e uma ___",
    answer: "horas"
  },
  {
    type: "fill",
    question: "Напишите время: 24:00 = vinte e quatro ___",
    answer: "horas"
  },

  // === Ex4: Write times in informal format (selected items) ===
  {
    type: "translate",
    source: "7:15 утра (неформальное время)",
    direction: "ru-pt",
    answer: ["sete e um quarto da manhã"]
  },
  {
    type: "choice",
    question: "Как сказать 8:00 утра в неформальном стиле?",
    options: ["São oito horas da manhã", "É oito da manhã", "São oito da manhã", "Oito horas manhã"],
    correct: 0,
    explanation: "Неформально: São oito horas da manhã. «Da manhã» добавляется для обозначения утра."
  },
  {
    type: "fill",
    question: "Напишите время неформально: 11:45 = um quarto para o ___",
    answer: ["meio-dia", "meiodia"]
  },
  {
    type: "fill",
    question: "Напишите время неформально: 12:30 = meio-dia e ___",
    answer: "meia"
  },

  // === Ex5: Match dates (12 items — converted to match + choice) ===
  {
    type: "match",
    question: "Соотнесите праздники с датами:",
    pairs: [
      { left: "Natal (Рождество)", right: "25 de dezembro" },
      { left: "Ano Novo (Новый год)", right: "1 de janeiro" },
      { left: "Dia do Trabalhador", right: "1 de maio" },
      { left: "Dia de Portugal", right: "10 de junho" }
    ]
  },
  {
    type: "choice",
    question: "Какая дата соответствует «vinte e cinco de abril»?",
    options: ["25 марта", "25 апреля", "25 мая", "25 июня"],
    correct: 1,
    explanation: "Vinte e cinco de abril = 25 апреля. Это День свободы в Португалии (годовщина Революции гвоздик 1974 г.)."
  },
  {
    type: "match",
    question: "Соотнесите месяцы с порядковым номером:",
    pairs: [
      { left: "janeiro", right: "1-й месяц" },
      { left: "março", right: "3-й месяц" },
      { left: "agosto", right: "8-й месяц" },
      { left: "dezembro", right: "12-й месяц" }
    ]
  },

  // === Ex6: Fill days/times in text (8 items) ===
  {
    type: "fill",
    question: "Заполните: As aulas começam na ___-feira. (понедельник)",
    answer: "segunda"
  },
  {
    type: "fill",
    question: "Заполните: As aulas começam às ___ horas. (9)",
    answer: "nove"
  },
  {
    type: "choice",
    question: "Какое число подходит? O almoço é às ___ horas. (13)",
    options: ["doze", "treze", "catorze", "onze"],
    correct: 1,
    explanation: "13 = treze. O almoço é às treze horas (Обед в 13 часов)."
  },
  {
    type: "fill",
    question: "Заполните: As aulas da tarde começam às ___ horas. (14)",
    answer: "catorze"
  },
  {
    type: "fill",
    question: "Заполните: As aulas terminam às ___ horas. (18)",
    answer: "dezoito"
  },
  {
    type: "fill",
    question: "Заполните: Não há aulas no ___. (суббота)",
    answer: "sábado"
  },
  {
    type: "fill",
    question: "Заполните: As aulas recomeçam na ___-feira. (понедельник)",
    answer: "segunda"
  },
  {
    type: "fill",
    question: "Заполните: O fim de semana começa na ___-feira. (пятница)",
    answer: "sexta"
  },

  // === Additional mixed exercises ===
  {
    type: "match",
    question: "Соотнесите дни недели с переводом:",
    pairs: [
      { left: "segunda-feira", right: "понедельник" },
      { left: "quarta-feira", right: "среда" },
      { left: "sexta-feira", right: "пятница" },
      { left: "domingo", right: "воскресенье" }
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Сейчас три часа дня».",
    words: ["da", "horas", "São", "tarde", "três"],
    answer: "São três horas da tarde"
  },
  {
    type: "translate",
    source: "Сегодня понедельник, десятое марта.",
    direction: "ru-pt",
    answer: ["Hoje é segunda-feira, dez de março.", "Hoje é segunda, dez de março."]
  },
  {
    type: "choice",
    question: "Как правильно сказать дату «1 января»?",
    options: ["Um de janeiro", "Primeiro de janeiro", "O um janeiro", "Dia primeiro janeiro"],
    correct: 1,
    explanation: "Для первого числа месяца используется порядковое числительное: «Primeiro de janeiro» (первое января)."
  },
  {
    type: "order",
    question: "Составьте: «двадцать пятое декабря» по-португальски.",
    words: ["dezembro", "cinco", "de", "vinte", "e"],
    answer: "vinte e cinco de dezembro"
  },
  {
    type: "choice",
    question: "Как по-португальски «четверг»?",
    options: ["quarta-feira", "quinta-feira", "sexta-feira", "terça-feira"],
    correct: 1,
    explanation: "Quinta-feira — четверг. Буквально «пятый день» (от воскресенья)."
  },
  {
    type: "fill",
    question: "Напишите число словами: 1000 = ___",
    answer: "mil"
  },
  {
    type: "translate",
    source: "Мой день рождения двадцатого августа.",
    direction: "ru-pt",
    answer: ["O meu aniversário é a vinte de agosto.", "O meu aniversário é no dia vinte de agosto."]
  }
];
