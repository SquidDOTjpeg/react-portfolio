import React from "react";
import { Row, Col } from "../Grid/index";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <div className="nav-container">
      <Row>
        <Col size="md-3">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-links active" : "nav-links"
            }
          >
            Home
          </Link>
        </Col>
        <Col size="md-3">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-links active" : "nav-links"
            }
          >
            About
          </Link>
        </Col>
        <Col size="md-3">
          <Link
            to="/projects"
            className={
              location.pathname === "/projects"
                ? "nav-links active"
                : "nav-links"
            }
          >
            Projects
          </Link>
        </Col>
        <Col size="md-3">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-links active"
                : "nav-links"
            }
          >
            Contact
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Nav;
