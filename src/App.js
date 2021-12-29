import React, { useReducer } from "react";
import Table from "./table/table";
import "./App.css";

const initialState = {
  userTurn: "X",
  elements: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};


function reducer(state, action) {
  switch (action.type) {
    case "GET_CELL_NUMBER":
      return { count: state.count + 1 };
    case "CHANGE_TURN":
      return { userTurn: "O" };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickCell = () => {
    alert("hi");
  };
  
  console.log(state.elements.length)
  // debugger
  return (
    <div className="container">
      <p>Turn: {state.userTurn}</p>
      <Table elements={state.elements}></Table>
      {/* <button onClick={() => dispatch({type: 'GET_CELL_NUMBER'})}></button> */}
    </div>
  );
}
