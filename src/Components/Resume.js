import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  width: 100vw;
  height: 120vh;
  .resume {
    width: 50%;
    height: 100%;
    resize: vertical;
  }
`;
export default function Resume({ fadeleft }) {
  return (
    <ResumeContainer>
      
        <embed
          className="resume"
          type="application/pdf"
          src={require("../assets/Mauricio's Resume.pdf")}
        ></embed>
    
    </ResumeContainer>
  );
}
