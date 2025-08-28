import http from "http"

//create server
const app=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,"good",{"content-type":"text/html"});
        res.end("<h1>this is home page</h1>");
    }else if(req.url==='/about'){
         res.writeHead(200,"good",{"content-type":"text/html"});
        res.end("<h1>this is about page</h1>");
    }else if(req.url==='/contact'){
         res.writeHead(200,"good",{"content-type":"text/html"});
        res.end("<h1>this is contact page</h1>");
    }
    else{
        res.writeHead(400,"bad",{"content-type":"text/html"});
        res.end("<h2>404 error page not found</h2>");
    }

});

app.listen(8000,()=>console.log("server is up baby!..."))