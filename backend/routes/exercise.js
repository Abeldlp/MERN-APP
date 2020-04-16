const express = require("express");
const Exercise = require("../models/Exercise");

const route = express.Router();

//Get all user from the Database
route.get("/", async (req, res) => {
  try {
    const exercise = await Exercise.find();
    res.json(exercise);
  } catch (error) {
    res.sendStatus(400).json({ message: error });
  }
});

//Post a new user to the Database
route.post("/add", async (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: req.body.duration,
    date: Date.parse(req.body.date),
  });

  try {
    const savedExercise = await newExercise.save();
    res.json("Exercise Added!");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = route;
