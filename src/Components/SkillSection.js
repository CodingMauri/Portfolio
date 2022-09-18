import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import SkillsCarousel from "./SkillsCarousel";
  const SkillSectionStyle = styled.div`
    width: 100vw;
    min-height: 110vh;
    padding-top:4rem;
    h4 {
      font-size: 4rem;
      font-family: var(--font-title);
      text-shadow: 2px 2px 2px rgba(48, 45, 45, 0.25);
    }
    .skill-header{
      display:flex;
      justify-content:center;
      padding-top:2rem;
    }
  `;
  
export default function SkillSection({fadeLeft}) {
  return (
    <SkillSectionStyle>
      <motion.div 
      variants = {fadeLeft}
      initial = "hidden"
      whileInView = "visible"
      className="skill-header">
        <h4>My Skills</h4>
      </motion.div>
      <motion.div className="skills-carousel-container"
      variants={fadeLeft}
      initial = "hidden"
      whileInView="visible"
      >
        <SkillsCarousel />
      </motion.div>
      
    </SkillSectionStyle>
  );
}
