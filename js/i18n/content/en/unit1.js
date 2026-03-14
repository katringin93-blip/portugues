export default {
  title: "Nouns",
  description: "Gender and number of nouns in European Portuguese",
  theory: [
    {
      heading: "Gender of nouns",
      text: "In Portuguese, nouns have two genders: masculine (masculino) and feminine (feminino). Unlike English, every noun has a grammatical gender, even inanimate objects (e.g. «a mesa» — the table — is feminine). Gender can often be determined by the word ending."
    },
    {
      table: {
        headers: ["Ending", "Gender", "Examples"],
        rows: [
          ["-o", "masculine", "o livro (book), o gato (cat)"],
          ["-a", "feminine", "a casa (house), a mesa (table)"],
          ["-ção", "feminine", "a nação (nation), a estação (station)"],
          ["-dade", "feminine", "a cidade (city), a universidade (university)"],
          ["-agem", "feminine", "a viagem (trip), a paisagem (landscape)"],
          ["-or", "masculine", "o professor (teacher), o computador (computer)"],
          ["-ema", "masculine", "o problema (problem), o sistema (system)"]
        ]
      }
    },
    {
      heading: "Plural forms",
      text: "Basic rule: add -s to words ending in a vowel. Words ending in a consonant have special rules."
    },
    {
      table: {
        headers: ["Singular ending", "Plural ending", "Example"],
        rows: [
          ["-a, -o, -e", "+ s", "gato → gatos, casa → casas"],
          ["-r, -s, -z", "+ es", "flor → flores, país → países"],
          ["-al", "-ais", "animal → animais, jornal → jornais"],
          ["-el", "-éis", "papel → papéis, anel → anéis"],
          ["-ol", "-óis", "farol → faróis, espanhol → espanhóis"],
          ["-ul", "-uis", "azul → azuis"],
          ["-m", "-ns", "homem → homens, viagem → viagens"],
          ["-ão", "-ões / -ães / -ãos", "nação → nações, pão → pães, mão → mãos"]
        ]
      }
    },
    {
      examples: [
        { ru: "The book is on the table." },
        { ru: "The houses are big." },
        { ru: "The men work." },
        { ru: "The trip was long." }
      ]
    },
    {
      note: "Note: some exception words do not follow the general gender rules. For example, o dia (day) ends in -a but is masculine. A tribo (tribe) ends in -o but is feminine."
    },
    {
      heading: "Diminutives and augmentatives",
      text: "Portuguese makes extensive use of diminutive (diminutivos) and augmentative (aumentativos) forms of nouns. They modify the meaning of a word, expressing size, intensity or emotion."
    },
    {
      table: {
        headers: ["Form", "Suffix", "Examples"],
        rows: [
          ["Diminutive", "-inho/-inha", "casa → casinha (small house), filho → filhinho (little son)"],
          ["Diminutive", "-zinho/-zinha", "pão → pãozinho (bread roll), João → Joãozinho"],
          ["Augmentative", "-ão", "livro → livrão (huge book), carro → carrão (big car)"]
        ]
      }
    },
    {
      examples: [
        { ru: "Let's go have a (nice little) coffee." },
        { ru: "Good morning, mummy!" },
        { ru: "Little Pedro is only three years old." },
        { ru: "What an enormous book!" }
      ]
    },
    {
      note: "Diminutives most often express affection and endearment, not just small size. They are very common in informal speech, especially between parents and children."
    }
  ],
  vocabulary: [
    { ru: "book" },
    { ru: "house" },
    { ru: "table" },
    { ru: "man" },
    { ru: "woman" },
    { ru: "cat" },
    { ru: "city" },
    { ru: "animal" },
    { ru: "flower" },
    { ru: "newspaper" },
    { ru: "trip" },
    { ru: "bread" }
  ],
  flashcards: [
    { ru: "book", hint: "masculine, ending -o" },
    { ru: "house", hint: "feminine, ending -a" },
    { ru: "man", hint: "pl.: os homens" },
    { ru: "woman", hint: "pl.: as mulheres" },
    { ru: "city", hint: "feminine, pl.: as cidades" },
    { ru: "animal", hint: "pl.: os animais" },
    { ru: "flower", hint: "feminine, pl.: as flores" },
    { ru: "bread", hint: "pl.: os pães" },
    { ru: "primary school", hint: "feminine, compound" },
    { ru: "weekend", hint: "masculine" },
    { ru: "window", hint: "feminine" },
    { ru: "together with", hint: "preposition" },
    { ru: "language", hint: "feminine" },
    { ru: "world", hint: "masculine" },
    { ru: "night", hint: "feminine" },
    { ru: "organisations", hint: "f., plural" },
    { ru: "origin", hint: "feminine" },
    { ru: "other", hint: "f. pl. of outro" },
    { ru: "country", hint: "masculine, pl.: países" },
    { ru: "therefore", hint: "causal conjunction" },
    { ru: "always", hint: "adverb" },
    { ru: "several, various", hint: "m. plural" },
  ],
  exercises: [
    // === Ex1: Write correct article (12 items) ===
    { question: "Write the correct definite article: ___ coração (heart)" },
    { question: "Write the correct definite article: ___ mão (hand)" },
    { question: "Which definite article does the word «casa» (house) take?", explanation: "Casa is feminine: a casa. Most words ending in -a are feminine." },
    { question: "Write the correct definite article: ___ mulher (woman)" },
    { question: "Write the correct definite article: ___ viagem (trip)" },
    { question: "Which definite article does the word «anel» (ring) take?", explanation: "Anel is masculine: o anel. Words ending in -el are generally masculine." },
    { question: "Write the correct definite article: ___ cidade (city)" },
    { question: "Write the correct definite article: ___ cadeira (chair)" },
    { question: "Which definite article does the word «professor» (teacher) take?", explanation: "Professor is masculine: o professor. Words ending in -or are usually masculine." },
    { question: "Write the correct definite article: ___ cão (dog)" },
    { question: "Write the correct definite article: ___ homem (man)" },
    { question: "Write the correct definite article: ___ automóvel (car)" },

    // === Ex2: Form plural (12 items) ===
    { question: "Form the plural: o irmão → os ___" },
    { question: "Form the plural: o professor → os ___" },
    { question: "Form the plural: o perfil → os ___" },
    { question: "What is the plural of «viagem» (trip)?", explanation: "Words ending in -m form the plural by replacing -m with -ns: viagem → viagens." },
    { question: "Form the plural: a estação → as ___" },
    { question: "Form the plural: a cidade → as ___" },
    { question: "Form the plural: a cor → as ___" },
    { question: "What is the plural of «mulher» (woman)?", explanation: "Words ending in -er form the plural by adding -es: mulher → mulheres." },
    { question: "Form the plural: a opinião → as ___" },
    { question: "Form the plural: o casaco → os ___" },
    { question: "Form the plural: o pai → os ___" },
    { question: "Form the plural: o papel → os ___" },

    // === Ex3: Write feminine (12 items) ===
    { question: "Write the feminine form: o irmão → ___" },
    { question: "Write the feminine form: o professor → ___" },
    { question: "What is the feminine form of «contabilista» (accountant)?", explanation: "Words ending in -ista do not change form: o contabilista → a contabilista. Only the article changes." },
    { question: "Write the feminine form: o pai → ___" },
    { question: "Write the feminine form: o filho → ___" },
    { question: "Write the feminine form: o gato → ___" },
    { question: "What is the feminine form of «cão» (dog)?", explanation: "The word «cão» has an irregular feminine form: a cadela." },
    { question: "Write the feminine form: o homem → ___" },
    { question: "Write the feminine form: o esposo → ___" },
    { question: "Write the feminine form: o tio → ___" },
    { question: "What is the feminine form of «paciente» (patient)?", explanation: "Words ending in -ente do not change form: o paciente → a paciente. Only the article changes." },
    { question: "Write the feminine form: o avô → ___" },

    // === Ex4: Diminutive (12 items) ===
    { question: "Form the diminutive: o irmão → ___" },
    { question: "Form the diminutive: o cão → ___" },
    { question: "Form the diminutive: a filha → ___" },
    { question: "What is the diminutive of «pai» (father)?", explanation: "Pai → paizinho. Words ending in a vowel or diphthong add -zinho: paizinho." },
    { question: "Form the diminutive: o filho → ___" },
    { question: "Form the diminutive: o gato → ___" },
    { question: "Form the diminutive: o cavalo → ___" },
    { question: "Form the diminutive: a casa → ___" },
    { question: "What is the diminutive of «mão» (hand)?", explanation: "Mão → mãozinha. Words ending in -ão add the suffix -zinha/-zinho." },
    { question: "Form the diminutive: a janela → ___" },
    { question: "Form the diminutive: a neta → ___" },
    { question: "Form the diminutive: o avô → ___" },

    // === Ex5: Identify gender (3 items) ===
    {
      question: "Identify the gender of each noun (masculine or feminine):",
      pairs: [
        { left: "cão", right: "masculine (o cão)" },
        { left: "sol", right: "masculine (o sol)" },
        { left: "viagem", right: "feminine (a viagem)" },
        { left: "cidade", right: "feminine (a cidade)" }
      ]
    },
    { question: "Which of these words are masculine? gato, flor, homem, nação", explanation: "Gato (cat) — o gato, homem (man) — o homem. Flor (flower) — a flor, nação (nation) — a nação — are feminine." },
    {
      question: "Identify the gender: masculine (M) or feminine (F):",
      pairs: [
        { left: "avô", right: "M (o avô)" },
        { left: "coração", right: "M (o coração)" },
        { left: "pão", right: "M (o pão)" },
        { left: "coelho", right: "M (o coelho)" }
      ]
    },

    // === Ex6: Fill narrative (family/school) ===
    { question: "Fill in the family text: O meu ___ é professor. (father)" },
    { question: "Fill in the text: A minha mãe é ___. (female teacher)" },
    { question: "Which word fits? Na escola há muitas ___ . (children)", explanation: "Crianças is the plural of criança (child). This word is used in the school context." },
    { question: "Fill in: Na escola trabalham muitos ___. (teachers)" },
    { question: "Fill in: Trabalho cinco ___ por semana. (days)" },
    { question: "Fill in: De ___ levo as crianças à escola. (morning)" },
    { question: "Fill in: Depois do trabalho, volto para ___. (home)" },
    { question: "Fill in: Tenho dois ___. (sons/children)" },

    // === Ex7: Fill plural narrative about Portuguese ===
    { question: "O português é falado em muitos ___. (countries)" },
    { question: "O português é falado em vários ___. (continents)" },
    { question: "Which word fits? Mais de 200 ___ de pessoas falam português. (millions)", explanation: "Milhões is the plural of milhão (million). Milhão → milhões." },
    { question: "O português é falado por muitas ___. (people)" },
    { question: "O português é língua oficial de várias ___. (organisations)" },
    { question: "O português é uma das ___ oficiais das Nações Unidas. (languages)" },

    // === Additional mixed exercises ===
    { question: "Arrange the phrase: «small houses» (plural with diminutive form)." },
    { source: "Brothers and sisters" },
    {
      question: "Match the singular with the plural:",
      pairs: [
        { left: "o irmão", right: "os irmãos" },
        { left: "o papel", right: "os papéis" },
        { left: "a estação", right: "as estações" },
        { left: "a cor", right: "as cores" }
      ]
    },
    { question: "Arrange the sentence: «The women work in the city»." },
    { source: "My father has two sons and one daughter." },
  ],
};
