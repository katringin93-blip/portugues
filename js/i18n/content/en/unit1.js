export default {
  title: "Nouns",
  description: "Gender and number of nouns in European Portuguese",
  theory: [
    {
      heading: "Gender of nouns",
      text: "In Portuguese, nouns have two genders: masculine (masculino) and feminine (feminino). Unlike Russian, there is no neuter gender. Gender can often be determined by the word ending."
    },
    {
      table: {
        headers: ["Ending", "Gender", "Examples"],
        rows: [
          ["-o", "masculine", "o livro (book), o gato (cat)"],
          ["-a", "feminine", "a casa (house), a mesa (table)"],
          ["-ção", "feminine", "a nação (nation), a estação (station)"],
          ["-dade", "feminine", "a cidade (city), a universidade (university)"],
          ["-agem", "feminine", "a viagem (trip), a paisagem (landscape)"],
          ["-or", "masculine", "o professor (teacher), o computador (computer)"],
          ["-ema", "masculine", "o problema (problem), o sistema (system)"]
        ]
      }
    },
    {
      heading: "Plural forms",
      text: "Basic rule: add -s to words ending in a vowel. Words ending in a consonant have special rules."
    },
    {
      table: {
        headers: ["Singular ending", "Plural ending", "Example"],
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
        { ru: "The book is on the table." },
        { ru: "The houses are big." },
        { ru: "The men work." },
        { ru: "The trip was long." }
      ]
    },
    {
      note: "Note: some exception words do not follow the general gender rules. For example, o dia (day) ends in -a but is masculine. A tribo (tribe) ends in -o but is feminine."
    },
    {
      heading: "Diminutives and augmentatives",
      text: "Portuguese makes extensive use of diminutive (diminutivos) and augmentative (aumentativos) forms of nouns. They modify the meaning of a word, expressing size, intensity or emotion."
    },
    {
      table: {
        headers: ["Form", "Suffix", "Examples"],
        rows: [
          ["Diminutive", "-inho/-inha", "casa → casinha (small house), filho → filhinho (little son)"],
          ["Diminutive", "-zinho/-zinha", "pão → pãozinho (bread roll), João → Joãozinho"],
          ["Augmentative", "-ão", "livro → livrão (huge book), carro → carrão (big car)"]
        ]
      }
    },
    {
      examples: [
        { ru: "Let's go have a (nice little) coffee." },
        { ru: "Good morning, mummy!" },
        { ru: "Little Pedro is only three years old." },
        { ru: "What an enormous book!" }
      ]
    },
    {
      note: "Diminutives most often express affection and endearment, not just small size. They are very common in informal speech, especially between parents and children."
    }
  ],
  vocabulary: [
    { ru: "book" },
    { ru: "house" },
    { ru: "table" },
    { ru: "man" },
    { ru: "woman" },
    { ru: "cat" },
    { ru: "city" },
    { ru: "animal" },
    { ru: "flower" },
    { ru: "newspaper" },
    { ru: "trip" },
    { ru: "bread" }
  ],
  flashcards: [
    { ru: "book", hint: "masculine, ending -o" },
    { ru: "house", hint: "feminine, ending -a" },
    { ru: "man", hint: "pl.: os homens" },
    { ru: "woman", hint: "pl.: as mulheres" },
    { ru: "city", hint: "feminine, pl.: as cidades" },
    { ru: "animal", hint: "pl.: os animais" },
    { ru: "flower", hint: "feminine, pl.: as flores" },
    { ru: "bread", hint: "pl.: os pães" },
    { ru: "primary school", hint: "feminine, compound" },
    { ru: "weekend", hint: "masculine" },
    { ru: "window", hint: "feminine" },
    { ru: "together with", hint: "preposition" },
    { ru: "language", hint: "feminine" },
    { ru: "world", hint: "masculine" },
    { ru: "night", hint: "feminine" },
    { ru: "organisations", hint: "f., plural" },
    { ru: "origin", hint: "feminine" },
    { ru: "other", hint: "f. pl. of outro" },
    { ru: "country", hint: "masculine, pl.: países" },
    { ru: "therefore", hint: "causal conjunction" },
    { ru: "always", hint: "adverb" },
    { ru: "several, various", hint: "m. plural" },
  ],
  exercises: [
    { question: "Which article is correct? ___ cidade é bonita.", explanation: "Cidade (city) is feminine, so the definite feminine article «a» is used." },
    { question: "Form the plural: o animal → os ___" },
    { question: "Form the plural: a nação → as ___" },
    { question: "Which of the words is masculine?", explanation: "The word «problema» (problem) is masculine: o problema. Words ending in -ema are borrowed from Greek and are masculine." },
    { source: "The books are on the table." },
    { question: "What is the gender of «dia» (day)?", options: ["Feminine: a dia", "Masculine: o dia", "Neuter", "Can be both genders"], explanation: "«Dia» is an exception. Despite the -a ending, this word is masculine: o dia." },
    { question: "What is the gender of «mapa» (map)?", options: ["Feminine: a mapa", "Masculine: o mapa", "Depends on context", "Feminine: uma mapa"], explanation: "«Mapa» is an exception. Despite the -a ending, this word is masculine: o mapa." },
    { question: "Form the plural: o professor → os ___" },
    { question: "Form the plural: o hotel → os ___" },
    { question: "Form the plural: o homem → os ___" },
    { question: "Which ending indicates feminine gender?", explanation: "The ending -ção indicates feminine gender: a nação, a informação, a situação." },
    { question: "Match the nouns with their gender (o/a):", pairs: [{ left: "livro", right: "o (masc.)" }, { left: "casa", right: "a (fem.)" }, { left: "sistema", right: "o (masc.)" }, { left: "viagem", right: "a (fem.)" }] },
    { question: "Which word is feminine?", explanation: "«Garagem» (garage) is feminine: a garagem. Words ending in -agem in Portuguese are feminine." },
    { question: "Form the plural: o espanhol → os ___" },
    { question: "Form the plural: o irmão → os ___" },
    { question: "How is the plural of words ending in -m formed?", options: ["-m → -ms", "-m → -ns", "-m → -mes", "-m → -ens"], explanation: "Words ending in -m form the plural by replacing -m with -ns: homem → homens, viagem → viagens." },
    { question: "Form the plural: o jornal → os ___" },
    { question: "What is the gender of «universidade» (university)?", options: ["Masculine: o universidade", "Feminine: a universidade", "Neuter", "Both genders are possible"], explanation: "The word «universidade» is feminine: a universidade. Words ending in -dade are always feminine." },
    { source: "Men and women" },
    { question: "Form the plural: a luz → as ___" },
    { question: "What is the plural of «pão» (bread)?", explanation: "Pão → pães. This is one of the words ending in -ão that forms the plural with the ending -ães." },
    { question: "Match the words with the correct plural form:" },
    { question: "Form the plural: o país → os ___" },
    { question: "What is the gender of «tribo» (tribe)?", options: ["Masculine: o tribo", "Feminine: a tribo", "Depends on context", "Neuter"], explanation: "«Tribo» is an exception. Despite the -o ending, this word is feminine: a tribo." },
    { question: "Form the plural: o papel → os ___" },
    { question: "What is the gender of «cinema» (cinema)?", options: ["Feminine: a cinema", "Masculine: o cinema", "Both genders", "No gender"], explanation: "«Cinema» is masculine: o cinema. Words ending in -ema/-ema of Greek origin are usually masculine." },
    { question: "Arrange the sentence: «The cities are beautiful»." },
    { question: "Form the plural: a viagem → as ___" },
    { question: "Which of the words is NOT a gender exception?", explanation: "«Mesa» (table) is a regular feminine word ending in -a: a mesa. The rest are exceptions: masculine despite the -a ending." }
  ]
};
