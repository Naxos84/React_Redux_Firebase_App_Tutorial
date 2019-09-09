import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectList from "../projects/projectlist";
import { Project } from "../projects/project";
import { connect } from "react-redux";
import { AppState } from "../../App";
import { RouteComponentProps } from "react-router";

interface DashboardProps extends RouteComponentProps {
  projects: Array<Project>;
}

class Dashboard extends Component<DashboardProps> {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  state: AppState,
  ownProps: RouteComponentProps
): DashboardProps => {
  return {
    ...ownProps,
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
