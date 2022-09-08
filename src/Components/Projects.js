import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projectData = [
    
      {
        name: "RetroDash",
        github: "https://github.com/runner-runner224/running-square",
        website: "https://retrodash.netlify.app/",
        img: "https://user-images.githubusercontent.com/88520969/187346880-5be3bc45-97ba-4a06-b2df-1ea7a6bc15b5.png",
        description: "Infinite runner game built with Three.js for our game engine and using HTML and CSS for our UI UI. We also incorporated Blender for our space ship model."
      },
      {
        name: "Jupiter-Deals",
        github: "https://github.com/Jupiter115/crispy-guide",
        website: "https://jupiterdeals.netlify.app/",
        img: "https://user-images.githubusercontent.com/88520969/187346880-5be3bc45-97ba-4a06-b2df-1ea7a6bc15b5.png",
        description: "Affliate marketing app designed to display and promote a list of product deals to the audience. The audience may view the products, see a brief description, a link to the product, the price, an image of the product, and the name of the product. The admin of the site will have a separate login to edit, post, and delete products."
      },
    ]
  

  return (
    <Container>
      {projectData.map((projects, index) => {
        return (
          <ProjectCard
            key = {index}
            {...projects}
          />
        );
      })}
    </Container>
  );
};

export default Projects;
