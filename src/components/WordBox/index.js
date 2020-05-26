import React from "react";
import "./style.css";

function WordBox(props) {
  return (
    <div>
      <div>
        <h1 className="project-title">About Me</h1>
      </div>
      <div className="stuff-container">
        <p className="words">
            {props.words}
          {/* Hey there! I'm Anthony Pillow, an aspiring full stack web developer. I
          have a wide range of knowledge of languages used in web development
          with a heavier focus on the MERN stack. */}
        </p>
      </div>
    </div>
  );
}

export default WordBox;
