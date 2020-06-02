import React from "react";
import "./style.css";


function Project(props) {
  var image = props.imgpath
  console.log(image)
  var fuckshit = require("../../Images/assets/" + image)
  return (
    <div className="project-container">
      <img src={fuckshit} alt="trash" className="project-images"></img>
      <div className="links-container">
        <a href={props.deployed}>{props.title}</a>
        <br />
        <a href={props.github}>{props.github}</a>
      </div>
    </div>
  );
}

export default Project;
