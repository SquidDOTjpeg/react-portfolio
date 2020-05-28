import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="project-container">
      <img
        className="project-images"
        src={require("./Squid.jpg")}
        alt="Squid"
      ></img>
      <div className="links-container">
        <a href={props.deployed}>{props.title}</a>
        <br />
        <a href={props.github}>{props.github}</a>
      </div>
    </div>
  );
}

export default Project;
