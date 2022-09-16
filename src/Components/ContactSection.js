import React from "react";
import ContactInfo from "./ContactInfo";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
const ContactSections = styled.div`
  padding: 12rem;
  .contactSection__wrapper {
    display: flex;
    gap: 4rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: white;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 3rem;
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 4rem 2rem 2rem;
    }
  }
`;

export default function ContactSection({fadeLeft}) {

    
  return (
    <ContactSections>
      <motion.div className="contact-heading"
      initial = {{opacity:0,y:-100}}
      animate = {{opacity:1, y:100}}
      transition = {{duration:2}}
      >
        <h1>Contact</h1>
        <h3>Lets Talk!</h3>
      </motion.div>
      <motion.section className="contactSection__wrapper"
      variants = {fadeLeft}
      initial = "hidden"
      animate = "visible"
      
      
      >
        <div className="left">
          <ContactInfo
            icon={<MdLocalPhone></MdLocalPhone>}
            text="(510)584-7366"
          />
          <ContactInfo icon={<MdEmail />} text="alvarengamauricio7@gmail.com" />
          <ContactInfo />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </motion.section>
    </ContactSections>
  );
}
