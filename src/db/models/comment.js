"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.sighting);
    }
  }
  comment.init(
    {
      content: DataTypes.STRING,
      sightingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comment",
      underscored: true,
    }
  );
  return comment;
};
