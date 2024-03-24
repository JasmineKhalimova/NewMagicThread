import React, { useState } from "react";
import "./bestseller.css";

const BestSeller = () => {
  // Data for carousel items
  const carouselItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      text: "First Item",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      text: "Second Item",
      buttonText: "Discover",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      text: "Third Item",
      buttonText: "Explore",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      text: "Fourth Item",
      buttonText: "Get Started",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      text: "Fifth Item",
      buttonText: "Learn More",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      text: "Sixth Item",
      buttonText: "Discover",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      text: "Seventh Item",
      buttonText: "Explore",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150",
      text: "Eighth Item",
      buttonText: "Get Started",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/150",
      text: "Ninth Item",
      buttonText: "Learn More",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/150",
      text: "Tenth Item",
      buttonText: "Discover",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, carouselItems.length - 4)
    );
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="bestseller__container">
      <div className="carousel">
        <div className="carousel__items">
          {carouselItems.slice(startIndex, startIndex + 4).map((item) => (
            <div key={item.id} className="carousel__item">
              <img src={item.image} alt={item.text} />
              <div className="carousel__text">{item.text}</div>
              <button className="carousel__button">{item.buttonText}</button>
            </div>
          ))}
        </div>
        <button
          className="carousel__nav carousel__nav--prev"
          onClick={handleClickPrev}>
          Prev
        </button>
        <button
          className="carousel__nav carousel__nav--next"
          onClick={handleClickNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
