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
        validate: {
          notEmpty: true,
          msg: 'Please Enter Your Name'
        }
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
          msg: 'Please provid valid email format'
        }
      },
    },
    {
      sequelize,
      freezeTableName: true,
    }
  );
  return Customer;
};
