import React, { Component } from "react";
// import AddNumber from "./AddNumber";
import AddNumber from "../container/AddNumber";

export default class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        {/* <AddNumber onClick={(size) => this.props.onClick(size)}></AddNumber> */}
        <AddNumber />
      </div>
    );
  }
}
