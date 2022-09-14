import React from "react";
import About from "./About";

import ContactSection from "./ContactSection";

import Hero from "./Hero";
import Projects from "./Projects";




export default function Home() {
  
  return (
    <div>
      <Hero />
      <About />
    
      <Projects />
      <ContactSection/>
    </div>
  );
}
