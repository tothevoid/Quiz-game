const uuidv4 = require('uuid/v4');
'use strict';

var name = "user"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name, [
      {
        id: uuidv4(),
        name: 'Me',
        img: 'https://filmhubatl.com/wp-content/uploads/2017/07/Film-Production-FilmHubATL.jpg',
      },
      {
        id: uuidv4(),
        name: 'Gerald',
        img: 'https://www.techbooky.com/wp-content/uploads/2018/05/music-staff_b1d89oyes__F0000.png',
      },
      {
        id: uuidv4(),
        name: 'Son',
        img: 'https://tvseriesfinale.com/wp-content/uploads/2013/03/showtime-tv-show-ratings-24.jpg',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
