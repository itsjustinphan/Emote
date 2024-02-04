import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

//Renders the navbar which will always be present at the top of the page.
export default function NavBar() {
  return (
    <>
    <div>
      {/* <Navbar bg="light" variant="light" expand="md" aria-label="NavBar"> */}
      <Navbar className="color-nav" aria-label="NavBar">
        {/* <Container> */}
          <Navbar.Brand>Emote.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} aria-label="Home Page" to="">Home</Nav.Link>
              <Nav.Link as={Link} aria-label="About" to="/About">About</Nav.Link>
              <Nav.Link as={Link} aria-label="Quiz" to="/Quiz">Quiz</Nav.Link>
              {/* <Nav.Link as={Link} aria-label="Resources" to="/Resources">Resources</Nav.Link> */}

              <Dropdown>
              
              <Dropdown.Toggle aria-label="Resources" className="color-nav" id="dropdown-button-dark-example1" variant="secondary">
                <div className="dropdown-name-full">Resources</div> 
              </Dropdown.Toggle>
              <Dropdown.Menu className="color-nav" id="dropdown-button-dark-example1">
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-1" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Perfectionist</NavLink> */}
                  <Nav.Link as={Link} aria-label="Happy" to="/Happy" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <p className="dropdown-text">Happy</p>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-2" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Superhero</NavLink> */}
                  <Nav.Link as={Link} aria-label="Sad" to="/Sad" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <p className="dropdown-text">Sad</p>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-3" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Genius</NavLink> */}
                  <Nav.Link as={Link} aria-label="Anger" to="/Anger" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <p className="dropdown-text">Anger</p>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-4" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Soloist</NavLink> */}
                  <Nav.Link as={Link} aria-label="Stress" to="/Stress" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <p className="dropdown-text">Stress</p>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-5" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Expert</NavLink> */}
                  <Nav.Link as={Link} aria-label="Fear" to="/Fear" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <p className="dropdown-text">Fear</p>
                  </Nav.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


              
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      </div>
    </>
  );
}