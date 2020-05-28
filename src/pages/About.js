import React from "react";
import WordBox from "../components/WordBox/index";
import Title from "../components/Title/index";
import { Row, Col } from "../components/Grid/index";
import List from "../components/List/index";
import "./style.css";

function About() {
  return (
    <div className="big-stuff-container">
      <Row>
        <Col size="md-6">
          <Title>About Me</Title>

          <WordBox>
            Hey there! I'm Anthony Pillow, an aspiring full stack web developer.
            I have a wide range of knowledge of languages used in web
            development with a heavier focus on the MERN stack.
          </WordBox>

          <WordBox>
            I'm always looking for ways to improve myself, my code, and I'm
            always open to new ideas as well as suggestions.
          </WordBox>

          <WordBox>
            I've been studying more than just the MERN stack too!
            <br />
            <List
              items={["SQL", "Sequelize", "Mongo", "React", "Node", "Git"]}
            ></List>
          </WordBox>
        </Col>
      </Row>
    </div>
  );
}

export default About;
