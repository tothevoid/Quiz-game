const uuidv4 = require('uuid/v4');
'use strict';
var name = "category";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(name, [
      {
        name: 'Фильмы',
        img: 'https://filmhubatl.com/wp-content/uploads/2017/07/Film-Production-FilmHubATL.jpg',
      },
      {
        name: 'Музыка',
        img: 'https://www.techbooky.com/wp-content/uploads/2018/05/music-staff_b1d89oyes__F0000.png',
      },
      {
        name: 'Сериалы',
        img: 'https://tvseriesfinale.com/wp-content/uploads/2013/03/showtime-tv-show-ratings-24.jpg',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(name, null, {});
  }
};
