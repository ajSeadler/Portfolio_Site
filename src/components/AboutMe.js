import React from "react";

const aboutMeContainerStyle = {
  color: "white",
  backgroundColor: "transparent",
  padding: "20px",
  borderRadius: "10px",
  margin: "20px auto",
  textAlign: "center",
  maxWidth: "800px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

// const headingStyle = {
//   color: "#45a049",
//   marginBottom: "10px",
// };

const subHeadingStyle = {
  color: "#45a049",
  textAlign: 'left',
  marginTop: "20px",
  marginBottom: "10px",
  marginLeft: "10%",
};

const circleImageStyle = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "50%",
  margin: "20px auto 0",
};

const paragraphStyle = {
  marginBottom: "10px",
  width: '70%',
  margin: 'auto',
  textAlign: 'left',
};

const spotifyIFrameStyle = {
  width: "100%",
  height: "400px",
  marginTop: "20px",
};



function AboutMe() {
  return (
    <div className="container" style={aboutMeContainerStyle}>
      {/* <h2 style={headingStyle}>About Me</h2> */}

      <img
        src="/guitar-pic.JPEG"
        alt="Guitar"
        className="img-fluid rounded-circle"
        style={circleImageStyle}
      />

      <h3 style={subHeadingStyle}>Who Am I?</h3>

      <p style={paragraphStyle}>
        I'm a dedicated full-stack web developer navigating the ever-evolving landscape of software engineering. Here you will find information about any projects I have contributed to or designed.
      </p>

      

      <h3 style={subHeadingStyle}>Music</h3>

      <p style={paragraphStyle}>
        Aside from coding, music is also a huge part of my life! Check out my band Disco Stranger and our latest tracks on Spotify.
      </p>

      <iframe
        style={spotifyIFrameStyle}
        title="iframe"
        src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default AboutMe;
