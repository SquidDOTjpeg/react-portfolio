import React from "react";
import ListItem from "../ListItem/index";

function List(props) {
  return (
    <div>
      <ul>
        {props.items.map((el) => (
          <ListItem key={el}>{el}</ListItem>
        ))}
      </ul>
    </div>
  );
}

export default List
