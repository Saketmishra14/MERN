const mongoose =require("mongoose")

main()
.then(console.log("database connected....!"))
.catch(err=>console.log(err))


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

//create schema
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:30
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:[1,"The price is too low for amazon"]
    },
    discount:{
        type:Number,
        default:10
    },
    category:{
        type:String,
        //schema type options
        enum:["fictional","non-fictional"]
    },
    genre:[String]
})

//create model
const Book=mongoose.model("Book",bookSchema)

const Book1=new Book({
    title:"Mathematics XII",
    author:"Rd sharma",
    price:150,
    discount:50,
    category:"fictional",
    genre:["comic","adventure","fight"]
})

Book1.save().then(data=>console.log(data)).catch(err=>console.log(err))