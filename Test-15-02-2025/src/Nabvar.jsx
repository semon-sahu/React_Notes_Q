
import img1 from './Image/logo.webp';
import Home from "./Home";
import About from "./Abbout";
import Contact from "./Contact";


import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";

function Navbar(){

    return(
        <>
        
        <div className='nav'>
        <img src={img1} width={100} height={100}/>
        <ul>
            <li>Home <IoMdHome /></li>
            <li>About <FcAbout /></li>
            <li>Contact <BiSolidContact /></li>

        </ul>

        </div>

        <Home/>
        <About/>
        <Contact/>
        </>
    )
}
export  default Navbar;
