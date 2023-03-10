'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardingTicket extends Model {
    static associate(models) {
      this.Customer = this.belongsTo(models['Customer']);
      this.FlightSchedule = this.
        belongsTo(models['FlightSchedule']);
    }
  }
  BoardingTicket.init({
    seat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoardingTicket',
  });
  return BoardingTicket;
};