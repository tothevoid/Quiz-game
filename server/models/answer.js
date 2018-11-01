var name = 'answer'

module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define(name, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    correct:{
      allowNull: false,
      type: DataTypes.BOOLEAN,
    }
  }, {
    freezeTableName: true,
    tableName: name,
    timestamps: false, 
    paranoid: false,
    underscored: true,
  });
  answer.associate = function(models) {
    answer.belongsTo(models.question);
  };
  return answer;
};