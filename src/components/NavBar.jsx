import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const navBarStyle = {
    background: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
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
    flexWrap: 'wrap', // Allow links to wrap to the next line
    justifyContent: isMobile ? 'center' : 'flex-end', // Center links on mobile, align to right on larger screens
    marginTop: isMobile ? '10px' : '0', // Add top margin on mobile for spacing
  };
  
  const navLinkStyle = {
    color: 'white',
    fontFamily: 'Bebas Neue',
    textDecoration: 'none',
    margin: '5px', // Add margin around each link for spacing
    whiteSpace: 'nowrap',
    fontSize: '1.3rem',
    '&:hover': {
      color: 'lightgrey',
    },
  };
  

  const mobileMenuStyle = {
    width: '100%',
    background:'#333',
    whiteSpace: 'nowrap',
    '& .MuiButton-root': {
      display: isMobile ? 'block' : 'none',
      width: '100%',
      textAlign: 'left',
      paddingLeft: '0px',
    },
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
              onClick={handleMobileMenuOpen}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          sx={{ '& .MuiDrawer-paper': mobileMenuStyle }}
        >
          <div onClick={handleMobileMenuClose}>
            <Button color="inherit" component={NavLink} to="/" sx={navLinkStyle}>
              Home
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
            <Button color="inherit" component={NavLink} to="/about" sx={navLinkStyle}>
              About Me
            </Button>
          </div>
        </Drawer>
      </AppBar>
    </>
  );
}

export default NavBar;
