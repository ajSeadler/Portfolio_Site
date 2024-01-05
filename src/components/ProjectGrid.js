import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectModal from "./ProjectModal"; // Assuming you have a ProjectModal component

const projectsData = [
  {
    id: 1,
    title: "Fork It (Reviews Website)",
    image: "/fork-it.png",
    technologies: ["Postgres", "Express.js", "React.js", "Node.js"],
    description:
      "Fork It is a collaborative platform for exploring and reviewing various restaurants. Leveraging technologies like Postgres, Express.js, React.js, and Node.js, the web application caters to diverse user roles. From regular users to administrators, each role enjoys tailored functionalities. My contributions centered around backend development, including database table creation and API route implementation. Additionally, I played a role in building React components, showcasing a versatile skill set in web development.",
  },
  {
    id: 2,
    title: "Weather or Not (Live weather updates)",
    image: "/weather_app.png",
    technologies: ["Python", "Flask", "Bootstrap 5"],
    description:
      "Experience real-time weather forecasts with Weather or Not, a dynamic application powered by Python and Flask. Users can easily retrieve single-day forecasts for cities, states, or countries. Furthermore, the app offers a 6-day forecast feature for desired locations. The blend of Python, Flask, and Bootstrap 5 ensures a seamless and visually appealing weather exploration experience.",
  },
  {
    id: 3,
    title: "Disco Stranger (Band Website)",
    image: "/dsband.png",
    technologies: ["HTML", "CSS", "React.js", "JS", "Node.js", "MUI"],
    description:
      "Created a website for the rock band 'Disco Stranger' to enhance their online presence and engage with their audience. Built with React.js and Node.js. This was my first real website! It is a mobile responsive website that showcases the band's music, videos, and upcoming events. The site also features an animated 'blob' in the hero section.",
      link: 'https://discostrangermusic.com'
  },

  {
    id: 4,
    title: "3D Planet Viewer",
    image: "/solar.jpg",
    technologies: ["Three.js, React.js, Node.js, Vite, Material UI"],
    description:
      "Designed and developed a 3D planet viewing website. Users can view 3D models of planets in our solar system, explore their details, and enjoy a visually stunning experience. The project utilizes Three.js for 3D rendering, React.js for the user interface, Node.js for backend functionality, Vite for fast development, and Material UI for a clean and responsive design.",
      link: 'https://solarsys1.netlify.app'
  }
  

  // Add more projects as needed
];

const ProjectGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const renderDescription = (description) => {
    const maxLength = 80; // Set your desired maximum length
    return <></>;
  };

  return (
    <div id="projects" className="">
      <div className="container port-title">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "3rem" }} />
        </div>
        <h2
          className="text-center"
          style={{ fontSize: "2.2rem", color: "white" }}
        >
          PORTFOLIO
        </h2>

        <div className="row">
          {projectsData.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <div
                className="card"
                style={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <motion.div>
                    <img
                      src={project.image}
                      className="card-img-top mx-auto clickable-image"
                      alt={project.title}
                      onClick={() => openModal(project)}
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "white" }}>
                    {project.title}
                  </h5>
                 
                  <p className="card-text" style={{ color: "white" }}>
                    {renderDescription(project.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            isOpen={showModal}
            onRequestClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
