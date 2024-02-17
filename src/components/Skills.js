import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop, faServer, faTools } from "@fortawesome/free-solid-svg-icons"; // Add appropriate icons

const Skills = () => {
  const titleStyle = {
    color: "white",
    fontSize: "2rem",
    marginBottom: "2rem",
    marginTop: "0%",
  };

  const paragraphStyle = {
    color: "white",
    fontSize: "1.1rem",
    marginBottom: "3rem",
    textAlign: "center",
  };

  const skillsContainerStyle = {
    background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
    borderRadius: "8px",
    padding: "20px", // Adjust padding as needed
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection:'row',
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  const listContainerStyle = {
    flex: "1",
    minWidth: "250px",
    marginRight: "20px",
  };

  const categoryTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration:'underline',
    color: "#fff",
    marginBottom: "10px",
  };

  const listItemStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
    textAlign: "center",
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skillsData = {
    frontend: ["JavaScript", "React.js","HTML5", "CSS", "Bootstrap", "Material UI"],
    backend: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "SQL", "PostgreSQL",],
    tools: ["Git", "GitHub", "VS Code", "Insomnia","Postico"],
    // Add more skills as needed
  };

  return (
    <div id="skills" className="container-fluid py-5" ref={ref}>
      <div className="container p-5 rounded">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faCode} style={{ fontSize: "3rem" }} />
        </div>
        <motion.h2
          className="text-center"
          style={titleStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          SKILLS
        </motion.h2>
        {/* <motion.p
          className="text-center text-light"
          style={paragraphStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          My knowledge of these technologies and tools allows me to contribute to the development of efficient and user-friendly web applications. <br /> With experience in various web development technologies, I am well-equipped to make meaningful contributions to your projects and team.
        </motion.p> */}
        <motion.div
          id="skills"
          className="list-group"
          style={skillsContainerStyle}
          initial="hidden"
          animate={controls}
        >
          <div style={listContainerStyle}>
            <motion.div style={categoryTitleStyle}>
              <FontAwesomeIcon icon={faDesktop} style={{ marginRight: "5px", color:'#FF6F59' }} />
              Front End
            </motion.div>
            {skillsData.frontend.map((skill, index) => (
              <motion.div
                key={index}
                style={listItemStyle}
                variants={listItemVariants}
                transition={{ duration: 2.0, ease: "anticipate" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <div style={listContainerStyle}>
            <motion.div style={categoryTitleStyle}>
              <FontAwesomeIcon icon={faServer} style={{ marginRight: "5px", color:'#FF6F59' }} />
              Back End
            </motion.div>
            {skillsData.backend.map((skill, index) => (
              <motion.div
                key={index}
                style={listItemStyle}
                variants={listItemVariants}
                transition={{ duration: 2.0, ease: "anticipate" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <div style={listContainerStyle}>
            <motion.div style={categoryTitleStyle}>
              <FontAwesomeIcon icon={faTools} style={{ marginRight: "5px", color:'#FF6F59' }} />
              Tools
            </motion.div>
            {skillsData.tools.map((skill, index) => (
              <motion.div
                key={index}
                style={listItemStyle}
                variants={listItemVariants}
                transition={{ duration: 2.0, ease: "anticipate" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
