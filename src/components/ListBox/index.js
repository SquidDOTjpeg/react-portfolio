import React from "react";
import "./style.css";

function ListBox(props) {
  return (
      <>
      <div className="list-box-container">
        {props.children}
      </div>
    </>
  );
}

export default ListBox;
