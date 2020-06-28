import React from "react";
import { Col, Row } from "../components/Grid";
import AnimatedBanners from "../components/AnimatedBanners";

function Test() {
  return (
    <>
      <Row>
        <Col size="md-3">
          <AnimatedBanners color="red" />
        </Col>
        <Col size="md-3">
          <AnimatedBanners color="blue" />
        </Col>
        <Col size="md-3 ">
          <AnimatedBanners color="green" />
        </Col>
        <Col size="md-3">
          <AnimatedBanners color="orange" />
        </Col>
      </Row>
    </>
  );
}

export default Test;
