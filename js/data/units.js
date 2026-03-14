import { exercises as ex1 } from './exercises/unit1.js';
import { exercises as ex2 } from './exercises/unit2.js';
import { exercises as ex3 } from './exercises/unit3.js';
import { exercises as ex4 } from './exercises/unit4.js';
import { exercises as ex5 } from './exercises/unit5.js';
import { exercises as ex6 } from './exercises/unit6.js';
import { exercises as ex7 } from './exercises/unit7.js';
import { exercises as ex8 } from './exercises/unit8.js';
import { exercises as ex9 } from './exercises/unit9.js';
import { exercises as ex10 } from './exercises/unit10.js';
import { exercises as ex11 } from './exercises/unit11.js';
import { exercises as ex12 } from './exercises/unit12.js';
import { exercises as ex13 } from './exercises/unit13.js';
import { exercises as ex14 } from './exercises/unit14.js';
import { exercises as ex15 } from './exercises/unit15.js';
import { exercises as ex16 } from './exercises/unit16.js';
import { exercises as ex17 } from './exercises/unit17.js';
import { exercises as ex18 } from './exercises/unit18.js';
import { exercises as ex19 } from './exercises/unit19.js';
import { exercises as ex20 } from './exercises/unit20.js';

export const units = [
  // ===================== UNIT 1: Nouns =====================
  {
    id: 1,
    title: "Существительные",
    description: "Род и число существительных в европейском португальском языке",
    theory: [
      {
        heading: "Род существительных",
        text: "В португальском языке существительные имеют два рода: мужской (masculino) и женский (feminino). В отличие от русского языка, среднего рода нет. Род часто можно определить по окончанию слова."
      },
      {
        table: {
          headers: ["Окончание", "Род", "Примеры"],
          rows: [
            ["-o", "мужской", "o livro (книга), o gato (кот)"],
            ["-a", "женский", "a casa (дом), a mesa (стол)"],
            ["-ção", "женский", "a nação (нация), a estação (станция)"],
            ["-dade", "женский", "a cidade (город), a universidade (университет)"],
            ["-agem", "женский", "a viagem (путешествие), a paisagem (пейзаж)"],
            ["-or", "мужской", "o professor (преподаватель), o computador (компьютер)"],
            ["-ema", "мужской", "o problema (проблема), o sistema (система)"]
          ]
        }
      },
      {
        heading: "Множественное число",
        text: "Основное правило: к словам, оканчивающимся на гласную, добавляется -s. Для слов на согласную существуют особые правила."
      },
      {
        table: {
          headers: ["Окончание ед.ч.", "Окончание мн.ч.", "Пример"],
          rows: [
            ["-a, -o, -e", "+ s", "gato → gatos, casa → casas"],
            ["-r, -s, -z", "+ es", "flor → flores, país → países"],
            ["-al", "-ais", "animal → animais, jornal → jornais"],
            ["-el", "-éis", "papel → papéis, anel → anéis"],
            ["-ol", "-óis", "farol → faróis, espanhol → espanhóis"],
            ["-ul", "-uis", "azul → azuis"],
            ["-m", "-ns", "homem → homens, viagem → viagens"],
            ["-ão", "-ões / -ães / -ãos", "nação → nações, pão → pães, mão → mãos"]
          ]
        }
      },
      {
        examples: [
          { pt: "O livro está na mesa.", ru: "Книга на столе." },
          { pt: "As casas são grandes.", ru: "Дома большие." },
          { pt: "Os homens trabalham.", ru: "Мужчины работают." },
          { pt: "A viagem foi longa.", ru: "Путешествие было долгим." }
        ]
      },
      {
        note: "Внимание: некоторые слова-исключения не подчиняются общим правилам рода. Например, o dia (день) оканчивается на -a, но мужского рода. A tribo (племя) оканчивается на -o, но женского рода."
      },
      {
        heading: "Уменьшительные и увеличительные формы",
        text: "В португальском языке широко используются уменьшительные (diminutivos) и увеличительные (aumentativos) формы существительных. Они изменяют значение слова, выражая размер, интенсивность или эмоции."
      },
      {
        table: {
          headers: ["Форма", "Суффикс", "Примеры"],
          rows: [
            ["Уменьшительная", "-inho/-inha", "casa → casinha (домик), filho → filhinho (сынок)"],
            ["Уменьшительная", "-zinho/-zinha", "pão → pãozinho (булочка), João → Joãozinho"],
            ["Увеличительная", "-ão", "livro → livrão (огромная книга), carro → carrão (большая машина)"]
          ]
        }
      },
      {
        examples: [
          { pt: "Vamos tomar um cafezinho.", ru: "Давай выпьем кофейку." },
          { pt: "Bom dia, mãezinha!", ru: "Доброе утро, мамочка!" },
          { pt: "O Pedrinho só tem três anos.", ru: "Маленькому Педру всего три года." },
          { pt: "Que livrão enorme!", ru: "Какая огромная книжища!" }
        ]
      },
      {
        note: "Уменьшительные формы чаще всего выражают ласку и нежность, а не только маленький размер. Они очень распространены в неформальном общении, особенно между родителями и детьми."
      }
    ],
    exercises: ex1,
    vocabulary: [
      { pt: "o livro", ru: "книга" },
      { pt: "a casa", ru: "дом" },
      { pt: "a mesa", ru: "стол" },
      { pt: "o homem", ru: "мужчина" },
      { pt: "a mulher", ru: "женщина" },
      { pt: "o gato", ru: "кот" },
      { pt: "a cidade", ru: "город" },
      { pt: "o animal", ru: "животное" },
      { pt: "a flor", ru: "цветок" },
      { pt: "o jornal", ru: "газета" },
      { pt: "a viagem", ru: "путешествие" },
      { pt: "o pão", ru: "хлеб" }
    ],
    flashcards: [
      { id: "u1_livro", pt: "o livro", ru: "книга", hint: "мужской род, окончание -o", example: "Eu leio o livro." },
      { id: "u1_casa", pt: "a casa", ru: "дом", hint: "женский род, окончание -a", example: "A casa é grande." },
      { id: "u1_homem", pt: "o homem", ru: "мужчина", hint: "мн.ч.: os homens", example: "O homem trabalha." },
      { id: "u1_mulher", pt: "a mulher", ru: "женщина", hint: "мн.ч.: as mulheres", example: "A mulher fala português." },
      { id: "u1_cidade", pt: "a cidade", ru: "город", hint: "женский род, мн.ч.: as cidades", example: "A cidade é bonita." },
      { id: "u1_animal", pt: "o animal", ru: "животное", hint: "мн.ч.: os animais", example: "O animal é pequeno." },
      { id: "u1_flor", pt: "a flor", ru: "цветок", hint: "женский род, мн.ч.: as flores", example: "A flor é vermelha." },
      { id: "u1_pao", pt: "o pão", ru: "хлеб", hint: "мн.ч.: os pães", example: "O pão está fresco." },
      { id: "u1_escola_primaria", pt: "a escola primária", ru: "начальная школа", hint: "женский род, составное", example: "A escola primária fica perto de casa." },
      { id: "u1_fim_de_semana", pt: "o fim de semana", ru: "выходные", hint: "мужской род", example: "No fim de semana, vou à praia." },
      { id: "u1_janela", pt: "a janela", ru: "окно", hint: "женский род", example: "A janela está aberta." },
      { id: "u1_junto_com", pt: "junto com", ru: "вместе с", hint: "предлог", example: "Vou junto com os meus amigos." },
      { id: "u1_lingua", pt: "a língua", ru: "язык", hint: "женский род", example: "A língua portuguesa é bonita." },
      { id: "u1_mundo", pt: "o mundo", ru: "мир", hint: "мужской род", example: "O mundo é grande." },
      { id: "u1_noite", pt: "a noite", ru: "ночь", hint: "женский род", example: "A noite está fria." },
      { id: "u1_organizacoes", pt: "as organizações", ru: "организации", hint: "ж.р., мн.ч.", example: "As organizações internacionais ajudam muitos países." },
      { id: "u1_origem", pt: "a origem", ru: "происхождение", hint: "женский род", example: "A origem desta palavra é latina." },
      { id: "u1_outras", pt: "outras", ru: "другие", hint: "ж.р. мн.ч. от outro", example: "Há outras cidades bonitas em Portugal." },
      { id: "u1_pais", pt: "o país", ru: "страна", hint: "мужской род, мн.ч.: países", example: "Portugal é um país pequeno." },
      { id: "u1_por_isso", pt: "por isso", ru: "поэтому", hint: "союз причины", example: "Está a chover, por isso fico em casa." },
      { id: "u1_sempre", pt: "sempre", ru: "всегда", hint: "наречие", example: "Ela fala sempre português." },
      { id: "u1_varios", pt: "vários", ru: "несколько, различные", hint: "м.р. мн.ч.", example: "Há vários livros na mesa." },
    ]
  },

  // ===================== UNIT 2: Articles =====================
  {
    id: 2,
    title: "Артикли",
    description: "Определённые и неопределённые артикли в португальском языке",
    theory: [
      {
        heading: "Определённые артикли (Artigos definidos)",
        text: "Определённые артикли указывают на конкретный предмет, уже известный собеседникам. В португальском языке они изменяются по роду и числу."
      },
      {
        table: {
          headers: ["", "Мужской род", "Женский род"],
          rows: [
            ["Единственное число", "o", "a"],
            ["Множественное число", "os", "as"]
          ]
        }
      },
      {
        heading: "Неопределённые артикли (Artigos indefinidos)",
        text: "Неопределённые артикли используются, когда предмет упоминается впервые или является одним из многих."
      },
      {
        table: {
          headers: ["", "Мужской род", "Женский род"],
          rows: [
            ["Единственное число", "um", "uma"],
            ["Множественное число", "uns", "umas"]
          ]
        }
      },
      {
        heading: "Слияние артиклей с предлогами",
        text: "В европейском португальском определённые артикли сливаются с предлогами de, em, a, por. Каждый предлог имеет свои значения:"
      },
      {
        table: {
          headers: ["Предлог", "Значение", "Аналог в русском"],
          rows: [
            ["de", "принадлежность, происхождение, характеристика", "из, от, о; род. падеж (кого? чего?)"],
            ["em", "местоположение, время, тема", "в, на, о; предл. падеж (в чём? на чём?)"],
            ["a", "направление, время, адресат", "в, к, на; дат. падеж (кому? куда?)"],
            ["por", "причина, автор, маршрут", "через, по, за; твор. падеж (кем? чем?)"]
          ]
        }
      },
      {
        table: {
          headers: ["Предлог", "o", "a", "os", "as"],
          rows: [
            ["de", "do", "da", "dos", "das"],
            ["em", "no", "na", "nos", "nas"],
            ["a", "ao", "à", "aos", "às"],
            ["por", "pelo", "pela", "pelos", "pelas"]
          ]
        }
      },
      {
        examples: [
          { pt: "Portugal é o país mais ocidental do continente europeu.", ru: "Португалия — самая западная страна европейского континента. (de — принадлежность)" },
          { pt: "Londres é a capital da Inglaterra.", ru: "Лондон — столица Англии. (de — принадлежность)" },
          { pt: "Eles são dos Açores.", ru: "Они с Азорских островов. (de — происхождение)" },
          { pt: "Ele mora no segundo andar.", ru: "Он живёт на втором этаже. (em — местоположение)" },
          { pt: "Há sempre gente simpática nas festas da Isabel.", ru: "На вечеринках Изабел всегда приятные люди. (em — место; de — принадлежность)" },
          { pt: "O Paulo vai ao cinema.", ru: "Паулу идёт в кино. (a — направление)" },
          { pt: "A Ana chega à uma hora.", ru: "Ана приходит в час. (a — время)" },
          { pt: "O José só descansa aos domingos.", ru: "Жозе отдыхает только по воскресеньям. (a — время)" },
          { pt: "Eu espero pelo João.", ru: "Я жду Жуау. (por — ожидание кого-л.)" },
          { pt: "Esta receita foi criada pela Sandra.", ru: "Этот рецепт был создан Сандрой. (por — автор действия)" },
          { pt: "Os dois alunos caminham pelos parques da cidade.", ru: "Два студента гуляют по городским паркам. (por — маршрут)" }
        ]
      },
      {
        note: "В европейском португальском артикль часто используется перед именами собственными: O João, a Maria. Также артикль ставится перед притяжательными: o meu livro (моя книга)."
      },
      {
        heading: "Слияние неопределённых артиклей с предлогами",
        text: "Неопределённые артикли также сливаются с предлогами em и de. Значения предлогов те же: em — местоположение (в, на), de — принадлежность (чей), происхождение (откуда). Формы с de (dum, duma) чаще встречаются в разговорной речи; в письменном языке используют раздельную форму: de uma."
      },
      {
        table: {
          headers: ["Предлог", "um", "uma", "uns", "umas"],
          rows: [
            ["em", "num", "numa", "nuns", "numas"],
            ["de", "dum", "duma", "duns", "dumas"]
          ]
        }
      },
      {
        examples: [
          { pt: "Ela está num avião a caminho de Nova Iorque.", ru: "Она в самолёте по пути в Нью-Йорк. (em — местоположение)" },
          { pt: "Ele está numa idade difícil.", ru: "Он в трудном возрасте. (em — состояние)" },
          { pt: "Ela é filha dum professor.", ru: "Она дочь одного преподавателя. (de — принадлежность)" },
          { pt: "Ele vem duma terra distante.", ru: "Он приехал из далёкого края. (de — происхождение)" }
        ]
      }
    ],
    exercises: ex2,
    vocabulary: [
      { pt: "o rapaz", ru: "мальчик, парень" },
      { pt: "a rapariga", ru: "девочка, девушка" },
      { pt: "a escola", ru: "школа" },
      { pt: "o cinema", ru: "кино, кинотеатр" },
      { pt: "o supermercado", ru: "супермаркет" },
      { pt: "a comida", ru: "еда" },
      { pt: "o café", ru: "кофе; кафе" },
      { pt: "o carro", ru: "машина" },
      { pt: "a rua", ru: "улица" },
      { pt: "o professor", ru: "преподаватель" }
    ],
    flashcards: [
      { id: "u2_rapaz", pt: "o rapaz", ru: "мальчик, парень", hint: "артикль o — мужской род", example: "O rapaz é alto." },
      { id: "u2_rapariga", pt: "a rapariga", ru: "девочка, девушка", hint: "Европ. порт. вместо бразильского «a menina»", example: "A rapariga estuda muito." },
      { id: "u2_escola", pt: "a escola", ru: "школа", hint: "na escola = в школе", example: "Ela está na escola." },
      { id: "u2_cinema", pt: "o cinema", ru: "кино, кинотеатр", hint: "ao cinema = в кино", example: "Vamos ao cinema." },
      { id: "u2_comida", pt: "a comida", ru: "еда", hint: "da comida = (чего) еды", example: "Gosto da comida portuguesa." },
      { id: "u2_cafe", pt: "o café", ru: "кофе; кафе", hint: "мужской род, как и в порт.", example: "Quero um café, por favor." },
      { id: "u2_rua", pt: "a rua", ru: "улица", hint: "na rua = на улице", example: "As crianças brincam na rua." },
      { id: "u2_carro", pt: "o carro", ru: "машина", hint: "do carro = (чья) машины", example: "O carro é novo." },
      { id: "u2_americano", pt: "americano", ru: "американский; американец", hint: "м.р., ж.р.: americana", example: "O meu amigo é americano." },
      { id: "u2_amiga", pt: "a amiga", ru: "подруга", hint: "женский род", example: "A minha amiga vive em Lisboa." },
      { id: "u2_angolana", pt: "angolana", ru: "ангольская; ангольянка", hint: "ж.р.", example: "A música angolana é muito popular." },
      { id: "u2_apartamento", pt: "o apartamento", ru: "квартира", hint: "мужской род", example: "O apartamento é grande e bonito." },
      { id: "u2_arcaica", pt: "arcaica", ru: "архаичная", hint: "ж.р., м.р.: arcaico", example: "Esta forma é arcaica." },
      { id: "u2_azul", pt: "azul", ru: "синий, голубой", hint: "неизменяемое по роду", example: "O céu é azul." },
      { id: "u2_berco", pt: "o berço", ru: "колыбель", hint: "мужской род", example: "O berço da língua portuguesa é Portugal." },
      { id: "u2_biblioteca", pt: "a biblioteca", ru: "библиотека", hint: "женский род", example: "A biblioteca tem muitos livros." },
      { id: "u2_brasileiro", pt: "brasileiro", ru: "бразильский; бразилец", hint: "м.р., ж.р.: brasileira", example: "O português brasileiro é diferente." },
      { id: "u2_camisa", pt: "a camisa", ru: "рубашка", hint: "женский род", example: "A camisa é branca." },
      { id: "u2_capital", pt: "a capital", ru: "столица", hint: "женский род", example: "Lisboa é a capital de Portugal." },
      { id: "u2_centro", pt: "o centro", ru: "центр", hint: "мужской род", example: "Moro no centro da cidade." },
      { id: "u2_cidade", pt: "a cidade", ru: "город", hint: "женский род", example: "A cidade é muito bonita." },
      { id: "u2_compreender", pt: "compreender", ru: "понимать, включать", hint: "глагол", example: "Compreendo bem o português." },
      { id: "u2_cor", pt: "a cor", ru: "цвет", hint: "женский род, мн.ч.: cores", example: "Qual é a sua cor favorita?" },
      { id: "u2_correto", pt: "correto", ru: "правильный", hint: "м.р., ж.р.: correta", example: "Isso está correto." },
      { id: "u2_de_acordo_com", pt: "de acordo com", ru: "в соответствии с", hint: "предлог", example: "De acordo com o professor, o exame é fácil." },
      { id: "u2_descanso", pt: "o descanso", ru: "отдых", hint: "мужской род", example: "O domingo é um dia de descanso." },
      { id: "u2_domingo", pt: "o domingo", ru: "воскресенье", hint: "мужской род", example: "Ao domingo, vou ao parque." },
      { id: "u2_empresa", pt: "a empresa", ru: "компания, фирма", hint: "женский род", example: "A empresa é grande." },
      { id: "u2_enorme", pt: "enorme", ru: "огромный", hint: "неизменяемое по роду", example: "O parque é enorme." },
      { id: "u2_exotico", pt: "exótico", ru: "экзотический", hint: "м.р., ж.р.: exótica", example: "O animal é exótico." },
      { id: "u2_familia", pt: "a família", ru: "семья", hint: "женский род", example: "A família é grande." },
      { id: "u2_forma", pt: "a forma", ru: "форма", hint: "женский род", example: "A forma do edifício é moderna." },
      { id: "u2_grande", pt: "grande", ru: "большой", hint: "неизменяемое по роду", example: "A casa é grande." },
      { id: "u2_ingles", pt: "inglês", ru: "английский; англичанин", hint: "м.р., ж.р.: inglesa", example: "Ele fala inglês muito bem." },
      { id: "u2_jogar_a_bola", pt: "jogar à bola", ru: "играть в мяч", hint: "выражение", example: "Os rapazes gostam de jogar à bola." },
      { id: "u2_linda", pt: "linda", ru: "красивая", hint: "ж.р., м.р.: lindo", example: "A praia é linda." },
      { id: "u2_norte", pt: "o Norte", ru: "север", hint: "мужской род", example: "O Norte de Portugal é muito verde." },
      { id: "u2_onde", pt: "onde", ru: "где", hint: "наречие места", example: "Onde fica a biblioteca?" },
      { id: "u2_parque", pt: "o parque", ru: "парк", hint: "мужской род", example: "O parque é grande e bonito." },
      { id: "u2_primeiro", pt: "primeiro", ru: "первый", hint: "м.р., ж.р.: primeira", example: "É o primeiro dia de aulas." },
      { id: "u2_universidade", pt: "a universidade", ru: "университет", hint: "женский род", example: "A universidade fica no centro." },
      { id: "u2_zona", pt: "a zona", ru: "зона, район", hint: "женский род", example: "Esta zona da cidade é calma." },
    ]
  },

  // ===================== UNIT 3: Numbers, Times, Dates =====================
  {
    id: 3,
    title: "Числа, время и даты",
    description: "Количественные и порядковые числительные, обозначение времени и дат",
    theory: [
      {
        heading: "Количественные числительные (Números cardinais)",
        text: "Числительные от 1 до 20 нужно запомнить. Обратите внимание, что 1 и 2 имеют формы мужского и женского рода."
      },
      {
        table: {
          headers: ["Число", "Португальский", "Число", "Португальский"],
          rows: [
            ["0", "zero", "11", "onze"],
            ["1", "um / uma", "12", "doze"],
            ["2", "dois / duas", "13", "treze"],
            ["3", "três", "14", "catorze"],
            ["4", "quatro", "15", "quinze"],
            ["5", "cinco", "16", "dezasseis"],
            ["6", "seis", "17", "dezassete"],
            ["7", "sete", "18", "dezoito"],
            ["8", "oito", "19", "dezanove"],
            ["9", "nove", "20", "vinte"],
            ["10", "dez", "", ""]
          ]
        }
      },
      {
        heading: "Десятки и сотни",
        text: "В европейском португальском десятки и единицы соединяются союзом «e»: vinte e um (21), trinta e cinco (35)."
      },
      {
        table: {
          headers: ["Число", "Португальский", "Число", "Португальский"],
          rows: [
            ["20", "vinte", "200", "duzentos/as"],
            ["30", "trinta", "300", "trezentos/as"],
            ["40", "quarenta", "400", "quatrocentos/as"],
            ["50", "cinquenta", "500", "quinhentos/as"],
            ["60", "sessenta", "600", "seiscentos/as"],
            ["70", "setenta", "700", "setecentos/as"],
            ["80", "oitenta", "800", "oitocentos/as"],
            ["90", "noventa", "900", "novecentos/as"],
            ["100", "cem / cento", "1000", "mil"]
          ]
        }
      },
      {
        heading: "Время (As horas)",
        text: "Для обозначения времени используется глагол «ser»: É uma hora (час) — «é» для единицы, полудня и полуночи; São duas horas (два часа) — «são» для остальных. Слово «horas» часто опускается при добавлении минут. Минуты после часа добавляются через «e»: São quatro e dez (4:10)."
      },
      {
        examples: [
          { pt: "Que horas são? — São duas horas.", ru: "Который час? — Два часа." },
          { pt: "É uma e vinte.", ru: "Час двадцать (1:20)." },
          { pt: "São quatro e dez.", ru: "Четыре десять (4:10)." },
          { pt: "São nove e cinco.", ru: "Девять ноль пять (9:05)." }
        ]
      },
      {
        heading: "E meia и um quarto — половина и четверть",
        text: "Для «половины» используется «e meia» (от «meia hora» — полчаса): São dez e meia (10:30). Для «четверти» — «e um quarto»: São três e um quarto (3:15). Полдень — «é meio-dia», полночь — «é meia-noite»."
      },
      {
        examples: [
          { pt: "São dez e meia.", ru: "Половина одиннадцатого (10:30)." },
          { pt: "É uma e um quarto.", ru: "Четверть второго (1:15)." },
          { pt: "É meio-dia.", ru: "Полдень." },
          { pt: "É meia-noite.", ru: "Полночь." }
        ]
      },
      {
        heading: "Para и menos — время «без»",
        text: "После половины время выражается через следующий час. Стандартная форма — «para as» (букв. «до»): São cinco para as três = без пяти три. На севере Португалии используется «menos»: São três menos cinco. Оба варианта правильны."
      },
      {
        examples: [
          { pt: "São cinco para as três.", ru: "Без пяти три (2:55)." },
          { pt: "São dez para as oito.", ru: "Без десяти восемь (7:50)." },
          { pt: "São quinze para a uma.", ru: "Без пятнадцати час (12:45)." },
          { pt: "São três menos cinco.", ru: "Без пяти три — северный вариант (2:55)." }
        ]
      },
      {
        note: "Форма «para as» является стандартной для всей Португалии. «Menos» используется преимущественно на севере страны. В Бразилии обе формы употребляются."
      },
      {
        heading: "Части дня и предлоги времени (da manhã, à/às, pela/pelas)",
        text: "Чтобы уточнить время суток, добавьте: da manhã (утро), da tarde (день/вечер до темноты), da noite (после наступления темноты). Для «в» (точное время) — à/às: à uma hora, às duas horas. Для «около» — pela/pelas: pela uma, pelas seis. Для полудня — «ao meio-dia», для полуночи — «à meia-noite»."
      },
      {
        table: {
          headers: ["Выражение", "Перевод", "Пример"],
          rows: [
            ["da manhã", "утра", "às oito da manhã (в 8 утра)"],
            ["da tarde", "дня / вечера", "às três da tarde (в 3 дня)"],
            ["da noite", "ночи / вечера", "às dez da noite (в 10 вечера)"],
            ["à / às", "в (точное время)", "às duas (в два часа)"],
            ["ao meio-dia", "в полдень", "Ao meio-dia vou almoçar."],
            ["à meia-noite", "в полночь", "À meia-noite tudo fecha."],
            ["pela / pelas", "около", "pelas seis (около шести)"]
          ]
        }
      },
      {
        examples: [
          { pt: "Às três horas da tarde.", ru: "В три часа дня." },
          { pt: "Pela uma da tarde.", ru: "Около часа дня." },
          { pt: "Pelas seis da manhã.", ru: "Около шести утра." },
          { pt: "Ao meio-dia vou almoçar.", ru: "В полдень я иду обедать." }
        ]
      },
      {
        note: "В СМИ, на транспорте и в официальных объявлениях используется 24-часовой формат: «O acidente ocorreu pelas dezasseis horas» (Авария произошла около 16:00)."
      },
      {
        heading: "Дни недели (Os dias da semana)",
        text: "В португальском языке дни недели от понедельника до пятницы — женского рода и образованы с числительным + feira. Суббота и воскресенье — мужского рода. Дни недели НЕ пишутся с заглавной буквы (кроме начала предложения)."
      },
      {
        table: {
          headers: ["Португальский", "Русский", "Род", "Предлог «в»"],
          rows: [
            ["a segunda-feira", "понедельник", "ж.р.", "na segunda-feira"],
            ["a terça-feira", "вторник", "ж.р.", "na terça-feira"],
            ["a quarta-feira", "среда", "ж.р.", "na quarta-feira"],
            ["a quinta-feira", "четверг", "ж.р.", "na quinta-feira"],
            ["a sexta-feira", "пятница", "ж.р.", "na sexta-feira"],
            ["o sábado", "суббота", "м.р.", "no sábado"],
            ["o domingo", "воскресенье", "м.р.", "no domingo"]
          ]
        }
      },
      {
        examples: [
          { pt: "Ele tem folga na segunda e terça-feira.", ru: "У него выходной в понедельник и вторник." },
          { pt: "Ela trabalha terça, quarta e sexta-feira.", ru: "Она работает во вторник, среду и пятницу." },
          { pt: "Ao(s) sábado(s) vou ao mercado.", ru: "По субботам я хожу на рынок." },
          { pt: "À(s) quarta(s)-feira(s) tenho aula de português.", ru: "По средам у меня урок португальского." }
        ]
      },
      {
        note: "В разговорной речи слово «feira» часто опускается: na sexta = na sexta-feira (в пятницу), na terça e na quinta = na terça-feira e na quinta-feira (во вторник и четверг). При перечислении нескольких дней «feira» ставится только после последнего: terça, quarta e sexta-feira."
      },
      {
        heading: "По (дням недели): ao/aos и à/às",
        text: "Чтобы сказать «по субботам», «по воскресеньям» (регулярно), используется предлог «a» + артикль. Суббота и воскресенье — мужской род → ao/aos: ao sábado, aos domingos. Остальные дни — женский род → à/às: à segunda-feira, às quartas-feiras. Форма с артиклем единственного числа (ao sábado) и множественного (aos sábados) равнозначны."
      },
      {
        examples: [
          { pt: "Ao sábado vou ao mercado.", ru: "По субботам я хожу на рынок." },
          { pt: "Aos domingos descanso em casa.", ru: "По воскресеньям я отдыхаю дома." },
          { pt: "À sexta-feira saio mais cedo.", ru: "По пятницам я ухожу раньше." },
          { pt: "Às quartas tenho aula de português.", ru: "По средам у меня урок португальского." }
        ]
      },
      {
        heading: "Месяцы, времена года и века",
        text: "После орфографической реформы 1990 года месяцы и времена года пишутся с маленькой буквы. Для обозначения «в» (каком месяце) используется предлог «em»."
      },
      {
        table: {
          headers: ["Португальский", "Русский", "Португальский", "Русский"],
          rows: [
            ["janeiro", "январь", "julho", "июль"],
            ["fevereiro", "февраль", "agosto", "август"],
            ["março", "март", "setembro", "сентябрь"],
            ["abril", "апрель", "outubro", "октябрь"],
            ["maio", "май", "novembro", "ноябрь"],
            ["junho", "июнь", "dezembro", "декабрь"]
          ]
        }
      },
      {
        examples: [
          { pt: "Em dezembro faz frio.", ru: "В декабре холодно." },
          { pt: "O inverno é de dezembro a março.", ru: "Зима — с декабря по март." },
          { pt: "A primavera começa em março.", ru: "Весна начинается в марте." },
          { pt: "Estamos no século XXI.", ru: "Мы в XXI веке." }
        ]
      },
      {
        note: "Времена года: o inverno (зима), a primavera (весна), o verão (лето), o outono (осень). Века обозначаются римскими цифрами: o século XX (20-й век), o século XXI (21-й век)."
      },
      {
        heading: "Даты (As datas)",
        text: "Даты выражаются количественными числительными: dia dois de março (2 марта). В числовом формате порядок: год-месяц-день (2014-01-03). В письменном: день + «de» + месяц + «de» + год."
      },
      {
        examples: [
          { pt: "Três de janeiro de dois mil e catorze.", ru: "Третье января две тысячи четырнадцатого года." },
          { pt: "Sexta-feira, três de janeiro de 2014.", ru: "Пятница, 3 января 2014 года." }
        ]
      },
      {
        note: "Обратите внимание на европейские формы: dezasseis (16), dezassete (17), dezanove (19) — в бразильском варианте они пишутся с двойным «s»: dezesseis, dezessete, dezenove."
      }
    ],
    lessons: [
      { title: "Часть 1: Числа", theoryRange: [0, 4] },
      { title: "Часть 2: Время", theoryRange: [4, 15] },
      { title: "Часть 3: Дни недели и месяцы", theoryRange: [15, 25] },
      { title: "Часть 4: Даты", theoryRange: [25, 28] }
    ],
    exercises: ex3,
    vocabulary: [
      { pt: "a hora", ru: "час" },
      { pt: "o minuto", ru: "минута" },
      { pt: "meia", ru: "половина" },
      { pt: "um quarto", ru: "четверть" },
      { pt: "hoje", ru: "сегодня" },
      { pt: "amanhã", ru: "завтра" },
      { pt: "ontem", ru: "вчера" },
      { pt: "o mês", ru: "месяц" },
      { pt: "o ano", ru: "год" },
      { pt: "a semana", ru: "неделя" }
    ],
    flashcards: [
      { id: "u3_hora", pt: "a hora", ru: "час", hint: "Que horas são?", example: "Que horas são? — São três horas." },
      { id: "u3_hoje", pt: "hoje", ru: "сегодня", hint: "наречие времени", example: "Hoje é segunda-feira." },
      { id: "u3_amanha", pt: "amanhã", ru: "завтра", hint: "наречие времени", example: "Amanhã vou ao médico." },
      { id: "u3_ontem", pt: "ontem", ru: "вчера", hint: "наречие времени", example: "Ontem choveu muito." },
      { id: "u3_semana", pt: "a semana", ru: "неделя", hint: "esta semana = на этой неделе", example: "Esta semana estou ocupado." },
      { id: "u3_mes", pt: "o mês", ru: "месяц", hint: "мн.ч.: os meses", example: "Este mês é fevereiro." },
      { id: "u3_ano", pt: "o ano", ru: "год", hint: "мн.ч.: os anos", example: "O ano tem doze meses." },
      { id: "u3_meia", pt: "meia", ru: "половина (при указании времени)", hint: "São duas e meia = 2:30", example: "O filme começa às sete e meia." },
      { id: "u3_abrir_ao_publico", pt: "abrir ao público", ru: "открывать для публики", hint: "выражение", example: "O museu abre ao público às dez." },
      { id: "u3_algumas", pt: "algumas", ru: "некоторые", hint: "ж.р. мн.ч.", example: "Algumas lojas estão fechadas." },
      { id: "u3_carnaval", pt: "o Carnaval", ru: "карнавал", hint: "мужской род", example: "O Carnaval é em fevereiro." },
      { id: "u3_chuva", pt: "a chuva", ru: "дождь", hint: "женский род", example: "A chuva não para." },
      { id: "u3_encerrar", pt: "encerrar", ru: "закрывать", hint: "глагол", example: "As lojas encerram às sete." },
      { id: "u3_estabelecimentos", pt: "os estabelecimentos comerciais", ru: "торговые заведения", hint: "м.р. мн.ч.", example: "Os estabelecimentos comerciais abrem às nove." },
      { id: "u3_horario", pt: "o horário de funcionamento", ru: "режим работы", hint: "мужской род", example: "Qual é o horário de funcionamento?" },
      { id: "u3_natal", pt: "o Natal", ru: "Рождество", hint: "мужской род", example: "O Natal é em dezembro." },
      { id: "u3_neve", pt: "a neve", ru: "снег", hint: "женский род", example: "Há neve na serra." },
      { id: "u3_no_geral", pt: "no geral", ru: "в целом", hint: "наречие", example: "No geral, o tempo é bom." },
      { id: "u3_nomeadamente", pt: "nomeadamente", ru: "а именно", hint: "наречие", example: "Há vários feriados, nomeadamente o Natal." },
      { id: "u3_normalmente", pt: "normalmente", ru: "обычно", hint: "наречие", example: "Normalmente, janto às oito." },
      { id: "u3_pascoa", pt: "a Páscoa", ru: "Пасха", hint: "женский род", example: "A Páscoa é na primavera." },
      { id: "u3_porem", pt: "porém", ru: "однако", hint: "союз", example: "O dia está bonito, porém frio." },
      { id: "u3_tempo", pt: "o tempo", ru: "время; погода", hint: "мужской род", example: "Não tenho tempo." },
      { id: "u3_ter_folga", pt: "ter folga", ru: "иметь выходной", hint: "выражение с ter", example: "Amanhã tenho folga." },
      { id: "u3_obrigatorio", pt: "é obrigatório", ru: "обязательно", hint: "выражение", example: "É obrigatório usar máscara." },
    ]
  },

  // ===================== UNIT 4: Subject Pronouns & Regular Verbs =====================
  {
    id: 4,
    title: "Личные местоимения и правильные глаголы",
    description: "Личные местоимения-подлежащие и спряжение правильных глаголов (-ar, -er, -ir) в настоящем времени",
    theory: [
      {
        heading: "Личные местоимения (Pronomes pessoais sujeitos)",
        text: "В европейском португальском система местоимений отличается от бразильского варианта. Обратите внимание на формы вежливого обращения."
      },
      {
        table: {
          headers: ["Лицо", "Единственное число", "Множественное число"],
          rows: [
            ["1-е лицо", "eu (я)", "nós (мы)"],
            ["2-е лицо (неформ.)", "tu (ты)", "vós (вы, арх.)"],
            ["3-е лицо / вежливое", "ele/ela (он/она), você (Вы)", "eles/elas (они), vocês (вы)"]
          ]
        }
      },
      {
        heading: "Правильные глаголы на -ar (1-е спряжение)",
        text: "Первое спряжение — самое распространённое. Основа глагола получается отбрасыванием окончания -ar."
      },
      {
        table: {
          headers: ["Лицо", "falar (говорить)"],
          rows: [
            ["eu", "falo"],
            ["tu", "falas"],
            ["ele/ela/você", "fala"],
            ["nós", "falamos"],
            ["eles/elas/vocês", "falam"]
          ]
        }
      },
      {
        table: {
          headers: ["Глагол", "Перевод", "Глагол", "Перевод"],
          rows: [
            ["adorar", "обожать", "gostar de", "нравиться"],
            ["ajudar", "помогать", "jogar", "играть (спорт)"],
            ["andar", "ходить, двигаться", "limpar", "чистить"],
            ["apanhar", "ловить, поймать", "mandar", "приказывать"],
            ["cantar", "петь", "morar", "жить, проживать"],
            ["comprar", "покупать", "nadar", "плавать"],
            ["desejar", "желать", "olhar", "смотреть"],
            ["detestar", "ненавидеть", "pensar em", "думать о"],
            ["entrar", "входить", "sonhar", "мечтать"],
            ["escutar", "слушать", "trabalhar", "работать"],
            ["esperar", "ждать; надеяться", "visitar", "посещать"]
          ]
        }
      },
      {
        heading: "Правильные глаголы на -er (2-е спряжение)",
        text: "Второе спряжение — глаголы, оканчивающиеся на -er."
      },
      {
        table: {
          headers: ["Лицо", "comer (есть)"],
          rows: [
            ["eu", "como"],
            ["tu", "comes"],
            ["ele/ela/você", "come"],
            ["nós", "comemos"],
            ["eles/elas/vocês", "comem"]
          ]
        }
      },
      {
        heading: "Правильные глаголы на -ir (3-е спряжение)",
        text: "Третье спряжение — глаголы, оканчивающиеся на -ir."
      },
      {
        table: {
          headers: ["Лицо", "partir (уезжать)"],
          rows: [
            ["eu", "parto"],
            ["tu", "partes"],
            ["ele/ela/você", "parte"],
            ["nós", "partimos"],
            ["eles/elas/vocês", "partem"]
          ]
        }
      },
      {
        table: {
          headers: ["-er глагол", "Перевод", "-ir глагол", "Перевод"],
          rows: [
            ["beber", "пить", "abrir", "открывать"],
            ["comer", "есть", "agir", "действовать"],
            ["compreender", "понимать", "assistir", "помогать; смотреть"],
            ["entender", "понимать", "cobrir", "покрывать"],
            ["escrever", "писать", "conseguir", "удаваться, суметь"],
            ["fornecer", "поставлять", "decidir", "решать"],
            ["oferecer", "предлагать (дар)", "desistir", "сдаваться"],
            ["perceber", "понимать, осознавать", "dormir", "спать"],
            ["querer", "хотеть", "preferir", "предпочитать"],
            ["responder", "отвечать", "repartir", "делить, распределять"],
            ["vencer", "побеждать", "sentir", "чувствовать"],
            ["vender", "продавать", "tossir", "кашлять"],
            ["viver", "жить", "partir", "уезжать; ломать"]
          ]
        }
      },
      {
        note: "В глаголах на -ir, если гласная основы — e или o, она меняется на i или u в 1-м лице: preferir → prefiro, sentir → sinto, dormir → durmo, tossir → tusso. Если конечная согласная основы — c, g или g(u), она меняется на ç, j, g для сохранения звука: vencer → venço, agir → ajo, conseguir → consigo."
      },
      {
        examples: [
          { pt: "Eu falo português.", ru: "Я говорю по-португальски." },
          { pt: "Tu comes muito.", ru: "Ты много ешь." },
          { pt: "Nós partimos amanhã.", ru: "Мы уезжаем завтра." },
          { pt: "Eles trabalham todos os dias.", ru: "Они работают каждый день." }
        ]
      },
      {
        note: "В европейском португальском «tu» широко используется в неформальном общении, в отличие от Бразилии. «Você» используется в более формальном контексте или при обращении к незнакомым людям. Помните, что в португальском подлежащее-местоимение часто опускается, так как окончание глагола указывает на лицо."
      },
      {
        heading: "Глаголы от pôr (4-я группа)",
        text: "Помимо трёх основных спряжений (-ar, -er, -ir), существует четвёртая группа — глаголы, образованные от pôr (класть, ставить). Сюда входят: compor (составлять), decompor (разлагать), repor (возвращать), propor (предлагать), supor (предполагать), expor (выставлять), dispor (располагать)."
      },
      {
        table: {
          headers: ["Лицо", "pôr (класть)"],
          rows: [
            ["eu", "ponho"],
            ["tu", "pões"],
            ["ele/ela/você", "põe"],
            ["nós", "pomos"],
            ["eles/elas/vocês", "põem"]
          ]
        }
      },
      {
        examples: [
          { pt: "Eu ponho a mesa todos os dias.", ru: "Я накрываю на стол каждый день." },
          { pt: "Ela propõe uma solução diferente.", ru: "Она предлагает другое решение." },
          { pt: "Nós dispomos de pouco tempo.", ru: "Мы располагаем малым временем." },
          { pt: "Eles compõem músicas juntos.", ru: "Они вместе сочиняют музыку." }
        ]
      }
    ],
    lessons: [
      { title: "Часть 1: Местоимения", theoryRange: [0, 2] },
      { title: "Часть 2: Глаголы -ar, -er, -ir", theoryRange: [2, 13] },
      { title: "Часть 3: Глаголы от pôr", theoryRange: [13, 16] }
    ],
    exercises: ex4,
    vocabulary: [
      { pt: "falar", ru: "говорить" },
      { pt: "comer", ru: "есть" },
      { pt: "partir", ru: "уезжать, отправляться" },
      { pt: "trabalhar", ru: "работать" },
      { pt: "morar", ru: "жить, проживать" },
      { pt: "beber", ru: "пить" },
      { pt: "abrir", ru: "открывать" },
      { pt: "estudar", ru: "учиться, изучать" },
      { pt: "escrever", ru: "писать" },
      { pt: "viver", ru: "жить" }
    ],
    flashcards: [
      { id: "u4_falar", pt: "falar", ru: "говорить", hint: "1-е спряжение (-ar)", example: "Eu falo português." },
      { id: "u4_comer", pt: "comer", ru: "есть", hint: "2-е спряжение (-er)", example: "Nós comemos ao meio-dia." },
      { id: "u4_partir", pt: "partir", ru: "уезжать", hint: "3-е спряжение (-ir)", example: "O comboio parte às oito." },
      { id: "u4_trabalhar", pt: "trabalhar", ru: "работать", hint: "eu trabalho, tu trabalhas", example: "Eles trabalham muito." },
      { id: "u4_morar", pt: "morar", ru: "жить, проживать", hint: "eu moro, tu moras", example: "Eu moro no Porto." },
      { id: "u4_beber", pt: "beber", ru: "пить", hint: "eu bebo, tu bebes", example: "Tu bebes café?" },
      { id: "u4_estudar", pt: "estudar", ru: "учиться, изучать", hint: "eu estudo, tu estudas", example: "Ela estuda medicina." },
      { id: "u4_escrever", pt: "escrever", ru: "писать", hint: "eu escrevo, tu escreves", example: "Eu escrevo uma carta." },
      { id: "u4_a_tempo_inteiro", pt: "a tempo inteiro", ru: "на полную ставку", hint: "выражение", example: "Trabalho a tempo inteiro." },
      { id: "u4_adicionar", pt: "adicionar", ru: "добавлять", hint: "глагол", example: "Preciso de adicionar mais sal." },
      { id: "u4_ainda", pt: "ainda", ru: "ещё", hint: "наречие", example: "Ainda não terminei." },
      { id: "u4_alto", pt: "alto", ru: "высокий; громкий", hint: "м.р., ж.р.: alta", example: "O edifício é muito alto." },
      { id: "u4_andar_a_pe", pt: "andar a pé", ru: "ходить пешком", hint: "выражение", example: "Ando a pé todos os dias." },
      { id: "u4_aniversario", pt: "o aniversário", ru: "день рождения", hint: "мужской род", example: "O meu aniversário é em maio." },
      { id: "u4_arquitetura", pt: "a arquitetura", ru: "архитектура", hint: "женский род", example: "A arquitetura de Lisboa é bonita." },
      { id: "u4_atualmente", pt: "atualmente", ru: "в настоящее время", hint: "наречие", example: "Atualmente, vivo em Lisboa." },
      { id: "u4_autocarro", pt: "o autocarro", ru: "автобус", hint: "мужской род", example: "O autocarro chega às oito." },
      { id: "u4_baixo", pt: "baixo", ru: "низкий; тихий", hint: "м.р., ж.р.: baixa", example: "Ele é baixo e magro." },
      { id: "u4_bebe", pt: "o bebé", ru: "младенец", hint: "мужской род", example: "O bebé está a dormir." },
      { id: "u4_bolo", pt: "o bolo de aniversário", ru: "праздничный торт", hint: "мужской род", example: "O bolo de aniversário é de chocolate." },
      { id: "u4_calor", pt: "o calor", ru: "жара", hint: "мужской род", example: "Está muito calor hoje." },
      { id: "u4_cedo", pt: "cedo", ru: "рано", hint: "наречие", example: "Levanto-me cedo todos os dias." },
      { id: "u4_chamar", pt: "chamar", ru: "звать, называть", hint: "глагол", example: "Como se chama?" },
      { id: "u4_chocolate", pt: "o chocolate", ru: "шоколад", hint: "мужской род", example: "Gosto muito de chocolate." },
      { id: "u4_ciencias", pt: "as ciências", ru: "науки", hint: "ж.р. мн.ч.", example: "Estudo ciências na universidade." },
      { id: "u4_comecar", pt: "começar", ru: "начинать", hint: "глагол", example: "As aulas começam às nove." },
      { id: "u4_conhecer", pt: "conhecer", ru: "знать (кого-то)", hint: "глагол", example: "Quero conhecer Lisboa." },
      { id: "u4_continuar", pt: "continuar", ru: "продолжать", hint: "глагол", example: "Vou continuar a estudar." },
      { id: "u4_cozinheira", pt: "a cozinheira", ru: "повариха", hint: "ж.р., м.р.: cozinheiro", example: "A cozinheira prepara o jantar." },
      { id: "u4_durante", pt: "durante", ru: "в течение, во время", hint: "предлог", example: "Durante o verão, faz calor." },
      { id: "u4_em_ponto", pt: "em ponto", ru: "ровно (о времени)", hint: "выражение", example: "O comboio parte às três em ponto." },
      { id: "u4_empregado", pt: "o empregado", ru: "работник", hint: "м.р., ж.р.: empregada", example: "O empregado trabalha na loja." },
      { id: "u4_engenharia", pt: "a engenharia", ru: "инженерия", hint: "женский род", example: "Estudo engenharia na universidade." },
      { id: "u4_frio", pt: "o frio", ru: "холод", hint: "мужской род", example: "No inverno, faz muito frio." },
      { id: "u4_hoje", pt: "hoje", ru: "сегодня", hint: "наречие", example: "Hoje é segunda-feira." },
      { id: "u4_informacao", pt: "a informação", ru: "информация", hint: "женский род", example: "Preciso de mais informação." },
      { id: "u4_jantar", pt: "o jantar", ru: "ужин", hint: "мужской род", example: "O jantar é às oito." },
      { id: "u4_ladrao", pt: "o ladrão", ru: "вор", hint: "м.р., мн.ч.: ladrões", example: "O ladrão roubou o dinheiro." },
      { id: "u4_leite", pt: "o leite", ru: "молоко", hint: "мужской род", example: "Bebo leite ao pequeno-almoço." },
      { id: "u4_loja", pt: "a loja", ru: "магазин", hint: "женский род", example: "A loja abre às dez." },
      { id: "u4_mal", pt: "mal", ru: "плохо", hint: "наречие", example: "Ele fala mal português." },
      { id: "u4_mar", pt: "o mar", ru: "море", hint: "мужской род", example: "O mar está calmo hoje." },
      { id: "u4_mas", pt: "mas", ru: "но", hint: "союз", example: "É pequeno, mas bonito." },
      { id: "u4_mesa", pt: "a mesa", ru: "стол", hint: "женский род", example: "A mesa está na cozinha." },
      { id: "u4_normalmente", pt: "normalmente", ru: "обычно", hint: "наречие", example: "Normalmente, como ao meio-dia." },
      { id: "u4_obra", pt: "a obra", ru: "стройка; произведение", hint: "женский род", example: "A obra demora dois meses." },
      { id: "u4_outra_vez", pt: "outra vez", ru: "снова", hint: "наречие", example: "Diz outra vez, por favor." },
      { id: "u4_peixe", pt: "o peixe", ru: "рыба", hint: "мужской род", example: "O peixe está fresco." },
      { id: "u4_possivel", pt: "possível", ru: "возможный", hint: "неизменяемое по роду", example: "É possível chegar a tempo." },
      { id: "u4_prateleira", pt: "a prateleira", ru: "полка", hint: "женский род", example: "Os livros estão na prateleira." },
      { id: "u4_primeiro", pt: "primeiro", ru: "первый; сначала", hint: "наречие/числительное", example: "Primeiro, como o peixe." },
      { id: "u4_principalmente", pt: "principalmente", ru: "главным образом", hint: "наречие", example: "Gosto principalmente de peixe." },
      { id: "u4_produtos", pt: "os produtos", ru: "продукты, товары", hint: "м.р. мн.ч.", example: "Os produtos são de boa qualidade." },
      { id: "u4_quando", pt: "quando", ru: "когда", hint: "наречие/союз", example: "Quando chegas a casa?" },
      { id: "u4_rapidamente", pt: "rapidamente", ru: "быстро", hint: "наречие", example: "Ele come rapidamente." },
      { id: "u4_relaxar", pt: "relaxar", ru: "расслабляться", hint: "глагол", example: "Gosto de relaxar no fim de semana." },
      { id: "u4_roupa", pt: "a roupa de marca", ru: "брендовая одежда", hint: "женский род", example: "Ele gosta de roupa de marca." },
      { id: "u4_sair", pt: "sair", ru: "выходить", hint: "глагол", example: "Vou sair às seis." },
      { id: "u4_sempre", pt: "sempre", ru: "всегда", hint: "наречие", example: "Ele chega sempre a tempo." },
      { id: "u4_tambem", pt: "também", ru: "тоже, также", hint: "наречие", example: "Eu também falo português." },
      { id: "u4_tendencia", pt: "a tendência", ru: "тенденция", hint: "женский род", example: "Esta é uma tendência moderna." },
      { id: "u4_texto", pt: "o texto", ru: "текст", hint: "мужской род", example: "O texto é difícil." },
      { id: "u4_todos_os_dias", pt: "todos os dias", ru: "каждый день", hint: "выражение частоты", example: "Estudo todos os dias." },
      { id: "u4_tradicionalmente", pt: "tradicionalmente", ru: "традиционно", hint: "наречие", example: "Tradicionalmente, comemos bacalhau no Natal." },
      { id: "u4_tudo", pt: "tudo", ru: "всё", hint: "местоимение", example: "Tudo está bem." },
      { id: "u4_usar", pt: "usar", ru: "использовать, носить", hint: "глагол", example: "Uso o computador todos os dias." },
    ]
  },

  // ===================== UNIT 5: Irregular Verbs (Present) =====================
  {
    id: 5,
    title: "Неправильные глаголы в настоящем времени",
    description: "Спряжение основных неправильных глаголов в Presente do Indicativo",
    theory: [
      {
        heading: "Глагол ir (идти, ехать)",
        text: "Один из самых употребительных неправильных глаголов. Также используется для образования ближайшего будущего: ir + инфинитив."
      },
      {
        table: {
          headers: ["Лицо", "ir (идти)"],
          rows: [
            ["eu", "vou"],
            ["tu", "vais"],
            ["ele/ela/você", "vai"],
            ["nós", "vamos"],
            ["eles/elas/vocês", "vão"]
          ]
        }
      },
      {
        heading: "Глагол ter (иметь)",
        text: "Глагол «ter» означает «иметь» и также используется как вспомогательный глагол для образования сложных времён."
      },
      {
        table: {
          headers: ["Лицо", "ter (иметь)"],
          rows: [
            ["eu", "tenho"],
            ["tu", "tens"],
            ["ele/ela/você", "tem"],
            ["nós", "temos"],
            ["eles/elas/vocês", "têm"]
          ]
        }
      },
      {
        heading: "Глагол fazer (делать)",
        text: "Глагол «fazer» — один из ключевых неправильных глаголов. Используется также в выражениях о погоде: faz frio (холодно), faz calor (жарко)."
      },
      {
        table: {
          headers: ["Лицо", "fazer (делать)"],
          rows: [
            ["eu", "faço"],
            ["tu", "fazes"],
            ["ele/ela/você", "faz"],
            ["nós", "fazemos"],
            ["eles/elas/vocês", "fazem"]
          ]
        }
      },
      {
        heading: "Другие важные неправильные глаголы",
        text: "Глаголы poder (мочь), querer (хотеть), saber (знать), dizer (говорить, сказать) и dar (давать) также неправильные."
      },
      {
        table: {
          headers: ["Лицо", "poder", "querer", "saber", "dizer", "dar"],
          rows: [
            ["eu", "posso", "quero", "sei", "digo", "dou"],
            ["tu", "podes", "queres", "sabes", "dizes", "dás"],
            ["ele/ela", "pode", "quer", "sabe", "diz", "dá"],
            ["nós", "podemos", "queremos", "sabemos", "dizemos", "damos"],
            ["eles/elas", "podem", "querem", "sabem", "dizem", "dão"]
          ]
        }
      },
      {
        examples: [
          { pt: "Eu vou ao trabalho de comboio.", ru: "Я еду на работу на поезде." },
          { pt: "Nós temos dois filhos.", ru: "У нас двое детей." },
          { pt: "O que fazes ao fim de semana?", ru: "Что ты делаешь на выходных?" },
          { pt: "Eles não podem vir hoje.", ru: "Они не могут прийти сегодня." }
        ]
      },
      {
        note: "В европейском португальском используется «comboio» (поезд) вместо бразильского «trem», «autocarro» (автобус) вместо «ônibus»."
      },
      {
        heading: "Saber и conhecer: два глагола «знать»",
        text: "В португальском языке есть два глагола со значением «знать». Saber — знать факты, информацию или уметь что-то делать. Conhecer — знать людей, места, быть знакомым с чем-то. Также saber может означать «иметь вкус»."
      },
      {
        table: {
          headers: ["Глагол", "Значение", "Пример"],
          rows: [
            ["saber", "знать факт", "Eu sei onde ela mora. (Я знаю, где она живёт.)"],
            ["saber", "уметь", "Tu sabes falar inglês? (Ты умеешь говорить по-английски?)"],
            ["saber", "иметь вкус", "O café sabe bem. (Кофе вкусный.)"],
            ["conhecer", "знать человека", "Conheces o Pedro? (Ты знаешь Педру?)"],
            ["conhecer", "знать место", "Eu conheço Lisboa muito bem. (Я очень хорошо знаю Лиссабон.)"]
          ]
        }
      },
      {
        heading: "Ter de / ter que: обязанность",
        text: "Конструкции ter de + инфинитив и ter que + инфинитив выражают необходимость или обязанность. Ter de подчёркивает более строгую обязанность (то, чего нельзя не сделать)."
      },
      {
        examples: [
          { pt: "Eu tenho que comprar um carro.", ru: "Мне надо купить машину." },
          { pt: "Tu tens de comprar o bilhete para a viagem.", ru: "Тебе необходимо купить билет на поездку." },
          { pt: "Nós temos de estudar mais.", ru: "Нам необходимо учиться больше." },
          { pt: "Eles têm que trabalhar amanhã.", ru: "Им надо работать завтра." }
        ]
      },
      {
        heading: "Ir + инфинитив: ближайшее будущее",
        text: "Конструкция ir (в настоящем времени) + инфинитив глагола используется для выражения намерения или ближайшего будущего, аналогично английскому «going to»."
      },
      {
        examples: [
          { pt: "Eu vou telefonar à Ana.", ru: "Я позвоню Ане." },
          { pt: "Nós vamos mudar de casa.", ru: "Мы собираемся переехать." },
          { pt: "A Josefina vai dar aulas na universidade.", ru: "Жозефина будет вести занятия в университете." },
          { pt: "Eles vão viajar no verão.", ru: "Они поедут путешествовать летом." }
        ]
      },
      {
        heading: "Формулирование вопросов (Perguntas)",
        text: "В португальском языке можно задать вопрос, просто используя основной глагол — без вспомогательного «do/does» как в английском. Интонация повышается в конце. Для утвердительного ответа «sim» может стоять в начале или в конце (Tenho, sim — более вежливо). В разговорной речи глагол часто повторяется вместо «sim»."
      },
      {
        examples: [
          { pt: "Gostas de viajar? — Gosto, sim.", ru: "Ты любишь путешествовать? — Да, люблю." },
          { pt: "Tem troco de 100 euros? — Tenho, sim.", ru: "У Вас есть сдача со 100 евро? — Да, есть." },
          { pt: "Sabes que horas são? — Sei, sei.", ru: "Ты знаешь, который час? — Да-да, знаю." },
          { pt: "Conheces o Porto? — Conheço, conheço.", ru: "Ты знаешь Порту? — Да-да, знаю." }
        ]
      },
      {
        heading: "Сводная таблица спряжений неправильных глаголов",
        text: "Все неправильные глаголы настоящего времени (Presente do Indicativo), изученные в этом разделе, в одной таблице для удобства:"
      },
      {
        table: {
          headers: ["Глагол", "eu", "tu", "ele/ela", "nós", "eles/elas"],
          rows: [
            ["ir", "vou", "vais", "vai", "vamos", "vão"],
            ["ter", "tenho", "tens", "tem", "temos", "têm"],
            ["fazer", "faço", "fazes", "faz", "fazemos", "fazem"],
            ["poder", "posso", "podes", "pode", "podemos", "podem"],
            ["querer", "quero", "queres", "quer", "queremos", "querem"],
            ["saber", "sei", "sabes", "sabe", "sabemos", "sabem"],
            ["dizer", "digo", "dizes", "diz", "dizemos", "dizem"],
            ["dar", "dou", "dás", "dá", "damos", "dão"]
          ]
        }
      }
    ],
    lessons: [
      { title: "Часть 1: Спряжение неправильных глаголов", theoryRange: [0, 10] },
      { title: "Часть 2: Конструкции и различия глаголов", theoryRange: [10, 16] },
      { title: "Часть 3: Вопросы и сводка спряжений", theoryRange: [16, 20] }
    ],
    exercises: ex5,
    vocabulary: [
      { pt: "ir", ru: "идти, ехать" },
      { pt: "ter", ru: "иметь" },
      { pt: "fazer", ru: "делать" },
      { pt: "poder", ru: "мочь" },
      { pt: "querer", ru: "хотеть" },
      { pt: "saber", ru: "знать" },
      { pt: "dizer", ru: "говорить, сказать" },
      { pt: "dar", ru: "давать" },
      { pt: "o comboio", ru: "поезд" },
      { pt: "o autocarro", ru: "автобус" },
      { pt: "o filho", ru: "сын" },
      { pt: "o amigo", ru: "друг" }
    ],
    flashcards: [
      { id: "u5_ir", pt: "ir", ru: "идти, ехать", hint: "eu vou, tu vais, ele vai", example: "Eu vou ao supermercado." },
      { id: "u5_ter", pt: "ter", ru: "иметь", hint: "eu tenho, tu tens, ele tem", example: "Eu tenho um cão." },
      { id: "u5_fazer", pt: "fazer", ru: "делать", hint: "eu faço, tu fazes, ele faz", example: "O que fazes?" },
      { id: "u5_poder", pt: "poder", ru: "мочь", hint: "eu posso, tu podes", example: "Posso ajudar?" },
      { id: "u5_querer", pt: "querer", ru: "хотеть", hint: "eu quero, tu queres", example: "Quero um café." },
      { id: "u5_saber", pt: "saber", ru: "знать", hint: "eu sei, tu sabes", example: "Eu sei falar português." },
      { id: "u5_dizer", pt: "dizer", ru: "говорить, сказать", hint: "eu digo, tu dizes", example: "O que dizes?" },
      { id: "u5_dar", pt: "dar", ru: "давать", hint: "eu dou, tu dás, ele dá", example: "Eu dou-te o livro." },
      { id: "u5_comboio", pt: "o comboio", ru: "поезд", hint: "европ. порт. (браз.: o trem)", example: "O comboio chega às nove." },
      { id: "u5_a_caminho_de", pt: "a caminho de", ru: "по дороге к", hint: "выражение", example: "Estou a caminho de casa." },
      { id: "u5_a_maioria", pt: "a maioria", ru: "большинство", hint: "женский род", example: "A maioria dos portugueses fala inglês." },
      { id: "u5_acreditar", pt: "acreditar", ru: "верить", hint: "глагол", example: "Acredito que é possível." },
      { id: "u5_alarme", pt: "o alarme", ru: "сигнализация", hint: "мужской род", example: "O alarme tocou de madrugada." },
      { id: "u5_alemanha", pt: "a Alemanha", ru: "Германия", hint: "имя собственное", example: "A Alemanha fica na Europa central." },
      { id: "u5_anualmente", pt: "anualmente", ru: "ежегодно", hint: "наречие", example: "O festival acontece anualmente." },
      { id: "u5_beleza_natural", pt: "a beleza natural", ru: "природная красота", hint: "женский род", example: "A beleza natural do Algarve é incrível." },
      { id: "u5_cafe_com_leite", pt: "o café com leite", ru: "кофе с молоком", hint: "мужской род", example: "Quero um café com leite, por favor." },
      { id: "u5_clima", pt: "o clima", ru: "климат", hint: "мужской род", example: "O clima em Portugal é ameno." },
      { id: "u5_codigo", pt: "o código", ru: "код", hint: "мужской род", example: "Qual é o código postal?" },
      { id: "u5_conselhos", pt: "os conselhos", ru: "советы", hint: "м.р. мн.ч.", example: "Os conselhos do professor são úteis." },
      { id: "u5_cozinha", pt: "a cozinha", ru: "кухня", hint: "женский род", example: "A cozinha portuguesa é famosa." },
      { id: "u5_depressa", pt: "depressa", ru: "быстро", hint: "наречие", example: "Ele fala depressa." },
      { id: "u5_dinheiro", pt: "o dinheiro", ru: "деньги", hint: "мужской род", example: "Não tenho dinheiro." },
      { id: "u5_famoso", pt: "famoso", ru: "знаменитый", hint: "м.р., ж.р.: famosa", example: "Este restaurante é famoso." },
      { id: "u5_fazer_ferias", pt: "fazer férias", ru: "проводить отпуск", hint: "выражение", example: "Vou fazer férias no Algarve." },
      { id: "u5_filme", pt: "o filme", ru: "фильм", hint: "мужской род", example: "O filme é muito bom." },
      { id: "u5_forte", pt: "forte", ru: "сильный", hint: "неизменяемое по роду", example: "O vento é muito forte." },
      { id: "u5_historia", pt: "a história", ru: "история", hint: "женский род", example: "A história de Portugal é fascinante." },
      { id: "u5_junto_ao_mar", pt: "junto ao mar", ru: "у моря", hint: "выражение", example: "A casa fica junto ao mar." },
      { id: "u5_literatura", pt: "a literatura", ru: "литература", hint: "женский род", example: "A literatura portuguesa é rica." },
      { id: "u5_montanhas", pt: "as montanhas", ru: "горы", hint: "ж.р. мн.ч.", example: "As montanhas no norte são altas." },
      { id: "u5_monumentos", pt: "os monumentos", ru: "памятники", hint: "м.р. мн.ч.", example: "Há muitos monumentos em Lisboa." },
      { id: "u5_musica_classica", pt: "a música clássica", ru: "классическая музыка", hint: "женский род", example: "Gosto de ouvir música clássica." },
      { id: "u5_ouvir", pt: "ouvir", ru: "слушать, слышать", hint: "глагол", example: "Gosto de ouvir música." },
      { id: "u5_pais", pt: "o país", ru: "страна", hint: "мужской род", example: "Quero conhecer este país." },
      { id: "u5_pequeno_almoco", pt: "o pequeno-almoço", ru: "завтрак", hint: "мужской род", example: "Tomo o pequeno-almoço às sete." },
      { id: "u5_pessoas", pt: "as pessoas", ru: "люди", hint: "ж.р. мн.ч.", example: "As pessoas são simpáticas." },
      { id: "u5_pratos", pt: "os pratos", ru: "блюда", hint: "м.р. мн.ч.", example: "Os pratos portugueses são deliciosos." },
      { id: "u5_radio", pt: "a rádio", ru: "радио", hint: "женский род", example: "Ouço a rádio de manhã." },
      { id: "u5_recado", pt: "o recado", ru: "сообщение", hint: "мужской род", example: "Deixei um recado no telemóvel." },
      { id: "u5_reino_unido", pt: "o Reino Unido", ru: "Великобритания", hint: "мужской род", example: "Muitos portugueses vivem no Reino Unido." },
      { id: "u5_restaurantes_tipicos", pt: "os restaurantes típicos", ru: "типичные рестораны", hint: "м.р. мн.ч.", example: "Os restaurantes típicos servem bacalhau." },
      { id: "u5_sabor", pt: "o sabor", ru: "вкус", hint: "мужской род", example: "O sabor é delicioso." },
      { id: "u5_televisao", pt: "a televisão", ru: "телевидение", hint: "женский род", example: "Vejo televisão à noite." },
      { id: "u5_tocar_piano", pt: "tocar piano", ru: "играть на пианино", hint: "выражение", example: "Ela sabe tocar piano." },
      { id: "u5_tradicional", pt: "tradicional", ru: "традиционный", hint: "неизменяемое по роду", example: "A comida tradicional é muito boa." },
      { id: "u5_turistas", pt: "os turistas", ru: "туристы", hint: "м.р. мн.ч.", example: "Muitos turistas visitam Lisboa." },
      { id: "u5_valor", pt: "o valor", ru: "ценность, стоимость", hint: "мужской род", example: "O valor deste quadro é enorme." },
      { id: "u5_variedade", pt: "a variedade", ru: "разнообразие", hint: "женский род", example: "Há uma grande variedade de pratos." },
      { id: "u5_verde", pt: "verde", ru: "зелёный", hint: "неизменяемое по роду", example: "O norte de Portugal é muito verde." },
      { id: "u5_vermelho", pt: "vermelho", ru: "красный", hint: "м.р., ж.р.: vermelha", example: "O vestido é vermelho." },
      { id: "u5_vestido", pt: "o vestido", ru: "платье", hint: "мужской род", example: "O vestido é muito bonito." },
      { id: "u5_viajar", pt: "viajar", ru: "путешествовать", hint: "глагол", example: "Gosto de viajar." },
      { id: "u5_vinho_do_porto", pt: "o vinho do Porto", ru: "портвейн", hint: "мужской род", example: "O vinho do Porto é famoso no mundo." },
    ]
  },

  // ===================== UNIT 6: Interrogatives =====================
  {
    id: 6,
    title: "Вопросительные слова",
    description: "Вопросительные местоимения и наречия, построение вопросов",
    theory: [
      {
        heading: "Вопросительные слова (Palavras interrogativas)",
        text: "Вопросительные слова в португальском ставятся в начало предложения. В европейском португальском порядок слов в вопросе часто инвертируется: глагол ставится перед подлежащим."
      },
      {
        table: {
          headers: ["Португальский", "Русский", "Пример"],
          rows: [
            ["Quem?", "Кто?", "Quem é ele?"],
            ["O que? / Que?", "Что?", "O que fazes?"],
            ["Onde?", "Где?", "Onde moras?"],
            ["Quando?", "Когда?", "Quando chegas?"],
            ["Como?", "Как?", "Como te chamas?"],
            ["Porquê? / Por que?", "Почему?", "Porquê não vens?"],
            ["Qual? / Quais?", "Какой? / Какие?", "Qual é o teu nome?"],
            ["Quanto/a?", "Сколько?", "Quanto custa?"],
            ["Quantos/as?", "Сколько? (мн.ч.)", "Quantos anos tens?"]
          ]
        }
      },
      {
        heading: "Построение вопросов",
        text: "В португальском языке есть три способа задать вопрос: 1) с помощью интонации (утвердительное предложение с вопросительной интонацией), 2) с помощью инверсии (глагол + подлежащее), 3) с помощью вопросительных слов."
      },
      {
        examples: [
          { pt: "Como te chamas?", ru: "Как тебя зовут?" },
          { pt: "Onde é que moras?", ru: "Где ты живёшь?" },
          { pt: "Quantos anos tens?", ru: "Сколько тебе лет?" },
          { pt: "Qual é a tua profissão?", ru: "Какая у тебя профессия?" },
          { pt: "Quanto custa este livro?", ru: "Сколько стоит эта книга?" }
        ]
      },
      {
        note: "Конструкция «é que» — характерная черта европейского португальского. Она вставляется после вопросительного слова и не переводится: «Onde é que moras?» = «Onde moras?» (Где ты живёшь?)."
      },
      {
        heading: "Усиление вопроса с «é que»",
        text: "В европейском португальском часто добавляют конструкцию «é que» после вопросительного слова для усиления вопроса. Это не меняет значение, но звучит естественнее в разговорной речи."
      },
      {
        examples: [
          { pt: "Que horas é que são?", ru: "Который час?" },
          { pt: "Quanto tempo é que demora a viagem?", ru: "Сколько времени занимает путешествие?" },
          { pt: "Como é que se chama?", ru: "Как вас зовут?" },
          { pt: "Porque é que fazem tantas perguntas?", ru: "Почему вы задаёте столько вопросов?" }
        ]
      },
      {
        heading: "Предлоги с вопросительными словами",
        text: "Вопросительные слова que, onde и quem могут использоваться с предлогами. Предлог ставится перед вопросительным словом."
      },
      {
        table: {
          headers: ["Конструкция", "Пример", "Перевод"],
          rows: [
            ["a que", "A que horas começas a trabalhar?", "Во сколько ты начинаешь работать?"],
            ["de que", "De que falas?", "О чём ты говоришь?"],
            ["em que", "Em que cidade vives?", "В каком городе ты живёшь?"],
            ["aonde (a + onde)", "Aonde vais?", "Куда ты идёшь?"],
            ["donde (de + onde)", "Donde vem o João?", "Откуда Жуау?"],
            ["para onde", "Para onde vais viver?", "Куда ты переезжаешь?"],
            ["a quem", "A quem dizes isso?", "Кому ты это говоришь?"],
            ["com quem", "Com quem estás a falar?", "С кем ты разговариваешь?"],
            ["de quem", "De quem estás a falar?", "О ком ты говоришь?"],
            ["para quem", "Para quem trabalha a Isabel?", "На кого работает Изабел?"]
          ]
        }
      },
      {
        note: "В отличие от русского, в португальском предлог ставится в начале вопроса, перед вопросительным словом: «De que falas?» (О чём говоришь?), а не *«Que de falas?»."
      }
    ],
    lessons: [
      { title: "Часть 1: Вопросительные слова", theoryRange: [0, 5] },
      { title: "Часть 2: «É que» и предлоги", theoryRange: [5, 10] }
    ],
    exercises: ex6,
    vocabulary: [
      { pt: "quem", ru: "кто" },
      { pt: "o que / que", ru: "что" },
      { pt: "onde", ru: "где" },
      { pt: "quando", ru: "когда" },
      { pt: "como", ru: "как" },
      { pt: "porquê", ru: "почему" },
      { pt: "qual / quais", ru: "какой / какие" },
      { pt: "quanto/a", ru: "сколько" },
      { pt: "o bilhete", ru: "билет" },
      { pt: "a profissão", ru: "профессия" }
    ],
    flashcards: [
      { id: "u6_quem", pt: "Quem?", ru: "Кто?", hint: "вопр. местоимение", example: "Quem é aquele homem?" },
      { id: "u6_onde", pt: "Onde?", ru: "Где?", hint: "вопр. наречие места", example: "Onde é que moras?" },
      { id: "u6_quando", pt: "Quando?", ru: "Когда?", hint: "вопр. наречие времени", example: "Quando chegas a Lisboa?" },
      { id: "u6_como", pt: "Como?", ru: "Как?", hint: "вопр. наречие образа действия", example: "Como te chamas?" },
      { id: "u6_porque", pt: "Porquê?", ru: "Почему?", hint: "в конце фразы; Por que — в начале", example: "Não vens porquê?" },
      { id: "u6_qual", pt: "Qual?", ru: "Какой?", hint: "мн.ч.: Quais?", example: "Qual é o teu livro favorito?" },
      { id: "u6_quanto", pt: "Quanto?", ru: "Сколько?", hint: "жен. р.: Quanta? мн.ч.: Quantos/as?", example: "Quanto custa?" },
      { id: "u6_bilhete", pt: "o bilhete", ru: "билет", hint: "мужской род", example: "Quanto custa o bilhete?" },
      { id: "u6_a_maioria", pt: "a maioria", ru: "большинство", hint: "женский род", example: "A maioria dos alunos estuda muito." },
      { id: "u6_agreste", pt: "agreste", ru: "дикий, суровый", hint: "неизменяемое по роду", example: "A costa é agreste e bonita." },
      { id: "u6_amanha_de_tarde", pt: "amanhã de tarde", ru: "завтра днём", hint: "выражение времени", example: "Vamos sair amanhã de tarde." },
      { id: "u6_calmo", pt: "calmo", ru: "спокойный", hint: "ж.р.: calma", example: "O mar está calmo hoje." },
      { id: "u6_cartas", pt: "as cartas", ru: "письма", hint: "ж.р. мн.ч.", example: "Ela escreve cartas ao avô." },
      { id: "u6_casar", pt: "casar", ru: "жениться, выходить замуж", hint: "глагол", example: "Eles vão casar em breve." },
      { id: "u6_contudo", pt: "contudo", ru: "однако, тем не менее", hint: "союз", example: "É caro, contudo é bom." },
      { id: "u6_costa_alentejana", pt: "a costa alentejana", ru: "побережье Алентежу", hint: "ж.р.", example: "A costa alentejana é muito bonita." },
      { id: "u6_costume", pt: "o costume", ru: "обычай, привычка", hint: "мужской род", example: "É costume jantar às oito." },
      { id: "u6_custar", pt: "custar", ru: "стоить", hint: "глагол", example: "Quanto custa este livro?" },
      { id: "u6_em_breve", pt: "em breve", ru: "вскоре", hint: "наречие времени", example: "Vou viajar em breve." },
      { id: "u6_encerrar", pt: "encerrar", ru: "закрывать", hint: "глагол", example: "A loja vai encerrar às seis." },
      { id: "u6_folga", pt: "a folga", ru: "выходной", hint: "женский род", example: "Amanhã é o meu dia de folga." },
      { id: "u6_frequentar", pt: "frequentar", ru: "посещать, ходить", hint: "глагол", example: "Ele frequenta a universidade." },
      { id: "u6_gozar_ferias", pt: "gozar férias", ru: "проводить отпуск", hint: "выражение", example: "Vou gozar férias no Algarve." },
      { id: "u6_melhores", pt: "melhores", ru: "лучшие", hint: "мн.ч. от melhor", example: "Estas são as melhores praias." },
      { id: "u6_neste_momento", pt: "neste momento", ru: "в данный момент", hint: "выражение времени", example: "Neste momento estou ocupado." },
      { id: "u6_novo", pt: "novo", ru: "новый; молодой", hint: "ж.р.: nova", example: "A casa é nova." },
      { id: "u6_passear_no_parque", pt: "passear no parque", ru: "гулять в парке", hint: "выражение", example: "Gosto de passear no parque." },
      { id: "u6_periodo", pt: "o período", ru: "период", hint: "мужской род", example: "Este é um período de férias." },
      { id: "u6_populares", pt: "populares", ru: "популярные", hint: "неизменяемое по роду", example: "As festas populares são divertidas." },
      { id: "u6_por_semana", pt: "por semana", ru: "в неделю", hint: "выражение частоты", example: "Trabalho cinco dias por semana." },
      { id: "u6_proximo_mes", pt: "o próximo mês", ru: "следующий месяц", hint: "м.р.", example: "Viajo no próximo mês." },
      { id: "u6_tantas", pt: "tantas", ru: "столько", hint: "ж.р. мн.ч. от tanto", example: "Há tantas coisas para fazer!" },
      { id: "u6_temperaturas", pt: "as temperaturas", ru: "температуры", hint: "ж.р. мн.ч.", example: "As temperaturas estão altas." },
      { id: "u6_tipicamente", pt: "tipicamente", ru: "типично, обычно", hint: "наречие", example: "Tipicamente, jantamos às oito." },
      { id: "u6_todas_as_semanas", pt: "todas as semanas", ru: "каждую неделю", hint: "выражение частоты", example: "Vou ao ginásio todas as semanas." },
      { id: "u6_todo_o_pais", pt: "todo o país", ru: "вся страна", hint: "м.р.", example: "A festa é celebrada em todo o país." },
      { id: "u6_uma_vez_que", pt: "uma vez que", ru: "поскольку, так как", hint: "союз причины", example: "Uma vez que chove, ficamos em casa." },
      { id: "u6_zona_costeira", pt: "a zona costeira", ru: "прибрежная зона", hint: "ж.р.", example: "A zona costeira tem boas praias." },
    ]
  },

  // ===================== UNIT 7: Negatives =====================
  {
    id: 7,
    title: "Отрицание",
    description: "Отрицательные конструкции и отрицательные слова в португальском языке",
    theory: [
      {
        heading: "Простое отрицание",
        text: "Для образования отрицания в португальском достаточно поставить «não» (нет, не) перед глаголом. Как и в русском, в португальском двойное отрицание — норма: «Não quero nada» (Я ничего не хочу). Но если отрицательное слово стоит перед глаголом, «não» не ставится: «Ninguém sabe» (Никто не знает)."
      },
      {
        examples: [
          { pt: "Eu não falo francês.", ru: "Я не говорю по-французски." },
          { pt: "Ela não mora aqui.", ru: "Она не живёт здесь." },
          { pt: "Nós não temos carro.", ru: "У нас нет машины." }
        ]
      },
      {
        heading: "Отрицательные слова (Palavras negativas)",
        text: "Когда отрицательное слово стоит после глагола, перед глаголом также ставится «não» (двойное отрицание). Если отрицательное слово стоит перед глаголом, «não» не используется."
      },
      {
        table: {
          headers: ["Утвердительное", "Отрицательное", "Перевод"],
          rows: [
            ["alguém", "ninguém", "кто-то → никто"],
            ["algo / alguma coisa", "nada", "что-то → ничто"],
            ["algum/a", "nenhum/a", "какой-то → никакой"],
            ["sempre", "nunca", "всегда → никогда"],
            ["também", "também não / tampouco", "тоже → тоже не"],
            ["ainda", "já não", "ещё → уже не"],
            ["já", "ainda não", "уже → ещё не"]
          ]
        }
      },
      {
        examples: [
          { pt: "Não conheço ninguém aqui.", ru: "Я никого здесь не знаю." },
          { pt: "Ninguém sabe a resposta.", ru: "Никто не знает ответ." },
          { pt: "Nunca fui a Portugal.", ru: "Я никогда не был в Португалии." },
          { pt: "Não quero nada.", ru: "Я ничего не хочу." }
        ]
      },
      {
        note: "Обратите внимание на двойное отрицание в португальском: «Não quero nada» (букв.: «Не хочу ничего»). Это нормально для португальского, когда отрицательное слово стоит после глагола."
      },
      {
        heading: "Nem и nem sequer: усиление отрицания",
        text: "Для усиления отрицания используется nem (ни, даже не) и nem sequer (даже не). Конструкция nem...nem соответствует русскому «ни...ни»."
      },
      {
        examples: [
          { pt: "Nem eu nem a Ana gostamos de festas grandes.", ru: "Ни я, ни Ана не любим большие праздники." },
          { pt: "Eu não tenho dinheiro, nem sequer para um café.", ru: "У меня нет денег, даже на кофе." },
          { pt: "O João gosta de qualquer filme, mas nem sequer ele gosta deste.", ru: "Жуау нравится любой фильм, но даже ему не нравится этот." },
          { pt: "Ela não fala nem português nem espanhol.", ru: "Она не говорит ни по-португальски, ни по-испански." }
        ]
      },
      {
        heading: "Nenhum/nenhuma, nenhuns/nenhumas",
        text: "Nenhum/nenhuma (никакой/никакая) и их множественные формы nenhuns/nenhumas используются с существительными и согласуются в роде и числе. Их можно ставить как перед, так и после существительного. Когда они стоят после глагола, перед глаголом также ставится não или nunca."
      },
      {
        table: {
          headers: ["Форма", "Род/Число", "Пример"],
          rows: [
            ["nenhum", "муж. ед.", "Nenhum aluno gosta do professor."],
            ["nenhuma", "жен. ед.", "Não fala nenhuma língua estrangeira."],
            ["nenhuns", "муж. мн.", "Não atende telefonemas nenhuns."],
            ["nenhumas", "жен. мн.", "Não tem nenhumas amigas na universidade."]
          ]
        }
      },
      {
        examples: [
          { pt: "Nenhum aluno gosta do professor de matemática.", ru: "Ни одному ученику не нравится учитель математики." },
          { pt: "A Ana nunca compra açúcar nenhum.", ru: "Ана никогда не покупает никакой сахар." },
          { pt: "A Carla não fala nenhuma língua estrangeira.", ru: "Карла не говорит ни на одном иностранном языке." },
          { pt: "Ao domingo o Pedro não atende telefonemas nenhuns.", ru: "По воскресеньям Педру не отвечает ни на какие звонки." },
          { pt: "Ela não tem nenhumas amigas na universidade.", ru: "У неё нет никаких подруг в университете." }
        ]
      },
      {
        note: "Обратите внимание: nenhum/nenhuma можно ставить и перед, и после существительного. Сравните: «Nenhum aluno gosta...» = «Aluno nenhum gosta...». Смысл одинаковый, но постпозиция может звучать более выразительно."
      },
      {
        heading: "Отрицательные вопросы и ответы",
        text: "Вопросы можно задавать в отрицательной форме. При отрицательном ответе não может стоять и в начале, и в конце предложения, помимо обязательного não перед глаголом."
      },
      {
        examples: [
          { pt: "Não tens medo de ficar em casa sozinha?", ru: "Тебе не страшно оставаться дома одной?" },
          { pt: "Ninguém sabe que horas são?", ru: "Никто не знает, который час?" },
          { pt: "Não, não tenho medo.", ru: "Нет, я не боюсь." },
          { pt: "Não quero beber nada, não.", ru: "Нет, я не хочу ничего пить." }
        ]
      }
    ],
    lessons: [
      { title: "Часть 1: Простое отрицание и отрицательные слова", theoryRange: [0, 6] },
      { title: "Часть 2: Nem, nenhum и отрицательные вопросы", theoryRange: [6, 14] }
    ],
    exercises: ex7,
    vocabulary: [
      { pt: "não", ru: "нет; не" },
      { pt: "ninguém", ru: "никто" },
      { pt: "nada", ru: "ничего, ничто" },
      { pt: "nunca", ru: "никогда" },
      { pt: "nenhum/a", ru: "никакой, ни один" },
      { pt: "também não", ru: "тоже не" },
      { pt: "ainda não", ru: "ещё не" },
      { pt: "já não", ru: "уже не" },
      { pt: "o peixe", ru: "рыба" },
      { pt: "a resposta", ru: "ответ" }
    ],
    flashcards: [
      { id: "u7_nao", pt: "não", ru: "нет; не", hint: "ставится перед глаголом", example: "Não falo espanhol." },
      { id: "u7_ninguem", pt: "ninguém", ru: "никто", hint: "перед глаголом — без não", example: "Ninguém está em casa." },
      { id: "u7_nada", pt: "nada", ru: "ничего", hint: "после глагола — с não", example: "Não sei nada." },
      { id: "u7_nunca", pt: "nunca", ru: "никогда", hint: "перед глаголом — без não", example: "Nunca fui ao Brasil." },
      { id: "u7_nenhum", pt: "nenhum/a", ru: "никакой", hint: "согласуется в роде", example: "Não tenho nenhum problema." },
      { id: "u7_ainda_nao", pt: "ainda não", ru: "ещё не", hint: "антоним: já (уже)", example: "Ainda não comi." },
      { id: "u7_ja_nao", pt: "já não", ru: "уже не", hint: "антоним: ainda (ещё)", example: "Já não moro aqui." },
      { id: "u7_peixe", pt: "o peixe", ru: "рыба", hint: "мужской род", example: "Eu gosto de peixe." },
      { id: "u7_a_mesma_hora", pt: "à mesma hora", ru: "в то же время", hint: "выражение времени", example: "Encontramo-nos à mesma hora." },
      { id: "u7_algo", pt: "algo", ru: "что-то", hint: "неопределённое местоим.", example: "Queres comer algo?" },
      { id: "u7_alguem", pt: "alguém", ru: "кто-то", hint: "неопределённое местоим.", example: "Alguém está à porta." },
      { id: "u7_ambos", pt: "ambos", ru: "оба", hint: "ж.р.: ambas", example: "Ambos os irmãos estudam em Lisboa." },
      { id: "u7_ao_longo_de", pt: "ao longo de", ru: "на протяжении", hint: "предлог времени/места", example: "Ao longo de muitos anos, viveu aqui." },
      { id: "u7_apreciada", pt: "apreciada", ru: "ценимая", hint: "ж.р., причастие", example: "A música é muito apreciada." },
      { id: "u7_atrasada", pt: "atrasada", ru: "опоздавшая", hint: "ж.р.; м.р.: atrasado", example: "Desculpa, estou atrasada." },
      { id: "u7_cancao", pt: "a canção", ru: "песня", hint: "ж.р.; мн.ч.: canções", example: "Esta canção é muito bonita." },
      { id: "u7_cheia", pt: "cheia", ru: "полная", hint: "ж.р.; м.р.: cheio", example: "A sala está cheia de gente." },
      { id: "u7_conceito", pt: "o conceito", ru: "понятие, концепция", hint: "мужской род", example: "Este conceito é difícil de explicar." },
      { id: "u7_cultura", pt: "a cultura", ru: "культура", hint: "женский род", example: "A cultura portuguesa é muito rica." },
      { id: "u7_desaparecer", pt: "desaparecer", ru: "исчезать", hint: "глагол", example: "O sol desaparece ao fim da tarde." },
      { id: "u7_do_que", pt: "do que", ru: "чем (при сравнении)", hint: "союз сравнения", example: "Lisboa é maior do que o Porto." },
      { id: "u7_faceis", pt: "fáceis", ru: "лёгкие", hint: "мн.ч. от fácil", example: "Estes exercícios são fáceis." },
      { id: "u7_gasolina", pt: "a gasolina", ru: "бензин", hint: "женский род", example: "O preço da gasolina subiu." },
      { id: "u7_gente", pt: "a gente", ru: "люди; мы (разг.)", hint: "женский род", example: "A gente vai ao cinema." },
      { id: "u7_gratuito", pt: "gratuito", ru: "бесплатный", hint: "ж.р.: gratuita", example: "A entrada é gratuita." },
      { id: "u7_lirica", pt: "a lírica", ru: "лирика", hint: "женский род", example: "A lírica desta canção é bela." },
      { id: "u7_longe", pt: "longe", ru: "далеко", hint: "наречие места", example: "A escola fica longe daqui." },
      { id: "u7_nocao", pt: "a noção", ru: "понятие, представление", hint: "ж.р.; мн.ч.: noções", example: "Não tenho noção do tempo." },
      { id: "u7_nostalgia", pt: "a nostalgia", ru: "ностальгия", hint: "женский род", example: "Sinto nostalgia da minha terra." },
      { id: "u7_orgulho", pt: "o orgulho", ru: "гордость", hint: "мужской род", example: "Sinto orgulho do meu país." },
      { id: "u7_palavra", pt: "a palavra", ru: "слово", hint: "женский род", example: "Esta palavra é difícil de pronunciar." },
      { id: "u7_para_tras", pt: "para trás", ru: "назад", hint: "наречие направления", example: "Olhou para trás e sorriu." },
      { id: "u7_perder", pt: "perder", ru: "терять, проигрывать", hint: "глагол", example: "Ele perde sempre as chaves." },
      { id: "u7_piscina", pt: "a piscina", ru: "бассейн", hint: "женский род", example: "Vamos à piscina amanhã." },
      { id: "u7_poesia", pt: "a poesia", ru: "поэзия", hint: "женский род", example: "A poesia portuguesa é famosa." },
      { id: "u7_povos", pt: "os povos", ru: "народы", hint: "м.р. мн.ч.", example: "Os povos lusófonos partilham a mesma língua." },
      { id: "u7_saudade", pt: "a saudade", ru: "тоска, ностальгия", hint: "ж.р.; непереводимое", example: "Tenho muita saudade de casa." },
      { id: "u7_sem", pt: "sem", ru: "без", hint: "предлог", example: "Café sem açúcar, por favor." },
      { id: "u7_sentimento", pt: "o sentimento", ru: "чувство", hint: "мужской род", example: "A saudade é um sentimento único." },
      { id: "u7_ter_fome", pt: "ter fome", ru: "быть голодным", hint: "выражение с ter", example: "Tenho muita fome." },
      { id: "u7_termo", pt: "o termo", ru: "термин", hint: "мужской род", example: "Este termo é difícil de traduzir." },
      { id: "u7_toda_a_gente", pt: "toda a gente", ru: "все, каждый", hint: "выражение", example: "Toda a gente gosta de música." },
      { id: "u7_tom", pt: "o tom", ru: "тон", hint: "мужской род", example: "O tom da conversa mudou." },
      { id: "u7_traduzir", pt: "traduzir", ru: "переводить", hint: "глагол", example: "É difícil traduzir esta palavra." },
      { id: "u7_tristeza", pt: "a tristeza", ru: "печаль, грусть", hint: "женский род", example: "A tristeza é um sentimento humano." },
    ]
  },

  // ===================== UNIT 8: Ser and Estar =====================
  {
    id: 8,
    title: "Ser и Estar",
    description: "Два глагола «быть» — их спряжение и различия в употреблении",
    theory: [
      {
        heading: "Глагол SER",
        text: "Глагол «ser» используется для обозначения постоянных характеристик: национальность, профессия, происхождение, материал, время, характер."
      },
      {
        table: {
          headers: ["Лицо", "ser"],
          rows: [
            ["eu", "sou"],
            ["tu", "és"],
            ["ele/ela/você", "é"],
            ["nós", "somos"],
            ["eles/elas/vocês", "são"]
          ]
        }
      },
      {
        heading: "Глагол ESTAR",
        text: "Глагол «estar» используется для обозначения временных состояний: настроение, здоровье, местоположение, результат действия."
      },
      {
        table: {
          headers: ["Лицо", "estar"],
          rows: [
            ["eu", "estou"],
            ["tu", "estás"],
            ["ele/ela/você", "está"],
            ["nós", "estamos"],
            ["eles/elas/vocês", "estão"]
          ]
        }
      },
      {
        heading: "Когда использовать SER, а когда ESTAR",
        text: "Главное правило: ser — для постоянных качеств, estar — для временных состояний и местоположения."
      },
      {
        table: {
          headers: ["SER (постоянное)", "ESTAR (временное)"],
          equalCols: true,
          rows: [
            ["Ele é alto. (Он высокий.)", "Ele está cansado. (Он устал.)"],
            ["Ela é portuguesa. (Она португалка.)", "Ela está em casa. (Она дома.)"],
            ["O café é bom. (Кофе — хороший.)", "O café está quente. (Кофе горячий.)"],
            ["Eu sou professor. (Я преподаватель.)", "Eu estou doente. (Я болен.)"],
            ["São duas horas. (Два часа.)", "Estamos em fevereiro. (Сейчас февраль.)"]
          ]
        }
      },
      {
        examples: [
          { pt: "O Pedro é simpático, mas hoje está triste.", ru: "Педру — приятный (характер), но сегодня он грустный (состояние)." },
          { pt: "Lisboa é a capital de Portugal.", ru: "Лиссабон — столица Португалии." },
          { pt: "Onde está o meu telemóvel?", ru: "Где мой мобильный?" }
        ]
      },
      {
        note: "В европейском португальском «мобильный телефон» — telemóvel, а не celular (браз.). «Автобус» — autocarro, а не ônibus."
      },
      {
        heading: "Ser и estar с прилагательными: изменение значения",
        text: "Некоторые прилагательные меняют значение в зависимости от того, используются ли они с ser или estar."
      },
      {
        table: {
          headers: ["С ser", "Значение", "С estar", "Значение"],
          equalCols: true,
          rows: [
            ["ser aborrecido", "быть скучным, нудным", "estar aborrecido", "быть в скуке, скучать"],
            ["ser consciente", "быть сознательным, ответственным", "estar consciente", "быть в сознании"],
            ["ser inconsciente", "быть безответственным", "estar inconsciente", "быть без сознания"],
            ["ser atrasado", "быть отсталым, старомодным", "estar atrasado", "опаздывать"],
            ["ser convencido", "быть самодовольным", "estar convencido", "быть убеждённым"]
          ]
        }
      },
      {
        heading: "Настоящее длительное: estar a + инфинитив",
        text: "Для описания действия, происходящего в данный момент, используется конструкция «estar a + инфинитив». Глагол estar спрягается, а основной глагол остаётся в инфинитиве. Это аналог английского Present Continuous."
      },
      {
        examples: [
          { pt: "Está a chover.", ru: "Идёт дождь (сейчас)." },
          { pt: "A Joana está a ler o jornal.", ru: "Жуана читает газету (сейчас)." },
          { pt: "Estamos a preparar o jantar.", ru: "Мы готовим ужин (сейчас)." },
          { pt: "Estou a estudar na universidade.", ru: "Я учусь в университете (сейчас)." }
        ]
      }
    ],
    lessons: [
      { title: "Часть 1: Ser и Estar — основы", theoryRange: [0, 8] },
      { title: "Часть 2: Прилагательные и estar a + инфинитив", theoryRange: [8, 12] }
    ],
    exercises: ex8,
    vocabulary: [
      { pt: "ser", ru: "быть (постоянно)" },
      { pt: "estar", ru: "быть (временно); находиться" },
      { pt: "cansado/a", ru: "уставший" },
      { pt: "doente", ru: "больной" },
      { pt: "triste", ru: "грустный" },
      { pt: "contente", ru: "довольный" },
      { pt: "simpático/a", ru: "приятный, симпатичный" },
      { pt: "o telemóvel", ru: "мобильный телефон" },
      { pt: "o médico / a médica", ru: "врач" },
      { pt: "a capital", ru: "столица" }
    ],
    flashcards: [
      { id: "u8_ser", pt: "ser", ru: "быть (постоянно)", hint: "eu sou, tu és, ele é", example: "Eu sou português." },
      { id: "u8_estar", pt: "estar", ru: "быть (временно)", hint: "eu estou, tu estás, ele está", example: "Estou cansado." },
      { id: "u8_cansado", pt: "cansado/a", ru: "уставший", hint: "используется с estar", example: "Estou muito cansado." },
      { id: "u8_doente", pt: "doente", ru: "больной", hint: "используется с estar", example: "O João está doente." },
      { id: "u8_simpatico", pt: "simpático/a", ru: "приятный, милый", hint: "используется с ser", example: "Ela é muito simpática." },
      { id: "u8_triste", pt: "triste", ru: "грустный", hint: "обычно с estar (временно)", example: "Estás triste?" },
      { id: "u8_telemovel", pt: "o telemóvel", ru: "мобильный телефон", hint: "европ. порт. (браз.: celular)", example: "Onde está o meu telemóvel?" },
      { id: "u8_medico", pt: "o médico / a médica", ru: "врач", hint: "профессия — с ser", example: "Ela é médica." },
      { id: "u8_a_caminho_de_casa", pt: "a caminho de casa", ru: "по дороге домой", hint: "выражение", example: "Encontrei-o a caminho de casa." },
      { id: "u8_ameno", pt: "ameno", ru: "мягкий, приятный", hint: "ж.р.: amena", example: "O clima é ameno no Algarve." },
      { id: "u8_arquiteto", pt: "o arquiteto", ru: "архитектор", hint: "ж.р.: a arquiteta", example: "O meu pai é arquiteto." },
      { id: "u8_auge", pt: "o auge", ru: "расцвет, пик", hint: "мужской род", example: "O país está no auge do turismo." },
      { id: "u8_bons_velhos_tempos", pt: "os bons velhos tempos", ru: "старые добрые времена", hint: "м.р. мн.ч.", example: "Lembro-me dos bons velhos tempos." },
      { id: "u8_caminho_certo", pt: "o caminho certo", ru: "правильный путь", hint: "м.р.", example: "Este é o caminho certo para a estação." },
      { id: "u8_colinas", pt: "as colinas", ru: "холмы", hint: "ж.р. мн.ч.", example: "Lisboa é uma cidade de colinas." },
      { id: "u8_fertil", pt: "fértil", ru: "плодородный", hint: "неизменяемое по роду", example: "O solo é muito fértil." },
      { id: "u8_firma", pt: "a firma", ru: "фирма", hint: "женский род", example: "Ele trabalha numa firma grande." },
      { id: "u8_gabinete", pt: "o gabinete", ru: "кабинет, офис", hint: "мужской род", example: "O gabinete do diretor é no segundo andar." },
      { id: "u8_localizacao", pt: "a localização", ru: "местоположение", hint: "женский род", example: "A localização do hotel é excelente." },
      { id: "u8_lugar", pt: "o lugar", ru: "место", hint: "мужской род", example: "Este é um lugar muito bonito." },
      { id: "u8_mestrado", pt: "o mestrado", ru: "магистратура", hint: "мужской род", example: "Ela está a fazer o mestrado em Lisboa." },
      { id: "u8_micro_clima", pt: "o microclima", ru: "микроклимат", hint: "мужской род", example: "A região tem um microclima especial." },
      { id: "u8_molhado", pt: "molhado", ru: "мокрый", hint: "ж.р.: molhada", example: "O chão está molhado." },
      { id: "u8_planicies", pt: "as planícies", ru: "равнины", hint: "ж.р. мн.ч.", example: "As planícies do Alentejo são vastas." },
      { id: "u8_preferida", pt: "preferida", ru: "любимая", hint: "ж.р.; м.р.: preferido", example: "Esta é a minha comida preferida." },
      { id: "u8_que_coincidencia", pt: "que coincidência", ru: "какое совпадение", hint: "восклицание", example: "Que coincidência encontrar-te aqui!" },
      { id: "u8_que_pena", pt: "que pena", ru: "как жаль", hint: "восклицание", example: "Que pena que não podes vir!" },
      { id: "u8_rapaz", pt: "o rapaz", ru: "мальчик, парень", hint: "мужской род", example: "O rapaz estuda na universidade." },
      { id: "u8_secos", pt: "secos", ru: "сухие", hint: "м.р. мн.ч.", example: "Os verões são quentes e secos." },
      { id: "u8_sede", pt: "a sede", ru: "штаб-квартира", hint: "женский род", example: "A sede da empresa fica em Lisboa." },
      { id: "u8_sonho", pt: "o sonho", ru: "мечта, сон", hint: "мужской род", example: "O meu sonho é viajar pelo mundo." },
      { id: "u8_testemunho", pt: "o testemunho", ru: "свидетельство", hint: "мужской род", example: "O castelo é um testemunho da história." },
      { id: "u8_torridos", pt: "tórridos", ru: "знойные", hint: "м.р. мн.ч.", example: "Os verões são tórridos no interior." },
      { id: "u8_variedade_climatica", pt: "a variedade climática", ru: "климатическое разнообразие", hint: "ж.р.", example: "Portugal tem uma grande variedade climática." },
      { id: "u8_ventos", pt: "os ventos", ru: "ветра", hint: "м.р. мн.ч.", example: "Os ventos sopram do Atlântico." },
      { id: "u8_ventosa", pt: "ventosa", ru: "ветреная", hint: "ж.р.; м.р.: ventoso", example: "A zona costeira é muito ventosa." },
      { id: "u8_usufruir_de", pt: "usufruir de", ru: "пользоваться, наслаждаться", hint: "глагол + предлог", example: "Podemos usufruir de um bom clima." },
    ]
  },

  // ===================== UNIT 9: Demonstratives =====================
  {
    id: 9,
    title: "Указательные местоимения",
    description: "Указательные местоимения и прилагательные: este, esse, aquele",
    theory: [
      {
        heading: "Три степени удалённости",
        text: "В португальском языке есть три указательных местоимения, различающихся по степени удалённости от говорящего: este (этот — близко к говорящему), esse (тот — близко к собеседнику), aquele (тот — далеко от обоих)."
      },
      {
        table: {
          headers: ["Удалённость", "Муж. ед.ч.", "Жен. ед.ч.", "Муж. мн.ч.", "Жен. мн.ч."],
          rows: [
            ["Близко ко мне", "este", "esta", "estes", "estas"],
            ["Близко к тебе", "esse", "essa", "esses", "essas"],
            ["Далеко от обоих", "aquele", "aquela", "aqueles", "aquelas"]
          ]
        }
      },
      {
        heading: "Указательные местоимения среднего рода",
        text: "Для ссылки на абстрактные понятия или ситуации (без конкретного существительного) используются формы среднего рода."
      },
      {
        table: {
          headers: ["Близко ко мне", "Близко к тебе", "Далеко от обоих"],
          rows: [
            ["isto (это)", "isso (то)", "aquilo (то, вон то)"]
          ]
        }
      },
      {
        heading: "Слияние с предлогами",
        text: "Указательные местоимения сливаются с предлогами «de» и «em»."
      },
      {
        table: {
          headers: ["", "de + ...", "em + ..."],
          rows: [
            ["este", "deste", "neste"],
            ["esta", "desta", "nesta"],
            ["esse", "desse", "nesse"],
            ["essa", "dessa", "nessa"],
            ["aquele", "daquele", "naquele"],
            ["aquela", "daquela", "naquela"],
            ["isto", "disto", "nisto"],
            ["isso", "disso", "nisso"],
            ["aquilo", "daquilo", "naquilo"]
          ]
        }
      },
      {
        examples: [
          { pt: "Este livro é meu.", ru: "Эта книга — моя. (книга у меня в руках)" },
          { pt: "Esse livro é teu.", ru: "Та книга — твоя. (книга рядом с тобой)" },
          { pt: "Aquele edifício é a universidade.", ru: "То здание — университет. (далеко)" },
          { pt: "O que é isto?", ru: "Что это?" },
          { pt: "Não gosto disso.", ru: "Мне это не нравится. (то, о чём говоришь)" }
        ]
      },
      {
        note: "В европейском португальском различие между este/esse/aquele соблюдается строже, чем в бразильском варианте. В Бразилии часто используют только esse и aquele."
      },
      {
        heading: "Наречия места: aqui, aí, ali, acolá",
        text: "Указательные местоимения часто используются вместе с наречиями места, которые соответствуют той же трёхступенчатой системе удалённости."
      },
      {
        table: {
          headers: ["Местоимение", "Наречие", "Значение"],
          rows: [
            ["este / isto", "aqui", "здесь (около меня)"],
            ["esse / isso", "aí", "там (около тебя)"],
            ["aquele / aquilo", "ali / acolá", "там / вон там (далеко от обоих)"]
          ]
        }
      },
      {
        examples: [
          { pt: "Isto aqui é meu.", ru: "Вот это (здесь) — моё." },
          { pt: "O que é isso aí na tua mão?", ru: "Что это у тебя в руке?" },
          { pt: "Aquele jardim acolá é muito inglês.", ru: "Тот сад вон там — очень английский." },
          { pt: "Aqueles prédios ali ao fundo da rua são muito modernos.", ru: "Те здания там в конце улицы — очень современные." }
        ]
      },
      {
        heading: "Слияние с предлогом «a»",
        text: "В отличие от предлогов «de» и «em», предлог «a» сливается только с формами aquele/aquela/aquilo."
      },
      {
        table: {
          headers: ["", "a + ..."],
          rows: [
            ["aquele(s)", "àquele(s)"],
            ["aquela(s)", "àquela(s)"],
            ["aquilo", "àquilo"]
          ]
        }
      },
      {
        examples: [
          { pt: "O João dá sempre uma moeda àquele pedinte ali na esquina.", ru: "Жуан всегда даёт монету тому нищему вон там на углу." }
        ]
      }
    ],
    lessons: [
      { title: "Часть 1: Указательные местоимения", theoryRange: [0, 8] },
      { title: "Часть 2: Наречия места и слияние с «a»", theoryRange: [8, 14] }
    ],
    exercises: ex9,
    vocabulary: [
      { pt: "este/esta", ru: "этот/эта (близко ко мне)" },
      { pt: "esse/essa", ru: "тот/та (близко к тебе)" },
      { pt: "aquele/aquela", ru: "тот/та (далеко)" },
      { pt: "isto", ru: "это (абстрактно, близко)" },
      { pt: "isso", ru: "то (абстрактно, около тебя)" },
      { pt: "aquilo", ru: "то (абстрактно, далеко)" },
      { pt: "a caneta", ru: "ручка" },
      { pt: "o edifício", ru: "здание" },
      { pt: "aqui", ru: "здесь" },
      { pt: "ali", ru: "там" }
    ],
    flashcards: [
      { id: "u9_este", pt: "este / esta", ru: "этот / эта", hint: "близко к говорящему", example: "Este café é bom." },
      { id: "u9_esse", pt: "esse / essa", ru: "тот / та (около тебя)", hint: "близко к собеседнику", example: "Esse livro é teu?" },
      { id: "u9_aquele", pt: "aquele / aquela", ru: "тот / та (далеко)", hint: "далеко от обоих", example: "Aquele carro é novo." },
      { id: "u9_isto", pt: "isto", ru: "это (абстрактно)", hint: "средний род, близко", example: "O que é isto?" },
      { id: "u9_isso", pt: "isso", ru: "то (абстрактно)", hint: "средний род, около тебя", example: "Não digas isso!" },
      { id: "u9_aquilo", pt: "aquilo", ru: "то (далеко, абстр.)", hint: "средний род, далеко", example: "Aquilo é estranho." },
      { id: "u9_caneta", pt: "a caneta", ru: "ручка", hint: "женский род", example: "Esta caneta é minha." },
      { id: "u9_edificio", pt: "o edifício", ru: "здание", hint: "мужской род", example: "Aquele edifício é antigo." },
      { id: "u9_agora", pt: "agora", ru: "сейчас, теперь", hint: "наречие времени", example: "Agora estou a estudar português." },
      { id: "u9_amarelos", pt: "amarelos", ru: "жёлтые", hint: "м.р. мн.ч.", example: "Os elétricos amarelos são famosos." },
      { id: "u9_animado", pt: "animado/a", ru: "оживлённый", hint: "согласуется в роде", example: "A festa está muito animada." },
      { id: "u9_anos", pt: "os anos", ru: "годы", hint: "м.р. мн.ч.", example: "Tenho trinta anos." },
      { id: "u9_ao_fundo_da_rua", pt: "ao fundo da rua", ru: "в конце улицы", hint: "выражение места", example: "A padaria fica ao fundo da rua." },
      { id: "u9_aproximadamente", pt: "aproximadamente", ru: "приблизительно", hint: "наречие", example: "São aproximadamente dez quilómetros." },
      { id: "u9_arquipelagos", pt: "os arquipélagos", ru: "архипелаги", hint: "м.р. мн.ч.", example: "Portugal tem dois arquipélagos." },
      { id: "u9_autonomia", pt: "a autonomia", ru: "автономия", hint: "женский род", example: "As ilhas têm autonomia política." },
      { id: "u9_botoes", pt: "os botões", ru: "пуговицы", hint: "м.р. мн.ч.", example: "A camisa tem seis botões." },
      { id: "u9_com_certeza", pt: "com certeza", ru: "конечно", hint: "выражение", example: "Com certeza, pode sentar-se aqui." },
      { id: "u9_combinado", pt: "combinado", ru: "договорились", hint: "восклицание", example: "Encontramo-nos às cinco. Combinado!" },
      { id: "u9_conjunto", pt: "o conjunto", ru: "набор, группа", hint: "мужской род", example: "Este conjunto de ilhas é bonito." },
      { id: "u9_contar", pt: "contar", ru: "рассказывать; считать", hint: "глагол", example: "Vou contar-te uma história." },
      { id: "u9_continental", pt: "continental", ru: "континентальный", hint: "неизменяемое по роду", example: "Portugal continental faz fronteira com Espanha." },
      { id: "u9_costa_ocidental", pt: "a costa ocidental", ru: "западное побережье", hint: "ж.р.", example: "Portugal fica na costa ocidental da Europa." },
      { id: "u9_devido_a", pt: "devido a", ru: "из-за, вследствие", hint: "предлог причины", example: "O jogo foi cancelado devido à chuva." },
      { id: "u9_ensinar", pt: "ensinar", ru: "преподавать, учить", hint: "глагол", example: "Ela ensina português na escola." },
      { id: "u9_estados_unidos", pt: "os Estados Unidos", ru: "Соединённые Штаты", hint: "м.р. мн.ч.", example: "Ele mora nos Estados Unidos." },
      { id: "u9_gravata", pt: "a gravata", ru: "галстук", hint: "женский род", example: "Ele usa sempre gravata." },
      { id: "u9_ilhas", pt: "as ilhas", ru: "острова", hint: "ж.р. мн.ч.", example: "As ilhas dos Açores são vulcânicas." },
      { id: "u9_levar", pt: "levar", ru: "брать, нести", hint: "глагол", example: "Vou levar este saco." },
      { id: "u9_moeda", pt: "a moeda", ru: "монета; валюта", hint: "женский род", example: "A moeda de Portugal é o euro." },
      { id: "u9_muitas_vezes", pt: "muitas vezes", ru: "часто", hint: "выражение частоты", example: "Vou a Lisboa muitas vezes." },
      { id: "u9_oceano_atlantico", pt: "o Oceano Atlântico", ru: "Атлантический океан", hint: "м.р.", example: "Portugal fica junto ao Oceano Atlântico." },
      { id: "u9_oeste", pt: "o oeste", ru: "запад", hint: "мужской род", example: "O sol põe-se a oeste." },
      { id: "u9_para_mim", pt: "para mim", ru: "для меня", hint: "предлог + местоимение", example: "Este presente é para mim?" },
      { id: "u9_pertencer", pt: "pertencer", ru: "принадлежать", hint: "глагол", example: "Estas ilhas pertencem a Portugal." },
      { id: "u9_politica", pt: "a política", ru: "политика", hint: "женский род", example: "A política é um tema difícil." },
      { id: "u9_por_favor", pt: "por favor", ru: "пожалуйста", hint: "выражение вежливости", example: "Um café, por favor." },
      { id: "u9_saco", pt: "o saco", ru: "сумка, мешок", hint: "мужской род", example: "Pus as compras no saco." },
      { id: "u9_saia", pt: "a saia", ru: "юбка", hint: "женский род", example: "Ela veste uma saia azul." },
      { id: "u9_sapato", pt: "o sapato", ru: "туфля, ботинок", hint: "мужской род", example: "Estes sapatos são confortáveis." },
      { id: "u9_significar", pt: "significar", ru: "означать", hint: "глагол", example: "O que significa esta palavra?" },
      { id: "u9_territorio", pt: "o território", ru: "территория", hint: "мужской род", example: "O território português é pequeno." },
      { id: "u9_uniao_europeia", pt: "a União Europeia", ru: "Европейский союз", hint: "ж.р.", example: "Portugal faz parte da União Europeia." },
    ]
  },

  // ===================== UNIT 10: Adjectives and Adverbs =====================
  {
    id: 10,
    title: "Прилагательные и наречия",
    description: "Согласование прилагательных, их позиция и образование наречий",
    theory: [
      {
        heading: "Согласование прилагательных",
        text: "Прилагательные в португальском согласуются с существительным в роде и числе. Большинство прилагательных на -o имеют женскую форму на -a."
      },
      {
        table: {
          headers: ["Тип", "Муж. ед.ч.", "Жен. ед.ч.", "Муж. мн.ч.", "Жен. мн.ч."],
          rows: [
            ["на -o/-a", "bonito", "bonita", "bonitos", "bonitas"],
            ["на -e (общий)", "grande", "grande", "grandes", "grandes"],
            ["на согл. (общий)", "difícil", "difícil", "difíceis", "difíceis"],
            ["на -ês", "português", "portuguesa", "portugueses", "portuguesas"],
            ["на -or", "trabalhador", "trabalhadora", "trabalhadores", "trabalhadoras"],
            ["на -eu → -eia", "europeu", "europeia", "europeus", "europeias"],
            ["на -ão → -ã/-ona", "anfitrião", "anfitriã", "anfitriões", "anfitriãs"],
            ["неправильные", "bom", "boa", "bons", "boas"],
            ["неправильные", "mau", "má", "maus", "más"]
          ]
        }
      },
      {
        heading: "Неизменяемые по роду прилагательные",
        text: "Прилагательные на -a, -e, -ar, -l, -m и -z не изменяются по роду — одна форма для мужского и женского. Во множественном числе они изменяются по обычным правилам существительных."
      },
      {
        table: {
          headers: ["Окончание", "Пример", "Муж.", "Жен.", "Мн. ч."],
          rows: [
            ["-a", "pessimista", "Ele é pessimista", "Ela é pessimista", "pessimistas"],
            ["-e", "forte", "Ele é forte", "Ela é forte", "fortes"],
            ["-ar", "vulgar", "Ele é vulgar", "Ela é vulgar", "vulgares"],
            ["-l", "essencial", "O dinheiro é essencial", "A comida é essencial", "essenciais"],
            ["-m", "jovem", "Ele é jovem", "Ela é jovem", "jovens"],
            ["-z", "feliz", "Ele é feliz", "Ela é feliz", "felizes"]
          ]
        }
      },
      {
        note: "Также не меняются по роду пары: anterior / posterior, interior / exterior, inferior / superior, menor / maior, melhor / pior. Исключение: simples не меняется и во множественном числе (São ambos simples)."
      },
      {
        heading: "Позиция прилагательного",
        text: "Обычно прилагательные стоят после существительного: um carro vermelho (красная машина). Некоторые короткие и частые прилагательные могут стоять перед существительным, и тогда они приобретают переносное или усиленное значение."
      },
      {
        table: {
          equalCols: true,
          headers: ["После сущ. (буквально)", "Перед сущ. (переносно)"],
          rows: [
            ["um homem rico — богатый человек", "um rico homem — отличный парень"],
            ["pessoas velhas — старые люди", "velhos amigos — давние друзья"],
            ["uma mulher bela — красивая женщина", "uma bela mulher — замечательная женщина"],
            ["uma casa grande — большой дом", "um grande homem — великий человек"],
            ["um carro novo — новая машина", "um novo problema — очередная проблема"]
          ]
        }
      },
      {
        examples: [
          { pt: "Ele é um homem rico.", ru: "Он богатый человек." },
          { pt: "Ele é um rico homem.", ru: "Он отличный парень." },
          { pt: "Eles são pessoas velhas.", ru: "Они старые люди." },
          { pt: "Eles são velhos amigos.", ru: "Они давние друзья." },
          { pt: "Ela é uma mulher bela.", ru: "Она красивая женщина." },
          { pt: "Ela é uma bela mulher.", ru: "Она замечательная женщина." }
        ]
      },
      {
        heading: "Наречия (Advérbios)",
        text: "Наречия — неизменяемые слова, которые могут определять глагол, прилагательное, другое наречие или целое предложение."
      },
      {
        examples: [
          { pt: "Amanhã temos de ir trabalhar.", ru: "Завтра мы должны идти на работу. (наречие → глагол)" },
          { pt: "O Pedro é bastante profissional.", ru: "Педру достаточно профессионален. (наречие → прилагательное)" },
          { pt: "Os aviões voam muito alto.", ru: "Самолёты летают очень высоко. (наречие → наречие)" },
          { pt: "Felizmente, ele ganha suficiente para sustentar a família.", ru: "К счастью, он зарабатывает достаточно, чтобы содержать семью. (наречие → предложение)" }
        ]
      },
      {
        heading: "Наречия времени (Advérbios de tempo)",
        text: "Обозначают когда происходит действие."
      },
      {
        table: {
          equalCols: true,
          headers: ["Português", "Перевод"],
          rows: [
            ["ontem", "вчера"],
            ["hoje", "сегодня"],
            ["amanhã", "завтра"],
            ["agora ≠ logo", "сейчас ≠ потом"],
            ["antes ≠ depois", "до ≠ после"],
            ["cedo ≠ tarde", "рано ≠ поздно"]
          ]
        }
      },
      {
        examples: [
          { pt: "Hoje ficamos em casa porque é domingo.", ru: "Сегодня мы остаёмся дома, потому что воскресенье." },
          { pt: "Tenho de ir às compras agora.", ru: "Мне нужно сейчас идти за покупками." },
          { pt: "Amanhã vamos sair de casa cedo.", ru: "Завтра мы выйдем из дома рано." }
        ]
      },
      {
        heading: "Наречия места (Advérbios de lugar)",
        text: "Обозначают где происходит действие. Португальский различает несколько степеней удалённости."
      },
      {
        table: {
          equalCols: true,
          headers: ["Português", "Перевод"],
          rows: [
            ["aqui, cá", "здесь"],
            ["aí", "там (где ты)"],
            ["ali, acolá", "там (вон там)"],
            ["lá", "там (далеко, о чём уже шла речь)"],
            ["perto ≠ longe", "близко ≠ далеко"],
            ["aqui/cá dentro ≠ lá fora", "внутри ≠ снаружи"],
            ["dentro ≠ fora", "внутрь ≠ наружу"]
          ]
        }
      },
      {
        examples: [
          { pt: "Esse lápis que tens aí na mão pertence ao João.", ru: "Тот карандаш, что у тебя в руке, принадлежит Жуану." },
          { pt: "O David vai para Lisboa e fica lá duas semanas.", ru: "Давид едет в Лиссабон и остаётся там на две недели." },
          { pt: "Vamos a casa do Pedro, pois fica perto.", ru: "Мы идём к Педру домой — это близко." },
          { pt: "Está muita gente lá fora.", ru: "На улице много людей." }
        ]
      },
      {
        heading: "Наречия образа действия (Advérbios de modo)",
        text: "Обозначают как происходит действие."
      },
      {
        table: {
          equalCols: true,
          headers: ["Português", "Перевод"],
          rows: [
            ["bem ≠ mal", "хорошо ≠ плохо"],
            ["depressa ≠ devagar", "быстро ≠ медленно"]
          ]
        }
      },
      {
        examples: [
          { pt: "Ela conduz depressa.", ru: "Она водит быстро." },
          { pt: "Ele fala bem português.", ru: "Он хорошо говорит по-португальски." }
        ]
      },
      {
        heading: "Наречия степени (Advérbios de intensidade)",
        text: "Обозначают насколько, в какой степени."
      },
      {
        table: {
          equalCols: true,
          headers: ["Português", "Перевод"],
          rows: [
            ["pouco ≠ muito", "мало ≠ очень, много"],
            ["menos ≠ mais", "меньше ≠ больше"],
            ["demasiado", "слишком"],
            ["demais", "слишком много"]
          ]
        }
      },
      {
        examples: [
          { pt: "Ela trabalha muito.", ru: "Она много работает." },
          { pt: "Tu comes demasiado.", ru: "Ты слишком много ешь." },
          { pt: "Tenho sapatos demais.", ru: "У меня слишком много обуви." },
          { pt: "Vocês falam pouco.", ru: "Вы мало говорите." }
        ]
      },
      {
        heading: "Образование наречий с -mente",
        text: "Многие наречия образуются добавлением суффикса -mente к прилагательному. Если прилагательное оканчивается на -o, оно сначала принимает форму женского рода на -a. Графические ударения при этом опускаются."
      },
      {
        table: {
          headers: ["Прилагательное", "Наречие", "Перевод"],
          rows: [
            ["normal", "normalmente", "обычно"],
            ["individual", "individualmente", "индивидуально"],
            ["fácil", "facilmente", "легко"],
            ["(in)feliz", "(in)felizmente", "(не)к счастью"],
            ["alegre", "alegremente", "радостно"],
            ["semanal", "semanalmente", "еженедельно"],
            ["mensal", "mensalmente", "ежемесячно"],
            ["anual", "anualmente", "ежегодно"],
            ["lento → lenta", "lentamente", "медленно"],
            ["rápido → rápida", "rapidamente", "быстро"],
            ["óbvio → óbvia", "obviamente", "очевидно"],
            ["cuidadoso → cuidadosa", "cuidadosamente", "осторожно"],
            ["curioso → curiosa", "curiosamente", "любопытно"],
            ["diário → diária", "diariamente", "ежедневно"]
          ]
        }
      },
      {
        examples: [
          { pt: "Num dia normal a Joana vai trabalhar.", ru: "В обычный день Жуана идёт на работу." },
          { pt: "Normalmente a Joana vai trabalhar.", ru: "Обычно Жуана идёт на работу." },
          { pt: "A avó da Paula caminha lentamente.", ru: "Бабушка Паулы идёт медленно." }
        ]
      },
      {
        note: "Если два наречия на -mente стоят рядом, суффикс получает только второе: Na minha empresa fazemos relatórios mensal e trimestralmente (В моей компании мы пишем отчёты ежемесячно и ежеквартально)."
      },
      {
        heading: "Позиция наречия в предложении",
        text: "Наречия времени и места могут стоять до или после глагола. Остальные наречия обычно стоят перед прилагательным или после глагола. Наречия на -mente часто ставятся в начало предложения для выразительности."
      },
      {
        examples: [
          { pt: "Amanhã vamos ao cinema.", ru: "Завтра мы идём в кино. (время — до глагола)" },
          { pt: "Eles não trabalham hoje.", ru: "Они сегодня не работают. (время — после глагола)" },
          { pt: "A filha do Pedro é muito bonita.", ru: "Дочь Педру очень красивая. (степень — перед прилагательным)" },
          { pt: "Ela corre depressa.", ru: "Она бежит быстро. (образ действия — после глагола)" },
          { pt: "Infelizmente, está a chover.", ru: "К сожалению, идёт дождь. (-mente — начало предложения)" },
          { pt: "Raramente tenho tempo para ir ao cinema.", ru: "Я редко нахожу время ходить в кино. (-mente — начало предложения)" }
        ]
      }
    ],
    lessons: [
      { title: "Прилагательные", theoryRange: [0, 8] },
      { title: "Типы наречий", theoryRange: [8, 22] },
      { title: "Образование и позиция наречий", theoryRange: [22, 28] }
    ],
    exercises: ex10,
    vocabulary: [
      { pt: "bonito/a", ru: "красивый" },
      { pt: "grande", ru: "большой" },
      { pt: "pequeno/a", ru: "маленький" },
      { pt: "novo/a", ru: "новый" },
      { pt: "velho/a", ru: "старый" },
      { pt: "bom / boa", ru: "хороший" },
      { pt: "mau / má", ru: "плохой" },
      { pt: "difícil", ru: "трудный" },
      { pt: "fácil", ru: "лёгкий" },
      { pt: "depressa", ru: "быстро (наречие)" },
      { pt: "devagar", ru: "медленно (наречие)" }
    ],
    flashcards: [
      { id: "u10_bonito", pt: "bonito/a", ru: "красивый/ая", hint: "ж.р.: bonita, мн.ч.: bonitos/as", example: "A cidade é bonita." },
      { id: "u10_grande", pt: "grande", ru: "большой", hint: "одна форма для обоих родов", example: "A casa é grande." },
      { id: "u10_pequeno", pt: "pequeno/a", ru: "маленький/ая", hint: "антоним: grande", example: "O gato é pequeno." },
      { id: "u10_bom", pt: "bom / boa", ru: "хороший/ая", hint: "наречие: bem", example: "O filme é bom." },
      { id: "u10_mau", pt: "mau / má", ru: "плохой/ая", hint: "наречие: mal", example: "O tempo está mau." },
      { id: "u10_dificil", pt: "difícil", ru: "трудный", hint: "мн.ч.: difíceis, наречие: dificilmente", example: "O exame é difícil." },
      { id: "u10_depressa", pt: "depressa", ru: "быстро", hint: "наречие, неизменяемое", example: "Ele corre depressa." },
      { id: "u10_devagar", pt: "devagar", ru: "медленно", hint: "антоним: depressa", example: "Fala devagar, por favor." },
      { id: "u10_acolhedor", pt: "acolhedor", ru: "гостеприимный", hint: "ж.р.: acolhedora", example: "O povo português é muito acolhedor." },
      { id: "u10_agradavel", pt: "agradável", ru: "приятный", hint: "неизменяемое по роду", example: "O clima é muito agradável." },
      { id: "u10_alegre", pt: "alegre", ru: "весёлый, радостный", hint: "неизменяемое по роду", example: "Ela é sempre alegre." },
      { id: "u10_alface", pt: "a alface", ru: "салат (латук)", hint: "женский род", example: "Quero uma sandes com alface." },
      { id: "u10_alto", pt: "alto", ru: "высокий", hint: "ж.р.: alta", example: "O edifício é muito alto." },
      { id: "u10_antigo", pt: "antigo", ru: "старинный, древний", hint: "ж.р.: antiga", example: "O castelo é muito antigo." },
      { id: "u10_antipatico", pt: "antipático", ru: "неприятный", hint: "ж.р.: antipática", example: "O vizinho é muito antipático." },
      { id: "u10_apoio", pt: "o apoio", ru: "поддержка", hint: "мужской род", example: "Agradeço o vosso apoio." },
      { id: "u10_aproveitar", pt: "aproveitar", ru: "воспользоваться", hint: "глагол", example: "Vou aproveitar o bom tempo." },
      { id: "u10_atencao", pt: "a atenção", ru: "внимание", hint: "женский род", example: "Prestem atenção, por favor." },
      { id: "u10_barato", pt: "barato", ru: "дешёвый", hint: "ж.р.: barata", example: "Este restaurante é barato." },
      { id: "u10_bem_estar", pt: "o bem-estar", ru: "благополучие", hint: "мужской род", example: "O bem-estar é importante para todos." },
      { id: "u10_caminhadas", pt: "as caminhadas", ru: "прогулки, походы", hint: "ж.р. мн.ч.", example: "Fazemos caminhadas na serra." },
      { id: "u10_centenas", pt: "as centenas", ru: "сотни", hint: "ж.р. мн.ч.", example: "Centenas de pessoas vieram à festa." },
      { id: "u10_claro", pt: "claro", ru: "светлый, ясный", hint: "ж.р.: clara", example: "O dia está claro e bonito." },
      { id: "u10_comum", pt: "comum", ru: "общий, обычный", hint: "неизменяемое по роду", example: "É um problema comum." },
      { id: "u10_convivio", pt: "o convívio", ru: "общение, застолье", hint: "мужской род", example: "O convívio familiar é muito importante." },
      { id: "u10_curto", pt: "curto", ru: "короткий", hint: "ж.р.: curta", example: "A saia é muito curta." },
      { id: "u10_delicioso", pt: "delicioso", ru: "вкусный, восхитительный", hint: "ж.р.: deliciosa", example: "O bolo está delicioso." },
      { id: "u10_edificio", pt: "o edifício", ru: "здание", hint: "мужской род", example: "O edifício é novo e moderno." },
      { id: "u10_eficaz", pt: "eficaz", ru: "эффективный", hint: "неизменяемое по роду", example: "Este método é muito eficaz." },
      { id: "u10_em_vez_de", pt: "em vez de", ru: "вместо", hint: "предлог", example: "Em vez de café, quero chá." },
      { id: "u10_encantadora", pt: "encantadora", ru: "очаровательная", hint: "ж.р.; м.р.: encantador", example: "A aldeia é encantadora." },
      { id: "u10_energia", pt: "a energia", ru: "энергия", hint: "женский род", example: "A energia solar é renovável." },
      { id: "u10_feio", pt: "feio", ru: "некрасивый", hint: "ж.р.: feia", example: "O prédio é muito feio." },
      { id: "u10_fiambre", pt: "o fiambre", ru: "ветчина", hint: "мужской род", example: "Quero uma sandes de fiambre." },
      { id: "u10_filhos", pt: "os filhos", ru: "дети, сыновья", hint: "м.р. мн.ч.", example: "Os filhos estão na escola." },
      { id: "u10_fora_da_cidade", pt: "fora da cidade", ru: "за городом", hint: "выражение места", example: "Vivemos fora da cidade." },
      { id: "u10_idosos", pt: "os idosos", ru: "пожилые люди", hint: "м.р. мн.ч.", example: "Os idosos merecem respeito." },
      { id: "u10_instituicao", pt: "a instituição", ru: "учреждение", hint: "женский род", example: "A instituição ajuda os idosos." },
      { id: "u10_intenso", pt: "intenso", ru: "интенсивный", hint: "ж.р.: intensa", example: "O calor é intenso no verão." },
      { id: "u10_lacos_familiares", pt: "laços familiares", ru: "семейные узы", hint: "м.р. мн.ч.", example: "Os laços familiares são muito fortes." },
      { id: "u10_lar", pt: "o lar", ru: "дом, очаг", hint: "мужской род", example: "O lar é onde está a família." },
      { id: "u10_lindissimo", pt: "lindíssimo", ru: "прекраснейший", hint: "превосходная степень", example: "O pôr do sol é lindíssimo." },
      { id: "u10_luz", pt: "a luz", ru: "свет", hint: "женский род", example: "A luz do sol é maravilhosa." },
      { id: "u10_membros", pt: "os membros", ru: "члены", hint: "м.р. мн.ч.", example: "Os membros da família são unidos." },
      { id: "u10_natureza", pt: "a natureza", ru: "природа", hint: "женский род", example: "A natureza em Portugal é linda." },
      { id: "u10_necessario", pt: "necessário", ru: "необходимый", hint: "ж.р.: necessária", example: "É necessário estudar todos os dias." },
      { id: "u10_papel", pt: "o papel", ru: "бумага; роль", hint: "мужской род", example: "Preciso de uma folha de papel." },
      { id: "u10_passaros", pt: "os pássaros", ru: "птицы", hint: "м.р. мн.ч.", example: "Os pássaros cantam de manhã." },
      { id: "u10_pobre", pt: "pobre", ru: "бедный", hint: "неизменяемое по роду", example: "A família é muito pobre." },
      { id: "u10_sande", pt: "a sandes", ru: "сэндвич", hint: "женский род", example: "Quero uma sandes de queijo." },
      { id: "u10_sociedades", pt: "as sociedades", ru: "общества", hint: "ж.р. мн.ч.", example: "Nas sociedades modernas, a família mudou." },
      { id: "u10_sorrir", pt: "sorrir", ru: "улыбаться", hint: "глагол", example: "Ela sorri sempre." },
    ]
  },

  // ===================== UNIT 11: Comparatives and Superlatives =====================
  {
    id: 11,
    title: "Сравнительная и превосходная степени",
    description: "Сравнение прилагательных и наречий, превосходная степень",
    theory: [
      {
        heading: "Сравнительная степень (Comparativo)",
        text: "Для сравнения используются конструкции: mais ... do que (более ... чем), menos ... do que (менее ... чем), tão ... como (такой же ... как)."
      },
      {
        table: {
          headers: ["Конструкция", "Значение", "Пример"],
          rows: [
            ["mais + прил. + do que", "более ... чем", "Lisboa é maior do que o Porto."],
            ["menos + прил. + do que", "менее ... чем", "O Porto é menos quente do que Lisboa."],
            ["tão + прил. + como/quanto", "такой же ... как", "Coimbra é tão bonita como o Porto."],
            ["tanto(s)/tanta(s) + сущ. + como", "столько же ... сколько", "Tenho tanto vinho como sumo."]
          ]
        }
      },
      {
        note: "Конструкция tão ... como используется с прилагательными и наречиями, а tanto(s)/tanta(s) ... como — с существительными."
      },
      {
        heading: "Усиление сравнений",
        text: "Сравнительные конструкции можно усилить наречиями muito (гораздо), bem (значительно) и ainda (ещё)."
      },
      {
        examples: [
          { pt: "A Ana é muito mais bonita do que a Paula.", ru: "Ана гораздо красивее Паулы." },
          { pt: "Eu acho o Porto bem mais interessante do que Lisboa.", ru: "Я считаю Порту значительно интереснее Лиссабона." },
          { pt: "A Sofia é ainda menos faladora do que a Suzana.", ru: "София ещё менее разговорчива, чем Сузана." }
        ]
      },
      {
        heading: "Неправильные формы сравнения и превосходной степени",
        text: "Некоторые прилагательные имеют особые формы сравнительной и превосходной степени."
      },
      {
        table: {
          headers: ["Прилагательное", "Сравнит. степень", "Относит. превосх.", "Абсолют. превосх."],
          rows: [
            ["bom (хороший)", "melhor", "o melhor", "ótimo"],
            ["mau (плохой)", "pior", "o pior", "péssimo"],
            ["grande (большой)", "maior", "o maior", "máximo"],
            ["pequeno (маленький)", "menor", "o menor", "mínimo"],
            ["muito (очень)", "mais", "o mais", "muitíssimo"],
            ["pouco (мало)", "menos", "o menos", "pouquíssimo"]
          ]
        }
      },
      {
        heading: "Превосходная степень (Superlativo)",
        text: "Относительная превосходная степень: o/a mais + прил. + de (самый). Абсолютная превосходная: прил. + -íssimo/a (очень, чрезвычайно)."
      },
      {
        table: {
          headers: ["Тип", "Конструкция", "Пример"],
          rows: [
            ["Относительная (более)", "o/a mais + прил.", "Ela é a mais inteligente da turma."],
            ["Относительная (менее)", "o/a menos + прил.", "O José é o rapaz menos inteligente."],
            ["Относительная (нерег.)", "o/a melhor / pior", "Este é o melhor restaurante."],
            ["Абсолютная (-íssimo)", "прил. + -íssimo/a", "A comida está ótima."],
            ["Абсолютная (muito)", "muito + прил.", "A comida está muito boa."]
          ]
        }
      },
      {
        heading: "Правила образования абсолютной превосходной степени (-íssimo)",
        text: "Суффикс -íssimo/-a/-os/-as добавляется к основе прилагательного. При этом графические ударения снимаются."
      },
      {
        table: {
          headers: ["Окончание прилаг.", "Правило", "Примеры"],
          rows: [
            ["-a, -e, -o", "Гласная отпадает + -íssimo", "lento → lentíssimo, triste → tristíssimo"],
            ["-l, -r, -s", "Просто добавляется -íssimo", "original → originalíssimo, vulgar → vulgaríssimo"],
            ["-co", "-c меняется на -qu + íssimo", "fraco → fraquíssimo, rico → riquíssimo"]
          ]
        }
      },
      {
        heading: "Неправильные абсолютные превосходные степени",
        text: "Некоторые прилагательные имеют особые формы абсолютной превосходной степени (латинского происхождения)."
      },
      {
        table: {
          headers: ["Прилагательное", "Абсолютная превосходная степень"],
          rows: [
            ["amigo (дружеский)", "amicíssimo"],
            ["antigo (старинный)", "antiquíssimo"],
            ["difícil (трудный)", "dificílimo"],
            ["pobre (бедный)", "paupérrimo"]
          ]
        }
      },
      {
        heading: "Неформальные альтернативы",
        text: "В разговорном португальском вместо суффикса -íssimo часто используются наречия muitíssimo, extremamente или super перед прилагательным."
      },
      {
        examples: [
          { pt: "O Porto é mais frio do que Lisboa.", ru: "Порту холоднее Лиссабона." },
          { pt: "Este vinho é melhor do que aquele.", ru: "Это вино лучше того." },
          { pt: "Ela é a aluna mais inteligente da turma.", ru: "Она — самая умная ученица в классе." },
          { pt: "O exame foi facílimo.", ru: "Экзамен был очень лёгким." },
          { pt: "O Filipe está muitíssimo triste.", ru: "Филипе чрезвычайно грустный." },
          { pt: "O apartamento dele é super moderno.", ru: "Его квартира суперсовременная." }
        ]
      },
      {
        note: "В европейском португальском «do que» часто сокращается до «que» в разговорной речи: «É mais alto que eu» (Он выше меня)."
      }
    ],
    lessons: [
      { title: "Часть 1: Сравнительная степень", theoryRange: [0, 7] },
      { title: "Часть 2: Превосходная степень", theoryRange: [7, 16] }
    ],
    exercises: ex11,
    vocabulary: [
      { pt: "mais", ru: "более" },
      { pt: "menos", ru: "менее" },
      { pt: "melhor", ru: "лучше, лучший" },
      { pt: "pior", ru: "хуже, худший" },
      { pt: "maior", ru: "больше, больший" },
      { pt: "menor", ru: "меньше, меньший" },
      { pt: "tão ... como", ru: "такой же ... как" },
      { pt: "o restaurante", ru: "ресторан" },
      { pt: "o vinho", ru: "вино" },
      { pt: "inteligente", ru: "умный" },
      { pt: "a turma", ru: "класс, группа" }
    ],
    flashcards: [
      { id: "u11_mais", pt: "mais ... do que", ru: "более ... чем", hint: "сравнительная степень", example: "Ele é mais alto do que eu." },
      { id: "u11_menos", pt: "menos ... do que", ru: "менее ... чем", hint: "сравнительная степень", example: "Isto é menos caro do que aquilo." },
      { id: "u11_melhor", pt: "melhor", ru: "лучше, лучший", hint: "от bom", example: "Este vinho é melhor." },
      { id: "u11_pior", pt: "pior", ru: "хуже, худший", hint: "от mau", example: "O tempo está pior hoje." },
      { id: "u11_maior", pt: "maior", ru: "больше, больший", hint: "от grande", example: "Lisboa é maior do que o Porto." },
      { id: "u11_menor", pt: "menor", ru: "меньше, меньший", hint: "от pequeno", example: "O meu quarto é menor." },
      { id: "u11_vinho", pt: "o vinho", ru: "вино", hint: "мужской род", example: "O vinho português é famoso." },
      { id: "u11_restaurante", pt: "o restaurante", ru: "ресторан", hint: "мужской род", example: "Este restaurante é o melhor." },
      { id: "u11_cada", pt: "cada", ru: "каждый", hint: "неизменяемое", example: "Cada pessoa tem o seu gosto." },
      { id: "u11_carnes", pt: "as carnes", ru: "мясо (виды)", hint: "ж.р., мн.ч.", example: "As carnes deste restaurante são excelentes." },
      { id: "u11_castanha_de_caju", pt: "a castanha de caju", ru: "кешью", hint: "ж.р.", example: "A castanha de caju é muito popular no Brasil." },
      { id: "u11_coco", pt: "o coco", ru: "кокос", hint: "м.р.", example: "O coco é um fruto tropical." },
      { id: "u11_curtissimas", pt: "curtíssimas", ru: "кратчайшие", hint: "превосх. степень, ж.р. мн.ч.", example: "As distâncias são curtíssimas nesta cidade." },
      { id: "u11_forca", pt: "a força", ru: "сила", hint: "ж.р.", example: "Ele tem muita força nos braços." },
      { id: "u11_frutos", pt: "os frutos", ru: "фрукты, плоды", hint: "м.р., мн.ч.", example: "Os frutos tropicais são muito saborosos." },
      { id: "u11_habito", pt: "o hábito", ru: "привычка", hint: "м.р.", example: "Comer bem é um bom hábito." },
      { id: "u11_ingredientes", pt: "os ingredientes", ru: "ингредиенты", hint: "м.р., мн.ч.", example: "Os ingredientes desta receita são simples." },
      { id: "u11_legumes", pt: "os legumes", ru: "овощи", hint: "м.р., мн.ч.", example: "Os legumes frescos são mais saudáveis." },
      { id: "u11_longissimo", pt: "longíssimo", ru: "очень далёкий", hint: "превосх. степень, м.р.", example: "O caminho era longíssimo." },
      { id: "u11_melancia", pt: "a melancia", ru: "арбуз", hint: "ж.р.", example: "No verão, como muita melancia." },
      { id: "u11_momento", pt: "o momento", ru: "момент", hint: "м.р.", example: "Este é um momento especial." },
      { id: "u11_painco", pt: "o painço", ru: "просо", hint: "м.р., злак", example: "O painço é um cereal muito antigo." },
      { id: "u11_papaia", pt: "a papaia", ru: "папайя", hint: "ж.р.", example: "A papaia é rica em vitaminas." },
      { id: "u11_pratos", pt: "os pratos", ru: "блюда", hint: "м.р., мн.ч.", example: "Os pratos tradicionais são os melhores." },
      { id: "u11_proximidade", pt: "a proximidade", ru: "близость", hint: "ж.р.", example: "A proximidade do mar é uma vantagem." },
      { id: "u11_saborosa", pt: "saborosa", ru: "вкусная", hint: "прил., ж.р.", example: "A comida portuguesa é muito saborosa." },
      { id: "u11_sorgo", pt: "o sorgo", ru: "сорго", hint: "м.р., злак", example: "O sorgo é cultivado em África." },
      { id: "u11_tradicoes", pt: "as tradições", ru: "традиции", hint: "ж.р., мн.ч.", example: "As tradições culinárias variam de região para região." },
      { id: "u11_velhissima", pt: "velhíssima", ru: "очень старая", hint: "превосх. степень, ж.р.", example: "Esta receita é velhíssima." },
    ]
  },

  // ===================== UNIT 12: Direct Object Pronouns =====================
  {
    id: 12,
    title: "Местоимения прямого дополнения",
    description: "Формы и позиция местоимений прямого дополнения (pronomes de complemento direto)",
    theory: [
      {
        heading: "Формы местоимений прямого дополнения",
        text: "Местоимения прямого дополнения заменяют существительное-дополнение без предлога."
      },
      {
        table: {
          headers: ["Лицо", "Местоимение", "Перевод"],
          rows: [
            ["1-е ед.ч.", "me", "меня"],
            ["2-е ед.ч.", "te", "тебя"],
            ["3-е ед.ч. м.р.", "o", "его"],
            ["3-е ед.ч. ж.р.", "a", "её"],
            ["1-е мн.ч.", "nos", "нас"],
            ["3-е мн.ч. м.р.", "os", "их (м.р.)"],
            ["3-е мн.ч. ж.р.", "as", "их (ж.р.)"]
          ]
        }
      },
      {
        heading: "Позиция местоимений в европейском португальском",
        text: "В европейском португальском местоимение обычно стоит ПОСЛЕ глагола (энклиза), присоединяясь через дефис. Но некоторые слова действуют как магнит — они «перетягивают» местоимение ПЕРЕД глагол (проклиза). Это отрицания (não, nunca, ninguém), вопросительные слова (quem, onde, quando), союзы (que, porque, se), наречия (já, ainda, sempre, também) и неопределённые местоимения (tudo, alguém). Простое правило: если перед глаголом ничего нет — местоимение после; если есть «слово-магнит» — местоимение перед."
      },
      {
        table: {
          headers: ["Позиция", "Правило", "Пример"],
          rows: [
            ["Энклиза (после)", "По умолчанию", "Vejo-o todos os dias."],
            ["Проклиза (перед)", "После não", "Não o vejo."],
            ["Проклиза (перед)", "В вопросах с вопр. словом", "Onde o viste?"],
            ["Проклиза (перед)", "После que, quando и т.д.", "Sei que o conheço."]
          ]
        }
      },
      {
        heading: "Проклиза после наречий",
        text: "Местоимение ставится ПЕРЕД глаголом после наречий: ainda (ещё), tudo (всё), também (тоже), só (только)."
      },
      {
        examples: [
          { pt: "A Paula ainda te leva à estação.", ru: "Паула ещё отвезёт тебя на станцию." },
          { pt: "Tudo me chateia hoje!", ru: "Сегодня всё меня раздражает!" },
          { pt: "O João só me conhece desde o ano passado.", ru: "Жуау знает меня только с прошлого года." }
        ]
      },
      {
        note: "Внимание: «sempre» — особое слово. После глагола оно значит «всегда» (A Luísa ouve-nos sempre). Перед глаголом оно значит «всё-таки» (A Luísa sempre nos ouve). Позиция «sempre» влияет и на позицию местоимения."
      },
      {
        heading: "Проклиза после местоимений и определителей",
        text: "Местоимение ставится перед глаголом после слов: todos/as (все), muitos/as (многие), poucos/as (немногие), alguém (кто-то), algo (что-то)."
      },
      {
        examples: [
          { pt: "Todos a conhecem.", ru: "Все её знают." },
          { pt: "Alguém me ajuda?", ru: "Кто-нибудь мне поможет?" },
          { pt: "Algo me diz que ele está em apuros.", ru: "Что-то мне подсказывает, что у него проблемы." }
        ]
      },
      {
        heading: "Изменение формы после глагола",
        text: "Когда глагол оканчивается на -r, -s, -z, местоимения o/a/os/as принимают форму lo/la/los/las. Когда глагол оканчивается на -m или носовой звук, они принимают форму no/na/nos/nas."
      },
      {
        heading: "Ударения при образовании форм -lo/-la",
        text: "При отпадении -r/-s/-z ударение зависит от гласной: после -ar, -az — acento agudo (á): comprá-lo, fá-la; после -er, -or, -ez — acento circunflexo (ê, ô): conhecê-la, expô-las, fê-lo; после -ir — без дополнительного ударения: abri-la."
      },
      {
        examples: [
          { pt: "Eu vejo-o.", ru: "Я его вижу." },
          { pt: "Não o vejo.", ru: "Я его не вижу." },
          { pt: "Vou comprá-lo.", ru: "Я его куплю." },
          { pt: "Eles viram-na.", ru: "Они её видели." },
          { pt: "Quero conhecê-la.", ru: "Хочу с ней познакомиться." }
        ]
      },
      {
        heading: "Местоимение при вспомогательном глаголе + инфинитив",
        text: "При сочетании вспомогательного глагола с инфинитивом местоимение присоединяется к основному глаголу: «O João vai comprá-lo amanhã.» Однако в разговорной речи местоимение часто присоединяется к вспомогательному: «O João vai-o comprar amanhã.»"
      },
      {
        note: "Это одно из главных отличий европейского от бразильского португальского. В Бразилии местоимение почти всегда ставится перед глаголом. В Португалии энклиза (после глагола) — норма."
      }
    ],
    exercises: ex12,
    vocabulary: [
      { pt: "ver", ru: "видеть" },
      { pt: "ouvir", ru: "слышать" },
      { pt: "comprar", ru: "покупать" },
      { pt: "conhecer", ru: "знать (человека)" },
      { pt: "ajudar", ru: "помогать" },
      { pt: "chamar", ru: "звать" },
      { pt: "encontrar", ru: "находить, встречать" },
      { pt: "esperar", ru: "ждать; надеяться" },
      { pt: "levar", ru: "нести, брать с собой" },
      { pt: "convidar", ru: "приглашать" }
    ],
    flashcards: [
      { id: "u12_me", pt: "me", ru: "меня", hint: "1-е лицо ед.ч.", example: "Ele vê-me todos os dias." },
      { id: "u12_te", pt: "te", ru: "тебя", hint: "2-е лицо ед.ч.", example: "Eu vejo-te amanhã." },
      { id: "u12_o", pt: "o", ru: "его", hint: "3-е лицо м.р., -lo после -r/-s/-z", example: "Eu conheço-o." },
      { id: "u12_a", pt: "a", ru: "её", hint: "3-е лицо ж.р., -la после -r/-s/-z", example: "Eu conheço-a bem." },
      { id: "u12_nos", pt: "nos", ru: "нас", hint: "1-е лицо мн.ч.", example: "Eles convidam-nos para a festa." },
      { id: "u12_ver", pt: "ver", ru: "видеть", hint: "eu vejo, tu vês, ele vê", example: "Eu vejo-o todos os dias." },
      { id: "u12_ouvir", pt: "ouvir", ru: "слышать", hint: "eu ouço, tu ouves", example: "Ouves-me?" },
      { id: "u12_comprar", pt: "comprar", ru: "покупать", hint: "правильный глагол -ar", example: "Vou comprá-lo." },
      { id: "u12_adorar", pt: "adorar", ru: "обожать", hint: "глагол", example: "Eu adoro chocolate." },
      { id: "u12_ano_passado", pt: "ano passado", ru: "прошлый год", hint: "выражение времени", example: "Ano passado, visitei Lisboa." },
      { id: "u12_antigamente", pt: "antigamente", ru: "в старину, раньше", hint: "наречие", example: "Antigamente, a vida era diferente." },
      { id: "u12_apenas", pt: "apenas", ru: "только, лишь", hint: "наречие", example: "Tenho apenas cinco minutos." },
      { id: "u12_arrumar", pt: "arrumar", ru: "убирать, наводить порядок", hint: "глагол", example: "Preciso de arrumar o quarto." },
      { id: "u12_atracoes", pt: "as atrações", ru: "достопримечательности", hint: "ж.р., мн.ч.", example: "As atrações turísticas do Porto são famosas." },
      { id: "u12_azulejos", pt: "os azulejos", ru: "изразцы, плитка", hint: "м.р., мн.ч.", example: "Os azulejos portugueses são muito bonitos." },
      { id: "u12_banheira", pt: "a banheira", ru: "ванна", hint: "ж.р.", example: "A banheira está cheia de água quente." },
      { id: "u12_cama", pt: "a cama", ru: "кровать", hint: "ж.р.", example: "A cama é muito confortável." },
      { id: "u12_casa_de_banho", pt: "a casa de banho", ru: "ванная комната", hint: "ж.р.", example: "A casa de banho é grande e espaçosa." },
      { id: "u12_caves", pt: "as caves", ru: "винные погреба", hint: "ж.р., мн.ч.", example: "Visitámos as caves do Porto." },
      { id: "u12_cereja", pt: "a cereja", ru: "вишня, черешня", hint: "ж.р.", example: "A cereja é uma fruta deliciosa." },
      { id: "u12_chatear", pt: "chatear", ru: "раздражать, надоедать", hint: "глагол", example: "Não me quero chatear com isso." },
      { id: "u12_chuveiro", pt: "o chuveiro", ru: "душ", hint: "м.р.", example: "Prefiro tomar banho no chuveiro." },
      { id: "u12_cofre", pt: "o cofre", ru: "сейф", hint: "м.р.", example: "Guardei o passaporte no cofre." },
      { id: "u12_conselhos", pt: "os conselhos", ru: "советы", hint: "м.р., мн.ч.", example: "Os conselhos do médico são importantes." },
      { id: "u12_encontrar", pt: "encontrar", ru: "встречать, находить", hint: "глагол", example: "Vou encontrar os meus amigos no café." },
      { id: "u12_enquanto", pt: "enquanto", ru: "пока, в то время как", hint: "союз", example: "Enquanto estudo, ouço música." },
      { id: "u12_espacoso", pt: "espaçoso", ru: "просторный", hint: "прил., м.р.", example: "O apartamento é muito espaçoso." },
      { id: "u12_exportar", pt: "exportar", ru: "экспортировать", hint: "глагол", example: "Portugal exporta vinho para muitos países." },
      { id: "u12_ficcao_cientifica", pt: "a ficção científica", ru: "научная фантастика", hint: "ж.р.", example: "Gosto de filmes de ficção científica." },
      { id: "u12_frango", pt: "o frango", ru: "курица", hint: "м.р.", example: "O frango assado é o meu prato favorito." },
      { id: "u12_laranja", pt: "a laranja", ru: "апельсин", hint: "ж.р.", example: "Quero um sumo de laranja, por favor." },
      { id: "u12_lavandaria", pt: "a lavandaria", ru: "прачечная", hint: "ж.р.", example: "Levei a roupa à lavandaria." },
      { id: "u12_legendas", pt: "as legendas", ru: "субтитры", hint: "ж.р., мн.ч.", example: "Prefiro filmes com legendas em português." },
      { id: "u12_lencois", pt: "os lençóis", ru: "простыни", hint: "м.р., мн.ч.", example: "Os lençóis brancos estão lavados." },
      { id: "u12_madeira", pt: "a madeira", ru: "дерево (материал)", hint: "ж.р.", example: "A mesa é feita de madeira." },
      { id: "u12_mais_tarde", pt: "mais tarde", ru: "позже", hint: "наречие времени", example: "Falamos mais tarde, está bem?" },
      { id: "u12_maquina_de_lavar", pt: "a máquina de lavar", ru: "стиральная машина", hint: "ж.р.", example: "A máquina de lavar está na lavandaria." },
      { id: "u12_moveis", pt: "os móveis", ru: "мебель", hint: "м.р., мн.ч.", example: "Os móveis da sala são modernos." },
      { id: "u12_preparar", pt: "preparar", ru: "готовить, подготавливать", hint: "глагол", example: "Vou preparar o jantar agora." },
      { id: "u12_proteger", pt: "proteger", ru: "защищать", hint: "глагол", example: "Devemos proteger o meio ambiente." },
      { id: "u12_receber", pt: "receber", ru: "получать, принимать", hint: "глагол", example: "Vou receber os convidados às oito." },
      { id: "u12_salada", pt: "a salada", ru: "салат", hint: "ж.р.", example: "Quero uma salada de tomate, por favor." },
      { id: "u12_sanita", pt: "a sanita", ru: "унитаз", hint: "ж.р.", example: "A sanita é branca e nova." },
      { id: "u12_solucoes", pt: "as soluções", ru: "решения", hint: "ж.р., мн.ч.", example: "Precisamos de encontrar soluções para este problema." },
      { id: "u12_sopa", pt: "a sopa", ru: "суп", hint: "ж.р.", example: "A sopa de legumes está quente." },
      { id: "u12_tarte", pt: "a tarte", ru: "пирог, тарт", hint: "ж.р.", example: "A tarte de maçã é deliciosa." },
      { id: "u12_terminar", pt: "terminar", ru: "заканчивать", hint: "глагол", example: "Preciso de terminar este trabalho hoje." },
      { id: "u12_tomar", pt: "tomar", ru: "принимать; пить", hint: "глагол", example: "Vou tomar um café." },
      { id: "u12_touradas", pt: "as touradas", ru: "бои быков", hint: "ж.р., мн.ч.", example: "As touradas são uma tradição controversa." },
      { id: "u12_uvas", pt: "as uvas", ru: "виноград", hint: "ж.р., мн.ч.", example: "As uvas do Douro são excelentes." },
      { id: "u12_vinho", pt: "o vinho", ru: "вино", hint: "м.р.", example: "O vinho do Porto é mundialmente famoso." },
      { id: "u12_visita", pt: "a visita", ru: "визит, посещение", hint: "ж.р.", example: "A visita ao museu foi interessante." },
    ]
  },

  // ===================== UNIT 13: Indirect Object Pronouns =====================
  {
    id: 13,
    title: "Местоимения косвенного дополнения",
    description: "Формы и употребление местоимений косвенного дополнения (pronomes de complemento indireto)",
    theory: [
      {
        heading: "Формы местоимений косвенного дополнения",
        text: "Местоимения косвенного дополнения отвечают на вопрос «кому?» и заменяют существительное с предлогом «a»."
      },
      {
        table: {
          headers: ["Лицо", "Местоимение", "Перевод"],
          rows: [
            ["1-е ед.ч.", "me", "мне"],
            ["2-е ед.ч.", "te", "тебе"],
            ["3-е ед.ч.", "lhe", "ему / ей / Вам"],
            ["1-е мн.ч.", "nos", "нам"],
            ["3-е мн.ч.", "lhes", "им / вам"]
          ]
        }
      },
      {
        heading: "Позиция в предложении",
        text: "Правила позиции те же, что и для местоимений прямого дополнения: энклиза (после глагола) — по умолчанию, проклиза (перед) — после отрицания, вопросительных слов, союзов."
      },
      {
        heading: "Энклиза с косвенными местоимениями",
        text: "В утвердительных предложениях без слов-магнитов местоимение стоит после глагола через дефис (энклиза). Слова-магниты — это отрицания, вопросительные слова, союзы и наречия, которые перетягивают местоимение перед глагол."
      },
      {
        examples: [
          { pt: "A Filipa dá-me muitas canetas.", ru: "Филипа даёт мне много ручек." },
          { pt: "(Eles) dão-te muito pouco carinho.", ru: "Они дают тебе очень мало ласки." },
          { pt: "O Pedro precisa de orientação e o pai dá-lhe bons conselhos.", ru: "Педру нуждается в наставлении, и отец даёт ему хорошие советы." },
          { pt: "A minha tia vende-nos o carro dela muito barato.", ru: "Моя тётя продаёт нам свою машину очень дёшево." },
          { pt: "Eles gostam de coisas doces e tu ofereces-lhes sempre chocolates.", ru: "Они любят сладкое, и ты всегда даришь им шоколад." }
        ]
      },
      {
        heading: "Проклиза с косвенными местоимениями",
        text: "После отрицания, вопросительных слов, союзов и наречий местоимение перемещается перед глагол (проклиза)."
      },
      {
        examples: [
          { pt: "A Filipa nunca me dá canetas.", ru: "Филипа никогда не даёт мне ручки. (проклиза после «nunca»)" },
          { pt: "Quem te compra o material escolar?", ru: "Кто тебе покупает школьные принадлежности? (проклиза после вопросительного слова)" },
          { pt: "Já que lhes levas artigos nacionais, leva pastéis de nata.", ru: "Раз уж ты везёшь им национальные товары, вези паштейш де ната. (проклиза после союза)" }
        ]
      },
      {
        heading: "Сочетание прямого и косвенного дополнений",
        text: "Когда в предложении есть и прямое, и косвенное местоимение, они сливаются."
      },
      {
        table: {
          headers: ["", "o", "a", "os", "as"],
          rows: [
            ["me +", "mo", "ma", "mos", "mas"],
            ["te +", "to", "ta", "tos", "tas"],
            ["lhe +", "lho", "lha", "lhos", "lhas"],
            ["nos +", "no-lo", "no-la", "no-los", "no-las"],
            ["lhes +", "lho", "lha", "lhos", "lhas"]
          ]
        }
      },
      {
        heading: "Правило контракции с «nos»",
        text: "При сочетании «nos» с прямыми местоимениями o/a/os/as буква «s» отпадает, а прямое местоимение принимает форму -lo/-la/-los/-las (фонологическое правило). Результат: no-lo, no-la, no-los, no-las."
      },
      {
        examples: [
          { pt: "Os nossos pais dão-nos prendas, mas dão-no-las só no Natal.", ru: "Наши родители дарят нам подарки, но дарят нам их только на Рождество." },
          { pt: "A professora diz-nos o que sai no teste, mas diz-no-lo indiretamente.", ru: "Учительница говорит нам, что будет на тесте, но говорит нам это косвенно." },
          { pt: "O pai empresta-nos o carro, mas nunca no-lo empresta à noite.", ru: "Отец одалживает нам машину, но никогда не одалживает нам её ночью. (проклиза)" },
          { pt: "A tia compra-nos muita roupa, mas só no-la compra na feira.", ru: "Тётя покупает нам много одежды, но покупает нам её только на ярмарке. (проклиза)" }
        ]
      },
      {
        note: "При проклизе контрактные формы также перемещаются перед глагол: nunca no-lo empresta, só no-la compra и т.д. Слова-магниты (отрицания, наречия, союзы) действуют на контрактные формы так же, как на одиночные местоимения."
      },
      {
        examples: [
          { pt: "Eu dou-lhe o livro.", ru: "Я даю ему/ей книгу." },
          { pt: "Não lhe digo nada.", ru: "Я ему/ей ничего не скажу." },
          { pt: "Ele dá-mo. (= dá-me + o)", ru: "Он мне это даёт." },
          { pt: "Eu telefono-lhe todos os dias.", ru: "Я звоню ему/ей каждый день." }
        ]
      },
      {
        note: "Глагол «telefonar» в португальском требует косвенного дополнения (telefonar a alguém), поэтому используется «lhe», а не «o/a». Также: «pedir a» (просить у), «dizer a» (говорить кому), «dar a» (давать кому)."
      }
    ],
    lessons: [
      { title: "Часть 1: Формы и позиция", theoryRange: [0, 7] },
      { title: "Часть 2: Контракция местоимений", theoryRange: [7, 14] }
    ],
    exercises: ex13,
    vocabulary: [
      { pt: "telefonar (a)", ru: "звонить (кому)" },
      { pt: "pedir (a)", ru: "просить (у кого)" },
      { pt: "dizer (a)", ru: "говорить (кому)" },
      { pt: "dar (a)", ru: "давать (кому)" },
      { pt: "enviar (a)", ru: "отправлять (кому)" },
      { pt: "escrever (a)", ru: "писать (кому)" },
      { pt: "perguntar (a)", ru: "спрашивать (у кого)" },
      { pt: "mostrar (a)", ru: "показывать (кому)" },
      { pt: "responder (a)", ru: "отвечать (кому)" },
      { pt: "oferecer (a)", ru: "дарить, предлагать (кому)" }
    ],
    flashcards: [
      { id: "u13_me_ind", pt: "me", ru: "мне", hint: "косв. допол. 1-е лицо", example: "Ela diz-me a verdade." },
      { id: "u13_te_ind", pt: "te", ru: "тебе", hint: "косв. допол. 2-е лицо", example: "Eu dou-te o presente." },
      { id: "u13_lhe", pt: "lhe", ru: "ему / ей / Вам", hint: "косв. допол. 3-е лицо ед.ч.", example: "Eu telefono-lhe." },
      { id: "u13_lhes", pt: "lhes", ru: "им / вам", hint: "косв. допол. 3-е лицо мн.ч.", example: "Eu escrevo-lhes." },
      { id: "u13_telefonar", pt: "telefonar a", ru: "звонить (кому)", hint: "требует косвенного дополнения", example: "Telefono-lhe todos os dias." },
      { id: "u13_pedir", pt: "pedir a", ru: "просить (у кого)", hint: "eu peço, tu pedes", example: "Peço-lhe um favor." },
      { id: "u13_enviar", pt: "enviar a", ru: "отправлять (кому)", hint: "правильный глагол", example: "Envio-lhe uma mensagem." },
      { id: "u13_oferecer", pt: "oferecer a", ru: "дарить (кому)", hint: "eu ofereço", example: "Ofereço-te um café." },
      { id: "u13_adormecer", pt: "adormecer", ru: "засыпать", hint: "глагол", example: "O bebé adormeceu rapidamente." },
      { id: "u13_afilhada", pt: "a afilhada", ru: "крестница", hint: "ж.р.", example: "A minha afilhada faz anos amanhã." },
      { id: "u13_amante", pt: "o/a amante", ru: "любитель; любовник", hint: "м.р./ж.р.", example: "Ele é um amante de música clássica." },
      { id: "u13_antes_de", pt: "antes de", ru: "до, перед", hint: "предлог", example: "Antes de sair, fecha a porta." },
      { id: "u13_apresentacao", pt: "a apresentação", ru: "презентация", hint: "ж.р.", example: "A apresentação foi muito interessante." },
      { id: "u13_assinar", pt: "assinar", ru: "подписывать", hint: "глагол", example: "Preciso de assinar este documento." },
      { id: "u13_aumento", pt: "o aumento", ru: "повышение, прибавка", hint: "м.р.", example: "Ele recebeu um aumento de salário." },
      { id: "u13_autor", pt: "o autor", ru: "автор", hint: "м.р.", example: "O autor deste livro é português." },
      { id: "u13_boleia", pt: "a boleia", ru: "подвезти (попутка)", hint: "ж.р.", example: "Podes dar-me uma boleia até ao centro?" },
      { id: "u13_colecao", pt: "a coleção", ru: "коллекция", hint: "ж.р.", example: "Ela tem uma coleção de selos." },
      { id: "u13_comida", pt: "a comida", ru: "еда", hint: "ж.р.", example: "A comida portuguesa é deliciosa." },
      { id: "u13_conquistas", pt: "as conquistas", ru: "завоевания", hint: "ж.р., мн.ч.", example: "As conquistas portuguesas mudaram o mundo." },
      { id: "u13_considerar", pt: "considerar", ru: "считать, полагать", hint: "глагол", example: "Considero este livro muito importante." },
      { id: "u13_desafios", pt: "os desafios", ru: "вызовы, задачи", hint: "м.р., мн.ч.", example: "A vida traz muitos desafios." },
      { id: "u13_desconto", pt: "o desconto", ru: "скидка", hint: "м.р.", example: "Este produto tem um desconto de vinte por cento." },
      { id: "u13_diretor", pt: "o diretor", ru: "директор", hint: "м.р.", example: "O diretor da empresa é muito competente." },
      { id: "u13_encomenda", pt: "a encomenda", ru: "заказ, посылка", hint: "ж.р.", example: "A encomenda chegou ontem." },
      { id: "u13_fotos", pt: "as fotos", ru: "фотографии", hint: "ж.р., мн.ч.", example: "As fotos ficaram muito bonitas." },
      { id: "u13_funcionarios", pt: "os funcionários", ru: "сотрудники", hint: "м.р., мн.ч.", example: "Os funcionários da empresa são simpáticos." },
      { id: "u13_lenda", pt: "a lenda", ru: "легенда", hint: "ж.р.", example: "Esta é uma lenda muito antiga." },
      { id: "u13_naufragio", pt: "o naufrágio", ru: "кораблекрушение", hint: "м.р.", example: "O naufrágio aconteceu perto da costa." },
      { id: "u13_pensao", pt: "a pensão", ru: "пенсия; пансион", hint: "ж.р.", example: "O meu avô recebe a pensão todos os meses." },
      { id: "u13_poeta", pt: "o/a poeta", ru: "поэт", hint: "м.р./ж.р.", example: "Camões é o maior poeta português." },
      { id: "u13_publicacao", pt: "a publicação", ru: "публикация", hint: "ж.р.", example: "A publicação do livro foi em 1572." },
      { id: "u13_sempre_que", pt: "sempre que", ru: "всякий раз когда", hint: "союз", example: "Sempre que posso, vou à praia." },
      { id: "u13_supermercado", pt: "o supermercado", ru: "супермаркет", hint: "м.р.", example: "Vou ao supermercado comprar fruta." },
      { id: "u13_todas_as_manhas", pt: "todas as manhãs", ru: "каждое утро", hint: "выражение времени", example: "Todas as manhãs, tomo café com leite." },
      { id: "u13_todos_os_meses", pt: "todos os meses", ru: "каждый месяц", hint: "выражение времени", example: "Pago a renda todos os meses." },
      { id: "u13_vespera_de_natal", pt: "a véspera de Natal", ru: "Сочельник", hint: "ж.р.", example: "Na véspera de Natal, jantamos em família." },
    ]
  },

  // ===================== UNIT 14: Reflexive Pronouns and Verbs =====================
  {
    id: 14,
    title: "Возвратные местоимения и глаголы",
    description: "Возвратные глаголы и местоимения в европейском португальском",
    theory: [
      {
        heading: "Возвратные местоимения (Pronomes reflexos)",
        text: "Возвратные местоимения указывают, что действие направлено на самого субъекта — местоимение выступает прямым дополнением, ссылающимся на то же лицо, что и подлежащее. В португальском языке возвратные глаголы используются значительно шире, чем в большинстве других языков. В словаре возвратные глаголы обозначаются с «-se» на конце."
      },
      {
        table: {
          headers: ["Лицо", "Местоимение"],
          rows: [
            ["eu", "me"],
            ["tu", "te"],
            ["ele/ela/você", "se"],
            ["nós", "nos"],
            ["eles/elas/vocês", "se"]
          ]
        }
      },
      {
        heading: "Спряжение возвратного глагола levantar-se (вставать)",
        text: "В утвердительных предложениях возвратное местоимение стоит после глагола (энклиза). При отрицании и после слов-магнитов (вопросительные слова, союзы, наречия) — перед глаголом (проклиза)."
      },
      {
        table: {
          headers: ["Утвердительное", "Отрицательное"],
          rows: [
            ["Eu levanto-me", "Eu não me levanto"],
            ["Tu levantas-te", "Tu não te levantas"],
            ["Ele levanta-se", "Ele não se levanta"],
            ["Nós levantamo-nos", "Nós não nos levantamos"],
            ["Eles levantam-se", "Eles não se levantam"]
          ]
        }
      },
      {
        heading: "Распространённые возвратные глаголы",
        text: "Многие повседневные действия выражаются возвратными глаголами."
      },
      {
        examples: [
          { pt: "Eu levanto-me às sete horas.", ru: "Я встаю в семь часов." },
          { pt: "Ela chama-se Maria.", ru: "Её зовут Мария." },
          { pt: "Nós divertimo-nos muito.", ru: "Мы очень веселимся." },
          { pt: "Eles sentam-se à mesa.", ru: "Они садятся за стол." }
        ]
      },
      {
        table: {
          headers: ["Глагол", "Значение"],
          rows: [
            ["aborrecer-se", "скучать"],
            ["achar-se", "считать себя"],
            ["apaixonar-se", "влюбляться"],
            ["arrepender-se", "сожалеть, раскаиваться"],
            ["barbear-se", "бриться"],
            ["chamar-se", "зваться, называться"],
            ["chatear-se", "злиться, обижаться"],
            ["comprometer-se", "брать на себя обязательство"],
            ["culpar-se", "винить себя"],
            ["deitar-se", "ложиться"],
            ["desculpar-se", "извиняться"],
            ["despedir-se", "прощаться"],
            ["despir-se", "раздеваться"],
            ["encantar-se", "очаровываться"],
            ["enganar-se", "ошибаться"],
            ["esquecer-se", "забывать"],
            ["interrogar-se", "задаваться вопросом"],
            ["irritar-se", "раздражаться"],
            ["lavar-se", "мыться, умываться"],
            ["lembrar-se", "вспоминать, помнить"],
            ["levantar-se", "вставать"],
            ["magoar-se", "пораниться"],
            ["ofender-se", "обижаться"],
            ["pentear-se", "причёсываться"],
            ["preparar-se", "готовиться"],
            ["repetir-se", "повторяться"],
            ["rir-se", "смеяться"],
            ["secar-se", "вытираться"],
            ["sentar-se", "садиться"],
            ["sentir-se", "чувствовать себя"],
            ["ver-se", "видеть себя"],
            ["vestir-se", "одеваться"],
            ["voltar-se", "оборачиваться"],
            ["zangar-se", "злиться"]
          ]
        }
      },
      {
        examples: [
          { pt: "Eu sento-me poucas vezes durante o dia.", ru: "Я редко сажусь в течение дня." },
          { pt: "O Pedro sente-se muito cansado hoje.", ru: "Педру чувствует себя очень уставшим сегодня." },
          { pt: "Nós deitamo-nos muito tarde à sexta-feira.", ru: "Мы ложимся очень поздно по пятницам." },
          { pt: "Os idosos lembram-se melhor dos tempos antigos.", ru: "Пожилые люди лучше помнят старые времена." },
          { pt: "Vocês esquecem-se de tudo!", ru: "Вы всё забываете!" },
          { pt: "Tu levantas-te às sete e meia todas as manhãs.", ru: "Ты встаёшь в полвосьмого каждое утро." },
          { pt: "(Você) chama-se Joana?", ru: "Вас зовут Жоана?" },
          { pt: "As gémeas vestem-se com roupa igual.", ru: "Близняшки одеваются одинаково." }
        ]
      },
      {
        note: "Обратите внимание: в форме «nós» буква -s глагола отпадает перед -nos: levantamos + nos → levantamo-nos, divertimos + nos → divertimo-nos."
      },
      {
        heading: "Взаимные действия (Ações recíprocas)",
        text: "Возвратные глаголы также используются для описания взаимных действий, когда два или более субъекта действуют друг на друга. Для уточнения можно добавить um ao outro (друг другу), uma à outra или uns aos outros."
      },
      {
        examples: [
          { pt: "Eles amam-se.", ru: "Они любят друг друга." },
          { pt: "Nós vemo-nos todos os dias.", ru: "Мы видимся каждый день." },
          { pt: "Eles cumprimentam-se um ao outro.", ru: "Они здороваются друг с другом." },
          { pt: "As irmãs telefonam-se uma à outra todas as noites.", ru: "Сёстры звонят друг другу каждый вечер." }
        ]
      },
      {
        heading: "Позиция возвратного местоимения: подробные правила",
        text: "По умолчанию возвратное местоимение ставится после глагола через дефис (энклизис). Но в определённых случаях оно переходит перед глагол (проклизис): после отрицаний (não, nunca, ninguém), после вопросительных слов (como, onde, quando), после союзов (que, porque, quando, se), после наречий (já, ainda, sempre, também), после неопределённых местоимений (nenhum, tudo, alguém)."
      },
      {
        examples: [
          { pt: "Ela nunca se lembra do João.", ru: "Она никогда не вспоминает о Жуау." },
          { pt: "Como te chamas?", ru: "Как тебя зовут?" },
          { pt: "A que horas te levantas?", ru: "Во сколько ты встаёшь?" },
          { pt: "Nenhum de vocês se levanta cedo ao domingo.", ru: "Никто из вас не встаёт рано в воскресенье." }
        ]
      },
      {
        note: "Возвратное «se» в 3-м лице может обозначать неопределённый субъект (аналог русского «-ся»): «Vende-se» (Продаётся), «Vendem-se carros» (Продаются машины), «No verão vai-se à praia» (Летом ходят на пляж). Важно: в конструкции «Vendem-se carros» слово «carros» является подлежащим, поэтому глагол стоит во множественном числе. В разговорной речи допускается и единственное число: «Vende-se carros», но грамматически правильная форма — множественная."
      }
    ],
    lessons: [
      { title: "Часть 1: Возвратные местоимения и глаголы", theoryRange: [0, 9] },
      { title: "Часть 2: Взаимные действия и позиция местоимения", theoryRange: [9, 14] }
    ],
    exercises: ex14,
    vocabulary: [
      { pt: "levantar-se", ru: "вставать" },
      { pt: "deitar-se", ru: "ложиться" },
      { pt: "lavar-se", ru: "мыться, умываться" },
      { pt: "vestir-se", ru: "одеваться" },
      { pt: "sentar-se", ru: "садиться" },
      { pt: "chamar-se", ru: "зваться, называться" },
      { pt: "divertir-se", ru: "развлекаться, веселиться" },
      { pt: "despir-se", ru: "раздеваться" },
      { pt: "pentear-se", ru: "причёсываться" },
      { pt: "barbear-se", ru: "бриться" }
    ],
    flashcards: [
      { id: "u14_levantarse", pt: "levantar-se", ru: "вставать", hint: "eu levanto-me", example: "Levanto-me cedo." },
      { id: "u14_deitarse", pt: "deitar-se", ru: "ложиться", hint: "eu deito-me", example: "Deito-me às onze." },
      { id: "u14_lavarse", pt: "lavar-se", ru: "мыться", hint: "eu lavo-me", example: "Lavo-me de manhã." },
      { id: "u14_vestirse", pt: "vestir-se", ru: "одеваться", hint: "eu visto-me", example: "Visto-me depressa." },
      { id: "u14_sentarse", pt: "sentar-se", ru: "садиться", hint: "eu sento-me", example: "Sento-me no sofá." },
      { id: "u14_chamarse", pt: "chamar-se", ru: "зваться", hint: "eu chamo-me", example: "Como te chamas?" },
      { id: "u14_divertirse", pt: "divertir-se", ru: "веселиться", hint: "eu divirto-me", example: "Divertimo-nos na festa." },
      { id: "u14_pentearse", pt: "pentear-se", ru: "причёсываться", hint: "eu penteio-me", example: "Ela penteia-se ao espelho." },
      { id: "u14_adultos", pt: "os adultos", ru: "взрослые", hint: "м.р., мн.ч.", example: "Os adultos e as crianças divertem-se juntos." },
      { id: "u14_algumas_vezes", pt: "algumas vezes", ru: "иногда", hint: "наречие частоты", example: "Algumas vezes, vou ao teatro." },
      { id: "u14_audiencias", pt: "as audiências", ru: "аудитории, публика", hint: "ж.р., мн.ч.", example: "As audiências do fado são cada vez maiores." },
      { id: "u14_cada_vez_que", pt: "cada vez que", ru: "каждый раз когда", hint: "союз", example: "Cada vez que ouço fado, emociono-me." },
      { id: "u14_colegas", pt: "os/as colegas", ru: "коллеги", hint: "м.р./ж.р., мн.ч.", example: "Os meus colegas são muito simpáticos." },
      { id: "u14_contraste", pt: "o contraste", ru: "контраст", hint: "м.р.", example: "O contraste entre o antigo e o moderno é interessante." },
      { id: "u14_cordas", pt: "as cordas", ru: "струны", hint: "ж.р., мн.ч.", example: "A guitarra tem doze cordas." },
      { id: "u14_espelho", pt: "o espelho", ru: "зеркало", hint: "м.р.", example: "Olho-me ao espelho todas as manhãs." },
      { id: "u14_fadista", pt: "o/a fadista", ru: "фадиста (певец фаду)", hint: "м.р./ж.р.", example: "Amália Rodrigues foi a maior fadista de Portugal." },
      { id: "u14_futuro", pt: "o futuro", ru: "будущее", hint: "м.р.", example: "O futuro do fado parece promissor." },
      { id: "u14_gatinhos", pt: "os gatinhos", ru: "котята", hint: "м.р., мн.ч.", example: "Os gatinhos brincam o dia todo." },
      { id: "u14_geracao", pt: "a geração", ru: "поколение", hint: "ж.р.", example: "A nova geração de fadistas é muito talentosa." },
      { id: "u14_guitarra", pt: "a guitarra", ru: "гитара", hint: "ж.р.", example: "A guitarra portuguesa tem um som único." },
      { id: "u14_modernizar", pt: "modernizar", ru: "модернизировать", hint: "глагол", example: "É possível modernizar o fado sem perder a essência." },
      { id: "u14_nacao", pt: "a nação", ru: "нация", hint: "ж.р.", example: "Portugal é uma nação com muita história." },
      { id: "u14_negar", pt: "negar", ru: "отрицать, отказывать", hint: "глагол", example: "Não se pode negar a importância do fado." },
      { id: "u14_noticias", pt: "as notícias", ru: "новости", hint: "��.р., мн.ч.", example: "As notícias de hoje são preocupantes." },
      { id: "u14_orgulharse_de", pt: "orgulhar-se de", ru: "гордиться чем-л.", hint: "возвратный глагол", example: "Os portugueses orgulham-se do fado." },
      { id: "u14_parecerse_com", pt: "parecer-se com", ru: "быть похожим на", hint: "возвратный глагол", example: "Ela parece-se com a mãe." },
      { id: "u14_projetos", pt: "os projetos", ru: "проекты", hint: "м.р., мн.ч.", example: "Os projetos musicais são inovadores." },
      { id: "u14_som", pt: "o som", ru: "звук", hint: "м.р.", example: "O som da guitarra portuguesa é melancólico." },
      { id: "u14_tradicoes_academicas", pt: "as tradições académicas", ru: "академические традиции", hint: "ж.р., мн.ч.", example: "As tradições académicas de Coimbra são muito antigas." },
      { id: "u14_traje_academico", pt: "o traje académico", ru: "академический костюм", hint: "м.р.", example: "Os estudantes vestem o traje académico nas festas." },
      { id: "u14_xaile", pt: "o xaile", ru: "шаль", hint: "м.р.", example: "A fadista usa um xaile negro." },
    ]
  },

  // ===================== UNIT 15: Possessive Pronouns and Adjectives =====================
  {
    id: 15,
    title: "Притяжательные местоимения и прилагательные",
    description: "Формы и употребление притяжательных местоимений в европейском португальском",
    theory: [
      {
        heading: "Притяжательные формы",
        text: "В португальском притяжательные формы согласуются в роде и числе с объектом владения (а не с владельцем). В европейском португальском перед притяжательным ставится определённый артикль."
      },
      {
        table: {
          headers: ["Владелец", "Муж. ед.ч.", "Жен. ед.ч.", "Муж. мн.ч.", "Жен. мн.ч."],
          rows: [
            ["eu", "o meu", "a minha", "os meus", "as minhas"],
            ["tu", "o teu", "a tua", "os teus", "as tuas"],
            ["ele/ela/você", "o seu", "a sua", "os seus", "as suas"],
            ["nós", "o nosso", "a nossa", "os nossos", "as nossas"],
            ["vós/vocês", "o vosso", "a vossa", "os vossos", "as vossas"],
            ["eles/elas/vocês", "o seu", "a sua", "os seus", "as suas"]
          ]
        }
      },
      {
        heading: "Vosso/vossa с местоимением vocês",
        text: "Хотя местоимение «vós» практически вышло из употребления (заменено на «vocês»), притяжательная форма «vosso/vossa» по-прежнему используется с «vocês»."
      },
      {
        examples: [
          { pt: "O vosso apartamento é muito grande.", ru: "Ваша квартира очень большая." },
          { pt: "Este apartamento é vosso?", ru: "Эта квартира — ваша?" }
        ]
      },
      {
        heading: "Уточнение «seu/sua»",
        text: "Поскольку «seu/sua» может означать «его», «её», «Ваш» или «их», для уточнения используется конструкция с предлогом «de» + личное местоимение: de + ele = dele, de + ela = dela, de + eles = deles, de + elas = delas. Эта конструкция ставится ПОСЛЕ существительного и согласуется в роде и числе с владельцем (а не с объектом владения)."
      },
      {
        table: {
          headers: ["Конструкция", "Значение"],
          rows: [
            ["o livro dele", "его книга"],
            ["o livro dela", "её книга"],
            ["o livro deles", "их книга (м.р.)"],
            ["o livro delas", "их книга (ж.р.)"]
          ]
        }
      },
      {
        examples: [
          { pt: "O meu carro é azul.", ru: "Моя машина — синяя." },
          { pt: "A tua casa é bonita.", ru: "Твой дом — красивый." },
          { pt: "Os nossos filhos estudam em Coimbra.", ru: "Наши дети учатся в Коимбре." },
          { pt: "O livro dela está na mesa.", ru: "Её книга на столе." }
        ]
      },
      {
        note: "В европейском португальском артикль перед притяжательным обязателен: «o meu livro» (моя книга), а не просто «meu livro» (как в бразильском). Исключение — обращения: «Meu Deus!» (Боже мой!). Притяжательное может стоять после глагола (без артикля): «O automóvel velho é meu.» (Старая машина — моя.) / «Estas flores são minhas.» (Эти цветы — мои.)"
      },
      {
        heading: "Опускание притяжательного местоимения",
        text: "Притяжательное местоимение обычно опускается (вместо него используется определённый артикль), когда очевидно, кому принадлежит предмет. Это особенно характерно для частей тела, одежды и обуви."
      },
      {
        examples: [
          { pt: "Vou cortar o cabelo.", ru: "Я пойду подстричь волосы. (= мои волосы)" },
          { pt: "Doem-me as costas.", ru: "У меня болит спина." },
          { pt: "Vou calçar os sapatos e já saio.", ru: "Я надену ботинки и выхожу." },
          { pt: "Ela não diz nada à irmã.", ru: "Она ничего не говорит сестре. (= своей сестре)" }
        ]
      }
    ],
    exercises: ex15,
    vocabulary: [
      { pt: "meu / minha", ru: "мой / моя" },
      { pt: "teu / tua", ru: "твой / твоя" },
      { pt: "seu / sua", ru: "его / её / Ваш" },
      { pt: "nosso / nossa", ru: "наш / наша" },
      { pt: "dele / dela", ru: "его / её (уточн.)" },
      { pt: "deles / delas", ru: "их (м.р. / ж.р.)" },
      { pt: "a família", ru: "семья" },
      { pt: "os pais", ru: "родители" },
      { pt: "o irmão", ru: "брат" },
      { pt: "a irmã", ru: "сестра" }
    ],
    flashcards: [
      { id: "u15_meu", pt: "o meu / a minha", ru: "мой / моя", hint: "согласуется с объектом", example: "O meu carro é novo." },
      { id: "u15_teu", pt: "o teu / a tua", ru: "твой / твоя", hint: "неформальное обращение", example: "A tua casa é bonita." },
      { id: "u15_seu", pt: "o seu / a sua", ru: "его/её/Ваш", hint: "может быть двусмысленным", example: "O seu livro está aqui." },
      { id: "u15_nosso", pt: "o nosso / a nossa", ru: "наш / наша", hint: "мн.ч.: os nossos / as nossas", example: "A nossa escola é grande." },
      { id: "u15_dele", pt: "dele / dela", ru: "его / её (уточн.)", hint: "ставится после существительного", example: "O carro dele é vermelho." },
      { id: "u15_familia", pt: "a família", ru: "семья", hint: "женский род", example: "A minha família é grande." },
      { id: "u15_irmao", pt: "o irmão", ru: "брат", hint: "мн.ч.: os irmãos", example: "O meu irmão mora no Porto." },
      { id: "u15_irma", pt: "a irmã", ru: "сестра", hint: "мн.ч.: as irmãs", example: "A tua irmã é simpática." },
      { id: "u15_adeusinho", pt: "adeusinho", ru: "пока-пока", hint: "уменьш. от adeus", example: "Adeusinho, até amanhã!" },
      { id: "u15_administracao", pt: "a administração", ru: "администрация, управление", hint: "ж.р.", example: "A administração da empresa mudou recentemente." },
      { id: "u15_ar", pt: "o ar", ru: "воздух", hint: "м.р.", example: "O ar da montanha é muito puro." },
      { id: "u15_atual", pt: "atual", ru: "нынешний, текущий", hint: "прил., неизм.", example: "A situação atual é complicada." },
      { id: "u15_avo_materna", pt: "a avó materna", ru: "бабушка по матери", hint: "ж.р.", example: "A minha avó materna vive no Porto." },
      { id: "u15_avo_paterno", pt: "o avô paterno", ru: "дедушка по отцу", hint: "м.р.", example: "O meu avô paterno era pescador." },
      { id: "u15_cartao", pt: "o cartão", ru: "визитка; карточка", hint: "м.р.", example: "Aqui tem o meu cartão de visita." },
      { id: "u15_casado", pt: "casado", ru: "женатый, замужняя", hint: "прил., м.р.", example: "O meu irmão é casado e tem dois filhos." },
      { id: "u15_conceder", pt: "conceder", ru: "предоставлять", hint: "глагол", example: "O banco pode conceder um empréstimo." },
      { id: "u15_convite", pt: "o convite", ru: "приглашение", hint: "м.р.", example: "Recebi um convite para a festa." },
      { id: "u15_desenvolvimento", pt: "o desenvolvimento", ru: "развитие", hint: "м.р.", example: "O desenvolvimento económico é importante." },
      { id: "u15_economica", pt: "económica", ru: "экономическая", hint: "прил., ж.р.", example: "A crise económica afetou muitos países." },
      { id: "u15_endereco", pt: "o endereço", ru: "адрес", hint: "м.р.", example: "Qual é o seu endereço de email?" },
      { id: "u15_escolha", pt: "a escolha", ru: "выбор", hint: "ж.р.", example: "A escolha é sua." },
      { id: "u15_gramatica", pt: "a gramática", ru: "грамматика", hint: "ж.р.", example: "A gramática portuguesa não é fácil." },
      { id: "u15_incendios", pt: "os incêndios", ru: "пожары", hint: "м.р., мн.ч.", example: "Os incêndios florestais são um problema grave." },
      { id: "u15_maremoto", pt: "o maremoto", ru: "цунами", hint: "м.р.", example: "O maremoto de 1755 destruiu Lisboa." },
      { id: "u15_morada", pt: "a morada", ru: "адрес (проживания)", hint: "ж.р.", example: "A minha morada é na Rua Augusta." },
      { id: "u15_otimo", pt: "ótimo", ru: "отличный", hint: "прил., м.р.", example: "O tempo hoje está ótimo!" },
      { id: "u15_parabens", pt: "parabéns", ru: "поздравления", hint: "неизменяемое", example: "Parabéns pelo seu aniversário!" },
      { id: "u15_portanto", pt: "portanto", ru: "следовательно, поэтому", hint: "союз", example: "Está a chover, portanto levo o guarda-chuva." },
      { id: "u15_porto", pt: "o porto", ru: "порт, гавань", hint: "м.р.", example: "O porto de Lisboa é muito movimentado." },
      { id: "u15_realmente", pt: "realmente", ru: "действительно", hint: "наречие", example: "Este livro é realmente interessante." },
      { id: "u15_reino", pt: "o reino", ru: "королевство", hint: "м.р.", example: "O reino de Portugal foi fundado em 1139." },
      { id: "u15_sal", pt: "o sal", ru: "соль", hint: "м.р.", example: "Pode passar-me o sal, por favor?" },
      { id: "u15_terramoto", pt: "o terramoto", ru: "землетрясение", hint: "м.р.", example: "O terramoto de 1755 destruiu grande parte de Lisboa." },
    ]
  },

  // ===================== UNIT 16: Present Perfect Tense =====================
  {
    id: 16,
    title: "Настоящее совершённое время",
    description: "Pretérito Perfeito Composto — повторяющееся действие от прошлого до настоящего",
    theory: [
      {
        heading: "Образование Pretérito Perfeito Composto",
        text: "Это время образуется с помощью вспомогательного глагола «ter» в настоящем времени + причастие прошедшего времени (particípio passado). Важно: в европейском португальском это время обозначает действие, которое началось в прошлом и повторяется/продолжается до настоящего момента."
      },
      {
        table: {
          headers: ["Лицо", "ter + particípio"],
          rows: [
            ["eu", "tenho falado"],
            ["tu", "tens falado"],
            ["ele/ela/você", "tem falado"],
            ["nós", "temos falado"],
            ["eles/elas/vocês", "têm falado"]
          ]
        }
      },
      {
        heading: "Причастие прошедшего времени",
        text: "Правильные причастия образуются от основы глагола с добавлением окончания."
      },
      {
        table: {
          headers: ["Спряжение", "Окончание", "Пример"],
          rows: [
            ["-ar", "-ado", "falar → falado"],
            ["-er", "-ido", "comer → comido"],
            ["-ir", "-ido", "partir → partido"]
          ]
        }
      },
      {
        heading: "Неправильные причастия",
        text: "Некоторые глаголы имеют неправильные причастия."
      },
      {
        table: {
          headers: ["Глагол", "Причастие", "Перевод"],
          rows: [
            ["fazer", "feito", "сделанный"],
            ["dizer", "dito", "сказанный"],
            ["ver", "visto", "увиденный"],
            ["escrever", "escrito", "написанный"],
            ["abrir", "aberto", "открытый"],
            ["cobrir", "coberto", "покрытый"],
            ["pôr", "posto", "положенный"],
            ["vir", "vindo", "пришедший"]
          ]
        }
      },
      {
        examples: [
          { pt: "Tenho estudado muito ultimamente.", ru: "В последнее время я много учусь (и продолжаю)." },
          { pt: "Ela tem trabalhado em casa.", ru: "Она работает дома (уже какое-то время)." },
          { pt: "Temos feito progressos.", ru: "Мы делаем успехи (на протяжении какого-то времени)." },
          { pt: "Eles têm vindo cá todos os dias.", ru: "Они приходят сюда каждый день (уже какое-то время)." }
        ]
      },
      {
        heading: "Три случая употребления Pretérito Perfeito Composto",
        text: "Это время используется в трёх основных ситуациях."
      },
      {
        heading: "1. Длительное действие от прошлого к настоящему",
        text: "Действие, которое началось в прошлом, развивалось в течение какого-то времени и может продолжиться в будущем."
      },
      {
        examples: [
          { pt: "(Tu) não tens estudado nada.", ru: "Ты совсем не учился (всё это время)." },
          { pt: "(Eu) tenho pensado muito em ti.", ru: "Я много думал о тебе (всё это время)." }
        ]
      },
      {
        heading: "2. Действие, показывающее непрерывность",
        text: "Действие, начавшееся в прошлом, которое продолжается без перерыва."
      },
      {
        examples: [
          { pt: "O comboio tem partido a horas todos os dias.", ru: "Поезд отправлялся вовремя каждый день." },
          { pt: "Ultimamente, tu tens estado muito triste.", ru: "В последнее время ты был очень грустным." }
        ]
      },
      {
        heading: "3. Повторяющееся действие",
        text: "Действие, которое началось в прошлом и повторяется."
      },
      {
        examples: [
          { pt: "A Patrícia tem ido a Faro frequentemente.", ru: "Патрисия часто ездила в Фару (и продолжает)." },
          { pt: "O José tem-me visitado muitas vezes.", ru: "Жозе навещал меня много раз (и продолжает)." }
        ]
      },
      {
        note: "Внимание! В европейском португальском Pretérito Perfeito Composto НЕ соответствует английскому Present Perfect. Оно означает повторяющееся или продолжающееся действие, а не однократное завершённое. Для однократного завершённого действия используется Pretérito Perfeito Simples (следующий урок)."
      },
      {
        heading: "Глаголы с двойным причастием",
        text: "Некоторые глаголы имеют две формы причастия: правильную (с ter/haver) и неправильную (с ser/estar, как прилагательное). С вспомогательным глаголом ter всегда используется правильная форма."
      },
      {
        table: {
          headers: ["Глагол", "С ter (правильная)", "С ser/estar (неправильная)"],
          rows: [
            ["aceitar (принять)", "aceitado", "aceite"],
            ["acender (зажечь)", "acendido", "aceso"],
            ["entregar (доставить)", "entregado", "entregue"],
            ["expulsar (исключить)", "expulsado", "expulso"],
            ["extinguir (потушить)", "extinguido", "extinto"],
            ["ganhar (выиграть)", "ganhado", "ganho"],
            ["gastar (потратить)", "gastado", "gasto"],
            ["imprimir (напечатать)", "imprimido", "impresso"],
            ["limpar (очистить)", "limpado", "limpo"],
            ["matar (убить)", "matado", "morto"],
            ["morrer (умереть)", "morrido", "morto"],
            ["pagar (заплатить)", "pagado", "pago"],
            ["prender (арестовать)", "prendido", "preso"]
          ]
        }
      },
      {
        examples: [
          { pt: "Eu tenho aceitado todas as propostas.", ru: "Я принимаю все предложения (в последнее время)." },
          { pt: "A proposta foi aceite pelo diretor.", ru: "Предложение было принято директором." },
          { pt: "Ele tem pagado as contas a tempo.", ru: "Он оплачивает счета вовремя (регулярно)." },
          { pt: "A conta está paga.", ru: "Счёт оплачен." }
        ]
      },
      {
        heading: "Позиция местоимений с Pretérito Perfeito Composto",
        text: "Местоимения (прямые, косвенные, возвратные) присоединяются через дефис к вспомогательному глаголу ter, а не к причастию. При отрицании — ставятся перед ter."
      },
      {
        examples: [
          { pt: "Tenho-lhe telefonado todos os dias.", ru: "Я звоню ему/ей каждый день." },
          { pt: "Não lhe tenho telefonado.", ru: "Я не звоню ему/ей." },
          { pt: "Temo-nos levantado cedo.", ru: "Мы встаём рано (в последнее время)." }
        ]
      }
    ],
    exercises: ex16,
    vocabulary: [
      { pt: "ter", ru: "иметь; вспомогательный глагол" },
      { pt: "ultimamente", ru: "в последнее время" },
      { pt: "feito", ru: "сделанный (причастие)" },
      { pt: "dito", ru: "сказанный (причастие)" },
      { pt: "visto", ru: "увиденный (причастие)" },
      { pt: "escrito", ru: "написанный (причастие)" },
      { pt: "aberto", ru: "открытый (причастие)" },
      { pt: "o progresso", ru: "прогресс, успех" },
      { pt: "a carta", ru: "письмо" },
      { pt: "ler", ru: "читать" }
    ],
    flashcards: [
      { id: "u16_tenho_falado", pt: "tenho falado", ru: "я говорил (и продолжаю)", hint: "Pret. Perf. Composto", example: "Tenho falado com ele." },
      { id: "u16_feito", pt: "feito", ru: "сделанный", hint: "неправ. причастие от fazer", example: "Tenho feito exercício." },
      { id: "u16_dito", pt: "dito", ru: "сказанный", hint: "неправ. причастие от dizer", example: "Ele tem dito a verdade." },
      { id: "u16_visto", pt: "visto", ru: "увиденный", hint: "неправ. причастие от ver", example: "Tens visto o João?" },
      { id: "u16_escrito", pt: "escrito", ru: "написанный", hint: "неправ. причастие от escrever", example: "Ela tem escrito artigos." },
      { id: "u16_aberto", pt: "aberto", ru: "открытый", hint: "неправ. причастие от abrir", example: "A loja tem estado aberta." },
      { id: "u16_ultimamente", pt: "ultimamente", ru: "в последнее время", hint: "маркер Pret. Perf. Composto", example: "Ultimamente tenho dormido mal." },
      { id: "u16_ler", pt: "ler", ru: "читать", hint: "eu leio, причастие: lido", example: "Tenho lido muito." },
      { id: "u16_afetar", pt: "afetar", ru: "влиять, затрагивать", hint: "глагол", example: "A crise afeta muitas pessoas." },
      { id: "u16_argumentar", pt: "argumentar", ru: "спорить, аргументировать", hint: "глагол", example: "Ele gosta de argumentar sobre política." },
      { id: "u16_asneiras", pt: "asneiras", ru: "ошибки, глупости", hint: "ж.р., мн.ч.", example: "Ele tem feito muitas asneiras no trabalho." },
      { id: "u16_aspeto", pt: "aspeto", ru: "аспект, вид", hint: "м.р.", example: "Este aspeto é muito importante." },
      { id: "u16_ate_tarde", pt: "até tarde", ru: "допоздна", hint: "наречное выражение", example: "Tenho trabalhado até tarde." },
      { id: "u16_aventura", pt: "aventura", ru: "приключение", hint: "ж.р.", example: "A viagem foi uma grande aventura." },
      { id: "u16_casal", pt: "casal", ru: "пара, супруги", hint: "м.р.", example: "O casal tem viajado muito." },
      { id: "u16_criminosos", pt: "criminosos", ru: "преступники", hint: "м.р., мн.ч.", example: "Os criminosos foram apanhados pela polícia." },
      { id: "u16_crise_economica", pt: "crise económica", ru: "экономический кризис", hint: "ж.р.", example: "A crise económica tem afetado o país." },
      { id: "u16_degredo", pt: "degredo", ru: "изгнание, ссылка", hint: "м.р.", example: "Muitos foram condenados ao degredo." },
      { id: "u16_descobrimentos", pt: "descobrimentos", ru: "открытия (геогр.)", hint: "м.р., мн.ч.", example: "Os descobrimentos portugueses mudaram o mundo." },
      { id: "u16_despesas", pt: "despesas", ru: "расходы", hint: "ж.р., мн.ч.", example: "As despesas têm aumentado muito." },
      { id: "u16_destino", pt: "destino", ru: "судьба, назначение", hint: "м.р.", example: "Qual é o destino da viagem?" },
      { id: "u16_emigracao", pt: "emigração", ru: "эмиграция", hint: "ж.р.", example: "A emigração aumentou nos últimos anos." },
      { id: "u16_emprego", pt: "emprego", ru: "работа, занятость", hint: "м.р.", example: "Ele tem procurado emprego." },
      { id: "u16_escolher", pt: "escolher", ru: "выбирать", hint: "глагол", example: "É difícil escolher o melhor destino." },
      { id: "u16_exame", pt: "exame", ru: "экзамен", hint: "м.р.", example: "O exame tem sido muito difícil." },
      { id: "u16_exodos", pt: "êxodos", ru: "исходы, массовые переселения", hint: "м.р., мн.ч.", example: "Os êxodos populacionais marcaram a história." },
      { id: "u16_fluxo", pt: "fluxo", ru: "поток", hint: "м.р.", example: "O fluxo de emigrantes tem crescido." },
      { id: "u16_gerente", pt: "gerente", ru: "менеджер, управляющий", hint: "м.р./ж.р.", example: "A gerente tem trabalhado muito." },
      { id: "u16_grecia", pt: "Grécia", ru: "Греция", hint: "имя собственное", example: "A Grécia tem uma história rica." },
      { id: "u16_guitarra", pt: "guitarra", ru: "гитара", hint: "ж.р.", example: "Ele tem tocado guitarra ultimamente." },
      { id: "u16_levar", pt: "levar", ru: "нести, брать", hint: "глагол", example: "Vou levar o casaco porque está frio." },
      { id: "u16_meados_de", pt: "meados de", ru: "середина (периода)", hint: "м.р., мн.ч.", example: "Em meados de julho vou de férias." },
      { id: "u16_observar", pt: "observar", ru: "наблюдать, отмечать", hint: "глагол", example: "É importante observar as mudanças." },
      { id: "u16_promessas", pt: "promessas", ru: "обещания", hint: "ж.р., мн.ч.", example: "O governo tem feito muitas promessas." },
      { id: "u16_refeicoes", pt: "refeições", ru: "приёмы пищи", hint: "ж.р., мн.ч.", example: "As refeições têm sido muito boas." },
      { id: "u16_salario", pt: "salário", ru: "зарплата", hint: "м.р.", example: "O salário não tem aumentado." },
      { id: "u16_vida", pt: "vida", ru: "жизнь", hint: "ж.р.", example: "A vida em Portugal tem mudado muito." },
    ]
  },

  // ===================== UNIT 17: The Preterite Tense =====================
  {
    id: 17,
    title: "Простое прошедшее время (Pretérito Perfeito Simples)",
    description: "Спряжение правильных и неправильных глаголов в простом прошедшем времени",
    theory: [
      {
        heading: "Pretérito Perfeito Simples",
        text: "Это время используется для обозначения завершённых действий в прошлом. Эквивалент русского совершенного вида прошедшего времени: «я сделал», «он пришёл»."
      },
      {
        heading: "Правильные глаголы",
        text: "Окончания правильных глаголов в простом прошедшем времени."
      },
      {
        table: {
          headers: ["Лицо", "-ar (falar)", "-er (comer)", "-ir (partir)"],
          rows: [
            ["eu", "falei", "comi", "parti"],
            ["tu", "falaste", "comeste", "partiste"],
            ["ele/ela/você", "falou", "comeu", "partiu"],
            ["nós", "falámos", "comemos", "partimos"],
            ["eles/elas/vocês", "falaram", "comeram", "partiram"]
          ]
        }
      },
      {
        heading: "Неправильные глаголы в Pretérito Perfeito",
        text: "Основные неправильные глаголы имеют особые формы."
      },
      {
        table: {
          headers: ["Лицо", "ser/ir", "ter", "estar", "fazer"],
          rows: [
            ["eu", "fui", "tive", "estive", "fiz"],
            ["tu", "foste", "tiveste", "estiveste", "fizeste"],
            ["ele/ela", "foi", "teve", "esteve", "fez"],
            ["nós", "fomos", "tivemos", "estivemos", "fizemos"],
            ["eles/elas", "foram", "tiveram", "estiveram", "fizeram"]
          ]
        }
      },
      {
        table: {
          headers: ["Лицо", "poder", "querer", "saber", "dizer", "dar", "vir"],
          rows: [
            ["eu", "pude", "quis", "soube", "disse", "dei", "vim"],
            ["tu", "pudeste", "quiseste", "soubeste", "disseste", "deste", "vieste"],
            ["ele/ela", "pôde", "quis", "soube", "disse", "deu", "veio"],
            ["nós", "pudemos", "quisemos", "soubemos", "dissemos", "demos", "viemos"],
            ["eles/elas", "puderam", "quiseram", "souberam", "disseram", "deram", "vieram"]
          ]
        }
      },
      {
        table: {
          headers: ["Лицо", "pôr", "trazer", "ver"],
          rows: [
            ["eu", "pus", "trouxe", "vi"],
            ["tu", "puseste", "trouxeste", "viste"],
            ["ele/ela/você", "pôs", "trouxe", "viu"],
            ["nós", "pusemos", "trouxemos", "vimos"],
            ["eles/elas/vocês", "puseram", "trouxeram", "viram"]
          ]
        }
      },
      {
        examples: [
          { pt: "Ontem falei com o João.", ru: "Вчера я поговорил с Жуау." },
          { pt: "Eles foram ao cinema.", ru: "Они пошли в кино." },
          { pt: "Tu fizeste o trabalho?", ru: "Ты сделал работу?" },
          { pt: "Nós estivemos em Lisboa.", ru: "Мы были в Лиссабоне." },
          { pt: "Já puseste a mesa, filha?", ru: "Ты уже накрыла на стол, дочка?" },
          { pt: "Esta manhã vimos um acidente.", ru: "Сегодня утром мы видели аварию." }
        ]
      },
      {
        note: "Обратите внимание: в европейском португальском форма «nós» для -ar глаголов в Pretérito Perfeito имеет ударение: falámos (с акцентом!), в отличие от настоящего времени: falamos (без акцента). В бразильском эта разница не отмечается."
      }
    ],
    lessons: [
      { title: "Часть 1: Правильные глаголы", theoryRange: [0, 3] },
      { title: "Часть 2: Неправильные глаголы", theoryRange: [3, 10] }
    ],
    exercises: ex17,
    vocabulary: [
      { pt: "ontem", ru: "вчера" },
      { pt: "na semana passada", ru: "на прошлой неделе" },
      { pt: "no ano passado", ru: "в прошлом году" },
      { pt: "há dois dias", ru: "два дня назад" },
      { pt: "chegar", ru: "приезжать, прибывать" },
      { pt: "vir", ru: "приходить" },
      { pt: "trazer", ru: "приносить" },
      { pt: "pôr", ru: "класть, ставить" },
      { pt: "o bolo", ru: "пирог, торт" },
      { pt: "o trabalho", ru: "работа" }
    ],
    flashcards: [
      { id: "u17_fui", pt: "fui", ru: "я был / я пошёл", hint: "Pret. Perf. от ser/ir", example: "Eu fui ao Porto." },
      { id: "u17_tive", pt: "tive", ru: "я имел", hint: "Pret. Perf. от ter", example: "Tive um bom dia." },
      { id: "u17_estive", pt: "estive", ru: "я был (где-то)", hint: "Pret. Perf. от estar", example: "Estive em casa." },
      { id: "u17_fiz", pt: "fiz", ru: "я сделал", hint: "Pret. Perf. от fazer", example: "Fiz o jantar." },
      { id: "u17_disse", pt: "disse", ru: "я/он сказал", hint: "Pret. Perf. от dizer", example: "Ele disse a verdade." },
      { id: "u17_dei", pt: "dei", ru: "я дал", hint: "Pret. Perf. от dar", example: "Dei-lhe um presente." },
      { id: "u17_vim", pt: "vim", ru: "я пришёл", hint: "Pret. Perf. от vir", example: "Vim de comboio." },
      { id: "u17_chegar", pt: "chegar", ru: "приезжать", hint: "eu cheguei (с -gu-)", example: "Cheguei ontem." },
      { id: "u17_acontecer", pt: "acontecer", ru: "случаться, происходить", hint: "глагол", example: "O que aconteceu ontem?" },
      { id: "u17_agradavel", pt: "agradável", ru: "приятный", hint: "прилагательное", example: "Foi uma tarde agradável." },
      { id: "u17_apesar_de", pt: "apesar de", ru: "несмотря на", hint: "предлог", example: "Apesar de chover, saímos." },
      { id: "u17_arbusto", pt: "arbusto", ru: "куст", hint: "м.р.", example: "Plantei um arbusto no jardim." },
      { id: "u17_armas", pt: "armas", ru: "оружие", hint: "ж.р., мн.ч.", example: "Os soldados levavam armas." },
      { id: "u17_casaco", pt: "casaco", ru: "пальто, пиджак", hint: "м.р.", example: "Levei o casaco porque estava frio." },
      { id: "u17_colonias", pt: "colónias", ru: "колонии", hint: "ж.р., мн.ч.", example: "Portugal tinha colónias em África." },
      { id: "u17_comparar", pt: "comparar", ru: "сравнивать", hint: "глагол", example: "Comparei os dois preços." },
      { id: "u17_convidados", pt: "convidados", ru: "гости, приглашённые", hint: "м.р., мн.ч.", example: "Os convidados chegaram às oito." },
      { id: "u17_cravos", pt: "cravos", ru: "гвоздики", hint: "м.р., мн.ч.", example: "Os cravos são o símbolo da revolução." },
      { id: "u17_demorar", pt: "demorar", ru: "занимать время", hint: "глагол", example: "A viagem demorou três horas." },
      { id: "u17_ditadura", pt: "ditadura", ru: "диктатура", hint: "ж.р.", example: "A ditadura durou muitos anos." },
      { id: "u17_feridos", pt: "feridos", ru: "раненые", hint: "м.р., мн.ч.", example: "Não houve feridos na revolução." },
      { id: "u17_guerra_colonial", pt: "guerra colonial", ru: "колониальная война", hint: "ж.р.", example: "A guerra colonial terminou em 1974." },
      { id: "u17_madrugada", pt: "madrugada", ru: "рассвет, раннее утро", hint: "ж.р.", example: "A revolução começou de madrugada." },
      { id: "u17_militares", pt: "militares", ru: "военные", hint: "м.р., мн.ч.", example: "Os militares tomaram o poder." },
      { id: "u17_patio", pt: "pátio", ru: "двор, патио", hint: "м.р.", example: "Sentámo-nos no pátio." },
      { id: "u17_relvado", pt: "relvado", ru: "газон, лужайка", hint: "м.р.", example: "As crianças brincavam no relvado." },
      { id: "u17_revolucao", pt: "revolução", ru: "революция", hint: "ж.р.", example: "A Revolução dos Cravos foi em 1974." },
      { id: "u17_sangue", pt: "sangue", ru: "кровь", hint: "м.р.", example: "Não foi derramado sangue." },
      { id: "u17_significativa", pt: "significativa", ru: "значительная", hint: "прилагательное", example: "Foi uma mudança significativa." },
      { id: "u17_sinal", pt: "sinal", ru: "сигнал, знак", hint: "м.р.", example: "A canção foi o sinal para a revolução." },
      { id: "u17_sombra", pt: "sombra", ru: "тень", hint: "ж.р.", example: "Sentámo-nos à sombra da árvore." },
      { id: "u17_ter_lugar", pt: "ter lugar", ru: "иметь место, происходить", hint: "выражение", example: "A revolução teve lugar em abril." },
      { id: "u17_transmissao", pt: "transmissão", ru: "передача, трансляция", hint: "ж.р.", example: "A transmissão da canção foi o sinal." },
      { id: "u17_vaso", pt: "vaso", ru: "ваза", hint: "м.р.", example: "Pus as flores no vaso." },
      { id: "u17_violencia", pt: "violência", ru: "насилие", hint: "ж.р.", example: "A revolução foi sem violência." },
    ]
  },

  // ===================== UNIT 18: The Imperfect Tense =====================
  {
    id: 18,
    title: "Прошедшее незавершённое время (Imperfeito)",
    description: "Pretérito Imperfeito — описание прошлых привычек, состояний и длительных действий",
    theory: [
      {
        heading: "Pretérito Imperfeito",
        text: "Это время используется для описания: 1) привычных действий в прошлом, 2) фоновых/длительных действий, 3) описания обстановки и состояний в прошлом, 4) одновременных действий в прошлом. Эквивалент русского несовершенного вида: «я делал», «он ходил»."
      },
      {
        heading: "Правильные глаголы",
        text: "В Imperfeito глаголы спрягаются очень регулярно. Неправильных глаголов всего четыре."
      },
      {
        table: {
          headers: ["Лицо", "-ar (falar)", "-er (comer)", "-ir (partir)"],
          rows: [
            ["eu", "falava", "comia", "partia"],
            ["tu", "falavas", "comias", "partias"],
            ["ele/ela/você", "falava", "comia", "partia"],
            ["nós", "falávamos", "comíamos", "partíamos"],
            ["eles/elas/vocês", "falavam", "comiam", "partiam"]
          ]
        }
      },
      {
        heading: "Неправильные глаголы в Imperfeito",
        text: "Всего четыре глагола неправильные в этом времени: ser, ter, vir, pôr."
      },
      {
        table: {
          headers: ["Лицо", "ser", "ter", "vir", "pôr"],
          rows: [
            ["eu", "era", "tinha", "vinha", "punha"],
            ["tu", "eras", "tinhas", "vinhas", "punhas"],
            ["ele/ela", "era", "tinha", "vinha", "punha"],
            ["nós", "éramos", "tínhamos", "vínhamos", "púnhamos"],
            ["eles/elas", "eram", "tinham", "vinham", "punham"]
          ]
        }
      },
      {
        note: "Важно: глаголы dar, dizer, fazer, ir, saber, trazer, ver — неправильные в других временах, но в Imperfeito они спрягаются по обычным правилам: dava, dizia, fazia, ia, sabia, trazia, via."
      },
      {
        text: "В учебнике pôr иногда относят к 4-й группе спряжения наряду с -ar/-er/-ir. В Imperfeito глагол pôr спрягается по своему собственному образцу (punha, punhas...), но это спряжение полностью предсказуемо."
      },
      {
        heading: "Примеры с ser, ter, vir в Imperfeito",
        text: "Примеры из учебника, демонстрирующие использование неправильных глаголов ser, ter и vir в Imperfeito."
      },
      {
        examples: [
          { pt: "O Fernando era muito gordo.", ru: "Фернанду был очень полным." },
          { pt: "No ano passado tínhamos um automóvel muito velho.", ru: "В прошлом году у нас был очень старый автомобиль." },
          { pt: "O meu tio tinha uma namorada alemã. Era muito simpática.", ru: "У моего дяди была немецкая подруга. Она была очень симпатичной." },
          { pt: "Vinhas a nossa casa muitas vezes, quando vivias aqui perto.", ru: "Ты часто приходил к нам домой, когда жил здесь рядом." }
        ]
      },
      {
        heading: "Маркеры Imperfeito",
        text: "Слова-маркеры, которые указывают на использование Imperfeito."
      },
      {
        table: {
          headers: ["Маркер", "Перевод"],
          rows: [
            ["sempre", "всегда"],
            ["todos os dias", "каждый день"],
            ["normalmente", "обычно"],
            ["antigamente", "раньше, в старые времена"],
            ["quando era criança", "когда я был ребёнком"],
            ["naquela época", "в ту эпоху"],
            ["enquanto", "в то время как, пока"]
          ]
        }
      },
      {
        examples: [
          { pt: "Quando era criança, brincava no jardim.", ru: "Когда я был ребёнком, я играл в саду." },
          { pt: "Todos os dias ia à escola a pé.", ru: "Каждый день я ходил в школу пешком." },
          { pt: "Enquanto eu estudava, ele via televisão.", ru: "Пока я учился, он смотрел телевизор." },
          { pt: "Naquela época, vivíamos no campo.", ru: "В ту эпоху мы жили в деревне." }
        ]
      },
      {
        note: "Imperfeito — одно из самых «удобных» времён, так как почти все глаголы правильные (кроме ser, ter, vir, pôr). Формы 1-го и 3-го лица ед.ч. совпадают."
      },
      {
        heading: "Ir + инфинитив в Imperfeito: «собирался сделать»",
        text: "Глагол ir в Imperfeito + инфинитив основного глагола описывает действие, которое «собирались сделать» в прошлом (аналог английского «was going to»)."
      },
      {
        examples: [
          { pt: "Eu ia telefonar à Ana, mas depois esqueci-me.", ru: "Я собирался позвонить Ане, но потом забыл." },
          { pt: "Ela ia dar aulas este ano, mas desistiu.", ru: "Она собиралась вести уроки в этом году, но отказалась." },
          { pt: "Nós íamos mudar de casa, mas mudámos de ideias.", ru: "Мы собирались переехать, но передумали." }
        ]
      },
      {
        heading: "Вежливые просьбы с Imperfeito",
        text: "Imperfeito используется для вежливых просьб и пожеланий, смягчая прямое высказывание (аналог русского сослагательного «хотел бы», «мог бы»)."
      },
      {
        examples: [
          { pt: "Eu queria um café, por favor.", ru: "Я хотел бы кофе, пожалуйста." },
          { pt: "Joana, podias fazer-me um favor?", ru: "Жуана, ты не могла бы мне помочь?" },
          { pt: "O senhor podia dizer-me as horas?", ru: "Вы не могли бы подсказать время?" }
        ]
      }
    ],
    lessons: [
      { title: "Часть 1: Imperfeito — формы и маркеры", theoryRange: [0, 12] },
      { title: "Часть 2: Ir + инфинитив и вежливые просьбы", theoryRange: [12, 17] }
    ],
    exercises: ex18,
    vocabulary: [
      { pt: "antigamente", ru: "раньше, в прежние времена" },
      { pt: "naquela época", ru: "в ту эпоху" },
      { pt: "todos os dias", ru: "каждый день" },
      { pt: "normalmente", ru: "обычно" },
      { pt: "enquanto", ru: "пока, в то время как" },
      { pt: "brincar", ru: "играть (детская игра)" },
      { pt: "o jardim", ru: "сад" },
      { pt: "o campo", ru: "деревня; поле" },
      { pt: "a criança", ru: "ребёнок" },
      { pt: "a televisão", ru: "телевизор, телевидение" },
      { pt: "instância de férias", ru: "курорт, место отдыха" },
      { pt: "micro climas", ru: "микроклиматы" },
      { pt: "provenientes de", ru: "происходящие из" },
      { pt: "em adolescentes", ru: "в подростковом возрасте" },
      { pt: "todo", ru: "весь, все" },
      { pt: "amostra de tecido", ru: "образец ткани" }
    ],
    flashcards: [
      { id: "u18_falava", pt: "falava", ru: "говорил (привычно)", hint: "Imperfeito от falar", example: "Eu falava português todos os dias." },
      { id: "u18_era", pt: "era", ru: "был (постоянно)", hint: "Imperfeito от ser (нерег.)", example: "Eu era tímido quando era criança." },
      { id: "u18_tinha", pt: "tinha", ru: "имел", hint: "Imperfeito от ter (нерег.)", example: "Eu tinha um cão." },
      { id: "u18_vinha", pt: "vinha", ru: "приходил", hint: "Imperfeito от vir (нерег.)", example: "Ele vinha cá todos os dias." },
      { id: "u18_antigamente", pt: "antigamente", ru: "раньше", hint: "маркер Imperfeito", example: "Antigamente não havia internet." },
      { id: "u18_enquanto", pt: "enquanto", ru: "пока, в то время как", hint: "союз, маркер Imperfeito", example: "Enquanto comia, lia o jornal." },
      { id: "u18_brincar", pt: "brincar", ru: "играть", hint: "eu brincava (Imperf.)", example: "Brincávamos no jardim." },
      { id: "u18_crianca", pt: "a criança", ru: "ребёнок", hint: "мн.ч.: as crianças", example: "As crianças brincavam no parque." },
      { id: "u18_abrir_ao_publico", pt: "abrir ao público", ru: "открыть для публики", hint: "выражение", example: "O museu abriu ao público em 1990." },
      { id: "u18_avariado", pt: "avariado", ru: "неисправный, сломанный", hint: "прилагательное", example: "O elevador estava avariado." },
      { id: "u18_barulhento", pt: "barulhento", ru: "шумный", hint: "прилагательное", example: "O restaurante era muito barulhento." },
      { id: "u18_barulho", pt: "barulho", ru: "шум", hint: "м.р.", example: "Havia muito barulho na rua." },
      { id: "u18_contexto", pt: "contexto", ru: "контекст", hint: "м.р.", example: "O contexto histórico era diferente." },
      { id: "u18_diferenca", pt: "diferença", ru: "разница, различие", hint: "ж.р.", example: "A diferença entre os dois era grande." },
      { id: "u18_dualidade", pt: "dualidade", ru: "двойственность", hint: "ж.р.", example: "Havia uma dualidade na sua personalidade." },
      { id: "u18_errado", pt: "errado", ru: "неправильный, ошибочный", hint: "прилагательное", example: "O número estava errado." },
      { id: "u18_irrequieto", pt: "irrequieto", ru: "непоседливый, беспокойный", hint: "прилагательное", example: "O rapaz era muito irrequieto na escola." },
      { id: "u18_liceu", pt: "liceu", ru: "лицей, гимназия", hint: "м.р.", example: "Antigamente, eu ia ao liceu a pé." },
      { id: "u18_planos", pt: "planos", ru: "планы", hint: "м.р., мн.ч.", example: "Os planos mudavam constantemente." },
      { id: "u18_relogio", pt: "relógio", ru: "часы (наручные/настенные)", hint: "м.р.", example: "O relógio estava avariado." },
      { id: "u18_restantes", pt: "restantes", ru: "остальные", hint: "прилагательное", example: "Os restantes alunos ficaram na sala." },
    ]
  },

  // ===================== UNIT 19: Preterite vs Imperfect =====================
  {
    id: 19,
    title: "Pretérito Perfeito vs Imperfeito",
    description: "Сравнение простого прошедшего и прошедшего незавершённого времени — когда что использовать",
    theory: [
      {
        heading: "Когда использовать Pretérito Perfeito Simples",
        text: "Простое прошедшее (Perfeito) используется для: 1) завершённых однократных действий, 2) последовательности действий, 3) действий с указанием точного времени."
      },
      {
        table: {
          headers: ["Ситуация", "Пример"],
          rows: [
            ["Завершённое действие", "Ontem comi peixe. (Вчера я поел рыбу.)"],
            ["Последовательность", "Levantei-me, tomei banho e saí. (Встал, принял душ и вышел.)"],
            ["Точное время", "Cheguei às oito horas. (Я приехал в восемь.)"],
            ["Определённый период", "Vivi em Lisboa durante dois anos. (Я жил в Лиссабоне два года.)"]
          ]
        }
      },
      {
        heading: "Когда использовать Imperfeito",
        text: "Незавершённое прошедшее (Imperfeito) используется для: 1) привычных действий, 2) описания фона/обстановки, 3) длительных/продолжающихся действий, 4) физических и эмоциональных состояний."
      },
      {
        table: {
          headers: ["Ситуация", "Пример"],
          rows: [
            ["Привычка", "Todos os dias ia à escola. (Каждый день ходил в школу.)"],
            ["Описание фона", "Fazia sol e os pássaros cantavam. (Светило солнце, птицы пели.)"],
            ["Длительное действие", "Enquanto dormia, tocou o telefone. (Пока я спал, зазвонил телефон.)"],
            ["Состояние", "Eu estava cansado. (Я был уставшим.)"]
          ]
        }
      },
      {
        heading: "Сочетание двух времён",
        text: "Часто в одном предложении используются оба времени: Imperfeito — для фонового/длительного действия, Perfeito — для нового/прерывающего действия."
      },
      {
        examples: [
          { pt: "Quando eu saía de casa, começou a chover.", ru: "Когда я выходил из дома, начался дождь." },
          { pt: "Enquanto ela cozinhava, ele chegou.", ru: "Пока она готовила, он приехал." },
          { pt: "Eu lia um livro quando o telefone tocou.", ru: "Я читал книгу, когда зазвонил телефон." },
          { pt: "Eles viviam no Porto, mas mudaram-se para Lisboa.", ru: "Они жили в Порту, но переехали в Лиссабон." }
        ]
      },
      {
        heading: "Estar a + инфинитив для описания фона",
        text: "Вместо простого Imperfeito для описания фонового действия часто используется конструкция estar (в Imperfeito) + a + инфинитив. Это подчёркивает, что действие происходило именно в тот момент."
      },
      {
        examples: [
          { pt: "Eu estava a ler quando ela chegou.", ru: "Я читал (в тот момент), когда она приехала." },
          { pt: "Eles estavam a jantar quando o telefone tocou.", ru: "Они ужинали, когда зазвонил телефон." },
          { pt: "O que estavas a fazer quando te telefonei?", ru: "Что ты делал, когда я тебе позвонил?" },
          { pt: "Estava a chover quando saímos do cinema.", ru: "Шёл дождь, когда мы вышли из кино." }
        ]
      },
      {
        note: "Ключевое правило: если можно заменить на «обычно делал» или «в тот момент делал» — используйте Imperfeito. Если можно заменить на «сделал», «произошло» — используйте Perfeito."
      }
    ],
    exercises: ex19,
    vocabulary: [
      { pt: "chover", ru: "идти (о дожде)" },
      { pt: "nevar", ru: "идти (о снеге)" },
      { pt: "o sol", ru: "солнце" },
      { pt: "a chuva", ru: "дождь" },
      { pt: "o pássaro", ru: "птица" },
      { pt: "cantar", ru: "петь" },
      { pt: "tocar", ru: "звонить; играть (на инструменте)" },
      { pt: "cozinhar", ru: "готовить (еду)" },
      { pt: "mudar-se", ru: "переезжать" },
      { pt: "a praia", ru: "пляж" }
    ],
    flashcards: [
      { id: "u19_chovia", pt: "chovia", ru: "шёл дождь (Imperf.)", hint: "описание фона", example: "Chovia quando saí de casa." },
      { id: "u19_choveu", pt: "choveu", ru: "пошёл дождь (Perf.)", hint: "завершённое событие", example: "Ontem choveu muito." },
      { id: "u19_enquanto_perf", pt: "Enquanto ... Perfeito", ru: "Пока (фон) ... (событие)", hint: "Imperf. + Perf.", example: "Enquanto dormia, tocou o telefone." },
      { id: "u19_mudar_se", pt: "mudar-se", ru: "переезжать", hint: "eu mudei-me (Perf.)", example: "Mudaram-se para Lisboa." },
      { id: "u19_cozinhar", pt: "cozinhar", ru: "готовить (еду)", hint: "eu cozinhava (Imperf.)", example: "Ela cozinhava enquanto eu lia." },
      { id: "u19_praia", pt: "a praia", ru: "пляж", hint: "женский род", example: "Íamos à praia todos os verões." },
      { id: "u19_sol", pt: "o sol", ru: "солнце", hint: "fazia sol = было солнечно", example: "Fazia sol e estava calor." },
      { id: "u19_passaro", pt: "o pássaro", ru: "птица", hint: "мн.ч.: os pássaros", example: "Os pássaros cantavam." },
      { id: "u19_arabe", pt: "árabe", ru: "арабский, араб", hint: "м.р./ж.р.", example: "A cultura árabe influenciou Portugal." },
      { id: "u19_campo", pt: "campo", ru: "деревня, поле", hint: "м.р.", example: "Vivíamos no campo quando éramos crianças." },
      { id: "u19_carateristicas", pt: "características", ru: "характеристики", hint: "ж.р., мн.ч.", example: "As características da região são únicas." },
      { id: "u19_chamines", pt: "chaminés", ru: "дымоходы, трубы", hint: "ж.р., мн.ч.", example: "As chaminés do Algarve são muito bonitas." },
      { id: "u19_contribuir_com", pt: "contribuir com", ru: "внести вклад", hint: "глагол + предлог", example: "Os mouros contribuíram com novos hábitos." },
      { id: "u19_decoracoes", pt: "decorações", ru: "украшения, декор", hint: "ж.р., мн.ч.", example: "As decorações eram muito bonitas." },
      { id: "u19_desligar", pt: "desligar", ru: "выключать", hint: "глагол", example: "Desliguei a televisão e fui dormir." },
      { id: "u19_expulsar", pt: "expulsar", ru: "изгонять, выгонять", hint: "глагол", example: "Os mouros foram expulsos da Península." },
      { id: "u19_ha_dois_anos", pt: "há dois anos", ru: "два года назад", hint: "há + время = назад", example: "Há dois anos mudei-me para Lisboa." },
      { id: "u19_incrivel", pt: "incrível", ru: "невероятный", hint: "прилагательное", example: "A viagem foi incrível." },
      { id: "u19_influenciar", pt: "influenciar", ru: "влиять", hint: "глагол", example: "A cultura árabe influenciou a arquitetura." },
      { id: "u19_introduzir", pt: "introduzir", ru: "вводить, внедрять", hint: "глагол", example: "Os mouros introduziram novos hábitos." },
      { id: "u19_inumeras", pt: "inúmeras", ru: "многочисленные", hint: "прилагательное", example: "Há inúmeras razões para visitar Portugal." },
      { id: "u19_mouros", pt: "mouros", ru: "мавры", hint: "м.р., мн.ч.", example: "Os mouros ocuparam a Península Ibérica." },
      { id: "u19_muros", pt: "muros", ru: "стены, ограды", hint: "м.р., мн.ч.", example: "Os muros do castelo eram altos." },
      { id: "u19_na_altura", pt: "na altura", ru: "в то время", hint: "наречное выражение", example: "Na altura, eu vivia no campo." },
      { id: "u19_navio_de_carga", pt: "navio de carga", ru: "грузовой корабль", hint: "м.р.", example: "O navio de carga partiu do porto." },
      { id: "u19_no_meio_de", pt: "no meio de", ru: "посреди, в середине", hint: "предложное выражение", example: "Estávamos no meio de uma tempestade." },
      { id: "u19_no_verao_passado", pt: "no verão passado", ru: "прошлым летом", hint: "выражение времени", example: "No verão passado fui ao Algarve." },
      { id: "u19_ocupar", pt: "ocupar", ru: "занимать, оккупировать", hint: "глагол", example: "Os mouros ocuparam o sul de Portugal." },
      { id: "u19_peninsula_iberica", pt: "Península Ibérica", ru: "Пиренейский полуостров", hint: "имя собственное", example: "Os mouros invadiram a Península Ibérica." },
      { id: "u19_permanecer", pt: "permanecer", ru: "оставаться", hint: "глагол", example: "Os mouros permaneceram em Portugal durante séculos." },
      { id: "u19_pneu", pt: "pneu", ru: "шина", hint: "м.р.", example: "O pneu do carro furou." },
      { id: "u19_policia", pt: "polícia", ru: "полиция", hint: "ж.р.", example: "A polícia chegou rapidamente." },
      { id: "u19_porta", pt: "porta", ru: "дверь", hint: "ж.р.", example: "A porta estava aberta." },
      { id: "u19_renda", pt: "renda", ru: "аренда, рента", hint: "ж.р.", example: "A renda do apartamento era cara." },
      { id: "u19_senhorio", pt: "senhorio", ru: "арендодатель, хозяин", hint: "м.р.", example: "O senhorio aumentou a renda." },
      { id: "u19_suficiente", pt: "suficiente", ru: "достаточный", hint: "прилагательное", example: "O dinheiro não era suficiente." },
      { id: "u19_volante", pt: "volante", ru: "руль", hint: "м.р.", example: "Segurou o volante com as duas mãos." },
    ]
  },

  // ===================== UNIT 20: Past Perfect and Pluperfect =====================
  {
    id: 20,
    title: "Предпрошедшее время (Mais-que-Perfeito)",
    description: "Pretérito Mais-que-Perfeito — простая и составная формы для действий, предшествующих другим действиям в прошлом",
    theory: [
      {
        heading: "Pretérito Mais-que-Perfeito Composto (составная форма)",
        text: "Наиболее употребительная форма. Образуется: tinha/tinhas/tinha/tínhamos/tinham + причастие прошедшего времени. Обозначает действие, которое произошло раньше другого действия в прошлом."
      },
      {
        table: {
          headers: ["Лицо", "ter (Imperfeito) + particípio"],
          rows: [
            ["eu", "tinha falado"],
            ["tu", "tinhas falado"],
            ["ele/ela/você", "tinha falado"],
            ["nós", "tínhamos falado"],
            ["eles/elas/vocês", "tinham falado"]
          ]
        }
      },
      {
        heading: "Pretérito Mais-que-Perfeito Simples (простая форма)",
        text: "Используется в литературном языке и формальной письменной речи. Образуется от основы Pretérito Perfeito (3-е лицо мн.ч.) с заменой окончания."
      },
      {
        table: {
          headers: ["Лицо", "falar", "comer", "partir"],
          rows: [
            ["eu", "falara", "comera", "partira"],
            ["tu", "falaras", "comeras", "partiras"],
            ["ele/ela/você", "falara", "comera", "partira"],
            ["nós", "faláramos", "comêramos", "partíramos"],
            ["eles/elas/vocês", "falaram", "comeram", "partiram"]
          ]
        }
      },
      {
        heading: "Неправильные глаголы в Mais-que-Perfeito Simples",
        text: "Основные неправильные глаголы."
      },
      {
        table: {
          headers: ["Глагол", "eu", "ele/ela", "eles/elas"],
          rows: [
            ["ser/ir", "fora", "fora", "foram"],
            ["ter", "tivera", "tivera", "tiveram"],
            ["estar", "estivera", "estivera", "estiveram"],
            ["fazer", "fizera", "fizera", "fizeram"],
            ["dizer", "dissera", "dissera", "disseram"],
            ["dar", "dera", "dera", "deram"],
            ["pôr", "pusera", "pusera", "puseram"],
            ["trazer", "trouxera", "trouxera", "trouxeram"],
            ["vir", "viera", "viera", "vieram"]
          ]
        }
      },
      {
        heading: "Использование Mais-que-Perfeito",
        text: "Это время используется для обозначения действия, которое произошло до другого действия в прошлом. Аналог русского «я уже сделал (к тому моменту)»."
      },
      {
        examples: [
          { pt: "Quando cheguei, ele já tinha saído.", ru: "Когда я приехал, он уже ушёл." },
          { pt: "Ela disse que já tinha comido.", ru: "Она сказала, что уже поела." },
          { pt: "Nós não tínhamos visto o filme.", ru: "Мы не видели этот фильм (до того момента)." },
          { pt: "Ele nunca visitara Lisboa antes daquela viagem.", ru: "Он никогда не посещал Лиссабон до той поездки. (литерат.)" }
        ]
      },
      {
        note: "В разговорной речи почти всегда используется составная форма (tinha + причастие). Простая форма (falara, comera) встречается в литературе, газетах и формальных текстах. Обе формы имеют одинаковое значение."
      },
      {
        heading: "Вспомогательный глагол haver",
        text: "В литературном и историческом стиле вместо ter может использоваться haver как вспомогательный глагол: havia falado = tinha falado. Эта форма встречается в классической литературе и формальных текстах."
      },
      {
        examples: [
          { pt: "Ele havia partido antes de nós chegarmos.", ru: "Он уехал до того, как мы приехали. (литерат.)" },
          { pt: "Quando chegámos, eles já haviam saído.", ru: "Когда мы приехали, они уже ушли. (литерат.)" }
        ]
      },
      {
        heading: "Позиция местоимений в Mais-que-Perfeito Composto",
        text: "Как и в Pretérito Perfeito Composto, местоимения присоединяются к вспомогательному глаголу (tinha), а не к причастию. При отрицании — ставятся перед вспомогательным глаголом."
      },
      {
        examples: [
          { pt: "Ele tinha-me telefonado antes do jantar.", ru: "Он позвонил мне перед ужином." },
          { pt: "Nós não lhe tínhamos dito nada.", ru: "Мы ему/ей ничего не сказали." },
          { pt: "Ela já se tinha levantado quando cheguei.", ru: "Она уже встала, когда я пришёл." },
          { pt: "Eu tinha-lhos pedido.", ru: "Я попросил у него/неё их (lhe + os = lhos)." }
        ]
      },
      {
        note: "Форма 3-го лица множественного числа M-q-P Simples совпадает с Pretérito Perfeito (falaram = falaram). Поэтому для 3-го лица мн.ч. предпочтительно использовать составную форму (tinham falado), чтобы избежать двусмысленности."
      }
    ],
    exercises: ex20,
    vocabulary: [
      { pt: "já", ru: "уже" },
      { pt: "antes", ru: "раньше, до" },
      { pt: "depois", ru: "потом, после" },
      { pt: "quando", ru: "когда" },
      { pt: "sair", ru: "выходить" },
      { pt: "visitar", ru: "посещать" },
      { pt: "decidir", ru: "решать" },
      { pt: "perceber", ru: "понимать, замечать" },
      { pt: "a viagem", ru: "путешествие, поездка" },
      { pt: "o filme", ru: "фильм" }
    ],
    flashcards: [
      { id: "u20_tinha_falado", pt: "tinha falado", ru: "говорил (до того момента)", hint: "M-q-P Composto", example: "Eu já tinha falado com ele." },
      { id: "u20_tinha_ido", pt: "tinha ido", ru: "ходил/ездил (до того)", hint: "M-q-P Composto от ir", example: "Nunca tinha ido a Lisboa." },
      { id: "u20_tinha_feito", pt: "tinha feito", ru: "сделал (до того)", hint: "M-q-P Composto от fazer", example: "Ele já tinha feito o trabalho." },
      { id: "u20_tinha_visto", pt: "tinha visto", ru: "видел (до того)", hint: "M-q-P Composto от ver", example: "Nós não tínhamos visto o filme." },
      { id: "u20_ja", pt: "já", ru: "уже", hint: "маркер M-q-P", example: "Ele já tinha saído." },
      { id: "u20_antes", pt: "antes", ru: "раньше, до", hint: "antes de + инфинитив", example: "Antes de sair, telefonei-lhe." },
      { id: "u20_sair", pt: "sair", ru: "выходить", hint: "eu saio, eu saí, saído", example: "Quando cheguei, ela tinha saído." },
      { id: "u20_perceber", pt: "perceber", ru: "понимать, замечать", hint: "eu percebi (Perf.)", example: "Percebi que tinha esquecido as chaves." },
      { id: "u20_aliado", pt: "aliado", ru: "союзник", hint: "м.р.", example: "A Inglaterra foi um aliado importante." },
      { id: "u20_alianca", pt: "aliança", ru: "союз, альянс", hint: "ж.р.", example: "A aliança entre os dois países era forte." },
      { id: "u20_anglo_portuguesa", pt: "anglo-portuguesa", ru: "англо-португальская", hint: "прилагательное", example: "A aliança anglo-portuguesa é a mais antiga do mundo." },
      { id: "u20_arqueiros", pt: "arqueiros", ru: "лучники", hint: "м.р., мн.ч.", example: "Os arqueiros ingleses ajudaram na batalha." },
      { id: "u20_batalha", pt: "batalha", ru: "битва, сражение", hint: "ж.р.", example: "A Batalha de Aljubarrota foi decisiva." },
      { id: "u20_castelhanos", pt: "castelhanos", ru: "кастильцы", hint: "м.р., мн.ч.", example: "Os castelhanos foram derrotados." },
      { id: "u20_comandar", pt: "comandar", ru: "командовать", hint: "глагол", example: "O rei comandou o exército." },
      { id: "u20_dar_os_parabens", pt: "dar os parabéns", ru: "поздравлять", hint: "выражение", example: "Dei-lhe os parabéns pelo aniversário." },
      { id: "u20_decisiva", pt: "decisiva", ru: "решающая", hint: "прилагательное", example: "A batalha foi decisiva para Portugal." },
      { id: "u20_dinastia", pt: "dinastia", ru: "династия", hint: "ж.р.", example: "Uma nova dinastia começou." },
      { id: "u20_diplomatica", pt: "diplomática", ru: "дипломатическая", hint: "прилагательное", example: "A solução foi diplomática." },
      { id: "u20_empregada_de_limpeza", pt: "empregada de limpeza", ru: "уборщица", hint: "ж.р.", example: "A empregada de limpeza já tinha saído." },
      { id: "u20_enganos", pt: "enganos", ru: "ошибки, недоразумения", hint: "м.р., мн.ч.", example: "Houve vários enganos no relatório." },
      { id: "u20_inicio", pt: "início", ru: "начало", hint: "м.р.", example: "No início, ninguém acreditava." },
      { id: "u20_instabilidade", pt: "instabilidade", ru: "нестабильность", hint: "ж.р.", example: "A instabilidade política tinha aumentado." },
      { id: "u20_rei", pt: "rei", ru: "король", hint: "м.р.", example: "O rei tinha comandado o exército." },
      { id: "u20_renovada", pt: "renovada", ru: "обновлённая", hint: "причастие", example: "A aliança foi renovada." },
      { id: "u20_sem_hesitar", pt: "sem hesitar", ru: "без колебаний", hint: "выражение", example: "Aceitou sem hesitar." },
      { id: "u20_trono", pt: "trono", ru: "трон", hint: "м.р.", example: "O rei subiu ao trono." },
      { id: "u20_tropas", pt: "tropas", ru: "войска", hint: "ж.р., мн.ч.", example: "As tropas tinham avançado." },
      { id: "u20_tumultos", pt: "tumultos", ru: "беспорядки, волнения", hint: "м.р., мн.ч.", example: "Os tumultos tinham começado na cidade." },
      { id: "u20_vitoria", pt: "vitória", ru: "победа", hint: "ж.р.", example: "A vitória foi celebrada por todo o país." },
    ]
  }
];
