export default {
  title: "Зворотні займенники та дієслова",
  description: "Зворотні дієслова та займенники в європейській португальській",
  theory: [
    {
      heading: "Зворотні займенники (Pronomes reflexos)",
      text: "Зворотні займенники вказують, що дія спрямована на самого суб'єкта. У словнику зворотні дієслова позначаються з «-se» на кінці."
    },
    {
      table: {
        headers: ["Особа", "Займенник"],
        rows: [
          ["eu", "me"],
          ["tu", "te"],
          ["ele/ela/você", "se"],
          ["nós", "nos"],
          ["eles/elas/vocês", "se"]
        ]
      }
    },
    {
      heading: "Відмінювання зворотного дієслова levantar-se (вставати)",
      text: "У стверджувальних реченнях зворотний займенник стоїть після дієслова (енклізис). При запереченні та після «притягувальних» слів — перед дієсловом."
    },
    {
      table: {
        headers: ["Стверджувальне", "Заперечне"],
        rows: [
          ["Eu levanto-me", "Eu não me levanto"],
          ["Tu levantas-te", "Tu não te levantas"],
          ["Ele levanta-se", "Ele não se levanta"],
          ["Nós levantamo-nos", "Nós não nos levantamos"],
          ["Eles levantam-se", "Eles não se levantam"]
        ]
      }
    },
    {
      heading: "Поширені зворотні дієслова",
      text: "Багато повсякденних дій виражаються зворотними дієсловами."
    },
    {
      examples: [
        { pt: "Eu levanto-me às sete horas.", ru: "Я встаю о сьомій годині." },
        { pt: "Ela chama-se Maria.", ru: "Її звати Марія." },
        { pt: "Nós divertimo-nos muito.", ru: "Ми дуже веселимося." },
        { pt: "Eles sentam-se à mesa.", ru: "Вони сідають за стіл." }
      ]
    },
    {
      note: "Зверніть увагу: у формі «nós» літера -s дієслова відпадає перед -nos: levantamos + nos → levantamo-nos, divertimos + nos → divertimo-nos."
    }
  ],
  vocabulary: [
    { ru: "вставати" },
    { ru: "лягати" },
    { ru: "митися, вмиватися" },
    { ru: "одягатися" },
    { ru: "сідати" },
    { ru: "зватися, називатися" },
    { ru: "розважатися, веселитися" },
    { ru: "роздягатися" },
    { ru: "зачісуватися" },
    { ru: "голитися" }
  ],
  flashcards: [
    { ru: "вставати", hint: "eu levanto-me" },
    { ru: "лягати", hint: "eu deito-me" },
    { ru: "митися", hint: "eu lavo-me" },
    { ru: "одягатися", hint: "eu visto-me" },
    { ru: "сідати", hint: "eu sento-me" },
    { ru: "зватися", hint: "eu chamo-me" },
    { ru: "веселитися", hint: "eu divirto-me" },
    { ru: "зачісуватися", hint: "eu penteio-me" }
  ],
  exercises: [
    // 0
    {
      question: "Як тебе звати? = Como ___ chamas?"
    },
    // 1
    {
      explanation: "У стверджувальному реченні (без «притягувальних» слів) — енклізис: levanto-me."
    },
    // 2
    {
      source: "Вони лягають спати пізно."
    },
    // 3
    {
      question: "Заперечна форма «Eu levanto-me cedo» →",
      options: ["Eu levanto-me não cedo", "Eu não levanto-me cedo", "Eu não me levanto cedo", "Eu me não levanto cedo"],
      explanation: "При запереченні займенник переходить перед дієслово: «Eu não me levanto cedo»."
    },
    // 4
    {
      question: "Ми веселимося: Nós divertimo-___."
    },
    // 5
    {
      question: "Зіставте особові займенники зі зворотними:"
    },
    // 6
    {
      question: "Він миється: Ele lava-___."
    },
    // 7
    {
      question: "Ви сідаєте: Vocês sentam-___."
    },
    // 8
    {
      question: "Як відмінюється «vestir-se» (одягатися) у 1-й особі одн.?",
      options: ["Eu visto-me.", "Eu me visto.", "Eu vesto-me.", "Eu visto-se."],
      explanation: "Vestir — eu visto (неправильне дієслово, e→i). У стверджувальному — енклізис: visto-me."
    },
    // 9
    {
      question: "Я прокидаюся рано: Eu acordo-___ cedo."
    },
    // 10
    {
      source: "Вона лягає спати о десятій годині."
    },
    // 11
    {
      question: "Яке дієслово означає «зачісуватися»?",
      options: ["lavar-se", "pentear-se", "vestir-se", "barbear-se"],
      explanation: "Pentear-se = зачісуватися. Lavar-se = митися, vestir-se = одягатися, barbear-se = голитися."
    },
    // 12
    {
      question: "Він голиться щоранку: Ele barbeia-___ todas as manhãs."
    },
    // 13
    {
      source: "Ми сідаємо за стіл."
    },
    // 14
    {
      question: "Зіставте зворотні дієслова з їхніми значеннями:",
      pairs: [
        ["levantar-se", "вставати"],
        ["deitar-se", "лягати"],
        ["vestir-se", "одягатися"],
        ["lavar-se", "митися"],
        ["sentar-se", "сідати"],
        ["chamar-se", "зватися"]
      ]
    },
    // 15
    {
      question: "Я не лягаю пізно: Eu não ___ deito tarde."
    },
    // 16
    {
      question: "«Ela nunca ___ levanta cedo.» Який займенник?",
      explanation: "Підмет «ela» → зворотне «se». Після «nunca» — прокліза: nunca se levanta."
    },
    // 17
    {
      source: "Ти не одягаєшся швидко."
    },
    // 18
    {
      question: "Хто там сидить? Quem ___ senta ali?"
    },
    // 19
    {
      question: "«Também ___ levanto às sete.» (Я теж встаю о сьомій.)",
      explanation: "Підмет «eu» (мається на увазі) → me. «Também» спричиняє проклізу."
    },
    // 20
    {
      source: "Я хочу помитися."
    },
    // 21
    {
      question: "Ми збираємося одягнутися: Vamos vestir-___."
    },
    // 22
    {
      question: "«Preciso de ___-me cedo.» (Мені потрібно рано встати.)",
      explanation: "Після прийменника «de» вживається інфінітив: Preciso de levantar-me."
    },
    // 23
    {
      source: "Вона може сісти тут."
    },
    // 24
    {
      question: "Що означає «Eles abraçam-se»?",
      options: ["Вони обіймають себе", "Вони обіймаються (одне одного)", "Вони обіймають нас", "Вони обіймають їх"],
      explanation: "Зворотний займенник «se» з мн. ч. може означати взаємну дію: «обіймаються» (одне одного)."
    },
    // 25
    {
      source: "Ми бачимося щодня."
    },
    // 26
    {
      question: "Вони кохають одне одного: Eles amam-___."
    },
    // 27
    {
      question: "Складіть речення: «Я встаю о сьомій годині.»"
    },
    // 28
    {
      source: "Уранці я прокидаюся, встаю і миюся."
    },
    // 29
    {
      question: "Діти одягаються: As crianças vestem-___."
    },
    // 30
    {
      question: "Як сказати «Мені час вставати» зі зворотним дієсловом?",
      options: ["Tenho de me levantar.", "Tenho de levantar-me.", "Обидва варіанти правильні.", "Tenho de se levantar."],
      explanation: "При двох дієсловах зворотний займенник може стояти при будь-якому з них: «Tenho de me levantar» або «Tenho de levantar-me»."
    },
    // 31
    {
      question: "Яка різниця між «Eu lavo» і «Eu lavo-me»?",
      options: ["Немає різниці", "«Lavo» = мию щось, «lavo-me» = миюся", "«Lavo» = миюся, «lavo-me» = мию щось", "«Lavo-me» — майбутній час"],
      explanation: "Без «-me» — дієслово перехідне (мию щось/когось). З «-me» — зворотне (мию себе, миюся)."
    },
    // 32
    {
      source: "Вона зачісує доньку. / Вона зачісується."
    },
    // 33
    {
      question: "Ми розважаємося на вечірці: Nós divertimo-___ na festa."
    },
    // 34
    {
      question: "Складіть заперечне речення: «Я не лягаю пізно.»"
    },
    // 35
    {
      source: "Як вас звати?"
    }
  ]
};
