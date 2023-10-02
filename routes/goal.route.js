import express from "express";
import {
	addGoals,
	getAllGoals,
	removeAGoal,
} from "../controller/goals.controller.js";

const GoalRouter = express.Router();

GoalRouter.get("/goals", getAllGoals);
GoalRouter.post("/goals/add-goal", addGoals);
GoalRouter.delete("/goals/:goalId", removeAGoal);

export default GoalRouter;
