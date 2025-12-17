import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const images = [
   "/assets/banner/b1.png",
    "/assets/banner/b2.png",
    "/assets/banner/b3.png",
    "/assets/banner/b4.png",
    "/assets/banner/b5.png",
    "/assets/banner/b6.png",
    "/assets/banner/b6.png"

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-section">

      <button className="nav-arrow left" onClick={prevSlide}>❮</button>

      <img src={images[index]} className="banner-img" alt="banner" />

      <button className="nav-arrow right" onClick={nextSlide}>❯</button>

      <div className="bottom-scroll">
        {images.map((_, i) => (
          <div
            key={i}
            className={`scroll-bar ${i === index ? "active" : ""}`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default Banner;
