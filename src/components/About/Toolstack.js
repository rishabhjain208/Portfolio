import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { SiReplit } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="text-white">VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="text-white">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
        <span className="text-white">Postgresql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <span className="text-white">Vercel</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
