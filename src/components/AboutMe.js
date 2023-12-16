import React from "react";

const aboutMeStyle = {
  color: "white", // Set text color to white
  backgroundColor: "#6565658d", // Set background color to transparent black
  backdropFilter: "blur(10px)", // Apply a blur effect to the background
  padding: "20px", // Add padding for spacing
  borderRadius: "10px", // Add rounded corners
};

const imageStyle = {
  maxWidth: "100%", // Ensure the image doesn't exceed its parent container
  height: "auto", // Maintain the aspect ratio of the image
  objectFit: "cover", // Resize the image while maintaining its aspect ratio
};

function AboutMe() {
  return (
    <div className="container" style={aboutMeStyle}>
      <h2 className="text-center mb-4">About Me</h2>

      <div className="row">
        <div className="col-md-6">
          <img
            src="/guitar-pic.JPEG"
            alt="Guitar"
            className="img-fluid rounded"
            style={imageStyle}
          />
        </div>
        <div className="col-md-6">
          <p>
            Welcome to my portfolio! I am a passionate full-stack web developer
            with expertise in technologies such as Node.js, React, and more.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis sed libero sagittis mattis. Curabitur vel justo vitae lacus
            varius sollicitudin.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 order-md-2">
          <img
            src="/aj-opolis.jpg"
            alt="AJ Opolis"
            className="img-fluid rounded"
            style={imageStyle}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis sed libero sagittis mattis. Curabitur vel justo vitae lacus
            varius sollicitudin. Phasellus vel erat in dui blandit interdum nec
            vitae metus. Sed nec est vel sem facilisis bibendum. Proin ut
            vehicula justo. Fusce ut fermentum arcu. Proin id sagittis ex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
