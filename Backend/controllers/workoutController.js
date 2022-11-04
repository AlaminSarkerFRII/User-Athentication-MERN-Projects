const mongoose = require("mongoose");
const Workout = require("../model/workoutModel");

// ===== Get all Workout =========>

const getAllWorkouts = async (req, res) => {
  // const workouts = await Workout.find({}).sort({ _id: -1 }); // same code (both) sorting with new workout first
  const workouts = await Workout.find({}).sort({ createdAt: -1 }); // sorting with new workout first
  return res.status(200).json(workouts);
};

//======== GET a single workout==========>

const getAWorkout = async (req, res) => {
  const { id } = req.params;

  // check it a valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No valid id found" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No workout finds" });
  }
  return res.status(200).json(workout);
};

// ======= Create a workout / POST ========= >

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// ======= DELETE a workout ===========>

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  // check id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a Valid Id Found" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No workout finds" });
  }
  return res.status(200).json(workout);
};

//========== Update a workout ========>

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  // check id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " Data not Found in Workouts" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id },{
    ...req.body,
  });
  if (!workout) {
    return res.status(404).json({ error: " Data not matched" });
  }
  return res.status(200).json(workout);
};

// export all function

module.exports = {
  createWorkout,
  getAllWorkouts,
  getAWorkout,
  deleteWorkout,
  updateWorkout
};
