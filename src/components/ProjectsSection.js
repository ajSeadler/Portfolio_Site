import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import ReactModal from "react-modal";

const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal1 = () => {
    setShowModal1(!showModal1);
  };

  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
    setShowDescription2(false);
    setShowModal(false);
  };

  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
    setShowDescription1(false);
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
  };

  return (
    <div id="projects" className="">
      <div className="container">
      <div className="coding-divider">
          {/* Add your social link or other content here */}
        </div>
        <h2 className="text-center" style={{ fontSize: '2.2rem' }}>PORTFOLIO</h2>

        <Slider {...sliderSettings}>
          <div>
            <div className="col-md-12 mb-4 sty">
              <div
                className="card"
                style={{ background: "transparent", border: "none" }}
              >
                <div class="d-flex justify-content-between align-items-center">
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
                  <div className="card-body" style={projectDescriptionStyle}>
                    <h5 className="card-title">Project 1 Placeholder</h5>
                    <p className="card-text">
                      | Placeholder Description | Placeholder Tech Stack
                    </p>
                  </div>
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
                  <div className="card-body" style={projectDescriptionStyle}>
                    <h5 className="card-title">Project 2 Placeholder</h5>
                    <p className="card-text">
                      | Placeholder Description | Placeholder Tech Stack
                    </p>
                  </div>
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
                      src="/weather_app.png"
                      className="card-img-top mx-auto clickable-image"
                      alt="Project 2"
                      onClick={toggleDescription2}
                      style={{ cursor: "pointer", maxWidth: "70%" }}
                    />
                  </motion.div>
                </div>

                {showDescription2 && (
                  <div className="card-body" style={projectDescriptionStyle}>
                    <h5 className="card-title">Project 2 Placeholder</h5>
                    <p className="card-text">
                      | Placeholder Description | Placeholder Tech Stack
                    </p>
                  </div>
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
        </Slider>

        {/* Add additional projects as needed with similar structure */}
      </div>
    </div>
  );
};

export default ProjectsSection;
