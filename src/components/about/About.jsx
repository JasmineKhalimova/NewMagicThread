import React from "react";
import "./about.css";
import "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title"> About Us</h2>
      <h3 className="section__subtitle">Company History</h3>
      <div className="about__container custom-container grid">
        <div className="about__data">
          <p className="about__description">
            Trend Health and Beauty Clinic/Salon were founded in 2016 and since
            then it has been at the forefront of the beauty industry in Cork
            City. We offer a wide range of treatments such as nonsurgical
            facials treatments, laser treatments, spa treatments, waxing,
            threading, manicures, and microdermabrasion along with our core
            business of pedicure treatments such as fungal and other infections.
          </p>
          <p>
            We always have our finger on the beauty pulse and are constantly
            adding new products and services to keep up with the constant
            evolution of the industry.
          </p>
        </div>
        <img
          src={require("../../assets/about.jpg")}
          alt="About Us"
          title="About Us"
          className="about__img"
          width="500"
          height="333"
        />
      </div>
    </section>
  );
};

export default About;
