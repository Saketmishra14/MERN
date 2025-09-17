const express=require("express")
const app=express()
const ExpressError=require("./ExpressError")

// app.use((req,res,next)=>{
//     console.log("I am 1st middleware")
//    return next()
// })
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
        throw  new ExpressError(404,"Acess denied")
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

app.get("/err",(req,res)=>{
    abcd=abcd;
})
app.get("/admin",(req,res)=>{
    throw new ExpressError(505,"Acess of admin is forbidden")
})

app.use((err,req,res,next)=>{
   let {status=505,message="some error"}=err;
   res.status(status).send(message);
})
// app.use((err,req,res,next)=>{
//     console.log("----Error2-----")
//     next()
// })

//error route request always write in last of the code
app.use((req,res)=>{
    res.status(404).send("page not found!")
})

app.listen(8000,()=>console.log("server is up baby!...."))