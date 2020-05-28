import React from "react";
import WordBox from "../components/WordBox/index";
import Title from "../components/Title/index";
import { Row, Col } from "../components/Grid/index";
import "./style.css";

function About() {
  return (
    <div className="big-stuff-container">
      <Row>
        <Col size="md-6">
          <Title title="About Me" />

          <WordBox
            words="Hey there! I'm Anthony Pillow, an aspiring full stack web developer. I
   have a wide range of knowledge of languages used in web development
   with a heavier focus on the MERN stack."
          />

          <WordBox words="I'm always looking for ways to improve myself, my code, and I'm always open to new ideas as well as suggestions." />
        </Col>
      </Row>
    </div>
  );
}

export default About;
