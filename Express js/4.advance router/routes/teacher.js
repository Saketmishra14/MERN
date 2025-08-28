import express from 'express'
const app=express.Router();

app.get("/all",(req,res)=>{
    res.send("all teachers");
})

app.post("/create",(req,res)=>{
    res.send("create new teacher in db");
})

app.put("/update",(req,res)=>{
    res.send("update teache ");
})

app.delete("/delete",(req,res)=>{
    res.send("delete teacher from db");
})

export default app;