import React from 'react';
import { NavLink } from 'react-router-dom';
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

  const navLinkStyle = {
    color: 'white', // Default color
  };

  const activeLinkStyle = {
    color: 'lightgrey', // Color for the active link
  };

  const closeNavbar = () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <Navbar expand="lg" className="navbar-with-background" sticky="top" style={navBarStyle}>
      <Navbar.Brand as={NavLink} to="/" style={brandStyle}>AS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={closeNavbar}
            style={navLinkStyle}
            activeStyle={activeLinkStyle}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/projects"
            onClick={closeNavbar}
            style={navLinkStyle}
            activeStyle={activeLinkStyle}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/skills"
            onClick={closeNavbar}
            style={navLinkStyle}
            activeStyle={activeLinkStyle}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/locations"
            onClick={closeNavbar}
            style={navLinkStyle}
            activeStyle={activeLinkStyle}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
