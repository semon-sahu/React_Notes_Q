import{Link} from "react-router-dom"

function Navbar(){
    return (
        <>
        
        <nav className="navbar"> 
        <h1>logo</h1>
        <ul>


            <li> <Link to="/" style={{textDecoration:"none"}} >Home</Link></li>
            <li><Link to="about" style={{textDecoration:"none"}}>About</Link></li>
            <li><Link to="services" style={{textDecoration:"none"}}>Services</Link></li>
        </ul>


        </nav>
        
        </>
    )
}
export default Navbar;
