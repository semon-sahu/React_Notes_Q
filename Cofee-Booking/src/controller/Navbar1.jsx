

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import Home from './Home';

function Navbar1() {
  return (
    <> 
    <Navbar bg="rgb(45, 28, 28)" data-bs-theme="light" className="navcontain"  >
        <Container className='Navbardiv'>
          <Navbar.Brand href="#home" style={{color:"white",fontSize:"30px",fontStyle:"oblique"}} >Caffeine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">
            <Link to="/" style={{textDecoration:"none",color:"white", fontSize:"20px"}} >Home</Link>
            </Nav.Link>
            <Nav.Link to="menu">
              <Link to="Menu" style={{textDecoration:"none",color:"white", fontSize:"20px"}}>Menu</Link>
              
              </Nav.Link>
            <Nav.Link to="about Us">
              <Link to="AboutUs" style={{textDecoration:"none",color:"white", fontSize:"20px"}}>About Us</Link>
              </Nav.Link>
            <Nav.Link to="facilities">
              <Link to="Facilities" style={{textDecoration:"none",color:"white", fontSize:"20px"}}>Facilities</Link>
              </Nav.Link>

          </Nav>
          <Nav.Link to="Login">
              <Link to="Login" style={{textDecoration:"none",color:"white", fontSize:"20px"}}>Login </Link>
              </Nav.Link>
        </Container>
      </Navbar>

    </>
  )
}
export default Navbar1;
