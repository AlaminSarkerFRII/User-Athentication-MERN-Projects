const express = require("express");
const Workout = require("../model/workoutModel");
const router = express.Router();

//======= GET all WORKOUT =========>

router.get("/", (req, res) => {
  res.json({ mgs: "GET all works out" });
});

//======= GET A SINGLE WORKOUT ==========>

router.get("/:id", (req, res) => {
  res.send({ mgs: "GET a SINGLE workout " });
});

//========== POST a new WORKOUT ============>

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
     res.status(200).json(workout);
  } catch (error) {
     res.status(400).json({ error: error.message });
  }
});

//========== DELETE a workout ===============>

router.delete("/:id", (req, res) => {
  res.json({ mgs: "DELETE a WORKOUT " });
});

//==============UPDATE a WORK OUT ==================>

router.patch("/:id", (req, res) => {
  res.json({ mgs: "UPDATE  WORKOUT" });
});

module.exports = router;
