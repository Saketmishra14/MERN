import express from 'express'

const allstudent=(req,res)=>{
    res.send("all students...");
}
const createstu=(req,res)=>{
     res.send("create students ")
}

const updstudent=(req,res)=>{
    res.send("update students..")
}
const deletestu=(req,res)=>{
      res.send("delete students...")
}

export {allstudent,createstu,updstudent,deletestu};