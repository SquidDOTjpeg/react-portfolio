import React from "react";
import "./style.css";

function WordBox(props) {
  return (
      <>
    <div>
      <div className="stuff-container">
        <p className="words">
            {props.words}
        </p>
      </div>
    </div>
    <br />
    </>
  );
}

export default WordBox;
