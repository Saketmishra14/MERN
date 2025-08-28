//events 
import eventemitter from "events"

//creating custom event
const Cusevent=new eventemitter();

//1.on listen/register from an event
//2.once -register for an event
//3.emit -call an event
 
Cusevent.on("response",(age,id)=>{
    console.log(`user age -: ${age} : user-id -:${id}`);
})

Cusevent.emit("response",20,12345);