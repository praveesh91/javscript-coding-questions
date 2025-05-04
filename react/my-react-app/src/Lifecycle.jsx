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

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(
      "componentWillUnmount is called to clean up when a component is unmounted"
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
