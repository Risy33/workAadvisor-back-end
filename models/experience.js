"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      experience.belongsTo(models.user, { foreignKey: "userId" });
      experience.belongsTo(models.workPlace, { foreignKey: "workPlaceId" });
    }
  }
  experience.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING(1000), allowNull: false },
      useful: DataTypes.INTEGER,
      status: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "experience",
    }
  );
  return experience;
};
