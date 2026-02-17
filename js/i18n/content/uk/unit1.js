export default {
  title: "Іменники",
  description: "Рід та число іменників у європейській португальській мові",
  theory: [
    {
      heading: "Рід іменників",
      text: "У португальській мові іменники мають два роди: чоловічий (masculino) та жіночий (feminino). На відміну від української мови, середнього роду немає. Рід часто можна визначити за закінченням слова."
    },
    {
      table: {
        headers: ["Закінчення", "Рід", "Приклади"],
        rows: [
          ["-o", "чоловічий", "o livro (книжка), o gato (кіт)"],
          ["-a", "жіночий", "a casa (будинок), a mesa (стіл)"],
          ["-ção", "жіночий", "a nação (нація), a estação (станція)"],
          ["-dade", "жіночий", "a cidade (місто), a universidade (університет)"],
          ["-agem", "жіночий", "a viagem (подорож), a paisagem (пейзаж)"],
          ["-or", "чоловічий", "o professor (викладач), o computador (комп'ютер)"],
          ["-ema", "чоловічий", "o problema (проблема), o sistema (система)"]
        ]
      }
    },
    {
      heading: "Множина",
      text: "Основне правило: до слів, що закінчуються на голосну, додається -s. Для слів на приголосну існують особливі правила."
    },
    {
      table: {
        headers: ["Закінчення одн.", "Закінчення мн.", "Приклад"],
        rows: [
          ["-a, -o, -e", "+ s", "gato → gatos, casa → casas"],
          ["-r, -s, -z", "+ es", "flor → flores, país → países"],
          ["-al", "-ais", "animal → animais, jornal → jornais"],
          ["-el", "-éis", "papel → papéis, anel → anéis"],
          ["-ol", "-óis", "farol → faróis, espanhol → espanhóis"],
          ["-ul", "-uis", "azul → azuis"],
          ["-m", "-ns", "homem → homens, viagem → viagens"],
          ["-ão", "-ões / -ães / -ãos", "nação → nações, pão → pães, mão → mãos"]
        ]
      }
    },
    {
      examples: [
        { pt: "O livro está na mesa.", ru: "Книжка на столі." },
        { pt: "As casas são grandes.", ru: "Будинки великі." },
        { pt: "Os homens trabalham.", ru: "Чоловіки працюють." },
        { pt: "A viagem foi longa.", ru: "Подорож була довгою." }
      ]
    },
    {
      note: "Увага: деякі слова-винятки не підпорядковуються загальним правилам роду. Наприклад, o dia (день) закінчується на -a, але чоловічого роду. A tribo (плем'я) закінчується на -o, але жіночого роду."
    }
  ],
  vocabulary: [
    { ru: "книжка" },
    { ru: "будинок" },
    { ru: "стіл" },
    { ru: "чоловік" },
    { ru: "жінка" },
    { ru: "кіт" },
    { ru: "місто" },
    { ru: "тварина" },
    { ru: "квітка" },
    { ru: "газета" },
    { ru: "подорож" },
    { ru: "хліб" }
  ],
  flashcards: [
    { ru: "книжка", hint: "чоловічий рід, закінчення -o" },
    { ru: "будинок", hint: "жіночий рід, закінчення -a" },
    { ru: "чоловік", hint: "мн.: os homens" },
    { ru: "жінка", hint: "мн.: as mulheres" },
    { ru: "місто", hint: "жіночий рід, мн.: as cidades" },
    { ru: "тварина", hint: "мн.: os animais" },
    { ru: "квітка", hint: "жіночий рід, мн.: as flores" },
    { ru: "хліб", hint: "мн.: os pães" }
  ],
  exercises: [
    // 1 - choice
    { question: "Який артикль правильний? ___ cidade é bonita.", options: ["O", "A", "Um", "Os"], explanation: "Cidade (місто) — жіночого роду, тому використовується означений артикль жіночого роду «a»." },
    // 2 - fill
    { question: "Утворіть множину: o animal → os ___" },
    // 3 - fill
    { question: "Утворіть множину: a nação → as ___" },
    // 4 - choice
    { question: "Яке зі слів чоловічого роду?", options: ["cidade", "viagem", "problema", "nação"], explanation: "Слово «problema» (проблема) — чоловічого роду: o problema. Слова на -ema запозичені з грецької і є чоловічого роду." },
    // 5 - translate ru-pt
    { source: "Книжки на столі." },
    // 6 - choice
    { question: "Якого роду слово «dia» (день)?", options: ["Жіночого: a dia", "Чоловічого: o dia", "Середнього роду", "Може бути обох родів"], explanation: "«Dia» — виняток. Попри закінчення -a, це слово чоловічого роду: o dia." },
    // 7 - choice
    { question: "Якого роду слово «mapa» (карта)?", options: ["Жіночого: a mapa", "Чоловічого: o mapa", "Залежить від контексту", "Жіночого: uma mapa"], explanation: "«Mapa» — виняток. Попри закінчення -a, це слово чоловічого роду: o mapa." },
    // 8 - fill
    { question: "Утворіть множину: o professor → os ___" },
    // 9 - fill
    { question: "Утворіть множину: o hotel → os ___" },
    // 10 - fill
    { question: "Утворіть множину: o homem → os ___" },
    // 11 - choice
    { question: "Яке закінчення вказує на жіночий рід?", options: ["-ema", "-o", "-ção", "-or"], explanation: "Закінчення -ção вказує на жіночий рід: a nação, a informação, a situação." },
    // 12 - match
    { question: "Співвіднесіть іменники з їхнім родом (o/a):", pairs: [{ left: "livro", right: "o (ч.р.)" }, { left: "casa", right: "a (ж.р.)" }, { left: "sistema", right: "o (ч.р.)" }, { left: "viagem", right: "a (ж.р.)" }] },
    // 13 - choice
    { question: "Яке слово жіночого роду?", options: ["o cinema", "o sistema", "a garagem", "o poema"], explanation: "«Garagem» (гараж) — жіночого роду: a garagem. Слова на -agem у португальській жіночого роду." },
    // 14 - fill
    { question: "Утворіть множину: o espanhol → os ___" },
    // 15 - fill
    { question: "Утворіть множину: o irmão → os ___" },
    // 16 - choice
    { question: "Як утворюється множина слів на -m?", options: ["-m → -ms", "-m → -ns", "-m → -mes", "-m → -ens"], explanation: "Слова на -m утворюють множину заміною -m на -ns: homem → homens, viagem → viagens." },
    // 17 - fill
    { question: "Утворіть множину: o jornal → os ___" },
    // 18 - choice
    { question: "Якого роду слово «universidade» (університет)?", options: ["Чоловічого: o universidade", "Жіночого: a universidade", "Середнього роду", "Обидва роди можливі"], explanation: "Слово «universidade» — жіночого роду: a universidade. Слова на -dade завжди жіночого роду." },
    // 19 - translate ru-pt
    { source: "Чоловіки й жінки" },
    // 20 - fill
    { question: "Утворіть множину: a luz → as ___" },
    // 21 - choice
    { question: "Яка множина у слова «pão» (хліб)?", options: ["pãos", "pães", "pãoes", "pões"], explanation: "Pão → pães. Це одне зі слів на -ão, яке утворює множину із закінченням -ães." },
    // 22 - match
    { question: "Співвіднесіть слова з правильною формою множини:", pairs: [{ left: "o cão", right: "os cães" }, { left: "a mão", right: "as mãos" }, { left: "a lição", right: "as lições" }, { left: "o alemão", right: "os alemães" }] },
    // 23 - fill
    { question: "Утворіть множину: o país → os ___" },
    // 24 - choice
    { question: "Якого роду слово «tribo» (плем'я)?", options: ["Чоловічого: o tribo", "Жіночого: a tribo", "Залежить від контексту", "Середнього роду"], explanation: "«Tribo» — виняток. Попри закінчення -o, це слово жіночого роду: a tribo." },
    // 25 - fill
    { question: "Утворіть множину: o papel → os ___" },
    // 26 - choice
    { question: "Якого роду слово «cinema» (кіно)?", options: ["Жіночого: a cinema", "Чоловічого: o cinema", "Обидва роди", "Немає роду"], explanation: "«Cinema» — чоловічого роду: o cinema. Слова на -ema/-ima грецького походження зазвичай чоловічого роду." },
    // 27 - order
    { question: "Складіть речення: «Міста красиві»." },
    // 28 - fill
    { question: "Утворіть множину: a viagem → as ___" },
    // 29 - choice
    { question: "Яке зі слів НЕ є винятком щодо роду?", options: ["o dia", "o mapa", "a mesa", "o planeta"], explanation: "«Mesa» (стіл) — звичайне слово жіночого роду на -a: a mesa. Решта — винятки: чоловічий рід, попри закінчення -a." }
  ]
};
