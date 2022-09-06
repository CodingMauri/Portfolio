import React, { useEffect } from "react";
import Nav from "./Nav";
import "../Styles/App.css";
import Typewriter from "typewriter-effect"
export default function Hero() {
 const typewriter = new Typewriter(Hero, {
  loop:true,
  delay:10
 })
  return (
    <div>
      

      <div className="hero-cntnr">
        <div id="hero-title-cntnr">
          <h1 className="hero-title">
            <Typewriter 
                onInit={(typewriter) =>{
                  typewriter.typeString("Welcome to my Portfolio!")
                  
                  .start()
                }}
              />
          </h1>
        </div>
      </div>
    </div>
  );
}
