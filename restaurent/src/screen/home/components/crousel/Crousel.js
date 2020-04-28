import React from "react";
import { Col, Row, Nav, Container, NavLink, Carousel } from 'react-bootstrap'
import './Carousel.scss';
import chole from '../../../../img/chole.png'
import samosa from '../../../../img/samosa.png'
import wada from '../../../../img/wada.png'
import mithai from '../../../../img/mithai.png'
import tea from '../../../../img/tea.png'
import phone from '../../../../img/phone.png'
const CarouselMarkup = (props) => {
  return (
    <div className="Carousel-component" >
      <Row className="contact">


        <Col md="4" className="phone-con">
          <img src={phone}
            height={42}
            width={43}
          />
        </Col >

        <Col md="3">
          <span>Contact</span>
          <br />
          <a href="tel: 9755148637">+919755148637</a>
        </Col>
      </Row>
      <Carousel className="content">
        <Carousel.Item>
          <img src={chole}
            height={400}
            width={600}
          />
        </Carousel.Item>
        <Carousel.Item className="samosa">
          <img src={samosa}
            height={400}
            width={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={wada}
            height={400}
            width={600}
          />
        </Carousel.Item>

        <Carousel.Item className="samosa">
          <img src={mithai}
            height={400}
            width={600}
          />
        </Carousel.Item>
        <Carousel.Item >
          <img src={tea}
            height={400}
            width={600}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default CarouselMarkup;