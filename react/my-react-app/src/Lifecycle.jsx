import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleAdd = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
