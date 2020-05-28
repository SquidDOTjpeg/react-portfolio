import React from "react";
import "./style.css";

function WordBox(props) {
  return (
      <>
    <div>
      <div className="word-box-container">
        <p className="words">
            {props.children}
        </p>
      </div>
    </div>
    <br />
    </>
  );
}

export default WordBox;