import express from "express"

//string path
const server=express();
    // server.get("/abcd",(req,res)=>{
    //     res.send("<h1>this page shows for acd or abcd ....</h1>");
    // })

    //regex
    // server.get(/x/,(req,res)=>{
    //     res.send("<h1>in this letter x is present </h1>");
    // })


    //nested routes
    // server.get("/product/products/product-detail",(req,res)=>{
    //     res.send("this page open for this location product/products/product-detail");
    // })

    //double call back function
    //use of next call back function
    // server.get("/double-cb",(req,res,next)=>{
    //     console.log("first callback");
    //     next();
    // },(req,res)=>{
    //     console.log("second callback");
    //     res.send("<h1>this page is second call back </h1>");
    // });



    //array call back function

    const arr1=(req,res,next)=>{
        console.log("first call");
        next();
    }
    const arr2=(req,res,next)=>{
        console.log("second call")
        next();
    }
    const arr3=(req,res,next)=>{
        console.log("third call");
        res.send("this is call back array function page")
    }

    server.get("/array-cb",[arr1,arr2,arr3]);

    server.listen(8000,()=>console.log("server is up baby!..."));

// server.get("/",(req,res)=>{
//     res.send("<h1>welcome to home page</h1>");
// });

// server.get("/about",(req,res)=>{
//     res.send("<h1>welcome to about page</h1");
// });

// server.get("/contact",(req,res)=>{
//      res.send("welcome to contact page");
// });


// server.listen(8000,()=>console.log("server is up baby!...."));

//HTTP methods 
//get -:retrieve data
//post -:insert data
//patch -:partially update data
//delete -:delete data
//all -:any http req method
//put -:completelly update data

