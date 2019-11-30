module.exports = function(sequelize, DataTypes) {
  var Recommendation = sequelize.define("Recommendation", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    IMG: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      }
  });
  return Recommendation;
};