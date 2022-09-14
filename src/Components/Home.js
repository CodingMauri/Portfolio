import React from "react";
import About from "./About";
import { Contact } from "./Contact";
import ContactMap from "./ContactMap";
import Hero from "./Hero";
import Projects from "./Projects";




export default function Home() {
  
  return (
    <div>
      <Hero />
      <About />
    
      <Projects />
      <Contact />
      <ContactMap />
    </div>
  );
}
