import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

//Renders the navbar which will always be present at the top of the page.
export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="md" aria-label="NavBar">
        <Container>
          <Navbar.Brand>Emote.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} aria-label="Home Page" to="">Home</Nav.Link>
              <Nav.Link as={Link} aria-label="About" to="/About">About</Nav.Link>
              <Nav.Link as={Link} aria-label="Quiz" to="/Quiz">Quiz</Nav.Link>
              <Nav.Link as={Link} aria-label="Resources" to="/Resources">Resources</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}