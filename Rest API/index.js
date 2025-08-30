import express from 'express'
import path from "path"
//import data from "./module/data.js"
const app=express()

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"veiws"))
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("home page");
})

app.get("/posts",(req,res)=>{

})

app.listen(8000,()=>console.log("server is up baby!....."))