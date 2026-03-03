export const exercises = [
  // Ex1: Conjugate ser (10 items)
  {
    type: "fill",
    question: "Os Açores ___ (ser) ilhas no Atlântico. (Азорские острова — острова в Атлантике.)",
    answer: "são"
  },
  {
    type: "fill",
    question: "Estes sapatos ___ (ser) muito caros. (Эти туфли очень дорогие.)",
    answer: "são"
  },
  {
    type: "fill",
    question: "A Joana ___ (ser) professora de inglês. (Жуана — учительница английского.)",
    answer: "é"
  },
  {
    type: "choice",
    question: "Tu ___ (ser) muito simpático. (Ты очень приятный.)",
    options: ["sou", "és", "é", "somos"],
    correct: 1,
    explanation: "Для «tu» форма глагола «ser» — «és»."
  },
  {
    type: "fill",
    question: "Aquele edifício ___ (ser) muito antigo. (То здание очень старое.)",
    answer: "é"
  },
  {
    type: "fill",
    question: "Eu ___ (ser) estudante de medicina. (Я — студент медицины.)",
    answer: "sou"
  },
  {
    type: "fill",
    question: "As praias do Algarve ___ (ser) famosas. (Пляжи Алгарве знамениты.)",
    answer: "são"
  },
  {
    type: "fill",
    question: "Nós ___ (ser) de Lisboa. (Мы из Лиссабона.)",
    answer: "somos"
  },
  {
    type: "choice",
    question: "Tu ___ (ser) de onde? (Откуда ты?)",
    options: ["sou", "és", "é", "são"],
    correct: 1,
    explanation: "Для «tu» форма глагола «ser» — «és»."
  },
  {
    type: "fill",
    question: "O tempo ___ (ser) bom no verão. (Погода хорошая летом.)",
    answer: "é"
  },

  // Ex2: Conjugate estar (10 items)
  {
    type: "fill",
    question: "As crianças ___ (estar) no jardim. (Дети в саду.)",
    answer: "estão"
  },
  {
    type: "fill",
    question: "Nós ___ (estar) cansados da viagem. (Мы устали от путешествия.)",
    answer: "estamos"
  },
  {
    type: "fill",
    question: "Os museus ___ (estar) fechados à segunda-feira. (Музеи закрыты по понедельникам.)",
    answer: "estão"
  },
  {
    type: "choice",
    question: "Tu ___ (estar) bem? (Ты в порядке?)",
    options: ["estou", "estás", "está", "estamos"],
    correct: 1,
    explanation: "Для «tu» форма глагола «estar» — «estás»."
  },
  {
    type: "fill",
    question: "A Maria ___ (estar) doente hoje. (Мария больна сегодня.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "O café ___ (estar) frio. (Кофе холодный.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "Os alunos ___ (estar) na biblioteca. (Ученики в библиотеке.)",
    answer: "estão"
  },
  {
    type: "fill",
    question: "As janelas ___ (estar) abertas. (Окна открыты.)",
    answer: "estão"
  },
  {
    type: "fill",
    question: "Eu ___ (estar) contente com o resultado. (Я доволен результатом.)",
    answer: "estou"
  },
  {
    type: "fill",
    question: "As flores ___ (estar) muito bonitas. (Цветы очень красивые — сейчас.)",
    answer: "estão"
  },

  // Ex3: Choose ser or estar (10 items)
  {
    type: "choice",
    question: "O Pedro ___ doente. (Педро болен — сейчас.)",
    options: ["é", "está", "são", "estão"],
    correct: 1,
    explanation: "Болезнь — временное состояние, поэтому «estar»: «O Pedro está doente.»"
  },
  {
    type: "choice",
    question: "Os pais dela ___ médicos. (Её родители — врачи.)",
    options: ["estão", "são", "é", "está"],
    correct: 1,
    explanation: "Профессия — постоянная характеристика, используется «ser»: «Os pais dela são médicos.»"
  },
  {
    type: "fill",
    question: "Lisboa ___ (ser/estar) a capital de Portugal. (Лиссабон — столица Португалии.)",
    answer: "é"
  },
  {
    type: "fill",
    question: "Hoje ___ (ser/estar) muito calor. (Сегодня очень жарко.)",
    answer: "está"
  },
  {
    type: "choice",
    question: "Tu ___ muito elegante hoje! (Ты сегодня очень элегантный!)",
    options: ["és", "estás", "é", "está"],
    correct: 0,
    explanation: "«És» — хотя «estás» тоже возможно в контексте «сегодня», здесь по учебнику — «és»."
  },
  {
    type: "fill",
    question: "Nós ___ (ser/estar) de acordo. (Мы согласны.)",
    answer: "estamos"
  },
  {
    type: "fill",
    question: "O filme ___ (ser/estar) muito interessante. (Фильм очень интересный — в целом.)",
    answer: "é"
  },
  {
    type: "choice",
    question: "Tu ___ muito magro! (Ты очень худой! — имеется в виду постоянно.)",
    options: ["estás", "és", "sou", "somos"],
    correct: 1,
    explanation: "Постоянная характеристика — «ser»: «Tu és muito magro.»"
  },
  {
    type: "fill",
    question: "A sopa ___ (ser/estar) quente. (Суп горячий — сейчас.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "Os preços ___ (ser/estar) altos. (Цены высокие — в данный момент.)",
    answer: "estão"
  },

  // Ex4: Ser/estar/ficar (14 items)
  {
    type: "fill",
    question: "Os livros ___ (ser/estar/ficar) na estante. (Книги на полке — сейчас.)",
    answer: "estão"
  },
  {
    type: "fill",
    question: "O Porto ___ (ser/estar/ficar) uma cidade bonita. (Порту — красивый город.)",
    answer: "é"
  },
  {
    type: "choice",
    question: "Ela ___ professora. (Она — учительница.)",
    options: ["está", "é", "fica", "estão"],
    correct: 1,
    explanation: "Профессия — постоянная характеристика, используется «ser»."
  },
  {
    type: "fill",
    question: "A universidade ___ (ser/estar/ficar) no centro da cidade. (Университет находится в центре города — постоянно.)",
    answer: "fica"
  },
  {
    type: "fill",
    question: "O tempo ___ (ser/estar/ficar) muito mau hoje. (Погода сегодня очень плохая.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "Nós ___ (ser/estar/ficar) portugueses. (Мы — португальцы.)",
    answer: "somos"
  },
  {
    type: "choice",
    question: "A casa ___ (ser/estar/ficar) vazia neste momento. (Дом сейчас пустой.)",
    options: ["é", "está", "fica", "somos"],
    correct: 1,
    explanation: "Временное состояние — «estar»: «A casa está vazia neste momento.»"
  },
  {
    type: "fill",
    question: "O Pedro ___ (ser/estar/ficar) cansado. (Педро устал — сейчас.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "Os Açores ___ (ser/estar/ficar) ilhas portuguesas. (Азоры — португальские острова.)",
    answer: "são"
  },
  {
    type: "fill",
    question: "Coimbra ___ (ser/estar/ficar) uma cidade universitária. (Коимбра — университетский город.)",
    answer: "é"
  },
  {
    type: "choice",
    question: "Tu ___ muito cansado ultimamente. (Ты очень устал в последнее время.)",
    options: ["és", "estás", "ficas", "és"],
    correct: 1,
    explanation: "Временное состояние усталости — «estar»: «Tu estás muito cansado.»"
  },
  {
    type: "fill",
    question: "O supermercado ___ (ser/estar/ficar) perto da minha casa. (Супермаркет находится рядом с моим домом — постоянно.)",
    answer: "fica"
  },
  {
    type: "fill",
    question: "A estação de comboios ___ (ser/estar/ficar) no fim da rua. (Вокзал находится в конце улицы — постоянно.)",
    answer: "fica"
  },
  {
    type: "choice",
    question: "Tu ___ contente com o resultado? (Ты доволен результатом?)",
    options: ["és", "estás", "ficas", "são"],
    correct: 2,
    explanation: "«Ficar» используется в значении «становиться/быть» с эмоциональным состоянием: «Tu ficas contente.»"
  },

  // Ex5: Ser/estar/ficar (more) (14 items)
  {
    type: "fill",
    question: "O jantar ___ (ser/estar/ficar) pronto. (Ужин готов — сейчас.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "O Tejo ___ (ser/estar/ficar) o maior rio de Portugal. (Тежу — самая большая река Португалии.)",
    answer: "é"
  },
  {
    type: "choice",
    question: "Portugal ___ um país pequeno. (Португалия — маленькая страна.)",
    options: ["está", "é", "fica", "estão"],
    correct: 1,
    explanation: "Постоянная характеристика — «ser»: «Portugal é um país pequeno.»"
  },
  {
    type: "fill",
    question: "A farmácia ___ (ser/estar/ficar) na praça principal. (Аптека находится на главной площади — постоянно.)",
    answer: "fica"
  },
  {
    type: "fill",
    question: "Estas laranjas ___ (ser/estar/ficar) do Algarve. (Эти апельсины из Алгарве.)",
    answer: "são"
  },
  {
    type: "fill",
    question: "Os portugueses ___ (ser/estar/ficar) simpáticos. (Португальцы — приветливые.)",
    answer: "são"
  },
  {
    type: "fill",
    question: "O hotel ___ (ser/estar/ficar) perto da praia. (Отель находится рядом с пляжем — постоянно.)",
    answer: ["é", "fica"]
  },
  {
    type: "fill",
    question: "O fado ___ (ser/estar/ficar) a música tradicional portuguesa. (Фаду — традиционная португальская музыка.)",
    answer: "é"
  },
  {
    type: "fill",
    question: "Ela ___ (ser/estar/ficar) muito nervosa antes do exame. (Она очень нервничает перед экзаменом.)",
    answer: "está"
  },
  {
    type: "fill",
    question: "Os preços ___ (ser/estar/ficar) mais altos este ano. (Цены выше в этом году.)",
    answer: "estão"
  },
  {
    type: "fill",
    question: "O restaurante ___ (ser/estar/ficar) na esquina. (Ресторан находится на углу — постоянно.)",
    answer: ["é", "fica"]
  },
  {
    type: "fill",
    question: "Braga ___ (ser/estar/ficar) no norte de Portugal. (Брага находится на севере Португалии.)",
    answer: "fica"
  },
  {
    type: "fill",
    question: "A praia ___ (ser/estar/ficar) a 5 km daqui. (Пляж находится в 5 км отсюда.)",
    answer: "fica"
  },
  {
    type: "fill",
    question: "O correio ___ (ser/estar/ficar) ali ao lado. (Почта находится рядом — постоянно.)",
    answer: "fica"
  },

  // Ex6: Long dialogue with ser/estar (20 items - as choice/fill mix)
  {
    type: "match",
    question: "Соотнесите случаи использования с глаголом:",
    pairs: [
      { left: "Национальность", right: "ser" },
      { left: "Местоположение предмета", right: "estar" },
      { left: "Профессия", right: "ser" },
      { left: "Самочувствие", right: "estar" },
      { left: "Постоянное расположение", right: "ficar" }
    ]
  },
  {
    type: "choice",
    question: "Диалог: — Como ___ (estar, tu)? — Как ты?",
    options: ["és", "estás", "está", "estou"],
    correct: 1,
    explanation: "Вопрос о самочувствии с «tu»: «Como estás?»"
  },
  {
    type: "fill",
    question: "Диалог: — ___ (estar, eu) bem, obrigado. — Я хорошо, спасибо.",
    answer: "Estou"
  },
  {
    type: "fill",
    question: "Диалог: — O que ___ (ser) isso? — Что это?",
    answer: "é"
  },
  {
    type: "choice",
    question: "Диалог: — ___ (ser/estar) um presente para ti. — Это подарок для тебя.",
    options: ["Está", "É", "Fica", "Estou"],
    correct: 1,
    explanation: "Определение предмета — «ser»: «É um presente para ti.»"
  },
  {
    type: "fill",
    question: "Диалог: — De onde ___ (ser, tu)? — Откуда ты?",
    answer: "és"
  },
  {
    type: "fill",
    question: "Диалог: — ___ (ser, eu) de Coimbra. — Я из Коимбры.",
    answer: "Sou"
  },
  {
    type: "choice",
    question: "Диалог: — Tu ___ (ser/estar) contente? — Ты доволен?",
    options: ["és", "estás", "é", "está"],
    correct: 1,
    explanation: "Эмоциональное состояние — «estar»: «Tu estás contente?»"
  },
  {
    type: "fill",
    question: "Диалог: — Que horas ___ (ser)? — Который час?",
    answer: "são"
  },

  // Ex7: Fill in text about Lisbon (selected items)
  {
    type: "fill",
    question: "Lisboa ___ (ser/estar/ficar) na margem do rio Tejo. (Лиссабон расположен на берегу реки Тежу.)",
    answer: "fica"
  },
  {
    type: "choice",
    question: "A cidade ___ cheia de turistas no verão. (Город полон туристов летом.)",
    options: ["é", "está", "fica", "são"],
    correct: 1,
    explanation: "Временное состояние (летом) — «estar»: «A cidade está cheia de turistas.»"
  },
  {
    type: "fill",
    question: "Lisboa ___ (ser/estar) a maior cidade de Portugal. (Лиссабон — самый большой город Португалии.)",
    answer: "é"
  },
  {
    type: "order",
    question: "Составьте предложение: «Лиссабон расположен на берегу реки Тежу.»",
    words: ["Lisboa", "fica", "na", "margem", "do", "rio", "Tejo", "."],
    answer: "Lisboa fica na margem do rio Tejo."
  },
  {
    type: "translate",
    source: "Достопримечательности Лиссабона очень интересные.",
    direction: "ru-pt",
    answer: ["Os monumentos de Lisboa são muito interessantes.", "As atrações de Lisboa são muito interessantes."]
  }
];
