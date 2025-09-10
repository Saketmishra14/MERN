const mongoose=require("mongoose")
const chat=require("./models/chat.js")

main()
.then(()=>console.log("database is connected"))
.catch(err=>console.log(err))
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChat= [
    {
    from:"saket",
    to:"ayush",
    msg:"hello ayush saket this side",
    created_at:new Date()
},
{
    from:"ayush",
    to:"saket",
    msg:"preparing for exam",
    created_at:new Date()
},
{
    from:"amit",
    to:"kimti",
    msg:"let's go visit jaipur",
    created_at:new Date()
},
{
    from:"naveen",
    to:"saket",
    msg:"saked this side from b.tech cse branch",
    created_at:new Date()
},
{
    from:"ashutosh mishra",
    to:"naveen sharma",
    msg:"u are gay",
    created_at:new Date()
}
]

//chat save first
chat.insertMany(allChat).then(data=>console.log(data)).catch(err=>console.log(err))
