const mongoose=require("mongoose")

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image: {
    type: String,
    set:(v)=>v===""?"https://images.unsplash.com/photo-1717538836473-7925f9ea6744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D":v,
},
    price:{
        type:Number,
    },
    location:{
        type:String
    },
    country:{
        type:String
    }
});
const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;