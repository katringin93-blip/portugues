export const exercises = [
      {
        type: "choice",
        question: "Укажите на предмет рядом с собой: ___ caneta é minha.",
        options: ["Essa", "Esta", "Aquela", "Isso"],
        correct: 1,
        explanation: "«Esta» (эта) — для предмета, находящегося близко к говорящему."
      },
      {
        type: "fill",
        question: "Что это? (абстрактно, рядом со мной) = O que é ___?",
        answer: "isto"
      },
      {
        type: "translate",
        source: "Aqueles rapazes são meus amigos.",
        direction: "pt-ru",
        answer: ["Те парни — мои друзья.", "Те мальчики — мои друзья."]
      },
      {
        type: "choice",
        question: "Слияние «de + isso» =",
        options: ["disso", "desso", "diso", "niso"],
        correct: 0,
        explanation: "Предлог «de» сливается с «isso» и образует «disso»."
      },
      {
        type: "fill",
        question: "Eu moro ___ cidade. (em + esta = ...)",
        answer: "nesta"
      },
      {
        type: "choice",
        question: "Предмет далеко от обоих собеседников: ___ montanha é muito alta.",
        options: ["Esta", "Essa", "Aquela", "Isto"],
        correct: 2,
        explanation: "«Aquela» — для предмета, далёкого и от говорящего, и от слушающего."
      },
      {
        type: "fill",
        question: "O que é ___? (Что это? — рядом с собеседником)",
        answer: "isso"
      },
      {
        type: "match",
        question: "Соотнесите указательные местоимения с расстоянием:",
        pairs: [
          { left: "este/esta", right: "рядом с говорящим" },
          { left: "esse/essa", right: "рядом со слушающим" },
          { left: "aquele/aquela", right: "далеко от обоих" },
          { left: "isto", right: "это (абстр., рядом)" },
          { left: "aquilo", right: "то (абстр., далеко)" }
        ]
      },
      {
        type: "translate",
        source: "Эта книга интересная.",
        direction: "ru-pt",
        answer: ["Este livro é interessante."]
      },
      {
        type: "choice",
        question: "«de + aquele» = ?",
        options: ["daquele", "deaquele", "dequele", "daquela"],
        correct: 0,
        explanation: "Предлог «de» сливается с «aquele» и образует «daquele»."
      },
      {
        type: "fill",
        question: "Eu gosto ___ livro. (de + este = ...)",
        answer: "deste"
      },
      {
        type: "order",
        question: "Составьте предложение: «Эти дома старые.»",
        words: ["Estas", "casas", "são", "velhas", "."],
        answer: "Estas casas são velhas."
      },
      {
        type: "choice",
        question: "Какая нейтральная форма соответствует «esse/essa»?",
        options: ["isto", "isso", "aquilo", "aquele"],
        correct: 1,
        explanation: "«Isso» — нейтральная форма, соответствующая «esse/essa» (рядом со слушающим)."
      },
      {
        type: "fill",
        question: "___ sapatos são confortáveis. (Эти туфли — рядом со мной — удобные.) м.р. мн.ч.",
        answer: "Estes"
      },
      {
        type: "translate",
        source: "Те женщины — учительницы.",
        direction: "ru-pt",
        answer: ["Aquelas mulheres são professoras."]
      },
      {
        type: "choice",
        question: "«em + esse» = ?",
        options: ["nesse", "nese", "nesso", "enesse"],
        correct: 0,
        explanation: "Предлог «em» сливается с «esse» и образует «nesse»."
      },
      {
        type: "fill",
        question: "Ele trabalha ___ escritório. (em + aquele = ...)",
        answer: "naquele"
      },
      {
        type: "match",
        question: "Соотнесите слияния с их составными частями:",
        pairs: [
          { left: "neste", right: "em + este" },
          { left: "disso", right: "de + isso" },
          { left: "daquele", right: "de + aquele" },
          { left: "nessa", right: "em + essa" }
        ]
      },
      {
        type: "translate",
        source: "Что это такое? (далеко от обоих)",
        direction: "ru-pt",
        answer: ["O que é aquilo?"]
      },
      {
        type: "choice",
        question: "«___ meninas são minhas irmãs.» (Те девочки — рядом с тобой — мои сёстры.)",
        options: ["Estas", "Essas", "Aquelas", "Estes"],
        correct: 1,
        explanation: "«Essas» (ж.р. мн.ч.) — предметы/люди рядом со слушающим."
      },
      {
        type: "fill",
        question: "___ é muito caro. (Это — рядом со мной — очень дорого.) нейтр.",
        answer: "Isto"
      },
      {
        type: "order",
        question: "Составьте предложение: «Я не знаю ничего об этом.»",
        words: ["Não", "sei", "nada", "disso", "."],
        answer: "Não sei nada disso."
      },
      {
        type: "choice",
        question: "Мужской род множественного числа от «aquele»:",
        options: ["aqueles", "aquelas", "aquela", "aquelos"],
        correct: 0,
        explanation: "«Aqueles» — мужской род множественного числа: aquele → aqueles."
      },
      {
        type: "fill",
        question: "Eu não gosto ___ (de + aquilo).",
        answer: "daquilo"
      },
      {
        type: "translate",
        source: "В этом ресторане хорошая еда.",
        direction: "ru-pt",
        answer: ["Neste restaurante a comida é boa.", "Este restaurante tem boa comida.", "A comida neste restaurante é boa."]
      },
      {
        type: "choice",
        question: "«___ rapazes ali são muito altos.» (Те парни — далеко — очень высокие.)",
        options: ["Estes", "Esses", "Aqueles", "Estas"],
        correct: 2,
        explanation: "«Aqueles» — для предметов/людей, далёких от обоих собеседников."
      },
      {
        type: "fill",
        question: "Кто живёт в том доме? Quem mora ___ casa? (em + aquela)",
        answer: "naquela"
      },
      {
        type: "match",
        question: "Соотнесите формы множественного числа:",
        pairs: [
          { left: "este", right: "estes" },
          { left: "essa", right: "essas" },
          { left: "aquele", right: "aqueles" },
          { left: "esta", right: "estas" }
        ]
      }
    ];
