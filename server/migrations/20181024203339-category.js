'use strict';
var name = "category"

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
        allowNull: false,
        type: Sequelize.STRING
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
