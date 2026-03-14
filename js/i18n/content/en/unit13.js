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
    {
      table: {
        headers: ["", "o", "a", "os", "as"],
        rows: [
          ["me +", "mo", "ma", "mos", "mas"],
          ["te +", "to", "ta", "tos", "tas"],
          ["lhe +", "lho", "lha", "lhos", "lhas"],
          ["nos +", "no-lo", "no-la", "no-los", "no-las"],
          ["lhes +", "lho", "lha", "lhos", "lhas"]
        ]
      }
    },
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
  lessons: [
    { title: "Part 1: Forms and position" },
    { title: "Part 2: Pronoun contraction" }
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
    { ru: "to give as a gift (to someone)", hint: "eu ofere\u00e7o" },
    { ru: "to fall asleep", hint: "verb" },
    { ru: "goddaughter", hint: "feminine" },
    { ru: "lover; enthusiast", hint: "m./f." },
    { ru: "before", hint: "preposition" },
    { ru: "presentation", hint: "feminine" },
    { ru: "to sign", hint: "verb" },
    { ru: "raise, increase", hint: "masculine" },
    { ru: "author", hint: "masculine" },
    { ru: "lift (ride)", hint: "feminine" },
    { ru: "collection", hint: "feminine" },
    { ru: "food", hint: "feminine" },
    { ru: "conquests", hint: "f. plural" },
    { ru: "to consider", hint: "verb" },
    { ru: "challenges", hint: "m. plural" },
    { ru: "discount", hint: "masculine" },
    { ru: "director", hint: "masculine" },
    { ru: "order, parcel", hint: "feminine" },
    { ru: "photos", hint: "f. plural" },
    { ru: "staff, employees", hint: "m. plural" },
    { ru: "legend", hint: "feminine" },
    { ru: "shipwreck", hint: "masculine" },
    { ru: "pension; guesthouse", hint: "feminine" },
    { ru: "poet", hint: "m./f." },
    { ru: "publication", hint: "feminine" },
    { ru: "whenever", hint: "conjunction" },
    { ru: "supermarket", hint: "masculine" },
    { ru: "every morning", hint: "time expression" },
    { ru: "every month", hint: "time expression" },
    { ru: "Christmas Eve", hint: "feminine" },
  ],
  exercises: [
    // Ex1: Add the indirect object pronoun
    { question: "Add the indirect object pronoun: Quero ___ (a ela) um presente. (give her)" },
    { question: "O pai ___ (a eles) que não podem sair. (tells them)" },
    { question: "Vou ___ (a ele) o meu carro. (sell him)" },
    { question: "A mãe ___ (a ela) o almoço. (makes her lunch)" },
    { question: "Replace «a nós»: Ele traz ___ (a nós) flores.", explanation: "«A nós» is replaced by «nos»: traz-nos." },
    { question: "A avó, que ___ (a eles) presentes, é muito generosa. (grandmother who gives them gifts — proclisis after «que»)" },
    { question: "A professora ___ (a ele) uma história. (reads him)" },
    { question: "Ela ___ (a eles) bolos. (makes them)" },
    { question: "Ele ___ (a vocês) sapatos novos. (buys you)" },
    { question: "O professor ___ (a ela) português. (teaches her)" },
    // Ex2: Direct + indirect pronoun contraction
    { question: "How do «te» + «o» contract? Eu digo + o livro + a ti = Eu ___", explanation: "Te + o = to. «Eu digo-to» (I tell you this)." },
    { question: "Contraction: Ela dá as flores a nós. → Ela ___ (nos + as)" },
    { question: "Contraction with negation: Ele nunca dá o livro a ela. → Ele nunca ___ (lhe + o)" },
    { question: "Contraction: Eu levo a mala a ela. → Eu ___ (lhe + a)" },
    { question: "Contraction: Ele entrega os documentos a mim. → Ele ___ (me + os)" },
    { question: "What is the contraction of nos + as?", explanation: "Nos + as = no-las. Example: Ela faz-no-las (She makes them for us)." },
    { question: "Contraction: Ela leva o livro a ele. → Ela ___ (lhe + o)" },
    { question: "Contraction: Eles limpam a casa a ti. → Eles ___ (te + a)" },
    { question: "Contraction: Eu empresto o dinheiro a ele. → Eu ___ (lhe + o)" },
    { question: "Contraction: Ele traz as revistas a mim. → Ele ___ (me + as)" },
    // Ex3: Pronoun position with adverbs/negation
    { question: "Rewrite with negation: Ele leva-to. → Ele não ___" },
    { question: "Rewrite with «também»: Tu levas-lhas. → Tu também ___" },
    { question: "Rewrite with «nunca»: Eles dizem-lhe. → Eles nunca ___" },
    { question: "Rewrite with «só»: Ela lê-lhe. → Ela só ___", explanation: "«Só» triggers proclisis: só lhe lê (only reads to him/her)." },
    { question: "Rewrite with «não»: Ele autoriza-me. → Ele não ___" },
    { question: "Rewrite with «também»: Ela telefona-lhe. → Ela também ___" },
    { question: "Rewrite with «nem»: Ele envia-me emails. → Ele nem ___" },
    { question: "Rewrite with «só»: Tu dás-no-las hoje à noite. → Tu só ___" },
    { question: "Rewrite with «também»: Ela fala-lhes todos os dias. → Ela também ___" },
    { question: "Rewrite with «só»: Eu pergunto-lhe o que ela precisa. → Eu só ___" },
    // Ex4: Replace underlined parts (advanced pronoun placement)
    { question: "Replace the underlined part with the word in brackets: Amanhã eles levam-te ao aeroporto? → (quando é que) ___ te levam ao aeroporto?" },
    { question: "Replace the underlined part: O meu pai autoriza-me a ir ao cinema. → (eu acho que ele) Eu acho que ele ___ a ir ao cinema logo à noite." },
    { question: "Replace the underlined part: Você diz-lhe a verdade. → (ninguém) ___ lhe diz a verdade." },
    { question: "Replace the underlined part: A avó escreve-nos muitas cartas. → (quem é que) Quem é que ___ muitas cartas?" },
    { question: "Replace the underlined part: Os alunos compreendem-te perfeitamente. → (todos) ___ te compreendem perfeitamente." },
    { question: "Replace the underlined part: Só ao sábado é que a Filipa me telefona. → (em que dia) Em que dia é que a Filipa ___ para dar notícias?" },
    { question: "Replace «ninguém» with «alguém»: Ninguém te envia cartas agora. → ___ te envia cartas agora?", explanation: "«Alguém» is an indefinite pronoun that triggers proclisis: Alguém te envia." },
    { question: "Replace the underlined part: O Pedro dá-no-las no fim-de-semana. → (quem) Quem ___ no fim-de-semana?" },
    { question: "Replace the underlined part: A Maria faz-lhes muitos favores. → (ela ainda) Ela ainda ___?", explanation: "«Ainda» triggers proclisis: Ela ainda lhes faz muitos favores." },
    { question: "Replace the underlined part: À terça-feira eu empresto-lhes o meu automóvel. → (nunca) Eu nunca ___ o meu automóvel." },
    // Ex5: Translate sentences with indirect objects
    { source: "I want to tell you something." },
    { source: "She gives him a gift." },
    { source: "We always write to them." },
    { source: "Nobody answers me." },
    { source: "The professor explains the lesson to us." },
    { source: "I send her a gift." },
    { source: "He buys me flowers every Saturday." },
    { source: "I give them lunch every Tuesday." },
    { source: "He sells us fresh bread every morning." },
    { source: "He never introduces her to anyone." },
    { source: "You don't give them chocolates." },
    { source: "Isabel calls me on Sunday evening." },
    { source: "We always tell them the truth." },
    // Ex6: Text about fado / Camões
    { question: "Os portugueses ___ (considerar + o fado) a alma do país. (they consider it)" },
    { question: "Put in order: «The poet writes the poetry and concludes it.» (O poeta escreve-a e a finaliza.)" },
    { question: "Text about Camões: Este poeta português é muito admirado. Muitos ___ (comparam + o poeta) a grandes poetas estrangeiros. (compare him)" },
    { question: "Text about Camões: A história da literatura portuguesa ___ (reservar + a ele) um lugar especial. (reserves for him)" },
    { question: "Text about Camões: Camões apresenta Os Lusíadas ao Rei D. Sebastião, que ___ (oferecer + a ele) uma pensão. (proclisis after «que»: offers him)" },
    { question: "Text about Camões: Camões sofre um naufrágio e a sua amante morre afogada, porque ele não ___ (dar + a ela) ajuda. (proclisis after «não»: doesn't give her)" },
    { question: "Text about Camões: O poeta conta a história dos portugueses e ___ (dedicar + a eles) estes poemas épicos. (dedicates to them)" },
    {
      question: "Match the indirect object pronouns:",
      pairs: [
        { right: "me" },
        { right: "te" },
        { right: "lhe" },
        { right: "nos" },
        { right: "lhes" }
      ]
    },
    {
      question: "Match the direct + indirect pronoun contractions:",
      pairs: [
        { right: "mo" },
        { right: "to" },
        { right: "lho" },
        { right: "no-lo" },
        { right: "ma" }
      ]
    }
  ],

};
