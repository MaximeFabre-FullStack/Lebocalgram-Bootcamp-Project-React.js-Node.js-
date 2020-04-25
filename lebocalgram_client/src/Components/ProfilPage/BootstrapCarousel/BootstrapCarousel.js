import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./style.css";

class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid w_60p carousel_container">
          <Carousel interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery1.jpg"
                alt="1aaaa"
              />
              <Carousel.Caption>
                <h3>.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery2.jpg"
                alt="aaaa2"
              />
              <Carousel.Caption>
                <h3>.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery3.jpg"
                alt="3aaaa"
              />
              <Carousel.Caption>
                <h3>.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery4.jpg"
                alt="3aaaa"
              />
              <Carousel.Caption>
                <h3>.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery5.jpg"
                alt="3aaaa"
              />
              <Carousel.Caption>
                <h3>.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery6.jpg"
                alt="3aaaa"
              />
              <Carousel.Caption>
                <h3>.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default BootstrapCarousel;
