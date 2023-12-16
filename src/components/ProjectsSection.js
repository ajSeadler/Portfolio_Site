import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function ProjectsSection() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showDescription5, setShowDescription5] = useState(false);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });

  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
    setShowDescription5(false);
  };

  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
    setShowDescription1(false);
    setShowDescription3(false);
    setShowDescription4(false);
    setShowDescription5(false);
  };

  const toggleDescription3 = () => {
    setShowDescription3(!showDescription3);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription4(false);
    setShowDescription5(false);
  };

  const toggleDescription4 = () => {
    setShowDescription4(!showDescription4);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription5(false);
  };

  const toggleDescription5 = () => {
    setShowDescription5(!showDescription5);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
  };

  const fadeInStyle1 = {
    opacity: inView1 ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const fadeInStyle2 = {
    opacity: inView2 ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const fadeInStyle3 = {
    opacity: inView3 ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const fadeInStyle4 = {
    opacity: inView4 ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const fadeInStyle5 = {
    opacity: inView5 ? 1 : 0,
    transition: "opacity 3s ease-in-out",
  };

  const projectDescriptionStyle = {
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "left",
  };

  return (
    <div id="projects" className="">
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
            <div
              className="card"
              style={{ background: "transparent", border: "none" }}
            >
              <div class="d-flex justify-content-between align-items-center">
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/fork-it.png"
                    className="card-img-top mx-auto clickable-image"
                    alt="Fork-It Reviews Website"
                    onClick={toggleDescription1}
                    style={{ cursor: "pointer", maxWidth: "70%" }}
                  />
                </motion.div>
              </div>

              {showDescription1 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Fork It (Reviews website)</h5>
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
                      <i
                        className="fab fa-github"
                        style={{ color: "white" }}
                      ></i>{" "}
                      GitHub Repository
                    </a>
                    <a
                      href="#projects"
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      <i
                        class="fa fa-hand-point-right"
                        style={{ color: "white" }}
                      ></i>{" "}
                      Video Demo
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
                    building React components for those routes, ensuring a
                    well-rounded skill set in web development.
                  </p>
                  <ul class="fa-ul features">
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Developed with the PERN stack
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Utilized Postgres and Express.js to complete the back-end
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Built via React
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Utilizes JWT and bcrypt
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
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
            <div
              className="card"
              style={{ background: "transparent", border: "none" }}
            >
              <div class="d-flex justify-content-between align-items-center">
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/weather_app.png"
                    className="card-img-top mx-auto clickable-image"
                    alt="Weather or Not App"
                    onClick={toggleDescription5}
                    style={{ cursor: "pointer", maxWidth: "70%" }}
                  />
                </motion.div>
              </div>

              {showDescription5 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Weather or Not</h5>
                  <p className="card-text">
                    | Full Stack Developer | December 2023 <br />| Python,
                    Flask, HTML, Boostrap 5
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
                      <i class="fa fa-hand-point-right"></i> Video Demo
                    </a>
                  </div>

                  <p>
                    Welcome to "Weather Or Not," an elegantly designed web
                    application crafted to deliver timely weather updates. This
                    project marks a significant milestone in my journey as a
                    Python developer, representing my first demonstration
                    project. Developed with Flask and Python, the application
                    seamlessly integrates with the Open Weather Map API,
                    offering a simple yet effective solution for users seeking
                    current weather information. Within the confines of this
                    project, simplicity is key, reflecting a mindful approach to
                    user experience. This introductory Python endeavor,
                    showcased in my portfolio, embodies my dedication to
                    creating functional and user-friendly applications. I invite
                    you to explore "Weather Or Not" as a glimpse into my early
                    yet meaningful contributions to the world of Python
                    development.
                  </p>
                  <ul class="fa-ul features">
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Flask Framework: Developed using the Flask framework for
                      Python, ensuring a robust and scalable structure.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      OpenWeatherMap API: Integrated with the OpenWeatherMap API
                      to retrieve real-time weather data. Retrieves current
                      forecast, plus a 6 day forecast for your desired city.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Geopy for Location Data: Utilized Geopy to obtain location
                      data based on city and state input.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Bootstrap 5 Styling: Enhanced the visual appeal with
                      Bootstrap 5, providing a responsive and modern design.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Weather Icons: Incorporated Weather Icons to visually
                      represent weather conditions.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      This project aims to deliver a seamless weather
                      information experience, combining functionality with an
                      intuitive user interface.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div
              className="card"
              style={{ background: "transparent", border: "none" }}
            >
              <div class="d-flex justify-content-between align-items-center">
                <motion.div
                  ref={ref3}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/dsband.png"
                    className="card-img-top mx-auto clickable-image"
                    alt="Disco Stranger Band Website"
                    onClick={toggleDescription2}
                    style={{ cursor: "pointer", maxWidth: "70%" }}
                  />
                </motion.div>
              </div>

              {showDescription2 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Disco Stranger Band Website</h5>
                  <p className="card-text">
                    | Full Stack Developer | Sep. 2023 <br />| React,
                    JavaScript, Node.js, Material UI
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
                    style={{ margin: "10px" }}
                  >
                    <i class="fa fa-hand-point-right"></i>{" "}
                    discostrangermusic.com
                  </a>
                  <p>
                    Created a website for the rock band "Disco Stranger" to
                    enhance their online presence and engage with their
                    audience. Built with React.js and Node.js. This was my first
                    real website! It is a mobile responsive website that
                    showcases the band's music, videos, and upcoming events. The
                    site also features an animated 'blob' in the hero section.
                  </p>

                  <ul class="fa-ul features">
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Implemented a show/release countdown timer using
                      JavaScript.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      A JavaScript function will check if the current date is
                      greater than the show date. If it is, the function would
                      move the show card to the "Past Shows" column, updating
                      the display on the website accordingly.
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      Collapsing nav bar
                    </li>
                    <li>
                      <span class="fa-li">
                        <i
                          class="fas fa-terminal bu"
                          style={{ color: "white" }}
                        ></i>
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
            <div
              className="card"
              style={{ background: "transparent", border: "none" }}
            >
              <div class="d-flex justify-content-between align-items-center">
                <motion.div
                  ref={ref4}
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/zelda.png"
                    className="card-img-top mx-auto clickable-image"
                    alt="Zelda Compendium Website"
                    onClick={toggleDescription3}
                    style={{ cursor: "pointer", maxWidth: "70%" }}
                  />
                </motion.div>
              </div>
              {/* <i id="githubIcon3" className="fab fa-github" style={githubIconStyle}></i> */}
              {showDescription3 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">The Legend of Zelda Compendium</h5>
                  <p className="card-text">Full Stack Developer | React, JavaScript, HTML, CSS | September 2023</p>
                  <a
                    href="https://github.com/ajSeadler/Zelda-Encyc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" style={{ color: "white" }}></i>{" "}
                    GitHub Repository
                  </a>
                  <a
                    href="https://zeldainfo.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-link"
                      style={{ color: "white", margin: "5px" }}
                    ></i>{" "}
                    Check Out The Site!
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
            <div
              className="card"
              style={{ background: "transparent", border: "none" }}
            >
              <div class="d-flex justify-content-between align-items-center">
                <motion.div
                  ref={ref5}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/eco.png"
                    className="card-img-top mx-auto clickable-image"
                    alt="Eco Sync Website"
                    onClick={toggleDescription4}
                    style={{ cursor: "pointer", maxWidth: "70%" }}
                  />
                </motion.div>
              </div>

              {showDescription4 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Eco Sync</h5>
                  <p className="card-text">Front-End Developer | React, JavaScript, HTML, CSS | September 2023</p>
                  <a
                    href="https://github.com/ajSeadler/Eco-Sync-Repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" style={{ color: "white" }}></i>{" "}
                    GitHub Repository
                  </a>
                  <a
                    href="https://fakeproduct1.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-link"
                      style={{ color: "white", margin: "5px" }}
                    ></i>{" "}
                    Check Out The Site!
                  </a>

                  <p>
                    Eco Sync, a fictional product/web application created for demonstration
                    purposes, serves as a tangible showcase of my dedication to
                    refining front-end development skills. This endeavor
                    specifically focuses on the practice of crafting responsive
                    web applications that seamlessly adapt to diverse screen
                    sizes. Through the lens of Eco Sync, I present a
                    user-friendly platform designed for environmental
                    enthusiasts to explore sustainable practices, connect with
                    eco-conscious communities, and monitor their environmental
                    efforts. The project not only underscores my technical
                    capabilities but also highlights my attention to styling,
                    ensuring a visually appealing and cohesive user experience.
                    Take a closer look at Eco Sync to appreciate my commitment
                    to creating responsive and aesthetically pleasing
                    applications in a simulated environment.
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

//AT SOME POINT YOU NEED TO TOSS THESE DESCRIPTIONS IN A DIFFERENT FILE, IMPORT IT, THEN USE ARRAYS AND MAPPING. 
