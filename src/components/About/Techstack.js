import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <span className="text-white">C++</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span className="text-white">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="text-white">JavaScript</span>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="text-white">Nodejs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="text-white">ReactJS</span>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="text-white">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <span className="text-white">Nextjs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <span className="text-white">TypeScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <span className="text-white">ExpressJS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <span className="text-white">TailwindCSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="text-white">Postgresql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
        <span className="text-white">Prisma</span>
      </Col>
    </Row>
  );
}

export default Techstack;
