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
        <span style={{ fontSize: "12px", color: "white" }}>VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span style={{ fontSize: "12px", color: "white" }}>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
        <span style={{ fontSize: "12px", color: "white" }}>Replit</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <span style={{ fontSize: "12px", color: "white" }}>Vercel</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
