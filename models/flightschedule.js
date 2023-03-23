"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FlightSchedule extends Model {
    static associate(models) {
      this.Airplane = this.belongsTo(models["Airplane"]);
      this.BoardingTickets = this.hasMany(models["BoardingTicket"]);
    }
  }
  FlightSchedule.init(
    {
      originAirport: DataTypes.STRING,
      destinationAirport: DataTypes.STRING,
      departureTime: DataTypes.DATE,
    },
    {
      sequelize,
      freezeTableName: true
    }
  );
  return FlightSchedule;
};
