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
      { id: "u1_pao", pt: "o pão", ru: "хлеб", hint: "мн.ч.: os pães", example: "O pão está fresco." }
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
        text: "В европейском португальском определённые артикли сливаются с предлогами de, em, a, por."
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
          { pt: "O rapaz está na escola.", ru: "Мальчик в школе." },
          { pt: "Uma rapariga chegou.", ru: "Девочка пришла." },
          { pt: "Gosto do café.", ru: "Мне нравится кофе." },
          { pt: "Vou ao cinema.", ru: "Я иду в кино." }
        ]
      },
      {
        note: "В европейском португальском артикль часто используется перед именами собственными: O João, a Maria. Также артикль ставится перед притяжательными: o meu livro (моя книга)."
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
      { id: "u2_carro", pt: "o carro", ru: "машина", hint: "do carro = (чья) машины", example: "O carro é novo." }
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
        text: "В Португалии используется система «É uma hora» (час) и «São duas horas» (два часа). Минуты добавляются через «e»: São três e dez (3:10). «Menos» используется для обозначения «без»: São cinco menos um quarto (4:45)."
      },
      {
        examples: [
          { pt: "Que horas são? — São duas e meia.", ru: "Который час? — Половина третьего (2:30)." },
          { pt: "É uma e um quarto.", ru: "Четверть второго (1:15)." },
          { pt: "São oito menos vinte.", ru: "Без двадцати восемь (7:40)." },
          { pt: "Hoje é dia quinze de fevereiro.", ru: "Сегодня пятнадцатое февраля." }
        ]
      },
      {
        heading: "Даты (As datas)",
        text: "Даты выражаются количественными числительными: dia dois de março (2 марта). Месяцы пишутся с маленькой буквы: janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro."
      },
      {
        note: "Обратите внимание на европейские формы: dezasseis (16), dezassete (17), dezanove (19) — в бразильском варианте они пишутся с двойным «s»: dezesseis, dezessete, dezenove."
      }
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
      { id: "u3_meia", pt: "meia", ru: "половина (при указании времени)", hint: "São duas e meia = 2:30", example: "O filme começa às sete e meia." }
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
        examples: [
          { pt: "Eu falo português.", ru: "Я говорю по-португальски." },
          { pt: "Tu comes muito.", ru: "Ты много ешь." },
          { pt: "Nós partimos amanhã.", ru: "Мы уезжаем завтра." },
          { pt: "Eles trabalham todos os dias.", ru: "Они работают каждый день." }
        ]
      },
      {
        note: "В европейском португальском «tu» широко используется в неформальном общении, в отличие от Бразилии. «Você» используется в более формальном контексте или при обращении к незнакомым людям."
      }
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
      { id: "u4_escrever", pt: "escrever", ru: "писать", hint: "eu escrevo, tu escreves", example: "Eu escrevo uma carta." }
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
      }
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
      { id: "u5_comboio", pt: "o comboio", ru: "поезд", hint: "европ. порт. (браз.: o trem)", example: "O comboio chega às nove." }
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
      }
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
      { id: "u6_bilhete", pt: "o bilhete", ru: "билет", hint: "мужской род", example: "Quanto custa o bilhete?" }
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
        text: "Для образования отрицания в португальском достаточно поставить «não» (нет, не) перед глаголом. В отличие от русского, в португальском не бывает двойного отрицания с «não» и другим отрицательным словом перед глаголом."
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
      }
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
      { id: "u7_peixe", pt: "o peixe", ru: "рыба", hint: "мужской род", example: "Eu gosto de peixe." }
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
      }
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
      { id: "u8_medico", pt: "o médico / a médica", ru: "врач", hint: "профессия — с ser", example: "Ela é médica." }
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
      }
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
      { id: "u9_edificio", pt: "o edifício", ru: "здание", hint: "мужской род", example: "Aquele edifício é antigo." }
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
            ["на -or", "trabalhador", "trabalhadora", "trabalhadores", "trabalhadoras"]
          ]
        }
      },
      {
        heading: "Позиция прилагательного",
        text: "Обычно прилагательные стоят после существительного: um carro vermelho (красная машина). Некоторые короткие и частые прилагательные могут стоять перед существительным, меняя оттенок значения: bom, mau, grande, pequeno."
      },
      {
        examples: [
          { pt: "Uma casa grande (большой дом)", ru: "Большой дом (буквально)" },
          { pt: "Um grande homem (великий человек)", ru: "Великий человек (переносное значение)" },
          { pt: "Um carro novo", ru: "Новая машина" },
          { pt: "A comida portuguesa é deliciosa.", ru: "Португальская еда — вкусная." }
        ]
      },
      {
        heading: "Наречия (Advérbios)",
        text: "Наречия образуются от прилагательных женского рода + суффикс -mente. Если прилагательное одинаково для обоих родов, -mente добавляется к основной форме."
      },
      {
        table: {
          headers: ["Прилагательное", "Наречие", "Перевод"],
          rows: [
            ["rápido/a", "rapidamente", "быстро"],
            ["lento/a", "lentamente", "медленно"],
            ["fácil", "facilmente", "легко"],
            ["feliz", "felizmente", "к счастью"],
            ["normal", "normalmente", "обычно"]
          ]
        }
      },
      {
        note: "Некоторые наречия не образуются по правилу: bem (хорошо), mal (плохо), muito (очень), pouco (мало), sempre (всегда), depressa (быстро), devagar (медленно)."
      }
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
      { id: "u10_devagar", pt: "devagar", ru: "медленно", hint: "антоним: depressa", example: "Fala devagar, por favor." }
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
            ["mais + прил. + do que", "более ... чем", "Lisboa é mais grande do que o Porto."],
            ["menos + прил. + do que", "менее ... чем", "O Porto é menos quente do que Lisboa."],
            ["tão + прил. + como", "такой же ... как", "Coimbra é tão bonita como o Porto."]
          ]
        }
      },
      {
        heading: "Неправильные формы сравнения",
        text: "Некоторые прилагательные имеют особые формы сравнительной степени."
      },
      {
        table: {
          headers: ["Прилагательное", "Сравнительная степень"],
          rows: [
            ["bom (хороший)", "melhor (лучше)"],
            ["mau (плохой)", "pior (хуже)"],
            ["grande (большой)", "maior (больше)"],
            ["pequeno (маленький)", "menor (меньше)"]
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
            ["Относительная", "o/a mais + прил.", "Ela é a mais inteligente da turma."],
            ["Относительная (нерег.)", "o/a melhor / pior", "Este é o melhor restaurante."],
            ["Абсолютная (-íssimo)", "прил. + -íssimo/a", "A comida está boníssima."],
            ["Абсолютная (muito)", "muito + прил.", "A comida está muito boa."]
          ]
        }
      },
      {
        examples: [
          { pt: "O Porto é mais frio do que Lisboa.", ru: "Порту холоднее Лиссабона." },
          { pt: "Este vinho é melhor do que aquele.", ru: "Это вино лучше того." },
          { pt: "Ela é a aluna mais inteligente da turma.", ru: "Она — самая умная ученица в классе." },
          { pt: "O exame foi facílimo.", ru: "Экзамен был очень лёгким." }
        ]
      },
      {
        note: "В европейском португальском «do que» часто сокращается до «que» в разговорной речи: «É mais alto que eu» (Он выше меня)."
      }
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
      { id: "u11_restaurante", pt: "o restaurante", ru: "ресторан", hint: "мужской род", example: "Este restaurante é o melhor." }
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
        text: "В европейском португальском местоимение обычно стоит ПОСЛЕ глагола (энклиза), присоединяясь через дефис. Перед глаголом (проклиза) — только при наличии «притягивающих» слов: não, nunca, já, ainda, também, вопросительных и отрицательных слов, союзов que, porque, quando и др."
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
        heading: "Изменение формы после глагола",
        text: "Когда глагол оканчивается на -r, -s, -z, местоимения o/a/os/as принимают форму lo/la/los/las. Когда глагол оканчивается на -m или носовой звук, они принимают форму no/na/nos/nas."
      },
      {
        examples: [
          { pt: "Eu vejo-o. (Я его вижу.)", ru: "Я его вижу." },
          { pt: "Não o vejo. (Я его не вижу.)", ru: "Я его не вижу." },
          { pt: "Vou comprá-lo. (Я его куплю.)", ru: "Я его куплю." },
          { pt: "Eles viram-na. (Они её видели.)", ru: "Они её видели." }
        ]
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
      { id: "u12_comprar", pt: "comprar", ru: "покупать", hint: "правильный глагол -ar", example: "Vou comprá-lo." }
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
      { id: "u13_oferecer", pt: "oferecer a", ru: "дарить (кому)", hint: "eu ofereço", example: "Ofereço-te um café." }
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
        text: "Возвратные местоимения указывают, что действие направлено на самого субъекта. В словаре возвратные глаголы обозначаются с «-se» на конце."
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
        text: "В утвердительных предложениях возвратное местоимение стоит после глагола (энклиза). При отрицании и после «притягивающих» слов — перед глаголом."
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
        note: "Обратите внимание: в форме «nós» буква -s глагола отпадает перед -nos: levantamos + nos → levantamo-nos, divertimos + nos → divertimo-nos."
      }
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
      { id: "u14_pentearse", pt: "pentear-se", ru: "причёсываться", hint: "eu penteio-me", example: "Ela penteia-se ao espelho." }
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
            ["eles/elas/vocês", "o seu", "a sua", "os seus", "as suas"]
          ]
        }
      },
      {
        heading: "Уточнение «seu/sua»",
        text: "Поскольку «seu/sua» может означать «его», «её», «Ваш» или «их», для уточнения используется конструкция с «dele/dela/deles/delas»."
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
        note: "В европейском португальском артикль перед притяжательным обязателен: «o meu livro» (моя книга), а не просто «meu livro» (как в бразильском). Исключение — обращения: «Meu Deus!» (Боже мой!)."
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
      { id: "u15_irma", pt: "a irmã", ru: "сестра", hint: "мн.ч.: as irmãs", example: "A tua irmã é simpática." }
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
        note: "Внимание! В европейском португальском Pretérito Perfeito Composto НЕ соответствует английскому Present Perfect. Оно означает повторяющееся или продолжающееся действие, а не однократное завершённое. Для однократного завершённого действия используется Pretérito Perfeito Simples (следующий урок)."
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
      { id: "u16_ler", pt: "ler", ru: "читать", hint: "eu leio, причастие: lido", example: "Tenho lido muito." }
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
        examples: [
          { pt: "Ontem falei com o João.", ru: "Вчера я поговорил с Жуау." },
          { pt: "Eles foram ao cinema.", ru: "Они пошли в кино." },
          { pt: "Tu fizeste o trabalho?", ru: "Ты сделал работу?" },
          { pt: "Nós estivemos em Lisboa.", ru: "Мы были в Лиссабоне." }
        ]
      },
      {
        note: "Обратите внимание: в европейском португальском форма «nós» для -ar глаголов в Pretérito Perfeito имеет ударение: falámos (с акцентом!), в отличие от настоящего времени: falamos (без акцента). В бразильском эта разница не отмечается."
      }
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
      { id: "u17_chegar", pt: "chegar", ru: "приезжать", hint: "eu cheguei (с -gu-)", example: "Cheguei ontem." }
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
      }
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
      { pt: "a televisão", ru: "телевизор, телевидение" }
    ],
    flashcards: [
      { id: "u18_falava", pt: "falava", ru: "говорил (привычно)", hint: "Imperfeito от falar", example: "Eu falava português todos os dias." },
      { id: "u18_era", pt: "era", ru: "был (постоянно)", hint: "Imperfeito от ser (нерег.)", example: "Eu era tímido quando era criança." },
      { id: "u18_tinha", pt: "tinha", ru: "имел", hint: "Imperfeito от ter (нерег.)", example: "Eu tinha um cão." },
      { id: "u18_vinha", pt: "vinha", ru: "приходил", hint: "Imperfeito от vir (нерег.)", example: "Ele vinha cá todos os dias." },
      { id: "u18_antigamente", pt: "antigamente", ru: "раньше", hint: "маркер Imperfeito", example: "Antigamente não havia internet." },
      { id: "u18_enquanto", pt: "enquanto", ru: "пока, в то время как", hint: "союз, маркер Imperfeito", example: "Enquanto comia, lia o jornal." },
      { id: "u18_brincar", pt: "brincar", ru: "играть", hint: "eu brincava (Imperf.)", example: "Brincávamos no jardim." },
      { id: "u18_crianca", pt: "a criança", ru: "ребёнок", hint: "мн.ч.: as crianças", example: "As crianças brincavam no parque." }
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
      { id: "u19_passaro", pt: "o pássaro", ru: "птица", hint: "мн.ч.: os pássaros", example: "Os pássaros cantavam." }
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
            ["ser", "fora", "fora", "foram"],
            ["ter", "tivera", "tivera", "tiveram"],
            ["estar", "estivera", "estivera", "estiveram"],
            ["fazer", "fizera", "fizera", "fizeram"],
            ["dizer", "dissera", "dissera", "disseram"],
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
      { id: "u20_perceber", pt: "perceber", ru: "понимать, замечать", hint: "eu percebi (Perf.)", example: "Percebi que tinha esquecido as chaves." }
    ]
  }
];
