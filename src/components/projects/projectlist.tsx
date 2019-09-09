import React from "react";
import ProjectSummary from "./projectsummary";
import { Project } from "./project";

interface ProjectListProps {
  projects: Array<Project>;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  //get projects of ProjectListProps object and store it in local projects variable
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary key={project.id} project={project} />;
        })}
    </div>
  );
};

export default ProjectList;
