// import express ,{Request,Response,json} from 'express'

// import mongoose from 'mongoose';

// const app=express();

// mongoose.connect('mongodb://localhost:27017/stopCG').then((result)=>{

// }).catch((error)=>{
//     console.log("error occur")
// })


// // schema
// const workoutschema= new mongoose.Schema({
//     type:String,
//     duration:Number,
//     caloriesb:{type:Number,defualt:0},
//     date:{type:Date ,default:Date.now}
// })

// //model
// const Workout =mongoose.model('Workout',workoutschema)

// app.use(json())

// //crude opreation
// app.post('/mon',async(req:Request,res:Response)=>{
//     const { type,duration ,caloriesb} =req.body;
//     const workout= new Workout({type,duration,caloriesb})
//     await workout.save();
//     res.status(201).json(workout)
// })

// //read
// app.get('/mon', async (req:Request,res:Response) =>{
//     const workouts= await Workout.find()
//     res.json(workouts)
// })

// //update

// app.put('/mon/:id',async(req:Request,res:Response)=>{
//     const { id} =req.params;
//     const {type,duration,caloriesb}=req.body;
//     const workout =await Workout.findByIdAndUpdate(
//         id,
//         {type,duration,caloriesb},
//         {new:true}
//     );
//     res.json(workout)


// })

// app.delete('/mon/:id',async(req:Request,res:Response)=>{
//     const {id}=req.params
//     await Workout.findByIdAndDelete(id);
//     res.status(204).send()
// })

// app.listen(3000,()=>{
//     console.log("hello foromfeof")
// })



// before deploy code


// import app from "./app";
// import connectToMongoDb from "./database/mongoose";

// const PORT =3000

//  connectToMongoDb()


// app.listen(PORT,()=>{
//     console.log(`serverrunninig${PORT}`)
// })



//for deploying 
import app from "./app";
import { Request,Response } from "express";
import {PORT} from "./config"

app.get('/hello' , (req:Request,res:Response)=>{
    res.send({message:"helloe w re dned"})
})

app.listen(PORT,()=>{
    console.log(`server running ${PORT}`)
})