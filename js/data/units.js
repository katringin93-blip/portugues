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
