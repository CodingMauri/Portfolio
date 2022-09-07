import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import projects from "../data/projects.json";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container className="skills-page">
      <h1 className = "skill-title">Skills</h1>
      <Slider {...settings}>
        <div className="skill-logos">
          <img src = {require("../assets/skills/css-logo-no-bg.png")} />
        </div>
        <div className="skill-logos">
          <img src = {require("../assets/skills/html-logo-no-bg.png")} />
        </div>
        <div className="skill-logos">
          <img src = {require("../assets/skills/javascript-logo-no-bg.png")} />
        </div>
        <div className="skill-logos">
          <img src = {require("../assets/skills/python-logo-no-bg.png")} />
        </div>
        <div className="skill-logos">
          <img src = {require("../assets/skills/react-logo-no-bg.png")} />
        </div>
        <div className="skill-logos">
          <img src = {require("../assets/skills/sql-logo-no-bg.png")} />
        </div>
        <div className="skill-logos">
          <img src = {require("../assets/skills/mongodb-logo-no-bg.png")} />
        </div>
        
      </Slider>
    </Container>
  );
}
