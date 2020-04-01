import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // Works like ng-container
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
