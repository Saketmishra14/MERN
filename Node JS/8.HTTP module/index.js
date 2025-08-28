import http from "http";

//create server using node
const app=http.createServer((req,res)=>{
    //shorthand for status (code,message and header)
    res.writeHead(202,"good",{"content-type":"text/html"});
    res.write("<h1>server is created by using nodejs</h1>");
    
});

app.listen(8000,()=>console.log("server is up baby!..."));


    
