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
    "name": "Кора деревьев",
    "correct": 1,
    "question_id": 27
  },
  {
    "name": "Рис",
    "correct": 0,
    "question_id": 27
  },
  {
    "name": "Пшеничная мука",
    "correct": 0,
    "question_id": 27
  },
  {
    "name": "Сахар",
    "correct": 0,
    "question_id": 27
  },
  {
    "name": "Маринованая рыба",
    "correct": 1,
    "question_id": 28
  },
  {
    "name": "Томаты",
    "correct": 0,
    "question_id": 28
  },
  {
    "name": "Перец",
    "correct": 0,
    "question_id": 28
  },
  {
    "name": "Свекла",
    "correct": 0,
    "question_id": 28
  },
  {
    "name": "Греция",
    "correct": 1,
    "question_id": 29
  },
  {
    "name": "Россия",
    "correct": 0,
    "question_id": 29
  },
  {
    "name": "Италия",
    "correct": 0,
    "question_id": 29
  },
  {
    "name": "Украина",
    "correct": 0,
    "question_id": 29
  },
  {
    "name": "Чай",
    "correct": 1,
    "question_id": 30
  },
  {
    "name": "Кофе",
    "correct": 0,
    "question_id": 30
  },
  {
    "name": "Пиво",
    "correct": 0,
    "question_id": 30
  },
  {
    "name": "Пепси",
    "correct": 0,
    "question_id": 30
  },
  {
    "name": "3000 лет",
    "correct": 1,
    "question_id": 31
  },
  {
    "name": "1 год",
    "correct": 0,
    "question_id": 31
  },
  {
    "name": "6 месяцев",
    "correct": 0,
    "question_id": 31
  },
  {
    "name": "3 года",
    "correct": 0,
    "question_id": 31
  }
]
    ,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
