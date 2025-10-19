import React from 'react'
import Link from 'next/link'

const navbar = ({children}) => {
  return (
    <div>
        <ul className="login-menu ">
            <li>
                <Link href="/login">login</Link><br />
                <Link href="/login/loginuser">login user page</Link>  &nbsp;
                <Link href="/login/loginadmin">login admin page</Link>
            </li>
        </ul>
        {children}
        </div>
    

  )
}

export default navbar