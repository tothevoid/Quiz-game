'use strict';
var name = 'question'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(name, { 
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    text: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.INTEGER,
      references: {
          model: 'category',
          key: 'id', 
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, 
  {
    freezeTableName: true,
    tableName: name,
    timestamps: false, 
    paranoid: false,
    underscored: true,
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(name);
  }
};
