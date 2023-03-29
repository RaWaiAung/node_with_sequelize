const express = require("express");
const allRouter = express.Router();
const customerRoute = require("./customerRoute");

allRouter.use("/customer", customerRoute);

module.exports =  allRouter;
