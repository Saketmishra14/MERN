import express from "express"
import cors from "cors"

const app=express()

// app.get("/contact",(req,res)=>{
//     res.send("all contact");

// });
// app.post("/contact",(req,res)=>{
//     res.send("add new contact")

// });
// // app.patch("/contact",(req,res)=>{

// // });
// app.put("/contact",(req,res)=>{
//     res.send("update contact")

// });
// app.delete("/contact",(req,res)=>{
//     res.send("delete contact")

// });

//refactor the code

app.route("/about")
.get((req,res)=>{res.send("get request")})
.post((req,res)=>{res.send("post request")})
.put((req,res)=>{res.send("put request")})
.delete((req,res)=>{res.send("delete request")});


app.listen(8000,()=>console.log("server is up baby!...."));
