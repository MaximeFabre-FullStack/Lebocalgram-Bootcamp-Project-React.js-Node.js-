/**
 * ProfilPage.js - Profil Page component
 */

/* Imports */
import React, { Component } from "react";
import "./style.css";
import Navbar from "../Home/Navbar/Navbar";
import BootstrapCarousel from "./BootstrapCarousel/BootstrapCarousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*component*/
class ProfilPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false,
      imageBlur: "gallery_img",
    };
  }

  /* Change state of showCarousel*/
  changeStateShow = () => {
    this.setState({ showCarousel: true });
    this.setState({ imageBlur: "img_blur" });
  };

  changeStateShow2 = () => {
    this.setState({ showCarousel: false });
    this.setState({ imageBlur: "gallery_img" });
  };

  displayCarousel = () => {
    if (this.state.showCarousel) {
      return <BootstrapCarousel></BootstrapCarousel>;
    }
  };

  displayCarouselButton = () => {
    if (this.state.showCarousel) {
      return (
        <button className="button_carousel" onClick={this.changeStateShow2}>
          x
        </button>
      );
    }
  };

  /* Effet images de la gallery */
  blurGallery = () => {
    if (this.state.showCarousel) {
      return;
    } else {
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="profil_page_container">
          <div className="header_profil_page">
            <div className="picture_container">
              <Image
                className="profil_picture"
                src="../../images/profil_picture.jpg"
                alt="profil p"
                rounded
              />
            </div>
            <p className="profil_Name">Mika du Bocal</p>
          </div>
          <div className="gallery_container">
            {this.displayCarousel()}
            {this.displayCarouselButton()}
            <Container fluid>
              <Row>
                <Col>
                  <img
                    className={this.state.imageBlur}
                    src="images/gallery1.jpg"
                    alt=" "
                    onClick={this.changeStateShow}
                  />
                </Col>
                <Col>
                  <img
                    className={this.state.imageBlur}
                    src="images/gallery2.jpg"
                    alt=" "
                    onClick={this.changeStateShow}
                  />
                </Col>
                <Col>
                  <img
                    className={this.state.imageBlur}
                    src="images/gallery3.jpg"
                    alt=" "
                    onClick={this.changeStateShow}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <img
                    className={this.state.imageBlur}
                    src="images/gallery4.jpg"
                    alt=" "
                    onClick={this.changeStateShow}
                  />
                </Col>
                <Col>
                  {" "}
                  <img
                    className={this.state.imageBlur}
                    src="images/gallery5.jpg"
                    alt=" "
                    onClick={this.changeStateShow}
                  />
                </Col>
                <Col>
                  {" "}
                  <img
                    className={this.state.imageBlur}
                    src="images/gallery6.jpg"
                    alt=" "
                    onClick={this.changeStateShow}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilPage;
