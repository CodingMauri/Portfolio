import React from "react";
import "../Styles/App.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div>
      <div className="hero-cntnr">
        <div id="hero-title-cntnr">
          <h1 className="hero-title">
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
          </h1>
        <div className="link-container">
          
          <a href = "https://github.com/CodingMauri"><img className = "github" src= {require("../assets/github-no-bg.png")} alt="github"></img></a>
          <a href = "https://www.linkedin.com/in/mauricio-alvarenga-198811236/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIF8BeGDvQU%2B7miHB2RMI%2Bg%3D%3D"><img className  = "linked-in" src = {require("../assets/linked-in.jpeg")} alt = "linked-in"></img> </a>
        </div>
        </div>
      </div>
    </div>
  );
}
