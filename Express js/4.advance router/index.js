import student from "./routes/student.js";
import express from "express"
import teacher from "./routes/teacher.js"

const server=express()

server.use("/students",student);
server.use("/teachers",teacher)

//listen server
server.listen(8000,()=>console.log("server is up baby!...."))