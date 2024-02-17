import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectModal from "./ProjectModal";

const projectListStyle = {
  listStyleType: "none",
  color: 'white',
  padding: "0",
  marginTop: "10px",
  margin: 'auto',
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const projectItemStyle = {
  marginBottom: "10px",
  display: "flex",
  textAlign: 'left',
  marginLeft: '15px',
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const projectVideoStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  borderRadius: "20px",
};

const projectsData = [
  {
    id: 1,
    title: "Fork It - Reviews Website",
    image: "/fork-it.png",
    technologies: ["Postgres", "Express.js", "React.js", "Node.js"],
    description:
      "Fork It is a reviews web app where users can create an account to leave a review for a certain restaurant. Users can rate restaurants, review restaurants, and comment on other users' reviews. Fork It is a collaborative project between myself and a few others. As a full-stack developer, my role consisted of building database tables, building API routes, and building React components.",
    status: "Demo Only",
    link:"https://github.com/ajSeadler/Fork-it"
  },
  {
    id: 2,
    title: "Weather or Not - Live weather updates",
    image: "/weather_app.png",
    technologies: ["Python", "Flask", "Bootstrap 5"],
    description:
      "Weather or Not is a live weather forecasting app built with Python and Flask. The app features a current forecast, followed by a 7-day forecast - obtained from the Open Weather Map API. The user's current location's forecast will display on the home page.",
    status:"Demo Only",
    link:"https://github.com/ajSeadler/Weather-or-Not"
  },
  {
    id: 3,
    title: "Disco Stranger - Band Website",
    image: "/dsband.png",
    technologies: [ "React.js", "Node.js", "HTML", "CSS", "MUI"],
    description:
      "Created a website for the rock band 'Disco Stranger' to enhance their online presence and engage with their audience. Built with React.js and Node.js. This was my first real website! It is a mobile-responsive website that showcases the band's music, videos, and upcoming events. The site also features an animated 'blob' in the hero section.",
    status:"Active",
    link: 'https://discostrangermusic.com'
  },
  {
    id: 4,
    title: "3D Planet Viewer",
    image: "/solar.jpg",
    technologies: ["Three.js, React.js, Node.js, Vite, Material UI"],
    description:
      "Designed and developed a 3D planet viewing website. Users can view 3D models of planets in our solar system and explore their details. The project utilizes Three.js for 3D rendering, React.js for the user interface, Node.js for backend functionality, Vite for fast development, and Material UI for a clean and responsive design",
    status:"Active",
    link: 'https://solarsys1.netlify.app'
  },
  {
    id:5,
    title:"Stunning Realty",
    image:"/realty.png",
    technologies:["Postgres", "Express.js", "React.js", "Node.js"],
    description: "Stunning Realty is a demo project I created to enhance my PostgreSQL skills. The app features homes for sale or rent, each with a personal real estate agent. Users can favorite homes, view agent info, and even list their own property. Fake data is implemented with Faker.js to give a more realistic demo.",
    status:"Demo Only",
    link:"https://github.com/ajSeadler/realty"
  }
];

const ProjectGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const renderDescription = (description) => {
    return <></>;
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "blue";
      case "demo only":
        return "orange";
      case "active":
        return "green";
      default:
        return "gray";
    }
  };

  return !contentLoaded ? (
    <div className="spinner-container">
    <div className="spinner">
      {/* Optionally, you can add text below the spinner */}
      
    </div>
  </div>
  ) : (
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
                  backdropFilter: "blur(5px)",
                  backgroundColor:'transparent',
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
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                  </motion.div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "white" }}>
                    {project.title} {project.status && (
                    <span
                    style={{
                      display: "inline-block",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      backgroundColor: getStatusColor(project.status),
                      color: "white",
                      marginLeft: "10px",
                    }}
                  >
                    {project.status}
                  </span>
                  )}
                  </h5>

                  <p className="card-text" style={{ color: "white" }}>
                    {renderDescription(project.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ul style={projectListStyle}>
          <li style={projectItemStyle}>
            <div style={{ flex: "1", marginTop:'20%' }}>
              <strong>Flutter: News Article Hub</strong>
              <p>Retrieves World, Sports, and Space news</p>

              <strong style={{ textAlign: 'left' }}>What I learned:</strong>
              <ul>
                <li style={{ textAlign: 'left', marginBottom: '5px' }}>Asynchronous programming in Flutter</li>
                <li style={{ textAlign: 'left', marginBottom: '5px' }}>Data model structures</li>
                <li style={{ textAlign: 'left', marginBottom: '5px' }}>Flutter state management </li>
              </ul>
            </div>

            <div style={{ flex: "1", marginLeft: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ ...projectVideoStyle, maxWidth: "80%", marginTop:'35%' }} src="flutterdemo.gif" alt="Flutter Demo" />
            </div>
          </li>
        </ul>

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
