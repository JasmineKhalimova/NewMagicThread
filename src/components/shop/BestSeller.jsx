import React, { useState } from "react";
import "./bestseller.css";

const BestSeller = () => {
  const carouselItems = [
    {
      id: 1,
      image: require("../../assets/shop/homepage-product/best-seller.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 2,
      image: require("../../assets/shop/homepage-product/best-seller2.jpg"),
      title:
        "Red Ball-Gown/Princess V-Neck Floor-Length Satin Prom Dresses With Sequins ",
      text: "Fabric: Lace, Embellishment: Sequins, Silhouette: Ball-Gown/Princess, Length: Floor-Length, Neckline: V-Neck, Straps & Sleeves: Sleeveless, Back Style: Back Zip, Fully Lined: Yes, Built-In Bra: Yes, Boning: No",
      price: "€40",
      buttonText: "Check Availability",
    },
    {
      id: 3,
      image: require("../../assets/shop/homepage-product/best-seller3.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 4,
      image: require("../../assets/shop/homepage-product/best-seller6.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 5,
      image: require("../../assets/shop/homepage-product/best-seller5.jpg"),
      title:
        "Blue Ball-Gown/Princess V-Neck Floor-Length Satin Prom Dresses With Sequins ",
      text: "Fabric: Lace, Embellishment: Sequins, Silhouette: Ball-Gown/Princess, Length: Floor-Length, Neckline: V-Neck, Straps & Sleeves: Sleeveless, Back Style: Back Zip, Fully Lined: Yes, Built-In Bra: Yes, Boning: No",
      price: "€40",
      buttonText: "Check Availability",
    },
    {
      id: 6,
      image: require("../../assets/shop/homepage-product/best-seller4.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 7,
      image: require("../../assets/shop/homepage-product/best-seller7.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 8,
      image: require("../../assets/shop/homepage-product/best-seller8.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 9,
      image: require("../../assets/shop/homepage-product/best-seller9.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€60",
      buttonText: "Check Availability",
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
    <div className="bestseller__container spacing">
      <h2 className="section__title">Best Seller</h2>
      <h3 className="section__subtitle">Top selling products.</h3>
      <div className="bestseller-carousel">
        <div className="bestseller-carousel__items">
          {carouselItems.slice(startIndex, startIndex + 4).map((item) => (
            <div key={item.id} className="bestseller-carousel__item">
              <img title="best sellers" src={item.image} alt={item.text} />
              <div className="bestseller-carousel__title">{item.title}</div>
              <div className="bestseller-carousel__text">{item.text}</div>
              <div className="bestseller-carousel__inner">
                <span className="bestseller-carousel__id">ID: {item.id}</span>
                <span className="bestseller-carousel__price">{item.price}</span>
              </div>
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
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bestseller-carousel__nav carousel__nav--next"
          onClick={handleClickNext}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
