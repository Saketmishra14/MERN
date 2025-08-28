import http from "http"
import fs from "fs"

//create server
const app=http.createServer((req,res)=>{

    if(req.url==='/'){
         res.writeHead(200,"good",{"content-type":"text/html"});
        fs.readFile('public/home.html',(error,data)=>{
            if(error) throw error;
            else{
                res.end(data);
            }
        });

    }else if(req.url==='/about'){
        res.writeHead(200,"excellent",{"content-type":"text/html"});
        fs.readFile('public/about.html',(error,data)=>{
            if(error) throw error;
            else{
                res.end(data);
            }
        });

    }else{
        res.end("<h1>404 page not found</h1>");
    }

});

//listen server
app.listen(8000,()=>console.log("server is up baby!..."));