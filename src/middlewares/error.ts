import { Request,Response,NextFunction } from "express";


// error handling middleware
export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
console.error('Error occurred:', err.message)

res.status(500).json({error: ' Something wet wrong! '})
}


// 404 middlware
export const notFoundHandler=(req:Request, res:Response)=>{
    res.status(404).json({error:'Route not found'})
}