import React from "react";

export default function Td(props) {
  let row=parseInt(props.id[0])
  let col=parseInt(props.id[1])
  return (
    <td
      onClick={() => {
        // console.log(props.id);
        props.clickCell(props.id);
      }}
    >
      {props.elements[row][col]}
    </td>
  );
}
