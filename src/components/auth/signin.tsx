import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

interface SignInState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
interface SignInProps extends RouteComponentProps {}

class SignIn extends Component<SignInProps> {
  constructor(props: SignInProps) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.persist();
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={() => {}} className="white">
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button
              className="btn pink lighten-1 z-dept"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
