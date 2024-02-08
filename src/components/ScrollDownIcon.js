import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const ScrollDownIcon = () => {
  return (
    <motion.div
      className="icon neon-glow"
      style={{
        position: "fixed", // Change position to fixed
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "pointer",
        zIndex: 9999, // Ensure the icon is above other content
      }}
    >
      <FontAwesomeIcon icon={faMouse} style={{ fontSize: '2rem' }} />
    </motion.div>
  );
};

export default ScrollDownIcon;
