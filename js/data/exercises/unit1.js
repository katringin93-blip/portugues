export const exercises = [
  // === Ex1: Write correct article (12 items) ===
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ coração (сердце)",
    answer: "o"
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ mão (рука)",
    answer: "a"
  },
  {
    type: "choice",
    question: "Какой определённый артикль у слова «casa» (дом)?",
    options: ["o", "a", "os", "as"],
    correct: 1,
    explanation: "Casa — женского рода: a casa. Большинство слов на -a — женского рода."
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ mulher (женщина)",
    answer: "a"
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ viagem (путешествие)",
    answer: "a"
  },
  {
    type: "choice",
    question: "Какой определённый артикль у слова «anel» (кольцо)?",
    options: ["a", "o", "as", "os"],
    correct: 1,
    explanation: "Anel — мужского рода: o anel. Слова на -el, как правило, мужского рода."
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ cidade (город)",
    answer: "a"
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ cadeira (стул)",
    answer: "a"
  },
  {
    type: "choice",
    question: "Какой определённый артикль у слова «professor» (преподаватель)?",
    options: ["a", "os", "o", "as"],
    correct: 2,
    explanation: "Professor — мужского рода: o professor. Слова на -or обычно мужского рода."
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ cão (собака)",
    answer: "o"
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ homem (мужчина)",
    answer: "o"
  },
  {
    type: "fill",
    question: "Напишите правильный определённый артикль: ___ automóvel (автомобиль)",
    answer: "o"
  },

  // === Ex2: Form plural (12 items) ===
  {
    type: "fill",
    question: "Образуйте множественное число: o irmão → os ___",
    answer: "irmãos"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: o professor → os ___",
    answer: "professores"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: o perfil → os ___",
    answer: "perfis"
  },
  {
    type: "choice",
    question: "Какое множественное число у слова «viagem» (путешествие)?",
    options: ["viagems", "viajens", "viagens", "viagenes"],
    correct: 2,
    explanation: "Слова на -m образуют множественное число заменой -m на -ns: viagem → viagens."
  },
  {
    type: "fill",
    question: "Образуйте множественное число: a estação → as ___",
    answer: "estações"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: a cidade → as ___",
    answer: "cidades"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: a cor → as ___",
    answer: "cores"
  },
  {
    type: "choice",
    question: "Какое множественное число у слова «mulher» (женщина)?",
    options: ["mulhers", "mulheres", "mulheras", "mulherões"],
    correct: 1,
    explanation: "Слова на -er образуют множественное число добавлением -es: mulher → mulheres."
  },
  {
    type: "fill",
    question: "Образуйте множественное число: a opinião → as ___",
    answer: "opiniões"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: o casaco → os ___",
    answer: "casacos"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: o pai → os ___",
    answer: "pais"
  },
  {
    type: "fill",
    question: "Образуйте множественное число: o papel → os ___",
    answer: "papéis"
  },

  // === Ex3: Write feminine (12 items) ===
  {
    type: "fill",
    question: "Напишите форму женского рода: o irmão → ___",
    answer: "a irmã"
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o professor → ___",
    answer: "a professora"
  },
  {
    type: "choice",
    question: "Какая форма женского рода у слова «contabilista» (бухгалтер)?",
    options: ["a contabilisto", "a contabilista", "a contabileira", "a contabiléra"],
    correct: 1,
    explanation: "Слова на -ista не меняют форму: o contabilista → a contabilista. Меняется только артикль."
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o pai → ___",
    answer: "a mãe"
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o filho → ___",
    answer: "a filha"
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o gato → ___",
    answer: "a gata"
  },
  {
    type: "choice",
    question: "Какая форма женского рода у слова «cão» (собака)?",
    options: ["a cãa", "a cã", "a cadela", "a cãoa"],
    correct: 2,
    explanation: "У слова «cão» нерегулярная форма женского рода: a cadela."
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o homem → ___",
    answer: "a mulher"
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o esposo → ___",
    answer: "a esposa"
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o tio → ___",
    answer: "a tia"
  },
  {
    type: "choice",
    question: "Какая форма женского рода у слова «paciente» (пациент)?",
    options: ["a pacienta", "a pacienteira", "a paciente", "a pacientesa"],
    correct: 2,
    explanation: "Слова на -ente не меняют форму: o paciente → a paciente. Меняется только артикль."
  },
  {
    type: "fill",
    question: "Напишите форму женского рода: o avô → ___",
    answer: "a avó"
  },

  // === Ex4: Diminutive (12 items, mixed types) ===
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: o irmão → ___",
    answer: "o irmãozinho"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: o cão → ___",
    answer: "o cãozinho"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: a filha → ___",
    answer: "a filhinha"
  },
  {
    type: "choice",
    question: "Какая уменьшительная форма у слова «pai» (отец)?",
    options: ["o paiinho", "o painho", "o paizinho", "o paísinho"],
    correct: 2,
    explanation: "Pai → paizinho. Слова, оканчивающиеся на гласную или дифтонг, добавляют -zinho: paizinho."
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: o filho → ___",
    answer: "o filhinho"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: o gato → ___",
    answer: "o gatinho"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: o cavalo → ___",
    answer: "o cavalinho"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: a casa → ___",
    answer: "a casinha"
  },
  {
    type: "choice",
    question: "Какая уменьшительная форма у слова «mão» (рука)?",
    options: ["a mãoinha", "a mãozinha", "a mãosinha", "a mãzinha"],
    correct: 1,
    explanation: "Mão → mãozinha. Слова на -ão добавляют суффикс -zinha/-zinho."
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: a janela → ___",
    answer: "a janelinha"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: a neta → ___",
    answer: "a netinha"
  },
  {
    type: "fill",
    question: "Образуйте уменьшительную форму: o avô → ___",
    answer: "o avôzinho"
  },

  // === Ex5: Identify masculine (choice/match) ===
  {
    type: "match",
    question: "Определите род существительных (мужской или женский):",
    pairs: [
      { left: "cão", right: "мужской (o cão)" },
      { left: "sol", right: "мужской (o sol)" },
      { left: "viagem", right: "женский (a viagem)" },
      { left: "cidade", right: "женский (a cidade)" }
    ]
  },
  {
    type: "choice",
    question: "Какие из этих слов мужского рода? gato, flor, homem, nação",
    options: ["gato, flor", "gato, homem", "flor, nação", "homem, nação"],
    correct: 1,
    explanation: "Gato (кот) — o gato, homem (мужчина) — o homem. Flor (цветок) — a flor, nação (нация) — a nação — женского рода."
  },
  {
    type: "match",
    question: "Определите род: мужской (M) или женский (F):",
    pairs: [
      { left: "avô", right: "M (o avô)" },
      { left: "coração", right: "M (o coração)" },
      { left: "pão", right: "M (o pão)" },
      { left: "coelho", right: "M (o coelho)" }
    ]
  },

  // === Ex6: Fill narrative (family/school) ===
  {
    type: "fill",
    question: "Заполните текст о семье: O meu ___ é professor. (отец)",
    answer: "pai"
  },
  {
    type: "fill",
    question: "Заполните текст: A minha mãe é ___. (учительница)",
    answer: "professora"
  },
  {
    type: "choice",
    question: "Какое слово подходит? Na escola há muitas ___ . (дети)",
    options: ["crianças", "criança", "filhos", "pessoas"],
    correct: 0,
    explanation: "Crianças — множественное число от criança (ребёнок). В контексте школы используется именно это слово."
  },
  {
    type: "fill",
    question: "Заполните: Na escola trabalham muitos ___. (преподаватели)",
    answer: "professores"
  },
  {
    type: "fill",
    question: "Заполните: Trabalho cinco ___ por semana. (дни)",
    answer: "dias"
  },
  {
    type: "fill",
    question: "Заполните: De ___ levo as crianças à escola. (утро)",
    answer: "manhã"
  },
  {
    type: "fill",
    question: "Заполните: Depois do trabalho, volto para ___. (дом)",
    answer: "casa"
  },
  {
    type: "fill",
    question: "Заполните: Tenho dois ___. (сыновья/дети)",
    answer: "filhos"
  },

  // === Ex7: Fill plural narrative about Portuguese language ===
  {
    type: "fill",
    question: "O português é falado em muitos ___. (страны)",
    answer: "países"
  },
  {
    type: "fill",
    question: "O português é falado em vários ___. (континенты)",
    answer: "continentes"
  },
  {
    type: "choice",
    question: "Какое слово подходит? Mais de 200 ___ de pessoas falam português. (миллионы)",
    options: ["milhão", "milhares", "milhões", "milhas"],
    correct: 2,
    explanation: "Milhões — множественное число от milhão (миллион). Milhão → milhões."
  },
  {
    type: "fill",
    question: "O português é falado por muitas ___. (люди)",
    answer: "pessoas"
  },
  {
    type: "fill",
    question: "O português é língua oficial de várias ___. (организации)",
    answer: "organizações"
  },
  {
    type: "fill",
    question: "O português é uma das ___ oficiais das Nações Unidas. (языки)",
    answer: "línguas"
  },

  // === Additional mixed exercises ===
  {
    type: "order",
    question: "Составьте словосочетание: «маленькие дома» (множ. ч. с уменьш. формой).",
    words: ["pequenas", "as", "casinhas"],
    answer: "as casinhas pequenas"
  },
  {
    type: "translate",
    source: "Братья и сёстры",
    direction: "ru-pt",
    answer: ["Os irmãos e as irmãs"]
  },
  {
    type: "match",
    question: "Соотнесите единственное число с множественным:",
    pairs: [
      { left: "o irmão", right: "os irmãos" },
      { left: "o papel", right: "os papéis" },
      { left: "a estação", right: "as estações" },
      { left: "a cor", right: "as cores" }
    ]
  },
  {
    type: "order",
    question: "Составьте предложение: «Женщины работают в городе».",
    words: ["trabalham", "na", "As", "mulheres", "cidade"],
    answer: "As mulheres trabalham na cidade"
  },
  {
    type: "translate",
    source: "У моего отца два сына и одна дочь.",
    direction: "ru-pt",
    answer: ["O meu pai tem dois filhos e uma filha."]
  }
];
