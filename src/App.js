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
  // console.log(state);
  // console.log(action.type);
  // console.log(history)
  switch (action.type) {
    case "CHANGE_TURN":
      if (state.turn === "X") {
        return { ...state, turn: "O" };
      } else {
        return { ...state, turn: "X" };
      }
    case "WIN_GAME":
      // return { ...state, winner: state.turn };
      return { ...state, winner: action.winner }; // winner: action.winner <-- get winner value from clickCell function (0000)
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
    // case "HISTORY":
    //   return history;
    default:
      throw new Error();
  }
}

// const history=null;
const elementsHistory = [];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickCell = (id) => {
    // debugger
    // console.log("state.selectedCell: " + state.selectedCell);
    if ((state.winner != "") | (state.selectedCell === 8)) {
      dispatch({ type: "NEW_GAME" });
    }
    // console.log("Cell click");
    // console.log(id, state.turn);

    let row = parseInt(id[0]);
    let col = parseInt(id[1]);
    const elementsArray = Array.from(state.elements);
    // console.log(elementsArray === state.elements);

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
      dispatch({ type: "WIN_GAME", winner: state.turn }); // winner:state.turn <-- send winner value to reduce function (0000)
    }

    dispatch({ type: "CHANGE_TURN" });
  };

  const historyList = () => {
    return Array(state.selectedCell)
      .fill()
      .map((a, index) => (
        <li key={index}>
          <a href="/">History {index + 1}</a>
        </li>
      ));
    // debugger
  };

  const gotoHistory = (e) => {
    e.preventDefault();
    // console.log(e.target.text.split(' ')[1]); // number
    const i = e.target.text.split(" ")[1];
    const history = Array.from(elementsHistory[i - 1]);
    console.log(elementsHistory[i - 1]);
    // dispatch({ type: "HISTORY" });
  };

  return (
    <>
      <div className="container">
        <p>Turn: {state.turn}</p>
        <Table clickCell={clickCell} elements={state.elements}></Table>
        <p>Winner is {state.winner}</p>
      </div>
      <div className="history" onClick={gotoHistory}>
        {historyList()}
      </div>
    </>
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
