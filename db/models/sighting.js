'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sighting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sighting.init({
    year: DataTypes.STRING,
    month: DataTypes.STRING,
    date: DataTypes.STRING,
    report_number: DataTypes.INTEGER,
    observed: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'sighting',
    underscored: true,
  });
  return sighting;
};