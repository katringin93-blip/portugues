export default {
  title: "Теперішній доконаний час",
  description: "Pretérito Perfeito Composto — дія, що повторюється від минулого до теперішнього",
  theory: [
    {
      heading: "Утворення Pretérito Perfeito Composto",
      text: "Цей час утворюється за допомогою допоміжного дієслова «ter» у теперішньому часі + дієприкметник минулого часу (particípio passado). Важливо: у європейській португальській цей час позначає дію, яка почалася в минулому і повторюється/продовжується до теперішнього моменту."
    },
    {
      table: {
        headers: ["Особа", "ter + particípio"],
        rows: [
          ["eu", "tenho falado"],
          ["tu", "tens falado"],
          ["ele/ela/você", "tem falado"],
          ["nós", "temos falado"],
          ["eles/elas/vocês", "têm falado"]
        ]
      }
    },
    {
      heading: "Дієприкметник минулого часу",
      text: "Правильні дієприкметники утворюються від основи дієслова з додаванням закінчення."
    },
    {
      table: {
        headers: ["Дієвідміна", "Закінчення", "Приклад"],
        rows: [
          ["-ar", "-ado", "falar → falado"],
          ["-er", "-ido", "comer → comido"],
          ["-ir", "-ido", "partir → partido"]
        ]
      }
    },
    {
      heading: "Неправильні дієприкметники",
      text: "Деякі дієслова мають неправильні дієприкметники."
    },
    {
      table: {
        headers: ["Дієслово", "Дієприкметник", "Переклад"],
        rows: [
          ["fazer", "feito", "зроблений"],
          ["dizer", "dito", "сказаний"],
          ["ver", "visto", "побачений"],
          ["escrever", "escrito", "написаний"],
          ["abrir", "aberto", "відкритий"],
          ["pôr", "posto", "покладений"],
          ["vir", "vindo", "прибулий"]
        ]
      }
    },
    {
      examples: [
        { pt: "Tenho estudado muito ultimamente.", ru: "Останнім часом я багато вчуся (і продовжую)." },
        { pt: "Ela tem trabalhado em casa.", ru: "Вона працює вдома (вже якийсь час)." },
        { pt: "Temos feito progressos.", ru: "Ми робимо успіхи (протягом якогось часу)." },
        { pt: "Eles têm vindo cá todos os dias.", ru: "Вони приходять сюди щодня (вже якийсь час)." }
      ]
    },
    {
      note: "Увага! У європейській португальській Pretérito Perfeito Composto НЕ відповідає англійському Present Perfect. Він означає дію, що повторюється або триває, а не одноразову завершену. Для одноразової завершеної дії використовується Pretérito Perfeito Simples (наступний урок)."
    }
  ],
  vocabulary: [
    { ru: "мати; допоміжне дієслово" },
    { ru: "останнім часом" },
    { ru: "зроблений (дієприкметник)" },
    { ru: "сказаний (дієприкметник)" },
    { ru: "побачений (дієприкметник)" },
    { ru: "написаний (дієприкметник)" },
    { ru: "відкритий (дієприкметник)" },
    { ru: "прогрес, успіх" },
    { ru: "лист" },
    { ru: "читати" }
  ],
  flashcards: [
    { ru: "я говорив (і продовжую)", hint: "Pret. Perf. Composto" },
    { ru: "зроблений", hint: "неправ. дієприкметник від fazer" },
    { ru: "сказаний", hint: "неправ. дієприкметник від dizer" },
    { ru: "побачений", hint: "неправ. дієприкметник від ver" },
    { ru: "написаний", hint: "неправ. дієприкметник від escrever" },
    { ru: "відкритий", hint: "неправ. дієприкметник від abrir" },
    { ru: "останнім часом", hint: "маркер Pret. Perf. Composto" },
    { ru: "читати", hint: "eu leio, дієприкметник: lido" }
  ],
  exercises: [
    // 0
    {
      question: "Nós ___ muito. (estudar — дія, що повторюється)",
      explanation: "Для «nós» — «temos» + дієприкметник «estudado»: temos estudado."
    },
    // 1
    {
      question: "Дієприкметник від «fazer»: ___"
    },
    // 2
    {
      source: "Останнім часом я багато читав."
    },
    // 3
    {
      question: "Який дієприкметник неправильний?",
      explanation: "«Escrito» — неправильний дієприкметник від «escrever» (замість очікуваного *escrevido)."
    },
    // 4
    null,
    // 5
    null,
    // 6
    {
      explanation: "Для «tu» — «tens» + дієприкметник «dormido»: tens dormido."
    },
    // 7
    {
      question: "Дієприкметник від «dizer»: ___"
    },
    // 8
    {
      question: "Дієприкметник від «ver»: ___"
    },
    // 9
    {
      question: "Дієприкметник від «abrir»: ___"
    },
    // 10
    {
      question: "Дієприкметник від «pôr»: ___"
    },
    // 11
    {
      question: "Дієприкметник від «vir»: ___"
    },
    // 12
    {
      explanation: "Для «eles» — «têm» (із циркумфлексом!) + дієприкметник «vindo»."
    },
    // 13
    null,
    // 14
    {
      source: "Ми робимо успіхи останнім часом."
    },
    // 15
    {
      question: "Що позначає Pretérito Perfeito Composto в європейській португальській?",
      options: [
        "Одноразова завершена дія",
        "Дія, що повторюється/продовжується від минулого до теперішнього",
        "Майбутня дія",
        "Звична дія в минулому"
      ],
      explanation: "У європейській португальській цей час позначає дію, яка почалася в минулому й повторюється/продовжується до теперішнього моменту."
    },
    // 16
    null,
    // 17
    {
      source: "Вона працює вдома (вже якийсь час)."
    },
    // 18
    {
      question: "Дієприкметник від «falar»:",
      options: ["falado", "falido", "faledo", "falando"],
      explanation: "Дієслова на -ar утворюють дієприкметник із закінченням -ado: falar → falado."
    },
    // 19
    {
      question: "Дієприкметник від «comer»:",
      options: ["comado", "comedo", "comido", "comindo"],
      explanation: "Дієслова на -er утворюють дієприкметник із закінченням -ido: comer → comido."
    },
    // 20
    {
      question: "Дієприкметник від «partir»:",
      options: ["partado", "partido", "partedo", "partindo"],
      explanation: "Дієслова на -ir утворюють дієприкметник із закінченням -ido: partir → partido."
    },
    // 21
    null,
    // 22
    {
      source: "Ти бачив Жуау останнім часом?"
    },
    // 23
    {
      question: "Яке з наступних речень використовує Pretérito Perfeito Composto правильно?",
      options: [
        "Ontem tenho comido peixe.",
        "Tenho comido muito peixe ultimamente.",
        "Amanhã tenho comido peixe.",
        "Tenho comido peixe ontem."
      ],
      explanation: "Pret. Perf. Composto позначає дію, що повторюється до теперішнього моменту. «Ultimamente» — правильний маркер. «Ontem» і «amanhã» не підходять."
    },
    // 24
    {
      question: "Зіставте дієслово з його неправильним дієприкметником:"
    },
    // 25
    null,
    // 26
    {
      source: "Вони приходять сюди щодня (вже якийсь час)."
    },
    // 27
    null,
    // 28
    null,
    // 29
    {
      question: "Складіть речення: «Останнім часом погода була гарною.»"
    },
    // 30
    {
      question: "Яка форма «ter» вживається з «vocês»?",
      explanation: "З «vocês» (і «eles/elas») вживається «têm» (із циркумфлексом), а не «tem»."
    },
    // 31
    null,
    // 32
    {
      source: "Я написав багато листів останнім часом."
    },
    // 33
    {
      question: "Як правильно сказати «Я багато вчився останнім часом»?",
      options: [
        "Eu estudei muito ultimamente.",
        "Eu tenho estudado muito ultimamente.",
        "Eu estudo muito ultimamente.",
        "Eu tinha estudado muito ultimamente."
      ],
      explanation: "Для дії, що повторюється від минулого до теперішнього, вживається Pret. Perf. Composto: tenho estudado."
    },
    // 34
    null,
    // 35
    {
      question: "Зіставте займенник із формою «ter»:"
    }
  ]
};
