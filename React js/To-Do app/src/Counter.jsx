import { useState } from "react"

export default function Counter(){
    let [counter,setCounter]=useState(0);
    function handleIncrement(){
        setCounter((currVal)=>{
            return currVal+1;})
        setCounter((currVal)=>{
            return currVal+1;})
    }
    return(

        <div>
            <h3>Count :{counter}</h3>
            <button onClick={handleIncrement}>Increase Count</button>
        </div>
    )
}