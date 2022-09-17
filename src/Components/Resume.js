import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Resume1 from "../assets/Resume1.png"
import Resume2 from "../assets/Resume2.png"


const ResumeContainer = styled.div`
    display:flex;
  justify-content: center;
  align-items: center;
  padding: 10rem ;
  margin-top:1rem;

  max-width:100vw;
  max-height:100vh;
  width: 100%;
  height: 100%;

@media only screen and (max-width:500px){
    margin:10rem;
    padding-right:10px;
    padding-left:10px;
}
`;
export default function Resume({ fadeleft }) {
  return (
    <ResumeContainer>
      
        <motion.img
     
        initial = {{opacity:0, x:-100}}
        animate = {{opacity:1,x:0}}
        transition = {{duration:2}}
          className="resume"
        
          src={Resume1}
        ></motion.img>
    
    </ResumeContainer>
  );
}
