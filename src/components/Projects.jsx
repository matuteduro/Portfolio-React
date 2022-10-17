import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/StartUp.png";
import projImg2 from "../assets/img/ecommerce.png";
import projImg3 from "../assets/img/landing.png";
import projImg4 from "../assets/img/pokedex.png";
import projImg5 from "../assets/img/todo-app.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react'

const Projects = () => {

  const project = [
    {
      title: "Start Up ",
      description: "Start Up Design for Freelance Developer",
      imgUrl: projImg1,
      url:"https://durodev-startup.vercel.app/",
    },
    {
      title: "E-Commerce MERN",
      description: "Full E-ecommerce using MERN",
      imgUrl: projImg2,
      url:"https://durodev-mern-ecommerce.herokuapp.com/",
    },
    {
      title: "Landing Page",
      description: "Landing Page Design",
      imgUrl: projImg3,
      url:"https://landingpage-one-rust.vercel.app/",
    },
    {
      title: "Pokedex React",
      description: "Pokedex App using Fetch and React",
      imgUrl: projImg4,
      url:"https://pokedex-seven-green.vercel.app/",
    },
    {
      title: "Todo-App React",
      description: "Todo-App using React",
      imgUrl: projImg5,
      url:"https://todo-app-wheat-beta.vercel.app/",
    },
    {
      title: "",
      description: "",
      imgUrl: "",
      url:"",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project.map((projec, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projec}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={''}></img>
    </section>
  )
}

export default Projects