import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import skill_1 from "../assets/skills/css-logo-no-bg.png"
import skill_2 from "../assets/skills/html-logo-no-bg.png"
import skill_3 from "../assets/skills/javascript-logo-no-bg.png"
import skill_4 from "../assets/skills/mongodb-logo-no-bg.png"
import skill_5 from "../assets/skills/react-logo-no-bg.png"
import skill_6 from "../assets/skills/sql-logo-no-bg.png"



export default function Skills() {
  const skillData = [
    {
      img: skill_1
    },
    {
      img: skill_2
    },
    {
      img: skill_3
    },
    {
      img: skill_4
    },
    {
      img: skill_5
    },
    {
      img: skill_6
    },
   
  ]
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
      {/* <h1 className="skill-title">Skills</h1> */}
      <Slider {...settings}>
        {skillData.map((skill) =>{
          return(
            <div className = "skill-logos">
              <img  src = {skill.img}></img>
            </div>

          )
        })}
      </Slider>
    </Container>
  );
}
