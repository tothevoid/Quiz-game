'use strict';
var name = "category";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name,
    [
  {
    "id": 1,
    "name": "Естественные науки",
    "img": "1.jpg"
  },
  {
    "id": 2,
    "name": "Кулинария",
    "img": "2.jpg"
  },
  {
    "id": 3,
    "name": "Сериалы",
    "img": "3.jpg"
  }
]
    ,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
