import React from "react";
import About from "./About";
import Projects from "./Projects"

import Hero from "./Hero";





export default function Home({fadeLeft}) {
  
  return (
    <div>
      <Hero fadeLeft = {fadeLeft}/>
      <About />
      <Projects fadeLeft = {fadeLeft} />
    </div>
  );
}
