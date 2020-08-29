import React, { useState, useEffect } from "react";
import ProjectJSON from "../projects.json";
import Project from "../components/Project";
import Title from "../components/Title/index";
import "./style.css";
import { Col, Row } from "../components/Grid";

function Projects() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    setProject(ProjectJSON);
  }

  return (
    <>
      <div className="skew">
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <div className="big-stuff-container">
              <Title>Projects</Title>
              {projects.map((project) => (
                <Project
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  imgpath={project.imgpath}
                  deployed={project.deployed}
                ></Project>
              ))}
            </div>
          </Col>
          <Col size="md-3" />
        </Row>
      </div>
    </>
  );
}

export default Projects;
