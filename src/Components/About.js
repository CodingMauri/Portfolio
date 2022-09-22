import React from "react";
import { motion } from "framer-motion";


export default function About() {

  const fadeLeft = {
    hidden:{
      opacity:0,
      x:'-100'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:2,
      }
    }
    
  }

  return (
   
    <motion.div
    
      
    >
      <motion.div
        variants = {fadeLeft}
        initial = "hidden"
        whileInView= "visible"
        className="about-cntnr"
      >
        <h2>About</h2>
        <section className="about-me">
          <div className="abt-image-container">
            <img src={require("../assets/coffee-astro-no-bg.png")} alt = "about-img"></img>
          </div>
          <p>
            Hi my name is Mauricio Alvarenga and I am a software engineer
            based in the Bay Area. I am a huge fan of JavaScript and have enjoyed using it ever since I was introduced to it. I love coding and  
            building applications that I love. I'm a big gamer and naturally I have dabbled in making some games of my own and loved the developing experience. I love seeing my creative work come to life with developing.
          </p>
        </section>
      </motion.div>
      
    </motion.div>

  
  );
}
