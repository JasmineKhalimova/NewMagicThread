import React, { useState } from "react";
import "./bestseller.css";

const BestSeller = () => {
  // Data for carousel items
  const carouselItems = [
    {
      id: 1,
      image: require("../../assets/shop/homepage-product/best-seller.jpg"),
      text: "First Item",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: require("../../assets/shop/homepage-product/best-seller2.jpg"),
      text: "Second Item",
      buttonText: "Discover",
    },
    {
      id: 3,
      image: require("../../assets/shop/homepage-product/best-seller3.jpg"),
      text: "Third Item",
      buttonText: "Explore",
    },
    {
      id: 4,
      image: require("../../assets/shop/homepage-product/best-seller4.jpg"),
      text: "Fourth Item",
      buttonText: "Get Started",
    },
    {
      id: 5,
      image: require("../../assets/shop/homepage-product/best-seller5.jpg"),
      text: "Fifth Item",
      buttonText: "Learn More",
    },
    {
      id: 6,
      image: require("../../assets/shop/homepage-product/best-seller6.jpg"),
      text: "Sixth Item",
      buttonText: "Discover",
    },
    {
      id: 7,
      image: require("../../assets/shop/homepage-product/best-seller7.jpg"),
      text: "Seventh Item",
      buttonText: "Explore",
    },
    {
      id: 8,
      image: require("../../assets/shop/homepage-product/best-seller8.jpg"),
      text: "Eighth Item",
      buttonText: "Get Started",
    },
    {
      id: 9,
      image: require("../../assets/shop/homepage-product/best-seller9.jpg"),
      text: "Ninth Item",
      buttonText: "Learn More",
    },
    {
      id: 10,
      image: require("../../assets/shop/homepage-product/best-seller.jpg"),
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
      <h2 className="section__title">Best Seller</h2>
      <h3 className="section__subtitle">Top selling products.</h3>
      <div className="bestseller-carousel">
        <div className="bestseller-carousel__items">
          {carouselItems.slice(startIndex, startIndex + 4).map((item) => (
            <div key={item.id} className="bestseller-carousel__item">
              <img src={item.image} alt={item.text} />
              <div className="bestseller-carousel__text">{item.text}</div>
              <button className="bestseller-carousel__button">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
        <button
          className="bestseller-carousel__nav carousel__nav--prev"
          onClick={handleClickPrev}>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bestseller-carousel__nav carousel__nav--next"
          onClick={handleClickNext}>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
