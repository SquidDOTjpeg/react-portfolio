import React from "react";
import "./style.css";

function ContactContainer(props) {
  return (
    <>
      <div>
        <div className="stuff-container">{props.children}</div>
      </div>
    </>
  );
}

export default ContactContainer;
