export default {
  title: "Простий минулий час (Pretérito Perfeito Simples)",
  description: "Відмінювання правильних та неправильних дієслів у простому минулому часі",
  theory: [
    {
      heading: "Pretérito Perfeito Simples",
      text: "Цей час використовується для позначення завершених дій у минулому. Еквівалент українського доконаного виду минулого часу: «я зробив», «він прийшов»."
    },
    {
      heading: "Правильні дієслова",
      text: "Закінчення правильних дієслів у простому минулому часі."
    },
    {
      table: {
        headers: ["Особа", "-ar (falar)", "-er (comer)", "-ir (partir)"],
        rows: [
          ["eu", "falei", "comi", "parti"],
          ["tu", "falaste", "comeste", "partiste"],
          ["ele/ela/você", "falou", "comeu", "partiu"],
          ["nós", "falámos", "comemos", "partimos"],
          ["eles/elas/vocês", "falaram", "comeram", "partiram"]
        ]
      }
    },
    {
      heading: "Неправильні дієслова в Pretérito Perfeito",
      text: "Основні неправильні дієслова мають особливі форми."
    },
    {
      table: {
        headers: ["Особа", "ser/ir", "ter", "estar", "fazer"],
        rows: [
          ["eu", "fui", "tive", "estive", "fiz"],
          ["tu", "foste", "tiveste", "estiveste", "fizeste"],
          ["ele/ela", "foi", "teve", "esteve", "fez"],
          ["nós", "fomos", "tivemos", "estivemos", "fizemos"],
          ["eles/elas", "foram", "tiveram", "estiveram", "fizeram"]
        ]
      }
    },
    {
      table: {
        headers: ["Особа", "poder", "querer", "saber", "dizer", "dar", "vir"],
        rows: [
          ["eu", "pude", "quis", "soube", "disse", "dei", "vim"],
          ["tu", "pudeste", "quiseste", "soubeste", "disseste", "deste", "vieste"],
          ["ele/ela", "pôde", "quis", "soube", "disse", "deu", "veio"],
          ["nós", "pudemos", "quisemos", "soubemos", "dissemos", "demos", "viemos"],
          ["eles/elas", "puderam", "quiseram", "souberam", "disseram", "deram", "vieram"]
        ]
      }
    },
    {
      examples: [
        { pt: "Ontem falei com o João.", ru: "Учора я поговорив із Жуау." },
        { pt: "Eles foram ao cinema.", ru: "Вони пішли в кіно." },
        { pt: "Tu fizeste o trabalho?", ru: "Ти зробив роботу?" },
        { pt: "Nós estivemos em Lisboa.", ru: "Ми були в Лісабоні." }
      ]
    },
    {
      note: "Зверніть увагу: у європейській португальській форма «nós» для -ar дієслів у Pretérito Perfeito має наголос: falámos (з акцентом!), на відміну від теперішнього часу: falamos (без акценту). У бразильській ця різниця не позначається."
    }
  ],
  vocabulary: [
    { ru: "учора" },
    { ru: "минулого тижня" },
    { ru: "минулого року" },
    { ru: "два дні тому" },
    { ru: "приїжджати, прибувати" },
    { ru: "приходити" },
    { ru: "приносити" },
    { ru: "класти, ставити" },
    { ru: "пиріг, торт" },
    { ru: "робота" }
  ],
  flashcards: [
    { ru: "я був / я пішов", hint: "Pret. Perf. від ser/ir" },
    { ru: "я мав", hint: "Pret. Perf. від ter" },
    { ru: "я був (десь)", hint: "Pret. Perf. від estar" },
    { ru: "я зробив", hint: "Pret. Perf. від fazer" },
    { ru: "я/він сказав", hint: "Pret. Perf. від dizer" },
    { ru: "я дав", hint: "Pret. Perf. від dar" },
    { ru: "я прийшов", hint: "Pret. Perf. від vir" },
    { ru: "приїжджати", hint: "eu cheguei (з -gu-)" }
  ],
  exercises: [
    // 0
    {
      explanation: "«Eu fui» — форма 1-ї особи одн. дієслова «ir» у Pretérito Perfeito."
    },
    // 1
    null,
    // 2
    {
      source: "Учора ми їли рибу."
    },
    // 3
    {
      explanation: "«Tu viste» — форма 2-ї особи одн. дієслова «ver» у Pretérito Perfeito."
    },
    // 4
    null,
    // 5
    null,
    // 6
    null,
    // 7
    null,
    // 8
    {
      question: "Nós ___ o português. (estudar — Pretérito Perfeito; зверніть увагу на акцент)"
    },
    // 9
    null,
    // 10
    null,
    // 11
    null,
    // 12
    null,
    // 13
    null,
    // 14
    null,
    // 15
    null,
    // 16
    null,
    // 17
    {
      explanation: "«Eu estive» — форма 1-ї особи одн. дієслова «estar» у Pretérito Perfeito."
    },
    // 18
    null,
    // 19
    {
      explanation: "«Nós dissemos» — неправильна форма дієслова «dizer» у Pretérito Perfeito."
    },
    // 20
    null,
    // 21
    null,
    // 22
    {
      explanation: "«Ela pôde» — форма 3-ї особи одн. дієслова «poder» у Pretérito Perfeito. Зверніть увагу на циркумфлекс."
    },
    // 23
    null,
    // 24
    {
      explanation: "«Ele veio» — форма 3-ї особи одн. дієслова «vir» у Pretérito Perfeito."
    },
    // 25
    null,
    // 26
    {
      question: "Форми дієслів «ser» і «ir» у Pretérito Perfeito...",
      options: [
        "різняться",
        "повністю збігаються",
        "збігаються лише в 1-й особі",
        "збігаються лише в 3-й особі"
      ],
      explanation: "У Pretérito Perfeito дієслова ser та ir мають однакові форми: fui, foste, foi, fomos, foram."
    },
    // 27
    null,
    // 28
    null,
    // 29
    {
      source: "Ти зробив роботу?"
    },
    // 30
    {
      source: "Вони пішли в кіно."
    },
    // 31
    {
      source: "Я сказав їй правду."
    },
    // 32
    {
      source: "Ми були в Лісабоні."
    },
    // 33
    {
      question: "Зіставте неправильні дієслова з формою «eu» у Pretérito Perfeito:"
    },
    // 34
    {
      question: "У європейській португальській форма «nós» для дієслів на -ar у Pretérito Perfeito відрізняється від теперішнього часу тим, що:",
      options: [
        "змінюється корінь",
        "додається акцент на «а»: falámos",
        "закінчення інше: falemos",
        "нічим не відрізняється"
      ],
      explanation: "У європ. португальській: falámos (минулий) vs falamos (теперішній). Акцент допомагає розрізняти часи."
    },
    // 35
    {
      question: "Складіть речення: «Учора я поговорив із Жуау.»"
    },
    // 36
    null,
    // 37
    {
      explanation: "«Eu pus» — форма 1-ї особи одн. дієслова «pôr» у Pretérito Perfeito."
    },
    // 38
    null,
    // 39
    {
      question: "Виберіть маркер, типовий для Pretérito Perfeito Simples:",
      options: ["todos os dias", "normalmente", "ontem", "sempre"],
      explanation: "«Ontem» (учора) — маркер завершеної дії в минулому, типовий для Pretérito Perfeito Simples."
    }
  ]
};
