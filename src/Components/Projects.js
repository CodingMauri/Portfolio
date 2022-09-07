import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  Container } from "react-bootstrap";
import projects from "../data/projects.json";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="project-container">
      <h2 className="carousel-title"> Projects </h2>
      <Slider {...settings}>
        {projects.map((item, index) => {
          return (
            <Container>
              
              <div className="project-img-cntnr">

                 <img key = {index} className = "project-img"src = {item.img} alt = "product-pic"></img>
              </div>


            </Container>
          );
        })}
      </Slider>
    </div>
  );
}
