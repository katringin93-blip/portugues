export default {
  title: "Subject pronouns and regular verbs",
  description: "Subject pronouns and conjugation of regular verbs (-ar, -er, -ir) in the present tense",
  theory: [
    {
      heading: "Subject pronouns (Pronomes pessoais sujeitos)",
      text: "In European Portuguese, the pronoun system differs from the Brazilian variant. Pay attention to the polite forms of address."
    },
    {
      table: {
        headers: ["Person", "Singular", "Plural"],
        rows: [
          ["1st person", "eu (I)", "nós (we)"],
          ["2nd person (informal)", "tu (you)", "vós (you, archaic)"],
          ["3rd person / polite", "ele/ela (he/she), você (you, formal)", "eles/elas (they), vocês (you, pl.)"]
        ]
      }
    },
    {
      heading: "Regular -ar verbs (1st conjugation)",
      text: "The first conjugation is the most common. The verb stem is obtained by removing the -ar ending."
    },
    {
      table: {
        headers: ["Person", "falar (to speak)"],
        rows: [
          ["eu", "falo"],
          ["tu", "falas"],
          ["ele/ela/você", "fala"],
          ["nós", "falamos"],
          ["eles/elas/vocês", "falam"]
        ]
      }
    },
    {
      table: {
        headers: ["Verb", "Translation", "Verb", "Translation"],
        rows: [
          ["adorar", "to adore; to love", "gostar de", "to like; to enjoy"],
          ["ajudar", "to help", "jogar", "to play (sports)"],
          ["andar", "to walk; to move", "limpar", "to clean"],
          ["apanhar", "to catch", "mandar", "to order"],
          ["cantar", "to sing", "morar", "to reside"],
          ["comprar", "to buy", "nadar", "to swim"],
          ["desejar", "to wish", "olhar", "to look"],
          ["detestar", "to hate", "pensar em", "to think about"],
          ["entrar", "to enter", "sonhar", "to dream"],
          ["escutar", "to listen to", "trabalhar", "to work"],
          ["esperar", "to wait; to hope", "visitar", "to visit"]
        ]
      }
    },
    {
      heading: "Regular -er verbs (2nd conjugation)",
      text: "The second conjugation — verbs ending in -er."
    },
    {
      table: {
        headers: ["Person", "comer (to eat)"],
        rows: [
          ["eu", "como"],
          ["tu", "comes"],
          ["ele/ela/você", "come"],
          ["nós", "comemos"],
          ["eles/elas/vocês", "comem"]
        ]
      }
    },
    {
      heading: "Regular -ir verbs (3rd conjugation)",
      text: "The third conjugation — verbs ending in -ir."
    },
    {
      table: {
        headers: ["Person", "partir (to leave)"],
        rows: [
          ["eu", "parto"],
          ["tu", "partes"],
          ["ele/ela/você", "parte"],
          ["nós", "partimos"],
          ["eles/elas/vocês", "partem"]
        ]
      }
    },
    {
      table: {
        headers: ["-er verb", "Translation", "-ir verb", "Translation"],
        rows: [
          ["beber", "to drink", "abrir", "to open"],
          ["comer", "to eat", "agir", "to act"],
          ["compreender", "to comprehend", "assistir", "to assist; to watch"],
          ["entender", "to understand", "cobrir", "to cover"],
          ["escrever", "to write", "conseguir", "to manage to"],
          ["fornecer", "to supply", "decidir", "to decide"],
          ["oferecer", "to offer", "desistir", "to give up"],
          ["perceber", "to understand", "dormir", "to sleep"],
          ["querer", "to want", "preferir", "to prefer"],
          ["responder", "to reply", "repartir", "to divide"],
          ["vencer", "to win", "sentir", "to feel"],
          ["vender", "to sell", "tossir", "to cough"],
          ["viver", "to live", "partir", "to leave; to break"]
        ]
      }
    },
    {
      note: "In -ir verbs, if the stem vowel is e or o, it changes to i or u in the first person: preferir → prefiro, sentir → sinto, dormir → durmo, tossir → tusso. If the ending consonant is c, g or g(+u), it changes to ç, j, g to maintain the original sound: vencer → venço, agir → ajo, conseguir → consigo."
    },
    {
      examples: [
        { ru: "I speak Portuguese." },
        { ru: "You eat a lot." },
        { ru: "We leave tomorrow." },
        { ru: "They work every day." }
      ]
    },
    {
      note: "In European Portuguese, «tu» is widely used in informal communication, unlike in Brazil. «Você» is used in more formal contexts or when addressing strangers."
    },
    {
      heading: "Verbs from pôr (4th group)",
      text: "In addition to the three main conjugations (-ar, -er, -ir), there is a fourth group — verbs derived from pôr (to put, to place). These include: compor (to compose), decompor (to decompose), repor (to replace), propor (to propose), supor (to suppose), expor (to exhibit), dispor (to arrange)."
    },
    {
      table: {
        headers: ["Person", "pôr (to put)"],
        rows: [
          ["eu", "ponho"],
          ["tu", "pões"],
          ["ele/ela/você", "põe"],
          ["nós", "pomos"],
          ["eles/elas/vocês", "põem"]
        ]
      }
    },
    {
      examples: [
        { ru: "I set the table every day." },
        { ru: "She proposes a different solution." },
        { ru: "We have little time available." },
        { ru: "They compose music together." }
      ]
    }
  ],
  lessons: [
    { title: "Part 1: Pronouns" },
    { title: "Part 2: Verbs -ar, -er, -ir" },
    { title: "Part 3: Verbs from pôr" }
  ],
  exercises: [
    // Ex1: Choose pronoun (10)
    { question: "Which pronoun fits? ___ é professora. (She)", explanation: "«Ela» means she. Professora is feminine, so we refer to a woman: Ela é professora." },
    { question: "Which pronoun fits? ___ é médico. (He)", explanation: "«Ele» means he. Médico is masculine: Ele é médico." },
    { question: "Fill in the pronoun: ___ são estudantes. (They — m. or mixed group)" },
    { question: "Fill in the pronoun: ___ falas muito bem! (You — informal)" },
    { question: "Fill in the pronoun: ___ moramos em Lisboa. (We)" },
    { question: "Fill in the pronoun: ___ trabalho num banco. (I)" },
    { question: "Which pronoun fits? ___ são enfermeiras. (They — f.)", explanation: "«Elas» means they (feminine). Enfermeiras is feminine plural." },
    { question: "Fill in the pronoun: ___ falam português? (you — plural)" },
    { question: "Fill in the pronoun: ___ é o novo director? (you — polite, singular)" },
    { question: "Fill in the pronoun: ___ trabalham muito. (they — m. or mixed)" },
    // Ex2: Conjugate -ar verbs (12)
    { question: "Conjugate: Eles ___ na piscina. (nadar — to swim)" },
    { question: "Conjugate: Nós ___ em Lisboa. (morar — to live)" },
    { question: "Which form is correct? Eles ___ português muito bem. (falar)", explanation: "For «eles» an -ar verb takes the ending -am: falam." },
    { question: "Conjugate: Tu ___ pão todos os dias. (comprar — to buy)" },
    { question: "Conjugate: Ele ___ de futebol. (gostar — to like)" },
    { question: "Conjugate: Ela ___ a avó aos domingos. (visitar — to visit)" },
    { question: "Conjugate: O Pedro ___ levantar-se cedo. (detestar — to hate)" },
    { question: "Which form is correct? A Maria ___ quatro línguas. (falar)", explanation: "For «ela/A Maria» (3rd person singular) an -ar verb takes the ending -a: fala." },
    { question: "Conjugate: Eles ___ muito depressa. (andar — to walk)" },
    { question: "Conjugate: Eu ___ num escritório. (trabalhar — to work)" },
    { question: "Conjugate: Eu ___ o autocarro de manhã. (apanhar — to catch)" },
    { question: "Conjugate: Eu ___ que sim. (esperar — to hope)" },
    // Ex3: Conjugate -er verbs (9)
    { question: "Conjugate: Nós ___ ao meio-dia. (comer — to eat)" },
    { question: "Conjugate: Tu ___ muitas cartas. (escrever — to write)" },
    { question: "Which form is correct? Eles ___ às perguntas. (responder — to reply)", explanation: "For «eles» an -er verb takes the ending -em: respondem." },
    { question: "Conjugate: Ele ___ café de manhã. (beber — to drink)" },
    { question: "Conjugate: Eu não ___ esta palavra. (entender — to understand)" },
    { question: "Conjugate: Eles ___ o problema. (compreender — to comprehend)" },
    { question: "Conjugate: Ele ___ a sua opinião. (defender — to defend)" },
    { question: "Which form is correct? Nós queremos ___ o jogo. (vencer — to win)", explanation: "After «queremos» the infinitive follows: queremos vencer (we want to win)." },
    { question: "Conjugate: Eu ___ água de um poço. (fornecer — to supply, eu → forneço)" },
    // Ex4: Conjugate -ir verbs (10)
    { question: "Conjugate: Ele nunca ___. (desistir — to give up)" },
    { question: "Conjugate: Nós ___ ir ao cinema. (decidir — to decide)" },
    { question: "Which form is correct? Eles ___ falar bem. (conseguir — to manage to)", explanation: "For «eles» an -ir verb takes the ending -em: conseguem." },
    { question: "Conjugate: Eu ___ frio. (sentir — to feel, eu → sinto)" },
    { question: "Conjugate: Ele ___ sempre a mesma coisa. (repetir — to repeat)" },
    { question: "Conjugate: A neve ___ as montanhas. (cobrir — to cover)" },
    { question: "Conjugate: Nós ___ oito horas por noite. (dormir — to sleep)" },
    { question: "Conjugate: O comboio ___ às nove. (partir — to depart)" },
    { question: "Conjugate: A criança ___ muito. (tossir — to cough)" },
    { question: "Conjugate: Ele ___ um café. (pedir — to ask for)" },
    // Ex5: Conjugate pôr-derived verbs (10)
    { question: "Conjugate: Eu ___ os livros na mesa. (pôr — to put)" },
    { question: "Conjugate: Ele ___ música. (compor — to compose)" },
    { question: "Which form is correct? A luz solar ___ a plástico. (decompor — to decompose)", explanation: "For the 3rd person singular, «decompor» conjugates as «decompõe»." },
    { question: "Conjugate: O empregado ___ os produtos. (repor — to restock)" },
    { question: "Conjugate: O professor ___ um exercício. (propor — to propose)" },
    { question: "Conjugate: Eu ___ que sim. (supor — to suppose)" },
    { question: "Conjugate: O museu ___ obras de arte. (expor — to exhibit)" },
    { question: "Conjugate: Tu ___ a mesa todos os dias? (pôr — to set/place)" },
    { question: "Conjugate: Nós ___ de tempo livre. (dispor — to have available)" },
    { question: "Which form is correct? Eles ___ a mesa para o jantar. (pôr)", explanation: "For «eles», «pôr» conjugates as «põem»." },
    // Ex6: Fill verbs in text (11)
    { question: "Fill in: Os portugueses ___ o «tu» e o «você». (usar — to use, eles)" },
    { question: "Fill in: Eles ___ de maneira diferente no Norte e no Sul. (falar — to speak, eles)" },
    { question: "Fill in: Muitos não ___ as diferenças. (conhecer — to know, eles)" },
    { question: "Which form is correct? Os amigos ___ -se por «tu». (tratar — to address)", explanation: "For «os amigos» (eles) an -ar verb takes the ending -am: tratam." },
    { question: "Fill in: Alguns ___ -se pelo primeiro nome. (chamar — to call, eles)" },
    { question: "Fill in: Outros ___ títulos. (adicionar — to add, eles)" },
    { question: "Fill in: Cada pessoa ___ de maneira diferente. (falar — to speak, ela)" },
    { question: "Fill in: Cada um ___ o tratamento que prefere. (usar — to use, ele)" },
    { question: "Fill in: Ele ___ o «tu» com os amigos. (omitir — to omit, ele → omite)" },
    { question: "Fill in: Eles ___ a conversar. (começar — to start, eles)" },
    { question: "Fill in: Eles ___ a falar normalmente. (continuar — to continue, eles)" },
    // Additional mixed exercises
    { question: "Match the pronouns with the forms of the verb «falar» (to speak):" },
    { question: "Match the verb endings for «tu» by conjugation group:" },
    { question: "Build a sentence: «We work every day»." },
    { source: "She speaks Portuguese and English." },
    { question: "Build a sentence: «They buy bread every morning»." },
    { source: "I live in Porto and work in a bank." }
  ],
  vocabulary: [
    { ru: "to speak" },
    { ru: "to eat" },
    { ru: "to leave, to depart" },
    { ru: "to work" },
    { ru: "to live, to reside" },
    { ru: "to drink" },
    { ru: "to open" },
    { ru: "to study" },
    { ru: "to write" },
    { ru: "to live" }
  ],
  flashcards: [
    { ru: "to speak", hint: "1st conjugation (-ar)" },
    { ru: "to eat", hint: "2nd conjugation (-er)" },
    { ru: "to leave", hint: "3rd conjugation (-ir)" },
    { ru: "to work", hint: "eu trabalho, tu trabalhas" },
    { ru: "to live, to reside", hint: "eu moro, tu moras" },
    { ru: "to drink", hint: "eu bebo, tu bebes" },
    { ru: "to study", hint: "eu estudo, tu estudas" },
    { ru: "to write", hint: "eu escrevo, tu escreves" },
    { ru: "full time", hint: "expression" },
    { ru: "to add", hint: "verb" },
    { ru: "still, yet", hint: "adverb" },
    { ru: "tall; loud", hint: "m., f.: alta" },
    { ru: "to walk", hint: "expression" },
    { ru: "birthday", hint: "masculine" },
    { ru: "architecture", hint: "feminine" },
    { ru: "currently", hint: "adverb" },
    { ru: "bus", hint: "masculine" },
    { ru: "short; quiet", hint: "m., f.: baixa" },
    { ru: "baby", hint: "masculine" },
    { ru: "birthday cake", hint: "masculine" },
    { ru: "heat", hint: "masculine" },
    { ru: "early", hint: "adverb" },
    { ru: "to call, to name", hint: "verb" },
    { ru: "chocolate", hint: "masculine" },
    { ru: "sciences", hint: "f. plural" },
    { ru: "to start, to begin", hint: "verb" },
    { ru: "to know (someone)", hint: "verb" },
    { ru: "to continue", hint: "verb" },
    { ru: "(female) cook", hint: "f., m.: cozinheiro" },
    { ru: "during", hint: "preposition" },
    { ru: "on the dot, sharp", hint: "expression" },
    { ru: "employee", hint: "m., f.: empregada" },
    { ru: "engineering", hint: "feminine" },
    { ru: "cold", hint: "masculine" },
    { ru: "today", hint: "adverb" },
    { ru: "information", hint: "feminine" },
    { ru: "dinner", hint: "masculine" },
    { ru: "thief", hint: "m., pl.: ladrões" },
    { ru: "milk", hint: "masculine" },
    { ru: "shop", hint: "feminine" },
    { ru: "badly", hint: "adverb" },
    { ru: "sea", hint: "masculine" },
    { ru: "but", hint: "conjunction" },
    { ru: "table", hint: "feminine" },
    { ru: "normally", hint: "adverb" },
    { ru: "construction site; work", hint: "feminine" },
    { ru: "again", hint: "adverb" },
    { ru: "fish", hint: "masculine" },
    { ru: "possible", hint: "invariable gender" },
    { ru: "shelf", hint: "feminine" },
    { ru: "first; firstly", hint: "adverb/numeral" },
    { ru: "mainly", hint: "adverb" },
    { ru: "products", hint: "m. plural" },
    { ru: "when", hint: "adverb/conjunction" },
    { ru: "rapidly", hint: "adverb" },
    { ru: "to relax", hint: "verb" },
    { ru: "branded clothing", hint: "feminine" },
    { ru: "to go out, to exit", hint: "verb" },
    { ru: "always", hint: "adverb" },
    { ru: "also, too", hint: "adverb" },
    { ru: "tendency, trend", hint: "feminine" },
    { ru: "text", hint: "masculine" },
    { ru: "every day", hint: "frequency expression" },
    { ru: "traditionally", hint: "adverb" },
    { ru: "everything", hint: "pronoun" },
    { ru: "to use, to wear", hint: "verb" },
  ],

};
