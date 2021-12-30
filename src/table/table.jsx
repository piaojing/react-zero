import React from "react";
import Tr from "./tr";

export default function Table(props) {
  return (
    <table>
      {Array(props.elements.length)
        .fill()
        .map((item, index) => {
          return (
            <Tr
              clickCell={props.clickCell}
              key={index}
              id={index}
              elements={props.elements}
              player={props.player}
            >
            </Tr>
          );
        })}
    </table>
  );
}

// // Array.map
// let numbers = [1, 4, 9];
// let doubles = numbers.map(function (num) {
//   return num * 2;
// });

// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

// // html script example
// let text = "";
// const fruits = ["apple", "orange", "cherry"];

// Array(3).fill().map((item, index) =>{text += index + ": " + item + "<br>";});
// document.getElementById("demo").innerHTML = text;

// fruits.map((item, index) =>{text += index + ": " + item + "<br>";});
// document.getElementById("demo").innerHTML = text;

// // console example
// Array(3).fill().map((item, index) =>index);
// Array(3).fill().map((item, index) =>item);
// ["apple", "orange", "cherry"].map((item, index) =>item+"-delicious");
