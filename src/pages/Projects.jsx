// src/pages/Projects.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../componentes/Header';
import SocialMedia from '../componentes/SocialMedia';
import ProjectLIst from "../componentes/ProjectList";

const Projects = () => {
  return (
    <div>
      <Header/>
      <SocialMedia /> 
      <ProjectLIst />
    </div>
  );
};

export default Projects;