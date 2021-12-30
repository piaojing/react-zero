import React from "react";
import Td from "./td";

export default function Tr(props) {
  return (
    <tr>
      {Array(props.elements.length)
        .fill()
        .map((item, index) => {
          return (
            <Td
              clickCell={props.clickCell}
              key={props.id.toString() + index.toString()}
              id={props.id.toString() + index.toString()}
              elements={props.elements}
              player={props.player}
            >
            </Td>
          );
        })}
    </tr>
  );
}

// // forEach
// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach((item, index) =>{text += index + ": " + item + "<br>";});
// document.getElementById("demo").innerHTML = text;
