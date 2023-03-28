"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      this.FlightSchedules = this.hasMany(models.FlightSchedule);
    }
  }
  Airplane.init(
    {
      planeModel: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Planes type should not empty'
          }
        }
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: 'A plane must have at least one seat'
          }
        }
      },
      totalPassengers: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      freezeTableName: true,
    }
  );
  return Airplane;
};
