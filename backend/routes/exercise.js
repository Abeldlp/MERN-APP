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

//Get specific exercise from database
route.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
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

//Delete a specific exercise
route.delete("/:id", async (req, res) => {
  try {
    const removedExercise = await Exercise.remove({ _id: req.params.id });
    res.json(`The exercise has been deleted succesfully`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Updates a specific exercise from the database
route.post("/update/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      (exercise.username = req.body.username),
        (exercise.description = req.body.description),
        (exercise.duration = Number(req.body.duration)),
        (exercise.date = Date.parse(req.body.date));

      exercise
        .save()
        .then(() => res.json(`Exercise updated`))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});
module.exports = route;
