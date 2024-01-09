import React, { useEffect } from "react";
import ReactModal from "react-modal";

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);

  const modalStyle = {
    content: {
      width: "80%", // Default width for larger screens
      maxWidth: "600px",
      margin: "auto",
      backgroundColor: "#1a1a1a",
      borderRadius: "8px",
      border: "none",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxHeight: "37vh",
      overflowY: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  // Media query for screens with a maximum width of 767px (typical mobile devices)
  const mobileModalStyle = {
    content: {
      width: "80%", // Adjusted width for smaller screens
      maxWidth: "100%", // Full width on small screens
    },
  };

  const projectDescriptionStyle = {
    color: "white",
    textAlign: "left",
    marginBottom: "10px",
  };

  const closeButtonStyle = {
    marginTop: "0",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 0px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Project ${project.id} Description Modal`}
      style={window.innerWidth <= 767 ? { ...modalStyle, ...mobileModalStyle } : modalStyle}
    >
      <div className="card-body des" style={projectDescriptionStyle}>
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">
          <strong>Technologies:</strong>{" "}
          <i>{project.technologies.join(", ")}</i>
          <br />
          <br></br>
          <strong>Description:</strong> {project.description}
          <br />
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>
      </div>
      <button className="close-button" style={closeButtonStyle} onClick={onRequestClose}>
        Close
      </button>
    </ReactModal>
  );
};

export default ProjectModal;
