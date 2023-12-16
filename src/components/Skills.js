import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Skills() {
  const titleStyle = {
    color: "white", // Set the text color of the title to white
  };

  const paragraphStyle = {
    color: "white", // Set the text color of the paragraph to white
    fontSize: "1.1rem", // Optional: You can adjust the font size
  };

  return (
    <div id="skills" className="container-fluid py-5">
      <div className="container p-4 rounded">
        <div className="coding-divider">
          <i class="fa fa-cogs fa-3x fa-fw"></i>
        </div>
        <h2 className="text-center mb-4" style={titleStyle}>
          SKILLS
        </h2>
        <p className="text-center mt-3 text-light" style={paragraphStyle}>
          My knowledge of these technologies and tools allows me to contribute
          to the development of efficient and user-friendly web applications.{" "}
          <br /> With experience in various web development technologies, I am
          well-equipped to make meaningful contributions to your projects and
          team.
        </p>
        <div className="row">
          <div className="col-md-6 mx-auto">
            {/* <h3 className="text-muted">Proficient in:</h3> */}
            <ul className="list-group">
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">React / Redux</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">Python</li>
              <li className="list-group-item">Flask</li>
              <li className="list-group-item">Git</li>
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">GitHub</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Material UI</li>

              {/* Add more skills as needed */}
            </ul>
          </div>
          {/* <div className="col-md-6">
            <h3 className="text-muted">Knowledgeable in:</h3>
            <ul className="list-group">
              <li className="list-group-item">Vue</li>
              <li className="list-group-item">Angular</li>
              <li className="list-group-item">Ruby</li>
              
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
