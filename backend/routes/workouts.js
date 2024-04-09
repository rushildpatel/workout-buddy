const express = require("express");

const router = express.Router();
const { createWorkout, getAllWorkouts, getAWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

// middleware - requireAuth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getAWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
