import React from "react";
import "./style.css";

function MeImage() {
  var image = require("../../Images/assets/me.jpg");
  return (
    <div className="handsome-container">
      <img src={image} alt="Should be a handsome devil here" className="handsome-devil"></img>
    </div>
  );
}

export default MeImage;
