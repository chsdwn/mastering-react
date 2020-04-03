import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required(),
    name: Joi.string().required()
  };

  doSubmit = () => {
    console.log("Registered");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default RegisterForm;
