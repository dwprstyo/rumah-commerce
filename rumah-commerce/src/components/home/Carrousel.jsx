import React from "react";
import Banner1 from "../../assets/banner1.jpeg";
import Banner2 from "../../assets/banner2.jpeg";
import "../../css/carrousel.css";

import Carousel from "react-bootstrap/Carousel";

export const Carrousel = () => {
  return (
    <div className="custom-rounded-bottom">
      <Carousel className="d-flex justify-content-center" indicators={false}>
        <Carousel.Item interval={3000}>
          <img
            src={Banner1}
            alt="Company Logo"
            loading="lazy"
            className="gap-2"
            width="100%"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={Banner2}
            alt="Company Logo"
            loading="lazy"
            className="gap-2"
            width="100%"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
