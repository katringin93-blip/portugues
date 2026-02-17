export const exercises = [
      {
        type: "choice",
        question: "Выберите правильный перевод «Я никогда не ем рыбу»:",
        options: [
          "Eu nunca não como peixe.",
          "Eu não como nunca peixe.",
          "Eu nunca como peixe.",
          "Eu não nunca como peixe."
        ],
        correct: 2,
        explanation: "Когда «nunca» стоит перед глаголом, «não» не нужно: «Eu nunca como peixe»."
      },
      {
        type: "fill",
        question: "Не знаю ___ (ничего) sobre isso. → Não sei ___ sobre isso.",
        answer: "nada"
      },
      {
        type: "translate",
        source: "Никто не говорит по-русски.",
        direction: "ru-pt",
        answer: ["Ninguém fala russo.", "Não fala ninguém russo."]
      },
      {
        type: "choice",
        question: "Какое слово означает «никогда»?",
        options: ["nada", "ninguém", "nunca", "nenhum"],
        correct: 2,
        explanation: "«Nunca» означает «никогда». Nada = ничего, ninguém = никто, nenhum = никакой."
      },
      {
        type: "fill",
        question: "Она ещё не приехала: Ela ___ ___ chegou.",
        answer: ["ainda", "não"]
      },
      {
        type: "choice",
        question: "Как правильно сказать «Я ничего не хочу»?",
        options: [
          "Eu não quero nada.",
          "Eu nada quero não.",
          "Eu não nada quero.",
          "Eu quero não nada."
        ],
        correct: 0,
        explanation: "Двойное отрицание в португальском: «Não» перед глаголом + «nada» после: «Não quero nada»."
      },
      {
        type: "fill",
        question: "___ sabe a resposta. (Никто не знает ответ.)",
        answer: "Ninguém"
      },
      {
        type: "translate",
        source: "Я не понимаю ничего.",
        direction: "ru-pt",
        answer: ["Não percebo nada.", "Não compreendo nada.", "Eu não percebo nada.", "Eu não compreendo nada."]
      },
      {
        type: "match",
        question: "Соотнесите отрицательные слова с переводом:",
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
        question: "Составьте отрицательное предложение: «Я не говорю по-французски.»",
        words: ["Eu", "não", "falo", "francês", "."],
        answer: "Eu não falo francês."
      },
      {
        type: "choice",
        question: "«Não tenho ___ amigos aqui.» (У меня нет никаких друзей здесь.)",
        options: ["nenhum", "nenhuns", "nenhumas", "nenhuma"],
        correct: 1,
        explanation: "«Amigos» — м.р. мн.ч., поэтому «nenhuns». (Но в разговорной речи часто используют «nenhum».)"
      },
      {
        type: "fill",
        question: "Ele não come ___ carne ___ peixe. (Он не ест ни мясо, ни рыбу.)",
        answer: ["nem", "nem"]
      },
      {
        type: "translate",
        source: "Я никогда не был в Лиссабоне.",
        direction: "ru-pt",
        answer: ["Nunca estive em Lisboa.", "Eu nunca estive em Lisboa.", "Não estive nunca em Lisboa."]
      },
      {
        type: "choice",
        question: "Где ставится «não» в предложении?",
        options: [
          "После глагола",
          "Перед глаголом",
          "В конце предложения",
          "Перед подлежащим"
        ],
        correct: 1,
        explanation: "«Não» всегда ставится непосредственно перед глаголом: «Eu não falo»."
      },
      {
        type: "fill",
        question: "Não há ___ problema. (Нет никакой проблемы.)",
        answer: "nenhum"
      },
      {
        type: "translate",
        source: "Мы ничего не знаем об этом.",
        direction: "ru-pt",
        answer: ["Não sabemos nada sobre isso.", "Nós não sabemos nada sobre isso.", "Não sabemos nada disso."]
      },
      {
        type: "order",
        question: "Составьте предложение: «Никто здесь не работает.»",
        words: ["Ninguém", "trabalha", "aqui", "."],
        answer: "Ninguém trabalha aqui."
      },
      {
        type: "choice",
        question: "Выберите правильное предложение с «nem...nem»:",
        options: [
          "Nem gosto de café nem de chá.",
          "Não gosto nem de café nem de chá.",
          "Não gosto de café nem chá.",
          "Nem não gosto de café nem de chá."
        ],
        correct: 1,
        explanation: "Правильная структура: «Não» + глагол + «nem...nem»: «Não gosto nem de café nem de chá»."
      },
      {
        type: "fill",
        question: "Eu ___ vou lá. (Я никогда туда не хожу. — «nunca» перед глаголом)",
        answer: "nunca"
      },
      {
        type: "translate",
        source: "У неё нет ни братьев, ни сестёр.",
        direction: "ru-pt",
        answer: ["Ela não tem nem irmãos nem irmãs.", "Não tem nem irmãos nem irmãs."]
      },
      {
        type: "choice",
        question: "Как сказать «Ничего не случилось»?",
        options: [
          "Nada aconteceu.",
          "Não aconteceu nada.",
          "Оба варианта верны.",
          "Ни один вариант не верен."
        ],
        correct: 2,
        explanation: "Оба варианта верны: «Nada aconteceu» (nada перед глаголом) и «Não aconteceu nada» (двойное отрицание)."
      },
      {
        type: "fill",
        question: "Ele não gosta de ___ pessoa nesta sala. (Ему не нравится ни один человек в этой комнате.)",
        answer: "nenhuma"
      },
      {
        type: "order",
        question: "Составьте предложение: «Я ничего не вижу.»",
        words: ["Não", "vejo", "nada", "Eu", "."],
        answer: "Eu não vejo nada."
      },
      {
        type: "translate",
        source: "Ты никогда не слушаешь?",
        direction: "ru-pt",
        answer: ["Nunca ouves?", "Tu nunca ouves?", "Não ouves nunca?"]
      },
      {
        type: "choice",
        question: "«___ me disse isso.» — Никто мне этого не говорил.",
        options: ["Nada", "Nenhum", "Ninguém", "Nunca"],
        correct: 2,
        explanation: "«Ninguém» (никто) используется как подлежащее: «Ninguém me disse isso»."
      },
      {
        type: "fill",
        question: "Não temos ___ dinheiro. (У нас нет никаких денег.)",
        answer: "nenhum"
      },
      {
        type: "match",
        question: "Соотнесите предложения с переводом:",
        pairs: [
          { left: "Não quero nada.", right: "Я ничего не хочу." },
          { left: "Ninguém veio.", right: "Никто не пришёл." },
          { left: "Nunca como carne.", right: "Я никогда не ем мясо." },
          { left: "Não tenho nenhum livro.", right: "У меня нет ни одной книги." }
        ]
      },
      {
        type: "translate",
        source: "Они ни с кем не разговаривают.",
        direction: "ru-pt",
        answer: ["Eles não falam com ninguém.", "Não falam com ninguém."]
      }
    ];
