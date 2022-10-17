import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/me2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

import React from 'react'

const Contact = () => {
const form = useRef();


  const [buttonText, setButtonText] = useState('Send');


  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_n8rti03', 'template_03qvut8', form.current, '05-BaI8GMfnPSwdlG')
      .then((result) => {
        console.log(result.text);
        setButtonText("Sent")
        }, (error) => {
          console.log(error.text);
          setButtonText("Error")
      });
    };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" placeholder="Laste Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact ; 
