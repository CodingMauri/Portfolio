import React from "react";
import ProjectCard from "./ProjectCard"
import art from "../assets/images/art.jpg";
import art2 from "../assets/images/art2.jpg";

import art3 from "../assets/images/art3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = ({mobile}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {

        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    
    ],
  };
  const projects = [
    {
      project: "Anonymous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: art,
    },
    {
      project: "Anonymous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: art2,
    },
    {
      project: "Anonymous",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: art3,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-10">
      <div className="w-full h-[100px] flex items-center">
        <h1 className="text-6xl font-sora font-bold">FEATURED WORK</h1>
      </div>
      <Slider
        className="w-full h-full items-center justify-center "
        {...settings}
      >
        {projects.map((project, index) => {
          return <ProjectCard mobile = {mobile} project={project} index={index} />;
        })}
      </Slider>
    </div>
  );
};
export default Project;