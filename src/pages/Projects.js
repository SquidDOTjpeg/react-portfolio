import React, { useState, useEffect } from "react";
import ProjectJSON from "../projects.json";
import Project from "../components/Project";
import Title from "../components/Title/index"
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

  function showProjects() {
    console.log(projects);
  }

  showProjects();

  return (
    <div className="big-stuff-container">
      <Title>Projects</Title>
      <Row>
      {projects.map((project) => (
          <Col size="md-6">
            <Project
              key={project.id}
              title={project.title}
              github={project.github}
              imgpath={project.imgpath}
              deployed={project.deployed}
            ></Project>
          </Col>
      ))}
      </Row>
    </div>
  );
}

export default Projects;
