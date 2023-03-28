"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employee extends Model { }
  employee.init(
    {
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employee",
    }
  );
  return employee;
};
