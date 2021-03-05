import React, { Component } from "react";
import store from "../store";
import DisplayNumber from "../components/DisplayNumber";

export default class Wrapped extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().number,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }

  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}
