"use client"
import React from 'react'
import {useState} from 'react'

const addnewuser = () => {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmial]=useState("");

    const addnewuserhandler= async () =>{

        await fetch("http://localhost:3000/api/users")
          console.log(name,age,email)
    }
  return <div>
    <input type="text" className='w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all' onChange={e=>setName(e.target.value)} value={name} placeholder='Enter your name'/>
    <br /><br />
    <input type="number" className='w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all' onChange={e=>setAge(e.target.value)} value={age} placeholder='Enter your age' />
    <br /><br />
    <input type="text" className='w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all' onChange={e=>setEmial(e.target.value)} value={email} placeholder='Enter your Email' />

    <br />
 <button onClick={addnewuserhandler} className='bg-blue-500 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'>Add New User</button>
  </div>
}

export default addnewuser