import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NavBar() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsNavBarVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleTabClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a tab is clicked
  };

  const navBarStyle = {
    background: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease',
    transform: isNavBarVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  const brandStyle = {
    fontFamily: 'Bebas Neue',
    fontSize: '2.5rem',
    textDecoration: 'none',
    color: 'white',
    marginRight: 'auto',
  };

  const navLinksContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'flex-end',
    marginTop: isMobile ? '10px' : '0',
  };
  
  const navLinkStyle = {
    color: 'white',
    fontFamily: 'Bebas Neue',
    textDecoration: 'none',
    margin: '5px',
    whiteSpace: 'nowrap',
    fontSize: '1.3rem',
    '&:hover': {
      color: 'lightgrey',
    },
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: isMobileMenuOpen ? '0' : '-100%', // Slide down animation
    left: 0,
    width: '100%',
    background:'#333',
    zIndex: 999,
    transition: 'top 0.3s ease',
  };

  return (
    <>
      <ScrollToTop />
      <AppBar position="sticky" sx={navBarStyle}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h4" component={NavLink} to="/" sx={brandStyle}>
              AS
            </Typography>
            <div style={navLinksContainerStyle}>
              {!isMobile && (
                <>
                  <Button color="inherit" component={NavLink} to="/" sx={navLinkStyle}>
                    Home
                  </Button>
                  <Button color="inherit" component={NavLink} to="/about" sx={navLinkStyle}>
                    About Me
                  </Button>
                  <Button color="inherit" component={NavLink} to="/projects" sx={navLinkStyle}>
                    Portfolio
                  </Button>
                  <Button color="inherit" component={NavLink} to="/skills" sx={navLinkStyle}>
                    Skills
                  </Button>
                  <Button color="inherit" component={NavLink} to="/locations" sx={navLinkStyle}>
                    Contact
                  </Button>
                </>
              )}
            </div>
            <IconButton
              color="inherit"
              onClick={isMobileMenuOpen ? handleMobileMenuClose : handleMobileMenuOpen}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {isMobile && (
        <div style={mobileMenuStyle}>
          <Container maxWidth="lg">
            <div style={{ textAlign: 'right', margin: '10px 0' }}>
              <IconButton color="inherit" onClick={handleMobileMenuClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button color="inherit" component={NavLink} to="/" sx={navLinkStyle} onClick={handleTabClick}>
                Home
              </Button>
              <Button color="inherit" component={NavLink} to="/about" sx={navLinkStyle} onClick={handleTabClick}>
                About Me
              </Button>
              <Button color="inherit" component={NavLink} to="/projects" sx={navLinkStyle} onClick={handleTabClick}>
                Portfolio
              </Button>
              <Button color="inherit" component={NavLink} to="/skills" sx={navLinkStyle} onClick={handleTabClick}>
                Skills
              </Button>
              <Button color="inherit" component={NavLink} to="/locations" sx={navLinkStyle} onClick={handleTabClick}>
                Contact
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default NavBar;
