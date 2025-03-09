

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import Home from './Home';

function Navbar1() {


  return (
    <>
    
    <Navbar bg="light" data-bs-theme="light" >
        <Container className='Navbardiv' >
          <Navbar.Brand href="#home" >Caffeine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">
            <Link to="/">Home</Link> 
            </Nav.Link>
            <Nav.Link to="menu">
              <Link to="Menu">Menu</Link>
              
              </Nav.Link>
            <Nav.Link to="about Us">
              <Link to="AboutUs">About Us</Link>
              </Nav.Link>
            <Nav.Link to="facilities">
              <Link to="Facilities">Facilities</Link>
              </Nav.Link>

          </Nav>
          <Nav.Link to="Sign in">
              <Link to="Sign in">Sign in </Link>
              </Nav.Link>
        </Container>
      </Navbar>

    </>
  )
}

export default Navbar1