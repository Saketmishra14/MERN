import express from "express"

const app=express.Router();

app.get("/all",(req,res)=>{
    res.send("all student page");
});
app.post("/create",(req,res)=>{
    res.send("create students");
});
app.put("/update",(req,res)=>{
    res.send("student update");
});

app.delete("/delete",(req,res)=>{
    res.send("delete student");
});

export default app;
