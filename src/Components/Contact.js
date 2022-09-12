import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {Container} from "react-bootstrap"

import ContactMap from "./ContactMap";

export const Contact = () => {

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yaz49wh",
        "template_b8ifn28",
        form.current,
        "MTQYOzcG_L3iE1IJ_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className = "contact-container">

    <form  className = "form" ref={form} onSubmit={sendEmail}>
      <label className = "user">Your Name</label>
      <input className = "user"type="text" name="user_name" />
      <label className = "user">Email</label>
      <input className = "user" type="email" name="user_email" />
      <label className = "user">Message</label>
      <textarea className = "user" name="message" />
      <input className = "user" type="submit" value="Send" />
    </form>
    
    </Container>
  );
};
