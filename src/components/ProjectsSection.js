import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal1 = () => {
    setShowModal1(!showModal1);
  };

  const toggleModal4 = () => {
    setShowModal4(!showModal4);
  };

  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
    setShowModal(false);
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
    setShowModal(false);
  };

  const toggleDescription4 = () => {
    setShowDescription4(!showDescription4);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowModal4(false);
  };

  const projectDescriptionStyle = {
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "left",
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    centerMode: true,
    centerPadding: "15%", // Adjust this value to control the visibility of the next slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "0px", // Adjust this value for mobile view
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Disable arrows
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return <div className="white-dot"></div>; // Custom white dot styling
    },
  };

  
  return (
    <div id="projects" className="">
      <div className="container port-title">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '3rem' }} />
        </div>
        <h2 className="text-center" style={{ fontSize: "2.2rem" }}>
          PORTFOLIO
        </h2>

        <Slider {...sliderSettings}>
          <div>
            <div className="col-md-12 mb-4 sty">
              <div
                className="card"
                style={{ background: "transparent", border: "none" }}
              >
                <div class="d-flex justify-content-between align-items-center pro">
                  <motion.div>
                    <img
                      src="/fork-it.png"
                      className="card-img-top mx-auto clickable-image"
                      alt="Project 1"
                      onClick={toggleDescription1}
                      style={{ cursor: "pointer", maxWidth: "70%" }}
                    />
                  </motion.div>
                </div>

                {showDescription1 && (
                  <ReactModal
                    isOpen={showDescription1}
                    onRequestClose={toggleDescription1}
                    contentLabel="Project 1 Description Modal"
                    className="ReactModal__Content"
                    overlayClassName="ReactModal__Overlay"
                  >
                    <div className="card-body des" style={projectDescriptionStyle}>
                      <h5 className="card-title">Fork It (Reviews Website)</h5>
                      <p className="card-text">
                        | Postgres, Express.js, react.js, node.js | Fork It is a collaborative platform for exploring and reviewing various restaurants. Leveraging technologies like Postgres, Express.js, React.js, and Node.js, the web application caters to diverse user roles. From regular users to administrators, each role enjoys tailored functionalities. My contributions centered around backend development, including database table creation and API route implementation. Additionally, I played a role in building React components, showcasing a versatile skill set in web development.
                      </p>
                    </div>
                    <button className="close-button" onClick={toggleDescription1}>
                      Close
                    </button>
                  </ReactModal>
                )}

                <ReactModal
                  isOpen={showModal}
                  onRequestClose={toggleModal}
                  contentLabel="Video Demo Modal"
                  className="ReactModal__Content"
                  overlayClassName="ReactModal__Overlay"
                >
                  <div
                    className="ReactModal__CloseButton"
                    onClick={toggleModal}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="video-container">
                    {/* Add the video player component here */}
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/qOcs1PvMBGo?si=g2N2hOqceS30XcJc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>

          <div>
            <div className="col-md-12 mb-4">
              <div
                className="card"
                style={{ background: "transparent", border: "none" }}
              >
                <div class="d-flex justify-content-between align-items-center">
                  <motion.div>
                    <img
                      src="/weather_app.png"
                      className="card-img-top mx-auto clickable-image"
                      alt="Project 2"
                      onClick={toggleDescription2}
                      style={{ cursor: "pointer", maxWidth: "70%" }}
                    />
                  </motion.div>
                </div>

                {showDescription2 && (
                  <ReactModal
                    isOpen={showDescription2}
                    onRequestClose={toggleDescription2}
                    contentLabel="Project 2 Description Modal"
                    className="ReactModal__Content"
                    overlayClassName="ReactModal__Overlay"
                  >
                    <div className="card-body des" style={projectDescriptionStyle}>
                      <h5 className="card-title">Weather or Not (Live weather updates)</h5>
                      <p className="card-text">
                        | Python, Flask, Bootstrap 5 | Experience real-time weather forecasts with Weather or Not, a dynamic application powered by Python and Flask. Users can easily retrieve single-day forecasts for cities, states, or countries. Furthermore, the app offers a 6-day forecast feature for desired locations. The blend of Python, Flask, and Bootstrap 5 ensures a seamless and visually appealing weather exploration experience. 
                      </p>
                    </div>
                    <button className="close-button" onClick={toggleDescription2}>
                      Close
                    </button>
                  </ReactModal>
                )}

                <ReactModal
                  isOpen={showModal1}
                  onRequestClose={toggleModal1}
                  contentLabel="Video Demo Modal"
                  className="ReactModal__Content"
                  overlayClassName="ReactModal__Overlay"
                >
                  <div
                    className="ReactModal__CloseButton"
                    onClick={toggleModal1}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="video-container">
                    {/* Add the video player component here */}
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/T7IlewTZkws?si=Fr-kBKNUalD4GVWy"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>

          <div>
            <div className="col-md-12 mb-4">
              <div
                className="card"
                style={{ background: "transparent", border: "none" }}
              >
                <div class="d-flex justify-content-between align-items-center">
                  <motion.div>
                    <img
                      src="/dsband.png"
                      className="card-img-top mx-auto clickable-image"
                      alt="Project 3"
                      onClick={toggleDescription3}
                      style={{ cursor: "pointer", maxWidth: "70%" }}
                    />
                  </motion.div>
                </div>

                {showDescription3 && (
                  <ReactModal
                    isOpen={showDescription3}
                    onRequestClose={toggleDescription3}
                    contentLabel="Project 3 Description Modal"
                    className="ReactModal__Content"
                    overlayClassName="ReactModal__Overlay"
                  >
                    <div className="card-body des" style={projectDescriptionStyle}>
                      <h5 className="card-title">Disco Stranger (Band Website)</h5>
                      <p className="card-text">
                        | HTML, CSS, React.js, JS, Node.js, MUI | Created a website for the rock band "Disco Stranger" to enhance their online presence and engage with their audience. Built with React.js and Node.js. This was my first real website! It is a mobile responsive website that showcases the band's music, videos, and upcoming events. The site also features an animated 'blob' in the hero section.
                      </p>
                    </div>
                    <button className="close-button" onClick={toggleDescription3}>
                      Close
                    </button>
                  </ReactModal>
                )}
              </div>
            </div>
          </div>

          {/* Add the new Project 4 */}
          <div>
            <div className="col-md-12 mb-4">
              <div
                className="card"
                style={{ background: "transparent", border: "none" }}
              >
                <div class="d-flex justify-content-between align-items-center">
                  <motion.div>
                    <img
                      src="/solar.jpg" 
                      className="card-img-top mx-auto clickable-image"
                      alt="Project 4"
                      onClick={toggleDescription4}
                      style={{ cursor: "pointer", maxWidth: "70%" }}
                    />
                  </motion.div>
                </div>

                {showDescription4 && (
                  <ReactModal
                    isOpen={showDescription4}
                    onRequestClose={toggleDescription4}
                    contentLabel="Project 4 Description Modal"
                    className="ReactModal__Content"
                    overlayClassName="ReactModal__Overlay"
                  >
                    <div className="card-body des" style={projectDescriptionStyle}>
                      <h5 className="card-title">Solar Project</h5>
                      <p className="card-text">
                        | Three.JS, React.JS, Node.JS, Vite, Material UI | Designed and developed a 3D planet viewing website. Users can view 3D models of planets in our solar system, explore their details, and enjoy a visually stunning experience. The project utilizes Three.js for 3D rendering, React.js for the user interface, Node.js for backend functionality, Vite for fast development, and Material UI for a clean and responsive design.
                      </p>
                    </div>
                    <button className="close-button" onClick={toggleDescription4}>
                      Close
                    </button>
                  </ReactModal>
                )}

                {/* Add modal for Project 4 if needed */}
                <ReactModal
                  isOpen={showModal4}
                  onRequestClose={toggleModal4}
                  contentLabel="Video Demo Modal"
                  className="ReactModal__Content"
                  overlayClassName="ReactModal__Overlay"
                >
                  <div
                    className="ReactModal__CloseButton"
                    onClick={toggleModal4}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="video-container">
                    {/* Add the video player component here */}
                    {/* Add the video player component for Project 4 here */}
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>

        </Slider>

        {/* Add additional projects as needed with similar structure */}
      </div>
    </div>
  );
};

export default ProjectsSection;
