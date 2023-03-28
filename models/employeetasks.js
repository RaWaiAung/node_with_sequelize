"use strict";
const { Model } = require("sequelize");
const employee = require("./employee");
const task = require("./task");

module.exports = (sequelize, DataTypes) => {
  class employeetasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.employee.belongsToMany(models.task, { through: employeetasks });
      models.task.belongsToMany(models.employee, { through: employeetasks });
    }
  }
  employeetasks.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      desc: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "employeetasks",
    }
  );
  return employeetasks;
};
