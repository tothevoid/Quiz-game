'use strict';
var name = "category"

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(name, {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    img:{
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
  category.associate = function(models) {
    
  };
  return category;
};