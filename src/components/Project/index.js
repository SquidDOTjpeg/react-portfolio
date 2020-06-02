import React from "react";
import "./style.css";
import Images from "../Images/index";

function Project(props) {
  return (
    <div className="project-container">
      {Images.map((el) => {
        if (el.src !== props.imgpath) {
        } else
          return (
            <img className="project-images" src={el.src} alt="Squid"></img>
          );
      })}
      <div className="links-container">
        <a href={props.deployed}>{props.title}</a>
        <br />
        <a href={props.github}>{props.github}</a>
      </div>
    </div>
  );
}

export default Project;
