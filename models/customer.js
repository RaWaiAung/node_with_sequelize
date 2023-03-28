"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      this.BoardingTickets = this.hasMany(models.BoardingTicket);
    }
  }
  Customer.init(
    {
      name: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      freezeTableName: true,
    }
  );
  return Customer;
};
