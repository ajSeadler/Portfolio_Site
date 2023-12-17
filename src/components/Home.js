import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
import Skills from "./Skills";
import Locations from "./Locations";

const Home = () => {
  const controls = useAnimation();

  const homeVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  useEffect(() => {
    // Start animation controls when component mounts
    controls.start("visible");
  }, [controls]);

  return (
    <div id="home">
      <motion.div
        className="container text-center hero2"
        variants={homeVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.img
          src="/portrait.jpg"
          alt="Anthony Seadler"
          className="rounded-circle img-fluid profile-pic"
          style={{ width: "200px", height: "200px" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 1, ease: "easeOut" } }}
        />
        <motion.h1
          className="mt-0"
          style={{ color: "white", fontFamily:'Bebas Neue'}}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeOut" } }}
        >
          <h1 style={{fontSize:'3rem', marginTop:'15px'}}>ANTHONY SEADLER</h1>
        </motion.h1>

        <motion.div
          className="coding-divider1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.8, ease: "easeOut" } }}
        >
          <i className="fa fa-code fa-2x"></i>
        </motion.div>
        <motion.h3
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.8, ease: "easeOut" } }}
        >
          <h2>Full Stack Developer</h2>
        </motion.h3>
      </motion.div>

      <div className="proj-home">
      <ProjectsSection />
      
      </div>
      <Skills />
      <Locations />
    </div>
  );
};

export default Home;
