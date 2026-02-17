export default {
  title: "Indirect object pronouns",
  description: "Forms and usage of indirect object pronouns (pronomes de complemento indireto)",
  theory: [
    {
      heading: "Forms of indirect object pronouns",
      text: "Indirect object pronouns answer the question \u00abto whom?\u00bb and replace a noun with the preposition \u00aba\u00bb."
    },
    {
      table: {
        headers: ["Person", "Pronoun", "Translation"],
        rows: [
          ["1st sg.", "me", "to me"],
          ["2nd sg.", "te", "to you"],
          ["3rd sg.", "lhe", "to him / to her / to you (formal)"],
          ["1st pl.", "nos", "to us"],
          ["3rd pl.", "lhes", "to them / to you (pl.)"]
        ]
      }
    },
    {
      heading: "Position in the sentence",
      text: "The position rules are the same as for direct object pronouns: enclisis (after the verb) by default, proclisis (before) after negation, interrogative words, and conjunctions."
    },
    {
      heading: "Combining direct and indirect objects",
      text: "When a sentence has both a direct and an indirect pronoun, they merge."
    },
    {},
    {
      examples: [
        { ru: "I give him/her the book." },
        { ru: "I won't tell him/her anything." },
        { ru: "He gives it to me." },
        { ru: "I call him/her every day." }
      ]
    },
    {
      note: "The verb \u00abtelefonar\u00bb in Portuguese requires an indirect object (telefonar a algu\u00e9m), so \u00ablhe\u00bb is used, not \u00abo/a\u00bb. Also: \u00abpedir a\u00bb (to ask), \u00abdizer a\u00bb (to tell), \u00abdar a\u00bb (to give to)."
    }
  ],
  vocabulary: [
    { ru: "to call (someone)" },
    { ru: "to ask (someone)" },
    { ru: "to tell (someone)" },
    { ru: "to give (to someone)" },
    { ru: "to send (to someone)" },
    { ru: "to write (to someone)" },
    { ru: "to ask (someone a question)" },
    { ru: "to show (to someone)" },
    { ru: "to answer (someone)" },
    { ru: "to give as a gift, to offer (to someone)" }
  ],
  flashcards: [
    { ru: "to me", hint: "indirect obj. 1st person" },
    { ru: "to you", hint: "indirect obj. 2nd person" },
    { ru: "to him / to her / to you (formal)", hint: "indirect obj. 3rd person sg." },
    { ru: "to them / to you (pl.)", hint: "indirect obj. 3rd person pl." },
    { ru: "to call (someone)", hint: "requires indirect object" },
    { ru: "to ask (someone)", hint: "eu pe\u00e7o, tu pedes" },
    { ru: "to send (to someone)", hint: "regular verb" },
    { ru: "to give as a gift (to someone)", hint: "eu ofere\u00e7o" }
  ],
  exercises: [
    // 1. choice: Eu dou o livro ao João
    { explanation: "«Ao João» is replaced by «lhe» (indirect object). In affirmative — enclisis: dou-lhe." },
    // 2. fill: She calls me
    { question: "She calls me: Ela telefona-___." },
    // 3. translate ru-pt: I want to tell you something
    { source: "I want to tell you something." },
    // 4. choice: Não ___ digo nada (to her)
    { question: "Não ___ digo nada. (to her)", explanation: "«To her» is an indirect object, so «lhe» is used. After «não» — proclisis." },
    // 5. fill: We write to them
    { question: "We write to them: Nós escrevemos-___." },
    // 6. match: personal pronouns → indirect objects
    { question: "Match the personal pronouns with the indirect object pronouns:" },
    // 7. choice: which preposition indicates indirect object
    { question: "Which preposition indicates the indirect object in Portuguese?", explanation: "The preposition «a» (ao/à) indicates the indirect object: dar algo A alguém." },
    // 8. fill: I give him a present
    { question: "I give him a present: Eu dou-___ um presente." },
    // 9. fill: The professor explains to us
    { question: "The professor explains to us: O professor explica-___." },
    // 10. choice: which verb takes an indirect object
    { question: "Which of these verbs requires an indirect object?", options: ["ver (to see)", "comer (to eat)", "telefonar (to call)", "comprar (to buy)"], explanation: "«Telefonar» requires an indirect object: telefonar A alguém (to call someone)." },
    // 11. fill: She answers me
    { question: "She answers me: Ela responde-___." },
    // 12. translate ru-pt: We write to you (pl.)
    { source: "We write to you (pl.)." },
    // 13. choice: Peço-___ um favor
    { question: "«Peço-___ um favor.» (I'm asking you for a favor.)", explanation: "«Pedir a alguém» — to ask someone. Indirect object → lhe." },
    // 14. fill: I don't tell him anything
    { question: "I don't tell him anything: Não ___ digo nada." },
    // 15. choice: Quem ___ telefonou? (Who called you?)
    { question: "«Quem ___ telefonou?» (Who called you?)", explanation: "«You» as an indirect object = te. After «quem» — proclisis." },
    // 16. translate ru-pt: Nobody answers him
    { source: "Nobody answers him." },
    // 17. fill: Mother always tells us the truth
    { question: "Mother always tells us the truth: A mãe sempre ___ diz a verdade." },
    // 18. choice: how do «me» + «o» combine
    { question: "How do «me» + «o» combine into one word?", explanation: "The combination me + o = mo. Example: «Ele dá-mo» (He gives it to me)." },
    // 19. fill: He gives it to me (o livro)
    { question: "He gives it to me (o livro): Ele dá-___." },
    // 20. choice: how do «lhe» + «o» combine
    { question: "How do «lhe» + «o» combine?", explanation: "The combination lhe + o = lho. «Eu dou-lho» (I give it to him/her)." },
    // 21. fill: I'll give it to you (a resposta)
    { question: "I'll give it to you (a resposta): Eu dou-___." },
    // 22. match: combined pronouns
    { question: "Match the combined pronouns:" },
    // 23. translate ru-pt: I want to tell her the truth
    { source: "I want to tell her the truth." },
    // 24. fill: We can help you
    { question: "We can help you: Podemos ajudar-___." },
    // 25. choice: Vou ___-lhe amanhã
    { question: "«Vou ___-lhe amanhã.» (I'll call her tomorrow.)", explanation: "After «ir» (auxiliary) comes the infinitive: Vou telefonar-lhe." },
    // 26. choice: Eu vejo ___ — direct or indirect?
    { question: "«Eu vejo ___» (I see him) — direct or indirect object?", options: ["Direct: vejo-o", "Indirect: vejo-lhe", "Direct: vejo-lhe", "Indirect: vejo-o"], explanation: "«Ver» takes a direct object: vejo-o (I see him). The direct object answers the question «whom?/what?»." },
    // 27. choice: Eu telefono ___ — direct or indirect?
    { question: "«Eu telefono ___» (I call him) — direct or indirect?", options: ["Direct: telefono-o", "Indirect: telefono-lhe", "Direct: telefono-lo", "Indirect: telefono-le"], explanation: "«Telefonar» requires an indirect object (telefonar A alguém): telefono-lhe." },
    // 28. translate ru-pt: He explains the lesson to us
    { source: "He explains the lesson to us." },
    // 29. fill: The doctor prescribes her medication
    { question: "The doctor prescribes her medication: O médico receita-___ o medicamento." },
    // 30. translate ru-pt: I don't believe you
    { source: "I don't believe you." },
    // 31. order: We want to send them a letter
    { question: "Form a sentence: «We want to send them a letter.»" },
    // 32. fill: She often writes to them
    { question: "She often writes to them: Ela escreve-___ muitas vezes." },
    // 33. choice: where does the pronoun go
    { question: "Where does the pronoun go: «Também ___ telefono todos os dias.»?", options: ["After the verb (enclisis)", "Before the verb (proclisis)", "At the end of the sentence", "Between subject and verb"], explanation: "«Também» triggers proclisis (pronoun before the verb): Também lhe telefono." },
    // 34. translate ru-pt: Who told you that?
    { source: "Who told you that?" }
  ]
};
