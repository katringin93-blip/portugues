export default {
  title: "Numbers, time, and dates",
  description: "Cardinal and ordinal numbers, telling time and dates",
  theory: [
    {
      heading: "Cardinal numbers (Números cardinais)",
      text: "Numbers from 1 to 20 must be memorized. Note that 1 and 2 have masculine and feminine forms."
    },
    {
      table: {
        headers: ["Number", "Portuguese", "Number", "Portuguese"],
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
      heading: "Tens and hundreds",
      text: "In European Portuguese, tens and units are joined by the conjunction «e»: vinte e um (21), trinta e cinco (35)."
    },
    {
      table: {
        headers: ["Number", "Portuguese", "Number", "Portuguese"],
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
      heading: "Time (As horas)",
      text: "In Portugal, the system uses «É uma hora» (one o'clock) and «São duas horas» (two o'clock). Minutes are added with «e»: São três e dez (3:10). «Menos» is used for «to»: São cinco menos um quarto (4:45)."
    },
    {
      examples: [
        { ru: "What time is it? — Half past two (2:30)." },
        { ru: "Quarter past one (1:15)." },
        { ru: "Twenty to eight (7:40)." },
        { ru: "Today is February fifteenth." }
      ]
    },
    {
      heading: "Dates (As datas)",
      text: "Dates are expressed with cardinal numbers: dia dois de março (March 2nd). Months are written in lowercase: janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro."
    },
    {
      note: "Note the European forms: dezasseis (16), dezassete (17), dezanove (19) — in Brazilian Portuguese they are spelled with double «s»: dezesseis, dezessete, dezenove."
    }
  ],
  vocabulary: [
    { ru: "hour" },
    { ru: "minute" },
    { ru: "half" },
    { ru: "quarter" },
    { ru: "today" },
    { ru: "tomorrow" },
    { ru: "yesterday" },
    { ru: "month" },
    { ru: "year" },
    { ru: "week" }
  ],
  flashcards: [
    { ru: "hour", hint: "Que horas são?" },
    { ru: "today", hint: "adverb of time" },
    { ru: "tomorrow", hint: "adverb of time" },
    { ru: "yesterday", hint: "adverb of time" },
    { ru: "week", hint: "esta semana = this week" },
    { ru: "month", hint: "pl.: os meses" },
    { ru: "year", hint: "pl.: os anos" },
    { ru: "half (when telling time)", hint: "São duas e meia = 2:30" }
  ],
  exercises: [
    { question: "How do you say 16 in European Portuguese?", explanation: "In European Portuguese, 16 is dezasseis (with «a»), unlike Brazilian dezesseis." },
    { question: "Write in Portuguese: 2:30 = São duas e ___." },
    { source: "Today is March tenth." },
    { question: "How do you correctly say 1:15?", options: ["São uma e um quarto", "É uma e um quarto", "É uma e quinze", "Both B and C"], explanation: "For one o'clock, «É» (singular) is used. Both «É uma e um quarto» and «É uma e quinze» are correct." },
    { question: "Write out the number: 350 = trezentos e ___" },
    { question: "How do you say «Wednesday» in Portuguese?", explanation: "Days of the week: segunda-feira (Monday), terça-feira (Tuesday), quarta-feira (Wednesday), quinta-feira (Thursday)." },
    { question: "Write out the number: 25 = vinte e ___" },
    { question: "Match the numbers with their spelling:", pairs: [{ left: "12", right: "doze" }, { left: "15", right: "quinze" }, { left: "20", right: "vinte" }, { left: "100", right: "cem" }] },
    { question: "How do you correctly say the time 3:00?", explanation: "For all hours except one o'clock (1:00), «São» is used: São três horas (It's three o'clock)." },
    { question: "How do you say «January» in Portuguese?" },
    { question: "What ordinal number does «terceiro» mean?", options: ["First", "Second", "Third", "Fourth"], explanation: "Terceiro means third. Ordinals: primeiro (1st), segundo (2nd), terceiro (3rd)." },
    { question: "Write out the number: 500 = ___" },
    { source: "It is five o'clock now." },
    { question: "How do you say «Saturday» in Portuguese?", explanation: "Sábado means Saturday. Weekend days: sábado (Saturday) and domingo (Sunday)." },
    { question: "Match the days of the week with their translation:", pairs: [{ left: "segunda-feira", right: "Monday" }, { left: "terça-feira", right: "Tuesday" }, { left: "sexta-feira", right: "Friday" }, { left: "domingo", right: "Sunday" }] },
    { question: "Write out the number: 1000 = ___" },
    { question: "How do you say «September» in Portuguese?", explanation: "Setembro means September. Autumn months: setembro (September), outubro (October), novembro (November)." },
    { question: "Write the time in Portuguese: 4:45 = São cinco menos ___." },
    { source: "Today is Friday." },
    { question: "How do you say «40» in Portuguese?", explanation: "Quarenta means 40. Tens: trinta (30), quarenta (40), cinquenta (50), sessenta (60)." },
    { question: "Write the ordinal number: 5th = ___" },
    { question: "Match the months with their translation:", pairs: [{ left: "fevereiro", right: "February" }, { left: "abril", right: "April" }, { left: "junho", right: "June" }, { left: "agosto", right: "August" }] },
    { question: "How do you correctly say the date «May 1st»?", options: ["Um de maio", "Primeiro de maio", "O um maio", "Dia um maio"], explanation: "For the first day of the month, the ordinal number is used: «Primeiro de maio» (the first of May)." },
    { question: "Write out the number: 70 = ___" },
    { question: "Arrange the sentence: «It is ten o'clock in the morning»." },
    { question: "How do you say «Thursday» in Portuguese?", explanation: "Quinta-feira means Thursday. Literally «fifth day» (counting from Sunday)." },
    { question: "Write the ordinal number: 10th = ___" },
    { source: "My birthday is in August." },
    { question: "How do you say 11:30?", options: ["São onze e trinta", "São onze e meia", "É onze e meia", "Both A and B"], explanation: "For 11, «São» (plural) is used. Both «trinta» and «meia» are correct: São onze e trinta / São onze e meia." }
  ]
};
