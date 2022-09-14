import React from "react";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
import Skills from "./Skills";

export default function About() {
  const fadeDown = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // <motion.div
    // variants={fadeDown}
    // initial="hidden"
    // whileInView="visible"
    // transition={{ duration: 2 }}
    // viewport={{ once: false, amount: 1 }}
    // >
    <div>
      <motion.div
        // variants={fadeDown}
        // initial="hidden"
        // whileInView="visible"
        // transition={{ duration: 2 }}
        // viewport={{ once: false, amount: 1 }}
        className="about-cntnr"
      >
        <h2>About</h2>
        <section className="about-me">
          <div className="abt-image-container">
            <img src={require("../assets/coffee-astro-no-bg.png")}></img>
          </div>
          <p>
            Hi my name is Mauricio Alvarenga and I am a software engineer
            stationed in the bay area. My desired coding language is JavaScript
            since thats what I'm most comfortable with and I have used that
            language to code the majority of my projects. I have over 500 hours
            of coding experience under my belt and I have used my experience to
            build applications that I love. For example, RetroDash an infinite
            runner videogame built with three.js HTML and CSS. I'm a big gamer
            so being able to develop my own game with other people who also
            shared the same passion was an awesome experience.
          </p>
        </section>
      </motion.div>
      <Skills />
    </div>

    // </motion.div>
  );
}
