import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const titleStyle = {
    color: "white",
    fontSize: "2rem",
    marginBottom: "2rem",
    marginTop:'0%'
  };

  const paragraphStyle = {
    color: "white",
    fontSize: "1.1rem",
    marginBottom: "3rem",
  };

  const skillsListStyle = {
    listStyle: "none",
    width: "80%", // Adjusted width for larger screens
    padding: 0,
    margin: "auto",
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

  return (
    <div id="skills" className="container-fluid py-5" ref={ref}>
      <div className="container p-4 rounded">
        <div className="coding-divider">
          <i className="fa fa-cogs fa-3x fa-fw"></i>
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
        <motion.ul
          id="skills"
          className="list-group"
          style={skillsListStyle}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="list-group-item"
              variants={listItemVariants}
              transition={{ duration: 2.0, ease: "anticipate" }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
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

export default Skills;
