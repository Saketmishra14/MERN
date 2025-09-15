const express=require("express")
const app=express()
const Listing=require("./Models/listing.js")
const path=require("path")
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")

const mongoose=require("mongoose")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"/public")));

main()
.then(()=>console.log("Database is connected."))
.catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}
app.get("/",(req,res)=>{
    res.send("this is root page")
})
//index route
app.get("/listings",async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings})
})
//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")

})
//Show Route
app.get("/listings/:id",async (req,res)=>{
    const {id}=req.params
    const listing=await Listing.findById(id)
    res.render("listings/show.ejs",{listing})
})
//Create route
app.post("/listings",async(req,res)=>{
    // const {title,description,image,location,country,price}=req.body;
    const newListing=new Listing(req.body.listing)
    await newListing.save()
    res.redirect("/listings")
})
//Edit Route
app.get("/listings/:id/edit",async(req,res)=>{
    const {id}=req.params
    const listing=await Listing.findById(id)
    res.render("listings/edit.ejs",{listing})
})
//update Route
app.put("/listings/:id",async(req,res)=>{
    const {id}=req.params
     await  Listing.findByIdAndUpdate(id,{...req.body.listing},{new:true})
    res.redirect(`/listings/${id}`)
})
//Delete Route
app.delete("/listings/:id",async(req,res)=>{
    const {id}=req.params
    await Listing.findByIdAndDelete(id)
    res.redirect("/listings")
})





app.listen(8000,()=>console.log("server is up baby....!"))




// app.get("/testlistings",(req,res)=>{
//     const newListing=new Listing({
//         title:"My new villa",
//         description:"By the Beach",
//         price:7000,
//         location:"goa",
//         country:"India"
//     });
//     newListing.save()
//     res.send("successful list testing")

// })