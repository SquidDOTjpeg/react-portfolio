import React from "react";
import "./style.css";

function Project(props) {
  var image = props.imgpath;
  console.log(image);
  var path = require("../../Images/assets/" + image);
  return (
    // <div className="project-container">
      <div className="links-container">
      <img src={path} alt="trash" className="project-images"></img>
        <a href={props.deployed}>{props.title}</a>
        <br />
        <a href={props.github}>Source Code</a>
        <br />
        <p>{props.description}</p>
      </div>
    // </div>
  );
}

export default Project;
