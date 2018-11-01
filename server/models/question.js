'use strict';
var name = "question"

module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define(name, {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    text: {
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
    question.hasMany(models.answer); 
  };
  return question;
};