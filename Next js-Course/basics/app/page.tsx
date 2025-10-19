"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const Home = () => {
  const router =useRouter();
  const navigate=(page)=>{
    router.push(page);
  }

  return (
    <section className=''>
      <h1>
        useRouter
      </h1>
      
      <button onClick={()=>navigate("about")}>Go to about page</button><br /><br />
      <button onClick={()=>navigate("login")}>go to login page</button>

    </section>
  )
}

export default Home
