"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.BoardingTicket = this.hasMany(models.BoardingTicket);
    }
  }
  Customer.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          msg: "A name is required for customer",
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          msg: "Invalid email format for customer",
        },
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
