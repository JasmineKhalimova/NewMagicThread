import React, { useState, useEffect } from "react";
import "./bestseller.css";

const BestSeller = () => {
  const carouselItems = [
    {
      id: 1,
      image: require("../../assets/shop/homepage-product/best-seller.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€300",
      salep: "€65",
      buttonText: "Check Availability",
    },
    {
      id: 2,
      image: require("../../assets/shop/homepage-product/best-seller2.jpg"),
      title:
        "Red Ball-Gown/Princess V-Neck Floor-Length Satin Prom Dresses With Sequins ",
      text: "Fabric: Lace, Embellishment: Sequins, Silhouette: Ball-Gown/Princess, Length: Floor-Length, Neckline: V-Neck, Straps & Sleeves: Sleeveless, Back Style: Back Zip, Fully Lined: Yes, Built-In Bra: Yes, Boning: No",
      price: "€250",
      salep: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 3,
      image: require("../../assets/shop/homepage-product/best-seller3.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€450",
      salep: "€70",
      buttonText: "Check Availability",
    },
    {
      id: 4,
      image: require("../../assets/shop/homepage-product/best-seller6.jpg"),
      title: "A-line Scoop Sweep Train Chiffon Lace Wedding Dress",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: Scoop,Straps & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: Yes, Collection: Classic ",
      price: "€550",
      salep: "€80",
      buttonText: "Check Availability",
    },
    {
      id: 5,
      image: require("../../assets/shop/homepage-product/best-seller5.jpg"),
      title:
        "Blue Ball-Gown/Princess V-Neck Floor-Length Satin Prom Dresses With Sequins ",
      text: "Fabric: Lace, Embellishment: Sequins, Silhouette: Ball-Gown/Princess, Length: Floor-Length, Neckline: V-Neck, Straps & Sleeves: Sleeveless, Back Style: Back Zip, Fully Lined: Yes, Built-In Bra: Yes, Boning: No",
      price: "€250",
      salep: "€60",
      buttonText: "Check Availability",
    },
    {
      id: 6,
      image: require("../../assets/shop/homepage-product/best-seller4.jpg"),
      title:
        "Purple Mermaid V-Neck Sweep Train Lace Tulle Dresses With Sequins",
      text: "Silhouette: A-line, Length: Sweep Train, Neckline: V-Neck & Sleeves: 3/4 Sleeve, Back Style: button, Fully Lined: Yes, Built-In Bra: Yes, Boning: No, Collection: Classic",
      price: "€150",
      salep: "€40",
      buttonText: "Check Availability",
    },
    {
      id: 7,
      image: require("../../assets/shop/homepage-product/best-seller7.jpg"),
      title: "Purple Floor-Length Sleevless Satin Dresses",
      text: "Fabric: Stretch Satin, Silhouette: A-line, Length: Floor-Length, Neckline: Cowl, Scoop, Straps & Sleeves: Sleeveless, Fully Lined: Yes, Built-In Bra: Yes, Boning: No, Back Style: Back Zip, V Back",
      price: "€90",
      salep: "€30",
      buttonText: "Check Availability",
    },
    {
      id: 8,
      image: require("../../assets/shop/homepage-product/best-seller8.jpg"),
      title: "Black/Silver A-line Sweetheart Floor-Length Satin Dresses ",
      text: "Fabric: Satin, Silhouette: A-line, Length: Floor-Length, Neckline: Sweetheart, Sleeves: Sleeveless, Fully Lined: Yes, Built-In Bra: Yes, Boning: No, Back Style: Back Zip, V Back",
      price: "€80",
      salep: "€30",
      buttonText: "Check Availability",
    },
    {
      id: 9,
      image: require("../../assets/shop/homepage-product/best-seller9.jpg"),
      title: "Cream/Blue Floor-Length Sleevless Satin Dresses",
      text: "Fabric: Stretch Satin, Silhouette: A-line, Length: Floor-Length, Neckline: Cowl, Scoop, Straps & Sleeves: Sleeveless, Fully Lined: Yes, Built-In Bra: No, Boning: No, Back Style: Back Zip, V Back",
      price: "€60",
      salep: "€30",
      buttonText: "Check Availability",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const handleClickNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, carouselItems.length - itemsPerPage)
    );
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 4 : 2);
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bestseller__container section custom-container" id="shop">
      <h2 className="section__title">Best Seller</h2>
      <h3 className="section__subtitle">
        Clearance alert! We're liquidating our entire old inventory. Enjoy
        discounts of 70% or more on all items.
      </h3>
      <div className="bestseller-carousel">
        <div className="bestseller-carousel__items">
          {carouselItems
            .slice(startIndex, startIndex + itemsPerPage)
            .map((item) => (
              <div key={item.id} className="bestseller-carousel__item">
                <span className="bestseller-carousel__sale">Sale</span>
                <img title="best sellers" src={item.image} alt={item.text} />
                <div className="bestseller-carousel__title">{item.title}</div>
                <div className="bestseller-carousel__text">{item.text}</div>
                <div className="bestseller-carousel__inner">
                  <span className="bestseller-carousel__id">
                    Product ID: {item.id}
                  </span>
                  <div className="bestseller-carousel__prices">
                    <span className="bestseller-carousel__salep">
                      {item.salep}
                    </span>
                    <span className="bestseller-carousel__price">
                      {item.price}
                    </span>
                  </div>
                </div>
                <button className="button">
                  <a className="bestseller-carousel__button" href="#contact">
                    {item.buttonText}
                  </a>
                </button>
              </div>
            ))}
        </div>
        <button
          className="bestseller-carousel__nav bestseller-carousel__nav--prev"
          onClick={handleClickPrev}>
          <svg
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
          className="bestseller-carousel__nav bestseller-carousel__nav--next"
          onClick={handleClickNext}>
          <svg
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
