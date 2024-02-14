import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jesus from "../../assets/Jesus.jpg";

function About() {
  return (
    <Container>
      <Row>
       
        <Col xs={12} md={12} lg={12} className="aboutMe">
          <p id="aboutMe">
            Hello! I'm Jesus Uriostegui, a full stack web developer fueled by a
            passion for technology and a relentless curiosity for understanding
            how things function. My journey into web development took off with
            the UCF coding bootcamp, where I've absorbed a wealth of knowledge
            and skills. I'm always eager to expand my horizons. Here's to the
            exciting path ahead as I continue to grow and evolve in the world of
            web development
          </p>
        </Col>
        <Col xs={8} md={8} lg={8}>
          <Image src={Jesus} id="Jesus" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
