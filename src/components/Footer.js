import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/usman-w-anwar-800b8718b/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="linkedin-profile"/></a>
                <a href="https://github.com/Usmanwasif123" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="github-profile"/></a>
                <a href="mailto:usmanwasif11@outlook.com"><img src={navIcon3} alt="email"/></a>
                <a href="https://stackoverflow.com/users/19594790/usman-wasif" target="_new" rel="noopener noreferrer"><img src={navIcon4} alt="stack-over-flow"/></a>
                <a href="https://app.netlify.com/teams/usmanwasif123/overview" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="netlify"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
