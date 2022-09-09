import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import "../Styles/App.css";
export default function ProjectCard({
  name,
  img,
  github,
  website,
  description,
}) {
  return (
    <Container className="project-container">
      <Card className="project-card">
        <Card.Body className="image-container">
          <Card.Img className = "card-img" src={img} alt="project-pic" />
        </Card.Body>
        <Card.Title>
          <h4>{name}</h4>
        </Card.Title>
      
      </Card>
    </Container>
  );
}
