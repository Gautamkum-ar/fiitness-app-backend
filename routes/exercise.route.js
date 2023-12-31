import express from "express";
import {
	addExercise,
	deleteExercise,
	getAllExercise,
} from "../controller/habit.controller.js";

const Router = express.Router();

Router.get("/exercises/exercises", getAllExercise);
Router.post("/exercises/add-exercise", addExercise);
Router.delete("/exercises/:exerciseId", deleteExercise);

export default Router;
