import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  const navBarStyle = {
    padding: '10px 20px',
    backdropFilter: 'blur(10px)', 
  };

  const brandStyle = {
    fontFamily: 'Bebas Neue', 
    fontSize: '2.5rem', 
  };

  const closeNavbar = () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <Navbar expand="lg" className="navbar-with-background" sticky="top" style={navBarStyle}>
      <Navbar.Brand href="#home" style={brandStyle}>AS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" onClick={closeNavbar}>Home</Nav.Link>
          <Nav.Link href="#projects" onClick={closeNavbar}>Portfolio</Nav.Link>
          <Nav.Link href="#skills" onClick={closeNavbar}>Skills</Nav.Link>
          <Nav.Link href="#locations" onClick={closeNavbar}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
