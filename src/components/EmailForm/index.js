import React from "react";
import "./style.css";
import { Col, Row } from "../Grid";

function EmailForm() {
  return (
    <div className="email-container">
      <form>
        <Row>
          <Col size="md-6">
            <input placeholder="name"></input>
          </Col>
          <Col>
            <input placeholder="subject"></input>
          </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <input placeholder="email"></input>
            </Col>
        </Row>
      </form>
    </div>
  );
}

export default EmailForm;
