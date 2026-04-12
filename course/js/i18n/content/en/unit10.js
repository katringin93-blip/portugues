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
        equalCols: true,
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
      text: "Adverbs are invariable words that can modify a verb, an adjective, another adverb, or a whole sentence."
    },
    {
      examples: [
        { ru: "Tomorrow we have to go to work. (adverb → verb)" },
        { ru: "Pedro is quite professional. (adverb → adjective)" },
        { ru: "Planes fly very high. (adverb → adverb)" },
        { ru: "Fortunately, he earns enough to support his family. (adverb → sentence)" }
      ]
    },
    {
      heading: "Adverbs of time (Advérbios de tempo)",
      text: "Express when an action takes place."
    },
    {
      table: {
        equalCols: true,
        headers: ["Português", "Translation"],
        rows: [
          ["ontem", "yesterday"],
          ["hoje", "today"],
          ["amanhã", "tomorrow"],
          ["agora ≠ logo", "now ≠ later"],
          ["antes ≠ depois", "before ≠ after"],
          ["cedo ≠ tarde", "early ≠ late"]
        ]
      }
    },
    {
      examples: [
        { ru: "Today we stay home because it is Sunday." },
        { ru: "I have to go shopping now." },
        { ru: "Tomorrow we're going to leave home early." }
      ]
    },
    {
      heading: "Adverbs of place (Advérbios de lugar)",
      text: "Express where an action takes place. Portuguese distinguishes several degrees of distance."
    },
    {
      table: {
        equalCols: true,
        headers: ["Português", "Translation"],
        rows: [
          ["aqui, cá", "here"],
          ["aí", "there (where you are)"],
          ["ali, acolá", "there (over there)"],
          ["lá", "there (far away, previously mentioned)"],
          ["perto ≠ longe", "near ≠ far"],
          ["aqui/cá dentro ≠ lá fora", "inside ≠ outside"],
          ["dentro ≠ fora", "in ≠ out"]
        ]
      }
    },
    {
      examples: [
        { ru: "That pencil you have there in your hand belongs to João." },
        { ru: "David is going to Lisbon and stays there two weeks." },
        { ru: "We are going to Pedro's house, as it is near." },
        { ru: "There are a lot of people outside." }
      ]
    },
    {
      heading: "Adverbs of manner (Advérbios de modo)",
      text: "Express how an action takes place."
    },
    {
      table: {
        equalCols: true,
        headers: ["Português", "Translation"],
        rows: [
          ["bem ≠ mal", "well ≠ badly"],
          ["depressa ≠ devagar", "fast ≠ slowly"]
        ]
      }
    },
    {
      examples: [
        { ru: "She drives fast." },
        { ru: "He speaks Portuguese well." }
      ]
    },
    {
      heading: "Adverbs of intensity (Advérbios de intensidade)",
      text: "Express how much or to what degree."
    },
    {
      table: {
        equalCols: true,
        headers: ["Português", "Translation"],
        rows: [
          ["pouco ≠ muito", "little ≠ very, a lot"],
          ["menos ≠ mais", "less ≠ more"],
          ["demasiado", "too much"],
          ["demais", "too much, too many"]
        ]
      }
    },
    {
      examples: [
        { ru: "She works a lot." },
        { ru: "You eat too much." },
        { ru: "I have too many shoes." },
        { ru: "You don't speak much." }
      ]
    },
    {
      heading: "Formation of adverbs with -mente",
      text: "Many adverbs are formed by adding the suffix -mente to the adjective. If the adjective ends in -o, it first changes to the feminine form -a. Any graphic accent on the adjective is dropped."
    },
    {
      table: {
        headers: ["Adjective", "Adverb", "Translation"],
        rows: [
          ["normal", "normalmente", "normally"],
          ["individual", "individualmente", "individually"],
          ["fácil", "facilmente", "easily"],
          ["(in)feliz", "(in)felizmente", "(un)happily"],
          ["alegre", "alegremente", "cheerfully"],
          ["semanal", "semanalmente", "weekly"],
          ["mensal", "mensalmente", "monthly"],
          ["anual", "anualmente", "annually"],
          ["lento → lenta", "lentamente", "slowly"],
          ["rápido → rápida", "rapidamente", "rapidly"],
          ["óbvio → óbvia", "obviamente", "obviously"],
          ["cuidadoso → cuidadosa", "cuidadosamente", "carefully"],
          ["curioso → curiosa", "curiosamente", "curiously"],
          ["diário → diária", "diariamente", "daily"]
        ]
      }
    },
    {
      examples: [
        { ru: "On a normal day Joana goes to work." },
        { ru: "Normally Joana goes to work." },
        { ru: "Paula's grandmother walks slowly." }
      ]
    },
    {
      note: "When two adverbs ending in -mente are used together, only the second takes the suffix: Na minha empresa fazemos relatórios mensal e trimestralmente (In my company we write reports monthly and quarterly)."
    },
    {
      heading: "Position of adverbs",
      text: "Adverbs of time and place can come before or after the verb. Other adverbs usually come before the adjective or after the verb. Adverbs ending in -mente tend to come at the beginning of a sentence for stress."
    },
    {
      examples: [
        { ru: "Tomorrow we are going to the cinema. (time — before verb)" },
        { ru: "They don't work today. (time — after verb)" },
        { ru: "Pedro's daughter is very beautiful. (intensity — before adjective)" },
        { ru: "She runs fast. (manner — after verb)" },
        { ru: "Unfortunately, it is raining. (-mente — beginning of sentence)" },
        { ru: "Rarely do I have time to go to the cinema. (-mente — beginning of sentence)" }
      ]
    }
  ],
  lessons: [
    { title: "Adjectives" },
    { title: "Types of adverbs" },
    { title: "Formation and position of adverbs" }
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
  exercises: [
    // Ex1: Form adverbs with -mente (16 items)
    { question: "Form the adverb from «lento» (slow): ___" },
    { question: "Form the adverb from «rápido» (fast): ___" },
    { question: "Form the adverb from «alegre» (cheerful): ___" },
    { question: "Form the adverb from «distinto» (distinct): ___" },
    {
      question: "Which adverb is formed from «claro» (clear)?",
      explanation: "Take the feminine form «clara» + «-mente» = «claramente»."
    },
    { question: "Form the adverb from «intenso» (intense): ___" },
    { question: "Form the adverb from «infeliz» (unhappy): ___" },
    { question: "Form the adverb from «divino» (divine): ___" },
    {
      question: "Which adverb is formed from «antigo» (ancient)?",
      explanation: "Take the feminine form «antiga» + «-mente» = «antigamente»."
    },
    { question: "Form the adverb from «novo» (new): ___" },
    { question: "Form the adverb from «eficaz» (effective): ___" },
    { question: "Form the adverb from «delicioso» (delicious): ___" },
    { question: "Form the adverb from «decidido» (determined): ___" },
    { question: "Form the adverb from «habitual» (usual): ___" },
    {
      question: "Which adverb is formed from «simples» (simple)?",
      explanation: "«Simples» does not change for gender: simples + «-mente» = «simplesmente»."
    },
    { question: "Form the adverb from «franco» (frank): ___" },

    // Ex2: Match adjective opposites (2 match exercises)
    { question: "Match the adjectives with their antonyms:" },
    { question: "Match the adjectives with their antonyms:" },

    // Ex3: Fill adj/adverb (12 items)
    { question: "As casas em Lisboa são muito ___. (Houses in Lisbon are very expensive. — f. pl.)" },
    { question: "As ruas do centro são ___. (The streets of the centre are small/narrow. — f. pl.)" },
    {
      question: "Ele está muito ___ com a notícia. (He is very happy about the news.)",
      explanation: "«Feliz» is an adjective that does not change for gender: «Ele está feliz.»"
    },
    { question: "O comboio é muito ___. (The train is very slow. — m. sg.)" },
    { question: "O professor é muito ___. (The teacher is very pleasant. — m. sg.)" },
    { question: "As vizinhas são ___. (The neighbours are unpleasant. — f. pl.)" },
    { question: "As noites de inverno são ___. (Winter nights are short. — f. pl.)" },
    {
      question: "A criança está muito ___. (The child is very cheerful.)",
      explanation: "«Alegre» is an adjective with the same form for masculine and feminine."
    },
    { question: "O apartamento é ___. (The apartment is modern. — m. sg.)" },
    { question: "A rapariga é muito ___. (The girl is very intelligent.)" },
    { question: "A igreja é muito ___. (The church is very old. — f.)" },
    { question: "A sala está ___. (The room is dark. — f.)" },

    // Ex4: Fill adj/adverb in text (16 items)
    { question: "Sintra é uma ___ cidade. (Sintra is a beautiful city. — f.)" },
    { question: "Tem um ___ palácio. (It has a big palace. — m.)" },
    { question: "O clima é ___. (The climate is pleasant.)" },
    { question: "O ar é ___. (The air is fresh. — m.)" },
    {
      question: "As praias têm ___ extensões de areia. (The beaches have long stretches of sand. — f. pl.)",
      explanation: "«Extensões» is f. pl., so «longas»."
    },
    { question: "O tempo passa ___. (Time passes quickly. — adverb)" },
    { question: "A fadiga ___ desaparece. (Accumulated fatigue disappears. — f.)" },
    { question: "As ruas ___ são encantadoras. (The old streets are charming. — f. pl.)" },
    { question: "A vila é ___. (The village is charming. — f.)" },
    { question: "Ficamos ___. (We got tired. — m. pl.)" },
    { question: "Comemos num restaurante ___. (We ate at a typical restaurant. — m.)" },
    { question: "A comida era ___ boa. (The food was especially good. — adverb)" },
    { question: "O pão era ___. (The bread was homemade. — m.)" },
    { question: "A fruta era ___. (The fruit was fresh. — f.)" },
    { question: "Os produtos eram ___ produzidos. (The products were locally produced. — adverb)" },
    {
      question: "As visitas foram muito ___. (The visits were very interesting. — f. pl.)",
      explanation: "«Visitas» is f. pl.; an adjective ending in «-e» takes «-s»: «interessantes»."
    },

    // Ex5: Translate sentences
    { source: "Portuguese cities are very beautiful." },
    { source: "She speaks quickly and clearly." },
    { source: "The old houses in Lisbon are beautiful." },

    // Ex6: Fill adj/adverb in text about Portuguese family (15 items)
    { question: "A família é muito ___ em Portugal. (The family is very important in Portugal.)" },
    { question: "A família ___ é grande. (The Portuguese family is large. — f.)" },
    { question: "É ___ na sociedade. (It is fundamental in society.)" },
    { question: "Os laços ___ são fortes. (Family ties are strong. — m. pl.)" },
    { question: "Os idosos são muito ___. (The elderly are very valued. — m. pl.)" },
    {
      question: "___, a família almoça junta ao domingo. (Traditionally the family has lunch together on Sundays.)",
      explanation: "An adverb is needed here — «tradicionalmente» (traditionally), not an adjective."
    },
    { question: "O grupo familiar é ___. (The family group is close-knit. — m.)" },
    { question: "O ambiente é ___. (The atmosphere is welcoming. — m.)" },
    { question: "Uma família ___ portuguesa tem muitos membros. (A typical Portuguese family has many members. — f.)" },
    { question: "Os laços são ___. (The ties are close. — m. pl.)" },
    { question: "Visitam-se ___. (They visit each other regularly. — adverb)" },
    { question: "___ nos feriados. (Especially on public holidays. — adverb)" },
    { question: "É ___ verdade no Natal. (It is particularly true at Christmas. — adverb)" },
    { question: "O jantar ___ é importante. (The family dinner is important. — m.)" },
    {
      question: "Os jovens são mais ___. (Young people are more independent. — m. pl.)",
      explanation: "An adjective ending in «-e» takes «-s» in the plural: «independentes»."
    },
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
