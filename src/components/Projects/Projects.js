import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import medicare from "../../Assets/Projects/medicare.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicare}
              isBlog={false}
              title="Medicare-Appointment-Booking-Website"
              description="Medicare Appointment Booking platform with role-based
              authentication, doctor listings, search, Stripe payment, and
              profile management, implementing advanced concepts like
              MongoDB aggregation, debouncing, query middleware, custom hooks, and Context API.
              Technologies: Reactjs, TailwindCSS, Nodejs, MongoDB,
              Mongoose, JWT, Stripe payment, Cloudinary, Context API,
              React router v6"
              ghLink="https://github.com/rishabhjain208/Medicare-bookings"
              demoLink="https://medicare-booking-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quick-News-Website"
              description="• Implemented a dynamic news website with direct search
              functionality using the News API, mobile-friendly menu, and
              displaying articles with images, titles, sources, and publication dates.
              Technologies: HTML, CSS, JavaScript, Online API, Rapid
              API"
              ghLink="https://github.com/rishabhjain208/Quick-News-Website"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Financial-Decision-Making-App"
              description="Uifry is a comprehensive web application designed to help users make the best financial decisions. The app features a user-friendly interface, customizable options, and several unique features to enhance user experience. The project is built using React and Vite."
              ghLink="https://github.com/rishabhjain208/Landing-Page"
              demoLink="https://landing-page-6tk97aled-rishabh-jains-projects-25bcb276.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Landing-Page-Food"
              description="Fully Responsive Foodie Landing page created with ReactJS. I have already created this project with HTML CSS and JavaScript, but now I created it once again with React. By making seperate components and using useState hook"
              ghLink="https://github.com/rishabhjain208/Landing-Page-Food"
              demoLink="https://landing-page-food-git-main-rishabh-jains-projects-25bcb276.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Job Portal Application"
              description="• In this application, we register user login, check the current
              status of the user, and also create jobs.
              Technologies: Node.js, MongoDB, JavaScript, Express.js,
              React.js, VS Code.
              "
              ghLink="https://github.com/rishabhjain208/nodejs-job-portal"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dice Game"
              description="This is a simple dice game project where users can roll a dice, select a number, and earn points based on their guess."
              ghLink="https://github.com/rishabhjain208/Dice-Game"
              demoLink="https://dice-game-alpha-ruddy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
