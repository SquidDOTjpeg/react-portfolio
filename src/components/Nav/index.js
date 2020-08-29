import React from "react";
import { Row, Col } from "../Grid/index";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  // var logo = require("");

  return (
    <div className="nav-container">
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-links active" : "nav-links"
            }
          >
            Home
          </Link>

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
          <img src="./logo192.png" alt="Logo" className="logo"></img>
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </div>
  );
}

export default Nav;
