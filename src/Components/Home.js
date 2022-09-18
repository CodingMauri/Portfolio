import React from "react";
import About from "./About";
import Projects from "./Projects"

import Hero from "./Hero";
import SkillSection from "./SkillSection";





export default function Home({fadeLeft}) {
  
  return (
    <div>
      <Hero fadeLeft = {fadeLeft}/>
      <About />
      <SkillSection fadeLeft = {fadeLeft} />
      <Projects fadeLeft = {fadeLeft} />
    </div>
  );
}
