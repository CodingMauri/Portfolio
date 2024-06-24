import React from "react";
import profile from "../assets/images/profile.jpg";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion"
const Hero = () => {


  const textAnimations = {
    initial: {
      x:-500,
      opacity:0,
      
    },
    animate: {
      x:0,
      opacity:1,
      transition: {
        duration: 1,
        transition: {type:"spring",stiffness:200,damping:500}
      }
    },
    
  }
  return (
    <div className="w-full h-full bg-primary flex items-center p-10 ">
      <div className="flex flex-col w-full leading-snug  justify-center  md:w-1/2 h-full md:p-10">
        <div className="flex md:absolute right-0 md:pt-4 md:w-3/6 h-full items-center justify-center">
          <img
            className=" w-[80%] md:w-1/2 aspect-square rounded-full border-4 border-secondary object-cover shadow-lg"
            src={profile}
            alt="nothin"
          />
        </div>
        <motion.h1 variants={textAnimations} initial = "initial" animate = "animate" className="text-secondary font-ronaldson text-[56px] pb-4">
          Hi I'm , <br></br> Mauricio
        </motion.h1 >
        <motion.h2 variants = {textAnimations} initial = "initial" animate = "animate" className = "text-secondary font-ronaldson text-3xl">

        <Typewriter options = {{
          strings: ["Software Developer", "React Developer", "Front-End Developer"],
          autoStart:true,
          loop:true,
          delay:300,
        }}  />
          </motion.h2>
         
        
        <motion.p variants = {textAnimations} initial = "initial" animate = "animate" className="text-md leading-normal pt-5 pb-10">
          As a software developer rooted in the innovative spirit of the Bay
          Area, I specialize in creating robust, scalable, and user-centric
          applications that drive business growth and enhance user experiences.
          Leveraging my expertise in cutting-edge technologies and agile
          methodologies, I am committed to delivering high-quality software
          solutions that not only meet but exceed client expectations.
          Passionate about continuous learning and collaboration, I thrive in
          dynamic environments where I can contribute to transformative projects
          and foster technological advancements. Let's build the future of
          technology, one line of code at a time.
        </motion.p>
      </div>
    </div>
  );
};
export default Hero;