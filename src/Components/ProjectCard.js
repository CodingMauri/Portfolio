import React from "react";
import { Container, Card, Col, Button } from "react-bootstrap";
import "../Styles/App.css";

export default function ProjectCard({
  name,
  img,
  github,
  website,
  description,
}) {
  return (
    <div>
      <Card.Img className="card-img" src={img} alt="project-pic" />
      <Card variant="top" className="project-card">
        <Card.Title className="project-title">
          <h4>{name}</h4>
        </Card.Title>
        <Card.Body className="project-description">
          <p>{description}</p>
        </Card.Body>
        <Card.Body className="button-cntnr">
          <a href={github}>
            <Button id="github" className="project-btns" variant="contained">
              Github
            </Button>
          </a>
          <a href={website}>
            <Button id="live" className="project-btns" variant="contained">
              Live
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
