'use strict';
var name = "question"

module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define(name, {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
    },
    text: {
        allowNull: false,
        type: DataTypes.STRING,
    }, 
    correct_answer: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    incorrect1: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    incorrect2: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    incorrect3: {
        allowNull: false,
        type: DataTypes.STRING,
    }
  }, {
    freezeTableName: true,
    tableName: name,
    timestamps: false, 
    paranoid: false,
    underscored: true,
  });
  question.associate = function(models) {
    question.hasOne(models.category, { as: "category" }); 
  };
  return question;
};