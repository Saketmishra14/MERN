import express from "express"

const app=express();

//route params

// app.get("/about/section/:userid",(req,res)=>{
//     const data=req.params.userid;
//     res.send(`user id is -:${data}`);
// })

//destructure route params
app.get("/about/:section/:userid",(req,res)=>{
    const {section,userid}=req.params;
    res.send(`section name is-:${section} and user id is -:${userid}`)
})

//app listen
app.listen(8000,()=>console.log("server is up babay!...."))