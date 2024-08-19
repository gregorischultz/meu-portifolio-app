// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProjectCard";
import allProjects from "../data/AllProjects";
import '../estilos/ProjectCard.css';


const ProjectLIst = () => {
    return (
        <div className="project-cards">
            {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    );
};

export default ProjectLIst;