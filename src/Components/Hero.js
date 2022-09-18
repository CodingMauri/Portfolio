import React from "react";
import "../Styles/App.css";
import Typewriter from "typewriter-effect";
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import { motion } from "framer-motion";

export default function Hero({fadeLeft}) {
  

  const fadeDown ={
    hidden:{
      opacity:0,
      y:'-100',
    },
    visible:{
      opacity:1,
      y:0,

      transition:{
        duration:2,
      }
    },
  }
  

  return (
    <div>
      <div className="hero-cntnr">
        <div id="hero-title-cntnr">
          <motion.h1
          variants = {fadeLeft}
            initial = "hidden"
            whileInView = "visible"
            className="hero-title"
          >
            Hi, I'm Mauricio, <br />
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Front-End Developer",
                  "Web Developer",
                ],
                loop: true,
                autoStart: true,
              }}
            />
          </motion.h1>
          <motion.div
            variants = {fadeLeft}
            initial = "hidden"
            whileInView = "visible"
            className="link-container"
          >
            <a href="https://github.com/CodingMauri">
              <motion.img
             whileHover={{ scale: 1.2 }}
             
              
                
                src={github}
                alt="github"
              ></motion.img>
            </a>
            <a href="https://www.linkedin.com/in/mauricio-alvarenga-198811236/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIF8BeGDvQU%2B7miHB2RMI%2Bg%3D%3D">
              <motion.img
               whileHover={{ scale: 1.2 }}
               onHoverStart={e => {}}
               onHoverEnd={e => {}}
                
                src={linkedin}
                alt="linked-in"
              ></motion.img>{" "}
            </a>
          </motion.div>
        </div>
        
          <motion.div
          variants = {fadeDown}
          initial = "hidden"
         whileInView = "visible"
       
           className="hero-img-container">
            <img
             
              src={require("../assets/chill-astro-no-bg.png")}
              alt = "hero-img"
            />
          </motion.div>
        
      </div>
      
    </div>
  );
}
