import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: transparent;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed positioning to keep the footer at the bottom on larger screens */
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* Ensure the footer is above other content */
  
  @media (max-width: 768px) {
    position: static; /* Static positioning on smaller screens */
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column; /* Stack icons vertically */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row; /* Change back to row direction on smaller screens */
  }

  a {
    color: #fff;
    font-size: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #36d7b7;
    }
  }
`;

const ScrollToTopIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: ${({ show }) => (show ? "1" : "0")}; /* Hide if show is false */
  pointer-events: ${({ show }) => (show ? "auto" : "none")}; /* Disable pointer events if show is false */

  &:hover {
    background-color: #b1916e;
  }

  svg {
    color: #333;
    width: 20px;
    height: 20px;
  }
`;

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <FooterContainer>
      <FooterLinks>
        <a href="https://github.com/ajSeadler" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/anthony-seadler" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </FooterLinks>
      <ScrollToTopIcon show={showScroll} onClick={handleScrollToTop}>
        <FaArrowUp />
      </ScrollToTopIcon>
    </FooterContainer>
  );
};

export default Footer;
