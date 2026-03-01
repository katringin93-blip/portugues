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
      text: "In European Portuguese, definite articles contract with the prepositions de, em, a, por."
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
        { ru: "The boy is at school." },
        { ru: "A girl arrived." },
        { ru: "I like coffee." },
        { ru: "I'm going to the cinema." }
      ]
    },
    {
      note: "In European Portuguese, the article is often used before proper names: O João, a Maria. The article is also placed before possessives: o meu livro (my book)."
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
    { question: "Choose the correct contraction: Eu vou ___ supermercado. (a + o)", explanation: "The preposition «a» contracts with the article «o» to form «ao». Ir ao supermercado — to go to the supermarket." },
    { question: "Fill in: Ela mora ___ Lisboa. (em + a = ...)" },
    { question: "Which article is correct? ___ carro é novo.", explanation: "Carro (car) is masculine, so the definite article is «o»." },
    { answer: ["I like Portuguese food.", "I love Portuguese food."] },
    { question: "Insert the contraction of «de» with the article: O livro ___ professor. (de + o)" },
    { question: "What is the indefinite article for «casa» (house)?", explanation: "Casa is feminine, so the indefinite article is «uma»: uma casa." },
    { question: "Insert the contraction: Ele está ___ escola. (em + a = ...)" },
    { question: "Which contraction is correct? Ele saiu ___ restaurante. (de + o)", explanation: "Preposition «de» + article «o» = «do». Sair do restaurante — to leave the restaurant." },
    { question: "Insert the contraction: A chave ___ carro está aqui. (de + o = ...)" },
    { question: "Match the preposition-article contractions:", pairs: [{ left: "de + a", right: "da" }, { left: "em + o", right: "no" }, { left: "a + os", right: "aos" }, { left: "por + a", right: "pela" }] },
    { question: "Choose the correct contraction: Nós passámos ___ parque. (por + o)", explanation: "Preposition «por» + article «o» = «pelo». Passar pelo parque — to pass through the park." },
    { question: "Insert the article: ___ meninas estão na escola. (definite, fem., pl.)" },
    { question: "When is the definite article NOT used?", options: ["Before country names: a Portugal", "Before language names: o português", "With possessives: o meu livro", "After the verb «falar»: Falo português"], explanation: "After the verb «falar», the article before the language is usually omitted: Falo português (I speak Portuguese)." },
    { question: "Insert the contraction: Vou ___ praia. (a + a = ...)" },
    { source: "The student's book is on the table." },
    { question: "Which article is used? ___ crianças brincam ___ jardim. (definite + em + o)", options: ["As ... no", "Os ... no", "As ... na", "Umas ... no"], explanation: "Crianças (children) is feminine plural, so «as». «Em + o» = «no»: As crianças brincam no jardim." },
    { question: "Insert the contraction: Ela vem ___ Estados Unidos. (de + os = ...)" },
    { question: "Match the contractions of «em» with articles:", pairs: [{ left: "em + o", right: "no" }, { left: "em + a", right: "na" }, { left: "em + os", right: "nos" }, { left: "em + as", right: "nas" }] },
    { question: "Choose the correct option: Há ___ livros na estante.", explanation: "With the verb «há» (there is/are), the indefinite article «uns» (some) is used: Há uns livros na estante." },
    { question: "Insert the contraction: Ele pensa ___ filhos. (em + os = ...)" },
    { question: "Arrange the sentence: «I'm going to the library»." },
    { question: "What is the correct contraction for «por + as»?", explanation: "Preposition «por» + article «as» = «pelas». For example: pelas ruas (through the streets)." },
    { question: "Insert the contraction: Ela gosta ___ flores. (de + as = ...)" },
    { source: "We live in Portugal." },
    { question: "Which article goes before «água» (water)?", explanation: "Água is feminine: a água. Although the word begins with a stressed «a», the article is still «a»." },
    { question: "Insert the indefinite article: Ele comprou ___ carro novo. (masc., sg.)" },
    { question: "Match the contractions of «a» with articles:", pairs: [{ left: "a + o", right: "ao" }, { left: "a + a", right: "à" }, { left: "a + os", right: "aos" }, { left: "a + as", right: "às" }] },
    { question: "Choose the correct option: ___ alunos estudam ___ universidade. (definite + em + a)", options: ["Os ... na", "Os ... no", "As ... na", "Uns ... em a"], explanation: "Alunos (students) is masculine plural, so «os». «Em + a» = «na»: Os alunos estudam na universidade." }
  ]
};
