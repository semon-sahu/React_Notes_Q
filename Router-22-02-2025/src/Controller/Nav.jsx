
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';


function Navb() {
    return(
        <>



 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">
            <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link to="about">
              <Link to='about'>About</Link>
            </Nav.Link>
            <Nav.Link to="services">
              <Link to='services'>Services</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        
        </>
    )
}
export default Navb;