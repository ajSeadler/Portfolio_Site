import React from 'react';

function NavBar() {
  const navBarStyle = {
    padding: '10px 20px',
    background: 'rgba(255, 255, 255, 0.1)', // Set background to none
    backdropFilter: 'blur(10px)', // Adjust the blur intensity as needed
  };

  // Function to close the collapsible navbar when a link is clicked
  const closeNavbar = () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-with-background" style={navBarStyle}>
      <a className="navbar-brand" href="#home">Anthony Seadler</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ marginLeft: "0" }}>
          <li className="nav-item">
            <a className="nav-link" href="#home" id="home-link" onClick={closeNavbar}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" id="projects-link" onClick={closeNavbar}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills" id="skills-link" onClick={closeNavbar}>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#locations" id="locations-link" onClick={closeNavbar}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
