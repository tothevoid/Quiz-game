'use strict';
var name = "category";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name,
    [
  {
    "id": 1,
    "name": "Естественные науки",
    "img": ""
  },
  {
    "id": 2,
    "name": "Кулнария",
    "img": ""
  },
  {
    "id": 3,
    "name": "Сериалы",
    "img": ""
  }
]
    ,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
