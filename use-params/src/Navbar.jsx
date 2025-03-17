import { Link, Outlet } from "react-router-dom"
import React from "react"

const Navbar=()=>{
    return(
        <>
        <div>
        <h1>Logo</h1>
     <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/user">User</Link></li>
    <li><Link to="/user/1">User 1</Link></li>
    <li><Link to="/user/2">User 2</Link></li>
    <li><Link to="/user/3">User 3</Link></li>
    </ul>        
     <Outlet/>
    </div>
        
        </>
    )

}
export default Navbar;