import React, {useContext} from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import TopCategory from '../TopCategory/TopCategory';
import './Header.css'


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
      logOut()
      .then( () => {})
      .catch( error => console.log(error))
    }
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
            <Nav.Link>
              {
                user?.uid ?
                <>
                <Button variant="light" onClick={handleLogOut}><Link>SignOut</Link></Button>
                <span>{user?.displayName}</span>
                
                </>
                :
                <>
                <Link className='me-3' to='/login'>Login</Link>
                <Link to='/register'>Sign Up</Link>
                </>
              }
            </Nav.Link>


            {/* <Nav.Link><Button variant="light"><Link to='/login'>Login</Link></Button></Nav.Link>
            <Nav.Link><Button variant="light"><Link to='/register'>Sign Up</Link></Button></Nav.Link> */}
            <Nav.Link>
              {user?.photoURL ?
              <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
              : <FaUser></FaUser>
            }
            </Nav.Link>
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