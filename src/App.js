import React, { useReducer } from "react";
import Table from "./table/table";
import "./App.css";

const initialState = {
  turn: "X",
  winner: "",
  elements: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  selectedCell: 0,
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
    case "WIN_GAME":
      return { ...state, winner: "winner is " + state.turn };
    case "NEW_GAME":
      return {
        turn: "X",
        winner: "",
        elements: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        selectedCell: 0,
      };
    default:
      throw new Error();
  }
}

const elementsHistory = [];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickCell = (id) => {
    // debugger
    console.log("state.selectedCell: " + state.selectedCell);
    if ((state.winner != "") | (state.selectedCell === 8)) {
      dispatch({ type: "NEW_GAME" });
    }
    // console.log("Cell click");
    console.log(id, state.turn);

    let row = parseInt(id[0]);
    let col = parseInt(id[1]);
    const elementsArray = Array.from(state.elements);
    console.log(elementsArray === state.elements);

    // check selected
    if (elementsArray[row][col] === "") {
      elementsArray[row][col] = state.turn;
      state.selectedCell = state.selectedCell + 1;
    } else {
      return; // do not change cell
    }

    // identify win condition
    if (winGame(id, state) === "winner") {
      // debugger;
      dispatch({ type: "WIN_GAME" });
    }

    dispatch({ type: "CHANGE_TURN" });
  };

  return (
    <div className="container">
      <p>Turn: {state.turn}</p>
      <Table clickCell={clickCell} elements={state.elements}></Table>
      <p>{state.winner}</p>
      {/* <button onClick={() => dispatch({type: 'GET_CELL_NUMBER'})}></button> */}
    </div>
  );
}

//check win condition
const winGame = (id, state) => {
  let row = parseInt(id[0]);
  let col = parseInt(id[1]);

  if (
    (state.elements[row][0] === state.elements[row][1]) &
    (state.elements[row][1] === state.elements[row][2])
  ) {
    console.log("win", state.turn);
    return "winner";
  } else if (
    (state.elements[0][col] === state.elements[1][col]) &
    (state.elements[1][col] === state.elements[2][col])
  ) {
    console.log("win", state.turn);
    return "winner";
  }
  const array1 = [
    state.elements[0][0],
    state.elements[1][1],
    state.elements[2][2],
  ];
  const array2 = [
    state.elements[2][0],
    state.elements[1][1],
    state.elements[0][2],
  ];
  // check all items in array1,2 are same?
  if (
    (array1.filter((e, i, a) => e === "X").length === array1.length) |
    (array1.filter((e, i, a) => e === "O").length === array1.length)
  ) {
    console.log("win", state.turn);
    return "winner";
  } else if (
    (array2.filter((e, i, a) => e === "X").length === array2.length) |
    (array2.filter((e, i, a) => e === "O").length === array2.length)
  ) {
    console.log("win", state.turn);
    return "winner";
  }
};
// // change item in list
// var items = [523, 3452, 334, 31, 5346];
// var index = items.indexOf(3452);

// if (~index) {
//     items[index] = 1010;
// }
