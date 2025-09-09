//connect mongoose to js file

//first step-: require mongoose
const mongoose=require("mongoose") 

    main().then((res)=>console.log("database connected...!"))
    .catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/college")
}

//second step -:create schema

const studentSchema=new mongoose.Schema({
    name:String,
    class:String,
    ispresent:Boolean,
    RollNo :Number
})

//third step -:create model
const Student=mongoose.model("Student",studentSchema)

const Teacher=mongoose.model("Teacher",studentSchema)

//update data from dbs
// Student.updateOne({name:"saket"},{name:"puchu"}).then(data=>console.log(data)).catch(err=>console.log(err))

//Teacher.updateMany({name:"naveen sharma"},{ispresent:false}).then(data=>console.log(data)).catch(err=>console.log(err))

Student.findOneAndUpdate({name:"puchu"},{name:"saket"},{new:true}).then(data=>console.log(data)).catch(err=>console.lgo(err))

//finding teacher data
// Teacher.findById("68bfd788af5fc144b4c07c6f")
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//finding student data
// Student.findOne({RollNo:{$gt:50}})
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//insert data in collection

// const Student3=new Student({name:"ayush",class:"B.TECH",ispresent:false,RollNo:23})
// const Student4=new Student({name:"someone",class:"B.com",ispresent:true,RollNo:18})

// const teacher=Teacher.insertMany([
//     {name:"naveen",class:"hod",ispresent:true,RollNo:1},
//     {name:"nav",class:"od",ispresent:true,RollNo:10},
//     {name:"veen",class:"ho",ispresent:true,RollNo:19},
//     {name:"sweta",class:"third",ispresent:true,RollNo:100}
// ]).then(data=>console.log(data))
// .catch(err=>console.log(err))
