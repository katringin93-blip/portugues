export default {
  title: "Negation",
  description: "Negative constructions and negative words in Portuguese",
  theory: [
    {
      heading: "Simple negation",
      text: "To form a negation in Portuguese, simply place «não» (no, not) before the verb. Unlike Russian, in Portuguese there is no double negation with «não» and another negative word before the verb."
    },
    {
      examples: [
        { ru: "I don't speak French." },
        { ru: "She doesn't live here." },
        { ru: "We don't have a car." }
      ]
    },
    {
      heading: "Negative words (Palavras negativas)",
      text: "When a negative word comes after the verb, «não» is also placed before the verb (double negation). If the negative word comes before the verb, «não» is not used."
    },
    {
      table: {
        headers: ["Affirmative", "Negative", "Translation"],
        rows: [
          ["alguém", "ninguém", "someone → nobody"],
          ["algo / alguma coisa", "nada", "something → nothing"],
          ["algum/a", "nenhum/a", "some → none"],
          ["sempre", "nunca", "always → never"],
          ["também", "também não / tampouco", "also → neither"],
          ["ainda", "já não", "still → no longer"],
          ["já", "ainda não", "already → not yet"]
        ]
      }
    },
    {
      examples: [
        { ru: "I don't know anyone here." },
        { ru: "Nobody knows the answer." },
        { ru: "I have never been to Portugal." },
        { ru: "I don't want anything." }
      ]
    },
    {
      note: "Note the double negation in Portuguese: «Não quero nada» (lit.: «I don't want nothing»). This is normal in Portuguese when the negative word comes after the verb."
    }
  ],
  vocabulary: [
    { ru: "no; not" },
    { ru: "nobody" },
    { ru: "nothing" },
    { ru: "never" },
    { ru: "none, not any" },
    { ru: "neither, not either" },
    { ru: "not yet" },
    { ru: "no longer" },
    { ru: "fish" },
    { ru: "answer" }
  ],
  flashcards: [
    { ru: "no; not", hint: "placed before the verb" },
    { ru: "nobody", hint: "before the verb — without não" },
    { ru: "nothing", hint: "after the verb — with não" },
    { ru: "never", hint: "before the verb — without não" },
    { ru: "none, not any", hint: "agrees in gender" },
    { ru: "not yet", hint: "antonym: já (already)" },
    { ru: "no longer", hint: "antonym: ainda (still)" },
    { ru: "fish", hint: "masculine" },
    { ru: "at the same time", hint: "time expression" },
    { ru: "something", hint: "indefinite pronoun" },
    { ru: "someone", hint: "indefinite pronoun" },
    { ru: "both", hint: "f.: ambas" },
    { ru: "throughout, along", hint: "time/place prep." },
    { ru: "appreciated", hint: "f., participle" },
    { ru: "late", hint: "f.; m.: atrasado" },
    { ru: "song", hint: "f.; pl.: canções" },
    { ru: "full", hint: "f.; m.: cheio" },
    { ru: "concept, notion", hint: "masculine" },
    { ru: "culture", hint: "feminine" },
    { ru: "to disappear", hint: "verb" },
    { ru: "than (comparison)", hint: "comparison conj." },
    { ru: "easy", hint: "pl. of fácil" },
    { ru: "petrol", hint: "feminine" },
    { ru: "people; us (colloq.)", hint: "feminine" },
    { ru: "free of charge", hint: "f.: gratuita" },
    { ru: "lyrics", hint: "feminine" },
    { ru: "far", hint: "adverb of place" },
    { ru: "notion", hint: "f.; pl.: noções" },
    { ru: "nostalgia", hint: "feminine" },
    { ru: "pride", hint: "masculine" },
    { ru: "word", hint: "feminine" },
    { ru: "behind, backwards", hint: "directional adverb" },
    { ru: "to lose", hint: "verb" },
    { ru: "swimming pool", hint: "feminine" },
    { ru: "poetry", hint: "feminine" },
    { ru: "peoples, nations", hint: "m. plural" },
    { ru: "longing, nostalgia", hint: "f.; untranslatable" },
    { ru: "without", hint: "preposition" },
    { ru: "feeling", hint: "masculine" },
    { ru: "to be hungry", hint: "expression with ter" },
    { ru: "term", hint: "masculine" },
    { ru: "everyone", hint: "expression" },
    { ru: "tone", hint: "masculine" },
    { ru: "to translate", hint: "verb" },
    { ru: "sadness", hint: "feminine" },
  ],
  exercises: [
    { question: "Choose the correct translation of «I never eat fish»:", options: ["Eu nunca não como peixe.", "Eu não como nunca peixe.", "Eu nunca como peixe.", "Eu não nunca como peixe."], explanation: "When «nunca» is placed before the verb, «não» is not needed: «Eu nunca como peixe»." },
    { question: "I don't know ___ (anything) about it. → Não sei ___ sobre isso." },
    { source: "Nobody speaks Russian." },
    { question: "Which word means «never»?", explanation: "«Nunca» means «never». Nada = nothing, ninguém = nobody, nenhum = none." },
    { question: "She hasn't arrived yet: Ela ___ ___ chegou." },
    { question: "How do you correctly say «I don't want anything»?", options: ["Eu não quero nada.", "Eu nada quero não.", "Eu não nada quero.", "Eu quero não nada."], explanation: "Double negation in Portuguese: «Não» before the verb + «nada» after: «Não quero nada»." },
    { question: "___ sabe a resposta. (Nobody knows the answer.)" },
    { source: "I don't understand anything." },
    { question: "Match the negative words with their translation:", pairs: [{ left: "nada", right: "nothing" }, { left: "ninguém", right: "nobody" }, { left: "nunca", right: "never" }, { left: "nenhum", right: "none" }, { left: "nem...nem", right: "neither...nor" }] },
    { question: "Arrange the negative sentence: «I don't speak French.»" },
    { question: "«Não tenho ___ amigos aqui.» (I have no friends here.)", explanation: "«Amigos» is masc. pl., so «nenhuns». (But in colloquial speech, «nenhum» is often used.)" },
    { question: "Ele não come ___ carne ___ peixe. (He eats neither meat nor fish.)" },
    { source: "I have never been to Lisbon." },
    { question: "Where is «não» placed in a sentence?", options: ["After the verb", "Before the verb", "At the end of the sentence", "Before the subject"], explanation: "«Não» is always placed immediately before the verb: «Eu não falo»." },
    { question: "Não há ___ problema. (There is no problem.)" },
    { source: "We don't know anything about it." },
    { question: "Arrange the sentence: «Nobody works here.»" },
    { question: "Choose the correct sentence with «nem...nem»:", options: ["Nem gosto de café nem de chá.", "Não gosto nem de café nem de chá.", "Não gosto de café nem chá.", "Nem não gosto de café nem de chá."], explanation: "The correct structure: «Não» + verb + «nem...nem»: «Não gosto nem de café nem de chá»." },
    { question: "Eu ___ vou lá. (I never go there. — «nunca» before the verb)" },
    { source: "She has neither brothers nor sisters." },
    { question: "How do you say «Nothing happened»?", options: ["Nada aconteceu.", "Não aconteceu nada.", "Both options are correct.", "Neither option is correct."], explanation: "Both options are correct: «Nada aconteceu» (nada before the verb) and «Não aconteceu nada» (double negation)." },
    { question: "Ele não gosta de ___ pessoa nesta sala. (He doesn't like any person in this room.)" },
    { question: "Arrange the sentence: «I don't see anything.»" },
    { source: "Do you never listen?" },
    { question: "«___ me disse isso.» — Nobody told me that.", explanation: "«Ninguém» (nobody) is used as the subject: «Ninguém me disse isso»." },
    { question: "Não temos ___ dinheiro. (We don't have any money.)" },
    { question: "Match the sentences with their translation:", pairs: [{ left: "Não quero nada.", right: "I don't want anything." }, { left: "Ninguém veio.", right: "Nobody came." }, { left: "Nunca como carne.", right: "I never eat meat." }, { left: "Não tenho nenhum livro.", right: "I don't have a single book." }] },
    { source: "They don't talk to anyone." }
  ]
};
