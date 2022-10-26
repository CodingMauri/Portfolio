import React from "react";
import {  Card, Button } from "react-bootstrap";
import "../Styles/App.css";
import { motion } from "framer-motion";
export default function ProjectCard({
  name,
  img,
  github,
  website,
  description,
})
{
  
  return (
    <motion.div
    whileHover={{scale:1.2}}
    >
      <Card.Img className="card-img" src={img} alt="project-pic" />
      <Card variant="top" className="project-card">
        <Card.Title className="project-title">
          <h4>{name}</h4>
        </Card.Title>
        <Card.Body className="project-description">
          <p>{description}</p>
        </Card.Body>
        <Card.Body className="button-cntnr">
          <motion.a href={github}
          whileHover = {{scale:1.2}}
          transition = {{duration:0.2}}>
            <Button id="github" className="project-btns" variant="contained">
           
              Github
            </Button>
          </motion.a>
          <motion.a href={website}
          whileHover = {{scale:1.2}}
          transition = {{duration:0.2}}>
            <Button id="live" className="project-btns" variant="contained">
              Live
            </Button>
          </motion.a>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
