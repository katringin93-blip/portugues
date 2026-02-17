export default {
  title: "Числа, час і дати",
  description: "Кількісні та порядкові числівники, позначення часу та дат",
  theory: [
    {
      heading: "Кількісні числівники (Números cardinais)",
      text: "Числівники від 1 до 20 потрібно запам'ятати. Зверніть увагу, що 1 і 2 мають форми чоловічого та жіночого роду."
    },
    {
      table: {
        headers: ["Число", "Португальська", "Число", "Португальська"],
        rows: [
          ["0", "zero", "11", "onze"],
          ["1", "um / uma", "12", "doze"],
          ["2", "dois / duas", "13", "treze"],
          ["3", "três", "14", "catorze"],
          ["4", "quatro", "15", "quinze"],
          ["5", "cinco", "16", "dezasseis"],
          ["6", "seis", "17", "dezassete"],
          ["7", "sete", "18", "dezoito"],
          ["8", "oito", "19", "dezanove"],
          ["9", "nove", "20", "vinte"],
          ["10", "dez", "", ""]
        ]
      }
    },
    {
      heading: "Десятки та сотні",
      text: "У європейській португальській десятки та одиниці з'єднуються сполучником «e»: vinte e um (21), trinta e cinco (35)."
    },
    {
      table: {
        headers: ["Число", "Португальська", "Число", "Португальська"],
        rows: [
          ["20", "vinte", "200", "duzentos/as"],
          ["30", "trinta", "300", "trezentos/as"],
          ["40", "quarenta", "400", "quatrocentos/as"],
          ["50", "cinquenta", "500", "quinhentos/as"],
          ["60", "sessenta", "600", "seiscentos/as"],
          ["70", "setenta", "700", "setecentos/as"],
          ["80", "oitenta", "800", "oitocentos/as"],
          ["90", "noventa", "900", "novecentos/as"],
          ["100", "cem / cento", "1000", "mil"]
        ]
      }
    },
    {
      heading: "Час (As horas)",
      text: "У Португалії використовується система «É uma hora» (перша година) та «São duas horas» (друга година). Хвилини додаються через «e»: São três e dez (3:10). «Menos» використовується для позначення «без»: São cinco menos um quarto (4:45)."
    },
    {
      examples: [
        { pt: "Que horas são? — São duas e meia.", ru: "Котра година? — Пів на третю (2:30)." },
        { pt: "É uma e um quarto.", ru: "Чверть на другу (1:15)." },
        { pt: "São oito menos vinte.", ru: "За двадцять восьма (7:40)." },
        { pt: "Hoje é dia quinze de fevereiro.", ru: "Сьогодні п'ятнадцяте лютого." }
      ]
    },
    {
      heading: "Дати (As datas)",
      text: "Дати виражаються кількісними числівниками: dia dois de março (2 березня). Місяці пишуться з малої літери: janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro."
    },
    {
      note: "Зверніть увагу на європейські форми: dezasseis (16), dezassete (17), dezanove (19) — у бразильському варіанті вони пишуться з подвійним «s»: dezesseis, dezessete, dezenove."
    }
  ],
  vocabulary: [
    { ru: "година" },
    { ru: "хвилина" },
    { ru: "половина" },
    { ru: "чверть" },
    { ru: "сьогодні" },
    { ru: "завтра" },
    { ru: "учора" },
    { ru: "місяць" },
    { ru: "рік" },
    { ru: "тиждень" }
  ],
  flashcards: [
    { ru: "година", hint: "Que horas são?" },
    { ru: "сьогодні", hint: "прислівник часу" },
    { ru: "завтра", hint: "прислівник часу" },
    { ru: "учора", hint: "прислівник часу" },
    { ru: "тиждень", hint: "esta semana = цього тижня" },
    { ru: "місяць", hint: "мн.: os meses" },
    { ru: "рік", hint: "мн.: os anos" },
    { ru: "половина (при позначенні часу)", hint: "São duas e meia = 2:30" }
  ],
  exercises: [
    // 1 - choice
    { question: "Як буде 16 у європейській португальській?", options: ["dezesseis", "dezasseis", "diazesseis", "dessaseis"], explanation: "У європейській португальській 16 — dezasseis (з «a»), на відміну від бразильського dezesseis." },
    // 2 - fill
    { question: "Напишіть португальською: 2:30 = São duas e ___." },
    // 3 - translate ru-pt
    { source: "Сьогодні десяте березня." },
    // 4 - choice
    { question: "Як правильно сказати 1:15?", options: ["São uma e um quarto", "É uma e um quarto", "É uma e quinze", "Обидва B і C"], explanation: "Для першої години використовується «É» (однина). Обидва варіанти — «É uma e um quarto» і «É uma e quinze» — правильні." },
    // 5 - fill
    { question: "Напишіть число словами: 350 = trezentos e ___" },
    // 6 - choice
    { question: "Як португальською «середа»?", options: ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira"], explanation: "Дні тижня: segunda-feira (понеділок), terça-feira (вівторок), quarta-feira (середа), quinta-feira (четвер)." },
    // 7 - fill
    { question: "Напишіть число словами: 25 = vinte e ___" },
    // 8 - match
    { question: "Співвіднесіть числа з їх написанням:", pairs: [{ left: "12", right: "doze" }, { left: "15", right: "quinze" }, { left: "20", right: "vinte" }, { left: "100", right: "cem" }] },
    // 9 - choice
    { question: "Як правильно сказати час 3:00?", options: ["É três horas", "São três horas", "São três hora", "É três hora"], explanation: "Для всіх годин, крім першої (1:00), використовується «São»: São três horas (Третя година)." },
    // 10 - fill
    { question: "Як португальською «січень»?" },
    // 11 - choice
    { question: "Який порядковий номер означає «terceiro»?", options: ["Перший", "Другий", "Третій", "Четвертий"], explanation: "Terceiro — третій. Порядкові: primeiro (1-й), segundo (2-й), terceiro (3-й)." },
    // 12 - fill
    { question: "Напишіть число словами: 500 = ___" },
    // 13 - translate ru-pt
    { source: "Зараз п'ята година." },
    // 14 - choice
    { question: "Як португальською «субота»?", options: ["sexta-feira", "sábado", "domingo", "segunda-feira"], explanation: "Sábado — субота. Вихідні дні: sábado (субота) та domingo (неділя)." },
    // 15 - match
    { question: "Співвіднесіть дні тижня з перекладом:", pairs: [{ left: "segunda-feira", right: "понеділок" }, { left: "terça-feira", right: "вівторок" }, { left: "sexta-feira", right: "п'ятниця" }, { left: "domingo", right: "неділя" }] },
    // 16 - fill
    { question: "Напишіть число словами: 1000 = ___" },
    // 17 - choice
    { question: "Як португальською «вересень»?", options: ["setembro", "novembro", "outubro", "dezembro"], explanation: "Setembro — вересень. Осінні місяці: setembro (вересень), outubro (жовтень), novembro (листопад)." },
    // 18 - fill
    { question: "Напишіть португальською час 4:45 = São cinco menos ___." },
    // 19 - translate ru-pt
    { source: "Сьогодні п'ятниця." },
    // 20 - choice
    { question: "Як буде «40» португальською?", options: ["trinta", "quarenta", "cinquenta", "quatorze"], explanation: "Quarenta — 40. Десятки: trinta (30), quarenta (40), cinquenta (50), sessenta (60)." },
    // 21 - fill
    { question: "Напишіть порядковий числівник: 5-й = ___" },
    // 22 - match
    { question: "Співвіднесіть місяці з перекладом:", pairs: [{ left: "fevereiro", right: "лютий" }, { left: "abril", right: "квітень" }, { left: "junho", right: "червень" }, { left: "agosto", right: "серпень" }] },
    // 23 - choice
    { question: "Як правильно назвати дату «1 травня»?", options: ["Um de maio", "Primeiro de maio", "O um maio", "Dia um maio"], explanation: "Для першого числа місяця використовується порядковий числівник: «Primeiro de maio» (перше травня)." },
    // 24 - fill
    { question: "Напишіть число словами: 70 = ___" },
    // 25 - order
    { question: "Складіть речення: «Зараз десята година ранку»." },
    // 26 - choice
    { question: "Як буде «четвер» португальською?", options: ["quarta-feira", "quinta-feira", "sexta-feira", "terça-feira"], explanation: "Quinta-feira — четвер. Буквально «п'ятий день» (рахуючи від неділі)." },
    // 27 - fill
    { question: "Напишіть порядковий числівник: 10-й = ___" },
    // 28 - translate ru-pt
    { source: "Мій день народження у серпні." },
    // 29 - choice
    { question: "Як буде 11:30?", options: ["São onze e trinta", "São onze e meia", "É onze e meia", "Обидва A і B"], explanation: "Для 11 використовується «São» (мн.). І «trinta», і «meia» правильні: São onze e trinta / São onze e meia." }
  ]
};
