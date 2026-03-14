export const exercises = [
  // === Ex1: Выберите Pretérito Perfeito или Imperfeito (12 items) ===
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Quando ele ___ (chegar) a casa, a Maria ___ (estar) a dormir. (Perfeito / Imperfeito)",
    answer: ["chegou", "estava"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Eles ___ (estar) no jardim quando ___ (ver) o acidente. (Imperfeito / Perfeito)",
    answer: ["estavam", "viram"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Eu ___ (caminhar) na rua quando ___ (encontrar) o Pedro. (Imperfeito / Perfeito)",
    answer: ["caminhava", "encontrei"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Tu ___ (ter) fome quando ___ (comprar) o pão? (Imperfeito / Perfeito)",
    answer: ["tinhas", "compraste"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Ela ___ (sentir-se) mal e ___ (ir) ao médico. (Imperfeito / Perfeito)",
    answer: ["sentia", "foi"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: O tempo ___ (estar) bom quando nós ___ (sair). (Imperfeito / Perfeito)",
    answer: ["estava", "saímos"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Eu ___ (estar) a ler quando ___ (começar) a chover. (Imperfeito / Perfeito)",
    answer: ["estava", "começou"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Eu ___ (acordar) e ___ (estar) sol. (Perfeito / Imperfeito)",
    answer: ["acordei", "estava"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: O telefone ___ (tocar) enquanto eu ___ (fazer) o jantar. (Perfeito / Imperfeito)",
    answer: ["tocou", "fazia"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: O professor ___ (expulsar) o aluno porque ele não ___ (pagar) as propinas. (Perfeito / Imperfeito)",
    answer: ["expulsou", "pagava"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Eu ___ (estar) no café quando ___ (ver) a Ana. (Imperfeito / Perfeito)",
    answer: ["estava", "vi"]
  },
  {
    type: "fill",
    question: "Выберите Perfeito или Imperfeito: Tu ___ (desligar) a televisão? — Sim, ___ (estar) ligada. (Perfeito / Imperfeito)",
    answer: ["desligaste", "estava"]
  },

  // === Ex2: Впишите правильное время (10 items) ===
  {
    type: "choice",
    question: "Впишите правильное время: Ela ___ comprar um carro novo. (querer — состояние/желание в прошлом)",
    options: ["quis", "queria", "quer", "quererá"],
    correct: 1,
    explanation: "Состояние или желание в прошлом — Imperfeito: queria."
  },
  {
    type: "choice",
    question: "Впишите правильное время: Eles ___ de praia. (gostar — привычка/характеристика в прошлом)",
    options: ["gostaram", "gostavam", "gostam", "gostarão"],
    correct: 1,
    explanation: "Привычка или характеристика — Imperfeito: gostavam."
  },
  {
    type: "choice",
    question: "Впишите правильное время: O tempo ___ sempre bom naquela região. (ser — описание)",
    options: ["foi", "era", "é", "será"],
    correct: 1,
    explanation: "Описание постоянного состояния в прошлом — Imperfeito: era."
  },
  {
    type: "choice",
    question: "Впишите правильное время: No domingo passado nós ___ ao museu. (ir — завершённое действие)",
    options: ["íamos", "fomos", "imos", "vamos"],
    correct: 1,
    explanation: "Завершённое действие с конкретным маркером (no domingo passado) — Perfeito: fomos."
  },
  {
    type: "fill",
    question: "Впишите правильное время: A Maria ___ o avô no hospital. (visitar — однократное действие в прошлом)",
    answer: "visitou"
  },
  {
    type: "fill",
    question: "Впишите правильное время: Eles ___ a comida para a festa. (fazer — завершённое действие)",
    answer: "fizeram"
  },
  {
    type: "choice",
    question: "Впишите правильное время: Tu ___ em casa ontem? (estar — состояние/обстановка)",
    options: ["estiveste", "estavas", "estás", "estarás"],
    correct: 1,
    explanation: "Вопрос об обстановке/состоянии — Imperfeito: estavas."
  },
  {
    type: "choice",
    question: "Впишите правильное время: Eles não ___ nada sobre o assunto. (saber — состояние)",
    options: ["souberam", "sabiam", "sabem", "saberão"],
    correct: 1,
    explanation: "Состояние незнания в прошлом — Imperfeito: sabiam."
  },
  {
    type: "fill",
    question: "Впишите правильное время: A aula ___ às nove da manhã. (começar — конкретное событие)",
    answer: "começou"
  },
  {
    type: "fill",
    question: "Впишите правильное время: Ele ___ um bolo, mas ___ muito cheio. (comer / estar — Perfeito + Imperfeito)",
    answer: ["comeu", "estava"]
  },

  // === Ex3: Расставьте события в правильном порядке ===
  {
    type: "order",
    question: "Расставьте предложения в хронологическом порядке рассказа о дне:\n1. Saí de casa.\n2. Voltei para casa.\n3. Tomei o pequeno-almoço.\n4. Jantei.\n5. Fui trabalhar.\n6. Acordei cedo.\n7. Trabalhei o dia todo.\n8. Fui para a cama.",
    words: ["6", "3", "1", "5", "7", "2", "4", "8"],
    answer: "6 3 1 5 7 2 4 8"
  },

  // === Ex4: Заполните нарратив о поездке (12 items) ===
  {
    type: "fill",
    question: "Заполните нарратив: No mês passado ___ férias. (ter — Perfeito, 1 л. ед.ч.)",
    answer: "tive"
  },
  {
    type: "fill",
    question: "Заполните нарратив: Antes das férias ___ muito. (trabalhar — Perfeito, 1 л. ед.ч.)",
    answer: "trabalhei"
  },
  {
    type: "fill",
    question: "Заполните нарратив: Eu ___ exausto. (estar — Imperfeito)",
    answer: "estava"
  },
  {
    type: "fill",
    question: "Заполните нарратив: Eu e a minha mulher ___ ir ao Algarve. (decidir — Perfeito)",
    answer: "decidimos"
  },
  {
    type: "fill",
    question: "Заполните нарратив: ___ as malas e partimos. (fazer — Perfeito, 1 л. мн.ч.)",
    answer: "Fizemos"
  },
  {
    type: "fill",
    question: "Заполните нарратив: As praias ___ lindas. (estar — Imperfeito)",
    answer: "estavam"
  },
  {
    type: "fill",
    question: "Заполните нарратив: Os dias ___ longos e quentes. (ser — Imperfeito)",
    answer: "eram"
  },
  {
    type: "fill",
    question: "Заполните нарратив: ___ com muita gente interessante. (conversar — Perfeito, 1 л. мн.ч.)",
    answer: "Conversámos"
  },
  {
    type: "fill",
    question: "Заполните нарратив: Nós ___ a um restaurante típico. (ir — Perfeito)",
    answer: "fomos"
  },
  {
    type: "fill",
    question: "Заполните нарратив: ___ toda a costa algarvia. (percorrer — Perfeito, 1 л. мн.ч.)",
    answer: "Percorremos"
  },
  {
    type: "fill",
    question: "Заполните нарратив: ___ de descanso. (precisar — Imperfeito, 1 л. мн.ч.)",
    answer: "Precisávamos"
  },
  {
    type: "fill",
    question: "Заполните нарратив: ___ um hotel tranquilo. (escolher — Perfeito, 1 л. мн.ч.)",
    answer: "Escolhemos"
  },

  // === Ex5: Переведите вопросы (5 items) ===
  {
    type: "translate",
    source: "Что ты делал, когда я позвонил?",
    direction: "ru-pt",
    answer: ["O que fazias quando eu telefonei?", "O que é que tu fazias quando eu telefonei?"]
  },
  {
    type: "translate",
    source: "Где они жили раньше?",
    direction: "ru-pt",
    answer: ["Onde é que eles viviam antes?", "Onde viviam antes?"]
  },
  {
    type: "translate",
    source: "Ты купил подарок вчера?",
    direction: "ru-pt",
    answer: ["Compraste o presente ontem?", "Tu compraste o presente ontem?"]
  },
  {
    type: "translate",
    source: "Шёл дождь, когда вы вышли?",
    direction: "ru-pt",
    answer: ["Chovia quando vocês saíram?", "Estava a chover quando vocês saíram?"]
  },
  {
    type: "translate",
    source: "Что он сказал, когда пришёл?",
    direction: "ru-pt",
    answer: ["O que é que ele disse quando chegou?", "O que disse quando chegou?"]
  },

  // === Ex6: Переведите предложения (8 items) ===
  {
    type: "translate",
    source: "Когда я проснулся, светило солнце.",
    direction: "ru-pt",
    answer: ["Quando acordei, fazia sol.", "Quando eu acordei, fazia sol."]
  },
  {
    type: "translate",
    source: "Она читала книгу, когда зазвонил телефон.",
    direction: "ru-pt",
    answer: ["Ela lia um livro quando o telefone tocou.", "Estava a ler um livro quando o telefone tocou."]
  },
  {
    type: "translate",
    source: "Мы пошли в ресторан и поели рыбу.",
    direction: "ru-pt",
    answer: ["Fomos ao restaurante e comemos peixe.", "Nós fomos ao restaurante e comemos peixe."]
  },
  {
    type: "translate",
    source: "Раньше он жил в Порту, но потом переехал в Лиссабон.",
    direction: "ru-pt",
    answer: ["Antes vivia no Porto, mas depois mudou-se para Lisboa.", "Antigamente ele vivia no Porto, mas depois mudou-se para Lisboa."]
  },
  {
    type: "translate",
    source: "Дети играли во дворе, когда начался дождь.",
    direction: "ru-pt",
    answer: ["As crianças brincavam no quintal quando começou a chover."]
  },
  {
    type: "translate",
    source: "Я был уставшим и решил остаться дома.",
    direction: "ru-pt",
    answer: ["Estava cansado e decidi ficar em casa.", "Eu estava cansado e decidi ficar em casa."]
  },
  {
    type: "translate",
    source: "Каждый день он покупал газету в киоске.",
    direction: "ru-pt",
    answer: ["Todos os dias ele comprava o jornal no quiosque.", "Todos os dias comprava o jornal no quiosque."]
  },
  {
    type: "translate",
    source: "Вчера мы посетили музей.",
    direction: "ru-pt",
    answer: ["Ontem visitámos o museu.", "Ontem nós visitámos o museu."]
  },

  // === Ex7: Заполните исторический текст (9 items) ===
  {
    type: "fill",
    question: "Заполните исторический текст: Os mouros ___ uma presença significativa na Península Ibérica. (ter — Perfeito)",
    answer: "tiveram"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: Eles ___ grande parte do território. (ocupar — Perfeito)",
    answer: "ocuparam"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: As cidades ___ centros de cultura e comércio. (ser — Imperfeito)",
    answer: "eram"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: Os mouros ___ na península durante séculos. (permanecer — Perfeito)",
    answer: "permaneceram"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: Eles ___ a arquitetura e a língua. (influenciar — Perfeito)",
    answer: "influenciaram"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: A arqueologia ___ muitas provas dessa presença. (revelar — Perfeito)",
    answer: "revelou"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: A cultura árabe ___ para a ciência europeia. (contribuir — Perfeito)",
    answer: "contribuiu"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: Os mouros ___ novas técnicas agrícolas. (introduzir — Perfeito)",
    answer: "introduziram"
  },
  {
    type: "fill",
    question: "Заполните исторический текст: As tradições islâmicas e cristãs ___ nesta região. (contrastar — Imperfeito)",
    answer: "contrastavam"
  },

  // === Дополнительные упражнения: match, order, choice ===
  {
    type: "match",
    question: "Соотнесите маркер с временем (Perfeito или Imperfeito):",
    pairs: [
      ["ontem", "Perfeito"],
      ["todos os dias", "Imperfeito"],
      ["na semana passada", "Perfeito"],
      ["normalmente", "Imperfeito"],
      ["enquanto", "Imperfeito"],
      ["de repente", "Perfeito"]
    ]
  },
  {
    type: "choice",
    question: "Ключевое правило: фоновое действие — ___, а прервавшее событие — ___.",
    options: [
      "Perfeito / Imperfeito",
      "Imperfeito / Perfeito",
      "Imperfeito / Imperfeito",
      "Perfeito / Perfeito"
    ],
    correct: 1,
    explanation: "Фоновое/длительное действие — Imperfeito, прервавшее его конкретное событие — Perfeito."
  },
  {
    type: "order",
    question: "Составьте предложение: «Пока она готовила, он вернулся домой.»",
    words: ["Enquanto", "ela", "cozinhava", "ele", "voltou", "para", "casa"],
    answer: "Enquanto ela cozinhava, ele voltou para casa."
  }
];
