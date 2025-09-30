import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard.jsx";
import "../styles/theme.css";
import {projectsData} from "../utils/MockProjects.js";

function Projects() {
  const { theme } = useTheme();

  return (
    <div className={`projects-page ${theme}`}>
      <main>
        <section id="projects" className="projects-section">
          <h2 className="section-title">Proyectos Destacados</h2>
          <div className="projects-grid">
            {[...projectsData].sort((a, b) => a.title.localeCompare(b.title)).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
