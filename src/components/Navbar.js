// Navbar.js
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="path_to_your_logo_image.png" // Add the path to your logo image
            alt="Writealy Logo"
            height="30"
          />
          <span style={{ color: '#303179', marginLeft: '10px' }}>Writealy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#use-cases">Use Cases</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#customers">Customers</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-dark">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;
