import mongoose from "mongoose";

//defin schema

const workoutSchema = new mongoose.Schema({

    type:{type:String ,  required:true},
    duration:{type:String,  required:true},
    caloriesb:{type:Number , defualt:0},
    date:{type:Date, defualt:Date.now()},
})

// defin model

const Workout= mongoose.model('Workout', workoutSchema);

export default Workout
