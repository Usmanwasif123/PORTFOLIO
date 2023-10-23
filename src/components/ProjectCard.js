import { Col } from "react-bootstrap";

export const ProjectCard = (props) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={props.imgUrl} alt="img"/>
        <div className="proj-txtx">
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
          <h4>{props.title}</h4>
          </a>
          <span>{props.description}</span>
        </div>
      </div>
    </Col>
  )
}
