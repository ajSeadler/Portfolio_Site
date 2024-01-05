import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
    textAlign:"center"
  };

  const skillsContainerStyle = {
    background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
    borderRadius: "8px",
    padding: "20px", // Adjust padding as needed
    margin: "auto",
    textAlign: "center",
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
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

  const listItemStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
    textAlign:"center"
  };

  const skills = [
    "Node.js",
    "JavaScript",
    "React / Redux",
    "Express",
    "Python",
    "Flask",
    "Git",
    "HTML5",
    "CSS",
    "GitHub",
    "Bootstrap",
    "Material UI",
    // Add more skills as needed
  ];

  return (
    <div id="skills" className="container-fluid py-5" ref={ref}>
      <div className="container p-5 rounded">
        <div className="coding-divider">
          <FontAwesomeIcon icon={faCode} style={{ fontSize: '3rem' }} />
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
        <motion.p
          className="text-center text-light"
          style={paragraphStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.5 }}
        >
          My knowledge of these technologies and tools allows me to contribute
          to the development of efficient and user-friendly web applications.
          <br /> With experience in various web development technologies, I am
          well-equipped to make meaningful contributions to your projects and
          team.
        </motion.p>
        <motion.div
          id="skills"
          className="list-group"
          style={skillsContainerStyle}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              style={listItemStyle}
              variants={listItemVariants}
              transition={{ duration: 2.0, ease: "anticipate" }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
