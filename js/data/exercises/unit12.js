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
    answer: "ajuda-las"
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
  // === Ex3: Замена в повседневных действиях ===
  {
    type: "translate",
    source: "Он убирает квартиру каждый день. (Замените «квартиру» местоимением: o apartamento → o arruma)",
    direction: "ru-pt",
    answer: ["Ele arruma o apartamento. → Ele arruma-o."]
  },
  {
    type: "fill",
    question: "Ela lava as mãos. → Ela ___",
    answer: "lava-as"
  },
  {
    type: "fill",
    question: "Ele lava a roupa. → Ele ___",
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
  // === Ex4: Позиция местоимения (проклиза/энклиза) ===
  {
    type: "choice",
    question: "Как правильно: Tu ___ (os bolos) — «Ты их (торты) покупаешь?» (с вопросительным словом опущено)",
    options: ["compras-os", "os compras", "compra-os", "los compras"],
    correct: 1,
    explanation: "В данном контексте (подразумевается вопрос) может использоваться проклиза: os compras."
  },
  {
    type: "fill",
    question: "Eu não ___ (os amigos) — Я их не вижу. (проклиза после «não»)",
    answer: "os vejo"
  },
  {
    type: "fill",
    question: "Ele sempre ___ (os jornais) — Он всегда их читает. (проклиза после «sempre»)",
    answer: "os lê"
  },
  {
    type: "choice",
    question: "Где стоит местоимение в утвердительном предложении без «притягивающих» слов?",
    options: ["Перед глаголом (проклиза)", "После глагола (энклиза)", "Между двумя глаголами", "В начале предложения"],
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
  // === Ex5: Текст о производстве вина ===
  {
    type: "fill",
    question: "Заполните: Colhem as uvas e ___ (uvas → местоимение) para a adega. (перевозят их)",
    answer: "transportam-nas"
  },
  {
    type: "fill",
    question: "Na adega, não ___ (o vinho) imediatamente. (не хранят его сразу — проклиза)",
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
    question: "As garrafas ficam nas prateleiras. Os turistas ___ (as garrafas, энклиза). (посещают их)",
    answer: "visitam-nas"
  },
  {
    type: "translate",
    source: "Они продают его (вино) по всему миру.",
    direction: "ru-pt",
    answer: ["Vendem-no por todo o mundo.", "Eles vendem-no por todo o mundo."]
  }
];