'use strict';
var name = "answer"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name,
    [
  {
    "name": "Шесть",
    "correct": 1,
    "question_id": 1
  },
  {
    "name": "Семь",
    "correct": 0,
    "question_id": 1
  },
  {
    "name": "Пять",
    "correct": 0,
    "question_id": 1
  },
  {
    "name": "Восемь",
    "correct": 0,
    "question_id": 1
  },
  {
    "name": "Путеводный свет",
    "correct": 1,
    "question_id": 2
  },
  {
    "name": "Санта-Барбара",
    "correct": 0,
    "question_id": 2
  },
  {
    "name": "Зачарованные",
    "correct": 0,
    "question_id": 2
  },
  {
    "name": "Друзья",
    "correct": 0,
    "question_id": 2
  },
  {
    "name": "Игра престолов",
    "correct": 1,
    "question_id": 3
  },
  {
    "name": "Друзья",
    "correct": 0,
    "question_id": 3
  },
  {
    "name": "Во все тяжкие",
    "correct": 0,
    "question_id": 3
  },
  {
    "name": "Шерлок",
    "correct": 0,
    "question_id": 3
  },
  {
    "name": "Корона",
    "correct": 1,
    "question_id": 4
  },
  {
    "name": "Декстер",
    "correct": 0,
    "question_id": 4
  },
  {
    "name": "Игра престолов",
    "correct": 0,
    "question_id": 4
  },
  {
    "name": "Рим",
    "correct": 0,
    "question_id": 4
  },
  {
    "name": "Chevrolet Impala",
    "correct": 1,
    "question_id": 5
  },
  {
    "name": "Chevrolet Corvette",
    "correct": 0,
    "question_id": 5
  },
  {
    "name": "Chevrolet Camaro",
    "correct": 0,
    "question_id": 5
  },
  {
    "name": "Chevrolet Tahoe",
    "correct": 0,
    "question_id": 5
  },
  {
    "name": "Москва",
    "correct": 1,
    "question_id": 6
  },
  {
    "name": "Санкт-Петербург",
    "correct": 0,
    "question_id": 6
  },
  {
    "name": "Саратов",
    "correct": 0,
    "question_id": 6
  },
  {
    "name": "Николаев",
    "correct": 0,
    "question_id": 6
  },
  {
    "name": "4300 гр",
    "correct": 1,
    "question_id": 7
  },
  {
    "name": "2500 гр",
    "correct": 0,
    "question_id": 7
  },
  {
    "name": "7000 гр",
    "correct": 0,
    "question_id": 7
  },
  {
    "name": "500 гр",
    "correct": 0,
    "question_id": 7
  },
  {
    "name": "1",
    "correct": 1,
    "question_id": 8
  },
  {
    "name": "15",
    "correct": 0,
    "question_id": 8
  },
  {
    "name": "100",
    "correct": 0,
    "question_id": 8
  },
  {
    "name": "1000",
    "correct": 0,
    "question_id": 8
  },
  {
    "name": "Из подкрашенной карамели",
    "correct": 1,
    "question_id": 9
  },
  {
    "name": "Из стекла",
    "correct": 0,
    "question_id": 9
  },
  {
    "name": "Настоящий метамфетамин",
    "correct": 0,
    "question_id": 9
  },
  {
    "name": "Пласстмасса",
    "correct": 0,
    "question_id": 9
  },
  {
    "name": "2001",
    "correct": 1,
    "question_id": 10
  },
  {
    "name": "2003",
    "correct": 0,
    "question_id": 10
  },
  {
    "name": "2004",
    "correct": 0,
    "question_id": 10
  },
  {
    "name": "2006",
    "correct": 0,
    "question_id": 10
  },
  {
    "name": "Стивен Амелл",
    "correct": 1,
    "question_id": 11
  },
  {
    "name": "Грант Гастин",
    "correct": 0,
    "question_id": 11
  },
  {
    "name": "Майкл Скофилд",
    "correct": 0,
    "question_id": 11
  },
  {
    "name": "Бенджамин Маккензи",
    "correct": 0,
    "question_id": 11
  },
  {
    "name": "Лена",
    "correct": 1,
    "question_id": 12
  },
  {
    "name": "Ольга",
    "correct": 0,
    "question_id": 12
  },
  {
    "name": "Диана",
    "correct": 0,
    "question_id": 12
  },
  {
    "name": "Матрена",
    "correct": 0,
    "question_id": 12
  },
  {
    "name": "Погиб",
    "correct": 1,
    "question_id": 13
  },
  {
    "name": "Отказался продлевать контракт",
    "correct": 0,
    "question_id": 13
  },
  {
    "name": "Разругался со съемочной группой",
    "correct": 0,
    "question_id": 13
  },
  {
    "name": "Получил инвалиднонсть",
    "correct": 0,
    "question_id": 13
  },
  {
    "name": "Одинокий Рейнджер",
    "correct": 1,
    "question_id": 14
  },
  {
    "name": "Лунный свет",
    "correct": 0,
    "question_id": 14
  },
  {
    "name": "Рабыня Изаура",
    "correct": 0,
    "question_id": 14
  },
  {
    "name": "Санта-Барбара",
    "correct": 0,
    "question_id": 14
  },
  {
    "name": "Рабыня Изаура",
    "correct": 1,
    "question_id": 15
  },
  {
    "name": "Напряги извилины ",
    "correct": 0,
    "question_id": 15
  },
  {
    "name": "Мифы древней Греции",
    "correct": 0,
    "question_id": 15
  },
  {
    "name": "Отель",
    "correct": 0,
    "question_id": 15
  },
  {
    "name": "Азот",
    "correct": 1,
    "question_id": 16
  },
  {
    "name": "Кислород",
    "correct": 0,
    "question_id": 16
  },
  {
    "name": "Углекислый газ",
    "correct": 0,
    "question_id": 16
  },
  {
    "name": "Водород",
    "correct": 0,
    "question_id": 16
  },
  {
    "name": "Алюминий",
    "correct": 1,
    "question_id": 17
  },
  {
    "name": "Железо",
    "correct": 0,
    "question_id": 17
  },
  {
    "name": "Серебро",
    "correct": 0,
    "question_id": 17
  },
  {
    "name": "Уран",
    "correct": 0,
    "question_id": 17
  },
  {
    "name": "Вильгельм Рентген",
    "correct": 1,
    "question_id": 18
  },
  {
    "name": "Антуан Анри Беккерель",
    "correct": 0,
    "question_id": 18
  },
  {
    "name": "Эрнест Резерфорд",
    "correct": 0,
    "question_id": 18
  },
  {
    "name": "Мария Склодовская-Кюри",
    "correct": 0,
    "question_id": 18
  },
  {
    "name": "Дистиллированная вода",
    "correct": 1,
    "question_id": 19
  },
  {
    "name": "Кремний",
    "correct": 0,
    "question_id": 19
  },
  {
    "name": "Серебро",
    "correct": 0,
    "question_id": 19
  },
  {
    "name": "Хром",
    "correct": 0,
    "question_id": 19
  },
  {
    "name": "Аммиак",
    "correct": 1,
    "question_id": 20
  },
  {
    "name": "Уголь",
    "correct": 0,
    "question_id": 20
  },
  {
    "name": "Селитра",
    "correct": 0,
    "question_id": 20
  },
  {
    "name": "Сера",
    "correct": 0,
    "question_id": 20
  },
  {
    "name": "Сжиженный водород",
    "correct": 1,
    "question_id": 21
  },
  {
    "name": "Сжиженный гелий",
    "correct": 0,
    "question_id": 21
  },
  {
    "name": "Растительное масло",
    "correct": 0,
    "question_id": 21
  },
  {
    "name": "Вода",
    "correct": 0,
    "question_id": 21
  },
  {
    "name": "Вольфрам",
    "correct": 1,
    "question_id": 22
  },
  {
    "name": "Титан",
    "correct": 0,
    "question_id": 22
  },
  {
    "name": "Молибден",
    "correct": 0,
    "question_id": 22
  },
  {
    "name": "Хром",
    "correct": 0,
    "question_id": 22
  },
  {
    "name": "Гравитационное",
    "correct": 1,
    "question_id": 23
  },
  {
    "name": "Электрическое",
    "correct": 0,
    "question_id": 23
  },
  {
    "name": "Магнитное",
    "correct": 0,
    "question_id": 23
  },
  {
    "name": "Биополе",
    "correct": 0,
    "question_id": 23
  },
  {
    "name": "Водород",
    "correct": 1,
    "question_id": 24
  },
  {
    "name": "Гелий",
    "correct": 0,
    "question_id": 24
  },
  {
    "name": "Кислород",
    "correct": 0,
    "question_id": 24
  },
  {
    "name": "Криптон",
    "correct": 0,
    "question_id": 24
  },
  {
    "name": "Радон",
    "correct": 1,
    "question_id": 25
  },
  {
    "name": "Криптон",
    "correct": 0,
    "question_id": 25
  },
  {
    "name": "Водород",
    "correct": 0,
    "question_id": 25
  },
  {
    "name": "Гелий",
    "correct": 0,
    "question_id": 25
  },
  {
    "name": "Дождевая",
    "correct": 1,
    "question_id": 26
  },
  {
    "name": "Минеральная",
    "correct": 0,
    "question_id": 26
  },
  {
    "name": "Морская",
    "correct": 0,
    "question_id": 26
  },
  {
    "name": "Речная",
    "correct": 0,
    "question_id": 26
  },
  {
    "name": "Мышьяк",
    "correct": 1,
    "question_id": 27
  },
  {
    "name": "Ртуть",
    "correct": 0,
    "question_id": 27
  },
  {
    "name": "Цианистый Калий",
    "correct": 0,
    "question_id": 27
  },
  {
    "name": "Кураре",
    "correct": 0,
    "question_id": 27
  },
  {
    "name": "Ньютон",
    "correct": 1,
    "question_id": 28
  },
  {
    "name": "Паскаль",
    "correct": 0,
    "question_id": 28
  },
  {
    "name": "Ватт",
    "correct": 0,
    "question_id": 28
  },
  {
    "name": "Вольт",
    "correct": 0,
    "question_id": 28
  },
  {
    "name": "Люкс",
    "correct": 1,
    "question_id": 29
  },
  {
    "name": "Люмен",
    "correct": 0,
    "question_id": 29
  },
  {
    "name": "Кандела",
    "correct": 0,
    "question_id": 29
  },
  {
    "name": "Фотон",
    "correct": 0,
    "question_id": 29
  },
  {
    "name": "Кандела",
    "correct": 1,
    "question_id": 30
  },
  {
    "name": "Люкс",
    "correct": 0,
    "question_id": 30
  },
  {
    "name": "Люмен",
    "correct": 0,
    "question_id": 30
  },
  {
    "name": "Фотон",
    "correct": 0,
    "question_id": 30
  },
  {
    "name": "Статор",
    "correct": 1,
    "question_id": 31
  },
  {
    "name": "Ротор",
    "correct": 0,
    "question_id": 31
  },
  {
    "name": "Подшипник",
    "correct": 0,
    "question_id": 31
  },
  {
    "name": "Катушка",
    "correct": 0,
    "question_id": 31
  },
  {
    "name": "Торричелли",
    "correct": 1,
    "question_id": 32
  },
  {
    "name": "Паскаль",
    "correct": 0,
    "question_id": 32
  },
  {
    "name": "Ньютон",
    "correct": 0,
    "question_id": 32
  },
  {
    "name": "Декарт",
    "correct": 0,
    "question_id": 32
  },
  {
    "name": "Электрон",
    "correct": 1,
    "question_id": 33
  },
  {
    "name": "Протон",
    "correct": 0,
    "question_id": 33
  },
  {
    "name": "Нейтрон",
    "correct": 0,
    "question_id": 33
  },
  {
    "name": "Кварк",
    "correct": 0,
    "question_id": 33
  },
  {
    "name": "Скорость",
    "correct": 1,
    "question_id": 34
  },
  {
    "name": "Расстояние",
    "correct": 0,
    "question_id": 34
  },
  {
    "name": "Траектория",
    "correct": 0,
    "question_id": 34
  },
  {
    "name": "Ускорение",
    "correct": 0,
    "question_id": 34
  },
  {
    "name": "Ультразвук",
    "correct": 1,
    "question_id": 35
  },
  {
    "name": "Низкочастотный (бас)",
    "correct": 0,
    "question_id": 35
  },
  {
    "name": "Среднечастотный",
    "correct": 0,
    "question_id": 35
  },
  {
    "name": "Не существует",
    "correct": 0,
    "question_id": 35
  },
  {
    "name": "Кора деревьев",
    "correct": 1,
    "question_id": 36
  },
  {
    "name": "Рис",
    "correct": 0,
    "question_id": 36
  },
  {
    "name": "Пшеничная мука",
    "correct": 0,
    "question_id": 36
  },
  {
    "name": "Сахар",
    "correct": 0,
    "question_id": 36
  },
  {
    "name": "Маринованая рыба",
    "correct": 1,
    "question_id": 37
  },
  {
    "name": "Томаты",
    "correct": 0,
    "question_id": 37
  },
  {
    "name": "Перец",
    "correct": 0,
    "question_id": 37
  },
  {
    "name": "Свекла",
    "correct": 0,
    "question_id": 37
  },
  {
    "name": "Греция",
    "correct": 1,
    "question_id": 38
  },
  {
    "name": "Россия",
    "correct": 0,
    "question_id": 38
  },
  {
    "name": "Италия",
    "correct": 0,
    "question_id": 38
  },
  {
    "name": "Украина",
    "correct": 0,
    "question_id": 38
  },
  {
    "name": "Чай",
    "correct": 1,
    "question_id": 39
  },
  {
    "name": "Кофе",
    "correct": 0,
    "question_id": 39
  },
  {
    "name": "Пиво",
    "correct": 0,
    "question_id": 39
  },
  {
    "name": "Пепси",
    "correct": 0,
    "question_id": 39
  },
  {
    "name": "3000 лет",
    "correct": 1,
    "question_id": 40
  },
  {
    "name": "1 год",
    "correct": 0,
    "question_id": 40
  },
  {
    "name": "6 месяцев",
    "correct": 0,
    "question_id": 40
  },
  {
    "name": "3 года",
    "correct": 0,
    "question_id": 40
  },
  {
    "name": "Китай",
    "correct": 1,
    "question_id": 41
  },
  {
    "name": "Индия",
    "correct": 0,
    "question_id": 41
  },
  {
    "name": "Египет",
    "correct": 0,
    "question_id": 41
  },
  {
    "name": "Болгария",
    "correct": 0,
    "question_id": 41
  },
  {
    "name": "Стакане пепси",
    "correct": 1,
    "question_id": 42
  },
  {
    "name": "Кусочке торта",
    "correct": 0,
    "question_id": 42
  },
  {
    "name": "Стакне спрайта",
    "correct": 0,
    "question_id": 42
  },
  {
    "name": "Стакане вина",
    "correct": 0,
    "question_id": 42
  },
  {
    "name": "Белок",
    "correct": 1,
    "question_id": 43
  },
  {
    "name": "Углеводы",
    "correct": 0,
    "question_id": 43
  },
  {
    "name": "Жиры",
    "correct": 0,
    "question_id": 43
  },
  {
    "name": "Клетчатка",
    "correct": 0,
    "question_id": 43
  },
  {
    "name": "Болгария",
    "correct": 1,
    "question_id": 44
  },
  {
    "name": "Испания",
    "correct": 0,
    "question_id": 44
  },
  {
    "name": "Россия",
    "correct": 0,
    "question_id": 44
  },
  {
    "name": "Египет",
    "correct": 0,
    "question_id": 44
  },
  {
    "name": "Кончике языка",
    "correct": 1,
    "question_id": 45
  },
  {
    "name": "В начале языка",
    "correct": 0,
    "question_id": 45
  },
  {
    "name": "С левой стороны языка",
    "correct": 0,
    "question_id": 45
  },
  {
    "name": "С правой стороны языка",
    "correct": 0,
    "question_id": 45
  },
  {
    "name": "Белка",
    "correct": 1,
    "question_id": 46
  },
  {
    "name": "Углеводов",
    "correct": 0,
    "question_id": 46
  },
  {
    "name": "Соленой пищи",
    "correct": 0,
    "question_id": 46
  },
  {
    "name": "Сладкой пищи",
    "correct": 0,
    "question_id": 46
  },
  {
    "name": "Пицца",
    "correct": 1,
    "question_id": 47
  },
  {
    "name": "Бургер",
    "correct": 0,
    "question_id": 47
  },
  {
    "name": "Суши",
    "correct": 0,
    "question_id": 47
  },
  {
    "name": "Пельмени",
    "correct": 0,
    "question_id": 47
  },
  {
    "name": "Картофель",
    "correct": 1,
    "question_id": 48
  },
  {
    "name": "Баклажаны",
    "correct": 0,
    "question_id": 48
  },
  {
    "name": "Томаты",
    "correct": 0,
    "question_id": 48
  },
  {
    "name": "Сладкий перец",
    "correct": 0,
    "question_id": 48
  },
  {
    "name": "Пельмени",
    "correct": 1,
    "question_id": 49
  },
  {
    "name": "Пицца",
    "correct": 0,
    "question_id": 49
  },
  {
    "name": "Борщ",
    "correct": 0,
    "question_id": 49
  },
  {
    "name": "Паста",
    "correct": 0,
    "question_id": 49
  },
  {
    "name": "Грильяж",
    "correct": 1,
    "question_id": 50
  },
  {
    "name": "Макарун",
    "correct": 0,
    "question_id": 50
  },
  {
    "name": "Муровейник",
    "correct": 0,
    "question_id": 50
  },
  {
    "name": "Картошка",
    "correct": 0,
    "question_id": 50
  }
]
    ,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
