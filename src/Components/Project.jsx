/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ProjectCard from "./ProjectCard"
import art from "../assets/images/art.jpg";
import vfw from "../assets/images/vfw.png"
import retrodash from "../assets/images/retrodash.png"
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
      project: "Website for VFW",
      description: "I developed a website for a local Veterans of Foreign Wars (VFW) post, working directly with the client to understand and meet their specific needs. The site was supposed to serve as an online hub for the veterans’ community, providing information, event updates, and resources. I implemented a responsive design and ensured the platform was easy to navigate, meeting both the client’s and users’ expectations.",
      img: vfw,
      github: "https://github.com/CodingMauri/vfwSite"
    },
    {
      project: "RetroDash",
      description: `Built an infinite runner game using HTML, CSS, JavaScript, and Three.js, incorporating 3D modeling with Blender.
      Designed the game architecture using object-oriented programming for scalable and maintainable code.
      `,
      img: retrodash,
      github:"https://github.com/runner-runner224/runner-react/tree/main/src/components",
      link:"https://retrodash.netlify.app/",
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