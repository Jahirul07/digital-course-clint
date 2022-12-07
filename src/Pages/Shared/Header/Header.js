import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBookReader, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import TopCategory from "../TopCategory/TopCategory";
import "./Header.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Toggle from "../../Others/Toggle";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-4 shadow"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="fw-bold">
          <Link to="/">
            <span className="me-2">
              <FaBookReader></FaBookReader>
            </span>{" "}
            Digital Course
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <>
              <Link className="me-3" to="/courses">All Courses</Link>
            </>
            <><Link className="me-3" to='/faq'>FAQ</Link></>
            <>
              <Link to="/blog">Blog</Link>
            </>
          </Nav>
          <Toggle></Toggle>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <NavDropdown
                    title={
                      user?.photoURL ? (
                        <>
                        {[ 'bottom'].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                {user?.displayName}
                              </Tooltip>
                            }
                          >
                            <Image
                          style={{ height: "40px" }}
                          roundedCircle
                          src={user?.photoURL}
                        ></Image>
                          </OverlayTrigger>
                        ))}
                        </>
                        
                      ) : (
                        <FaUser></FaUser>
                      )
                    }
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/profile">Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Button variant="light" onClick={handleLogOut}>
                        <Link>SignOut</Link>
                      </Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link className="me-3" to="/login">
                    Login
                  </Link>
                  <Link to="/register">Sign Up</Link>
                </>
              )}
            </>
          </Nav>
          <div className="d-lg-none">
            <TopCategory></TopCategory>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
