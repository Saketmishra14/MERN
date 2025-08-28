import http from 'http'

const server=http.createServer((req,res)=>{
    res.write("<h1>home page</h1>");
})

server.listen(8000,()=>console.log("server is up!..."));