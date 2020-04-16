const express = require("express");
const Customer = require("../models/Customers");

const router = express.Router();

//Get all user from the Database
router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (error) {
    res.sendStatus(400).json({ message: error });
  }
});

//Post a new user to the Database
router.post("/add", async (req, res) => {
  const newCustomer = new Customer({
    username: req.body.username,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.json(`${savedCustomer.username} has been uploaded succesfully`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
