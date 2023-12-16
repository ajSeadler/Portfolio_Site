import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

function ProjectsSection() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showDescription5, setShowDescription5] = useState(false);

  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
  };

  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
    setShowDescription1(false);
    setShowDescription3(false);
    setShowDescription4(false);
  };

  const toggleDescription3 = () => {
    setShowDescription3(!showDescription3);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription4(false);
  };

  const toggleDescription4 = () => {
    setShowDescription4(!showDescription4);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
  };

  const toggleDescription5 = () => {
    setShowDescription5(!showDescription5);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInStyle = {
    opacity: inView ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const fadeInStyle2 = {
    opacity: inView ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const fadeInStyle3 = {
    opacity: inView ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const fadeInStyle4 = {
    opacity: inView ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const projectDescriptionStyle = {
    // background: "rgba(0, 0, 0, 0.5)",
    backdropFilter:'blur(10px)',
    color:'white',
    textAlign:'left'
  };

  const projectImageStyle = {
    cursor: "pointer",
    maxWidth: "70%",
    ...fadeInStyle,
    
  };

  const projectImageStyle2 = {
    cursor: "pointer",
    maxWidth: "70%",
    ...fadeInStyle2,
    
  };

  const imageOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // background: "rgba(0, 0, 0, 0.5)",
    background:'none',
    display: "none",
    transition: "opacity 0.3s",
    textAlign: "center",
  };

  

  return (
    <div id="projects" className="py-5">
      <div className="container">
        <div className="coding-divider">
          <a
            href="https://github.com/ajSeadler"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <h2 className="text-center mb-4">PORTFOLIO</h2>
        <div className="row">
          <div className="col-md-12 mb-4 sty">
            <div className="card" style={{ background: "transparent", border:'none' }}>
              <div class="d-flex justify-content-between align-items-center">
              <img
                  ref={ref}
                  src="/fork-it.png"
                  className="card-img-top mx-auto clickable-image"
                  alt="Fork-It Reviews Website"
                  onClick={toggleDescription1}
                  style={projectImageStyle}
                />
              </div>

              {showDescription1 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Fork-It (Reviews website)</h5>
                  <p className="card-text">
                    | Full Stack Developer | Oct./Nov. 2023 <br />| React, HTML,
                    CSS, JavaScript, Express, Postgres, Node.js
                  </p>
                  <div className="hyper-links">
                    <a
                      href="https://github.com/ajSeadler/Fork-It"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" style={{color:'white'}}></i> GitHub Repository
                    </a>
                    <a
                      href="#projects"
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-hand-point-right" style={{color:'white'}}></i> Live Demo
                    </a>
                  </div>

                  <p>
                    Fork It is a web application that provides a platform for
                    users to review and discover various restaurants. It
                    provides a variety of features designed for different user
                    roles, catering to regular users, logged-in users, and
                    administrators, each with access to their specific functions
                    on the site. The project was developed as a collaboration
                    between multiple team members, and my role primarily
                    involved working on the back end by creating database tables
                    and building API routes. Additionally, I contributed to
                    building many of the React components, ensuring a well-rounded skill set
                    in web development. Most of the Material UI styling is done by myself as well. 
                  </p>
                  <ul class="fa-ul features">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Developed with the PERN stack
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Utilized Postgres and Express.js to complete the back-end
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Built via React
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Utilizes JWT and bcrypt
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Mobile responsiveness
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card" style={{ background: "transparent", border:'none' }}>
              <div class="d-flex justify-content-between align-items-center">
              <img
                  ref={ref}
                  src="/weather_app.png"
                  className="card-img-top mx-auto clickable-image"
                  alt="Fork-It Reviews Website"
                  onClick={toggleDescription5}
                  style={projectImageStyle2}
                />
              </div>

              {showDescription5 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Weather or Not</h5>
                  <p className="card-text">
                    | Full Stack Developer | December 2023 <br />| Python, Flask, HTML, Boostrap 5
                  </p>
                  <div className="hyper-links">
                    <a
                      href="https://github.com/ajSeadler/py"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub Repository
                    </a>
                    <a
                      href="#projects"
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-hand-point-right"></i> Live Demo
                    </a>
                  </div>

                  <p>
                    Welcome to "Weather Or Not," a web application designed to provide users with current weather information. Here's a detailed breakdown of the key features and components of this project: (...p.s. this is my first real Python project! It was fully built from scratch by myself. The only content that was not 'built' by me would be the Open Weather Map API. It was a fun gateway into the world of python)
                  </p>
                  <ul class="fa-ul features">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Flask Framework: Developed using the Flask framework for Python, ensuring a robust and scalable structure.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      OpenWeatherMap API: Integrated with the OpenWeatherMap API to retrieve real-time weather data. Retrieves current forecast, plus a 6 day forecast for your desired city. 
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Geopy for Location Data: Utilized Geopy to obtain location data based on city and state input.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Bootstrap 5 Styling: Enhanced the visual appeal with Bootstrap 5, providing a responsive and modern design.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Weather Icons: Incorporated Weather Icons to visually represent weather conditions.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      This project aims to deliver a seamless weather information experience, combining functionality with an intuitive user interface.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card" style={{ background: "transparent", border:'none'}}>
              <div class="d-flex justify-content-between align-items-center">
                <img
                  src="/dsband.png"
                  className="card-img-top mx-auto clickable-image"
                  alt="Disco Stranger Band Website"
                  onClick={toggleDescription2}
                  style={{ ...projectImageStyle, ...showDescription2 }}
                />
              </div>

              {showDescription2 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Band Website</h5>
                  <p className="card-text">
                    | Full Stack Developer | Sep. 2023 <br />| HTML, CSS,
                    JavaScript
                  </p>
                  <a
                    href="https://github.com/ajSeadler/discoband"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  <a
                    href="https://discostrangermusic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{margin:'10px'}}
                  >
                    <i class="fa fa-hand-point-right"></i> discostrangermusic.com
                  </a>
                  <p>
                    Created a website for the rock band "Disco Stranger" to
                    enhance their online presence and engage with their
                    audience. Built with React.js and Node.js. This was my first real website! It is a mobile
                    responsive website that showcases the band's music, videos,
                    and upcoming events. The site also features an animated 'blob' in the hero section. 
                  </p>

                  <ul class="fa-ul features">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Implemented a show/release countdown timer using JavaScript.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      A JavaScript function will check if the current date is
                      greater than the show date. If it is, the function would
                      move the show card to the "Past Shows" column, updating
                      the display on the website accordingly.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Collapsing nav bar
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-terminal bu" style={{color:'white'}}></i>
                      </span>
                      Ensured mobile responsiveness for a seamless user
                      experience on all devices.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card" style={{background:'transparent',border:'none'}}>
            <div class="d-flex justify-content-between align-items-center">
   
    <img
      src="/zelda.png"
      className="card-img-top mx-auto clickable-image"
      alt="Zelda Website"
      onClick={toggleDescription3}
      style={{ ...projectImageStyle, ...showDescription3 }}
    />
   
  </div>
              {/* <i id="githubIcon3" className="fab fa-github" style={githubIconStyle}></i> */}
              {showDescription3 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">The Legend of Zelda Compendium</h5>
                  <p className="card-text">Full Stack Developer | Sep. 2023</p>
                  <a
                    href="https://github.com/ajSeadler/Zelda-Encyc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" style={{color:'white'}}></i> GitHub Repository
                  </a>
                  <p>
                    The Legend of Zelda Compendium is a fan-made web application
                    where users can look up various types of information from
                    the video game series The Legend of Zelda.
                  </p>
                  <p>
                    Developed a mobile-responsive web app for Zelda fans,
                    offering quick access to in-depth information on games,
                    dungeons, monsters, and equipment.
                  </p>
                  <p>
                    Leveraged React and a REST API for a seamless user
                    experience, focusing on responsive design and efficient data
                    display.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card" style={{background:'transparent', border:'none'}}>
            <div class="d-flex justify-content-between align-items-center">
    
    <img
      src="/eco.png"
      className="card-img-top mx-auto clickable-image"
      alt="Eco Website"
      onClick={toggleDescription4}
      style={{ ...projectImageStyle, ...showDescription4 }}
    />
   
  </div>

              {showDescription4 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Eco Sync</h5>
                  <p className="card-text">Full Stack Developer | Sep. 2023</p>
                  <a
                    href="https://github.com/ajSeadler/Eco-Sync-Repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" style={{color:'white'}}></i> GitHub Repository
                  </a>
                  <p>
                    Eco Sync is a project aimed at providing environmental
                    enthusiasts with the tools and information they need to make
                    a positive impact on the planet.
                  </p>
                  <p>
                    Developed a user-friendly web application that empowers
                    users to discover sustainable practices, connect with
                    eco-conscious communities, and track their environmental
                    efforts.
                  </p>
                  <p>
                    Leveraged cutting-edge technologies to create a seamless and
                    informative platform that contributes to a more sustainable
                    world.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsSection;
