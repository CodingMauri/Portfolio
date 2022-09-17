import React from "react";
import { Container } from "react-bootstrap";
import Project2 from "../assets/jupiterdeals2.png"

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
const Projects = ({fadeLeft}) => {
  const projectData = [
    {
      name: "RetroDash",
      github: "https://github.com/runner-runner224/running-square",
      website: "https://retrodash.netlify.app/",
      img: "https://user-images.githubusercontent.com/88520969/187346880-5be3bc45-97ba-4a06-b2df-1ea7a6bc15b5.png",
      description:
        "Infinite runner game built with Three.js for our game engine and using HTML and CSS for our UI UI. We also incorporated Blender for our space ship model.",
    },
    {
      name: "Jupiter-Deals",
      github: "https://github.com/Jupiter115/crispy-guide",
      website: "https://jupiterdeals.netlify.app/",
      img: Project2,
      description:
        "Affliate marketing app designed to display and promote a list of product deals to the audience.",
    },
  ];

  return (
    <motion.div
    variants = {fadeLeft}
    initial = "hidden"
    whileInView = "visible">
      <div className="section-title">
        <h2>Projects</h2>
      </div>
      <Container className="card-container">
        {projectData.map((projects, index) => {
          return <ProjectCard key={index} {...projects} />;
        })}
      </Container>
    </motion.div>
  );
};

export default Projects;
