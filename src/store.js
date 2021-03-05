import { createStore } from "redux";

export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }

  if (action.type === "INC") {
    console.log("action : ", action.number);
    return { ...state, number: state.number + action.number };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
