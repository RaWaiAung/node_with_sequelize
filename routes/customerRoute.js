const express = require("express");
const customerRoute = express.Router();
const { findAllCustomer } = require("../controller/customerController");

customerRoute.get("/find", findAllCustomer);

module.exports = customerRoute;
