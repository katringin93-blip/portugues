export const exercises = [
  // Ex1: Fill demonstratives (8 items)
  {
    type: "fill",
    question: "O que é ___? (Что это? — нейтральная форма, рядом со мной)",
    answer: "isto"
  },
  {
    type: "fill",
    question: "___ caneta é minha. (Эта ручка моя — рядом со мной, ж.р.)",
    answer: "Esta"
  },
  {
    type: "choice",
    question: "___ homem ali é o director. (Тот мужчина — директор. — далеко от обоих)",
    options: ["Este", "Esse", "Aquele", "Isto"],
    correct: 2,
    explanation: "«Aquele» — для предмета/человека, далёкого от обоих собеседников."
  },
  {
    type: "fill",
    question: "Não gosto ___ cor. (Мне не нравится этот цвет — de + essa = ...)",
    answer: "dessa"
  },
  {
    type: "fill",
    question: "___ árvores ali são muito altas. (Те деревья очень высокие — далеко, ж.р. мн.ч.)",
    answer: "Aquelas"
  },
  {
    type: "choice",
    question: "Vivemos ___ bairro. (Мы живём в этом районе — em + este = ...)",
    options: ["neste", "nesse", "naquele", "desse"],
    correct: 0,
    explanation: "«Em» + «este» = «neste»: «Vivemos neste bairro.» — район рядом с говорящим."
  },
  {
    type: "fill",
    question: "Trabalho ___ empresa há 5 anos. (Я работаю в этой компании 5 лет — em + esta = ...)",
    answer: "nesta"
  },
  {
    type: "fill",
    question: "Não me lembro ___ senhora. (Я не помню ту даму — de + aquela = ...)",
    answer: "daquela"
  },

  // Ex2: Rewrite with different noun (agreement changes)
  {
    type: "fill",
    question: "Перепишите во мн.ч.: «Esta caneta pertence àquela professora.» → ___",
    answer: ["Estas canetas pertencem àquelas professoras."]
  },
  {
    type: "order",
    question: "Составьте предложение: «Те автомобили старые.» (м.р. мн.ч. — далеко)",
    words: ["Aqueles", "automóveis", "são", "antigos", "."],
    answer: "Aqueles automóveis são antigos."
  },

  // Ex3: Translate to Portuguese (4 items)
  {
    type: "translate",
    source: "Тот мужчина там очень приятный.",
    direction: "ru-pt",
    answer: ["Aquele homem ali é muito simpático."]
  },
  {
    type: "translate",
    source: "Эти люди устали.",
    direction: "ru-pt",
    answer: ["Estas pessoas estão cansadas.", "Essas pessoas estão cansadas."]
  },
  {
    type: "translate",
    source: "Это неправильно. (абстрактно, рядом со мной)",
    direction: "ru-pt",
    answer: ["Isto está errado."]
  },
  {
    type: "translate",
    source: "На этой неделе мы в отпуске.",
    direction: "ru-pt",
    answer: ["Nós estamos de férias esta semana.", "Estamos de férias esta semana."]
  },

  // Ex4: Fill demonstratives (10 items)
  {
    type: "fill",
    question: "___ semana tenho muito trabalho. (На этой неделе у меня много работы — рядом со мной, ж.р.)",
    answer: "Esta"
  },
  {
    type: "choice",
    question: "___ rapazes ali são muito altos. (Те парни там очень высокие — далеко, м.р. мн.ч.)",
    options: ["Estes", "Esses", "Aqueles", "Estas"],
    correct: 2,
    explanation: "«Aqueles» — м.р. мн.ч. для людей/предметов далеко от обоих собеседников."
  },
  {
    type: "fill",
    question: "O que é ___ que tens na mão? (Что это у тебя в руке? — рядом со слушающим, ж.р.)",
    answer: "essa"
  },
  {
    type: "fill",
    question: "___ é muito estranho. (Это очень странно — нейтральная форма, рядом со слушающим)",
    answer: "Isso"
  },
  {
    type: "fill",
    question: "Moro ___ cidade desde 2010. (Я живу в этом городе с 2010 — em + esta = ...)",
    answer: "nesta"
  },
  {
    type: "choice",
    question: "Não quero ___ camisa, prefiro outra. (Мне не нужна эта рубашка — рядом со слушающим, ж.р.)",
    options: ["esta", "essa", "aquela", "isto"],
    correct: 1,
    explanation: "«Essa» — ж.р. ед.ч. для предмета рядом со слушающим."
  },
  {
    type: "fill",
    question: "___ livro é muito interessante. (Эта книга очень интересная — рядом со мной, м.р.)",
    answer: "Este"
  },
  {
    type: "fill",
    question: "___ noite vou ao cinema. (Этим вечером я иду в кино — рядом со мной, ж.р.)",
    answer: "Esta"
  },
  {
    type: "fill",
    question: "O que é ___? (Что это? — нейтральная форма, рядом со мной)",
    answer: "isto"
  },
  {
    type: "fill",
    question: "Não gosto ___ (de + aquilo). (Мне не нравится то.)",
    answer: "daquilo"
  },

  // Ex5: Fill dialogue (10 items)
  {
    type: "choice",
    question: "Диалог в магазине: — Quero ver ___ casaco na montra. (Хочу посмотреть то пальто на витрине — далеко.)",
    options: ["este", "esse", "aquele", "isto"],
    correct: 2,
    explanation: "Пальто на витрине — далеко от обоих, поэтому «aquele»."
  },
  {
    type: "fill",
    question: "Диалог: — E ___ aqui, gosta? (А это здесь, нравится? — рядом со мной, м.р.)",
    answer: "este"
  },
  {
    type: "fill",
    question: "Диалог: — ___ é muito caro para mim. (Это — рядом со слушающим — слишком дорого для меня.)",
    answer: "Esse"
  },
  {
    type: "fill",
    question: "Диалог: — Gosto da cor ___ (de + este). (Мне нравится цвет этого.)",
    answer: "deste"
  },
  {
    type: "choice",
    question: "Диалог: — ___ é o tamanho certo? (Это — рядом со слушающим — правильный размер?)",
    options: ["Este", "Esse", "Aquele", "Isto"],
    correct: 1,
    explanation: "Предмет рядом со слушающим — «esse»."
  },
  {
    type: "fill",
    question: "Диалог: — Prefiro a qualidade ___ (de + aqueles). (Я предпочитаю качество тех.)",
    answer: "daqueles"
  },
  {
    type: "fill",
    question: "Диалог: — O preço ___ (de + aqueles) é alto. (Цена тех — высокая.)",
    answer: "daqueles"
  },
  {
    type: "fill",
    question: "Диалог: — ___ sapatos são confortáveis. (Эти туфли — рядом со мной — удобные. м.р. мн.ч.)",
    answer: "Estes"
  },
  {
    type: "fill",
    question: "Диалог: — Vou levar ___ camisa azul. (Я возьму эту синюю рубашку — рядом со мной, ж.р.)",
    answer: "esta"
  },
  {
    type: "fill",
    question: "Диалог: — Pode pôr ___ (em + essa) caixa, por favor? (Можете положить в эту коробку?)",
    answer: "nessa"
  },

  // Ex6: Fill text about Azores (7 items)
  {
    type: "fill",
    question: "Conhece ___ ilhas? Os Açores? (Знаете эти острова? — рядом со слушающим, ж.р. мн.ч.)",
    answer: "essas"
  },
  {
    type: "fill",
    question: "Sim, ___ região é linda! (Да, этот регион прекрасен! — рядом со слушающим, ж.р.)",
    answer: "essa"
  },
  {
    type: "fill",
    question: "___ flores são típicas dos Açores. (Эти цветы типичны для Азор. — рядом со мной, ж.р. мн.ч.)",
    answer: "Estas"
  },
  {
    type: "fill",
    question: "___ arquipélago tem nove ilhas. (Этот архипелаг состоит из девяти островов — рядом со мной, м.р.)",
    answer: "Este"
  },
  {
    type: "choice",
    question: "___ ano vamos visitar os Açores. (В этом году мы посетим Азоры — рядом со мной, м.р.)",
    options: ["Esse", "Este", "Aquele", "Isto"],
    correct: 1,
    explanation: "«Este ano» — в этом году (рядом со мной во времени)."
  },
  {
    type: "fill",
    question: "O clima ___ (de + estas) ilhas é temperado. (Климат этих островов умеренный.)",
    answer: "destas"
  },
  {
    type: "fill",
    question: "A história ___ (de + este) arquipélago é fascinante. (История этого архипелага увлекательна.)",
    answer: "deste"
  },

  // Additional mixed exercises
  {
    type: "match",
    question: "Соотнесите указательные местоимения с расстоянием:",
    pairs: [
      { left: "este/esta/isto", right: "рядом с говорящим" },
      { left: "esse/essa/isso", right: "рядом со слушающим" },
      { left: "aquele/aquela/aquilo", right: "далеко от обоих" }
    ]
  },
  {
    type: "match",
    question: "Соотнесите слияния с предлогами:",
    pairs: [
      { left: "neste", right: "em + este" },
      { left: "desse", right: "de + esse" },
      { left: "naquele", right: "em + aquele" },
      { left: "disto", right: "de + isto" },
      { left: "nessa", right: "em + essa" }
    ]
  }
];
