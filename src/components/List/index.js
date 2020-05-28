import React from "react";
import ListItem from "../ListItem/index";

function List(props) {
  return (
    <div>
      <ui>
        {props.items.map((el) => (
          <ListItem>{el}</ListItem>
        ))}
      </ui>
    </div>
  );
}

export default List
