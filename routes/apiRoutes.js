const router = require("express").Router();
const db = require("../models");

// gets the json data from workouts api
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});
// gets the json data from  range api
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});
// posts to workouts api
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});
// pushes data to the front end
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
