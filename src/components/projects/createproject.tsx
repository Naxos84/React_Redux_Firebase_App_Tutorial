import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

interface CreateProjectState {
  title: string;
  content: string;
}
interface CreateProjectProps extends RouteComponentProps {}

class CreateProject extends Component<CreateProjectProps> {
  state: CreateProjectState;
  constructor(props: CreateProjectProps) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.persist();
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={() => {}} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button
              className="btn pink lighten-1 z-dept"
              onClick={this.handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
