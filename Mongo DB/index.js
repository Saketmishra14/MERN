import mongoose from "mongoose";

main()
    .then(()=>{console.log("connection successfull")})
    .catch(err=>console.log(err));


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/instagramUser")
}

//schema design 
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
});

//models
const User=mongoose.model("User",userSchema)
const Employe=mongoose.model("Employe",userSchema)

const user1=new User({
    name:"saket",
    email:"mishrasaket@gmail.com",
    age:20
})
// const user2=new User({
//     name:"ayush",
//     email:"ayushshukla@gmail.com",
//     age:20
// })
user1.save()
//user2.save()

