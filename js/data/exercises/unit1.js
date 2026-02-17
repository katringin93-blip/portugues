export const exercises = [
      // === EXISTING 5 EXERCISES ===
      {
        type: "choice",
        question: "Какой артикль правильный? ___ cidade é bonita.",
        options: ["O", "A", "Um", "Os"],
        correct: 1,
        explanation: "Cidade (город) — женского рода, поэтому используется определённый артикль женского рода «a»."
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o animal → os ___",
        answer: "animais"
      },
      {
        type: "fill",
        question: "Образуйте множественное число: a nação → as ___",
        answer: "nações"
      },
      {
        type: "choice",
        question: "Какое из слов мужского рода?",
        options: ["cidade", "viagem", "problema", "nação"],
        correct: 2,
        explanation: "Слово «problema» (проблема) — мужского рода: o problema. Слова на -ema заимствованы из греческого и являются мужского рода."
      },
      {
        type: "translate",
        source: "Книги на столе.",
        direction: "ru-pt",
        answer: ["Os livros estão na mesa.", "Os livros estão sobre a mesa."]
      },
      // === NEW EXERCISES ===
      {
        type: "choice",
        question: "Какого рода слово «dia» (день)?",
        options: ["Женского: a dia", "Мужского: o dia", "Среднего рода", "Может быть обоих родов"],
        correct: 1,
        explanation: "«Dia» — исключение. Несмотря на окончание -a, это слово мужского рода: o dia."
      },
      {
        type: "choice",
        question: "Какого рода слово «mapa» (карта)?",
        options: ["Женского: a mapa", "Мужского: o mapa", "Зависит от контекста", "Женского: uma mapa"],
        correct: 1,
        explanation: "«Mapa» — исключение. Несмотря на окончание -a, это слово мужского рода: o mapa."
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o professor → os ___",
        answer: "professores"
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o hotel → os ___",
        answer: "hotéis"
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o homem → os ___",
        answer: "homens"
      },
      {
        type: "choice",
        question: "Какое окончание указывает на женский род?",
        options: ["-ema", "-o", "-ção", "-or"],
        correct: 2,
        explanation: "Окончание -ção указывает на женский род: a nação, a informação, a situação."
      },
      {
        type: "match",
        question: "Соотнесите существительные с их родом (o/a):",
        pairs: [
          { left: "livro", right: "o (м.р.)" },
          { left: "casa", right: "a (ж.р.)" },
          { left: "sistema", right: "o (м.р.)" },
          { left: "viagem", right: "a (ж.р.)" }
        ]
      },
      {
        type: "choice",
        question: "Какое слово женского рода?",
        options: ["o cinema", "o sistema", "a garagem", "o poema"],
        correct: 2,
        explanation: "«Garagem» (гараж) — женского рода: a garagem. Слова на -agem в португальском женского рода."
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o espanhol → os ___",
        answer: "espanhóis"
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o irmão → os ___",
        answer: "irmãos"
      },
      {
        type: "choice",
        question: "Как образуется множественное число слов на -m?",
        options: ["-m → -ms", "-m → -ns", "-m → -mes", "-m → -ens"],
        correct: 1,
        explanation: "Слова на -m образуют множественное число заменой -m на -ns: homem → homens, viagem → viagens."
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o jornal → os ___",
        answer: "jornais"
      },
      {
        type: "choice",
        question: "Какого рода слово «universidade» (университет)?",
        options: ["Мужского: o universidade", "Женского: a universidade", "Среднего рода", "Оба рода возможны"],
        correct: 1,
        explanation: "Слово «universidade» — женского рода: a universidade. Слова на -dade всегда женского рода."
      },
      {
        type: "translate",
        source: "Мужчины и женщины",
        direction: "ru-pt",
        answer: ["Os homens e as mulheres"]
      },
      {
        type: "fill",
        question: "Образуйте множественное число: a luz → as ___",
        answer: "luzes"
      },
      {
        type: "choice",
        question: "Какое множественное число у слова «pão» (хлеб)?",
        options: ["pãos", "pães", "pãoes", "pões"],
        correct: 1,
        explanation: "Pão → pães. Это одно из слов на -ão, которое образует множественное число с окончанием -ães."
      },
      {
        type: "match",
        question: "Соотнесите слова с правильной формой множественного числа:",
        pairs: [
          { left: "o cão", right: "os cães" },
          { left: "a mão", right: "as mãos" },
          { left: "a lição", right: "as lições" },
          { left: "o alemão", right: "os alemães" }
        ]
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o país → os ___",
        answer: "países"
      },
      {
        type: "choice",
        question: "Какого рода слово «tribo» (племя)?",
        options: ["Мужского: o tribo", "Женского: a tribo", "Зависит от контекста", "Среднего рода"],
        correct: 1,
        explanation: "«Tribo» — исключение. Несмотря на окончание -o, это слово женского рода: a tribo."
      },
      {
        type: "fill",
        question: "Образуйте множественное число: o papel → os ___",
        answer: "papéis"
      },
      {
        type: "choice",
        question: "Какого рода слово «cinema» (кино)?",
        options: ["Женского: a cinema", "Мужского: o cinema", "Оба рода", "Нет рода"],
        correct: 1,
        explanation: "«Cinema» — мужского рода: o cinema. Слова на -ema/-ema греческого происхождения обычно мужского рода."
      },
      {
        type: "order",
        question: "Составьте предложение: «Города красивые».",
        words: ["bonitas", "As", "são", "cidades"],
        answer: "As cidades são bonitas"
      },
      {
        type: "fill",
        question: "Образуйте множественное число: a viagem → as ___",
        answer: "viagens"
      },
      {
        type: "choice",
        question: "Какое из слов НЕ является исключением по роду?",
        options: ["o dia", "o mapa", "a mesa", "o planeta"],
        correct: 2,
        explanation: "«Mesa» (стол) — обычное слово женского рода на -a: a mesa. Остальные — исключения: мужской род, несмотря на окончание -a."
      }
    ];
