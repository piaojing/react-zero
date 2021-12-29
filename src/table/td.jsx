import React from "react";

export default function Td(props) {
  return (
    <td
      onClick={() => {
        console.log(props.id);
      }}
    >
      {""}
    </td>
  );
}
