export default {
  title: "Articles",
  description: "Definite and indefinite articles in Portuguese",
  theory: [
    {
      heading: "Definite articles (Artigos definidos)",
      text: "Definite articles indicate a specific item already known to the speakers. In Portuguese, they change according to gender and number."
    },
    {
      table: {
        headers: ["", "Masculine", "Feminine"],
        rows: [
          ["Singular", "o", "a"],
          ["Plural", "os", "as"]
        ]
      }
    },
    {
      heading: "Indefinite articles (Artigos indefinidos)",
      text: "Indefinite articles are used when an item is mentioned for the first time or is one of many."
    },
    {
      table: {
        headers: ["", "Masculine", "Feminine"],
        rows: [
          ["Singular", "um", "uma"],
          ["Plural", "uns", "umas"]
        ]
      }
    },
    {
      heading: "Contractions of articles with prepositions",
      text: "In European Portuguese, definite articles contract with the prepositions de, em, a, por. Each preposition has its own meanings:"
    },
    {
      table: {
        headers: ["Preposition", "Meaning", "English equivalents"],
        rows: [
          ["de", "possession, origin, description", "of, from, in"],
          ["em", "location, time, topic", "in, on, at, about"],
          ["a", "direction, time, recipient", "to, at, on"],
          ["por", "cause, agent, route", "for, by, through, along"]
        ]
      }
    },
    {
      table: {
        headers: ["Preposition", "o", "a", "os", "as"],
        rows: [
          ["de", "do", "da", "dos", "das"],
          ["em", "no", "na", "nos", "nas"],
          ["a", "ao", "à", "aos", "às"],
          ["por", "pelo", "pela", "pelos", "pelas"]
        ]
      }
    },
    {
      examples: [
        { ru: "Portugal is the most western country in the European continent. (de — possession)" },
        { ru: "London is the capital city of England. (de — possession)" },
        { ru: "They come from the Azores. (de — origin)" },
        { ru: "He lives on the second floor. (em — location)" },
        { ru: "There are always nice people at Isabel's parties. (em — location; de — possession)" },
        { ru: "Paulo is going to the cinema. (a — direction)" },
        { ru: "Ana arrives at one o'clock. (a — time)" },
        { ru: "José only rests on Sundays. (a — time)" },
        { ru: "I'll wait for João. (por — waiting for someone)" },
        { ru: "This recipe was created by Sandra. (por — agent)" },
        { ru: "The two students walk through the city parks. (por — route)" }
      ]
    },
    {
      note: "In European Portuguese, the article is often used before proper names: O João, a Maria. The article is also placed before possessives: o meu livro (my book)."
    },
    {
      heading: "Contraction of the indefinite article",
      text: "Indefinite articles also contract with the prepositions em and de. The meanings are the same: em — location (in, on, at), de — possession (of), origin (from). The forms with de (dum, duma) are more common in spoken Portuguese; in written language the separate form is preferred: de uma."
    },
    {
      table: {
        headers: ["Preposition", "um", "uma", "uns", "umas"],
        rows: [
          ["em", "num", "numa", "nuns", "numas"],
          ["de", "dum", "duma", "duns", "dumas"]
        ]
      }
    },
    {
      examples: [
        { ru: "She is on a plane to New York. (em — location)" },
        { ru: "He is at an awkward age. (em — state)" },
        { ru: "She's the daughter of a teacher. (de — possession)" },
        { ru: "He comes from a distant land. (de — origin)" }
      ]
    }
  ],
  vocabulary: [
    { ru: "boy, young man" },
    { ru: "girl, young woman" },
    { ru: "school" },
    { ru: "cinema, movie theater" },
    { ru: "supermarket" },
    { ru: "food" },
    { ru: "coffee; café" },
    { ru: "car" },
    { ru: "street" },
    { ru: "teacher" }
  ],
  flashcards: [
    { ru: "boy, young man", hint: "article o — masculine" },
    { ru: "girl, young woman", hint: "European Port. instead of Brazilian «a menina»" },
    { ru: "school", hint: "na escola = at school" },
    { ru: "cinema, movie theater", hint: "ao cinema = to the cinema" },
    { ru: "food", hint: "da comida = of the food" },
    { ru: "coffee; café", hint: "masculine, as in Portuguese" },
    { ru: "street", hint: "na rua = on the street" },
    { ru: "car", hint: "do carro = of the car" },
    { ru: "American", hint: "m., f.: americana" },
    { ru: "(female) friend", hint: "feminine" },
    { ru: "Angolan", hint: "feminine" },
    { ru: "flat, apartment", hint: "masculine" },
    { ru: "archaic", hint: "f., m.: arcaico" },
    { ru: "blue", hint: "invariable gender" },
    { ru: "cradle", hint: "masculine" },
    { ru: "library", hint: "feminine" },
    { ru: "Brazilian", hint: "m., f.: brasileira" },
    { ru: "shirt", hint: "feminine" },
    { ru: "capital city", hint: "feminine" },
    { ru: "centre", hint: "masculine" },
    { ru: "city, town", hint: "feminine" },
    { ru: "to comprehend, to include", hint: "verb" },
    { ru: "colour", hint: "feminine, pl.: cores" },
    { ru: "correct", hint: "m., f.: correta" },
    { ru: "according to", hint: "preposition" },
    { ru: "rest", hint: "masculine" },
    { ru: "Sunday", hint: "masculine" },
    { ru: "company", hint: "feminine" },
    { ru: "enormous, huge", hint: "invariable gender" },
    { ru: "exotic", hint: "m., f.: exótica" },
    { ru: "family", hint: "feminine" },
    { ru: "form, shape", hint: "feminine" },
    { ru: "big, large", hint: "invariable gender" },
    { ru: "English", hint: "m., f.: inglesa" },
    { ru: "to play ball", hint: "expression" },
    { ru: "beautiful", hint: "f., m.: lindo" },
    { ru: "the North", hint: "masculine" },
    { ru: "where", hint: "adverb of place" },
    { ru: "park", hint: "masculine" },
    { ru: "first", hint: "m., f.: primeira" },
    { ru: "university", hint: "feminine" },
    { ru: "zone, area", hint: "feminine" },
  ],
  exercises: [
    // === Ex2: Fill a/o/um/uma (12 items) ===
    { question: "Insert the correct article: ___ casa é grande. (definite)" },
    { question: "Insert the correct article: ___ carro é novo. (definite)" },
    {
      question: "Which article fits? Eu tenho ___ livro. (indefinite)",
      explanation: "Livro is masculine, the indefinite masculine article is «um»: um livro."
    },
    { question: "Insert the correct article: Ela comprou ___ mesa. (indefinite)" },
    {
      question: "Which articles fit? ___ João tem ___ carro novo. (definite + indefinite)",
      explanation: "Before masculine names the article «O» is used: O João. Carro is masculine, indefinite article — «um»."
    },
    { question: "Insert the correct article: Há ___ escola perto daqui. (indefinite)" },
    { question: "Insert the correct article: Ele tem ___ irmã mais nova. (indefinite)" },
    { question: "Insert the correct article: ___ tempo está bom. (definite)" },
    { question: "Insert the correct article: ___ Maria é professora. (definite)" },
    { question: "Insert the correct article: ___ Porto é uma cidade bonita. (definite)" },
    { question: "Insert the correct article: ___ Rio Tejo é longo. (definite)" },
    { question: "Insert the correct article: ___ comida está pronta. (definite)" },

    // === Ex3: Match (8 items) ===
    {
      question: "Match the expressions with the correct article (definite or indefinite):",
      pairs: [
        { right: "o menino" },
        { right: "uma casa" },
        { right: "os livros" },
        { right: "uma cidade" }
      ]
    },
    {
      question: "Match the nouns with the correct definite article:",
      pairs: [
        { right: "o" },
        { right: "a" },
        { right: "os" },
        { right: "as" }
      ]
    },

    // === Ex4: Fill contractions (11 items) ===
    { question: "Insert the contraction: Ele mora ___ cidade pequena. (em + uma)" },
    { question: "Insert the contraction: Ela trabalha ___ hospital. (em + um)" },
    {
      question: "Which contraction is correct? O livro está ___ mesa. (em + a)",
      explanation: "Preposition «em» + definite article «a» = «na»: na mesa (on the table)."
    },
    { question: "Insert the contraction: Estou ___ cozinha. (em + a)" },
    { question: "Insert the contraction: O carro ___ Pedro é vermelho. (de + o)" },
    { question: "Insert the contraction: Ele saiu ___ casa velha. (de + uma)" },
    {
      question: "Which contraction is correct? Passámos ___ parque. (por + o)",
      explanation: "Preposition «por» + definite article «o» = «pelo»: pelo parque (through the park)."
    },
    { question: "Insert the contraction: As crianças brincam ___ ruas. (em + as)" },
    { question: "Insert the contraction: Estamos ___ centro da cidade. (em + o)" },
    { question: "Insert the contraction: Vivemos ___ arredores de Lisboa. (em + os)" },
    { question: "Insert the contraction: Andámos ___ cidade toda. (por + a)" },

    // === Ex5: Fill article/contraction in text (partial set, mixed types) ===
    { question: "Fill in: ___ Pedro é estudante. (definite article, masculine)" },
    {
      question: "Which article/contraction fits? Ele é ___ Brasil. (de + o)",
      explanation: "«De» + «o» contract to «do»: Ele é do Brasil (He is from Brazil)."
    },
    { question: "Fill in: Ele estuda ___ Universidade de Lisboa. (em + a)" },
    { question: "Fill in: ___ curso é interessante. (definite article, masculine)" },
    { question: "Fill in: As aulas ___ Pedro começam às nove. (de + o)" },
    { question: "Fill in: Ele gosta ___ cidade. (de + a)" },

    // === Additional mixed exercises ===
    {
      question: "Match the preposition contractions with articles:",
      pairs: [
        { right: "do" },
        { right: "na" },
        { right: "pelo" },
        { right: "à" }
      ]
    },
    {
      question: "Match the contractions of preposition «em» with indefinite articles:",
      pairs: [
        { right: "num" },
        { right: "numa" },
        { right: "nuns" },
        { right: "numas" }
      ]
    },
    { question: "Build the sentence: \"The teacher's book is on the table\"." },
    { source: "The children are playing in the park." },
    {
      question: "When is the definite article NOT used in Portuguese?",
      explanation: "After the verb «falar», the article before a language name is usually omitted: Falo português (I speak Portuguese)."
    },
    { source: "We live in Portugal." },
    { question: "Build the sentence: \"I am going to university\"." },
    {
      question: "Which contraction is correct for «de + as»?",
      explanation: "Preposition «de» + article «as» = «das». For example: das flores (of the flowers)."
    },
    { question: "Insert the contraction: Vou ___ praia amanhã. (a + a)" },
    {
      question: "Which contraction is correct for «a + os»?",
      explanation: "Preposition «a» + article «os» = «aos». For example: aos domingos (on Sundays)."
    },
    {
      question: "Match the contractions of preposition «de» with articles:",
      pairs: [
        { right: "do" },
        { right: "da" },
        { right: "dos" },
        { right: "das" }
      ]
    },
    { question: "Insert the contraction: Ele vem ___ escola. (de + a)" },
    { source: "She works in a hospital." },
  ],
};
