import React from "react";
import "../Styles/App.css";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import {motion} from 'framer-motion'
export default function Hero() {
  const fadeLeft = {
    hidden: {opacity:0, x: -200},
    visible:{opacity: 1, x:0}

  }
  return (
    <div>
      <div className="hero-cntnr">
        <div id="hero-title-cntnr">
          <motion.h1
          variants = {fadeLeft} 
          initial = 'hidden'
          animate = 'visible'
          transition ={{duration:2}}
           className="hero-title">
            Hi, I'm Mauricio, <br />
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Web Developer",
                ],
                loop: true,
                autoStart: true,
              }}
            />
          </motion.h1>
        <motion.div
        variants = {fadeLeft} 
        initial = 'hidden'
        animate = 'visible'
        transition ={{duration:2}}
        className="link-container">
          
          <a href = "https://github.com/CodingMauri"><img className = "github" src= {require("../assets/github-no-bg.png")} alt="github"></img></a>
          <a href = "https://www.linkedin.com/in/mauricio-alvarenga-198811236/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIF8BeGDvQU%2B7miHB2RMI%2Bg%3D%3D"><img className  = "linked-in" src = {require("../assets/linked-in.jpeg")} alt = "linked-in"></img> </a>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
