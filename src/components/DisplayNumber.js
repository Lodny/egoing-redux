import React, { Component } from "react";
import store from "../store";

export default class DisplayNumber extends Component {
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
    // console.log(this.props);

    return (
      <div>
        <h1>Display Number</h1>
        {/* <input type="text" value={this.props.number} readOnly></input> */}
        {/* <input type="text" value={store.getState().number} readOnly></input> */}
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    );
  }
}
