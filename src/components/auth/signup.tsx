import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

interface SignUpState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
interface SignUpProps extends RouteComponentProps {}

class SignUp extends Component<SignUpProps> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
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
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">FirstName</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-dept">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
