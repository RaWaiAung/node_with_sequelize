const models = require("../models");
const customer = models.Customer;

exports.findAllCustomer = async (req, res) => {
  const result = await customer.findAll();
  res.send(result);
};
