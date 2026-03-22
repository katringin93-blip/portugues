export default {
  title: "Interrogative words",
  description: "Interrogative pronouns and adverbs, forming questions",
  theory: [
    {
      heading: "Interrogative words (Palavras interrogativas)",
      text: "Interrogative words in Portuguese are placed at the beginning of the sentence. In European Portuguese, word order in questions is often inverted: the verb is placed before the subject."
    },
    {
      table: {
        headers: ["Portuguese", "English", "Example"],
        rows: [
          ["Quem?", "Who?", "Quem é ele?"],
          ["O que? / Que?", "What?", "O que fazes?"],
          ["Onde?", "Where?", "Onde moras?"],
          ["Quando?", "When?", "Quando chegas?"],
          ["Como?", "How?", "Como te chamas?"],
          ["Porquê? / Por que?", "Why?", "Porquê não vens?"],
          ["Qual? / Quais?", "Which? / Which ones?", "Qual é o teu nome?"],
          ["Quanto/a?", "How much?", "Quanto custa?"],
          ["Quantos/as?", "How many?", "Quantos anos tens?"]
        ]
      }
    },
    {
      heading: "Forming questions",
      text: "In Portuguese, there are three ways to ask a question: 1) using intonation (a declarative sentence with question intonation), 2) using inversion (verb + subject), 3) using interrogative words."
    },
    {
      examples: [
        { ru: "What is your name?" },
        { ru: "Where do you live?" },
        { ru: "How old are you?" },
        { ru: "What is your profession?" },
        { ru: "How much does this book cost?" }
      ]
    },
    {
      note: "The construction «é que» is a characteristic feature of European Portuguese. It is inserted after the interrogative word and is not translated: «Onde é que moras?» = «Onde moras?» (Where do you live?)."
    },
    {
      heading: "Reinforcing questions with «é que»",
      text: "In European Portuguese, the construction «é que» is often added after the interrogative word to reinforce the question. It doesn't change the meaning but sounds more natural in spoken Portuguese."
    },
    {
      examples: [
        { pt: "Que horas é que são?", ru: "What time is it?" },
        { pt: "Quanto tempo é que demora a viagem?", ru: "How long does the journey take?" },
        { pt: "Como é que se chama?", ru: "What is your name?" },
        { pt: "Porque é que fazem tantas perguntas?", ru: "Why do you ask so many questions?" }
      ]
    },
    {
      heading: "Prepositions with interrogative words",
      text: "The interrogative words que, onde and quem can be used with prepositions. The preposition is placed before the interrogative word."
    },
    {
      table: {
        headers: ["Construction", "Example", "Translation"],
        rows: [
          ["a que", "A que horas começas a trabalhar?", "What time do you start work?"],
          ["de que", "De que falas?", "What are you talking about?"],
          ["em que", "Em que cidade vives?", "In which city do you live?"],
          ["aonde (a + onde)", "Aonde vais?", "Where are you going?"],
          ["donde (de + onde)", "Donde vem o João?", "Where does João come from?"],
          ["para onde", "Para onde vais viver?", "Where are you going to live?"],
          ["a quem", "A quem dizes isso?", "To whom do you say that?"],
          ["com quem", "Com quem estás a falar?", "Who are you talking to?"],
          ["de quem", "De quem estás a falar?", "Who are you talking about?"],
          ["para quem", "Para quem trabalha a Isabel?", "Who does Isabel work for?"]
        ]
      }
    },
    {
      note: "Unlike in English, in Portuguese the preposition is placed at the beginning of the question, before the interrogative word: «De que falas?» (What are you talking about?), not *«Que de falas?»."
    }
  ],
  lessons: [
    { title: "Part 1: Interrogative words" },
    { title: "Part 2: «É que» and prepositions" }
  ],
  vocabulary: [
    { ru: "who" },
    { ru: "what" },
    { ru: "where" },
    { ru: "when" },
    { ru: "how" },
    { ru: "why" },
    { ru: "which / which ones" },
    { ru: "how much" },
    { ru: "ticket" },
    { ru: "profession" }
  ],
  exercises: [
    // Ex1: Fill correct interrogative (12 items)
    { question: "___ se chama o seu amigo? (asking about a friend's name)" },
    { question: "___ é aquela rapariga? (asking about identity)" },
    { question: "___ há para o jantar? (asking about dinner)" },
    { question: "___ estuda o Paulo? (asking about a subject of study)" },
    { question: "___ é que chegam os teus pais? (asking about arrival time)" },
    { question: "___ é o director da escola? (asking about identity)" },
    {
      question: "Choose the correct interrogative word: ___ fazem no fim-de-semana?",
      explanation: "«Que» (what) is used for questions about actions: «What do they do at the weekend?»"
    },
    { question: "___ é que vocês convidam para a festa? (asking about party guests)" },
    { question: "___ é que fica a farmácia? (asking about location)" },
    { question: "___ é que a Ana traz na mala? (asking about bag contents)" },
    {
      question: "Choose the correct interrogative word: ___ fala ao telefone?",
      explanation: "«Quem» (who) — a question about a person: «Who is speaking on the phone?»"
    },
    { question: "___ é que ela vai para o trabalho — de carro ou de autocarro? (asking about means of transport)" },

    // Ex2: Full answers using elements (8 items)
    { source: "Where is Idalina?" },
    { question: "Put the words in order to give a full answer to «Onde está a Idalina?» — She is at school." },
    { question: "Put the words in order: «At the weekend we are going to Viana do Castelo.»" },
    { source: "I take the bus at 17:30." },
    { source: "I am going to the cinema with Patrícia." },
    { question: "Put the words in order: «I am going to visit mum tomorrow afternoon.»" },
    { source: "On Sundays we walk in the park." },
    {
      question: "How do you correctly answer «Quanto custa o bilhete?» — The ticket costs ten euros.",
      explanation: "«O bilhete custa dez euros» — the correct answer using the verb «custar» (to cost)."
    },

    // Ex3: Write full questions for given answers (10 items)
    { source: "What is your name? (answer: Chamo-me Maria.)" },
    { question: "Question for the answer «O Paulo é de Coimbra»: ___ é o Paulo?" },
    { source: "What are they sending? (answer: Enviam uma encomenda.)" },
    { question: "Question for the answer «Falamos da professora»: De ___ falam?" },
    { source: "What is this book about? (answer: O livro trata de história.)" },
    { question: "Question for the answer «Vou de férias em agosto»: Em ___ mês vais de férias?" },
    { source: "What time does the train arrive?" },
    { question: "Put the words in order to make a question: «When is Ana marrying Pedro?»" },

    // Ex4: Build questions from elements (5 items)
    { question: "Put the words in order to make a question: «Where do Catarina's friends live?»" },
    { question: "Put the words in order to make a question: «What time does the next train to Porto arrive?»" },
    { source: "How many people work in your factory?" },
    { source: "Where are you going on holiday?" },
    { question: "Put the words in order to make a question: «Who does Luísa spend weekends with?»" },

    // Ex5: Mixed exercises on interrogatives
    {
      question: "Match the interrogative words with their translations:",
      pairs: [
        { left: "Como", right: "How" },
        { left: "Onde", right: "Where" },
        { left: "Quando", right: "When" },
        { left: "Quem", right: "Who" },
        { left: "Quanto", right: "How much" }
      ]
    },
    {
      question: "Match the question with the appropriate answer:",
      pairs: [
        { left: "Onde mora?", right: "Em Lisboa." },
        { left: "Quando chega?", right: "Amanhã." },
        { left: "Quem é?", right: "O professor." },
        { left: "Como vai?", right: "De autocarro." },
        { left: "Que faz?", right: "Estudo português." }
      ]
    },
    {
      question: "Which question fits the answer «O Natal em Portugal é no dia 25 de dezembro»?",
      explanation: "The answer contains a date (25 de dezembro), so the question must use «Quando» (when)."
    },
    {
      question: "Which construction is characteristic of European Portuguese in questions?",
      explanation: "The construction «é que» is a typical feature of European Portuguese; it is placed after the interrogative word."
    }
  ],
  flashcards: [
    { ru: "Who?", hint: "interrogative pronoun" },
    { ru: "Where?", hint: "interrogative adverb of place" },
    { ru: "When?", hint: "interrogative adverb of time" },
    { ru: "How?", hint: "interrogative adverb of manner" },
    { ru: "Why?", hint: "at the end of a phrase; Por que — at the beginning" },
    { ru: "Which?", hint: "pl.: Quais?" },
    { ru: "How much?", hint: "fem.: Quanta? pl.: Quantos/as?" },
    { ru: "ticket", hint: "masculine" },
    { ru: "most, the majority", hint: "feminine" },
    { ru: "rough, wild", hint: "invariable gender" },
    { ru: "tomorrow afternoon", hint: "time expression" },
    { ru: "calm", hint: "f.: calma" },
    { ru: "letters", hint: "f. plural" },
    { ru: "to marry", hint: "verb" },
    { ru: "however, nevertheless", hint: "conjunction" },
    { ru: "the Alentejo coast", hint: "feminine" },
    { ru: "habit, custom", hint: "masculine" },
    { ru: "to cost", hint: "verb" },
    { ru: "soon", hint: "time adverb" },
    { ru: "to close", hint: "verb" },
    { ru: "day off", hint: "feminine" },
    { ru: "to attend, to frequent", hint: "verb" },
    { ru: "to have holidays", hint: "expression" },
    { ru: "better, best", hint: "pl. of melhor" },
    { ru: "at this moment", hint: "time expression" },
    { ru: "new; young", hint: "f.: nova" },
    { ru: "to walk in the park", hint: "expression" },
    { ru: "period", hint: "masculine" },
    { ru: "popular", hint: "invariable gender" },
    { ru: "per week", hint: "frequency expression" },
    { ru: "next month", hint: "masculine" },
    { ru: "so many", hint: "f. pl. of tanto" },
    { ru: "temperatures", hint: "f. plural" },
    { ru: "typically", hint: "adverb" },
    { ru: "every week", hint: "frequency expression" },
    { ru: "the whole country", hint: "masculine" },
    { ru: "since, given that", hint: "causal conjunction" },
    { ru: "coastal area", hint: "feminine" },
  ],

};
