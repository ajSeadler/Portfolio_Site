import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";
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

const UpArrowIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: transparent;
`;

const CircleBackground = styled.circle`
  fill: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="https://github.com/ajSeadler" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/anthony-seadler" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        {/* <a href="mailto:anthonyseadler@gmail.com">
          <FaEnvelope />
        </a> */}
      </FooterLinks>
      <a href="#" aria-label="Scroll to Top">
        <UpArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <CircleBackground cx="12" cy="12" r="12" />
          <path d="M12 8l-8 8h16l-8-8z" fill="#333" />
        </UpArrowIcon>
      </a>
    </FooterContainer>
  );
};

export default Footer;
