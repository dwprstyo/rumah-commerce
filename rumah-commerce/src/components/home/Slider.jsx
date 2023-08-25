import React, { useState, useEffect } from "react";
import "../../css/slider-home.css";

export const Slider = () => {
  const images = [
    "https://tpc.googlesyndication.com/simgad/5771376875928677348?",
    "https://tpc.googlesyndication.com/simgad/2097290266001896721?",
    "https://tpc.googlesyndication.com/simgad/1448706250370689741?",
  ];

  return (
    <div className="width-control">
      <div className="carousels">
        {images.map((item, index) => (
          <div key={index} className="slider-image">
            <img className="image-onslide" src={images[index]} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
