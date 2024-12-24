import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img-14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img-17.png";
import projImg18 from "../assets/img/project-img18.png";
import jawaan from "../assets/img/jawanss.png";
import anointedglow from "../assets/img/anoglowss.png";
import poker from "../assets/img/pokerss.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Jaawan Champions",
      description: "A school site for client.",
      imgUrl: jawaan,
      projectLink: "https://jawaanchampions.com/",
      
    },
    {
      title: "Anointed Glow Canada",
      description: "Skin care ecommerce site for client.",
      imgUrl: anointedglow,
      projectLink: "https://anointedglow.ca/",
    },
   
    {
      title: "Rough rider poker tour",
      description: "Input your score that you collect from poker game. A client project.",
      imgUrl: poker,
      projectLink: "https://roughriderpokertour.vercel.app/",
    },
  ];

  const projectsTab2 = [
    {
      title: "Banking App with Finance Management Dashboard",
      description: "Horizon is a modern banking platform for everyone.",
      imgUrl: projImg10,
      projectLink: "https://banking-app-with-finance-managemanet-dashboard.vercel.app/",
      
    },
    {
      title: "Travel Landing Page",
      description: "Travel UI/UX App from Camping",
      imgUrl: projImg11,
      projectLink: "https://travel-app-seven-rosy.vercel.app/",
    },
   
    {
      title: "Stock Photo",
      description: "Get every photos ",
      imgUrl: projImg12,
      projectLink: "https://usmanwasif123.github.io/Stock_photos/",
    },
  ];

  const projectsTab3 = [
    {
      title: "Search Github User",
      description: "Find Github users",
      imgUrl: projImg13,
      projectLink: "https://searchgithubuser-react.netlify.app/",
    },
    {
      title: "Memory Game",
      description: "two same make you win",
      imgUrl: projImg14,
      projectLink: "https://usmanwasif123.github.io/Memory-Card-Game/",
    },
   
    {
      title: "Comfy Store",
      description: "Purchase What You Want",
      imgUrl: projImg15,
      projectLink: "https://9comfy-store.netlify.app/",
    },
  ];

  const projectsTab4 = [
    {
      title: "Grocery Store",
      description: "SPA site with user login functionalities",
      imgUrl: projImg16,
      projectLink: "https://7grocery-store.netlify.app/",
    },
    {
      title: "Dark Mode",
      description: "Switch to Dark/Light Mode",
      imgUrl: projImg17,
      projectLink: "https://usmanwasif123.github.io/dark-mode/",
    },
    {
      title: "SocialMedia with GraphQL",
      description: "Social media app with sign and sign up option using graphql",
      imgUrl: projImg18,
      projectLink: "http://192.168.18.7:3000/",
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Where Code Gives Life to Imagination. Embark on a Journey Through Cutting-Edge Front-End Projects, Where Design Meets Interactivity. From Striking Visuals to Intuitive User Journeys, Witness the Artistry of Web Development. Join Me in Unveiling the Future of User-Centric Experiences, One Project at a Time."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          projectsTab4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
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
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  )
}
