import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";



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
    <Container className="contact-container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="label">Your Name</label>
        <input className="input" type="text" name="user_name" />
        <label className="label">Email</label>
        <input className="input" type="email" name="user_email" />
        <label className="label">Message</label>
        <textarea className="text-area" name="message" />
        
          <input className="send-button" type="submit" value="Send" />
        
      </form>
    </Container>
  );
};
