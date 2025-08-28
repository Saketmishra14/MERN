//without blocking
import fs from "fs";

console.log("start");

fs.readFile("readme.md","utf-8",(err,data)=>{
    if(err) throw err;
    else{
        console.log(data);
    }
});
console.log("end")

//with blocking
