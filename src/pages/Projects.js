import React, { useState, useEffect } from "react";
import ProjectJSON from "../projects.json";
import Project from "../components/Project";
import "./style.css";
import { Container, Col, Row } from "../components/Grid";

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
    <>
      <div className="project-title">
        <p>Projects</p>
      </div>
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
    </>
  );
}

export default Projects;
