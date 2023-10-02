import express from "express";
import {
	addExercise,
	deleteExercise,
	getAllExercise,
} from "../controller/habit.controller.js";

const Router = express.Router();

Router.post("/add-exercise", addExercise);
Router.get("/exercises", getAllExercise);
Router.delete("/exercises/:exerciseId", deleteExercise);

export default Router;
