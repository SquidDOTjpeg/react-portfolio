import React from "react";
import "./style.css";

function WordBox(props) {
  return (
    <>
      <div className="word-box-container">
        <p className="words">{props.children}</p>
        {props.after}
      </div>

      <br />
    </>
  );
}

export default WordBox;
