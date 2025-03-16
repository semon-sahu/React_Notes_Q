
import { Outlet } from "react-router-dom"
import Navbar1 from "./Navbar1"
import Footer from "./Footer"
// import Menu from "./Menu"

function Layout() {


  return (
    <>
        <Navbar1 />
        <Outlet />
         {/* <Menu/> */}
        <Footer />

 
    </>
  )
}

export default Layout