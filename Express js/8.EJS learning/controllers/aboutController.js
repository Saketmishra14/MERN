const aboutController=(req,res)=>{
    const data={
        name:"yash",
        userId:40
    }
    res.render("about",data)
}

export {aboutController}