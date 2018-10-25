'use strict';
var name = 'question'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(name, { 
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    category: {
      allowNull: false,
      type: Sequelize.STRING
    }, 
    text: {
      allowNull: false,
      type: Sequelize.STRING,
    }, 
    correct_answer: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    incorrect1: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    incorrect2: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    incorrect3: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.UUID,
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
