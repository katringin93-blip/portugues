export default {
  title: "Pret\u00e9rito Perfeito vs Imperfeito",
  description: "Comparing the simple past and the imperfect tense \u2014 when to use which",
  theory: [
    {
      heading: "When to use Pret\u00e9rito Perfeito Simples",
      text: "The simple past (Perfeito) is used for: 1) completed one-time actions, 2) sequences of actions, 3) actions with a specified exact time."
    },
    {
      table: {
        headers: ["Situation", "Example"],
        rows: [
          ["Completed action", "Ontem comi peixe. (Yesterday I ate fish.)"],
          ["Sequence", "Levantei-me, tomei banho e sa\u00ed. (I got up, took a shower, and left.)"],
          ["Exact time", "Cheguei \u00e0s oito horas. (I arrived at eight o'clock.)"],
          ["Defined period", "Vivi em Lisboa durante dois anos. (I lived in Lisbon for two years.)"]
        ]
      }
    },
    {
      heading: "When to use Imperfeito",
      text: "The imperfect (Imperfeito) is used for: 1) habitual actions, 2) background/setting descriptions, 3) ongoing/continuous actions, 4) physical and emotional states."
    },
    {
      table: {
        headers: ["Situation", "Example"],
        rows: [
          ["Habit", "Todos os dias ia \u00e0 escola. (Every day I used to go to school.)"],
          ["Background description", "Fazia sol e os p\u00e1ssaros cantavam. (The sun was shining and the birds were singing.)"],
          ["Ongoing action", "Enquanto dormia, tocou o telefone. (While I was sleeping, the phone rang.)"],
          ["State", "Eu estava cansado. (I was tired.)"]
        ]
      }
    },
    {
      heading: "Combining the two tenses",
      text: "Often both tenses are used in the same sentence: Imperfeito for the background/ongoing action, Perfeito for the new/interrupting action."
    },
    {
      examples: [
        { ru: "When I was leaving the house, it started to rain." },
        { ru: "While she was cooking, he arrived." },
        { ru: "I was reading a book when the phone rang." },
        { ru: "They lived in Porto, but moved to Lisbon." }
      ]
    },
    {
      note: "Key rule: if you can substitute \u00abused to do\u00bb or \u00abwas doing\u00bb \u2014 use Imperfeito. If you can substitute \u00abdid\u00bb or \u00abhappened\u00bb \u2014 use Perfeito."
    }
  ],
  vocabulary: [
    { ru: "to rain" },
    { ru: "to snow" },
    { ru: "sun" },
    { ru: "rain" },
    { ru: "bird" },
    { ru: "to sing" },
    { ru: "to ring; to play (an instrument)" },
    { ru: "to cook" },
    { ru: "to move (residence)" },
    { ru: "beach" }
  ],
  flashcards: [
    { ru: "it was raining (Imperf.)", hint: "background description" },
    { ru: "it rained (Perf.)", hint: "completed event" },
    { ru: "While ... (event)", hint: "Imperf. + Perf." },
    { ru: "to move (residence)", hint: "eu mudei-me (Perf.)" },
    { ru: "to cook", hint: "eu cozinhava (Imperf.)" },
    { ru: "beach", hint: "feminine" },
    { ru: "sun", hint: "fazia sol = it was sunny" },
    { ru: "bird", hint: "pl.: os p\u00e1ssaros" }
  ],
  exercises: [
    // 1. choice: Enquanto eu ___ (dormir), o telefone ___ (tocar)
    { explanation: "Background action (was sleeping) — Imperfeito: dormia. Interrupting event (rang) — Perfeito: tocou." },
    // 2. choice: Quando era criança, todos os verões ___ à praia (ir)
    { explanation: "A habitual action in the past — Imperfeito: «ia» (used to go every summer)." },
    // 3. translate ru-pt: I was watching television when she called
    { source: "I was watching television when she called." },
    // 4. fill: Ontem eu ___ ao médico (ir — completed action)
    { question: "Ontem eu ___ ao médico. (ir — completed action)" },
    // 5. choice: which sentence describes background/setting
    { question: "Which sentence describes background/setting?", options: ["Comi um bolo.", "Chovia muito.", "Ele chegou.", "Comprei um carro."], explanation: "«Chovia muito» (It was raining heavily) — a description of the setting, background. The Imperfeito is used." },
    // 6. choice: Ontem ___ muito frio (fazer — weather description)
    { question: "Ontem ___ muito frio. (fazer — weather/setting description)", explanation: "Weather/setting description — Imperfeito: «fazia muito frio»." },
    // 7. choice: Ela ___ um café e ___ de casa (sequence of completed actions)
    { question: "Ela ___ um café e ___ de casa. (tomar / sair — sequence of completed actions)", explanation: "A sequence of completed actions — both forms in Perfeito: tomou, saiu." },
    // 8. choice: Enquanto ela ___ (cozinhar), ele ___ (chegar)
    { explanation: "Background action (was cooking) — Imperfeito: cozinhava. Interrupting event (arrived) — Perfeito: chegou." },
    // 9. choice: Todos os dias ele ___ às sete horas (habitual action)
    { question: "Todos os dias ele ___ às sete horas. (levantar-se — habitual action)", explanation: "A habitual action in the past — Imperfeito: levantava-se." },
    // 10. choice: ___ sol e os pássaros ___ (setting description)
    { question: "___ sol e os pássaros ___. (fazer / cantar — setting description)", explanation: "Setting description — both forms in Imperfeito: fazia sol, cantavam." },
    // 11. fill: Ontem eu ___ às oito horas (chegar — completed action with exact time)
    { question: "Ontem eu ___ às oito horas. (chegar — completed action with exact time)" },
    // 12. fill: Quando eu ___ de casa, começou a chover (sair — background action)
    { question: "Quando eu ___ de casa, começou a chover. (sair — background action)" },
    // 13. fill: Eu ___ um livro quando o telefone ___ (ler / tocar)
    null,
    // 14. fill: Eu ___ cansado e ___ ir para casa (estar / decidir — state + decision)
    { question: "Eu ___ cansado e ___ ir para casa. (estar / decidir — state + decision)" },
    // 15. fill: Eles ___ no Porto, mas ___ para Lisboa (viver / mudar-se — background + new action)
    { question: "Eles ___ no Porto, mas ___ para Lisboa. (viver / mudar-se — background + new action)" },
    // 16. choice: which sentence describes a habitual action
    { question: "Which sentence describes a habitual action?", options: ["Ontem comprei um livro.", "Todos os dias ia à escola a pé.", "Cheguei às oito.", "Ele deu-me um presente."], explanation: "«Todos os dias ia à escola a pé» — a repeated habitual action, therefore Imperfeito." },
    // 17. choice: which sentence describes a completed one-time action
    { question: "Which sentence describes a completed one-time action?", options: ["Chovia muito.", "Eu estudava todos os dias.", "O João telefonou às cinco.", "Ela era muito bonita."], explanation: "«O João telefonou às cinco» — a completed one-time action with an exact time — Perfeito." },
    // 18. choice: key rule for substitution
    { question: "Key rule: if you can substitute «used to do» or «was doing at that moment», use...", options: ["Perfeito", "Imperfeito", "Mais-que-Perfeito", "Futuro"], explanation: "If you can substitute «used to do» or «was doing at that moment» — Imperfeito. If «did» — Perfeito." },
    // 19. translate ru-pt: When I was leaving the house, it started to rain
    { source: "When I was leaving the house, it started to rain." },
    // 20. translate ru-pt: I was reading a book when the phone rang
    { source: "I was reading a book when the phone rang." },
    // 21. translate ru-pt: Yesterday I ate fish
    { source: "Yesterday I ate fish." },
    // 22. translate ru-pt: He got up, took a shower, and left
    { source: "He got up, took a shower, and left." },
    // 23. translate ru-pt: She used to be very shy
    { source: "She used to be very shy." },
    // 24. choice: Quando ___ a casa, a minha mãe ___ (chegar / cozinhar)
    { explanation: "«Cheguei» — completed event (arrived). «Cozinhava» — background action (was cooking)." },
    // 25. choice: Ela ___ doente e por isso não ___ trabalhar (estar / ir)
    { explanation: "«Estava doente» — state (Imperfeito). «Não foi trabalhar» — completed decision/action (Perfeito)." },
    // 26. fill: O tempo ___ bom e nós ___ ir à praia (estar / decidir)
    null,
    // 27. order: While she was cooking, he arrived
    { question: "Form a sentence: «While she was cooking, he arrived.»" },
    // 28. match: marker → tense (Perfeito or Imperfeito)
    { question: "Match the marker with the tense (Perfeito or Imperfeito):" },
    // 29. choice: Vivi em Lisboa ___ dois anos (defined period)
    { question: "Vivi em Lisboa ___ dois anos. (lived for two years — defined period)", explanation: "«Durante dois anos» — a defined period; the Perfeito is used: «Vivi em Lisboa durante dois anos.»" },
    // 30. fill: A criança ___ e a mãe ___ (chorar — background / entrar — event)
    { question: "A criança ___ e a mãe ___. (chorar — background / entrar — event)" },
    // 31. choice: When I was young, I used to travel a lot
    { question: "How do you correctly say: «When I was young, I used to travel a lot»?", options: ["Quando fui jovem, viajei muito.", "Quando era jovem, viajava muito.", "Quando era jovem, viajei muito.", "Quando fui jovem, viajava muito."], explanation: "«When I was young» — ongoing state (Imperfeito: era). «Used to travel a lot» — habitual action (Imperfeito: viajava)." },
    // 32. choice: ___ a chover quando eu ___ do escritório (estar / sair)
    { explanation: "«Estava a chover» — background, ongoing action (Imperfeito). «Saí» — specific event (Perfeito)." }
  ]
};
