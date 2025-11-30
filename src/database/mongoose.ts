import mongoose from "mongoose";

const connectToMongoDb = async()=>{
try{
    await mongoose.connect('mongodb://localhost:27017/stopCG')
    console.log("conncted to mongodb")
} catch(error){
    console.log("error connceting to mongodb",error)
}

}



export default connectToMongoDb