const express=require("express")
const app=express()

app.use((req,res,next)=>{
    console.log("I am 1st middleware")
   return next()
})
// app.use((req,res,next)=>{
//     console.log("I am 2nd middleware")
//     next()
// })

//logger
// app.use( (req,res,next) => {
//     req.time=new Date(Date.now()).toString()
//     console.log(req.method,req.path,req.hostname,req.time)
//     next()
// })

//store middleware in a variable
const CheckToken=("/api",(req,res,next)=>{
    let {token}=req.query
    if(token==="giveaccess"){
        next()
    }
    else{
        throw new Error("Acess denied")
    }
})
//after /api run the checktoken 
app.get("/api",CheckToken,(req,res)=>{
    res.send("data")
})

app.get("/",(req,res)=>{
    res.send("I am root.")
})
app.get("/random",(req,res)=>{
    res.send("I am random page")
})

//error route request always write in last of the code
app.use((req,res)=>{
    res.status(404).send("page not found!")
})

app.listen(8000,()=>console.log("server is up baby!...."))