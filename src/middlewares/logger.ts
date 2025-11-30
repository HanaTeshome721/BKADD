import { Request,Response, NextFunction } from "express";

// logging middleware

export const logger =(req:Request,res:Response,next:NextFunction)=>{
    console.log(`Requst Method: ${req.method}, Requst Url: ${req.url}`)
    next()
}