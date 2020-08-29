import React from "react";
import WordBox from "../components/WordBox/index";
import Title from "../components/Title/index";
import { Row, Col } from "../components/Grid/index";
import List from "../components/List/index";
import MeImage from "../components/MeImage/index";
import "./style.css";

function About() {
  return (
    <div className="skew">
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <div className="big-stuff-container">
            <MeImage />
            <Title>About Me</Title>

            <WordBox>
              Hey there! I'm Anthony Pillow, an aspiring full stack web
              developer. I have a wide range of knowledge of languages used in
              web development with a heavier focus on the MERN stack.
            </WordBox>

            <WordBox>
              After dropping out of college I decided to follow where my passion
              was leading me which was toward web development as an entry point
              into the world of coding. I hope to be able to design games in a
              small team or solo so that way I can create the product that I
              want to free of interference. To make this happen I have also been
              studying 3D modeling to be able to create assets for the games I
              make and I'm going to start developing simple games in my spare
              time to foster the skills I'll need for the real thing. In
              addition to these extra professional pursuits, I've also started
              to code web based applications that can enhance the experiences of
              people playing games like Dungeons and Dragons.
            </WordBox>

            <WordBox>
              I'm always looking for ways to improve myself, my code, and I'm
              always open to new ideas as well as suggestions.
            </WordBox>

            <WordBox
              after={
                <Row>
                  <Col size="md-6">
                    <List
                      items={[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "jQuery",
                        "Bootstrap",
                        "Express.js",
                        " React.js",
                      ]}
                    />
                  </Col>
                  <Col size="md-6">
                    <List
                      items={[
                        " Database Theory",
                        "MongoDB",
                        " MySQL",
                        " Command Line",
                        " Java",
                        " Git",
                        "Node.js",
                      ]}
                    />
                  </Col>
                </Row>
              }
            >
              I've been studying more than just the MERN stack too!
              <br />
            </WordBox>
          </div>
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </div>
  );
}

export default About;
