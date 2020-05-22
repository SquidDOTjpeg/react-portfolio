import React from "react";

function Project(props) {
  return (
    <div>
      {/* <img src={}>Project img go here</img> */}
      <div>
        <a href={props.deployed}>{props.title}</a>
        <a href={props.github}>{props.github}</a>
      </div>
    </div>
  );
}
