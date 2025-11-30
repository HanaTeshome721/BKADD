import express from "express"

import workoutRouts from './routes/workouts'
import { logger } from "./middlewares/logger"
import { errorHandler ,notFoundHandler} from "./middlewares/error"

const app =express()

//built-in middleware to pares json
app.use(express.json())


//coustom  middler
app.use(logger)

//routes
app.use('/mon' ,workoutRouts)

app.use(errorHandler)
app.use(notFoundHandler)

export default app;