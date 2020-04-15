const express = require("express");
const User = require("../models/User");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.sendStatus(400).json({ message: error });
  }
});

route.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.sendStatus(400).json({ message: error });
  }
});

module.exports = route;
