//import data from "./product.js"
import express from 'express'
//import credentials from "./middleware/logs.js"
import path from 'path'


const app=express()


//serving static file in express
app.use(express.static("./public"));


app.get("/",(req,res)=>{
    res.sendFile(path.join(process.cwd,"./public/index.html"))
})

//middleware in depth
// app.get("/",credentials,(req,res)=>{
//     res.send("<h1>hello world bhai </h1>");
// })

//sending json file
// app.get("/color",(req,res)=>{
//     res.json(data)
// })

app.listen(8000,()=>console.log("server is up baby!...."))