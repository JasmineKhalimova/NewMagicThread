import React, { useState, useEffect } from "react";
import "./testimonials.css";

const BestSeller = () => {
  // Data for carousel items
  const carouselItems = [
    {
      id: 1,
      image: require("../../assets/reviews/review1.png"),
      text: "I recently acquired my showcase dress through the incredible craftsmanship of Magic Thread Cork. Working with the staff at Magic Thread has been an absolute delight. The team, consisting of friendly and understanding individuals, not only grasped my vision effortlessly but also offered valuable suggestions to enhance the design. They meticulously crafted the dress from scratch, and I was exceedingly pleased with both the initial design sketch and the impeccable final outcome. Without a doubt, I'll be returning for future projects. I wholeheartedly recommend their services to anyone in search of exceptional craftsmanship.",
    },
    {
      id: 2,
      image: require("../../assets/reviews/review2.png"),
      text: "Friendly reasonable service",
    },
    {
      id: 3,
      image: require("../../assets/reviews/review3.png"),
      text: "I went to magic thread with a wedding dress and a complicated idea, they executed it fabulously, Gloria is so kind and patient. She truly designs/alters to fit the person and my dress was a success. i would absolutely recommend her to anyone look to do any alterations.",
    },
    {
      id: 4,
      image: require("../../assets/reviews/review4.png"),
      text: "Thought it was quite expensive, 40 Euro for taking up a hem and taking in two darts at the waist. Would have done the alterations myself only I was stuck and didn't have time.",
    },
    {
      id: 5,
      image: require("../../assets/reviews/review5.png"),
      text: "Got my wedding dress done there very happy over all. Price was very affordable and staff very nice but their english was not that great had to make sure got the picture to show what I wanted exactly.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="bestseller__container">
      <h2 className="section__title">Testimonials</h2>
      <h3 className="section__subtitle">Google reviews</h3>
      <img
        src={require("../../assets/reviews/google-stars.png")}
        alt="About Us"
        title="About Us"
        className="about__img"
        width="500"
        height="333"
      />
      <div className="carousel">
        <div className="carousel__items">
          {carouselItems.slice(startIndex, startIndex + 1).map((item) => (
            <div key={item.id} className="carousel__item">
              <img src={item.image} alt={item.text} />
              <div className="carousel__text">{item.text}</div>
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
