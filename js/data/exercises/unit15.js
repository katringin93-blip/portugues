export const exercises = [
  // === Existing exercises ===
  {
    type: "choice",
    question: "___ casa é grande. (Наш дом)",
    options: ["O nosso", "A nossa", "Os nossos", "As nossas"],
    correct: 1,
    explanation: "Casa — женского рода ед.ч., поэтому: «A nossa casa»."
  },
  {
    type: "fill",
    question: "Мои книги: ___ ___ livros (артикль + притяжательное)",
    answer: ["os", "meus"]
  },
  {
    type: "translate",
    source: "Где твой мобильный?",
    direction: "ru-pt",
    answer: ["Onde está o teu telemóvel?", "Onde é que está o teu telemóvel?"]
  },
  {
    type: "choice",
    question: "Как уточнить, что книга принадлежит ей (а не ему)?",
    options: ["o seu livro", "o livro sua", "o livro dela", "a livro dela"],
    correct: 2,
    explanation: "Для уточнения используется конструкция «o livro dela» (её книга)."
  },
  {
    type: "fill",
    question: "Их дом: a casa ___.",
    answer: "deles"
  },
  // === New exercises: Possessive Forms ===
  {
    type: "match",
    question: "Соотнесите притяжательные местоимения (муж.р. ед.ч.):",
    pairs: [
      ["мой", "meu"],
      ["твой", "teu"],
      ["его/её/Ваш", "seu"],
      ["наш", "nosso"],
      ["ваш (мн.ч.)", "vosso"]
    ]
  },
  {
    type: "choice",
    question: "Какое притяжательное для «Мои подруги»?",
    options: ["meus amigas", "minhas amigas", "minha amigas", "meus amigos"],
    correct: 1,
    explanation: "«Amigas» — женский род мн.ч., поэтому: «minhas amigas» (as minhas amigas)."
  },
  {
    type: "fill",
    question: "Наша машина: ___ ___ carro (артикль + притяжательное)",
    answer: ["o", "nosso"]
  },
  {
    type: "fill",
    question: "Твои дети: ___ ___ filhos (артикль + притяжательное)",
    answer: ["os", "teus"]
  },
  {
    type: "choice",
    question: "Как правильно: «моя сестра»?",
    options: ["o meu irmã", "a minha irmã", "a meu irmã", "o minha irmã"],
    correct: 1,
    explanation: "«Irmã» — женский род, поэтому артикль и притяжательное в женском роде: «a minha irmã»."
  },
  // === Agreement of possessives ===
  {
    type: "fill",
    question: "Её сумки: as ___ malas (притяжательное, жен.р. мн.ч.)",
    answer: "suas"
  },
  {
    type: "translate",
    source: "Наши друзья живут в Лиссабоне.",
    direction: "ru-pt",
    answer: ["Os nossos amigos vivem em Lisboa.", "Os nossos amigos moram em Lisboa."]
  },
  {
    type: "choice",
    question: "«___ camisas são bonitas.» (Его рубашки красивые.)",
    options: ["Os seus", "As suas", "As seus", "Os suas"],
    correct: 1,
    explanation: "«Camisas» — жен.р. мн.ч. Притяжательное согласуется с объектом владения: «As suas camisas»."
  },
  {
    type: "fill",
    question: "Ваша квартира: ___ ___ apartamento (артикль + притяжательное)",
    answer: ["o", "vosso"]
  },
  {
    type: "translate",
    source: "Мой брат старше меня.",
    direction: "ru-pt",
    answer: ["O meu irmão é mais velho do que eu."]
  },
  // === Article with possessives ===
  {
    type: "choice",
    question: "В европейском португальском перед притяжательным обычно ставится:",
    options: ["Ничего", "Определённый артикль", "Неопределённый артикль", "Предлог «de»"],
    correct: 1,
    explanation: "В EP обычно ставится определённый артикль: «O meu livro» (а не просто «meu livro», как в BP)."
  },
  {
    type: "choice",
    question: "Когда артикль перед притяжательным НЕ ставится?",
    options: ["С названиями стран", "В обращениях: «Meu amigo!»", "С мн.ч.", "Артикль ставится всегда"],
    correct: 1,
    explanation: "В прямых обращениях артикль опускается: «Meu amigo!», «Minha senhora!»"
  },
  {
    type: "fill",
    question: "Дорогой мой друг! (обращение): ___ amigo!",
    answer: "Meu"
  },
  // === Possessives with family members ===
  {
    type: "translate",
    source: "Моя мать — учительница.",
    direction: "ru-pt",
    answer: ["A minha mãe é professora."]
  },
  {
    type: "fill",
    question: "Его отец работает в банке: ___ ___ pai trabalha num banco.",
    answer: ["O", "seu"]
  },
  {
    type: "choice",
    question: "Как различить «seu» = его, её или Ваш?",
    options: ["По контексту", "Используя dele/dela/de vocês", "Оба варианта", "Нельзя различить"],
    correct: 2,
    explanation: "«Seu» может означать его/её/Ваш. Для уточнения добавляют dele/dela: «o livro dele» (его книга)."
  },
  // === dele/dela/deles/delas constructions ===
  {
    type: "fill",
    question: "Её дети: os filhos ___.",
    answer: "dela"
  },
  {
    type: "translate",
    source: "Их (жен.) дом очень большой.",
    direction: "ru-pt",
    answer: ["A casa delas é muito grande."]
  },
  {
    type: "choice",
    question: "«O carro ___ é novo.» (Его машина — новая.)",
    options: ["seu", "dele", "Оба варианта правильные", "del"],
    correct: 2,
    explanation: "Оба варианта допустимы: «O seu carro é novo» или «O carro dele é novo». Второй — более однозначен."
  },
  {
    type: "fill",
    question: "Их (муж.) проблема: o problema ___.",
    answer: "deles"
  },
  {
    type: "translate",
    source: "Её подруга зовётся Ана.",
    direction: "ru-pt",
    answer: ["A amiga dela chama-se Ana.", "A sua amiga chama-se Ana."]
  },
  // === Possessive pronouns (without noun) ===
  {
    type: "choice",
    question: "«Este livro é ___.» (Эта книга — моя.)",
    options: ["meu", "o meu", "minha", "a minha"],
    correct: 0,
    explanation: "После «ser» притяжательное может стоять без артикля: «Este livro é meu.»"
  },
  {
    type: "fill",
    question: "Эта сумка — твоя: Esta mala é ___.",
    answer: "tua"
  },
  {
    type: "translate",
    source: "Это моё, а то — твоё.",
    direction: "ru-pt",
    answer: ["Isto é meu e aquilo é teu.", "Isto é o meu e aquilo é o teu."]
  },
  {
    type: "choice",
    question: "«De quem é este carro? — É ___.» (наш)",
    options: ["nosso", "o nosso", "Оба варианта", "nós"],
    correct: 2,
    explanation: "После «ser» оба варианта допустимы: «É nosso» или «É o nosso»."
  },
  // === Mixed practice ===
  {
    type: "order",
    question: "Составьте предложение: «Моя собака больше, чем твоя.»",
    words: ["O", "meu", "cão", "é", "maior", "do", "que", "o", "teu"],
    answer: "O meu cão é maior do que o teu."
  },
  {
    type: "translate",
    source: "Где ваши (мн.ч.) ключи?",
    direction: "ru-pt",
    answer: ["Onde estão as vossas chaves?", "Onde é que estão as vossas chaves?"]
  },
  {
    type: "fill",
    question: "Это не мои очки, это его: Estes óculos não são ___, são dele.",
    answer: "meus"
  },
  {
    type: "choice",
    question: "Как правильно сказать «ваш» в формальном обращении (você)?",
    options: ["teu", "vosso", "seu", "meu"],
    correct: 2,
    explanation: "Для «você» (формальное «вы») используется «seu/sua»: «O seu nome, por favor?»"
  },
  {
    type: "translate",
    source: "Наш дом находится рядом с вашим.",
    direction: "ru-pt",
    answer: ["A nossa casa fica perto da vossa.", "A nossa casa é perto da vossa."]
  },
  {
    type: "fill",
    question: "Каждый со своей семьёй: Cada um com ___ ___ família.",
    answer: ["a", "sua"]
  },
  {
    type: "order",
    question: "Составьте предложение: «Его жена работает в больнице.»",
    words: ["A", "mulher", "dele", "trabalha", "no", "hospital"],
    answer: "A mulher dele trabalha no hospital."
  }
];
