import React, { useReducer } from "react";
import Table from "./table/table";
import "./App.css";

const initialState = {
  turn: "X",
  player: "",
  elements: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

function reducer(state, action) {
  console.log(state);
  // console.log(action.type);

  switch (action.type) {
    case "CHANGE_TURN":
      if (state.turn === "X") {
        return { ...state, turn: "O" };
      } else {
        return { ...state, turn: "X" };
      }

    default:
      throw new Error();
  }
}

const elementsHistory = [];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickCell = (id) => {
    // console.log("Cell click");
    console.log(id, state.turn);

    let row = parseInt(id[0]);
    let col = parseInt(id[1]);
    const elementsArray = Array.from(state.elements);
    console.log(elementsArray===state.elements)
    if (elementsArray[row][col] === "") {
      elementsArray[row][col] = state.turn;
    } else {
      return; // do not any action
    }

    dispatch({ type: "CHANGE_TURN" });
  };

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

// // change item in list
// var items = [523, 3452, 334, 31, 5346];
// var index = items.indexOf(3452);

// if (~index) {
//     items[index] = 1010;
// }
