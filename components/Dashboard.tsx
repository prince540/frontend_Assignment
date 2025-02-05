/* import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import React from "react";

import ProjectCard from "./ProjectCard";    
import { useProjects } from "../hooks/useProjects";

export default function Dashboard() {
    const { projects } = useProjects();
  
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-main">
          <Navbar />
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  }
*/
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import React from "react";
import ProjectCard from "./ProjectCard";    
import { useProjects } from "../hooks/useProjects";

export default function Dashboard() {
    const { projects } = useProjects();
  
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-main">
          <Navbar />
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  }