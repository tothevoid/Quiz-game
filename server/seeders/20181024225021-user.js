const uuidv4 = require('uuid/v4');
'use strict';

var name = "user"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name, [
      {
        id: uuidv4(),
        name: 'Vedi',
        img: '1.svg',
      },
      {
        id: uuidv4(),
        name: 'Veni',
        img: '2.svg',
      },
      {
        id: uuidv4(),
        name: 'Vici',
        img: '3.svg',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
