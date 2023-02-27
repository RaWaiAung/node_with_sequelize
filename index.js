const express = require("express");
const app = express();
const models = require("./models");
models.sequelize.sync().then(function () {
    console.log("> database has been synced");
}).catch(function (err) {
    console.log(" > there was an issue synchronizing the database", err);
});
app.get('/', function (req, res) {
    res.send("Welcome to Avalon Airlines!");
});
app.listen(3000, function () {
    console.log("> express server has started");
});