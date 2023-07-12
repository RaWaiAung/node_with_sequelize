const express = require("express");
const app = express();
const allRouter = require("./routes/index");
const models = require("./models");
const { ValidationError } = require("sequelize");
const airplane = models.Airplane;
const FlightSchedule = models.FlightSchedule;
const employee = models.employee;
const task = models.task;
models.sequelize
  .sync()
  .then(function () {
    console.log("> database has been synced");
  })
  .catch(function (err) {
    console.log(" > there was an issue synchronizing the database", err);
  });

app.use("/api/v1", allRouter);

app.get("/", async (req, res) => {
  try {
    const result = await FlightSchedule.create({
      originAirport: "JFK",
      destinationAirport: "MIA",
      departureTime: "2020-2-2",
    });
    if (result) {
      res.send({ result });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.errors);
    }
  }
});

app.listen(3000, function () {
  console.log("> express server has started");
});
