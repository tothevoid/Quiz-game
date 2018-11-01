'use strict';

var name = "answer"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name, [
      {
        name: '1',
        correct: false,
        question_id: 1
      },
      {
        name: '2',
        correct: false,
        question_id: 1
      },
      {
        name: '3',
        correct: true,
        question_id: 1
      },
      {
        name: '4',
        correct: false,
        question_id: 1
      },
      {
        name: '1',
        correct: false,
        question_id: 2
      },
      {
        name: '2',
        correct: false,
        question_id: 2
      },
      {
        name: '3',
        correct: false,
        question_id: 2
      },
      {
        name: '4',
        correct: true,
        question_id: 2
      },
      {
        name: '4',
        correct: false,
        question_id: 3
      },
      {
        name: '5',
        correct: true,
        question_id: 3
      },
      {
        name: '6',
        correct: false,
        question_id: 3
      },
      {
        name: '7',
        correct: false,
        question_id: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
