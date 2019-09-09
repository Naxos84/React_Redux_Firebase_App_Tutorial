import React from "react";
import { Project } from "./project";

interface ProjectSummaryProps {
  project: Project;
}

const ProjectSummary = ({ project }: ProjectSummaryProps) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by MKO</p>
        <p className="grey-text">3rd of September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
