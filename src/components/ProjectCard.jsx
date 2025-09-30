import React from "react";

function ProjectCard({ image, title, description, githubLink, alt }) {
  return (
    <div className="project-card">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
