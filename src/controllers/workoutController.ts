import { Request,Response } from "express";
import Workout from "../database/models/workout";


//get all workout

export const getAllWorkouts = async (req:Request, res:Response)=>{
 try{
        const workouts= await Workout.find()
        res.json(workouts)
 }catch(error){
    res.status(500).json({ error:'failed to fetch workouts'})
 }
}

// get one workout
export const getOneWorkout = async (req:Request,res:Response)=>{
    try{
        const {id}= req.params
        const workout = await Workout.findById(id)

        if (!workout){
            res.json(404).json({ error:'workout not found'})
            return
        }

        res.status(201).json(workout)

    }catch(error){
        res.status(500).json({error:'failed to fetch workout'})
    }
}


// create workout
export const createWorkout = async(req:Request,res:Response)=>{
    try{
    const { type,duration,caloriesB} = req.body
    const workout = new Workout({type,duration,caloriesB})
    await workout.save()
    res.status(203).json(workout)

    } catch(error){
             res.status(500).json({error:'failed to create workout'})
   }
}

//update workout
export const updateWorkout = async (req:Request,res:Response)=>{
    try{
        const {id} =req.params
        const {type,duration,caloriesB} =req.body
        const workout= await Workout.findByIdAndUpdate(
            id,
            { type,duration,caloriesB },
            { new:true}
        )
        res.json(workout)
       
    }catch(error){
        res.status(500).json({error:'failde to update workout'})
    }
}



//delete workout
export const deleteWorkout = async (req:Request, res:Response)=>{
    try{
        const {id}=req.params
        await Workout.findByIdAndDelete(id)
        res.status(204).send()
    }catch(error){
        res.status(500).json({error:'failed to delete workout'})
    }
    res.send(`deleted workout with Id ${req.params.id}`)
}