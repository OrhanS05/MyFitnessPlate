import React, { useState, useEffect } from "react";
import "./Carousel.css";
import foodPicture1 from "../../assets/home/foodPicture1.jpg";
import foodPicture2 from "../../assets/home/foodPicture2.jpg";
import foodPicture3 from "../../assets/home/foodPicture3.jpg";

function Carousel() {
  const images = [foodPicture1, foodPicture2, foodPicture3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
