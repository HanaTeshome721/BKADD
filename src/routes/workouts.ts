import { Router } from "express";
import {getAllWorkouts,getOneWorkout,createWorkout,updateWorkout,deleteWorkout} from '../controllers/workoutController'


const router = Router()


/// we can do it like but for modularity
// function getAllWorkouts({

// })

//define routes

router.get('/',getAllWorkouts)
router.get('/:id',getOneWorkout)
router.post('/',createWorkout)
router.put('/:id',updateWorkout)
router.delete('/:id',deleteWorkout)



export default router;