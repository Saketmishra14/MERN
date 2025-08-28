import express from 'express'
import path from 'path'
import router from './routes/route.js'

const app=express()
app.set("view engine","ejs");

app.use("/",router);

app.listen(8000,()=>console.log("server is up baby!...."))