const express = require("express");
const app = express();
const allRouter = require("./routes/index");
const models = require("./models");
const employee = models.employee;
const airplane = models.Airplane;
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
  const result = await airplane
    .create({
      planeModel: "",
      totalSeats: 0,
    })
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err.message);
    });
  res.send({ result });
});

app.listen(3000, function () {
  console.log("> express server has started");
});
