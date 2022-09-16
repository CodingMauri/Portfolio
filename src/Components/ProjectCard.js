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
        
        <Container className="project-container">
          <Card variant = "top" className="project-card">
            <Card.Body className="image-container">
              <Card.Img className = "card-img" src={img} alt="project-pic"  />
            </Card.Body>
            <Card.Title className = "project-title">
              <h4>{name}</h4>
            </Card.Title>
              <Card.Body className = "project-description" >
            
              </Card.Body>
            <Card.Body className = "button-cntnr">
              <Button id = "github" className = "project-btns" variant = "contained">
                Github
              </Button>
              <Button id = "live" className = "project-btns" variant = "contained">
                Live
              </Button>
            </Card.Body>
          
          </Card>
        </Container>
      );
    }
    
