import { Link ,Outlet } from "react-router-dom"




function Layout(){
return(
    <>
     <nav className="navbar"> 
        <h1>logo</h1>
        <ul>


            <li> <Link to="/" style={{textDecoration:"none"}} >Home</Link></li>
            <li><Link to="about" style={{textDecoration:"none"}}>About</Link></li>
            <li><Link to="services" style={{textDecoration:"none"}}>Services</Link></li>
        </ul>


        </nav>
        
    <Outlet/>



        <h1 className="footer">footer</h1>
    

    
    </>


)

}
export default Layout