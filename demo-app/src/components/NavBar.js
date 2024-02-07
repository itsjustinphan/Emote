import anger from './img/anger.png';
import stress from './img/stress.png';
import fear from './img/fear.png';
import happy from './img/happy.png';
import sadness from './img/sadness.js';
import './NavBar.css';
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
              
              <Dropdown.Toggle aria-label="Emotions" className="dropdown" id="dropdown-button">
                <div className="dropdown-name">Resources for Each Emotion</div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown">
                <Dropdown.Item>
                  <NavLink aria-label="Anger" to="/Anger" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={anger} alt="anger" />
                    <p className="dropdown-text">Anger</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink aria-label="Stress" to="/Stress" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={stress} alt="stress" />
                    <p className="dropdown-text">Stress</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink aria-label="Fear" to="/Fear" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={fear} alt="fear" />
                    <p className="dropdown-text">Fear</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink aria-label="Happy" to="/Happy" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={happy} alt="happy" />
                    <p className="dropdown-text">Happy</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink aria-label="Sadness" to="/Sad" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={sadness} alt="sadness" />
                    <p className="dropdown-text">Sad</p>
                  </NavLink>
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