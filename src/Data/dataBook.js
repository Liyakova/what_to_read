const dataBook = [
    {
        id: 1,
        name: "Кэйтлин и Купидон",
        author: "Катриона Иннес",
        year: 2020,
        photo: 'book1',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },

    {
        id: 2,
        name: 'Вы друг друга стоите',
        author: 'Сара Хогл',
        year: 2021,
        photo: 'book2',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },


    {
        id: 3,
        name: 'Поменяться местами',
        author: "Бет О'Лири",
        year: 2022,
        photo: 'book3',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },

    {
        id: 4,
        name: 'Квартира на двоих',
        author: "Бет О'Лири",
        year: 2020,
        photo: 'book4',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },

    {
        id: 5,
        name: 'Пассажиры',
        author: 'Джон Маррс',
        year: 2020,
        photo: 'book5',
        category: 'ТРИЛЛЕРЫ',
    },

    {
        id: 6,
        name: 'Текст',
        author: 'Дмитрий Глуховский',
        year: 2017,
        photo: 'book6',
        category: 'ТРИЛЛЕРЫ',
    },

    {
        id: 7,
        name: 'Всё, чего я не сказала',
        author: 'Селеста Инг',
        year: 2017,
        photo: 'book7',
        category: 'ДЕТЕКТИВЫ',
    },

    {
        id: 8,
        name: 'Последняя рукопись',
        author: 'Франк Тилье',
        year: 2019,
        photo: 'book8',
        category: 'ТРИЛЛЕРЫ',
    },

    {
        id: 9,
        name: "Лунная тропа",
        author: "Сара Джио",
        year: 2016,
        photo: 'book9',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },

    {
        id: 10,
        name: 'Девять принцев Амбера',
        author: 'Роберт Желязны',
        year: 1970,
        photo: 'book10',
        category: 'ФЭНТЕЗИ',
    },

    {
        id: 11,
        name: 'Невеста ноября',
        author: 'Лия Арден',
        year: 2022,
        photo: 'book11',
        category: 'ФЭНТЕЗИ',
    },

    {
        id: 12,
        name: 'Код Да Винчи',
        author: 'Дэн Браун',
        year: 2017,
        photo: 'book12',
        category: 'ДЕТЕКТИВЫ',
    },

    {
        id: 13,
        name: 'Исчезнувшая',
        author: 'Гиллиан Флинн',
        year: 2017,
        photo: 'book13',
        category: 'ТРИЛЛЕРЫ',
    },

    {
        id: 14,
        name: 'Атлант расправил плечи',
        author: 'Айн Рэнд',
        year: 1957,
        photo: 'book14',
        category: 'КЛАССИКА',
    },

    {
        id: 15,
        name: 'Финансист',
        author: 'Теодор Драйзер',
        year: 1912,
        photo: 'book15',
        category: 'КЛАССИКА',
    },

    {
        id: 16,
        name: 'Проснись в Никогда',
        author: 'Мариша Пессл',
        year: 2018,
        photo: 'book16',
        category: 'ТРИЛЛЕРЫ',
    },

    {
        id: 17,
        name: 'Над кукушкиным гнездом',
        author: 'Кен Кизи',
        year: 1962,
        photo: 'book17',
        category: 'КЛАССИКА',
    },

    {
        id: 18,
        name: 'Сумерки',
        author: 'Стефани Майер',
        year: 2005,
        photo: 'book18',
        category: 'ФЭНТЕЗИ',
    },

    {
        id: 19,
        name: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        year: 1866,
        photo: 'book19',
        category: 'КЛАССИКА',
    },

    {
        id: 20,
        name: 'Младший брат',
        author: 'Кори Доктороу',
        year: 2010,
        photo: 'book20',
        category: 'ФАНТАСТИКА',
    },

    {
        id: 21,
        name: 'Просто люби жизнь',
        author: 'Софи Кинселла',
        year: 2022,
        photo: 'book21',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },

    {
        id: 22,
        name: 'Люди как боги',
        author: 'Герберт Уэлс',
        year: 1923,
        photo: 'book20',
        category: 'ФАНТАСТИКА',
    },

    {
        id: 23,
        name: 'К себе нежно',
        author: 'Ольга Примаченко',
        year: 2020,
        photo: 'book23',
        category: 'ПСИХОЛОГИЯ',
    },

    {
        id: 24,
        name: 'Отказываюсь выбирать',
        author: 'Барбара Шер',
        year: 2016,
        photo: 'book24',
        category: 'ПСИХОЛОГИЯ',
    },

    {
        id: 25,
        name: 'Садовые чары',
        author: 'Сара Эдисон Аллен',
        year: 2018,
        photo: 'book25',
        category: 'ЛЮБОВНЫЕ РОМАНЫ',
    },

    {
        id: 26,
        name: 'Учить пересмешника',
        author: 'Харпер Ли',
        year: 1960,
        photo: 'book26',
        category: 'КЛАССИКА',
    },

    {
        id: 27,
        name: 'Тонкое искусство пофигизма',
        author: 'Марк Мэнсон',
        year: 2017,
        photo: 'book27',
        category: 'ПСИХОЛОГИЯ',
    },

    {
        id: 28,
        name: 'Кровь эльфов',
        author: 'Анджей Сапковский',
        year: 1994,
        photo: 'book28',
        category: 'ФЭНТЕЗИ',
    },

    {
        id: 29,
        name: 'Яма',
        author: 'Александр Куприн',
        year: 1915,
        photo: 'book29',
        category: 'КЛАССИКА',
    },

    {
        id: 30,
        name: 'Бойня №5',
        author: 'Курт Воннегут',
        year: 1969,
        photo: 'book30',
        category: 'КЛАССИКА',
    },
]

export default dataBook;