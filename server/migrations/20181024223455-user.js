'use strict';
var name = 'user'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(name,{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      img: {
        allowNull: true,
        type: Sequelize.STRING,
      }, 
      games_count: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      correct_answers: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: name,
      paranoid: false,
      underscored: true,
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(name);
  }
};
