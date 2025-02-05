//import { createContext, useContext, useState } from "react";
//import React from "react";

//export const ProjectContext = createContext(null);

/* export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project A", description: "First project" },
    { id: 2, name: "Project B", description: "Second project" },
  ]);

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
}

export function useProjects() {
  return useContext(ProjectContext);
}
*/
import { createContext, useContext, useState } from "react";
import React from "react";

// Define a type for the context value
type ProjectContextType = {
  projects: { id: number; name: string; description: string }[];
};

// Initialize the context with the correct type
export const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project A", description: "First project" },
    { id: 2, name: "Project B", description: "Second project" },
  ]);

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
}

export function useProjects() {
  return useContext(ProjectContext);
}

