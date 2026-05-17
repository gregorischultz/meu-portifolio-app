import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { categories } from "../Data/AllProjects";
import '../estilos/ProjectCard.css';

const categoryLabel = (id) => {
  const found = categories.find(c => c.id === id);
  return found ? found.label : id;
};

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Fermer">
            <Icon icon="lucide:x" />
          </button>

          <div className="modal-video">
            <iframe
              src={`https://www.youtube.com/embed/${project.linkVideo}`}
              frameBorder="0"
              allowFullScreen
              title={project.name}
            />
          </div>

          <div className="modal-info">
            {project.category && (
              <span className="modal-badge">{categoryLabel(project.category)}</span>
            )}
            <h2 className="modal-title">{project.name}</h2>
            <p className="modal-module">{project.moduleCurso}</p>
            <div className="modal-tags">
              {project.tecnologias.split(',').map((t, i) => (
                <span key={i} className="modal-tag">{t.trim()}</span>
              ))}
            </div>
            <p className="modal-desc">{project.descriçao}</p>
            <a
              href={project.linkGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-github-link"
            >
              <Icon icon="akar-icons:github-fill" />
              Voir sur GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card" onClick={() => setOpen(true)}>
        <div className="card-image-wrap">
          <img src={project.img} alt={project.name} />
          <div className="card-overlay">
            <span className="card-overlay-hint">
              <Icon icon="lucide:eye" /> Voir Plus
            </span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-header-row">
            <h3 className="card-title">{project.name}</h3>
            {project.category && (
              <span className="card-badge">{categoryLabel(project.category)}</span>
            )}
          </div>
          <div className="card-tags">
            {project.tecnologias.split(',').slice(0, 3).map((t, i) => (
              <span key={i} className="card-tag">{t.trim()}</span>
            ))}
          </div>
          <div className="card-actions" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.linkGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn card-btn-ghost"
            >
              <Icon icon="akar-icons:github-fill" /> GitHub
            </a>
            <button className="card-btn card-btn-primary" onClick={() => setOpen(true)}>
              Voir Plus
            </button>
          </div>
        </div>
      </div>

      {open && <Modal project={project} onClose={() => setOpen(false)} />}
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    linkGitHub: PropTypes.string.isRequired,
    linkVideo: PropTypes.string.isRequired,
    moduleCurso: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    descriçao: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
