import { Component } from "react";
import store from "../store";
import AddNumber from "../components/AddNumber";

export default class Wrapped extends Component {
  render() {
    return <AddNumber onClick={(size) => store.dispatch({ type: "INC", number: size })}></AddNumber>;
  }
}
