export const exercises = [
  // Ex1: Form adverbs with -mente (16 items, mixed types)
  {
    type: "fill",
    question: "Образуйте наречие от «lento» (медленный): ___",
    answer: "lentamente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «rápido» (быстрый): ___",
    answer: "rapidamente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «alegre» (весёлый): ___",
    answer: "alegremente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «distinto» (отчётливый): ___",
    answer: "distintamente"
  },
  {
    type: "choice",
    question: "Какое наречие образовано от «claro» (ясный)?",
    options: ["clarmente", "claramente", "claromente", "clarente"],
    correct: 1,
    explanation: "Берём женскую форму «clara» + «-mente» = «claramente»."
  },
  {
    type: "fill",
    question: "Образуйте наречие от «intenso» (интенсивный): ___",
    answer: "intensamente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «infeliz» (несчастный): ___",
    answer: "infelizmente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «divino» (божественный): ___",
    answer: "divinamente"
  },
  {
    type: "choice",
    question: "Какое наречие образовано от «antigo» (старинный)?",
    options: ["antigomente", "antigamente", "antiguamente", "anticamente"],
    correct: 1,
    explanation: "Берём женскую форму «antiga» + «-mente» = «antigamente»."
  },
  {
    type: "fill",
    question: "Образуйте наречие от «novo» (новый): ___",
    answer: "novamente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «eficaz» (эффективный): ___",
    answer: "eficazmente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «delicioso» (восхитительный): ___",
    answer: "deliciosamente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «decidido» (решительный): ___",
    answer: "decididamente"
  },
  {
    type: "fill",
    question: "Образуйте наречие от «habitual» (обычный): ___",
    answer: "habitualmente"
  },
  {
    type: "choice",
    question: "Какое наречие образовано от «simples» (простой)?",
    options: ["simplesamente", "simplesmente", "simplamente", "simplezmente"],
    correct: 1,
    explanation: "«Simples» не меняется по роду: simples + «-mente» = «simplesmente»."
  },
  {
    type: "fill",
    question: "Образуйте наречие от «franco» (откровенный): ___",
    answer: "francamente"
  },

  // Ex2: Match adjective opposites (13 pairs split into 2 match exercises)
  {
    type: "match",
    question: "Соотнесите прилагательные с их антонимами:",
    pairs: [
      { left: "grande", right: "pequeno" },
      { left: "bonito", right: "feio" },
      { left: "novo", right: "velho" },
      { left: "longo", right: "curto" },
      { left: "caro", right: "barato" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите прилагательные с их антонимами:",
    pairs: [
      { left: "quente", right: "frio" },
      { left: "claro", right: "escuro" },
      { left: "gordo", right: "magro" },
      { left: "alto", right: "baixo" },
      { left: "fácil", right: "difícil" }
    ]
  },

  // Ex3: Fill adj/adverb (12 items)
  {
    type: "fill",
    question: "As casas em Lisboa são muito ___. (Дома в Лиссабоне очень дорогие. — ж.р. мн.ч.)",
    answer: "caras"
  },
  {
    type: "fill",
    question: "As ruas do centro são ___. (Улицы центра маленькие/узкие. — ж.р. мн.ч.)",
    answer: "pequenas"
  },
  {
    type: "choice",
    question: "Ele está muito ___ com a notícia. (Он очень счастлив от новости.)",
    options: ["felizes", "feliz", "felizmente", "felicidade"],
    correct: 1,
    explanation: "«Feliz» — прилагательное, не меняется по роду: «Ele está feliz.»"
  },
  {
    type: "fill",
    question: "O comboio é muito ___. (Поезд очень медленный. — м.р. ед.ч.)",
    answer: "lento"
  },
  {
    type: "fill",
    question: "O professor é muito ___. (Учитель очень приятный. — м.р. ед.ч.)",
    answer: "simpático"
  },
  {
    type: "fill",
    question: "As vizinhas são ___. (Соседки неприятные. — ж.р. мн.ч.)",
    answer: "antipáticas"
  },
  {
    type: "fill",
    question: "As noites de inverno são ___. (Зимние ночи короткие. — ж.р. мн.ч.)",
    answer: "curtas"
  },
  {
    type: "choice",
    question: "A criança está muito ___. (Ребёнок очень весёлый.)",
    options: ["alegres", "alegre", "alegremente", "alegria"],
    correct: 1,
    explanation: "«Alegre» — прилагательное, одинаковое для м.р. и ж.р."
  },
  {
    type: "fill",
    question: "O apartamento é ___. (Квартира современная. — м.р. ед.ч.)",
    answer: "moderno"
  },
  {
    type: "fill",
    question: "A rapariga é muito ___. (Девушка очень умная.)",
    answer: "inteligente"
  },
  {
    type: "fill",
    question: "A igreja é muito ___. (Церковь очень старая. — ж.р.)",
    answer: "velha"
  },
  {
    type: "fill",
    question: "A sala está ___. (Комната тёмная. — ж.р.)",
    answer: "escura"
  },

  // Ex4: Fill adj/adverb in text (16 items)
  {
    type: "fill",
    question: "Sintra é uma ___ cidade. (Синтра — красивый город. — ж.р.)",
    answer: "bela"
  },
  {
    type: "fill",
    question: "Tem um ___ palácio. (Там большой дворец. — м.р.)",
    answer: "grande"
  },
  {
    type: "fill",
    question: "O clima é ___. (Климат приятный.)",
    answer: "agradável"
  },
  {
    type: "fill",
    question: "O ar é ___. (Воздух свежий. — м.р.)",
    answer: "fresco"
  },
  {
    type: "choice",
    question: "As praias têm ___ extensões de areia. (Пляжи имеют длинные полосы песка. — ж.р. мн.ч.)",
    options: ["longo", "longa", "longos", "longas"],
    correct: 3,
    explanation: "«Extensões» — ж.р. мн.ч., поэтому «longas»."
  },
  {
    type: "fill",
    question: "O tempo passa ___. (Время проходит быстро. — наречие)",
    answer: "depressa"
  },
  {
    type: "fill",
    question: "A fadiga ___ desaparece. (Накопленная усталость исчезает. — ж.р.)",
    answer: "acumulada"
  },
  {
    type: "fill",
    question: "As ruas ___ são encantadoras. (Старинные улицы очаровательны. — ж.р. мн.ч.)",
    answer: "antigas"
  },
  {
    type: "fill",
    question: "A vila é ___. (Деревня очаровательная. — ж.р.)",
    answer: "encantadora"
  },
  {
    type: "fill",
    question: "Ficamos ___. (Мы устали. — м.р. мн.ч.)",
    answer: "cansados"
  },
  {
    type: "fill",
    question: "Comemos num restaurante ___. (Мы ели в типичном ресторане. — м.р.)",
    answer: "típico"
  },
  {
    type: "fill",
    question: "A comida era ___ boa. (Еда была особенно хорошей. — наречие)",
    answer: "especialmente"
  },
  {
    type: "fill",
    question: "O pão era ___. (Хлеб был домашний. — м.р.)",
    answer: "caseiro"
  },
  {
    type: "fill",
    question: "A fruta era ___. (Фрукты были свежие. — ж.р.)",
    answer: "fresca"
  },
  {
    type: "fill",
    question: "Os produtos eram ___ produzidos. (Продукты были произведены на месте. — наречие)",
    answer: "localmente"
  },
  {
    type: "choice",
    question: "As visitas foram muito ___. (Посещения были очень интересными. — ж.р. мн.ч.)",
    options: ["interessante", "interessantes", "interessantemente", "interessanta"],
    correct: 1,
    explanation: "«Visitas» — ж.р. мн.ч., прилагательное на «-e» получает «-s»: «interessantes»."
  },

  // Ex5: Translate sentences (selected items)
  {
    type: "translate",
    source: "Португальские города очень красивые.",
    direction: "ru-pt",
    answer: ["As cidades portuguesas são muito bonitas.", "As cidades portuguesas são muito belas."]
  },
  {
    type: "translate",
    source: "Она говорит быстро и чётко.",
    direction: "ru-pt",
    answer: ["Ela fala rapidamente e claramente.", "Ela fala depressa e claramente."]
  },
  {
    type: "translate",
    source: "Старые дома в Лиссабоне красивые.",
    direction: "ru-pt",
    answer: ["As casas velhas em Lisboa são bonitas.", "As casas antigas em Lisboa são bonitas."]
  },

  // Ex6: Fill adj/adverb in text about Portuguese family (15 items)
  {
    type: "fill",
    question: "A família é muito ___ em Portugal. (Семья очень важна в Португалии.)",
    answer: "importante"
  },
  {
    type: "fill",
    question: "A família ___ é grande. (Португальская семья большая. — ж.р.)",
    answer: "portuguesa"
  },
  {
    type: "fill",
    question: "É ___ na sociedade. (Она фундаментальна в обществе.)",
    answer: "fundamental"
  },
  {
    type: "fill",
    question: "Os laços ___ são fortes. (Семейные связи крепкие. — м.р. мн.ч.)",
    answer: "familiares"
  },
  {
    type: "fill",
    question: "Os idosos são muito ___. (Пожилых людей очень ценят. — м.р. мн.ч.)",
    answer: "valorizados"
  },
  {
    type: "choice",
    question: "___, a família almoça junta ao domingo. (Традиционно семья обедает вместе по воскресеньям.)",
    options: ["Tradicional", "Tradicionalmente", "Tradição", "Tradicionais"],
    correct: 1,
    explanation: "Здесь нужно наречие «tradicionalmente» (традиционно), а не прилагательное."
  },
  {
    type: "fill",
    question: "O grupo familiar é ___. (Семейная группа сплочённая. — м.р.)",
    answer: "unido"
  },
  {
    type: "fill",
    question: "O ambiente é ___. (Атмосфера гостеприимная. — м.р.)",
    answer: "acolhedor"
  },
  {
    type: "fill",
    question: "Uma família ___ portuguesa tem muitos membros. (Типичная португальская семья имеет много членов. — ж.р.)",
    answer: "típica"
  },
  {
    type: "fill",
    question: "Os laços são ___. (Связи тесные. — м.р. мн.ч.)",
    answer: "estreitos"
  },
  {
    type: "fill",
    question: "Visitam-se ___. (Они навещают друг друга регулярно. — наречие)",
    answer: "regularmente"
  },
  {
    type: "fill",
    question: "___ nos feriados. (Особенно в праздники. — наречие)",
    answer: "Especialmente"
  },
  {
    type: "fill",
    question: "É ___ verdade no Natal. (Это особенно верно на Рождество. — наречие)",
    answer: "particularmente"
  },
  {
    type: "fill",
    question: "O jantar ___ é importante. (Семейный ужин важен. — м.р.)",
    answer: "familiar"
  },
  {
    type: "choice",
    question: "Os jovens são mais ___. (Молодые люди более независимые. — м.р. мн.ч.)",
    options: ["independente", "independentes", "independentemente", "independência"],
    correct: 1,
    explanation: "Прилагательное на «-e» во мн.ч. получает «-s»: «independentes»."
  }
];
