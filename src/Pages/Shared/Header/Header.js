import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import TopCategory from '../TopCategory/TopCategory';
import './Header.css'


const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect className='mb-4 shadow' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='fw-bold'><Link to='/'>Digital Course</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to='/courses'>All Courses</Link></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Button variant="light"><Link to='/login'>Login</Link></Button>
            <Button variant="light"><Link to='/register'>Sign Up</Link></Button>
          </Nav>
          <div className='d-lg-none'>
            <TopCategory></TopCategory>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;