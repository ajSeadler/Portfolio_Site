import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
import Skills from "./Skills";
import Locations from "./Locations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const controls = useAnimation();
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const homeVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  useEffect(() => {
    // Start animation controls when component mounts
    controls.start("visible");

    // Show scroll down icon when user is not scrolling
    const showIconTimeout = setTimeout(() => {
      if (!scrolling) {
        setShowScrollIcon(true);
      }
    }, 2000);

    // Hide scroll down icon when user starts scrolling
    const handleScroll = () => {
      setShowScrollIcon(false);
      setScrolling(true);
      clearTimeout(showIconTimeout);
      window.removeEventListener("scroll", handleScroll); // Remove event listener once icon is hidden
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(showIconTimeout);
    };
  }, [controls, scrolling]);

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
          style={{ color: "white", fontFamily: 'Bebas Neue', fontSize: '3rem', marginTop: '15px' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeOut" } }}
        >
          ANTHONY SEADLER
        </motion.h1>

        <motion.div
          className="coding-divider1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.8, ease: "easeOut" } }}
        >
          <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: '3rem' }} />
        </motion.div>
        <motion.h2
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.8, ease: "easeOut" } }}
        >
          Full Stack Web Developer
        </motion.h2>
      </motion.div>

      <div className="proj-home">
        <ProjectsSection />
      </div>
      <Skills />
      <Locations />

      {/* Scroll Down Icon */}
      <motion.div
        className="scroll-downs"
        animate={{ opacity: showScrollIcon ? 1 : 0, transition: { duration: 0.5 } }}
      >
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
