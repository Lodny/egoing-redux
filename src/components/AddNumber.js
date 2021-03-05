import React, { Component } from "react";
import store from "../store";

export default class AddNumber extends Component {
  state = { size: 5 };

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="text" value={this.state.size} onChange={(e) => this.setState({ size: e.target.value })}></input>
        <input
          type="button"
          value="+"
          onClick={() => {
            // this.props.onClick(Number(this.state.size));
            store.dispatch({ type: "INC", number: Number(this.state.size) });
          }}
        ></input>
      </div>
    );
  }
}
