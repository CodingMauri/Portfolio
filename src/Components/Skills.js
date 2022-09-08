import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";


export default function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 9000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite:true,
          dots:false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true,
          dots:false,
        },
      },
      
    ],
  };
  return (
    <Container className="skills-page">
      <h1 className="skill-title">Skills</h1>
      <Slider {...settings}>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/css-logo-no-bg.png")}
            alt="logo"
          />
        </div>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/html-logo-no-bg.png")}
            alt="logo"
          />
        </div>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/javascript-logo-no-bg.png")}
            alt="logo"
          />
        </div>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/python-logo-no-bg.png")}
            alt="logo"
          />
        </div>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/react-logo-no-bg.png")}
            alt="logo"
          />
        </div>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/sql-logo-no-bg.png")}
            alt="logo"
          />
        </div>
        <div className="skill-logos">
          <img
            src={require("../assets/skills/mongodb-logo-no-bg.png")}
            alt="logo"
          />
        </div>
      </Slider>
    </Container>
  );
}
