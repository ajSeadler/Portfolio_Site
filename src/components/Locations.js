import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function Locations() {
  const openResumeInNewWindow = () => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vROp0POv-eFk24nWJ985XXiJNiEsaO_SpC1yOsKYUKDzAIPX-7QG5q20cLqAoSHc1Eg8pASO5mDaZnG/pub?embedded=true', '_blank');
  };
  
  return (
    <div id="locations" className="py-5" style={{ backgroundColor: 'transparent', color: '#fff' }}>
      <div className="container text-center">
        <div className="coding-divider">
          <a
           
            rel="noopener noreferrer"
            className=""
          >
            <FontAwesomeIcon icon={faUser} size="2x" style={{ color: '#45a049'}}/>
          </a>
        </div>
        <h2 className="display-7 mb-4">CONTACT</h2>
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="h4">
              <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: '#45a049' }} /> Email
            </h2>
            <p>aj6287@gmail.com</p>
          </div>
          <div className="col-md-12 mb-4">
            <h2 className="h4">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" style={{ color: '#45a049' }} /> Location
            </h2>
            <p>Oklahoma City, OK</p>
          </div>
          <div className="col-md-12 mb-4">
            <h2 className="h4">Connect With Me</h2>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/anthony-seadler"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '15px', color: '#45a049' }} />
              </a>
              <a
                href="https://github.com/ajSeadler"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" style={{ color: '#45a049'}} />
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <h3 className="h4"></h3>
            <div className="resume-download">
              <button
                className="btn btn-custom btn-lg"
                onClick={openResumeInNewWindow}
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
