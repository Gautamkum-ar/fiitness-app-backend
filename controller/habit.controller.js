import exerciseModel from "../models/exercise-model.js";

// @desc add new exercise
// route POST /v1/api/fitraho/exercises/add-exercise

export const addExercise = async (req, res) => {
	const { name, duration, calories } = req.body;

	try {
		const newExercise = new exerciseModel({
			name: name,
			duration: duration,
			caloriesBurned: calories,
		});
		await newExercise.save();

		return res.status(200).json({
			message: "Exercies Add successfully",
			success: true,
			data: newExercise,
		});
	} catch (error) {
		throw error;
	}
};

// @desc retrive all exercises
// route GET /v1/api/fitraho/exercises

export const getAllExercise = async (req, res) => {
	try {
		const foundExecises = await exerciseModel.find();

		return res.status(200).json({
			message: "Exercise found success",
			success: true,
			data: foundExecises,
		});
	} catch (error) {
		throw error;
	}
};

//@desc exercise by its ID
//route /v1/api/fitraho/exercise/:exerciseId

export const deleteExercise=async(req,res)=>{
    const {exerciseId}=req.params

    try {
        await exerciseModel.findByIdAndDelete({_id:exerciseId})
        return res.status(204).json({
            message:"Exercise Remove successfully",
            success:true
        })
    } catch (error) {
        throw error
        
    }
}
