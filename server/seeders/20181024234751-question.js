const uuidv4 = require('uuid/v4');
'use strict';
var name = "question"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name, [
      {
        id: 1,
        text: "Select number 3",
        category: "1"
      },
      {
        id: 2,
        text: "Select number 4",
        category: "2"
      },
      {
        id: 3,
        text: "Select number 5",
        category: "3"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
