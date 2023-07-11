"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Airplanes", [
      {
        planeModel: "Airbus A220-100",
        totalSeats: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        planeModel: "Airbus A222-100",
        totalSeats: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        planeModel: "Airbus A223-100",
        totalSeats: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        planeModel: "Airbus A224-100",
        totalSeats: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        planeModel: "Airbus A737-100",
        totalSeats: 85,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airplanes", null, {});
  },
};
