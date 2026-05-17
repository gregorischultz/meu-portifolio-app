import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import allProjects, { categories } from "../Data/AllProjects";
import ProjectCard from "./ProjectCard";
import '../estilos/ProjectList.css';

const ProjectList = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all"
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="project-list-wrapper">
      <div className="project-filters">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("all")}
        >
          Tous
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={filter === cat.id ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div className="project-cards" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectList;
