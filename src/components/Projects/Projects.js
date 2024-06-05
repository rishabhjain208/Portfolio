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
              description="Created a dynamic news website featuring direct news search functionality powered by the News API. Implemented a responsive design with a mobile-friendly menu, fetching and displaying news articles with images, titles, sources, and publication dates. Technologies used: - HTML, CSS, JavaScript, Online API, Rapid API."
              ghLink="https://github.com/rishabhjain208/Quick-News-Website"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Financial-Decision-Landing-Page"
              description="I developed a responsive landing page for this project using ReactJS and Tailwind CSS. I employed Vite with React to enhance the development process, which offers a speedy and efficient build tool for contemporary web applications. To view the project live, open the project folder in VS Code, run `npm install` to install all necessary dependencies, and then run `npm run dev` to start the development server. This setup provides a seamless and rapid development experience, utilizing the robust combination of React and Tailwind CSS to create dynamic and visually appealing user interfaces."
              ghLink="https://github.com/rishabhjain208/Landing-Page"
              demoLink="https://landing-page-6tk97aled-rishabh-jains-projects-25bcb276.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Landing-Page-Food"
              description="The Foodie App project is a React-based application designed to provide a seamless and engaging user experience. It features a fully responsive design with a hamburger menu and a responsive navbar for easy navigation. The app includes several sections: Header, Home, Specials, Populars, Order, and Footer, each tailored to enhance user interaction and display content effectively. Utilizing HTML, CSS, and React, this project aims to create an intuitive and visually appealing platform for food enthusiasts."
              ghLink="https://github.com/rishabhjain208/Landing-Page-Food"
              demoLink="https://landing-page-food-git-main-rishabh-jains-projects-25bcb276.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Job Portal Application"
              description="In this application, we register user login, check the current
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
