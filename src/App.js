import React, { useReducer } from "react";
import Table from "./table/table";
import "./App.css";

const initialState = {
  turn: "X",
  player:'',
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
      return { turn: "O" };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickCell = (id) => {
    console.log("Cell click");
    console.log(id);
  };

  console.log(state.elements.length);
  // debugger
  return (
    <div className="container">
      <p>Turn: {state.turn}</p>
      <Table
        clickCell={clickCell}
        elements={state.elements}
        player={state.player}
      ></Table>
      
      {/* <button onClick={() => dispatch({type: 'GET_CELL_NUMBER'})}></button> */}
    </div>
  );
}
