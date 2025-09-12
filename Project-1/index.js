const express=require("express")
const app=express()

const mongoose=require("mongoose")

main()
.then(()=>console.log("Database is connected."))
.catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

app.get("/",(req,res)=>{
    res.send("this is root page")
})

app.listen(8000,()=>console.log("server is up baby....!"))