// import { createServer, IncomingMessage, ServerResponse } from "http";
// const server=createServer((req:IncomingMessage,res:ServerResponse)=>{
//     res.statusCode=200
//     res.setHeader('content-Type','text/plain')
//     res.end("hello")

// })

// server.listen(3000,()=>{
//     console.log("server comming")
// })
import express ,{Request,Response} from "express"

const app=express()

app.get('/',(req:Request,res:Response)=>{
    res.send("hello  lolo")
})

app.get('/product' ,(req:Request,res:Response)=>{
    res.json([
        {id:1,name:"laptop"},
        {id:2,name:"phone"},
    ])
})

app.post('/product',(req:Request,res:Response)=>{
    const newproduct={id:3,name:"tablet"}
    res.status(201).json(newproduct)
})

app.put('/product/:id',(req:Request,res:Response)=>{
    const id =req.params.id
    res.json({message :`product ${id} updated`})
})

app.delete('/product/:id',(req:Request,res:Response)=>{
    const id =req.params.id;
    res.json({message:`prodect${id} deleted`})
})

app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log("server runnin")
})