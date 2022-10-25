const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
); // automatic time generate korbe .

module.exports = mongoose.model("Workout", workoutSchema); // ekta variable rekhe tarpor export korbo


