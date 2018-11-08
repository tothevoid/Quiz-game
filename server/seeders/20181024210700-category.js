'use strict';
var name = "category";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name,
    [
  {
    "id": 1,
    "name": "Кулинария",
    "img": ""
  },
  {
    "id": 2,
    "name": "Сериалы",
    "img": ""
  },
  {
    "id": 3,
    "name": "Естественные науки",
    "img": ""
  }
]
    ,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
