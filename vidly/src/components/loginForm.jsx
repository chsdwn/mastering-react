import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

import Input from "./common/input";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("submit");
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
            autoFocus
          />
          <Input
            name="password"
            label="Password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={this.validate()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
