'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      this.FlightSchedules =
        this.hasMany(models.FlightSchedule);
    }
  }
  Airplane.init({
    planeModel: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};