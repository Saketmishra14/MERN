"use client"
import React from 'react';
import {useState,useEffect} from 'react';
const Data = () => {
    const [product,setproduct]=useState([]);

    useEffect(()=>{
        async function fetchdata(){
            let data=await fetch("https://jsonplaceholder.typicode.com/todos/1");
            data= await data.json();
            setproduct(data);
            console.log(data)
        }
        fetchdata();
    },[]);
  return (
    <div> Data</div>
  )
}
export default Data