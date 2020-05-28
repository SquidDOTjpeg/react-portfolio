import React from "react";
import "./style.css";

function ContactContainer(props) {
  return (
      <>
    <div>
      <div className="stuff-container">
        <p className="words">
            {props.children}
        </p>
      </div>
    </div>
    <br />
    </>
  );
}

export default ContactContainer;
