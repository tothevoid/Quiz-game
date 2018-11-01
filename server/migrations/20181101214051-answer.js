'use strict';
var name = 'answer'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(name, { 
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    correct: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    question_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'question',
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
