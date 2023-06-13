import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import stackoverflow from "../assets/img/stackoverflow.jpg";
import medishare from "../assets/img/Medishare.jpg";
import mart from "../assets/img/Fcrit_mart.jpg";
import chatapp from "../assets/img/Javachatapp.jpeg";
import eshop from "../assets/img/Eshop.jpg";
import newsweb from "../assets/img/newsweb.jpg";
import nexart from "../assets/img/buy.jpg"
import hyperloop from "../assets/img/Hyperloop.jpeg";
import moodmusic from "../assets/img/Moodmusic.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
          title: "Stack Overflow Clone",
          techstack: "MERN stack,Redux",
          description: "Community-driven Q&A platform for programmers and developers.",
          imgUrl: stackoverflow,
        },
        {
          title: "MediShare",
          techstack:"MERN stack",
          description: "Donate unused medicine to help needy people through NGOs.",
          imgUrl: medishare,
        },
        {
          title: "Fcrit Mart",
          techstack: "Flutter,Dart",
          description: "Buy and sell goods through a convenient app.",
          imgUrl: mart,
        },
        {
          title: "Java ChatApp",
          techstack: "Java",
          description: "Real-time messaging application developed using Java programming language.",
          imgUrl: chatapp,
        },
        {
          title: "Eshop",
          techstack:"Django,Python",
          description: "An online store where customers can browse, select, and purchase produts.",
          imgUrl: eshop,
        },
        {
          title: "News Website",
          techstack: "Js,Html,Css",
          description: "An online platform that provides up-to-date news,",
          imgUrl: newsweb,
        },
        {
          title: "Blockchain Website",
          techstack: "Solidity, Thirdweb, Tailwind css",
          description: " A website for secure and transparent buying and selling of artwork,",
          imgUrl: nexart,
        },
        {
          title: "Hyperloop",
          techstack: "Php,Html,Css",
          description: " Website for efficient passenger management in Hyperloop systems.",
          imgUrl: hyperloop,
        },
        {
          title: "Moodmusic",
          techstack: "Django",
          description: " A platform that recommends songs based on user mood.",
          imgUrl: moodmusic,
        },
      ];
  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          {/* <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
              <h2>Projects</h2>
              <p>My projects makes use of vast variety of latest technology tools.Below are some of my projects</p>
                    <Row lg={3}>  
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
            {/* </div>}
          </TrackVisibility> */}
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
  )
}

export default Projects