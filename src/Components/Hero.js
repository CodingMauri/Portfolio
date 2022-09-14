import React from "react";
import "../Styles/App.css";
import Typewriter from "typewriter-effect";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    
  };

  return (
    <div>
      <div className="hero-cntnr">
        <div id="hero-title-cntnr">
          <motion.h1
            // variants={fadeLeft}
            // initial="hidden"
            // whileInView= "visible"
            // viewport={{ once: false, amount: 1 }}
            // transition={{ duration: 2 }}
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
            // variants={fadeLeft}
            // initial="hidden"
            // whileInView="visible"
            // transition={{ duration: 2 }}
            className="link-container"
          >
            <a href="https://github.com/CodingMauri">
              <img
                className="github"
                src={require("../assets/github-no-bg.png")}
                alt="github"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/mauricio-alvarenga-198811236/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIF8BeGDvQU%2B7miHB2RMI%2Bg%3D%3D">
              <img
                className="linked-in"
                src={require("../assets/linked-in.jpeg")}
                alt="linked-in"
              ></img>{" "}
            </a>
          </motion.div>
        </div>
        
          <div className="hero-img-container">
            <motion.img
              // variants={slideUp}
              // initial="hidden"
              // whileInView="visible"
              
              // viewport={{ once: false, amount: 1 }}
              // transition={{ duration: 2 }}
              src={require("../assets/chill-astro-no-bg.png")}
              alt = "hero-img"
            />
          </div>
        
      </div>
      
    </div>
  );
}
