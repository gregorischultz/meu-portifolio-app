// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import '../estilos/ProjectCard.css';
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const [popupState, setPopupState] = useState(false); 

  const showPopup = () => {
    setPopupState(true);
  };

  const hidePopup = () => {
    setPopupState(false);
  };

  return (
    <div className="project-card">
      <img src={project.img} alt={project.name} />
      <div className="project-info">
        <h3>{project.name}</h3>
      </div>
      <div className="project-buttons">
        <button onClick={showPopup}>Voir Plus</button>
        <a href={project.linkGitHub} target="_blank" rel="noopener noreferrer" className="github-icon">
          GitHub
          <i className="bi bi-github" />
        </a>
      </div>
      {popupState ? ( //quando o popup estiver aberto é esse codigo abaixo que vai aparecer
        <section className="popup">
          <div className="popup-text-video-container">
            <div className="popup-div-close">
              <button className="popup-Close" onClick={hidePopup}>
                X
                <i className="bi bi-x-circle popupClose" />
              
              </button>
            </div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${project.linkVideo}`}
              frameBorder="0"
              allowfullscreen
             ></iframe>
            <div className="popup-informative-text">
              <h2>{project.name}</h2>
              <h3>{project.moduleCurso}</h3>
              <h4>{project.tecnologias}</h4>
              <p className="popup-info-project-text">{project.descriçao}</p>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};


ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    linkGitHub: PropTypes.string.isRequired,
    linkVideo: PropTypes.string.isRequired,
    moduleCurso: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    descriçao: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;