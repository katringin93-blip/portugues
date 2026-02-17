export const exercises = [
      // === EXISTING 5 EXERCISES ===
      {
        type: "choice",
        question: "Как будет 16 в европейском португальском?",
        options: ["dezesseis", "dezasseis", "diazesseis", "dessaseis"],
        correct: 1,
        explanation: "В европейском португальском 16 — dezasseis (с «a»), в отличие от бразильского dezesseis."
      },
      {
        type: "fill",
        question: "Напишите по-португальски: 2:30 = São duas e ___.",
        answer: "meia"
      },
      {
        type: "translate",
        source: "Сегодня десятое марта.",
        direction: "ru-pt",
        answer: ["Hoje é dia dez de março.", "Hoje é dez de março."]
      },
      {
        type: "choice",
        question: "Как правильно сказать 1:15?",
        options: ["São uma e um quarto", "É uma e um quarto", "É uma e quinze", "Оба B и C"],
        correct: 3,
        explanation: "Для часа используется «É» (единственное число). Оба варианта — «É uma e um quarto» и «É uma e quinze» — правильны."
      },
      {
        type: "fill",
        question: "Напишите число словами: 350 = trezentos e ___",
        answer: "cinquenta"
      },
      // === NEW EXERCISES ===
      {
        type: "choice",
        question: "Как по-португальски «среда»?",
        options: ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira"],
        correct: 2,
        explanation: "Дни недели: segunda-feira (понедельник), terça-feira (вторник), quarta-feira (среда), quinta-feira (четверг)."
      },
      {
        type: "fill",
        question: "Напишите число словами: 25 = vinte e ___",
        answer: "cinco"
      },
      {
        type: "match",
        question: "Соотнесите числа с их написанием:",
        pairs: [
          { left: "12", right: "doze" },
          { left: "15", right: "quinze" },
          { left: "20", right: "vinte" },
          { left: "100", right: "cem" }
        ]
      },
      {
        type: "choice",
        question: "Как правильно сказать время 3:00?",
        options: ["É três horas", "São três horas", "São três hora", "É três hora"],
        correct: 1,
        explanation: "Для всех часов кроме часа (1:00) используется «São»: São três horas (Три часа)."
      },
      {
        type: "fill",
        question: "Как по-португальски «январь»?",
        answer: "janeiro"
      },
      {
        type: "choice",
        question: "Какой порядковый номер означает «terceiro»?",
        options: ["Первый", "Второй", "Третий", "Четвёртый"],
        correct: 2,
        explanation: "Terceiro — третий. Порядковые: primeiro (1-й), segundo (2-й), terceiro (3-й)."
      },
      {
        type: "fill",
        question: "Напишите число словами: 500 = ___",
        answer: "quinhentos"
      },
      {
        type: "translate",
        source: "Сейчас пять часов.",
        direction: "ru-pt",
        answer: ["São cinco horas."]
      },
      {
        type: "choice",
        question: "Как по-португальски «суббота»?",
        options: ["sexta-feira", "sábado", "domingo", "segunda-feira"],
        correct: 1,
        explanation: "Sábado — суббота. Выходные дни: sábado (суббота) и domingo (воскресенье)."
      },
      {
        type: "match",
        question: "Соотнесите дни недели с переводом:",
        pairs: [
          { left: "segunda-feira", right: "понедельник" },
          { left: "terça-feira", right: "вторник" },
          { left: "sexta-feira", right: "пятница" },
          { left: "domingo", right: "воскресенье" }
        ]
      },
      {
        type: "fill",
        question: "Напишите число словами: 1000 = ___",
        answer: "mil"
      },
      {
        type: "choice",
        question: "Как по-португальски «сентябрь»?",
        options: ["setembro", "novembro", "outubro", "dezembro"],
        correct: 0,
        explanation: "Setembro — сентябрь. Месяцы осени: setembro (сентябрь), outubro (октябрь), novembro (ноябрь)."
      },
      {
        type: "fill",
        question: "Напишите по-португальски время 4:45 = São cinco menos ___.",
        answer: "um quarto"
      },
      {
        type: "translate",
        source: "Сегодня пятница.",
        direction: "ru-pt",
        answer: ["Hoje é sexta-feira.", "Hoje é sexta."]
      },
      {
        type: "choice",
        question: "Как будет «40» по-португальски?",
        options: ["trinta", "quarenta", "cinquenta", "quatorze"],
        correct: 1,
        explanation: "Quarenta — 40. Десятки: trinta (30), quarenta (40), cinquenta (50), sessenta (60)."
      },
      {
        type: "fill",
        question: "Напишите порядковое числительное: 5-й = ___",
        answer: "quinto"
      },
      {
        type: "match",
        question: "Соотнесите месяцы с переводом:",
        pairs: [
          { left: "fevereiro", right: "февраль" },
          { left: "abril", right: "апрель" },
          { left: "junho", right: "июнь" },
          { left: "agosto", right: "август" }
        ]
      },
      {
        type: "choice",
        question: "Как правильно назвать дату «1 мая»?",
        options: ["Um de maio", "Primeiro de maio", "O um maio", "Dia um maio"],
        correct: 1,
        explanation: "Для первого числа месяца используется порядковое числительное: «Primeiro de maio» (первое мая)."
      },
      {
        type: "fill",
        question: "Напишите число словами: 70 = ___",
        answer: "setenta"
      },
      {
        type: "order",
        question: "Составьте предложение: «Сейчас десять часов утра».",
        words: ["da", "horas", "São", "manhã", "dez"],
        answer: "São dez horas da manhã"
      },
      {
        type: "choice",
        question: "Как будет «четверг» по-португальски?",
        options: ["quarta-feira", "quinta-feira", "sexta-feira", "terça-feira"],
        correct: 1,
        explanation: "Quinta-feira — четверг. Буквально «пятый день» (считая от воскресенья)."
      },
      {
        type: "fill",
        question: "Напишите порядковое числительное: 10-й = ___",
        answer: "décimo"
      },
      {
        type: "translate",
        source: "Мой день рождения в августе.",
        direction: "ru-pt",
        answer: ["O meu aniversário é em agosto.", "Meu aniversário é em agosto."]
      },
      {
        type: "choice",
        question: "Как будет 11:30?",
        options: ["São onze e trinta", "São onze e meia", "É onze e meia", "Оба A и B"],
        correct: 3,
        explanation: "Для 11 используется «São» (мн.ч.). И «trinta» и «meia» правильны: São onze e trinta / São onze e meia."
      }
    ];
