
'use client'
import react from 'react'
import { useParams } from "next/navigation";


const user=()=>{
    const params=useParams();
    console.log(params.users);
    return(
        <div>user profile page name is :{params.users}</div>
    )
}
export default user