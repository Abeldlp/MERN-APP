const express = require("express");
const User = require("../models/User");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.sendStatus(400).json({ message: error });
  }
});

module.exports = route;
