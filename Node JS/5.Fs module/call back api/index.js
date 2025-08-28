
import * as fs from "fs"

await fs.mkdir('c:\\nodejs',function(error){
    if(error) throw error;
    else{
        console.log("directory created")
    }
})