import React from "react";
import { RouteComponentProps } from "react-router";
interface ProjectDetailsParams {
  id: string;
}
interface ProjectDetailsProps extends RouteComponentProps {}

const ProjectDetails = (props: ProjectDetailsProps) => {
  const params = props.match.params as ProjectDetailsParams;
  const id = params.id;
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid dicta ab quos distinctio nostrum doloremque
            illum iusto, optio ut alias, perferendis quaerat voluptatibus!
            Blanditiis dolores quibusdam quod voluptatem incidunt?
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by MKO</div>
            <div>2nd September. 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
