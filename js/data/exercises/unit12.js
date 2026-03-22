export const exercises = [
  // === Ex1: Замена прямого дополнения местоимением ===
  {
    type: "fill",
    question: "Замените прямое дополнение местоимением: Ele conhece os vizinhos. → Ele ___",
    answer: "conhece-os"
  },
  {
    type: "fill",
    question: "Замените: Ela escreve as cartas. → Ela ___",
    answer: "escreve-las"
  },
  {
    type: "fill",
    question: "Замените: Ele leva os filhos. → Ele ___",
    answer: "leva-os"
  },
  {
    type: "choice",
    question: "Замените прямое дополнение: Quer enviar o pacote. → Quer ___",
    options: ["enviá-lo", "envia-o", "enviar-o", "o enviar"],
    correct: 0,
    explanation: "После инфинитива на -r: буква -r отпадает, «o» → «lo». Enviar + o = enviá-lo."
  },
  {
    type: "fill",
    question: "Замените: Ela faz a cama. → Ela ___",
    answer: "fá-la"
  },
  {
    type: "fill",
    question: "Замените: Eles sabem o resultado. → Eles ___",
    answer: "sabem-no"
  },
  {
    type: "fill",
    question: "Замените: Ele ajuda as colegas. → Ele ___",
    answer: "ajuda-as"
  },
  {
    type: "choice",
    question: "Замените: Ela compõe a música. → Ela ___",
    options: ["compõe-a", "compõe-na", "compõe-la", "a compõe"],
    correct: 1,
    explanation: "После назальных форм (compõe) «a» → «na»: compõe-na."
  },
  {
    type: "fill",
    question: "Замените: Quer fazer o trabalho. → Quer ___",
    answer: "fazê-lo"
  },
  {
    type: "fill",
    question: "Замените: Nós fazemos o bolo. → Nós ___",
    answer: "fazemo-lo"
  },
  // === Ex2: Больше замен прямого дополнения ===
  {
    type: "fill",
    question: "Замените: Ela compra as flores. → Ela ___",
    answer: "compra-as"
  },
  {
    type: "fill",
    question: "Замените: Ele visita os amigos. → Ele ___",
    answer: "visita-os"
  },
  {
    type: "fill",
    question: "Замените: Eles adoram o professor. → Eles ___",
    answer: "adoram-no"
  },
  {
    type: "choice",
    question: "Замените: Eu ouço a música. → Eu ___",
    options: ["ouço-a", "ouço-la", "ouço-na", "a ouço"],
    correct: 0,
    explanation: "Ouço оканчивается на гласную, поэтому обычная энклиза: ouço-a."
  },
  {
    type: "fill",
    question: "Замените: Quer vender o carro. → Quer ___",
    answer: "vendê-lo"
  },
  {
    type: "fill",
    question: "Замените: Ele dá os livros. → Ele ___",
    answer: "dá-os"
  },
  {
    type: "fill",
    question: "Замените: Vai levar os filhos. → Vai ___",
    answer: "levá-los"
  },
  {
    type: "fill",
    question: "Замените: Eles apreciam o vinho. → Eles ___",
    answer: "apreciam-no"
  },
  {
    type: "fill",
    question: "Замените: Tu atendes muitos turistas na tua loja e ___ em língua estrangeira. (atende + os → ?)",
    answer: "atende-los"
  },
  {
    type: "choice",
    question: "Замените: Vocês vêem muitos turistas e ___ sempre no verão.",
    options: ["vêem-nos", "vêem-os", "vêem-las", "os vêem"],
    correct: 0,
    explanation: "После назальной формы «vêem» (дифтонг -em) местоимение «os» → «nos»: vêem-nos."
  },
  {
    type: "fill",
    question: "Замените: Ela prefere usar os transportes públicos e ___ todos os dias. (usa + os → ?)",
    answer: "usa-os"
  },
  {
    type: "fill",
    question: "Замените: O teu vestido novo é muito lindo. Vais ___ na tua festa? (usar + o → ?)",
    answer: "usá-lo"
  },
  // === Ex3: Замена в повседневных действиях ===
  {
    type: "translate",
    source: "Он убирает квартиру каждый день. (Замените «квартиру» местоимением)",
    direction: "ru-pt",
    answer: ["Ele arruma o apartamento. → Ele arruma-o."]
  },
  {
    type: "fill",
    question: "Замените прямое дополнение местоимением: Ela lava as mãos. → Ela ___",
    answer: "lava-as"
  },
  {
    type: "fill",
    question: "Замените прямое дополнение местоимением: Ele lava a roupa. → Ele ___",
    answer: "lava-a"
  },
  {
    type: "choice",
    question: "Замените: Ela põe a mesa. → Ela ___",
    options: ["põe-a", "põe-na", "põe-la", "a põe"],
    correct: 1,
    explanation: "После назальной формы «põe» местоимение «a» → «na»: põe-na."
  },
  {
    type: "fill",
    question: "Замените: Ela faz a comida. → Ela ___",
    answer: "fá-la"
  },
  {
    type: "fill",
    question: "Замените: Ele organiza a festa. → Ele ___",
    answer: "organiza-a"
  },
  {
    type: "fill",
    question: "Ela faz um café e senta-se na sala a ___ (o café → местоимение). (выпить его — tomar + o → ?)",
    answer: "tomá-lo"
  },
  {
    type: "fill",
    question: "Ela tira a roupa lavada da máquina e ___ (a roupa) na lavandaria. (развешивает её — estende + a → ?)",
    answer: "estende-a"
  },
  {
    type: "fill",
    question: "A Isabel decide fazer uma salada de frango e ___ (a salada) com muito gosto. (готовит её — prepara + a → ?)",
    answer: "prepara-a"
  },
  {
    type: "choice",
    question: "A Isabel prepara a salada e ___ (a salada) acompanhada de pão fresco. (ест её)",
    options: ["come-a", "come-la", "come-na", "a come"],
    correct: 0,
    explanation: "Глагол «come» оканчивается на гласную, поэтому обычная энклиза: come-a."
  },
  // === Ex4: Позиция местоимения (проклиза/энклиза) ===
  {
    type: "choice",
    question: "Как правильно: Tu não ___ (os bolos) — «Ты их (торты) не покупаешь.» (проклиза после «não»)",
    options: ["compras-os", "os compras", "compra-os", "los compras"],
    correct: 1,
    explanation: "После «não» используется проклиза: Tu não os compras."
  },
  {
    type: "fill",
    question: "Eu não ___ (os amigos) — Я их не вижу. (проклиза после «não»)",
    answer: "os vejo"
  },
  {
    type: "fill",
    question: "Ele nunca ___ (os jornais) — Он никогда их не читает. (проклиза после «nunca»)",
    answer: "os lê"
  },
  {
    type: "choice",
    question: "Где стоит местоимение в утвердительном предложении без «притягивающих» слов?",
    options: ["Перед глаголом", "После глагола", "Между двумя глаголами", "В начале предложения"],
    correct: 1,
    explanation: "В простом утвердительном предложении (без não, nunca, sempre и т.д.) используется энклиза: toma-o."
  },
  {
    type: "match",
    question: "Соотнесите слова, вызывающие проклизу, с примерами:",
    pairs: [
      ["não", "Não o vejo."],
      ["nunca", "Nunca a compro."],
      ["sempre", "Sempre os lê."],
      ["também", "Também a compra."]
    ]
  },
  {
    type: "fill",
    question: "«O senhor toma o chá agora ou ___ mais tarde?» (энклиза — нет притягивающего слова)",
    answer: "toma-o"
  },
  {
    type: "fill",
    question: "A minha mãe compra as prendas em outubro. Eu só ___ em dezembro. (проклиза после «só»)",
    answer: "as compro"
  },
  {
    type: "fill",
    question: "O Pedro está a vender a casa. Tu sabes quem ___? (проклиза после «quem»)",
    answer: "a compra"
  },
  {
    type: "fill",
    question: "A minha esposa ajuda-me em tudo, porque ___ . (проклиза после «porque»)",
    answer: "me adora"
  },
  {
    type: "choice",
    question: "O teu filho usa o computador para estudar, mas também ___ para lazer. (проклиза после «também»)",
    options: ["usa-o", "o usa", "usa-lo", "lo usa"],
    correct: 1,
    explanation: "После наречия «também» используется проклиза: também o usa."
  },
  {
    type: "fill",
    question: "O professor quer respostas corretas, mas nenhum aluno ___ . (проклиза после «nenhum»)",
    answer: "as dá"
  },
  {
    type: "fill",
    question: "«Paula, você conhece o Francisco?» — «Sim, ___ muito bem.» (энклиза — утвердительное предложение)",
    answer: "conheço-o"
  },
  // === Ex5: Текст о производстве вина ===
  {
    type: "fill",
    question: "Заполните: Colhem as uvas e ___ (uvas → местоимение) para a adega. (перевозят их)",
    answer: "transportam-nas"
  },
  {
    type: "fill",
    question: "Заполните текст: Na adega, não ___ (o vinho) imediatamente. (не хранят его сразу — проклиза)",
    answer: "o armazenam"
  },
  {
    type: "order",
    question: "Составьте: «Они его производят с большой заботой.» (Produzem-no com muito cuidado.)",
    words: ["Produzem", "-no", "com", "muito", "cuidado"],
    answer: "Produzem-no com muito cuidado."
  },
  {
    type: "fill",
    question: "Заполните текст: As caves são atrações turísticas. Os turistas ___ (as caves, энклиза). (посещают их)",
    answer: "visitam-nas"
  },
  {
    type: "translate",
    source: "Они продают его (вино) по всему миру.",
    direction: "ru-pt",
    answer: ["Vendem-no por todo o mundo.", "Eles vendem-no por todo o mundo."]
  },
  {
    type: "fill",
    question: "Заполните текст: Hoje-em-dia, já não ___ (o vinho) pelo Rio Douro nas barcas típicas. (проклиза после «não»)",
    answer: "o transportam"
  },
  {
    type: "choice",
    question: "As barcas são muito bonitas e as companhias agora ___ (as barcas) no rio para efeitos turísticos. (expôr + as → ?)",
    options: ["expôem-nas", "expôem-as", "expõe-nas", "as expôem"],
    correct: 0,
    explanation: "После назальной формы «expôem» (дифтонг -em) местоимение «as» → «nas»: expôem-nas."
  },
  {
    type: "fill",
    question: "Заполните текст: As companhias especializadas em vinho da Madeira ___ (o vinho) no arquipélago da Madeira. (produzem + o → ?)",
    answer: "produzem-no"
  },
  {
    type: "fill",
    question: "Заполните текст: Também ___ (o vinho) em barris de madeira. (проклиза после «também»: armazenar)",
    answer: "o armazenam"
  },
  {
    type: "fill",
    question: "Заполните текст: E ___ (o vinho) do calor em caves com temperaturas reguladas. (protegem + o → ?)",
    answer: "protegem-no"
  }
];