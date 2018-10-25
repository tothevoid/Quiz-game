const uuidv4 = require('uuid/v4');
'use strict';
var name = "question"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name, [
      {
        id: uuidv4(),
        text: "Select number",
        correct_answer: "four",
        incorrect1: "one",
        incorrect2: "two",
        incorrect3: "three",
        category: "1"
      },
      {
        id: uuidv4(),
        text: "Select number",
        correct_answer: "six",
        incorrect1: "seven",
        incorrect2: "eight",
        incorrect3: "nine",
        category: "2"
      },
      {
        id: uuidv4(),
        text: "Select number",
        correct_answer: "1",
        incorrect1: "0",
        incorrect2: "0",
        incorrect3: "0",
        category: "3"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
