const express = require("express");
const app = express();
const models = require("./models");
const airplane = models.Airplane;
models.sequelize
  .sync({ force: true })
  .then(function () {
    console.log("> database has been synced");
  })
  .catch(function (err) {
    console.log(" > there was an issue synchronizing the database", err);
  });
app.get("/", async (req, res) => {
  const result = await airplane.create({
    planeModel: "airKBZ",
    totalSeats: 100,
    totalPassengers: 100,
  });
  res.send({ result });
});
app.listen(3000, function () {
  console.log("> express server has started");
});
