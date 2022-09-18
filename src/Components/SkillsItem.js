import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const SkillItemContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;

  .skill-name {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
  h3 {
    font-size: 1.5rem;
    font-family: var(--font-title);
    text-shadow: 2px 2px 2px rgba(48, 45, 45, 0.25);
    padding-bottom: 70px;
  }
  .skill-img-cntnr {
    max-width: 25vw;
    max-height: 25vh;
  }
  img {
    width: auto;
    height: auto;
  }
`;
export default function SkillsItem({ name, image }) {
  return (
    <SkillItemContainer>
      <div className="skill-name">
        <h3>{name}</h3>
        <div className="skill-image-cntnr">
          <motion.img
            whileHover={{ scale: 1.8 }}
            src={image}
            alt="logo"
          ></motion.img>
        </div>
      </div>
    </SkillItemContainer>
  );
}
