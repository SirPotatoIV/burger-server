const Sequelize = require('sequelize')
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
  class Hamberders extends Model {}
  Hamberders.init({
    // attributes
    hamberder_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
      // allowNull defaults to true
    }
  }, {
      sequelize,
      modelName: 'Hamberders'
      // options
  });
  Hamberders.sync();
  return Hamberders;
};