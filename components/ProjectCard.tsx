/*import React from "react";

export default function Navbar() {
    return (
      <nav className="navbar">
        <h2>Project Management</h2>
      </nav>
    );
  }
  
  */

  import React from "react";

type Project = {
  id: number;
  name: string;
  description: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;


  