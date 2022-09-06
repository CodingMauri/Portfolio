import React from "react";

import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";
import { useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  console.log(projects)
  return (
    <div>
      <Hero />
      <Projects />

    </div>
  );
}
