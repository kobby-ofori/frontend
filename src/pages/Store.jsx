import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./Store.css";
import Product from "./Product";
import Footer from "../components/Footer";
import paymentmethod from "../images/paymentmethod.png";
import laptop from "../images/laptop.png";
import fastdelivery from "../images/fastdelivery.png";
import shopping from "../images/shopping.jpg";
import shopping1 from "../images/shopping1.jpg";
import shopping2 from "../images/shopping2.jpg";

const Store = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="Store-container shop">
      <Row>
        <Col sm={8}>
          <Carousel activeIndex={index} onSelect={handleSelect} style={{paddingTop:"30px"}}>
            <Carousel.Item>
              <img src={shopping} alt="" height={"100%"} width={"100%"} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={shopping1} alt="" height={"487ypx"} width={"100%"} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={shopping2} alt="" height={"487ypx"} width={"100%"} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <div className="Store-product">
          <Product />
        </div>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ width: "18rem" }} className="store-info-card">
            <Card.Body>
              <img src={laptop} alt="" style={{ paddingBottom: "15px" }} />
              <Card.Title>Shop Online</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="store-info-card">
            <Card.Body>
              <img
                src={paymentmethod}
                alt=""
                style={{ paddingBottom: "15px" }}
              />
              <Card.Title>Choose Payment Method</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="store-info-card">
            <Card.Body>
              <img
                src={fastdelivery}
                alt=""
                style={{ paddingBottom: "15px" }}
              />
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <hr />
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Store;
