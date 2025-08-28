//create folder
//npm init -y
//npm install nodemon
//npm i express
//create instance express
//provide prot :8000
import express from "express"

//make instance of exprress

const app=express();

//you don't worry about this code
app.get("/",(req,res)=>{
    res.send("welcome to express js..")

})

//listen the port 
app.listen(8000,console.log("server is up baby!...."));