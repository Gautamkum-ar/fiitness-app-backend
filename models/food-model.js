import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
	foodName: {
		type: String,
		required: true,
	},
	calories: {
		type: Number,
		required: true,
	},
});
