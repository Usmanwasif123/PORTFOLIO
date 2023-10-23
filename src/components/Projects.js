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
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dark Mode Site",
      description: "Change the way you like to see",
      imgUrl: projImg7,
      projectLink: "https://usmanwasif123.github.io/dark-mode/",
      
    },
    {
      title: "Jobster",
      description: "Find you job here",
      imgUrl: projImg8,
      projectLink: "https://usmanwasif123.github.io/Jobster/",
    },
   
    {
      title: "EdgeLedger",
      description: "Sky is the limit",
      imgUrl: projImg9,
      projectLink: "https://3edge-ledger.netlify.app/",
    },
  ];

  const projectsTab2 = [
    {
      title: "Vesco site" ,
      description: "Clothing Brand",
      imgUrl: projImg4,
      projectLink: "https://usmanwasif123.github.io/Vesco_site/",
    },
    {
      title: "Stock Photo",
      description: "Get every photos ",
      imgUrl: projImg5,
      projectLink: "https://usmanwasif123.github.io/Stock_photos/",
    },
   
    {
      title: "Memory Game",
      description: "two same make you win",
      imgUrl: projImg6,
      projectLink: "https://usmanwasif123.github.io/Memory-Card-Game/",
    },
  ];

  const projectsTab3 = [
    {
      title: "Search Github User",
      description: "Find Github users",
      imgUrl: projImg1,
      projectLink: "https://searchgithubuser-react.netlify.app/",
    },
    {
      title: "Tours",
      description: "Your Destination Guide",
      imgUrl: projImg2,
      projectLink: "https://12our-tours.netlify.app/",
    },
    {
      title: "Comfy Store",
      description: "Purchase What You Want",
      imgUrl: projImg3,
      projectLink: "https://9comfy-store.netlify.app/",
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
