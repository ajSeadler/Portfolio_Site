import React from "react";

const aboutMeContainerStyle = {
  color: "white",
  backgroundColor: "#6565658d",
  backdropFilter: "blur(10px)",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
  textAlign: "center", // Center text in the container
};

const headingStyle = {
  color: "#45a049", // Change to your desired green color
  marginBottom: "10px",
};

const circleImageStyle = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "50%",
  margin: "0",
};

const paragraphStyle = {
  marginBottom: "20px",
};


function AboutMe() {
  return (
    <div className="container" style={aboutMeContainerStyle}>
      <h2 style={headingStyle}>About Me</h2>

      <img
        src="/guitar-pic.JPEG"
        alt="Guitar"
        className="img-fluid rounded-circle"
        style={circleImageStyle}
      />

      <p style={paragraphStyle}>
        Welcome to my portfolio site! Here you will find any projects I have created and or worked on.
      </p>

     
    </div>
  );
}

export default AboutMe;
