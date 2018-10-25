'use strict';
var name = "user"

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(name, {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    }, 
    img: {
        allowNull: true,
        type: DataTypes.STRING,
    }, 
    games_count: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    correct_answers: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  }, {
    freezeTableName: true,
    tableName: name,
    timestamps: false, 
    paranoid: false,
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};