// import { Component } from "react";
// import store from "../store";
import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapReductDispatch2ReactProps(dispatch) {
  return { onClick: (size) => dispatch({ type: "INC", number: size }) };
}

export default connect(null, mapReductDispatch2ReactProps)(AddNumber);

// export default class Wrapped extends Component {
//   render() {
//     return <AddNumber onClick={(size) => store.dispatch({ type: "INC", number: size })}></AddNumber>;
//   }
// }
