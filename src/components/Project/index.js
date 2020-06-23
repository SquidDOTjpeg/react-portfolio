import React from "react";
import "./style.css";


function Project(props) {
  var imagepath = props.imgpath
  var image = require("../../Images/assets/" + imagepath)
  return (
    <div className="project-container">
      <img src={image} alt="trash" className="project-images"></img>
      <div className="links-container">
        <a href={props.deployed}>{props.title}</a>
        <br />
        <a href={props.github}>{props.github}</a>
      </div>
    </div>
  );
}

export default Project;
