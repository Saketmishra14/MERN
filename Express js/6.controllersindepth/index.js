import student from './routes/student.js'
import express from 'express'
const app=express()

//string query

app.get("/product",(req,res)=>{
    const {category,id}=req.query;
    res.send(`product category -:${category} and the id is -:${id}`);
})
app.listen(8000,()=>console.log("server is up baby!..."));