const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getAWorkout,
} = require("../controllers/workoutController");
const Workout = require("../model/workoutModel");
const router = express.Router();

//======= GET all WORKOUT =========>

router.get("/", getAllWorkouts);

//======= GET A SINGLE WORKOUT ==========>

router.get("/:id", getAWorkout);

//========== POST a new WORKOUT ============>

router.post("/", async (req, res) => createWorkout);

//========== DELETE a workout ===============>

router.delete("/:id", (req, res) => {
  res.json({ mgs: "DELETE a WORKOUT " });
});

//==============UPDATE a WORK OUT ==================>

router.patch("/:id", (req, res) => {
  res.json({ mgs: "UPDATE  WORKOUT" });
});

module.exports = router;
