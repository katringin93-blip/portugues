export const exercises = [
  // === Ex1: Перепишите в Pretérito Perfeito Composto (10 items) ===
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Eles não têm tempo. → Eles ___",
    answer: "não têm tido tempo"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Eu vou ao cinema. → Eu ___",
    answer: "tenho ido"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Tu ouves música? → Tu ___?",
    answer: "tens ouvido"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Eles estão bem. → Eles ___",
    answer: "têm estado"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Nós não temos sorte. → Nós ___",
    answer: "não temos tido sorte"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Tu adoras viajar. → Tu ___",
    answer: "tens adorado"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Nós chegamos cedo. → Nós ___",
    answer: "temos chegado"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Eles não pensam nisso. → Eles ___",
    answer: "não têm pensado"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Ele traz flores. → Ele ___",
    answer: "tem trazido flores"
  },
  {
    type: "fill",
    question: "Перепишите в Pretérito Perfeito Composto: Eu ponho a mesa. → Eu ___",
    answer: "tenho posto a mesa"
  },

  // === Ex2: Впишите правильную форму Pret. Perf. Composto (12 items) ===
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: Eu ___ ___ o João frequentemente. (ver)",
    answer: ["tenho", "visto"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: Ela ___ ___ doente ultimamente. (estar)",
    answer: ["tem", "estado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: O Pedro ___ ___ em Lisboa há muitos anos. (viver)",
    answer: ["tem", "vivido"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: Nós ___ ___ muito dinheiro. (gastar)",
    answer: ["temos", "gastado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: Eles ___ ___ sobre o assunto. (falar)",
    answer: ["têm", "falado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: A Maria ___ ___ o confronto. (evitar)",
    answer: ["tem", "evitado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: O governo ___ ___ para melhorar a situação. (trabalhar)",
    answer: ["tem", "trabalhado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: A crise ___ ___ muitas famílias. (afetar)",
    answer: ["tem", "afetado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: O tempo ___ ___ bom. (estar)",
    answer: ["tem", "estado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: O presidente ___ ___ as suas promessas. (cumprir)",
    answer: ["tem", "cumprido"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: Tu ___ ___ as contas a tempo? (pagar)",
    answer: ["tens", "pagado"]
  },
  {
    type: "fill",
    question: "Впишите правильную форму Pret. Perf. Composto: O que é que o João ___ ___? (fazer)",
    answer: ["tem", "feito"]
  },

  // === Ex3: Выберите правильное причастие (choice, 12 items) ===
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: pagar → ___",
    options: ["pago", "pagado", "pagdo", "pagido"],
    correct: 1,
    explanation: "С «ter» в Pretérito Perfeito Composto используется «pagado» (правильная форма)."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: ter → ___",
    options: ["tido", "tendo", "terido", "tedo"],
    correct: 0,
    explanation: "Причастие от «ter» — «tido»."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: tocar → ___",
    options: ["tocido", "toco", "tocado", "toquido"],
    correct: 2,
    explanation: "Глаголы на -ar образуют причастие с -ado: tocar → tocado."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: abrir → ___",
    options: ["abrido", "aberto", "abrto", "abrindo"],
    correct: 1,
    explanation: "Abrir имеет неправильное причастие: aberto."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: prender → ___",
    options: ["preso", "prendido", "prendo", "prindido"],
    correct: 1,
    explanation: "С «ter» используется правильная форма причастия: prendido."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: emigrar → ___",
    options: ["emigrido", "emigrado", "emigrdo", "emigrindo"],
    correct: 1,
    explanation: "Глаголы на -ar: emigrar → emigrado."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: ver → ___",
    options: ["vido", "vendo", "visto", "verido"],
    correct: 2,
    explanation: "Ver имеет неправильное причастие: visto."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: fazer → ___",
    options: ["fazido", "fazedo", "feito", "fazio"],
    correct: 2,
    explanation: "Fazer имеет неправильное причастие: feito."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: cobrir → ___",
    options: ["cobrido", "coberto", "cobrdo", "cobrindo"],
    correct: 1,
    explanation: "Cobrir имеет неправильное причастие: coberto."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: vir → ___",
    options: ["vido", "virado", "vindo", "virido"],
    correct: 2,
    explanation: "Vir имеет неправильное причастие: vindo."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: concorrer → ___",
    options: ["concorrido", "concorredo", "concorrdo", "concorrendo"],
    correct: 0,
    explanation: "Глаголы на -er: concorrer → concorrido."
  },
  {
    type: "choice",
    question: "Выберите правильное причастие для Pret. Perf. Composto: escrever → ___",
    options: ["escrevido", "escrito", "escrevdo", "escrevedo"],
    correct: 1,
    explanation: "Escrever имеет неправильное причастие: escrito."
  },

  // === Ex4: Объедините местоимения с Pret. Perf. Composto (match/fill, 8 items) ===
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Nós prometemos-lha → Nós ___",
    answer: "temos-lha prometido"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Ele faz-lhos → Ele ___",
    answer: "tem-lhos feito"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Ela dá-no-lo → Ela ___",
    answer: "tem-no-lo dado"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Tu ofereces-lhos → Tu ___",
    answer: "tens-lhos oferecido"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Eles enviam-no-las → Eles ___",
    answer: "têm-no-las enviado"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Eu digo-lho → Eu ___",
    answer: "tenho-lho dito"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Eu ofereço-lhos → Eu ___",
    answer: "tenho-lhos oferecido"
  },
  {
    type: "fill",
    question: "Перепишите в Pret. Perf. Composto: Elas entregam-lhas → Elas ___",
    answer: "têm-lhas entregado"
  },

  // === Ex5: Переведите на португальский (6 items) ===
  {
    type: "translate",
    source: "Жуана покупала слишком много платьев (в последнее время).",
    direction: "ru-pt",
    answer: ["A Joana tem comprado demasiados vestidos."]
  },
  {
    type: "translate",
    source: "Я работал до поздна (в последнее время).",
    direction: "ru-pt",
    answer: ["Eu tenho trabalhado até tarde.", "Tenho trabalhado até tarde."]
  },
  {
    type: "translate",
    source: "Он оплачивал все мои расходы (в последнее время).",
    direction: "ru-pt",
    answer: ["Ele tem pagado todas as minhas despesas."]
  },
  {
    type: "translate",
    source: "У них было много проблем (в последнее время).",
    direction: "ru-pt",
    answer: ["Eles têm tido muitos problemas."]
  },
  {
    type: "translate",
    source: "Мой отец не много путешествовал (в последнее время).",
    direction: "ru-pt",
    answer: ["O meu pai não tem viajado muito."]
  },
  {
    type: "translate",
    source: "Его брат занимался каждый день (в последнее время).",
    direction: "ru-pt",
    answer: ["O seu irmão tem estudado todos os dias."]
  },
  {
    type: "translate",
    source: "Мы вкладывали много денег в твою компанию (в последнее время).",
    direction: "ru-pt",
    answer: ["Nós temos posto muito dinheiro na tua empresa."]
  },
  {
    type: "translate",
    source: "Много пожилых людей умирало от жары (в последнее время).",
    direction: "ru-pt",
    answer: ["Muitos idosos têm morrido com o calor."]
  },
  {
    type: "translate",
    source: "Он не принимал мои советы (в последнее время).",
    direction: "ru-pt",
    answer: ["Ele não tem aceitado os meus conselhos."]
  },
  {
    type: "translate",
    source: "Эта школа исключала много учеников (в последнее время).",
    direction: "ru-pt",
    answer: ["Esta escola tem expulsado muitos alunos."]
  },
  {
    type: "translate",
    source: "Моя тётя смотрела много португальских фильмов (в последнее время).",
    direction: "ru-pt",
    answer: ["A minha tia tem visto muitos filmes portugueses."]
  },
  {
    type: "translate",
    source: "Моя начальница болела в последнее время.",
    direction: "ru-pt",
    answer: ["A minha chefe tem estado doente."]
  },

  // === Ex6: Заполните текст о португальской эмиграции (7 items) ===
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): A emigração ___ ___ um tema importante na sociedade portuguesa. (ser)",
    answer: ["tem", "sido"]
  },
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): Os investigadores ___ ___ novas tendências migratórias. (observar)",
    answer: ["têm", "observado"]
  },
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): O fluxo migratório ___ ___ ___ nos últimos anos. (intensificar-se)",
    answer: ["se tem intensificado"]
  },
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): Ultimamente ___ ___ ___ um aumento de jovens a emigrar. (ver-se)",
    answer: ["se tem visto"]
  },
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): Muitos portugueses ___ ___ países europeus como destino. (escolher)",
    answer: ["têm", "escolhido"]
  },
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): Os emigrantes ___ ___ consigo a cultura portuguesa. (levar)",
    answer: ["têm", "levado"]
  },
  {
    type: "fill",
    question: "Заполните текст (Pret. Perf. Composto): A diáspora portuguesa ___-___ ___ cada vez mais ativa. (revelar-se)",
    answer: "tem-se revelado"
  },

  // === Дополнительные упражнения: match, order, choice ===
  {
    type: "match",
    question: "Соотнесите глагол с его неправильным причастием:",
    pairs: [
      ["fazer", "feito"],
      ["ver", "visto"],
      ["escrever", "escrito"],
      ["abrir", "aberto"],
      ["cobrir", "coberto"],
      ["pôr", "posto"]
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «В последнее время мы много путешествовали.»",
    words: ["Nós", "temos", "viajado", "muito", "ultimamente"],
    answer: "Nós temos viajado muito ultimamente."
  },
  {
    type: "match",
    question: "Соотнесите местоимение с формой «ter» в Presente (для Pret. Perf. Composto):",
    pairs: [
      ["eu", "tenho"],
      ["tu", "tens"],
      ["ele/ela/você", "tem"],
      ["nós", "temos"],
      ["eles/elas/vocês", "têm"]
    ]
  },
  {
    type: "choice",
    question: "Что обозначает Pretérito Perfeito Composto в европейском португальском?",
    options: [
      "Однократное завершённое действие в прошлом",
      "Повторяющееся или продолжающееся действие от прошлого до настоящего",
      "Действие, предшествующее другому в прошлом",
      "Привычное действие в далёком прошлом"
    ],
    correct: 1,
    explanation: "В европейском португальском Pret. Perf. Composto обозначает действие, которое началось в прошлом и повторяется или продолжается до настоящего момента."
  },
  {
    type: "order",
    question: "Составьте предложение: «Она много работала в последнее время.»",
    words: ["Ela", "tem", "trabalhado", "muito", "ultimamente"],
    answer: "Ela tem trabalhado muito ultimamente."
  }
];
