export const exercises = [
  // === Ex1: Добавьте косвенное местоимение ===
  {
    type: "fill",
    question: "Добавьте косвенное местоимение: Quero ___ (a ela) um presente. (подарить ей)",
    answer: "oferecer-lhe"
  },
  {
    type: "fill",
    question: "O pai ___ (a eles) que não podem sair. (говорит им)",
    answer: "diz-lhes"
  },
  {
    type: "fill",
    question: "Vou ___ (a ele) o meu carro. (продать ему)",
    answer: "vender-lhe"
  },
  {
    type: "fill",
    question: "A mãe ___ (a ela) o almoço. (готовит ей обед)",
    answer: "faz-lhe"
  },
  {
    type: "choice",
    question: "Замените «a nós»: Ele traz ___ (a nós) flores.",
    options: ["traz-lhes", "traz-nos", "traz-lhe", "traz-vos"],
    correct: 1,
    explanation: "«A nós» заменяется на «nos»: traz-nos."
  },
  {
    type: "fill",
    question: "A avó, que ___ (a eles) presentes, é muito generosa. (бабушка, которая им даёт подарки — проклиза после «que»)",
    answer: "lhes dá"
  },
  {
    type: "fill",
    question: "A professora ___ (a ele) uma história. (читает ему)",
    answer: "lê-lhe"
  },
  {
    type: "fill",
    question: "Ela ___ (a eles) bolos. (делает им)",
    answer: "faz-lhes"
  },
  {
    type: "fill",
    question: "Ele ___ (a vocês) sapatos novos. (покупает вам)",
    answer: "compra-vos"
  },
  {
    type: "fill",
    question: "O professor ___ (a ela) português. (преподаёт ей)",
    answer: "ensina-lhe"
  },
  // === Ex2: Контракция прямого + косвенного местоимения ===
  {
    type: "choice",
    question: "Как объединяются «te» + «o» в контракции? Eu digo + o livro + a ti = Eu ___",
    options: ["digo-te-o", "digo-to", "digo-lho", "te-o digo"],
    correct: 1,
    explanation: "Te + o = to. «Eu digo-to» (Я тебе это говорю)."
  },
  {
    type: "fill",
    question: "Контракция: Ela dá as flores a nós. → Ela ___ (nos + as)",
    answer: "dá-no-las"
  },
  {
    type: "fill",
    question: "Контракция с отрицанием: Ele nunca dá o livro a ela. → Ele nunca ___ (lhe + o)",
    answer: "lho dá"
  },
  {
    type: "fill",
    question: "Контракция: Eu levo a mala a ela. → Eu ___ (lhe + a)",
    answer: "levo-lha"
  },
  {
    type: "fill",
    question: "Контракция: Ele entrega os documentos a mim. → Ele ___ (me + os)",
    answer: "entrega-mos"
  },
  {
    type: "choice",
    question: "Как будет контракция nos + as?",
    options: ["no-as", "no-las", "nos-as", "nassas"],
    correct: 1,
    explanation: "Nos + as = no-las. Пример: Ela faz-no-las (Она нам их делает)."
  },
  {
    type: "fill",
    question: "Контракция: Ela leva o livro a ele. → Ela ___ (lhe + o)",
    answer: "leva-lho"
  },
  {
    type: "fill",
    question: "Контракция: Eles limpam a casa a ti. → Eles ___ (te + a)",
    answer: "limpam-ta"
  },
  {
    type: "fill",
    question: "Контракция: Eu empresto o dinheiro a ele. → Eu ___ (lhe + o)",
    answer: "empresto-lho"
  },
  {
    type: "fill",
    question: "Контракция: Ele traz as revistas a mim. → Ele ___ (me + as)",
    answer: "traz-mas"
  },
  // === Ex3: Перестановка местоимения при наречиях/отрицании ===
  {
    type: "fill",
    question: "Перепишите с отрицанием: Ele leva-to. → Ele não ___",
    answer: "to leva"
  },
  {
    type: "fill",
    question: "Перепишите с «também»: Tu levas-lhas. → Tu também ___",
    answer: "lhas levas"
  },
  {
    type: "fill",
    question: "Перепишите с «nunca»: Eles dizem-lhe. → Eles nunca ___",
    answer: "lhe dizem"
  },
  {
    type: "choice",
    question: "Перепишите с «só»: Ela lê-lhe. → Ela só ___",
    options: ["lhe lê", "lê-lhe", "lhe-lê", "só lê-lhe"],
    correct: 0,
    explanation: "«Só» вызывает проклизу: só lhe lê (только ему/ей читает)."
  },
  {
    type: "fill",
    question: "Перепишите с «não»: Ele autoriza-me. → Ele não ___",
    answer: "me autoriza"
  },
  {
    type: "fill",
    question: "Перепишите с «também»: Ela telefona-lhe. → Ela também ___",
    answer: "lhe telefona"
  },
  {
    type: "fill",
    question: "Перепишите с «nem»: Ele envia-me emails. → Ele nem ___",
    answer: "me envia"
  },
  {
    type: "fill",
    question: "Перепишите с «só»: Tu dás-no-las hoje à noite. → Tu só ___",
    answer: "no-las dás"
  },
  {
    type: "fill",
    question: "Перепишите с «também»: Ela fala-lhes todos os dias. → Ela também ___",
    answer: "lhes fala"
  },
  {
    type: "fill",
    question: "Перепишите с «só»: Eu pergunto-lhe o que ela precisa. → Eu só ___",
    answer: "lhe pergunto"
  },
  // === Ex4: Замена подчёркнутых частей (продвинутая перестановка местоимений) ===
  {
    type: "fill",
    question: "Замените подчёркнутое на слово в скобках: Amanhã eles levam-te ao aeroporto? → (quando é que) ___ te levam ao aeroporto?",
    answer: "Quando é que eles"
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: O meu pai autoriza-me a ir ao cinema. → (eu acho que ele) Eu acho que ele ___ a ir ao cinema logo à noite.",
    answer: "me autoriza"
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: Você diz-lhe a verdade. → (ninguém) ___ lhe diz a verdade.",
    answer: "Ninguém"
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: A avó escreve-nos muitas cartas. → (quem é que) Quem é que ___ muitas cartas?",
    answer: "nos escreve"
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: Os alunos compreendem-te perfeitamente. → (todos) ___ te compreendem perfeitamente.",
    answer: "Todos"
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: Só ao sábado é que a Filipa me telefona. → (em que dia) Em que dia é que a Filipa ___ para dar notícias?",
    answer: "me telefona"
  },
  {
    type: "choice",
    question: "Замените «ninguém» на «alguém»: Ninguém te envia cartas agora. → ___ te envia cartas agora?",
    options: ["Alguém te envia", "Alguém envia-te", "Te alguém envia", "Alguém te envia-te"],
    correct: 0,
    explanation: "«Alguém» — неопределённое местоимение, вызывающее проклизу: Alguém te envia."
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: O Pedro dá-no-las no fim-de-semana. → (quem) Quem ___ no fim-de-semana?",
    answer: "no-las dá"
  },
  {
    type: "choice",
    question: "Замените подчёркнутое: A Maria faz-lhes muitos favores. → (ela ainda) Ela ainda ___?",
    options: ["lhes faz muitos favores", "faz-lhes muitos favores", "lhes-faz muitos favores", "faz muitos lhes favores"],
    correct: 0,
    explanation: "«Ainda» вызывает проклизу: Ela ainda lhes faz muitos favores."
  },
  {
    type: "fill",
    question: "Замените подчёркнутое: À terça-feira eu empresto-lhes o meu automóvel. → (nunca) Eu nunca ___ o meu automóvel.",
    answer: "lhes empresto"
  },
  // === Ex5: Перевод предложений с косвенным дополнением ===
  {
    type: "translate",
    source: "Я хочу тебе кое-что сказать.",
    direction: "ru-pt",
    answer: ["Quero dizer-te uma coisa.", "Eu quero dizer-te uma coisa."]
  },
  {
    type: "translate",
    source: "Она ему даёт подарок.",
    direction: "ru-pt",
    answer: ["Ela dá-lhe um presente."]
  },
  {
    type: "translate",
    source: "Мы им всегда пишем.",
    direction: "ru-pt",
    answer: ["Sempre lhes escrevemos.", "Nós sempre lhes escrevemos."]
  },
  {
    type: "translate",
    source: "Никто мне не отвечает.",
    direction: "ru-pt",
    answer: ["Ninguém me responde."]
  },
  {
    type: "translate",
    source: "Профессор нам объясняет урок.",
    direction: "ru-pt",
    answer: ["O professor explica-nos a lição."]
  },
  {
    type: "translate",
    source: "Я отправляю ей подарок.",
    direction: "ru-pt",
    answer: ["Eu envio-lhe um presente.", "Envio-lhe um presente."]
  },
  {
    type: "translate",
    source: "Он покупает мне цветы каждую субботу.",
    direction: "ru-pt",
    answer: ["Ele compra-me flores todos os sábados."]
  },
  {
    type: "translate",
    source: "Я даю им обед каждый вторник.",
    direction: "ru-pt",
    answer: ["Eu dou-lhes almoço à terça-feira.", "Dou-lhes almoço à terça-feira.", "Eu ofereço-lhes almoço à terça-feira."]
  },
  {
    type: "translate",
    source: "Он продаёт нам свежий хлеб каждое утро.",
    direction: "ru-pt",
    answer: ["Ele vende-nos pão fresco todas as manhãs."]
  },
  {
    type: "translate",
    source: "Он никогда её никому не представляет.",
    direction: "ru-pt",
    answer: ["Ele nunca a apresenta a ninguém."]
  },
  {
    type: "translate",
    source: "Вы не даёте им шоколадки.",
    direction: "ru-pt",
    answer: ["Você não lhes dá chocolates."]
  },
  {
    type: "translate",
    source: "Изабел звонит мне в воскресенье вечером.",
    direction: "ru-pt",
    answer: ["A Isabel telefona-me ao domingo à noite.", "Isabel telefona-me ao domingo à noite."]
  },
  {
    type: "translate",
    source: "Мы всегда говорим им правду.",
    direction: "ru-pt",
    answer: ["Nós dizemos-lhes sempre a verdade.", "Dizemos-lhes sempre a verdade."]
  },
  // === Ex6: Текст о фаду ===
  {
    type: "fill",
    question: "Os portugueses ___ (considerar + o fado) a alma do país. (считают его)",
    answer: "o consideram"
  },
  {
    type: "order",
    question: "Составьте: «Поэт пишет поэзию и завершает её.» (O poeta escreve-a e a finaliza.)",
    words: ["O", "poeta", "escreve", "-a", "e", "a", "finaliza"],
    answer: "O poeta escreve-a e a finaliza."
  },
  {
    type: "fill",
    question: "Текст о Камоэнше: Este poeta português é muito admirado. Muitos ___ (comparam + o poeta) a grandes poetas estrangeiros. (сравнивают его)",
    answer: "comparam-no"
  },
  {
    type: "fill",
    question: "Текст о Камоэнше: A história da literatura portuguesa ___ (reservar + a ele) um lugar especial. (отводит ему)",
    answer: "reserva-lhe"
  },
  {
    type: "fill",
    question: "Текст о Камоэнше: Camões apresenta Os Lusíadas ao Rei D. Sebastião, que ___ (oferecer + a ele) uma pensão. (проклиза после «que»: предлагает ему)",
    answer: "lhe oferece"
  },
  {
    type: "fill",
    question: "Текст о Камоэнше: Camões sofre um naufrágio e a sua amante morre afogada, porque ele não ___ (dar + a ela) ajuda. (проклиза после «não»: не даёт ей)",
    answer: "lhe dá"
  },
  {
    type: "fill",
    question: "Текст о Камоэнше: O poeta conta a história dos portugueses e ___ (dedicar + a eles) estes poemas épicos. (посвящает им)",
    answer: "dedica-lhes"
  },
  {
    type: "match",
    question: "Соотнесите косвенные местоимения:",
    pairs: [
      ["a mim", "me"],
      ["a ti", "te"],
      ["a ele/ela", "lhe"],
      ["a nós", "nos"],
      ["a eles/elas", "lhes"]
    ]
  },
  {
    type: "match",
    question: "Соотнесите контракции прямого + косвенного местоимений:",
    pairs: [
      ["me + o", "mo"],
      ["te + o", "to"],
      ["lhe + o", "lho"],
      ["nos + o", "no-lo"],
      ["me + a", "ma"]
    ]
  }
];