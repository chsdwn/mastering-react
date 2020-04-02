import React, { Component } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navbar";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 2 }
    ]
  };

  constructor() {
    super();
    console.log("App ctor");
    // this.state = "No need to run setState() in constructor";
  }

  componentDidMount() {
    // Ajax call
    console.log("App mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.findIndex(c => c.id === counter.id);
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App render");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
