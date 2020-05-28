import React from "react";
import ContactContainer from "../components/ContactContainers/index";
import Title from "../components/Title/index";
import { Row, Col } from "../components/Grid/index";
import ContactLinks from "../components/ContactLinks/index";
import "./style.css";

function Contact() {
  return (
    <div className="big-stuff-container">
      <Row>
        <Col size="md-12">
          <Title>Contact Me</Title>
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <ContactContainer>
            <i class="fas fa-envelope"></i>{" "}
            <ContactLinks>anthonypillow18@gmail.com</ContactLinks>
          </ContactContainer>
        </Col>
        <Col size="md-4">
          <ContactContainer>
            <i class="fab fa-github"></i>{" "}
            <ContactLinks link="https://github.com/SquidDOTjpeg">
              SquidDOTjpeg
            </ContactLinks>
          </ContactContainer>
        </Col>
        <Col size="md-4">
          <ContactContainer>
            <i class="fab fa-linkedin-in"></i>{" "}
            <ContactLinks link="https://www.linkedin.com/in/anthony-pillow-81a0a518a/">
              Anthony Pillow
            </ContactLinks>
          </ContactContainer>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
