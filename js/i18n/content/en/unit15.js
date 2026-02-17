export default {
  title: "Possessive pronouns and adjectives",
  description: "Forms and usage of possessive pronouns in European Portuguese",
  theory: [
    {
      heading: "Possessive forms",
      text: "In Portuguese, possessive forms agree in gender and number with the object being possessed (not with the possessor). In European Portuguese, a definite article is placed before the possessive."
    },
    {
      table: {
        headers: ["Owner", "Masc. sg.", "Fem. sg.", "Masc. pl.", "Fem. pl."]
      }
    },
    {
      heading: "Clarifying \u00abseu/sua\u00bb",
      text: "Since \u00abseu/sua\u00bb can mean \u00abhis\u00bb, \u00abher\u00bb, \u00abyour\u00bb (formal), or \u00abtheir\u00bb, a construction with \u00abdele/dela/deles/delas\u00bb is used for clarification."
    },
    {
      table: {
        headers: ["Construction", "Meaning"],
        rows: [
          ["o livro dele", "his book"],
          ["o livro dela", "her book"],
          ["o livro deles", "their book (masc.)"],
          ["o livro delas", "their book (fem.)"]
        ]
      }
    },
    {
      examples: [
        { ru: "My car is blue." },
        { ru: "Your house is beautiful." },
        { ru: "Our children study in Coimbra." },
        { ru: "Her book is on the table." }
      ]
    },
    {
      note: "In European Portuguese, the article before the possessive is mandatory: \u00abo meu livro\u00bb (my book), not just \u00abmeu livro\u00bb (as in Brazilian). Exception \u2014 exclamations: \u00abMeu Deus!\u00bb (My God!)."
    }
  ],
  vocabulary: [
    { ru: "my" },
    { ru: "your (informal)" },
    { ru: "his / her / your (formal)" },
    { ru: "our" },
    { ru: "his / her (clarified)" },
    { ru: "their (masc. / fem.)" },
    { ru: "family" },
    { ru: "parents" },
    { ru: "brother" },
    { ru: "sister" }
  ],
  flashcards: [
    { ru: "my", hint: "agrees with the object" },
    { ru: "your (informal)", hint: "informal address" },
    { ru: "his/her/your (formal)", hint: "can be ambiguous" },
    { ru: "our", hint: "pl.: os nossos / as nossas" },
    { ru: "his / her (clarified)", hint: "placed after the noun" },
    { ru: "family", hint: "feminine" },
    { ru: "brother", hint: "pl.: os irm\u00e3os" },
    { ru: "sister", hint: "pl.: as irm\u00e3s" }
  ],
  exercises: [
    // 1. choice: ___ casa é grande (Our house)
    { question: "___ casa é grande. (Our house)", explanation: "Casa is feminine singular, so: «A nossa casa»." },
    // 2. fill: My books
    { question: "My books: ___ ___ livros (article + possessive)" },
    // 3. translate ru-pt: Where is your mobile phone?
    { source: "Where is your mobile phone?" },
    // 4. choice: how to specify the book belongs to her
    { question: "How do you specify that the book belongs to her (not him)?", explanation: "To clarify, the construction «o livro dela» (her book) is used." },
    // 5. fill: Their house
    { question: "Their house: a casa ___." },
    // 6. match: possessive pronouns (masc. sg.)
    { question: "Match the possessive pronouns (masc. sg.):", pairs: [["my", "meu"], ["your", "teu"], ["his/her/your (formal)", "seu"], ["our", "nosso"], ["your (pl.)", "vosso"]] },
    // 7. choice: possessive for «My (female) friends»
    { question: "Which possessive for «My (female) friends»?", explanation: "«Amigas» is feminine plural, so: «minhas amigas» (as minhas amigas)." },
    // 8. fill: Our car
    { question: "Our car: ___ ___ carro (article + possessive)" },
    // 9. fill: Your children
    { question: "Your children: ___ ___ filhos (article + possessive)" },
    // 10. choice: how to say «my sister»
    { question: "How do you correctly say «my sister»?", explanation: "«Irmã» is feminine, so the article and possessive are in the feminine form: «a minha irmã»." },
    // 11. fill: Her bags
    { question: "Her bags: as ___ malas (possessive, fem. pl.)" },
    // 12. translate ru-pt: Our friends live in Lisbon
    { source: "Our friends live in Lisbon." },
    // 13. choice: ___ camisas são bonitas (His shirts are beautiful)
    { question: "«___ camisas são bonitas.» (His shirts are beautiful.)", explanation: "«Camisas» is fem. pl. The possessive agrees with the possessed object: «As suas camisas»." },
    // 14. fill: Your (pl.) apartment
    { question: "Your (pl.) apartment: ___ ___ apartamento (article + possessive)" },
    // 15. translate ru-pt: My brother is older than me
    { source: "My brother is older than me." },
    // 16. choice: in European Portuguese, before the possessive
    { question: "In European Portuguese, before the possessive, you usually place:", options: ["Nothing", "Definite article", "Indefinite article", "Preposition «de»"], explanation: "In EP, the definite article is usually placed: «O meu livro» (not just «meu livro», as in BP)." },
    // 17. choice: when is the article NOT used before the possessive
    { question: "When is the article NOT used before the possessive?", options: ["With country names", "In direct address: «Meu amigo!»", "With plural", "The article is always used"], explanation: "In direct address, the article is omitted: «Meu amigo!», «Minha senhora!»" },
    // 18. fill: My dear friend! (address)
    { question: "My dear friend! (direct address): ___ amigo!" },
    // 19. translate ru-pt: My mother is a teacher
    { source: "My mother is a teacher." },
    // 20. fill: His father works at a bank
    { question: "His father works at a bank: ___ ___ pai trabalha num banco." },
    // 21. choice: how to distinguish «seu» = his, her, or your
    { question: "How do you distinguish «seu» = his, her, or your?", options: ["By context", "Using dele/dela/de vocês", "Both options", "It cannot be distinguished"], explanation: "«Seu» can mean his/her/your. To clarify, add dele/dela: «o livro dele» (his book)." },
    // 22. fill: Her children
    { question: "Her children: os filhos ___." },
    // 23. translate ru-pt: Their (fem.) house is very big
    { source: "Their (fem.) house is very big." },
    // 24. choice: O carro ___ é novo (His car is new)
    { question: "«O carro ___ é novo.» (His car is new.)", options: ["seu", "dele", "Both options are correct", "del"], explanation: "Both options are acceptable: «O seu carro é novo» or «O carro dele é novo». The second is more unambiguous." },
    // 25. fill: Their (masc.) problem
    { question: "Their (masc.) problem: o problema ___." },
    // 26. translate ru-pt: Her friend is called Ana
    { source: "Her friend is called Ana." },
    // 27. choice: Este livro é ___ (This book is mine)
    { question: "«Este livro é ___.» (This book is mine.)", explanation: "After «ser», the possessive can stand without an article: «Este livro é meu.»" },
    // 28. fill: This bag is yours
    { question: "This bag is yours: Esta mala é ___." },
    // 29. translate ru-pt: This is mine and that is yours
    { source: "This is mine and that is yours." },
    // 30. choice: De quem é este carro? — É ___ (ours)
    { question: "«De quem é este carro? — É ___.» (ours)", options: ["nosso", "o nosso", "Both options", "nós"], explanation: "After «ser», both options are acceptable: «É nosso» or «É o nosso»." },
    // 31. order: My dog is bigger than yours
    { question: "Form a sentence: «My dog is bigger than yours.»" },
    // 32. translate ru-pt: Where are your (pl.) keys?
    { source: "Where are your (pl.) keys?" },
    // 33. fill: These are not my glasses, they are his
    { question: "These are not my glasses, they are his: Estes óculos não são ___, são dele." },
    // 34. choice: how to say «your» in formal address (você)
    { question: "How do you correctly say «your» in formal address (você)?", explanation: "For «você» (formal «you»), «seu/sua» is used: «O seu nome, por favor?»" },
    // 35. translate ru-pt: Our house is near yours
    { source: "Our house is near yours." },
    // 36. fill: Everyone with their family
    { question: "Everyone with their family: Cada um com ___ ___ família." },
    // 37. order: His wife works at the hospital
    { question: "Form a sentence: «His wife works at the hospital.»" }
  ]
};
