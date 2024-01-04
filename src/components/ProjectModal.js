import React from "react";
import ReactModal from "react-modal";

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  const projectDescriptionStyle = {
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "left",
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Project ${project.id} Description Modal`}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <div className="card-body des" style={projectDescriptionStyle}>
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">
          | {project.technologies.join(", ")} | {project.description}
          <br />
          {" "}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>
      </div>
      <button className="close-button" onClick={onRequestClose}>
        Close
      </button>
    </ReactModal>
  );
};

export default ProjectModal;
