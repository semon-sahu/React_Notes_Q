
import {Col,Row,Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  

  return (
    <>
     <Navbar expand="lg" className="bg-dark ">
      <Container className="text-white">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
<Row>
  <Col lg={6}  md={6} sm={12} className="bg-success text-white p-3 ">


  {/* for  padding top =pt 
  padding botton =pb
  padding left =pl
  padding right =pr
   
   for marrgin use =m
   for margin top =mt
   for margin bottom =mb
   for margin left =ml */}

  
 <h1>First Coloumn</h1> 
  </Col>
  <Col  lg={6}md={6}sm={12} className="bg-danger  text-white p-3  ">
  <h1>Second column</h1>
  <Button variant="warning" >Click</Button>
  
  </Col>
</Row>
    </Container>
    </>
  )
}

export default App

// colour name in react
// primary
// success
// danger
// warning
// info
// light
// dark
// secondary
