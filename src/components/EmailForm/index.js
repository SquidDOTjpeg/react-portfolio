import React from "react";
import "./style.css";
import { Col, Row } from "../Grid";
import Title from "../Title";

function EmailForm({ handleFormInput, submitForm }) {
  return (
    <div className="email-container">
      <Title>Email Me</Title>
      <br />
      <form>
        <Row>
          <Col size="sm-6">
            <input
              name="name"
              className="name-input"
              placeholder="Name"
              onChange={handleFormInput}
            ></input>
          </Col>
          <Col size="sm-6">
            <input
              name="author"
              className="author-input"
              placeholder="Your Email"
              onChange={handleFormInput}
            ></input>
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
            <input
              name="email"
              className="email-input"
              placeholder="Email"
              onChange={handleFormInput}
            ></input>
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
            <button onClick={submitForm} className="send-btn">
              Send
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default EmailForm;
