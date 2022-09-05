import React from "react";
import Nav from "./Nav";
import "../Styles/App.css";

export default function Hero() {
  return (
    <div>
      <Nav />

      <div className="hero-cntnr">
        <div id="hero-title-cntnr">
          <h1 className="hero-title">hero</h1>
        </div>
      </div>
    </div>
  );
}
