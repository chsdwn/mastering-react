import React, { Component, createRef } from "react";

class LoginForm extends Component {
  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = e => {
    e.preventDefault();

    // Vanilla js
    //const username = document.getElementById("username").value;
    const username = this.username.current.value;

    console.log("submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              ref={this.username}
              type="text"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
