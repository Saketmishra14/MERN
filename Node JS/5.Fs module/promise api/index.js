import * as fs from "fs/promises"

//folder create in software 
// try{
//    await fs.mkdir('c:\\nodejs\\course\\redux\\toolkit',{recursive: true})
//    console.log("folder created...")
// }
// catch(error){
//     console.log(error)
// }

//read the content in directory

// try{
//     const files=await fs.readdir("c:\\nodejs");
//     for(let file of files){
//         console.log(file);
//     }
// }
// catch(error){
//     console.log(error);
// }

//remove the directory 

// try{
//     await fs.rmdir("c:\\nodejs")
//     console.log("directory removed");
// }
// catch(error){
//     console.log(error)
// }

//create and write files

// try{
//     await fs.writeFile("readme.md","hello world");
// }
// catch(error){
    
// }


//read file
// try{
//     const data=await fs.readFile("readme.md","utf-8");
//     console.log(data)
// }catch(error){

// }

//append file
// try{
//     await fs.appendFile("readme.md","saket is the best mern stack developer")
// }
// catch(error){}

//copy file
try{
    await fs.copyFile('readme.md','saket.txt')
}
catch(error){
    
}