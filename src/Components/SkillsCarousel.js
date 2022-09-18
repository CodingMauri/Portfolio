import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import SkillsItem from "./SkillsItem";
import styled from "styled-components"
import csslogo from "../assets/skillLogos/css-logo.svg";
import htmllogo from "../assets/skillLogos/html-logo.svg";
import jslogo from "../assets/skillLogos/js-logo.svg";
import reactlogo from "../assets/skillLogos/react-2.svg";
import mongologo from "../assets/skillLogos/mongodb.svg";
import nodeLogo from "../assets/skillLogos/nodejs-icon.svg"
const CarouselContainer = styled.div`
  padding:2rem;
  margin:2rem;
  padding-bottom:2.5rem;
  padding-top:1.5rem;
  
  border-radius:40px;
  height: auto;
  background-color: var(--color-2);
  @media screen and (max-width:500px){
      margin:10px;
  }
`;
export default function SkillsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll:2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const skillImages = [
    {
      name: "CSS",
      image: csslogo,
    },

    {
      name: "HTML",
      image: htmllogo,
    },
    {
      name: "JavaScript",
      image: jslogo,
    },
    {
      name: "React",
      image: reactlogo,
    },
    {
      name: "MongoDB",
      image: mongologo,
    },
    {
        name: "NodeJS",
        image: nodeLogo,
    }
  ];
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {skillImages.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
      </Slider>
    </CarouselContainer>
  );
}
