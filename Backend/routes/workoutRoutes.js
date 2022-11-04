const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getAWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const Workout = require("../model/workoutModel");
const router = express.Router();

//======= GET all WORKOUT =========>

router.get("/", getAllWorkouts);

//======= GET A SINGLE WORKOUT ==========>

router.get("/:id", getAWorkout);

//========== POST a new WORKOUT ============>

router.post("/", createWorkout);

//========== DELETE a workout ===============>

router.delete("/:id", deleteWorkout)

//==============UPDATE a WORK OUT ==================>

router.patch("/:id", updateWorkout)

module.exports = router;
