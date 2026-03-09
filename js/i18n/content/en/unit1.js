export default {
  title: "Nouns",
  description: "Gender and number of nouns in European Portuguese",
  theory: [
    {
      heading: "Gender of nouns",
      text: "In Portuguese, nouns have two genders: masculine (masculino) and feminine (feminino). Unlike English, every noun has a grammatical gender, even inanimate objects (e.g. «a mesa» — the table — is feminine). Gender can often be determined by the word ending."
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

};
