const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// create new
const WorkSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: {
    type: Array,
    default: [],
  },
});

const Workout = mongoose.model("Workout", WorkSchema);

module.exports = Workout;
