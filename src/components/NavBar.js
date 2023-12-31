import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
    <>
      <ScrollToTop />
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
              activestyle={activeLinkStyle}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/projects"
              onClick={closeNavbar}
              style={navLinkStyle}
              activestyle={activeLinkStyle}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/skills"
              onClick={closeNavbar}
              style={navLinkStyle}
              activestyle={activeLinkStyle}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/locations"
              onClick={closeNavbar}
              style={navLinkStyle}
              activestyle={activeLinkStyle}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={closeNavbar}
              style={navLinkStyle}
              activestyle={activeLinkStyle}
            >
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
