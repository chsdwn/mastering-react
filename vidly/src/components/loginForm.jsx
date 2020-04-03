import React, { Component } from "react";

import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    return { username: "Username is required" };
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    console.log("submitted");
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            autoFocus
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
