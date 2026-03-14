export default {
  title: "Adjectives and adverbs",
  description: "Agreement of adjectives, their position, and formation of adverbs",
  theory: [
    {
      heading: "Agreement of adjectives",
      text: "Adjectives in Portuguese agree with the noun in gender and number. Most adjectives ending in -o have a feminine form ending in -a."
    },
    {
      table: {
        headers: ["Type", "Masc. sg.", "Fem. sg.", "Masc. pl.", "Fem. pl."],
        rows: [
          ["-o/-a type", "bonito", "bonita", "bonitos", "bonitas"],
          ["-e type (invariable)", "grande", "grande", "grandes", "grandes"],
          ["consonant (invariable)", "difícil", "difícil", "difíceis", "difíceis"],
          ["-ês type", "português", "portuguesa", "portugueses", "portuguesas"],
          ["-or type", "trabalhador", "trabalhadora", "trabalhadores", "trabalhadoras"],
          ["-eu → -eia", "europeu", "europeia", "europeus", "europeias"],
          ["-ão → -ã/-ona", "anfitrião", "anfitriã", "anfitriões", "anfitriãs"],
          ["irregular", "bom", "boa", "bons", "boas"],
          ["irregular", "mau", "má", "maus", "más"]
        ]
      }
    },
    {
      heading: "Gender-invariable adjectives",
      text: "Adjectives ending in -a, -e, -ar, -l, -m and -z do not change for gender — the same form is used for masculine and feminine. They still change for plural following normal noun rules."
    },
    {
      table: {
        headers: ["Ending", "Example", "Masc.", "Fem.", "Plural"],
        rows: [
          ["-a", "pessimista", "Ele é pessimista", "Ela é pessimista", "pessimistas"],
          ["-e", "forte", "Ele é forte", "Ela é forte", "fortes"],
          ["-ar", "vulgar", "Ele é vulgar", "Ela é vulgar", "vulgares"],
          ["-l", "essencial", "O dinheiro é essencial", "A comida é essencial", "essenciais"],
          ["-m", "jovem", "Ele é jovem", "Ela é jovem", "jovens"],
          ["-z", "feliz", "Ele é feliz", "Ela é feliz", "felizes"]
        ]
      }
    },
    {
      note: "Also gender-invariable pairs: anterior / posterior, interior / exterior, inferior / superior, menor / maior, melhor / pior. Exception: simples doesn't change in plural either (São ambos simples)."
    },
    {
      heading: "Position of adjectives",
      text: "Usually adjectives come after the noun: um carro vermelho (a red car). Some short and common adjectives can come before the noun, taking on a figurative or intensified meaning."
    },
    {
      table: {
        headers: ["After noun (literal)", "Before noun (figurative)"],
        rows: [
          ["um homem rico — a rich man", "um rico homem — a great guy"],
          ["pessoas velhas — old people", "velhos amigos — old friends (long-time)"],
          ["uma mulher bela — a beautiful woman", "uma bela mulher — a wonderful woman"],
          ["uma casa grande — a big house", "um grande homem — a great man"],
          ["um carro novo — a new car", "um novo problema — yet another problem"]
        ]
      }
    },
    {
      examples: [
        { ru: "He is a rich man." },
        { ru: "He is a great guy." },
        { ru: "They are old people." },
        { ru: "They are old friends (long-time)." },
        { ru: "She is a beautiful woman." },
        { ru: "She is a wonderful woman." }
      ]
    },
    {
      heading: "Adverbs (Advérbios)",
      text: "Adverbs are formed from the feminine form of the adjective + the suffix -mente. If the adjective is the same for both genders, -mente is added to the base form."
    },
    {
      table: {
        headers: ["Adjective", "Adverb", "Translation"],
        rows: [
          ["rápido/a", "rapidamente", "quickly"],
          ["lento/a", "lentamente", "slowly"],
          ["fácil", "facilmente", "easily"],
          ["feliz", "felizmente", "fortunately"],
          ["normal", "normalmente", "usually"]
        ]
      }
    },
    {
      note: "Some adverbs are not formed by the rule: bem (well), mal (badly), muito (very), pouco (little), sempre (always), depressa (quickly), devagar (slowly)."
    }
  ],
  lessons: [
    { title: "Agreement and forms of adjectives" },
    { title: "Position of adjectives and adverbs" }
  ],
  vocabulary: [
    { ru: "beautiful" },
    { ru: "big" },
    { ru: "small" },
    { ru: "new" },
    { ru: "old" },
    { ru: "good" },
    { ru: "bad" },
    { ru: "difficult" },
    { ru: "easy" },
    { ru: "quickly (adverb)" },
    { ru: "slowly (adverb)" }
  ],
  flashcards: [
    { ru: "beautiful", hint: "fem.: bonita, pl.: bonitos/as" },
    { ru: "big", hint: "one form for both genders" },
    { ru: "small", hint: "antonym: grande" },
    { ru: "good", hint: "adverb: bem" },
    { ru: "bad", hint: "adverb: mal" },
    { ru: "difficult", hint: "pl.: difíceis, adverb: dificilmente" },
    { ru: "quickly", hint: "adverb, invariable" },
    { ru: "slowly", hint: "antonym: depressa" },
    { ru: "welcoming", hint: "f.: acolhedora" },
    { ru: "pleasant", hint: "invariable gender" },
    { ru: "cheerful, happy", hint: "invariable gender" },
    { ru: "lettuce", hint: "feminine" },
    { ru: "tall, high", hint: "f.: alta" },
    { ru: "ancient, old", hint: "f.: antiga" },
    { ru: "unpleasant, unfriendly", hint: "f.: antipática" },
    { ru: "support", hint: "masculine" },
    { ru: "to make the most of", hint: "verb" },
    { ru: "attention", hint: "feminine" },
    { ru: "cheap", hint: "f.: barata" },
    { ru: "wellbeing", hint: "masculine" },
    { ru: "hikes, walks", hint: "f. plural" },
    { ru: "hundreds", hint: "f. plural" },
    { ru: "light, clear", hint: "f.: clara" },
    { ru: "common, shared", hint: "invariable gender" },
    { ru: "socialising", hint: "masculine" },
    { ru: "short", hint: "f.: curta" },
    { ru: "delicious", hint: "f.: deliciosa" },
    { ru: "building", hint: "masculine" },
    { ru: "effective", hint: "invariable gender" },
    { ru: "instead of", hint: "preposition" },
    { ru: "charming, delightful", hint: "f.; m.: encantador" },
    { ru: "energy", hint: "feminine" },
    { ru: "ugly", hint: "f.: feia" },
    { ru: "ham", hint: "masculine" },
    { ru: "children, sons", hint: "m. plural" },
    { ru: "out of town", hint: "place expression" },
    { ru: "elderly", hint: "m. plural" },
    { ru: "institution", hint: "feminine" },
    { ru: "intense", hint: "f.: intensa" },
    { ru: "family ties", hint: "m. plural" },
    { ru: "home, hearth", hint: "masculine" },
    { ru: "most beautiful", hint: "superlative" },
    { ru: "light", hint: "feminine" },
    { ru: "members", hint: "m. plural" },
    { ru: "nature", hint: "feminine" },
    { ru: "necessary", hint: "f.: necessária" },
    { ru: "paper; role", hint: "masculine" },
    { ru: "birds", hint: "m. plural" },
    { ru: "poor", hint: "invariable gender" },
    { ru: "sandwich", hint: "feminine" },
    { ru: "societies", hint: "f. plural" },
    { ru: "to smile", hint: "verb" },
  ],

};
