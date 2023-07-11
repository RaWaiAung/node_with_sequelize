"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BoardingTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Customer = this.belongsTo(models["Customer"]);
      this.FlightSchedule = this.belongsTo(models["FlightSchedule"]);
    }
  }
  BoardingTicket.init(
    {
      seat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BoardingTicket",
    }
  );
  return BoardingTicket;
};
